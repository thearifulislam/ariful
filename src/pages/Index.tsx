import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ToolsSection from "../components/ToolsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ServiceSlider from "../components/ServiceSlider"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo 
        title="Home - Brand Identity & UI/UX Designer"
        description="Welcome to Ariful GFX. A passionate designer crafting unique brand identities, logos, and UI/UX solutions that make businesses stand out."
        keywords="brand identity, logo design, ui/ux, graphics design, Ariful Islam, portfolio"
      />
      <Navbar />
      <HeroSection />
      <ServiceSlider/>
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ToolsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
