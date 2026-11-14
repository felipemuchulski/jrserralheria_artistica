
import { useEffect, useRef, useState } from "react";

import type { Project } from "../../../types/project.types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  const images = project.images;
  const hasMultipleImages = images.length > 1;

  // Abre o modal quando o componente é montado
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const previousFocus = document.activeElement;
    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  function closeModal() {
    dialogRef.current?.close();
  }

  function nextImage() {
    if (images.length === 0) return;
    setCurrentImageIndex((previous) =>
      (previous + 1) % images.length
    );
  }

  function previousImage() {
    if (images.length === 0) return;
    setCurrentImageIndex((previous) =>
      (previous - 1 + images.length) % images.length
    );
  }

  const activeIndex = images.length ? currentImageIndex % images.length : 0;
  const currentImage = images[activeIndex];

  return (
    <dialog
      ref={dialogRef}
      onClose={(event) => {
        // Ignora o close enfileirado pelo cleanup se o Strict Mode já reabriu o diálogo.
        if (!event.currentTarget.open) onClose();
      }}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-card border border-border bg-surface p-0 text-primary shadow-2xl backdrop:bg-primary/75"
    >
      <div className="relative">

        {/* Cabeçalho */}
        <div className="flex items-center justify-between gap-4 border-b border-border p-4 md:p-6">
          <h2
            id="project-modal-title"
            className="min-w-0 break-words font-heading text-xl font-bold text-primary md:text-2xl"
          >
            {project.title}
          </h2>

          <button
            type="button"
            aria-label="Fechar detalhes do projeto"
            onClick={closeModal}
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-button text-primary hover:bg-background"
          >
            ✕
          </button>
        </div>

        {/* Fotografia principal */}
        <div className="bg-background p-3 md:p-6">
          <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-card bg-primary/5">
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${project.title} - fotografia ${activeIndex + 1}`}
                className="max-h-[55dvh] w-full object-contain"
              />
            ) : (
              <p className="p-8 text-center text-muted">
                Fotografia indisponível.
              </p>
            )}
          </div>

          {/* Navegação entre imagens */}
          {hasMultipleImages && (
            <div className="mt-4 flex items-center justify-between gap-4">

              <button
                type="button"
                onClick={previousImage}
                aria-label="Fotografia anterior"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-button border border-border text-primary hover:bg-surface"
              >
                ←
              </button>

              <span
                aria-live="polite"
                className="font-body text-sm text-muted"
              >
                {activeIndex + 1} de {images.length}
              </span>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Próxima fotografia"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-button border border-border text-primary hover:bg-surface"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Descrição */}
        <div className="p-4 md:p-6">
          <p
            id="project-modal-description"
            className="font-body text-base leading-relaxed text-muted"
          >
            {project.description}
          </p>
        </div>
      </div>
    </dialog>
  );
}
