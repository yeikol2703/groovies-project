"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tarda el proceso de bordado?",
    answer:
      "El tiempo promedio es de 5 a 10 días hábiles, dependiendo de la cantidad, complejidad del diseño y disponibilidad de materiales.",
  },
  {
    question: "¿Cómo puedo enviar mi diseño?",
    answer:
      "Podés enviarnos tu logo, imagen o idea por WhatsApp o correo electrónico en cualquier formato digital (PNG, JPG, PDF, AI, etc).",
  },
  {
    question: "¿Hacen envíos a todo Costa Rica?",
    answer:
      "Sí, realizamos envíos a todo el país mediante mensajería. El costo depende de la zona de entrega.",
  },
  {
    question: "¿Hay pedido mínimo?",
    answer:
      "El pedido mínimo puede variar según el tipo de producto. Consultanos por WhatsApp para darte una cotización exacta.",
  },
];

export default function FAQScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="section">
      <div className="section-head center">
        <h1 className="page-title">FAQ</h1>
        <p className="page-subtitle">
          Tiempos de entrega, envío de diseños, envíos y más.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`faq-icon ${isOpen ? "open" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
