
import { DisplayProperty } from "@/types/property";
import { Shield, Building2, TrendingUp, Users, Badge, Mail, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ServiceFrom from "./ServiceForm";
import MultiSteps from "../MultiSteps";

interface BuySectionProps {
  properties: DisplayProperty[];
}

const BuySection = ({ properties }: BuySectionProps) => {
  return (
    <>
      <section className=" px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="100-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20" data-aos="fade-up">
            <Badge className="mb-6 px-8 py-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 border border-blue-200/50 shadow-sm text-sm font-semibold tracking-wide">
              <Building2 className="w-5 h-5 mr-2" />
              FINANCEMENT IMMOBILIER
            </Badge>

            <h2 className="text-5xl md:text-4xl font-bold mb-8 leading-tight">
              Votre Projet d'Achat
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Facilité
              </span>
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté.
                Grâce à nos <span className="font-semibold text-blue-600">partenariats avec des institutions financières réputées</span> (banques,
                établissements de crédit, organismes de prêt immobilier), nous serons là pour vous accompagner
                et vous faciliter l'accès à votre propriété dans les meilleures conditions.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Card 1: Offres de Financement */}
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardContent className="p-10 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/25">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-blue-700 transition-colors">
                  1. Accès à des Offres de Financement Privilégiées
                </h3>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Nos partenaires financiers proposent des solutions sur mesure, incluant :
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/60 group-hover:bg-blue-50 transition-colors border border-blue-100/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-700">Taux d'intérêt compétitifs</span> (fixes ou variables) négociés grâce à notre réseau.
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/60 group-hover:bg-blue-50 transition-colors border border-blue-100/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-700">Durées de prêt flexibles</span> (de 25 à 30 ans).
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/60 group-hover:bg-blue-50 transition-colors border border-blue-100/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-700">Pas de Frais de dossier</span>.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Accompagnement Personnalisé */}
            <Card className="group hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <CardContent className="p-10 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-indigo-500/25">
                  <Users className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-indigo-700 transition-colors">
                  2. Un Accompagnement Personnalisé
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-indigo-50/60 group-hover:bg-indigo-50 transition-colors border border-indigo-100/50">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-indigo-700">Simulation gratuite</span> : Estimation de votre capacité d'emprunt et montant envisageable.
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-indigo-50/60 group-hover:bg-indigo-50 transition-colors border border-indigo-100/50">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-indigo-700">Dossier simplifié</span> : Centralisation des démarches avec nos partenaires pour gagner du temps.
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-indigo-50/60 group-hover:bg-indigo-50 transition-colors border border-indigo-100/50">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-indigo-700">Conseils experts</span> : Choix entre prêt conventionnel ou assuré.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Avantages Exclusifs */}
            <Card className="group hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <CardContent className="p-10 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-500/25">
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 group-hover:text-purple-700 transition-colors">
                  3. Avantages Exclusifs
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  En passant par notre réseau, vous bénéficiez :
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-purple-50/60 group-hover:bg-purple-50 transition-colors border border-purple-100/50">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      D'une <span className="font-semibold text-purple-700">étude préalable accélérée</span> pour valider votre qualification.
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-purple-50/60 group-hover:bg-purple-50 transition-colors border border-purple-100/50">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      De <span className="font-semibold text-purple-700">conditions préférentielles</span> réservées à nos clients.
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-purple-50/60 group-hover:bg-purple-50 transition-colors border border-purple-100/50">
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

        {/* Contact Form Section */}
        <ServiceFrom />
      </section>
    </>
  );
};

export default BuySection;
