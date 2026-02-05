import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">Groovies Bordados</div>
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
          <SocialIcon
            url="https://wa.me/50600000000"
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-whatsapp)"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://instagram.com/"
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-instagram)"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://facebook.com/"
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-facebook)"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Groovies. All rights reserved.
      </div>
    </footer>
  );
}
