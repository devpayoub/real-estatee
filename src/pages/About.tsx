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
                    <p className="text-sm text-gray-600">Longueuil, QC, Canada, Quebec</p>
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
                  src="../../lovable-uploads/face.jpg" 
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
        
        {/* Gallery Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-blue-red bg-clip-text text-transparent">Galerie</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez quelques moments marquants de notre parcours professionnel à travers ces images exclusives
              </p>
            </div>
            
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
              {/* Large featured image */}
              <div className="col-span-12 lg:col-span-8" data-aos="fade-up" data-aos-delay="100">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                    alt="Maison moderne de luxe"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold mb-2">Villa de Prestige</h3>
                    <p className="text-gray-200">Architecture contemporaine exclusive</p>
                  </div>
                </div>
              </div>
              
              {/* Two stacked images */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-44" data-aos="fade-up" data-aos-delay="200">
                  <img 
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" 
                    alt="Intérieur élégant"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-realestate-red/20 to-realestate-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-44" data-aos="fade-up" data-aos-delay="300">
                  <img 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80" 
                    alt="Bureau professionnel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/20 to-realestate-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Bottom row - two equal images */}
              <div className="col-span-12 md:col-span-6" data-aos="fade-up" data-aos-delay="400">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-72">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                    alt="Cuisine moderne"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-4 ring-white/20 ring-inset rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Cuisine Design
                  </div>
                </div>
              </div>
              
              <div className="col-span-12 md:col-span-6" data-aos="fade-up" data-aos-delay="500">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-72">
                  <img 
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" 
                    alt="Salon contemporain"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-4 ring-white/20 ring-inset rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Salon Premium
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-realestate-red/10 to-realestate-blue/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-realestate-blue/10 to-realestate-red/10 rounded-full blur-xl" />
          </div>
        </section>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
