
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import BuyHeroSection from "@/components/buy/BuyHeroSection";
import MortgageCalculator from "@/components/buy/MortgageCalculator";
import CanadianBankPartners from "@/components/buy/CanadianBankPartners";
import FinancingSolutions from "@/components/buy/FinancingSolutions";
import BuyCallToAction from "@/components/buy/BuyCallToAction";

const Buy = () => {
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
        <BuyHeroSection />
        <MortgageCalculator />
        <CanadianBankPartners />
        <FinancingSolutions />
        <BuyCallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Buy;
