import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import CategoryCarousel, { CategoryItem } from "@/components/ui/CategoryCarousel";

const categories: CategoryItem[] = [
  {
    title: "CAMISAS",
    subtitle: "Categoria",
    href: "/catalog?cat=shirts",
    image: "/images/categories/manekin1.png",
    image2: "/images/categories/camisa.png",
  },
  {
    title: "SUETERES",
    subtitle: "Categoria",
    href: "/catalog?cat=patches",
    image: "/images/categories/manekin2.png",
        image2: "/images/categories/sueter2.png",

  },
  {
    title: "PARCHES",
    subtitle: "Categoria",
    href: "/catalog?cat=outerwear",
    image2: "/images/categories/parche.png",
        image: "/images/categories/parches.png",

  },
   {
    title: "PROXIMAMENTE",
    subtitle: "Categoria",
    href: "/catalog?cat=outerwear",
    image: "/images/categories/next.png",
        image2: "/images/categories/next2.png",

  }, 
];

const igGrid = [
    "/images/categories/gamabunta.gif",
  "/images/categories/ig2.png",
    "/images/categories/ig5.png",
    "/images/categories/ig3.png",
        "/images/categories/cloth.gif",
  "/images/categories/ig4.png",

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

   
          <div className="social-links social-links-centered hero-social-links">
            <SocialIcon
              url={igLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-instagram)"
              style={{ height: 60, width: 60 }}
            />
            <SocialIcon
              url={fbLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-facebook)"
              style={{ height: 60, width: 60 }}
            />
            <SocialIcon
              url={waLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-whatsapp)"
              style={{ height: 60, width: 60 }}
            />
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
            <SocialIcon
              url={igLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-instagram)"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url={fbLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-facebook)"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url={waLink}
              bgColor="var(--color-dark-1)"
              fgColor="var(--color-whatsapp)"
              style={{ height: 40, width: 40 }}
            />
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
             <SocialIcon
                  url={waLink}
                  bgColor="var(--color-success)"
                  fgColor="var(--color-light)"
                  style={{ height: 60, width: 60 }}
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
    {[
      {
        stars: "★★★★★",
        name: "YEIKOL VILLALOBOS",
        location: "HEREDIA, CR",
        text:
          "Los detalles son súper precisos. Se entrego en el tiempo acordado y la calidad es excelente.",
      },
      {
        stars: "★★★★★",
        name: "KARLA V. RODRÍGUEZ",
        location: "SAN JOSÉ, CR",
        text:
          "Hicimos los uniformes de la oficina y quedaron excelentes. Muy buena atención y rapidez.",
      },
      {
        stars: "★★★★★",
        name: "ANDRÉS RAMIREZ",
        location: "CARTAGO, CR",
        text:
          "El regalo perfecto. El bordado en la sudadera se ve de calidad. Súper recomendado.",
      },
    ].map((t) => (
      <div key={t.name} className="testimonial-card">
        <div className="stars">{t.stars}</div>

        {/* COMMENT → sentence case */}
        <p className="testimonial-text">“{t.text}”</p>

        {/* NAME + LOCATION → uppercase */}
        <div className="testimonial-name">{t.name}</div>
        <div className="testimonial-location">{t.location}</div>
      </div>
    ))}
 
  </div>
    <div className="testimonial-more"> <Link href="/testimonials" >
      Ver más
    </Link></div>
</section>

    </main>
  );
}
