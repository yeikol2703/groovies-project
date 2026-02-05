/**
 * Shared content and config used across screens.
 * Keeps a single source of truth for process steps, testimonials, opening hours, etc.
 */

/** Single step in the "Nuestro proceso" section. */
export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

/** Process section content (home + custom screens). */
export const PROCESS = {
  title: "NUESTRO PROCESO",
  subtitle:
    "Convertimos tus ideas en realidad en solo tres pasos. Calidad garantizada en cada puntada.",
  steps: [
    {
      number: 1,
      title: "ENVÍA TU DISEÑO",
      description:
        "Sube tu logo o idea en cualquier formato digital para que nuestro equipo lo evalúe.",
    },
    {
      number: 2,
      title: "DIGITALIZACIÓN",
      description:
        "Convertimos tu imagen en un diseño de bordado optimizado y te enviamos una muestra digital.",
    },
    {
      number: 3,
      title: "BORDADO Y ENTREGA",
      description:
        "Una vez aprobado, procedemos con el bordado final y te lo entregamos en todo el país.",
    },
  ] as ProcessStep[],
};

/** Single testimonial entry. */
export type Testimonial = {
  name: string;
  location: string;
  text: string;
};

/** Testimonials used on home and testimonials page. */
export const TESTIMONIALS: Testimonial[] = [
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
];

/** Opening hours row for contact page. */
export type OpeningHoursRow = { day: string; time: string };

export const OPENING_HOURS: OpeningHoursRow[] = [
  { day: "Lunes", time: "9:00 AM - 6:00 PM" },
  { day: "Martes", time: "9:00 AM - 6:00 PM" },
  { day: "Miércoles", time: "9:00 AM - 6:00 PM" },
  { day: "Jueves", time: "9:00 AM - 6:00 PM" },
  { day: "Viernes", time: "9:00 AM - 6:00 PM" },
  { day: "Sábado", time: "10:00 AM - 2:00 PM" },
  { day: "Domingo", time: "Cerrado" },
];

/** Category slug -> display label (catalog filter, API). */
export const CATEGORY_LABELS: Record<string, string> = {
  patch: "PARCHES",
  shirt: "CAMISAS",
  hoodie: "SUETERS",
  other: "OTROS",
};
