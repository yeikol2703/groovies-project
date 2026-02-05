import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import CategoryCarousel, { CategoryItem } from "@/components/ui/CategoryCarousel";
import { waLink, igLink, fbLink } from "@/lib/env";
import { PROCESS, TESTIMONIALS } from "@/lib/constants";

/** Home carousel categories (images + catalog links). */
const HOME_CATEGORIES: CategoryItem[] = [
  {
    title: "CAMISAS",
    subtitle: "Categoria",
    href: "/catalog?cat=shirt",
    image: "/images/categories/manekin1.png",
    image2: "/images/categories/camisa.png",
  },
  {
    title: "SUETERES",
    subtitle: "Categoria",
    href: "/catalog?cat=hoodie",
    image: "/images/categories/manekin2.png",
    image2: "/images/categories/sueter2.png",
  },
  {
    title: "PARCHES",
    subtitle: "Categoria",
    href: "/catalog?cat=patch",
    image: "/images/categories/parches.png",
    image2: "/images/categories/parche.png",
  },
  {
    title: "PROXIMAMENTE",
    subtitle: "Categoria",
    href: "/catalog?cat=other",
    image: "/images/categories/next.png",
    image2: "/images/categories/next2.png",
  },
];

/** Instagram grid image paths (follow-us section). */
const IG_GRID_IMAGES = [
  "/images/categories/gamabunta.gif",
  "/images/categories/ig2.png",
  "/images/categories/ig5.png",
  "/images/categories/ig3.png",
  "/images/categories/cloth.gif",
  "/images/categories/ig4.png",
];

const HERO_SOCIAL_SIZE = 60;
const FOLLOW_SOCIAL_SIZE = 40;

/**
 * Home page: hero, category carousel, follow-us (IG grid), process steps, testimonials.
 * Social links and process/testimonials content come from env and shared constants.
 */
export default function HomeScreen() {

  return (
    <main>
      {/* HERO */}
      <section className="section hero hero-centered" id="top">
        <div className="hero-content">
            <div className="wave-container">
            <h1 className="wave-text">
              <span>F</span><span>L</span><span>A</span><span>S</span><span>H</span>
              <span> </span>
              <span>S</span><span>A</span><span>L</span><span>E</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            Bordados exclusivos hechos
            <br />
            en Costa Rica.
          </p>

   
          <div className="social-links social-links-centered hero-social-links">
            <SocialIcon
              url={igLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-instagram)"
              style={{ height: HERO_SOCIAL_SIZE, width: HERO_SOCIAL_SIZE }}
            />
            <SocialIcon
              url={fbLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-facebook)"
              style={{ height: HERO_SOCIAL_SIZE, width: HERO_SOCIAL_SIZE }}
            />
            <SocialIcon
              url={waLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-whatsapp)"
              style={{ height: HERO_SOCIAL_SIZE, width: HERO_SOCIAL_SIZE }}
            />
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="section" id="shop-by-category">
        <CategoryCarousel items={HOME_CATEGORIES} />
      </section>

      {/* FOLLOW US */}
      <section className="section" id="follow-us">
        <div className="section-head center">
          <h2 className="page-title">SIGUENOS</h2>
          <p className="page-subtitle">
            Nuevos lanzamientos, trabajos personalizados y contenido exclusivo en nuestras redes.
          </p>

          <div className="social-links social-links-centered">
            <SocialIcon
              url={igLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-instagram)"
              style={{ height: FOLLOW_SOCIAL_SIZE, width: FOLLOW_SOCIAL_SIZE }}
            />
            <SocialIcon
              url={fbLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-facebook)"
              style={{ height: FOLLOW_SOCIAL_SIZE, width: FOLLOW_SOCIAL_SIZE }}
            />
            <SocialIcon
              url={waLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-whatsapp)"
              style={{ height: FOLLOW_SOCIAL_SIZE, width: FOLLOW_SOCIAL_SIZE }}
            />
          </div>
        </div>

        <div className="ig-grid">
          {IG_GRID_IMAGES.map((src, idx) => (
            <a
              key={`${src}-${idx}`}
              className="ig-tile"
              href={igLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Instagram"
            >
              {/* si usás next/image aquí, mantenelo, pero no es obligatorio */}
              {/* <Image src={src} alt="Instagram preview" fill className="ig-img" /> */}
              <img src={src} alt="Instagram preview" className="ig-img-static" />
              <div className="overlay-icons" aria-hidden="true">
                <span className="icon icon-like" title="Like">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 21s-7.5-4.9-9.2-8.1C1.6 9.9 4 6 7.5 6c1.7 0 3 .8 4 2 1-1.2 2.3-2 4-2C20 6 22.4 9.9 21.2 12.9 19.5 16.1 12 21 12 21z"/>
                  </svg>
                </span>
                <span className="icon icon-comment" title="Comment">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11l4-2h12a2 2 0 0 0 2-2V6z"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" id="process">
        <div className="section-head center">
          <h2 className="page-title">{PROCESS.title}</h2>
          <p className="page-subtitle">{PROCESS.subtitle}</p>
        </div>
        <div className="steps">
          {PROCESS.steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-badge">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="center-actions">
          <SocialIcon
            url={waLink}
            bgColor="var(--color-success)"
            fgColor="var(--color-light)"
            style={{ height: HERO_SOCIAL_SIZE, width: HERO_SOCIAL_SIZE }}
            target="_blank"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="section-head center">
          <h2 className="page-title">LO QUE DICEN NUESTROS CLIENTES</h2>
        </div>
        <div className="testimonials">
          {TESTIMONIALS.map((t) => (
            <div key={`${t.name}-${t.location}`} className="testimonial-card">
              <div className="stars">★★★★★</div>
        <p className="testimonial-text">“{t.text}”</p>

        {/* NAME + LOCATION → uppercase */}
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-location">{t.location}</div>
            </div>
          ))}
 
        </div>
        <div className="testimonial-more">
          <Link href="/testimonials">Ver más</Link>
        </div>
      </section>

    </main>
  );
}
