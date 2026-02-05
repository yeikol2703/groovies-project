import { Mail, Phone, MapPin } from "lucide-react";
import { email, phone, address } from "@/lib/env";
import { OPENING_HOURS } from "@/lib/constants";

/**
 * Contact page: opening hours, email, phone, address.
 * All contact data comes from env (NEXT_PUBLIC_EMAIL, NEXT_PUBLIC_PHONE, etc.).
 */
export default function ContactScreen() {
  return (
    <main className="section">
      <div className="section-head center">
        <h1 className="page-title">CONTACTO</h1>
        <p className="page-subtitle">
          Puedes contactarnos a través de WhatsApp, redes sociales o correo electrónico.
        </p>
      </div>

      <div className="contact-grid">
        <section className="contact-card">
          <h2 className="contact-card-title">HORARIO</h2>
          <div className="hours">
            {OPENING_HOURS.map((row) => (
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

        {/* Contact cards */}
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
