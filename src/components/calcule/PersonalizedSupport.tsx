
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, Lightbulb } from "lucide-react";

const PersonalizedSupport = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-purple-600/10 text-purple-600">
            <Users className="w-4 h-4 mr-2" />
            ACCOMPAGNEMENT PERSONNALISÉ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un Accompagnement
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Personnalisé
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts vous accompagne à chaque étape de votre projet de financement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Simulation Gratuite */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simulation Gratuite</h3>
              <p className="text-gray-600 leading-relaxed">
                <em>Simulation gratuite</em> : Estimation de votre capacité d'emprunt et montant envisageable.
              </p>
            </CardContent>
          </Card>

          {/* Dossier Simplifié */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dossier Simplifié</h3>
              <p className="text-gray-600 leading-relaxed">
                <em>Dossier simplifié</em> : Centralisation des démarches avec nos partenaires pour gagner du temps.
              </p>
            </CardContent>
          </Card>

          {/* Conseils Experts */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conseils Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                <em>Conseils experts</em> : Choix entre prêt conventionnel ou assuré selon votre profil.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSupport;
