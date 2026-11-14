import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";

const services = [
  "Móveis artísticos",
  "Toldos",
  "Coberturas",
  "Serralheria sob medida",
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-surface py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Fotografia */}

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-card bg-background lg:max-w-none">
            <img
              src="/images/services/toldos.jpg"
              alt="Área externa com toldo de cobertura"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-square"
            />
          </div>

          {/* Conteúdo institucional */}
          <div className="mx-auto min-w-0 max-w-xl lg:mx-0">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-strong">
              Sobre a JR
            </span>

            <h2
              id="about-title"
              className="mt-4 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl"
            >
              Experiência e dedicação em cada projeto.
            </h2>

            <p className="mt-6 font-body text-base leading-relaxed text-muted">
              A JR Serralheria Tradicional e Artística trabalha com soluções
              personalizadas em metal, oferecendo serviços de serralheria,
              toldos, coberturas e móveis artísticos.
            </p>

            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Com profissionais experientes no ramo, buscamos transformar ideias
              em soluções que combinam funcionalidade, resistência e acabamento,
              respeitando as necessidades de cada cliente.
            </p>

            {/* Especialidades */}
            <ul className="mt-6 grid grid-cols-1 gap-3 min-[375px]:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-button border border-border bg-background px-3 py-3 font-body text-sm font-medium text-primary"
                >
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="secondary" href="#contato">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
