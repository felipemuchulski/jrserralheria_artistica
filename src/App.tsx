
import { Header } from "./components/layout/Header/Header";
import { Container } from "./components/ui/Container/Container";

function App() {
  return (
    <>
      <Header />

      <main id="inicio" className="min-h-screen py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-primary">
            JR Serralheria Artística
          </h1>

          <p className="mt-4 text-muted">
            Desenvolvendo nossa landing page.
          </p>

          <section id="projetos" className="scroll-mt-24 pt-24">
            <h2 className="text-2xl font-bold text-primary">
              Projetos
            </h2>
          </section>

          <section id="sobre" className="scroll-mt-24 pt-24">
            <h2 className="text-2xl font-bold text-primary">
              Sobre
            </h2>
          </section>

          <section id="contato" className="scroll-mt-24 pt-24">
            <h2 className="text-2xl font-bold text-primary">
              Contato
            </h2>
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;
