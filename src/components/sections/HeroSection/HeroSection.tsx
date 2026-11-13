import { Container } from "../../ui/Container/Container";

export function HeroSection() {
    return (
        <section id="inicio" className="py-16">
            <Container>
                <h1 className="font-heading text-4xl font-bold text-primary"> 
                    JR Serralheria Artística
                </h1>

                <p className="mt-4 text-muted">
                    Transformando metal em projetos únicos.
                </p>
            </Container>

        </section>
    )
}