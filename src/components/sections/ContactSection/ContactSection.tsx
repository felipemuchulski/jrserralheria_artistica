
import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";

import {
  company,
  createWhatsAppLink,
} from "../../../data/company";

export function ContactSection() {
  const whatsappLink = createWhatsAppLink(
    "Olá! Conheci os trabalhos da JR pelo site e gostaria de solicitar um orçamento."
  );

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-primary py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="min-w-0 max-w-2xl">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-border">
              Vamos conversar?
            </span>

            <h2
              id="contact-title"
              className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Seu próximo projeto começa aqui.
            </h2>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-border md:text-lg">
              Entre em contato com a JR Serralheria Artística
              e conte o que você precisa. Estamos à disposição
              para conversar sobre o seu projeto.
            </p>

          </div>

          {/* Ações comerciais */}
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap lg:ml-auto lg:w-full lg:max-w-sm lg:flex-col">
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
            >
              Solicitar orçamento
            </Button>

            {company.instagram && (
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-button border border-white px-6 py-3 font-body text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Conhecer nosso Instagram
              </a>
            )}
          </div>

          {/* Localização */}
          <div className="border-t border-surface/20 pt-6 lg:col-span-2">
            <p className="font-body text-sm text-border">
              Atendimento em {company.city} — {company.state}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
