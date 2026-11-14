
export type ProjectCategory =
  | "moveis-artisticos"
  | "toldos"
  | "policarbonato"
  | "serralheria";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  featured: boolean;
}
