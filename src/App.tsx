
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";

import { HeroSection } from "./components/sections/HeroSection/HeroSection";
import { FeaturedProjects } from "./components/sections/FeaturedProjects/FeaturedProjects";
import { ServicesSection } from "./components/sections/ServicesSection/ServicesSection";
import { PortfolioSection } from "./components/sections/PortfolioSection/PortfolioSection";
import { AboutSection } from "./components/sections/AboutSection/AboutSection";
import { ContactSection } from "./components/sections/ContactSection/ContactSection";

function App() {
  return (
    <>
      <Header />

      <main id="conteudo">
        <HeroSection />
        <FeaturedProjects />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
