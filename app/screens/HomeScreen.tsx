import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import CategoryCarousel, { CategoryItem } from "@/components/ui/CategoryCarousel";

const categories: CategoryItem[] = [
  {
    title: "CAMISAS",
    subtitle: "Shop",
    href: "/catalog?cat=shirts",
    image: "/images/categories/categoria.png",
  },
  {
    title: "SUETERES",
    subtitle: "Shop",
    href: "/catalog?cat=patches",
    image: "/images/categories/categoria.png",
  },
  {
    title: "PARCHES",
    subtitle: "Shop",
    href: "/catalog?cat=outerwear",
    image: "/images/categories/categoria.png",
  },
  {
    title: "PERSONALIZADOS",
    subtitle: "Shop",
    href: "/catalog?cat=outerwear",
    image: "/images/categories/categoria.png",
  },
];

const igGrid = [
  "/images/categories/categoria.png",
  "/images/categories/categoria.png",
  "/images/categories/categoria.png",
  "/images/categories/categoria.png",
  "/images/categories/categoria.png",
  "/images/categories/categoria.png",
];

export default function HomeScreen() {
  const waLink = process.env.NEXT_PUBLIC_WA_LINK ?? "https://wa.me/50600000000";
  const igLink = process.env.NEXT_PUBLIC_IG_LINK ?? "#";
  const fbLink = process.env.NEXT_PUBLIC_FB_LINK ?? "#";

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

          <div className="hero-actions hero-actions-centered">
            <Link className="btn-secondary hover-underline" href="/catalog">
              Personalizar
            </Link>
          </div>

          <div className="social-links social-links-centered">
            <a href={igLink} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={fbLink} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="section" id="shop-by-category">
        <CategoryCarousel items={categories} />
      </section>

      {/* FOLLOW US */}
      <section className="section" id="follow-us">
        <div className="section-head center">
          <h2 className="page-title">SIGUENOS</h2>
          <p className="page-subtitle">
            Nuevos lanzamientos, trabajos personalizados y contenido exclusivo en nuestras redes.
          </p>

           <div className="social-links social-links-centered">
            <a href={igLink} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={fbLink} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="ig-grid">
          {igGrid.map((src, idx) => (
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
            </a>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
    <section className="section" id="process">
  <div className="section-head center">
    <h2 className="page-title">NUESTRO PROCESO</h2>
    <p className="page-subtitle">
      Convertimos tus ideas en realidad en solo tres pasos. Calidad garantizada en cada puntada.
    </p>
  </div>

  <div className="steps">
    <div className="step-card">
      <div className="step-badge">1</div>
      <h3 className="step-title">ENVÍA TU DISEÑO</h3>
      <p className="step-text">
        Sube tu logo o idea en cualquier formato digital para que nuestro equipo lo evalúe.
      </p>
    </div>

    <div className="step-card">
      <div className="step-badge">2</div>
      <h3 className="step-title">DIGITALIZACIÓN</h3>
      <p className="step-text">
        Convertimos tu imagen en un diseño de bordado optimizado y te enviamos una muestra digital.
      </p>
    </div>

    <div className="step-card">
      <div className="step-badge">3</div>
      <h3 className="step-title">BORDADO Y ENTREGA</h3>
      <p className="step-text">
        Una vez aprobado, procedemos con el bordado final y te lo entregamos en todo el país.
      </p>
    </div>
  </div>



        <div className="center-actions">
          <a className="nav-cta" href={waLink} target="_blank" rel="noreferrer">
            COTIZAR
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
  <section className="section" id="testimonials">
  <div className="section-head center">
    <h2 className="page-title">LO QUE DICEN NUESTROS CLIENTES</h2>
  </div>

  <div className="testimonials">
    {[
      {
        name: "YEIKOL VILLALOBOS",
        location: "HEREDIA, CR",
        text:
          "Los detalles son súper precisos. Se entrego en el tiempo acordado y la calidad es excelente.",
      },
      {
        name: "KARLA V. RODRÍGUEZ",
        location: "SAN JOSÉ, CR",
        text:
          "Hicimos los uniformes de la oficina y quedaron excelentes. Muy buena atención y rapidez.",
      },
      {
        name: "ANDRÉS RAMIREZ",
        location: "CARTAGO, CR",
        text:
          "El regalo perfecto. El bordado en la sudadera se ve de calidad. Súper recomendado.",
      },
    ].map((t) => (
      <div key={t.name} className="testimonial-card">
        <div className="stars">★★★★★</div>

        {/* COMMENT → sentence case */}
        <p className="testimonial-text">“{t.text}”</p>

        {/* NAME + LOCATION → uppercase */}
        <div className="testimonial-name">{t.name}</div>
        <div className="testimonial-location">{t.location}</div>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
