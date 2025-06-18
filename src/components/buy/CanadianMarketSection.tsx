
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Shield } from "lucide-react";

const CanadianMarketSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-realestate-lightblue/30 to-realestate-lightred/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-realestate-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-realestate-red rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-realestate-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <Badge className="mb-6 px-8 py-4 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 text-realestate-blue border border-realestate-blue/20 shadow-sm text-sm font-semibold tracking-wide">
            <Building2 className="w-5 h-5 mr-2" />
            FINANCEMENT IMMOBILIER
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Votre Projet d'Achat
            <span className="block bg-gradient-to-r from-realestate-blue via-realestate-blue to-realestate-red bg-clip-text text-transparent mt-2">
              Facilité
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
              Grâce à nos <span className="font-semibold text-realestate-blue">partenariats avec des institutions financières réputées</span> (banques, 
              établissements de crédit, organismes de prêt immobilier), nous serons là pour vous accompagner 
              et vous faciliter l'accès à votre propriété dans les meilleures conditions.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Card 1: Offres de Financement */}
          <Card className="group hover:shadow-2xl hover:shadow-realestate-blue/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/5 to-realestate-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-realestate-blue to-realestate-red"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-realestate-blue to-realestate-red rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-realestate-blue/25">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-realestate-blue transition-colors">
                1. Accès à des Offres de Financement Privilégiées
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nos partenaires financiers proposent des solutions sur mesure, incluant :
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-blue">Taux d'intérêt compétitifs</span> (fixes ou variables) négociés grâce à notre réseau.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-blue">Durées de prêt flexibles</span> (de 25 à 30 ans).
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-blue">Pas de Frais de dossier</span>.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Accompagnement Personnalisé */}
          <Card className="group hover:shadow-2xl hover:shadow-realestate-red/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-realestate-red/5 to-realestate-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-realestate-red to-realestate-blue"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-realestate-red to-realestate-blue rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-realestate-red/25">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-realestate-red transition-colors">
                2. Un Accompagnement Personnalisé
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightred/60 group-hover:bg-realestate-lightred transition-colors border border-realestate-red/20">
                  <div className="w-2 h-2 bg-realestate-red rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-red">Simulation gratuite</span> : Estimation de votre capacité d'emprunt et montant envisageable.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightred/60 group-hover:bg-realestate-lightred transition-colors border border-realestate-red/20">
                  <div className="w-2 h-2 bg-realestate-red rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-red">Dossier simplifié</span> : Centralisation des démarches avec nos partenaires pour gagner du temps.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightred/60 group-hover:bg-realestate-lightred transition-colors border border-realestate-red/20">
                  <div className="w-2 h-2 bg-realestate-red rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-realestate-red">Conseils experts</span> : Choix entre prêt conventionnel ou assuré.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Avantages Exclusifs */}
          <Card className="group hover:shadow-2xl hover:shadow-realestate-blue/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="300">
            <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/5 to-realestate-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-realestate-blue to-realestate-red"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-realestate-blue to-realestate-red rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-realestate-blue/25">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-realestate-blue transition-colors">
                3. Avantages Exclusifs
              </h3>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                En passant par notre réseau, vous bénéficiez :
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    D'une <span className="font-semibold text-realestate-blue">étude préalable accélérée</span> pour valider votre qualification.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    De <span className="font-semibold text-realestate-blue">conditions préférentielles</span> réservées à nos clients.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-realestate-lightblue/60 group-hover:bg-realestate-lightblue transition-colors border border-realestate-blue/20">
                  <div className="w-2 h-2 bg-realestate-blue rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    D'un <span className="font-semibold text-realestate-blue">suivi jusqu'à la signature de l'hypothèque</span>.
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
