import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">GrooviesStore</div>
          <p className="footer-tagline">
            Bordados exclusivos hechos <br />
            en Costa Rica.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link href="/">Inicio</Link>
          <Link href="/catalog">Catalogo</Link>
          <Link href="/custom">Personalizado</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        {/* Social */}
        <div className="footer-social">
          <a
            href="https://wa.me/50600000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} GrooviesStore. All rights reserved.
      </div>
    </footer>
  );
}
