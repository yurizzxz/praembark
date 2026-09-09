export const sectionNavigationItems = [
  { label: "Sobre", section: "about" },
  { label: "Serviços", section: "services" },
  { label: "Por que nós", section: "benefits" },
] as const;

export const documentNavigationItems = [
  {
    label: "Documentos de embarque",
    description: "Documentos aceitos em voos nacionais e internacionais.",
    path: "/documents/shipping-documents",
  },
  {
    label: "Passaportes",
    description: "Solicitação, validade e cuidados antes da viagem.",
    path: "/documents/passports",
  },
  {
    label: "Vistos",
    description: "Exigências e processo consular para cada destino.",
    path: "/documents/visas",
  },
  {
    label: "Vacinas",
    description: "Prevenção e certificados sanitários internacionais.",
    path: "/documents/vaccines",
  },
] as const;
