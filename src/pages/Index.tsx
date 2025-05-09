
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SellSection from "@/components/SellSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Simulate scroll animations effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };

    // Run once on mount
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="animate-on-scroll opacity-0">
          <HeroSection />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <SellSection />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <FeaturesSection />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <BenefitsSection />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <StepsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
