
import type { Project } from "../../../types/project.types";

//
type ProjectCardProps = {
  project: Project;
  onSelect?: (project: Project) => void;
};

const categoryLabels: Record<Project["category"], string> = {
  "moveis-artisticos": "Móveis artísticos",
  toldos: "Toldos",
  policarbonato: "Coberturas de policarbonato",
  serralheria: "Serralheria sob medida",
};

export function ProjectCard({
  project,
  onSelect,
}: ProjectCardProps) {
  const coverImage = project.images[0];
  const categoryName = categoryLabels[project.category];

  const content = (
    <>
      <div className="aspect-[4/5] overflow-hidden bg-surface">
        {coverImage ? (
          <img
            src={coverImage}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted">
            Imagem indisponível
          </div>
        )}
      </div>

      <div className="space-y-2 p-4">
        <span className="font-body text-xs font-semibold uppercase tracking-wide text-accent">
          {categoryName}
        </span>

        <h3 className="font-heading text-lg font-bold text-primary">
          {project.title}
        </h3>

        <p className="font-body text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="group w-full overflow-hidden rounded-card border border-border bg-surface text-left transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {content}
      </button>
    );
  }

  return (
    <article className="overflow-hidden rounded-card border border-border bg-surface">
      {content}
    </article>
  );
}
