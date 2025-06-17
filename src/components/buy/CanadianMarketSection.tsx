
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Shield } from "lucide-react";

const CanadianMarketSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-green-600/10 text-green-600">
            <Building2 className="w-4 h-4 mr-2" />
            FINANCEMENT IMMOBILIER
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre Projet d'Achat
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Facilité
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
              Grâce à nos <strong>partenariats avec des institutions financières réputées</strong> (banques, 
              établissements de crédit, organismes de prêt immobilier), nous serons là pour vous accompagner 
              et vous faciliter l'accès à votre propriété dans les meilleures conditions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Section 1: Offres de Financement */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">1. Accès à des Offres de Financement Privilégiées</h3>
              <p className="text-gray-600 mb-6">
                Nos partenaires financiers proposent des solutions sur mesure, incluant :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Taux d'intérêt compétitifs</strong> (fixes ou variables) négociés grâce à notre réseau.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Durées de prêt flexibles</strong> (de 25 à 30 ans).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Pas de Frais de dossier</strong>.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2: Accompagnement Personnalisé */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">2. Un Accompagnement Personnalisé</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>Simulation gratuite</strong> : Estimation de votre capacité d'emprunt et montant envisageable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>Dossier simplifié</strong> : Centralisation des démarches avec nos partenaires pour gagner du temps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>Conseils experts</strong> : Choix entre prêt conventionnel ou assuré.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3: Avantages Exclusifs */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">3. Avantages Exclusifs</h3>
              <p className="text-gray-600 mb-4">
                En passant par notre réseau, vous bénéficiez :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>D'une <strong>étude préalable accélérée</strong> pour valider votre qualification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>De <strong>conditions préférentielles</strong> réservées à nos clients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>D'un <strong>suivi jusqu'à la signature de l'hypothèque</strong>.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CanadianMarketSection;
