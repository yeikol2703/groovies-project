import { TESTIMONIALS } from "@/lib/constants";

/**
 * Testimonials page: full list from shared constants (same data as home preview).
 */
export default function TestimonialsScreen() {
  return (
    <main className="section">
      <section className="section" id="testimonials">
        <div className="section-head center">
          <h2 className="page-title">LO QUE DICEN NUESTROS CLIENTES</h2>
        </div>
        <div className="testimonials">
          {TESTIMONIALS.map((t) => (
            <div key={`${t.name}-${t.location}`} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-location">{t.location}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
