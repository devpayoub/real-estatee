
import { Button } from "@/components/ui/button";
import { Users, TrendingUp } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Équipe <span className="italic font-light">Le Vasco</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Une expertise immobilière reconnue au Canada, avec plus de 15 ans d'expérience 
            dans l'accompagnement de familles et d'investisseurs vers leurs objectifs immobiliers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
            <p className="text-lg leading-relaxed mb-6">
              Chez Le Vasco, nous croyons que chaque transaction immobilière est unique. 
              Notre approche personnalisée combine l'expertise du marché canadien avec 
              un service client d'exception, garantissant des résultats qui dépassent vos attentes.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              <strong>Notre seule mission, c'est votre entière satisfaction</strong>
            </p>
            <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
              Rencontrer Kais Khayati
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Kais Khayati</h4>
              <p className="text-sm opacity-90">Courtier Principal</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-white h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Expertise</h4>
              <p className="text-sm opacity-90">Marché Canadien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
