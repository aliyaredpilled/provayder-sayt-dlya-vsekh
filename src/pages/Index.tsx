
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SpeedComparison from "@/components/SpeedComparison";
import PricingPlans from "@/components/PricingPlans";
import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <SpeedComparison />
      <PricingPlans />
      <Benefits />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
