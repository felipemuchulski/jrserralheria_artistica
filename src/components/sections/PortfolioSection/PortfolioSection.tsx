
import { useState } from "react";

import { Container } from "../../ui/Container/Container";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard";

import { projects } from "../../../data/projects";
import type { ProjectCategory } from "../../../types/project.types";

import { ProjectModal } from "../../ui/ProjectModal/ProjectModal";

import type { Project } from "../../../types/project.types";

type PortfolioFilter = ProjectCategory | "todos";

const categories: {
  label: string;
  value: PortfolioFilter;
}[] = [
  { label: "Todos", value: "todos" },
  { label: "Móveis artísticos", value: "moveis-artisticos" },
  { label: "Toldos", value: "toldos" },
  { label: "Policarbonato", value: "policarbonato" },
  { label: "Serralheria", value: "serralheria" },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioFilter>("todos");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "todos") {
      return true;
    }


    return project.category === selectedCategory;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projetos"
      aria-labelledby="portfolio-title"
      className="scroll-mt-24 bg-background py-16 lg:py-20"
    >
      <Container>
        {/* Apresentação da seção */}
        <div className="mb-8 max-w-2xl">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-strong">
            Conheça nosso trabalho
          </span>

          <h2
            id="portfolio-title"
            className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl"
          >
            Nosso portfólio
          </h2>

          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Explore nossos trabalhos em móveis artísticos,
            toldos, coberturas e serralheria sob medida.
          </p>
        </div>

        {/* Filtros de categorias */}
        <div
          role="group"
          aria-label="Filtrar projetos por categoria"
          className="-mx-1 mb-8 flex gap-3 overflow-x-auto px-1 pb-3 pt-1"
        >
          {categories.map((category) => {
            const isActive =
              selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  setSelectedCategory(category.value)
                }
                className={`min-h-11 shrink-0 rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-primary hover:border-accent"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p role="status" className="sr-only">
          {filteredProjects.length} projetos encontrados.
        </p>

        {/* Galeria de projetos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-border bg-surface px-6 py-12 text-center">
            <p className="font-body text-muted">
              Ainda não temos projetos cadastrados
              nesta categoria.
            </p>
          </div>
        )}
      </Container>
      {
        selectedProject && (
            <ProjectModal
                key={selectedProject.id}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        )
      }
    </section>
  );
}
