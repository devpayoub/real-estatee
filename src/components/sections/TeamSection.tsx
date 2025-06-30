import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamSection = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #003DA5 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #e4002b 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-realestate-blue/10 to-realestate-red/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-realestate-red/10 to-realestate-blue/10 rounded-full animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 rounded-full border border-realestate-blue/20 mb-6">
            <Star className="w-4 h-4 text-realestate-blue" />
            <span className="text-realestate-blue font-semibold text-sm">RENCONTREZ NOTRE ÉQUIPE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Notre
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Expert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plus de 15 ans d'expertise au service de votre réussite immobilière
          </p>
        </div>

        {/* Agent Card */}
        <div className="flex justify-center">
          <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-gray-100 max-w-md w-full">
            {/* Agent Image */}
            <div className="relative h-80 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('/lovable-uploads/face.jpg')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Professional Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-realestate-blue font-semibold text-sm">Expert Certifié</span>
                </div>
              </div>
              
              {/* Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold text-white mb-2">Kais Khayati</h3>
                <p className="text-white/90 text-lg">Courtier Principal & Fondateur</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  "Chaque client mérite une approche unique. Notre mission est de transformer 
                  vos rêves immobiliers en réalité."
                </p>
              </div>
              
              {/* Experience Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-realestate-blue/5 to-realestate-blue/10 rounded-2xl">
                  <div className="text-2xl font-bold text-realestate-blue">15+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-realestate-red/5 to-realestate-red/10 rounded-2xl">
                  <div className="text-2xl font-bold text-realestate-red">500+</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                onClick={handleAboutClick}
                className="w-full bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-blue/90 hover:to-realestate-red/90 text-white rounded-2xl py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
              >
                <span>En Savoir Plus</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/5 to-realestate-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default TeamSection;
