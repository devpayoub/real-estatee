
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Badge } from "@/components/ui/badge";
import { Calendar, BadgeCheck, MapPin, Star, User } from "lucide-react";
import { useEffect } from "react";

const About = () => {
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
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Notre Agent</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Avec des années d'expérience et une passion pour l'immobilier, notre agent se consacre à trouver le logement parfait pour vous.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-3xl font-bold mb-6">Kais Khayati</h2>
              <p className="text-gray-700 mb-6">
                Avec plus de 15 ans d'expérience dans le secteur immobilier, Kais s'est imposé comme un agent de confiance et compétent sur le marché. Son engagement envers ses clients et sa connaissance approfondie des quartiers locaux font de lui le partenaire idéal pour votre parcours immobilier.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="150">
                  <Calendar size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Plus de 15 ans d'expérience</p>
                    <p className="text-sm text-gray-600">A débuté sa carrière en 2008</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="200">
                  <MapPin size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Zones d'expertise</p>
                    <p className="text-sm text-gray-600">Paris, Lyon, Régions Côtières</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="250">
                  <User size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Plus de 200 clients satisfaits</p>
                    <p className="text-sm text-gray-600">Aider les familles à trouver leurs maisons de rêve</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
                  <Star size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Noté 5 étoiles</p>
                    <p className="text-sm text-gray-600">Reçoit constamment des avis excellents</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="350">Certifications</h3>
              <div className="flex flex-wrap gap-3 mb-8" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Agent Immobilier Agréé</span>
                </div>
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Spécialiste Résidentiel Certifié</span>
                </div>
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Représentant Accrédité des Acheteurs</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2" data-aos="fade-left" data-aos-delay="100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Agent immobilier professionnel" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-realestate-red text-white">Meilleur Agent 2025</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up" data-aos-delay="450">Points Forts de Carrière</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-realestate-lightred p-6 rounded-lg" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl font-semibold mb-3">Début de Carrière</h3>
                <p className="text-gray-700">A débuté comme agent assistant et a rapidement gravi les échelons grâce à un service client exceptionnel et une connaissance approfondie du marché.</p>
              </div>
              
              <div className="bg-realestate-lightred p-6 rounded-lg" data-aos="fade-up" data-aos-delay="550">
                <h3 className="text-xl font-semibold mb-3">Projets Notables</h3>
                <p className="text-gray-700">A dirigé avec succès la commercialisation et la vente des Résidences Parkview, un ensemble de condominiums haut de gamme.</p>
              </div>
              
              <div className="bg-realestate-lightred p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-xl font-semibold mb-3">Focus Actuel</h3>
                <p className="text-gray-700">Spécialisation dans les propriétés résidentielles de luxe et aide aux clients internationaux à trouver leurs maisons parfaites.</p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
