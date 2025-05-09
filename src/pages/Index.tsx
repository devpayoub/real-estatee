
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SellSection from "@/components/SellSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import PropertyCardDetailed from "@/components/PropertyCardDetailed";
import { properties, Property } from "@/data/properties";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  
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

    // Get 3 random properties for the featured section
    setFeaturedProperties(properties.slice(0, 3));

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
          <SellSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="200">
          <FeaturesSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <BenefitsSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="400">
          <section className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our selection of premium properties available for rent or purchase
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property, index) => (
                <div key={property.id} data-aos="fade-up" data-aos-delay={450 + (index * 100)}>
                  <PropertyCardDetailed property={property} />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button className="bg-realestate-blue hover:bg-realestate-darkblue rounded-full">
                  View All Properties
                </Button>
              </Link>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="500">
          <StepsSection />
        </div>
        
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
