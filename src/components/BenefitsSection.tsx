
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BenefitsSection = () => {

  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #003DA5 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, #e4002b 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>


      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-realestate-blue/10 to-realestate-red/10 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-realestate-red/10 to-realestate-blue/10 rounded-full animate-pulse delay-1000 pointer-events-none"></div>

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
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Image with Hover Effect */}
        <div className="flex-1 group relative w-full max-w-md mx-auto">
          <img
            src="/lovable-uploads/face.jpg"
            alt="Kais Khayati - Courtier"
            className="w-full h-[450px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/5 to-realestate-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-3xl font-bold">
            Kais Khayati
            <br />
            <span className="text-realestate-blue text-xl font-medium">
              Courtier Principal & Fondateur
            </span>
          </h3>

          <p className="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0">
            Nos agents expérimentés et nos outils d'analyse de marché vous aident à trouver la propriété idéale ou à vendre votre maison au meilleur prix.
          </p>

          {/* Badge */}
          <div className="mt-4 inline-block bg-white/80 backdrop-blur-md rounded-full px-4 py-1 text-sm font-semibold text-realestate-blue border border-realestate-blue/10 shadow-sm">
            Expert Certifié
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8 max-w-xs mx-auto lg:mx-0">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-realestate-blue/5 to-realestate-blue/10 text-center">
              <div className="text-3xl font-bold text-realestate-blue">15+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-realestate-red/5 to-realestate-red/10 text-center">
              <div className="text-3xl font-bold text-realestate-red">500+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              onClick={handleAboutClick}
              className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full px-8 py-3 flex items-center mx-auto lg:mx-0"
            >
              En Savoir Plus
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
