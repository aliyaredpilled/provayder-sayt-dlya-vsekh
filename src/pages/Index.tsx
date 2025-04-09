
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PromoBanners from "@/components/PromoBanners";
import ServiceOverview from "@/components/ServiceOverview";
import PricingPlans from "@/components/PricingPlans";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import LatestNews from "@/components/LatestNews";
import ReferralPromo from "@/components/ReferralPromo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      <NavBar />
      <Hero />
      <PromoBanners />
      <LatestNews />
      <ReferralPromo />
      <ServiceOverview />
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
