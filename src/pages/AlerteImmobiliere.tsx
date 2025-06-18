
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell, Search, MapPin } from "lucide-react";

const AlerteImmobiliere = () => {
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
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Badge className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              <Bell className="w-4 h-4 mr-2" />
              ALERTE IMMOBILIÈRE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ne Manquez Plus Jamais
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}Votre Propriété Idéale
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Configurez vos alertes personnalisées et soyez le premier informé des nouvelles propriétés qui correspondent à vos critères
            </p>
          </div>
        </section>

        {/* Alert Configuration */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Configurez Vos Alertes
              </h2>
              <p className="text-gray-600 text-lg">
                Définissez vos critères de recherche pour recevoir des notifications personnalisées
              </p>
            </div>

            <Card className="shadow-xl border-none" data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Critères de Recherche</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location">Secteur/Ville</Label>
                    <Input id="location" placeholder="Montréal, Toronto, Vancouver..." className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="property-types">Types de Propriété</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="house" />
                        <Label htmlFor="house">Maison</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="condo" />
                        <Label htmlFor="condo">Condo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="duplex" />
                        <Label htmlFor="duplex">Duplex</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="min-price">Prix Minimum</Label>
                    <Input id="min-price" type="number" placeholder="300000" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="max-price">Prix Maximum</Label>
                    <Input id="max-price" type="number" placeholder="800000" className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="min-bedrooms">Chambres Min.</Label>
                    <Input id="min-bedrooms" type="number" placeholder="2" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="min-bathrooms">Salles de bain Min.</Label>
                    <Input id="min-bathrooms" type="number" placeholder="1" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="min-sqft">Superficie Min. (pi²)</Label>
                    <Input id="min-sqft" type="number" placeholder="1000" className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="alert-name">Nom de l'Alerte</Label>
                    <Input id="alert-name" placeholder="Ma recherche Montréal" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="alert-email">Email pour les Alertes</Label>
                    <Input id="alert-email" type="email" placeholder="votre@email.com" className="mt-2" />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg">
                  <Bell className="mr-2 h-5 w-5" />
                  Créer Mon Alerte
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

export default AlerteImmobiliere;
