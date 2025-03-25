
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PromoBanners from "@/components/PromoBanners";
import ServiceOverview from "@/components/ServiceOverview";
import SpeedComparison from "@/components/SpeedComparison";
import PricingPlans from "@/components/PricingPlans";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <PromoBanners />
      <ServiceOverview />
      <SpeedComparison />
      <PricingPlans />
      <Benefits />
      <CustomerReviews />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
