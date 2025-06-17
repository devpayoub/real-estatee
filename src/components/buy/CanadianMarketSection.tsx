
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Shield } from "lucide-react";

const CanadianMarketSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-green-600/10 to-blue-600/10 text-green-700 border border-green-200/50 shadow-sm">
            <Building2 className="w-5 h-5 mr-2" />
            FINANCEMENT IMMOBILIER
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Votre Projet d'Achat
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Facilité
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
              Grâce à nos <span className="font-semibold text-green-600">partenariats avec des institutions financières réputées</span> (banques, 
              établissements de crédit, organismes de prêt immobilier), nous serons là pour vous accompagner 
              et vous faciliter l'accès à votre propriété dans les meilleures conditions.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Card 1: Offres de Financement */}
          <Card className="group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 border-0 bg-white/70 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-green-500/30">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-green-700 transition-colors">
                1. Accès à des Offres de Financement Privilégiées
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nos partenaires financiers proposent des solutions sur mesure, incluant :
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 group-hover:bg-green-50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-700">Taux d'intérêt compétitifs</span> (fixes ou variables) négociés grâce à notre réseau.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 group-hover:bg-green-50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-700">Durées de prêt flexibles</span> (de 25 à 30 ans).
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 group-hover:bg-green-50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-700">Pas de Frais de dossier</span>.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Accompagnement Personnalisé */}
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 border-0 bg-white/70 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/30">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-blue-700 transition-colors">
                2. Un Accompagnement Personnalisé
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-700">Simulation gratuite</span> : Estimation de votre capacité d'emprunt et montant envisageable.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-700">Dossier simplifié</span> : Centralisation des démarches avec nos partenaires pour gagner du temps.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-700">Conseils experts</span> : Choix entre prêt conventionnel ou assuré.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Avantages Exclusifs */}
          <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 border-0 bg-white/70 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-500/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-purple-700 transition-colors">
                3. Avantages Exclusifs
              </h3>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                En passant par notre réseau, vous bénéficiez :
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50 group-hover:bg-purple-50 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    D'une <span className="font-semibold text-purple-700">étude préalable accélérée</span> pour valider votre qualification.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50 group-hover:bg-purple-50 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    De <span className="font-semibold text-purple-700">conditions préférentielles</span> réservées à nos clients.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50 group-hover:bg-purple-50 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    D'un <span className="font-semibold text-purple-700">suivi jusqu'à la signature de l'hypothèque</span>.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CanadianMarketSection;
