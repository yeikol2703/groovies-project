import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactScreen() {
  const email = process.env.NEXT_PUBLIC_EMAIL_TO ?? "grooviesstore@email.com";
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+506 0000 0000";
  const waLink = process.env.NEXT_PUBLIC_WA_LINK ?? "https://wa.me/50600000000";
  const address =
    process.env.NEXT_PUBLIC_ADDRESS ?? "San José, Costa Rica";

  return (
    <main className="section">
      <div className="section-head center">
        <h1 className="page-title">CONTACTO</h1>
        <p className="page-subtitle">
          Puedes contactarnos a través de WhatsApp, redes sociales o correo electrónico.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT: Opening hours */}
        <section className="contact-card">
          <h2 className="contact-card-title">HORARIO</h2>

          <div className="hours">
            {[
              { day: "Lunes", time: "9:00 AM - 6:00 PM" },
              { day: "Martes", time: "9:00 AM - 6:00 PM" },
              { day: "Miércoles", time: "9:00 AM - 6:00 PM" },
              { day: "Jueves", time: "9:00 AM - 6:00 PM" },
              { day: "Viernes", time: "9:00 AM - 6:00 PM" },
              { day: "Sábado", time: "10:00 AM - 2:00 PM" },
              { day: "Domingo", time: "Cerrado" },
            ].map((row) => (
              <div className="hours-row" key={row.day}>
                <div className="hours-day">{row.day}</div>
                <div className="hours-line" />
                <div className="hours-time">{row.time}</div>
              </div>
            ))}
          </div>

          <p className="contact-note">
            Para cotizaciones rápidas, WhatsApp es el canal más directo.
          </p>


        </section>

        {/* RIGHT: Contact cards */}
        <section className="contact-side">
          <div className="info-card">
            <div className="info-icon">
              <Mail size={18} />
            </div>
            <div className="info-body">
              <div className="info-title">EMAIL</div>
              <div className="info-text">Escríbenos y te respondemos lo antes posible.</div>
              <a className="info-link" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Phone size={18} />
            </div>
            <div className="info-body">
              <div className="info-title">TELÉFONO</div>
              <div className="info-text">Atención en horario laboral.</div>
              <a className="info-link" href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin size={18} />
            </div>
            <div className="info-body">
              <div className="info-title">UBICACIÓN</div>
              <div className="info-text">Entregas y envíos a todo Costa Rica.</div>
              <div className="info-link">{address}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
