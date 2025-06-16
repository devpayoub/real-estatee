
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CalculeHeroSection from "@/components/calcule/CalculeHeroSection";
import MortgageCalculator from "@/components/buy/MortgageCalculator";
import FinancingPartners from "@/components/calcule/FinancingPartners";
import PersonalizedSupport from "@/components/calcule/PersonalizedSupport";
import ExclusiveAdvantages from "@/components/calcule/ExclusiveAdvantages";
import CalculeCallToAction from "@/components/calcule/CalculeCallToAction";

const Calcule = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <CalculeHeroSection />
        <MortgageCalculator />
        <FinancingPartners />
        <PersonalizedSupport />
        <ExclusiveAdvantages />
        <CalculeCallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Calcule;
