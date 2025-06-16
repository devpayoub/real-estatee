
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, CheckCircle } from "lucide-react";

const FinancingSolutions = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-realestate-blue/10 text-realestate-blue">
            SOLUTIONS DE FINANCEMENT CANADIENNES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Accès à des Offres de
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Financement Privilégiées
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos partenaires financiers proposent des solutions sur mesure pour réaliser votre projet immobilier canadien
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Taux Compétitifs */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taux Hypothécaires Compétitifs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bénéficiez de taux fixes ou variables négociés grâce à notre réseau de partenaires financiers canadiens.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Taux fixes de 5.25% à 5.40%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Taux variables disponibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Négociés par notre réseau</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Durées Flexibles */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Durées d'Amortissement Flexibles</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Choisissez la durée qui correspond à votre situation financière et à vos objectifs au Canada.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">De 25 à 30 ans d'amortissement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Adaptées à votre budget</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Remboursement anticipé possible</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pas de Frais */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pas de Frais de Dossier</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Économisez sur les frais administratifs grâce à nos accords avec nos partenaires canadiens.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Frais de dossier offerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Économies substantielles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Plus de budget pour votre projet</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancingSolutions;
