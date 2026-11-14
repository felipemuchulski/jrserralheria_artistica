
import { Container } from "../../ui/Container/Container";

import {
  company,
  createWhatsAppLink,
} from "../../../data/company";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 lg:py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-12">

          {/* Identidade da empresa */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#inicio" className="inline-block">
              <span className="font-heading text-xl font-bold text-primary">
                JR <span className="text-accent-strong">SERRALHERIA</span>
              </span>
            </a>

            <p className="mt-2 font-body text-xs uppercase tracking-widest text-muted">
              Tradicional e Artística
            </p>

            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-muted">
              Soluções personalizadas em metal,
              móveis artísticos, toldos e coberturas.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="font-heading text-base font-bold text-primary">
              Navegação
            </h2>

            <ul className="mt-3 space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-8 items-center font-body text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informações de contato */}
          <div>
            <h2 className="font-heading text-base font-bold text-primary">
              Contato
            </h2>

            <p className="mt-4 font-body text-sm text-muted">
              {company.city} — {company.state}
            </p>

            <div className="mt-3 flex flex-col items-start gap-1">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center font-body text-sm text-muted hover:text-primary"
              >
                WhatsApp
              </a>

              {company.instagram && (
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-8 items-center font-body text-sm text-muted hover:text-primary"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center font-body text-sm text-muted">
            © {currentYear} {company.name}.
            Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
