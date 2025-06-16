
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CalculeHeroSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
              <Calculator className="w-4 h-4 mr-2" />
              CALCUL ET FINANCEMENT
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Calculez Votre
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Financement Idéal
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
              Grâce à nos <strong>partenariats avec des institutions financières réputées</strong> (banques, établissements de crédit, organismes de prêt immobilier), 
              nous serons là pour vous accompagner et vous faciliter l'accès à votre propriété dans les meilleures conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                  <Calculator className="mr-2 h-5 w-5" />
                  Simulation Gratuite
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold">
                  Voir les Propriétés
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-yellow-300" />
                  Avantages Financiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Taux d'intérêt compétitifs</span>
                  </div>
                  <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="400">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Durées de prêt flexibles</span>
                  </div>
                  <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="500">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Pas de frais de dossier</span>
                  </div>
                  <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="600">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Accompagnement personnalisé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculeHeroSection;
