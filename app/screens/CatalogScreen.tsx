"use client";

import { useEffect, useMemo, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CatalogItem = {
  search: string;
  id: string;
  url: string;
  publicId?: string;
  category?: string; // expected: camisas | parches | sueters | otros
  price?: number;
  description?: string;
  group?: string;
};

const categoryLabels: Record<string, string> = {
  patch: "PARCHES",
  shirt: "CAMISAS",
  hoodie: "SUETERS",
  other: "OTROS",
};

const normalize = (v?: string | null) => (v ?? "").trim().toLowerCase();

export default function CatalogScreen() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catParam = normalize(searchParams.get("cat")); // <- value, not object

  const waLink = useMemo(
    () => process.env.NEXT_PUBLIC_WA_LINK ?? "https://wa.me/50600000000",
    []
  );

  // Sync state with URL (?cat=...)
  useEffect(() => {
    if (!catParam) {
      setSelectedCategory("all");
      return;
    }
    setSelectedCategory(catParam);
  }, [catParam]);

  // Load items once
  useEffect(() => {
    fetch("/api/gallery")
      .then((res) =>
        res.json().then((data) => ({ ok: res.ok, status: res.status, data }))
      )
      .then(({ ok, data }) => {
        if (!ok) {
          setError(
            typeof data?.error === "string"
              ? data.error
              : "Error al cargar el catálogo"
          );
          setItems([]);
          setFilteredItems([]);
          return;
        }

        const list = Array.isArray(data) ? (data as CatalogItem[]) : [];
        setItems(list);
        setFilteredItems(list);
        setError(null);
      })
      .catch((err) => {
        console.error("Catalog fetch error:", err);
        setError("Error de conexión. Revisa la consola.");
        setItems([]);
        setFilteredItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter items (category + search)
  useEffect(() => {
    let result = items;

    if (selectedCategory !== "all") {
      result = result.filter(
        (item) => normalize(item.category) === normalize(selectedCategory)
      );
    }

    if (searchTerm.trim()) {
      const s = normalize(searchTerm);

      result = result.filter((item) => {
        const desc = normalize(item.description);
        const cat = normalize(item.category);
        const label = categoryLabels[cat]?.toLowerCase() ?? "";

        return desc.includes(s) || cat.includes(s) || label.includes(s);
      });
    }

    setFilteredItems(result);
  }, [items, selectedCategory, searchTerm]);

  const uniqueCategories = Array.from(
    new Set(items.map((i) => normalize(i.category)).filter(Boolean))
  );

  const closeModal = () => setSelectedItem(null);

  const setCategoryAndUrl = (cat: string) => {
    const normalized = normalize(cat);

    setSelectedCategory(normalized || "all");

    if (!normalized || normalized === "all") {
      router.push(pathname); // remove query
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("cat", normalized);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="section">
      <div className="section-head center">
        <h1 className="page-title">CATÁLOGO</h1>
        <p className="page-subtitle">
          Explora nuestros productos de bordado y personalizados.
        </p>

        <div className="catalog-controls">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
          />

          <div className="catalog-filters">
            <button
              className={`filter-btn hover-underline ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setCategoryAndUrl("all")}
            >
              TODOS
            </button>

            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn hover-underline ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setCategoryAndUrl(cat)}
              >
                {categoryLabels[cat] || cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {loading && <p>Cargando productos...</p>}
        {error && <p className="catalog-error">{error}</p>}

        {!loading && !error && filteredItems.length === 0 && (
          <p className="catalog-empty">
            {searchTerm || selectedCategory !== "all"
              ? "No se encontraron productos con esos criterios."
              : "No hay productos disponibles."}
          </p>
        )}
      </div>

      <div className="catalog-grid">
        {filteredItems
          .filter((item) => item?.url)
          .map((item) => {
            const cat = normalize(item.category);
            return (
              <div
                key={item.id}
                className="catalog-card"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.url}
                  alt={item.description ?? "Producto Groovies"}
                  loading="lazy"
                />

                {(item.category || item.price) && (
                  <div className="catalog-meta hover-underline">
                    {cat && (
                      <span className="catalog-category">
                        {categoryLabels[cat] || cat.toUpperCase()}
                      </span>
                    )}
                    {typeof item.price === "number" && item.price > 0 && (
                      <span className="catalog-price">₡{item.price}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.description ?? "Producto"}
                />
              </div>

              <div className="modal-details">
                <h2 className="modal-title">
                  {selectedItem.search || "Producto 100% Groovies"}
                </h2>

                {selectedItem.description && (
                  <div className="modal-info">
                    <span className="modal-label">Descripción:</span>
                    <span className="modal-value">{selectedItem.description}</span>
                  </div>
                )}

                {selectedItem.category && (
                  <div className="modal-info">
                    <span className="modal-label">Categoría:</span>
                    <span className="modal-value">
                      {categoryLabels[normalize(selectedItem.category)] ||
                        selectedItem.category}
                    </span>
                  </div>
                )}

                {typeof selectedItem.price === "number" && selectedItem.price > 0 && (
                  <div className="modal-info">
                    <span className="modal-label">Precio:</span>
                    <span className="modal-value modal-price">
                      ₡{selectedItem.price}
                    </span>
                  </div>
                )}

                <div className="modal-info">
                  <span className="modal-label">Disponible:</span>
                  <span className="modal-value modal-id">SÍ</span>
                </div>

                <div className="modal-info">
                  <span className="modal-label">Método de pago:</span>
                  <span className="modal-value modal-id">
                    Transferencia, Sinpe, Tarjeta, Efectivo
                  </span>
                </div>

                <a
                  className="nav-cta modal-action-btn"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="nav-cta-text">ORDENAR</span>
                  <SocialIcon
                    url={waLink}
                    bgColor="var(--color-success)"
                    fgColor="var(--color-light)"
                    style={{ height: 40, width: 40 }}
                    target="_blank"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
