
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SellSection from "@/components/SellSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SellSection />
        <FeaturesSection />
        <BenefitsSection />
        <StepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
