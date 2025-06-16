
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Percent, Star } from "lucide-react";

const FinancingPartners = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-blue-600/10 text-blue-600">
            <Building2 className="w-4 h-4 mr-2" />
            PARTENAIRES FINANCIERS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Accès à des Offres de
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Financement Privilégiées
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos partenaires financiers proposent des solutions sur mesure pour réaliser votre projet immobilier
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Taux Compétitifs */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden hover:scale-105" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taux d'Intérêt Compétitifs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <em>Taux d'intérêt compétitifs</em> (fixes ou variables) négociés grâce à notre réseau.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Taux fixes négociés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Taux variables disponibles</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Durées Flexibles */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Durées de Prêt Flexibles</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <em>Durées de prêt flexibles</em> (de 25 à 30 ans) adaptées à votre situation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">25 à 30 ans disponibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Adaptées à votre budget</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pas de Frais */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden hover:scale-105" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pas de Frais de Dossier</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <em>Pas de frais de dossier</em> pour économiser sur les coûts administratifs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Frais de dossier offerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Économies garanties</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancingPartners;
