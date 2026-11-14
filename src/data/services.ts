export type ServiceCategory =
  | "moveis-artisticos"
  | "toldos"
  | "coberturas"
  | "serralheria";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: ServiceCategory;
}

// Referências ilustrativas de serviços. O portfólio da JR permanece em projects.ts.
export const services: Service[] = [
  {
    id: "moveis-artisticos",
    title: "Móveis artísticos",
    description: "Móveis em metal e madeira, com soluções personalizadas para cada ambiente.",
    image: "/images/services/moveis-artisticos.jpg",
    alt: "Referência ilustrativa de estante metálica com composição geométrica e livros",
    category: "moveis-artisticos",
  },
  {
    id: "toldos",
    title: "Toldos",
    description: "Soluções em toldos para varandas, pátios e áreas externas.",
    image: "/images/services/toldos.jpg",
    alt: "Referência ilustrativa de toldo sobre um pátio com mesas e cadeiras",
    category: "toldos",
  },
  {
    id: "coberturas",
    title: "Coberturas",
    description: "Coberturas para áreas externas, conforme as necessidades de cada espaço.",
    image: "/images/services/cobertura-translucida-ilustrativa.jpg",
    alt: "Referência ilustrativa de cobertura de vidro sobre uma área externa",
    category: "coberturas",
  },
  {
    id: "serralheria",
    title: "Serralheria sob medida",
    description: "Projetos personalizados em metal, unindo funcionalidade, resistência e acabamento.",
    image: "/images/services/serralheria-portoes.jpg",
    alt: "Referência ilustrativa de portão metálico em uma entrada com arco",
    category: "serralheria",
  },
];
