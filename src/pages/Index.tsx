
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
        
        {/* Canadian Market Information Section */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="100">
          <section className="container mx-auto px-6 py-16 bg-gray-50">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Marché Immobilier Canadien</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Le marché immobilier canadien offre des opportunités exceptionnelles pour les investisseurs et les familles. 
                  Avec des taux d'intérêt compétitifs et une économie stable, le Canada continue d'attirer des acheteurs 
                  du monde entier. Notre expertise locale nous permet de vous guider à travers les nuances du marché 
                  immobilier français au Canada.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-realestate-blue">
                    <h3 className="font-bold text-xl mb-4 text-realestate-blue">Stabilité du Marché</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Le système bancaire canadien, reconnu mondialement pour sa solidité, offre des conditions 
                      de financement favorables. Les politiques gouvernementales soutiennent l'accession à la 
                      propriété tout en maintenant l'équilibre du marché.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-realestate-red">
                    <h3 className="font-bold text-xl mb-4 text-realestate-red">Diversité Géographique</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Des métropoles dynamiques comme Toronto et Vancouver aux charmantes villes de province, 
                      le Canada offre une variété de marchés immobiliers adaptés à tous les styles de vie et budgets. 
                      Chaque région présente ses propres avantages et opportunités d'investissement.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-500">
                    <h3 className="font-bold text-xl mb-4 text-gray-700">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Notre approche canadienne privilégie la transparence et l'accompagnement à long terme. 
                      Nous prenons le temps de comprendre vos besoins spécifiques et vous fournissons toutes 
                      les informations nécessaires pour prendre des décisions éclairées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="200">
          <SellSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <FeaturesSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="400">
          <BenefitsSection />
        </div>
        
        {/* Detailed Information Section with minimal imagery */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="450">
          <section className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Services Immobiliers Complets</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Notre approche canadienne met l'accent sur l'information détaillée et la transparence. 
                Nous croyons qu'un client bien informé prend les meilleures décisions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-realestate-blue">Achat de Propriété</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    L'achat d'une propriété au Canada implique plusieurs étapes importantes que nous vous 
                    accompagnons à franchir. De l'obtention du financement à la finalisation de l'acte 
                    de vente, notre équipe s'assure que chaque détail est pris en compte.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Évaluation complète de votre capacité financière</li>
                    <li>Recherche personnalisée selon vos critères</li>
                    <li>Inspection professionnelle des propriétés</li>
                    <li>Négociation des conditions d'achat</li>
                    <li>Coordination avec les professionnels (notaires, inspecteurs)</li>
                  </ul>
                  <p>
                    Notre connaissance approfondie du marché local nous permet de vous conseiller 
                    sur les quartiers en développement et les opportunités d'investissement.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-realestate-red">Vente de Propriété</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Vendre votre propriété nécessite une stratégie marketing adaptée au marché canadien. 
                    Nous utilisons une approche méthodique pour maximiser la valeur de votre bien.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Évaluation précise basée sur l'analyse comparative du marché</li>
                    <li>Préparation et mise en valeur de votre propriété</li>
                    <li>Stratégie de marketing ciblée et multiplateforme</li>
                    <li>Gestion des visites et négociation avec les acheteurs</li>
                    <li>Accompagnement jusqu'à la signature finale</li>
                  </ul>
                  <p>
                    Notre réseau étendu et notre réputation nous permettent d'attirer des acheteurs 
                    qualifiés et de réduire le temps de vente.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Minimal property showcase - text-focused */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Propriétés Sélectionnées</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredProperties.map((property, index) => (
                  <div key={property.id} className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        property.type === "buy" 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-green-100 text-green-700"
                      }`}>
                        {property.type === "buy" ? "À Vendre" : "À Louer"}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{property.title}</h4>
                    <p className="text-gray-600 mb-3 text-sm">{property.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{property.description}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{property.bedrooms} ch.</span>
                      <span>{property.bathrooms} sdb</span>
                      <span>{property.area} m²</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button className="bg-realestate-red hover:bg-realestate-darkred text-white rounded-full px-8 py-3">
                  Découvrir Toutes Nos Propriétés
                </Button>
              </Link>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="600">
          <StepsSection />
        </div>
        
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
