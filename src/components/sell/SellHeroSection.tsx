
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SellHeroSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551038247-3d9af20df552?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
              <DollarSign className="w-4 h-4 mr-2" />
              VENDRE AU CANADA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vendez au
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Meilleur Prix
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Maximisez la valeur de votre propriété canadienne avec notre expertise du marché local. 
              Grâce à notre <strong>réseau d'acheteurs qualifiés</strong> et nos stratégies de marketing innovantes, 
              nous vendons votre bien rapidement et au meilleur prix du marché.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                <TrendingUp className="mr-2 h-5 w-5" />
                Évaluation Gratuite
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold">
                  Consultation Expert
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Analyse de marché immobilier" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl" data-aos="zoom-in" data-aos-delay="400">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-bold text-2xl text-gray-800">98%</p>
                  <p className="text-sm text-gray-600">Taux de satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellHeroSection;
