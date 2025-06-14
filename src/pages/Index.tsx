
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SellSection from "@/components/SellSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Phone, Mail, MapPin, Home, TrendingUp } from "lucide-react";

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

        {/* Propriétés En Vedette Section - Inspired by reference */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="100">
          <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Propriétés <span className="italic font-light">En Vedette</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez notre sélection de propriétés exceptionnelles, choisies pour leur qualité, 
                  leur emplacement et leur potentiel d'investissement.
                </p>
              </div>

              {/* Featured Property with Background */}
              <div className="relative mb-16 rounded-xl overflow-hidden shadow-2xl">
                <div 
                  className="h-96 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">Villa Exclusive Toronto</h3>
                      <p className="text-xl mb-4">Architecture moderne • 4 chambres • 850,000$</p>
                      <div className="flex justify-center gap-4">
                        <Button className="bg-realestate-red hover:bg-realestate-darkred text-white">
                          Visiter Virtuellement
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                          Plus de Détails
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Équipe Section - Inspired by reference image style */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="200">
          <section className="relative py-20 px-6">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto text-white">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Équipe <span className="italic font-light">Le Vasco</span>
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                  Une expertise immobilière reconnue au Canada, avec plus de 15 ans d'expérience 
                  dans l'accompagnement de familles et d'investisseurs vers leurs objectifs immobiliers.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Chez Le Vasco, nous croyons que chaque transaction immobilière est unique. 
                    Notre approche personnalisée combine l'expertise du marché canadien avec 
                    un service client d'exception, garantissant des résultats qui dépassent vos attentes.
                  </p>
                  <p className="text-lg leading-relaxed mb-8">
                    <strong>Notre seule mission, c'est votre entière satisfaction</strong>
                  </p>
                  <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
                    Rencontrer Kais Khayati
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-lg text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Kais Khayati</h4>
                    <p className="text-sm opacity-90">Courtier Principal</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-lg text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Expertise</h4>
                    <p className="text-sm opacity-90">Marché Canadien</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Services Cards Section */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Un accompagnement complet pour tous vos projets immobiliers au Canada
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="mb-4">
                      <Home className="h-8 w-8 mb-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ACHETER AVEC NOUS</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      Trouvez la propriété parfaite grâce à notre connaissance approfondie 
                      du marché immobilier canadien et notre réseau d'experts.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-blue w-fit">
                      Découvrir
                    </Button>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.8)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="mb-4">
                      <TrendingUp className="h-8 w-8 mb-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">VENDRE AVEC NOUS</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      Maximisez la valeur de votre propriété avec notre stratégie de marketing 
                      innovante et notre expertise en négociation.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-red w-fit">
                      Évaluer
                    </Button>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(75, 85, 99, 0.8), rgba(75, 85, 99, 0.8)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="mb-4">
                      <Users className="h-8 w-8 mb-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">CONSULTATION</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      Bénéficiez de conseils personnalisés pour optimiser vos investissements 
                      et prendre les meilleures décisions immobilières.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700 w-fit">
                      Consulter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Pourquoi Nous Choisir - Statistics Section */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="400">
          <section className="relative py-20 px-6">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Pourquoi faire affaire avec nous</h2>
              <p className="text-xl mb-16 italic text-gray-200">Des résultats qui parlent d'eux-mêmes</p>
              
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-red">27</div>
                  <div className="text-lg font-semibold">ANNÉES D'EXPÉRIENCE</div>
                  <div className="text-sm opacity-75">CUMULÉES</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-blue">50M$</div>
                  <div className="text-lg font-semibold">CHIFFRE D'AFFAIRES</div>
                  <div className="text-sm opacity-75">TRANSACTIONS RÉALISÉES</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-red">1369</div>
                  <div className="text-lg font-semibold">CLIENTS SATISFAITS</div>
                  <div className="text-sm opacity-75">EN 2023</div>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed mb-8">
                  Notre expertise du marché immobilier canadien, combinée à une approche personnalisée 
                  et un service client exceptionnel, nous permet d'obtenir des résultats qui dépassent 
                  constamment les attentes de nos clients.
                </p>
                <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
                  Découvrir Notre Approche
                </Button>
              </div>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="500">
          <SellSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="600">
          <BenefitsSection />
        </div>
        
        {/* Original Testimonials Carousel */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="700">
          <TestimonialsCarousel />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="800">
          <StepsSection />
        </div>
        
        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="900">
          <section className="relative py-20">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Contactez</h2>
              <h3 className="text-3xl mb-8 italic">L'Équipe Le Vasco</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
                <p className="text-lg mb-6 leading-relaxed">
                  Prêt à concrétiser vos projets immobiliers? Notre équipe d'experts est là 
                  pour vous accompagner à chaque étape de votre parcours.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>(514) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>contact@levasco.ca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Montréal, QC</span>
                  </div>
                </div>
                
                <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
                  Prendre Rendez-vous
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
