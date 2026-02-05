import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { waLink, igLink, fbLink } from "@/lib/env";

const SOCIAL_ICON_SIZE = 40;

/**
 * Site footer: brand, nav links, social icons (WhatsApp, Instagram, Facebook).
 * All social URLs come from env (NEXT_PUBLIC_WA_LINK, etc.).
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Groovies Bordados</div>
          <p className="footer-tagline">
            Bordados exclusivos hechos <br />
            en Costa Rica.
          </p>
        </div>

        <nav className="footer-nav">
          <Link href="/">Inicio</Link>
          <Link href="/catalog">Catalogo</Link>
          <Link href="/custom">Personalizado</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        <div className="footer-social">
          <SocialIcon
            url={waLink}
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-whatsapp)"
            style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
          />
          <SocialIcon
            url={igLink}
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-instagram)"
            style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
          />
          <SocialIcon
            url={fbLink}
            bgColor="var(--color-dark-1)"
            fgColor="var(--color-facebook)"
            style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
          />
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Groovies. All rights reserved.
      </div>
    </footer>
  );
}
