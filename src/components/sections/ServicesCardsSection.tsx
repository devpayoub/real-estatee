
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Users } from "lucide-react";

const ServicesCardsSection = () => {
  return (
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
  );
};

export default ServicesCardsSection;
