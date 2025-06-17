
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import BuyHeroSection from "@/components/buy/BuyHeroSection";
import CanadianMarketSection from "@/components/buy/CanadianMarketSection";
import BuyingProcessSection from "@/components/buy/BuyingProcessSection";
import BuyContactForm from "@/components/buy/BuyContactForm";

const Buy = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <BuyHeroSection />
        <CanadianMarketSection />
        <BuyingProcessSection />
        <BuyContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Buy;
