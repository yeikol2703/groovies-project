"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/catalog", label: "CATALOGO" },
  { href: "/galery", label: "GALERIA" },
  { href: "/custom", label: "PERSONALIZADO" },
  { href: "/testimonials", label: "TESTIMONIOS" },
  { href: "/faq", label: "PREGUNTAS" },
  { href: "/contact", label: "CONTACTO" },
];

// Example categories - adjust links/labels as needed
const categories = [
  { href: "/catalog/camisetas", label: "Camisetas" },
  { href: "/catalog/gorras", label: "Gorras" },
  { href: "/catalog/bolsos", label: "Bolsos" },
  { href: "/catalog/accesorios", label: "Accesorios" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" href="/">
          GrooviesStore
        </Link>

        <div className="nav-links">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            // Render a dropdown for the catalog item
            if (item.href === "/catalog") {
              return (
                <div className="nav-item has-dropdown" key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link hover-underline ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>

                  <div className="dropdown" aria-label="Categorias">
                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="dropdown-item"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link hover-underline ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          className="nav-cta"
          href={process.env.NEXT_PUBLIC_WA_LINK ?? "https://wa.me/50600000000"}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
