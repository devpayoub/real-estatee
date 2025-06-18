
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BuyHeroSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue to-realestate-red overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
              <Home className="w-4 h-4 mr-2" />
              ACHETER AU CANADA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Trouvez Votre
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Maison de Rêve
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Le marché immobilier canadien offre des opportunités exceptionnelles pour les acheteurs. 
              Avec nos <strong>partenaires financiers canadiens réputés</strong> et notre connaissance approfondie du marché local, 
              nous vous accompagnons dans l'acquisition de votre propriété idéale dans les meilleures conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                <MapPin className="mr-2 h-5 w-5" />
                Explorer les Propriétés
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold">
                  Consultation Gratuite
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" 
                alt="Maison canadienne moderne" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyHeroSection;
