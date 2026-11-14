import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";

export function HeroSection() {
    return (
        <section
            id="inicio"
            aria-labelledby="herro-title"
            className="scroll-mt-24 py-12 md:py-20 lg:py-28" 
        >
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Conteúdo textual */}

                    <div className="flex flex-col items-start">
                        <span className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-accent ">
                            JR Serralheria Tradicional e Artística
                        </span>

                        <h1 id="hero-title" className="max-w-xl font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
                            Transformamos suas ideias em projetos únicos.
                        </h1>

                        <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted md:text-lg">
                            Móveis artísticos, toldos, coberturas e soluções em serralheria sob medida em Caxias do Sul.
                        </p>

                        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Button
                            variant="primary"
                            href="#projetos"
                            className="w-full sm:w-auto">
                                Conheça nossos projetos!
                            </Button>

                            <Button
                            variant="secondary"> Entre em contato conosco!</Button>
                        </div>
                    </div>

                    {/* Imagem principal */}
                    <div className="relative overflow-hidden rounded-card bg-surface">
                        <img src="/images/projects/moveis-artisticos/estante-ampla-metal-madeira.webp"
                         alt="Estante com estrutura metálica e prateleiras de madeira"
                         className="aspect-[4/5] w-full object-cover"
                         fetchPriority="high" />
                    </div>
                </div>
            </Container>

        </section>
    )
}