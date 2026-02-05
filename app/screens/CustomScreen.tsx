"use client";

import { useMemo, useState } from "react";
import { buildWaLink, email } from "@/lib/env";
import { PROCESS } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  phone: string;
  productType: string;
  message: string;
};

/**
 * Custom / quote page: process steps (shared content) + quote form.
 * WhatsApp and mailto links use env (NEXT_PUBLIC_WA_LINK, NEXT_PUBLIC_EMAIL).
 */
export default function CustomScreen() {
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

  const waLink = useMemo(() => buildWaLink(baseText), [baseText]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Cotización - Bordado Personalizado");
    const body = encodeURIComponent(baseText);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [baseText]);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <main className="section">
      <section id="process">
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

        {/* Quote form */}
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
              <a className="btn-secondary hover-underline" href={mailtoLink}>
                ENVIAR
              </a>
              <a className="nav-cta" href={waLink} target="_blank" rel="noreferrer">
                ENVIAR POR WHATSAPP
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
