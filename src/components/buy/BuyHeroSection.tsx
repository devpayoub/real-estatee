
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BuyHeroSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue/90 to-realestate-red overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
              <Home className="w-4 h-4 mr-2" />
              ACHAT IMMOBILIER AU CANADA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Achetez Votre
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Maison de Rêve
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
              Grâce à nos <strong>partenariats avec des institutions financières canadiennes réputées</strong>, 
              nous serons là pour vous accompagner et vous faciliter l'accès à votre propriété dans les meilleures conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
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
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-6">Avantages Exclusifs Canada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Taux hypothécaires compétitifs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Admissibilité SCHL disponible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Crédit d'impôt pour acheteurs</span>
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

export default BuyHeroSection;
