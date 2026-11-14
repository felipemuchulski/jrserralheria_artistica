
import { Header } from "./components/layout/Header/Header";
import { HeroSection } from "./components/sections/HeroSection/HeroSection";
import { FeaturedProjects } from "./components/sections/FeaturedProjects/FeaturedProjects";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturedProjects />
      </main>
    </>
  );
}

export default App;
