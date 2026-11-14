
import type { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "estante-ampla",
    title: "Estante em metal e madeira",
    description: "Estrutura metálica com prateleiras de madeira.",
    category: "moveis-artisticos",
    images: [
      "/images/projects/moveis-artisticos/estante-ampla-metal-madeira.webp",
    ],
    featured: true,
  },
  {
    id: "estante-vertical",
    title: "Estante vertical",
    description: "Estante com estrutura metálica e prateleiras.",
    category: "moveis-artisticos",
    images: [
      "/images/projects/moveis-artisticos/estante-vertical-metal-madeira.webp",
    ],
    featured: true,
  },
  {
    id: "prateleira-suspensa",
    title: "Prateleira suspensa",
    description: "Prateleiras de madeira com suporte metálico.",
    category: "moveis-artisticos",
    images: [
      "/images/projects/moveis-artisticos/prateleira-suspensa-cozinha.webp",
    ],
    featured: true,
  },
];
