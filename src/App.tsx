
import { Header } from "./components/layout/Header/Header";

import { HeroSection } from "./components/sections/HeroSection/HeroSection";
import { FeaturedProjects } from "./components/sections/FeaturedProjects/FeaturedProjects";
import { PortfolioSection } from "./components/sections/PortfolioSection/PortfolioSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturedProjects />
        <PortfolioSection />
      </main>
    </>
  );
}

export default App;
