
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection";
import TeamSection from "@/components/sections/TeamSection";
import ServicesCardsSection from "@/components/sections/ServicesCardsSection";
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
    
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="animate-on-scroll opacity-0" data-aos="fade-up">
          <HeroSection />
        </div>

        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="100">
          <FeaturedPropertiesSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="200">
          <TeamSection />
        </div>

        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <ServicesCardsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
