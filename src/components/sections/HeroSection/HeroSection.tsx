import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";
import { createWhatsAppLink } from "../../../data/company";
import { HeroSlideshow } from "./HeroSlideshow";

const heroImages = [
  {
    src: "/images/hero/hero-moveis-ilustrativo.jpg",
    alt: "Referência ilustrativa de estante metálica com composição geométrica e livros",
    objectPosition: "center 40%",
  },
  {
    src: "/images/hero/hero-toldos-ilustrativo.jpg",
    alt: "Referência ilustrativa de toldo sobre um pátio com mesas e cadeiras",
    objectPosition: "center 20%",
  },
  {
    src: "/images/hero/hero-serralheria-ilustrativo.jpg",
    alt: "Referência ilustrativa de portão metálico em uma entrada com arco",
    objectPosition: "center bottom",
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="scroll-mt-24 py-10 md:py-14 lg:py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Conteúdo textual */}

          <div className="flex min-w-0 flex-col items-start">
            <span className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-accent-strong ">
              JR Serralheria Tradicional e Artística
            </span>

            <h1
              id="hero-title"
              className="max-w-xl font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl"
            >
              Transformamos suas ideias em projetos únicos.
            </h1>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted md:text-lg">
              Móveis artísticos, toldos, coberturas e soluções em serralheria
              sob medida em Caxias do Sul.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                variant="primary"
                href="#projetos"
                className="w-full sm:w-auto"
              >
                Conheça nossos projetos!
              </Button>

              <Button
                variant="secondary"
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entre em contato conosco!
              </Button>
            </div>
          </div>

          {/* Imagem principal */}
          <HeroSlideshow images={heroImages} />
        </div>
      </Container>
    </section>
  );
}
