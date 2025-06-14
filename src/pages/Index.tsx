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
import { Users, Award, TrendingUp, MapPin, Phone, Mail } from "lucide-react";

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
        
        {/* Team Section with Background */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="100">
          <section className="relative py-20 px-6 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Équipe <span className="italic font-light">Le Vasco</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="text-xl leading-relaxed mb-6">
                    Fondée sur l'excellence, nous cultivons une culture d'entreprise basée sur la collaboration, 
                    l'innovation et le service client exceptionnel. Notre équipe multidisciplinaire combine 
                    l'expertise locale avec une vision internationale du marché immobilier canadien.
                  </p>
                  <p className="text-lg leading-relaxed mb-8">
                    <strong>Notre seule mission, c'est votre entière satisfaction</strong>
                  </p>
                  <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
                    Rencontrer l'Équipe
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-white h-10 w-10" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Kais Khayati</h3>
                    <p className="text-sm opacity-90">Courtier Principal</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-white h-10 w-10" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Équipe Expert</h3>
                    <p className="text-sm opacity-90">Conseillers Spécialisés</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Services Section with Cards */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="200">
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Rencontrer Notre Équipe</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Nous sommes là pour vous accompagner dans tous vos projets immobiliers avec une approche personnalisée et professionnelle.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">ACHETER AVEC NOUS</h3>
                    <p className="text-sm mb-4">Trouvez la propriété de vos rêves avec notre expertise du marché canadien</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-blue w-fit">
                      En Savoir Plus
                    </Button>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.8)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">VENDRE AVEC NOUS</h3>
                    <p className="text-sm mb-4">Maximisez la valeur de votre propriété avec notre stratégie de vente</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-red w-fit">
                      En Savoir Plus
                    </Button>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <div 
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(75, 85, 99, 0.8), rgba(75, 85, 99, 0.8)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">NOUS RENCONTRER</h3>
                    <p className="text-sm mb-4">Planifiez une consultation gratuite avec nos experts immobiliers</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700 w-fit">
                      Prendre Rendez-vous
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Statistics Section with Dark Background */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <section className="relative py-20 px-6">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-4 italic">Pourquoi faire affaire avec nous</h2>
              <p className="text-xl mb-12 italic">Nos solutions</p>
              
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-red">27</div>
                  <div className="text-lg">ANNÉES D'EXPÉRIENCE</div>
                  <div className="text-sm opacity-75">CUMULÉES</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-blue">50</div>
                  <div className="text-lg">MILLIONS DE DOLLARS</div>
                  <div className="text-sm opacity-75">CHIFFRE D'AFFAIRES</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-realestate-red">1369</div>
                  <div className="text-lg">CLIENTS SERVIS</div>
                  <div className="text-sm opacity-75">EN 2023</div>
                </div>
              </div>
              
              <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                Nous bâtissons des relations durables basées sur la confiance, l'expertise et des résultats concrets. 
                Votre satisfaction est notre priorité absolue, et nous mettons tout en œuvre pour dépasser vos attentes 
                à chaque étape de votre projet immobilier.
              </p>
            </div>
          </section>
        </div>

        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="400">
          <SellSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="500">
          <FeaturesSection />
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="600">
          <BenefitsSection />
        </div>
        
        {/* Testimonials Section with Background */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="700">
          <section className="relative py-20">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10">
              <div className="text-center mb-12 px-6">
                <h2 className="text-4xl font-bold text-white mb-6">Témoignages</h2>
                <p className="text-xl text-white/90 italic">de nos clients</p>
              </div>
              
              <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                  <p className="text-lg italic mb-6 leading-relaxed">
                    "Notre expérience avec l'équipe Kais Khayati a été exceptionnelle. Leur connaissance approfondie 
                    du marché canadien et leur approche personnalisée nous ont permis de trouver la maison parfaite 
                    pour notre famille. Un service professionnel et humain à la fois."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">- Sarah & Marc</div>
                      <div className="text-sm opacity-75">Acheteurs résidentiels</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12 px-6">
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
                  <div className="text-white/80">4 IMMEUBLE(S)</div>
                  <div className="text-white/80">TOUS LES SECTEURS</div>
                  <div className="text-white/80">OBTENIR $</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="800">
          <StepsSection />
        </div>
        
        {/* Contact Section with Background */}
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="900">
          <section className="relative py-20">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
              <h2 className="text-4xl font-bold mb-4 italic">L'Équipe</h2>
              <h3 className="text-3xl mb-8 italic">Le Vasco</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
                <p className="text-lg mb-6 leading-relaxed">
                  Contactez-nous dès aujourd'hui pour discuter de vos projets immobiliers. 
                  Notre équipe est à votre disposition pour répondre à toutes vos questions 
                  et vous accompagner dans vos démarches.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>(514) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>info@levasco.ca</span>
                  </div>
                </div>
                
                <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
                  Nous Contacter
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
