export default function TestimonialsScreen() {
  return (
    <main className="section">
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
