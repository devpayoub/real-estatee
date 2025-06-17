
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SellHeroSection from "@/components/sell/SellHeroSection";
import CanadianSellingSection from "@/components/sell/CanadianSellingSection";
import SellingAdvantagesSection from "@/components/sell/SellingAdvantagesSection";
import SellContactForm from "@/components/sell/SellContactForm";

const Sell = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <SellHeroSection />
        <CanadianSellingSection />
        <SellingAdvantagesSection />
        <SellContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Sell;
