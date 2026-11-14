import { Container } from "../../ui/Container/Container";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard";

import { projects } from "../../../data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects
    .filter((projects) => projects.featured)
    .slice(0, 3);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="bg-background py-16 lg:py-20"
    >
      <Container>
        {/* Cabeçalho da seção */}
        <div className="mb-8 max-w-2xl">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-strong">
            Projetos selecionados
          </span>

          <h2
            id="featured-projects-title"
            className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl"
          >
            Nossos destaques
          </h2>

          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Conheça alguns dos trabalhos e soluções da JR Serralheria Artística.
          </p>
        </div>

        {/* Grade de projetos */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Navegação para o portfólio */}
        <div className="mt-8 text-center">
          <a
            href="#projetos"
            className="inline-flex min-h-11 items-center font-body font-semibold text-primary underline decoration-accent underline-offset-8 transition-colors hover:text-accent-strong"
          >
            Explorar todos os projetos
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
