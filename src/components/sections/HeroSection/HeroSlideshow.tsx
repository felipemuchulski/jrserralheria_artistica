import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type HeroSlideshowProps = {
  images: Slide[];
};

export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

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
    <div className="w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface sm:aspect-[5/4] lg:aspect-[4/5]">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeIndex
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Mostrar fotografia ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "w-3 bg-border hover:bg-muted"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={() => setIsPaused((previous) => !previous)}
            aria-label={isPaused ? "Reproduzir slideshow" : "Pausar slideshow"}
            className="ml-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-button text-primary hover:bg-surface"
          >
            {isPaused ? "▶" : "Ⅱ"}
          </button>
        </div>
      )}
    </div>
  );
}
