import { services } from "../../../data/services";
import { Container } from "../../ui/Container/Container";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="scroll-mt-24 bg-surface py-16 lg:py-20"
    >
      <Container>
        <div className="mb-8 max-w-2xl">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-strong">
            Soluções para o seu espaço
          </span>
          <h2
            id="services-title"
            className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl"
          >
            Nossos serviços
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Móveis artísticos, toldos, coberturas e serralheria sob medida
            para transformar suas ideias em projetos.
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-muted">
            As fotografias desta seção são referências ilustrativas dos serviços,
            não obras executadas pela JR.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-card border border-border bg-surface"
            >
              <figure>
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-safe:group-focus-within:scale-105 ${
                      service.category === "serralheria" ? "object-bottom" : "object-center"
                    }`}
                  />
                </div>
                <figcaption className="border-b border-border bg-background px-4 py-2 font-body text-xs leading-relaxed text-muted md:px-5">
                  {service.category === "coberturas"
                    ? "Imagem ilustrativa · cobertura de vidro"
                    : "Imagem ilustrativa"}
                </figcaption>
              </figure>

              <div className="flex flex-1 flex-col items-start p-4 md:p-5">
                <h3 className="font-heading text-xl font-bold leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  aria-label={`Solicitar orçamento para ${service.title.toLocaleLowerCase("pt-BR")}`}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 rounded-button pt-4 font-body text-sm font-semibold text-primary underline decoration-accent underline-offset-4 transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Solicitar orçamento
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
