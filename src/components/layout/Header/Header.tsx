
import { useState } from "react";

import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";

import { createWhatsAppLink } from "../../../data/company";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">

          {/* Identidade da empresa */}
          <a
            href="#inicio"
            className="flex flex-col"
            onClick={closeMenu}
          >
            <span className="font-heading text-lg font-bold text-primary">
              JR <span className="text-accent">SERRALHERIA</span>
            </span>

            <span className="font-body text-[10px] tracking-widest text-muted">
              TRADICIONAL E ARTÍSTICA
            </span>
          </a>

          {/* Navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão desktop */}
          <div className="hidden lg:block">
            <Button
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </Button>
          </div>

          {/* Botão do menu mobile */}
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-border text-primary lg:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            <span aria-hidden="true" className="text-xl">
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Navegação mobile */}
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className={`border-t border-border pb-5 lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-1 pt-3">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-button px-3 py-3 font-body text-base text-primary transition-colors hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4">
            <Button
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Solicitar orçamento
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
