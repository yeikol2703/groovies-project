"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const nav = [
  { href: "/catalog", label: "CATALOGO" },
  { href: "/galery", label: "GALERIA" },
  { href: "/custom", label: "PERSONALIZADO" },
  { href: "/testimonials", label: "TESTIMONIOS" },
  { href: "/faq", label: "PREGUNTAS" },
  { href: "/contact", label: "CONTACTO" },
];

const categories = [
  { href: "/catalog?cat=shirt", label: "CAMISAS" },
  { href: "/catalog?cat=hoodie", label: "SUETERS" },
  { href: "/catalog?cat=patch", label: "PARCHES" },
  { href: "/catalog?cat=other", label: "OTROS" },
];

export default function Header() {
  const pathname = usePathname();
  const waLink = useMemo(
    () => process.env.NEXT_PUBLIC_WA_LINK ?? "https://wa.me/50600000000",
    []
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCatOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" href="/">
          <img src="/images/banner/logo.png" alt="GrooviesStore" className="logo-img" />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            if (item.href === "/catalog") {
              return (
                <div className="nav-item has-dropdown" key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link hover-underline ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>

                  <div className="dropdown " aria-label="Categorias">
                    {categories.map((cat) => (
                      <Link key={cat.href} href={cat.href} className="dropdown-item ">
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

        {/* Desktop CTA */}
        <a className="nav-cta-wrapper nav-cta-desktop" href={waLink} target="_blank" rel="noreferrer">
          <SocialIcon
            url={waLink}
            bgColor="var(--color-success)"
            fgColor="var(--color-light)"
            style={{ height: 36, width: 36 }}
            target="_blank"
          />
          <span className="nav-cta-text">WhatsApp</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="nav-hamburger"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {isMenuOpen && (
        <>
          <button
            type="button"
            className="mobile-overlay"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="mobile-drawer" role="dialog" aria-label="Mobile menu">
            <div className="mobile-drawer-head">
              <span className="mobile-drawer-title">MENU</span>
              <button
                type="button"
                className="icon-btn"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-links">
              {/* Catalog with collapsible categories */}
              <div className="mobile-item">
                <button
                  type="button"
                  className={`mobile-link mobile-link-btn hover-underline ${pathname === "/catalog" ? "active" : ""}`}
                  onClick={() => setIsCatOpen((v) => !v)}
                  aria-expanded={isCatOpen}
                >
                  <span>CATALOGO</span>
                  <ChevronDown size={18} className={`mobile-chevron ${isCatOpen ? "open" : ""}`} />
                </button>

                {isCatOpen && (
                  <div className="mobile-submenu " aria-label="Catalog categories">
                    <Link
                      href="/catalog"
                      className={`mobile-sublink hover-underline ${pathname === "/catalog" ? "active" : ""}`}
                    >
                      VER TODO
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className={`mobile-sublink hover-underline ${pathname === cat.href ? "active" : ""}`}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Rest links (skip /catalog because handled above) */}
              {nav
                .filter((x) => x.href !== "/catalog")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-link hover-underline ${pathname === item.href ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>

            <div className="mobile-cta">
              <a className="nav-cta-wrapper" href={waLink} target="_blank" rel="noreferrer">
                <SocialIcon
                  url={waLink}
                  bgColor="var(--color-success)"
                  fgColor="var(--color-light)"
                  style={{ height: 40, width: 40 }}
                  target="_blank"
                />
                <span className="nav-cta-text">WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
