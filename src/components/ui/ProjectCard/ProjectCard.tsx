
import { useId } from "react";
import type { Project } from "../../../types/project.types";

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
  const descriptionId = useId();
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
        <span className="font-body text-xs font-semibold uppercase tracking-wide text-accent-strong">
          {categoryName}
        </span>

        <h3 className="font-heading text-lg font-bold text-primary">
          {project.title}
        </h3>

        <p id={descriptionId} className="font-body text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </>
  );

  return (
    <article className={`relative overflow-hidden rounded-card border border-border bg-surface ${onSelect ? "group transition-shadow hover:shadow-lg" : ""}`}>
      {content}
      {onSelect && (
        <button
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`Ver detalhes de ${project.title}`}
          aria-describedby={descriptionId}
          className="absolute inset-0 h-full w-full rounded-card focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
        />
      )}
    </article>
  );
}
