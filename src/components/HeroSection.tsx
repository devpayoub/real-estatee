import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Headphones, MapPin, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col w-full pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Moving Background Images */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>

        <div className="relative overflow-hidden w-full h-screen">
          {/* Animated strip of 3 images */}
          <div
            className="flex w-[300%] h-full animate-slide-x"
            style={{
              animation: 'slide-x 20s linear infinite',
            }}
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }} />
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }} />
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }} />
          </div>
        </div>

      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Main Hero Content - Text-Focused */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
            Votre Partenaire Immobilier <br />
            de Confiance avec <span className="text-realestate-red">Kais Khayati</span>
          </h1>
          {/* Two Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16" data-aos="fade-up" data-aos-delay="200">
  <Link to="/services?type=buy">
    <Button className="bg-gradient-to-r from-realestate-blue to-realestate-blue/80 hover:from-realestate-darkblue hover:to-realestate-blue text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
      <Home className="mr-3 h-6 w-6" />
      Acheter
    </Button>
  </Link>

  <div className="mx-2">
    <img
      src="/lovable-uploads/logo1.png"
      alt="Logo Kais Khayati"
      className="h-20 w-auto object-contain"
    />
  </div>

  <Link to="/services?type=rent">
    <Button className="bg-gradient-to-r from-realestate-red to-realestate-red/80 hover:from-realestate-darkred hover:to-realestate-red text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
      <MapPin className="mr-3 h-6 w-6" />
      Vendre
    </Button>
  </Link>
</div>


        </div>

        <div className="max-w-6xl mx-auto">
          {/*    <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-aos="fade-right" data-aos-delay="600">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Services Complets</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-realestate-lightblue p-3 rounded-lg">
                    <Home className="text-realestate-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Recherche Personnalisée</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Analyse approfondie de vos besoins, recherche ciblée dans notre base de données 
                      étendue et présélection des propriétés correspondant exactement à vos critères.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-realestate-lightred p-3 rounded-lg">
                    <MapPin className="text-realestate-red h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expertise Locale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connaissance approfondie des quartiers, tendances du marché local, 
                      évaluation précise des propriétés et conseils sur les opportunités d'investissement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-realestate-lightblue to-realestate-lightred p-3 rounded-lg">
                    <Users className="text-gray-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Réseau Professionnel</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Collaboration avec un réseau établi d'inspecteurs, notaires, évaluateurs 
                      et institutions financières pour faciliter toutes vos démarches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-aos="fade-left" data-aos-delay="800">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Approche</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-realestate-blue pl-6 hover:bg-realestate-lightblue/20 p-4 rounded-r-lg transition-colors">
                  <h3 className="font-semibold text-lg mb-2 text-realestate-blue">1. Consultation Initiale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Entretien détaillé pour comprendre vos objectifs, contraintes financières 
                    et préférences. Établissement d'une stratégie personnalisée.
                  </p>
                </div>
                
                <div className="border-l-4 border-realestate-red pl-6 hover:bg-realestate-lightred/20 p-4 rounded-r-lg transition-colors">
                  <h3 className="font-semibold text-lg mb-2 text-realestate-red">2. Recherche Active</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Utilisation de notre réseau étendu et de nos outils de recherche avancés 
                    pour identifier les meilleures opportunités du marché.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-400 pl-6 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">3. Accompagnement Complet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Support continu depuis la première visite jusqu'à la signature finale, 
                    incluant négociation, inspections et coordination des professionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>*/}

          {/* Call to Action */}
          <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-2xl font-bold mb-4">Prêt à Commencer Votre Projet Immobilier?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment
              notre expertise peut vous aider à réaliser vos objectifs immobiliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Consultation Gratuite
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-realestate-blue text-realestate-blue hover:bg-realestate-blue hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Voir Nos Propriétés
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
