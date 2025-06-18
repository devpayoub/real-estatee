
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Home, MapPin, Calculator } from "lucide-react";

const EvaluationGratuite = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Badge className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              <Home className="w-4 h-4 mr-2" />
              ÉVALUATION GRATUITE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Découvrez la Valeur de
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}Votre Propriété
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Obtenez une estimation précise et gratuite de votre propriété avec notre expertise du marché immobilier canadien
            </p>
          </div>
        </section>

        {/* Evaluation Form */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Formulaire d'Évaluation
              </h2>
              <p className="text-gray-600 text-lg">
                Remplissez ce formulaire pour recevoir votre évaluation gratuite
              </p>
            </div>

            <Card className="shadow-xl border-none" data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Informations sur la Propriété</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="address">Adresse Complète *</Label>
                    <Input id="address" placeholder="123 Rue Principale, Ville, Province" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="property-type">Type de Propriété *</Label>
                    <Input id="property-type" placeholder="Maison, Condo, Duplex..." className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="bedrooms">Chambres</Label>
                    <Input id="bedrooms" type="number" placeholder="3" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="bathrooms">Salles de bain</Label>
                    <Input id="bathrooms" type="number" placeholder="2" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="square-feet">Superficie (pi²)</Label>
                    <Input id="square-feet" type="number" placeholder="1500" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="additional-info">Informations Additionnelles</Label>
                  <Textarea 
                    id="additional-info" 
                    placeholder="Rénovations récentes, particularités du terrain, etc."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input id="name" placeholder="Votre nom" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" className="mt-2" />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Obtenir Mon Évaluation Gratuite
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EvaluationGratuite;
