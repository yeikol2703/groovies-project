"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  id: string;
  url: string;
  category?: string;
  price?: number;
  description?: string;
};

enum categories {
  patch = "PARCHES",
  shirt = "CAMISAS",
  hoodie = "SUETERS",
  other = "PROXIMAMENTE",
}

/**
 * Gallery page: fetches /api/gallery (Cloudinary), grid of images with category/price.
 */
export default function GaleryScreen() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json().then((data) => ({ ok: res.ok, status: res.status, data })))
      .then(({ ok, status, data }) => {
        if (!ok) {
          setError(typeof data?.error === "string" ? data.error : "Error al cargar la galería");
          setItems([]);
          return;
        }
        const list = Array.isArray(data) ? data : [];
        setItems(list);
        setError(null);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
        setError("Error de conexión. Revisa la consola.");
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="section">
      <div className="section-head center">
      <h1 className="page-title">GALERÍA</h1>
      <p className="page-subtitle">
        Algunos de nuestros trabajos recientes en bordado y personalizados.
      </p>

      {loading && <p>Cargando imágenes...</p>}
      {error && <p className="gallery-error">{error}</p>}
      {!loading && !error && items.length === 0 && (
        <p className="gallery-empty">No hay imágenes aún. Sube fotos a la carpeta &quot;groovies&quot; en tu cuenta de Cloudinary.</p>
      )}
</div>
      <div className="gallery-grid">
        {items.filter((img) => img?.url).map((img) => (
          <div key={img.id} className="gallery-card">
            <img
              src={img.url}
              alt={img.description ?? "Groovies embroidery"}
              loading="lazy"
            />

            {(img.category || img.price) && (
              <div className="gallery-meta">
                {img.category && (
                  <span className="gallery-category">{categories[img.category as keyof typeof categories]}</span>
                )}
                {img.price && (
                  <span className="gallery-price">₡{img.price}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
