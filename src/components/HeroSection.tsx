
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Home, Building } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-realestate-blue via-blue-600 to-realestate-red overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Trouvez Votre
            <span className="block text-yellow-300">Maison de Rêve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Découvrez les meilleures propriétés au Canada avec notre service immobilier expert
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl mb-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Localisation"
                  className="pl-10 h-12 border-gray-200 focus:border-realestate-blue text-gray-800"
                />
              </div>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Type de propriété"
                  className="pl-10 h-12 border-gray-200 focus:border-realestate-blue text-gray-800"
                />
              </div>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Budget max"
                  className="pl-10 h-12 border-gray-200 focus:border-realestate-blue text-gray-800"
                />
              </div>
              <Link to="/services" className="w-full">
                <Button className="w-full h-12 bg-realestate-red hover:bg-realestate-darkred text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <Search className="mr-2 h-5 w-5" />
                  Rechercher
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <Link to="/services?type=buy">
              <Button 
                size="lg"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Home className="mr-2 h-5 w-5" />
                Acheter une Maison
              </Button>
            </Link>
            <Link to="/services?type=rent">
              <Button 
                size="lg"
                className="px-8 py-4 bg-realestate-red hover:bg-realestate-darkred text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Building className="mr-2 h-5 w-5" />
                Vendre une Maison
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
