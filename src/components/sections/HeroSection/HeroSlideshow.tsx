import { useEffect, useId, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type HeroSlideshowProps = {
  images: Slide[];
};

export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const captionId = useId();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // Consulta a preferência de movimento do usuário
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  // Controla a passagem automática das imagens
  useEffect(() => {
    if (images.length <= 1 || isPaused || reduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        return (previousIndex + 1) % images.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [images.length, isPaused, reduceMotion]);

  if (images.length === 0) {
    return null;
  }

  const activeIndex = currentIndex % images.length;

  return (
    <div
      className="w-full"
      role="region"
      aria-label="Fotografias ilustrativas de serviços"
      aria-describedby={captionId}
      aria-roledescription="carrossel"
      onFocusCapture={(event) => {
        if (
          !event.currentTarget.contains(event.relatedTarget) &&
          !(event.target instanceof Element && event.target.closest("[data-slideshow-playback]"))
        ) setIsPaused(true);
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface md:aspect-square">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            aria-hidden={index !== activeIndex}
            style={{ objectPosition: image.objectPosition }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeIndex
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          />
        ))}
      </div>

      <p id={captionId} className="mt-3 font-body text-xs leading-relaxed text-muted">
        Fotografias ilustrativas de serviços.
      </p>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Mostrar fotografia ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
              }}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button"
            >
              <span
                aria-hidden="true"
                className={`h-3 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  index === activeIndex ? "w-8 bg-accent" : "w-3 bg-muted"
                }`}
              />
            </button>
          ))}

          <button
            type="button"
            data-slideshow-playback
            onClick={() => setIsPaused((previous) => !previous)}
            disabled={reduceMotion}
            aria-label={reduceMotion ? "Reprodução automática desativada por preferência de movimento reduzido" : isPaused ? "Reproduzir slideshow" : "Pausar slideshow"}
            className="ml-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-button text-primary hover:bg-surface disabled:opacity-50"
          >
            {isPaused || reduceMotion ? "▶" : "Ⅱ"}
          </button>
        </div>
      )}
    </div>
  );
}
