import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error("Cloudinary env missing:", { cloudName: !!cloudName, apiKey: !!apiKey, apiSecret: !!apiSecret });
      return NextResponse.json(
        { error: "Gallery not configured. Set CLOUDINARY_* env variables." },
        { status: 500 }
      );
    }

    // Prefijo = carpeta en Cloudinary. El public_id debe empezar con esto (ej: groovies/camisas/foto).
    const prefixRaw = process.env.CLOUDINARY_GALLERY_PREFIX ?? "groovies/";
    const prefix = prefixRaw.trim() ? prefixRaw.replace(/\/?$/, "/") : "";
    const maxPerPage = 500;
    type Resource = { asset_id?: string; secure_url?: string; public_id?: string; context?: { custom?: Record<string, string> }; metadata?: { group?: string, category?: string; price?: number, description?: string, search?: string } };
    let allResources: Resource[] = [];
    let nextCursor: string | undefined;

    if (prefix) {
      do {
        const result = await cloudinary.api.resources({
          type: "upload",
          resource_type: "image",
          prefix,
          max_results: maxPerPage,
          next_cursor: nextCursor,
          metadata: true,
        });
        const resources = result?.resources ?? [];
        allResources = allResources.concat(resources);
        nextCursor = result?.next_cursor ?? undefined;
      } while (nextCursor);
    }

    // Si con prefijo no hay nada, el public_id puede no incluir la carpeta. Pedimos todo para que al menos cargue.
    let usedFallback = false;
    if (allResources.length === 0) {
      usedFallback = true;
      nextCursor = undefined;
      do {
        const result = await cloudinary.api.resources({
          type: "upload",
          resource_type: "image",
          max_results: maxPerPage,
          next_cursor: nextCursor,
          metadata: true,
        });
        const resources = result?.resources ?? [];
        allResources = allResources.concat(resources);
        nextCursor = result?.next_cursor ?? undefined;
      } while (nextCursor);
    }

    const resources =
      prefix && !usedFallback
        ? allResources.filter((item) => (item.public_id ?? "").startsWith(prefix))
        : allResources;

    // Filtrar solo recursos del grupo "groovies"
    const filteredResources = resources.filter((item: Resource) => {
      const group = item.metadata?.group ?? item.context?.custom?.group ?? "";
      return group.toLowerCase().includes("groovies");
    });

    const images = filteredResources.map((item: Resource) => {
      const parts = (item.public_id ?? "").split("/");
      const categoryFromFolder = parts.length >= 2 ? parts[1] : null;
      const custom = item.context?.custom ?? {};
      return {
        id: item.asset_id ?? item.public_id ?? "",
        url: item.secure_url,
        publicId: item.public_id,
        category: item.metadata?.category ?? custom.category ?? categoryFromFolder,
        price: item.metadata?.price ?? (custom.price != null ? Number(custom.price) : null),
        group: item.metadata?.group ?? custom.group ?? null,
        description: item.metadata?.description ?? custom.description ?? null,
        search: item.metadata?.search ?? custom.search ?? null,
      };
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary error:", error);
    const message = error instanceof Error ? error.message : "Failed to load gallery";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}