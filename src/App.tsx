
import { Header } from "./components/layout/Header/Header";
import { Container } from "./components/ui/Container/Container";
import { ProjectCard } from "./components/ui/ProjectCard/ProjectCard";

import type { Project } from "./types/project.types";

const sampleProject: Project = {
  id: "estante-ampla",
  title: "Estante em metal e madeira",
  description: "Estrutura em metal com prateleiras de madeira.",
  category: "moveis-artisticos",
  images: [
    "/images/projects/moveis-artisticos/estante-ampla-metal-madeira.webp",
  ],
  featured: true,
};

function App() {
  return (
    <>
      <Header />

      <main className="py-16">
        <Container>
          <h1 className="mb-8 font-heading text-3xl font-bold text-primary">
            Testando nosso ProjectCard
          </h1>

          <div className="max-w-sm">
            <ProjectCard project={sampleProject} />
          </div>
        </Container>
      </main>
    </>
  );
}

export default App;
