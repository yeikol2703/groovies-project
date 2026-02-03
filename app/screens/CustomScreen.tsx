"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  productType: string;
  message: string;
};

export default function CustomScreen() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? "50600000000"; // <-- put CR number
  const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO ?? "grooviesstore@email.com"; // <-- your email

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    productType: "Bordado",
    message: "",
  });

  const baseText = useMemo(() => {
    const lines = [
      "Hola GrooviesStore, me gustaría cotizar:",
      "",
      `Nombre: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      `Tipo: ${form.productType || "-"}`,
      "",
      `Mensaje: ${form.message || "-"}`,
    ];
    return lines.join("\n");
  }, [form]);

  const waLink = useMemo(() => {
    const text = encodeURIComponent(baseText);
    return `https://wa.me/${waNumber}?text=${text}`;
  }, [waNumber, baseText]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Cotización - Bordado Personalizado");
    const body = encodeURIComponent(baseText);
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [emailTo, baseText]);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <main className="section">
      <section id="process">
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

        {/* REQUEST FORM */}
        <div className="quote-card">
          <h3 className="quote-title">SOLICITAR COTIZACIÓN</h3>
          <p className="quote-subtitle">
            Contanos qué necesitás y enviá el mensaje por WhatsApp o por Email.
          </p>

          <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <div className="quote-grid">
              <div className="field">
                <label className="label">Nombre</label>
                <input
                  className="input"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="field">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="field">
                <label className="label">Teléfono</label>
                <input
                  className="input"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+506 ..."
                />
              </div>

              <div className="field">
                <label className="label">Tipo de producto</label>
                <select className="input" value={form.productType} onChange={update("productType")}>
                  <option value="Bordado">Bordado</option>
                  <option value="Parches">Parches</option>
                  <option value="Camisas">Camisas</option>
                  <option value="Uniformes">Uniformes</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Descripción</label>
              <textarea
                className="textarea"
                value={form.message}
                onChange={update("message")}
                placeholder="Ej: Quiero 10 parches de 8cm, colores X/Y, para la próxima semana..."
                rows={5}
              />
            </div>

            <div className="quote-actions">
              <a className="nav-cta" href={waLink} target="_blank" rel="noreferrer">
                ENVIAR POR WHATSAPP
              </a>

              <a className="btn-secondary" href={mailtoLink}>
                ENVIAR POR EMAIL
              </a>
            </div>

            <p className="quote-hint">
              Tip: Podés adjuntar imágenes directamente en WhatsApp (logo, referencia, etc).
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
