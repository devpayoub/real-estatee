
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, TrendingUp, Calculator, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const EvaluationGratuite = () => {
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire d'évaluation soumis:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30" data-aos="fade-up">
              <Home className="w-4 h-4 mr-2" />
              ÉVALUATION GRATUITE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Connaître la Valeur
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                de Votre Propriété
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Obtenez une évaluation professionnelle et gratuite de votre propriété. 
              Notre expertise du marché local vous garantit une estimation précise et actualisée.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Évaluation Précise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Analyse approfondie basée sur les ventes récentes et les tendances du marché local.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-realestate-red to-realestate-blue rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Rapport Détaillé</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recevez un rapport complet avec les facteurs qui influencent la valeur de votre bien.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Service Gratuit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aucun frais, aucun engagement. Profitez de notre expertise sans contrainte.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6">
                Formulaire d'Évaluation
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Gratuite
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez ce formulaire pour recevoir votre évaluation personnalisée
              </p>
            </div>

            <Card className="shadow-2xl border-0" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="address" className="text-realestate-blue font-semibold">Adresse de la propriété *</Label>
                      <Input
                        id="address"
                        placeholder="123 Rue Example, Ville"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyType" className="text-realestate-blue font-semibold">Type de propriété *</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maison">Maison unifamiliale</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="triplex">Triplex</SelectItem>
                          <SelectItem value="terrain">Terrain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bedrooms" className="text-realestate-blue font-semibold">Nombre de chambres</Label>
                      <Select value={formData.bedrooms} onValueChange={(value) => setFormData({...formData, bedrooms: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Chambres" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 chambre</SelectItem>
                          <SelectItem value="2">2 chambres</SelectItem>
                          <SelectItem value="3">3 chambres</SelectItem>
                          <SelectItem value="4">4 chambres</SelectItem>
                          <SelectItem value="5+">5+ chambres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bathrooms" className="text-realestate-blue font-semibold">Nombre de salles de bain</Label>
                      <Select value={formData.bathrooms} onValueChange={(value) => setFormData({...formData, bathrooms: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Salles de bain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 salle de bain</SelectItem>
                          <SelectItem value="1.5">1.5 salles de bain</SelectItem>
                          <SelectItem value="2">2 salles de bain</SelectItem>
                          <SelectItem value="2.5">2.5 salles de bain</SelectItem>
                          <SelectItem value="3+">3+ salles de bain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="area" className="text-realestate-blue font-semibold">Superficie (pieds carrés)</Label>
                      <Input
                        id="area"
                        placeholder="ex: 1500"
                        value={formData.area}
                        onChange={(e) => setFormData({...formData, area: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                      />
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-realestate-blue font-semibold">Votre nom *</Label>
                      <Input
                        id="name"
                        placeholder="Nom complet"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-realestate-blue font-semibold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-realestate-blue font-semibold">Téléphone</Label>
                      <Input
                        id="phone"
                        placeholder="(514) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-realestate-blue font-semibold">Informations supplémentaires</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez votre propriété, rénovations récentes, particularités..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="border-gray-300 focus:border-realestate-blue min-h-[120px]"
                    />
                  </div>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl"
                    >
                      Obtenir Mon Évaluation Gratuite
                    </Button>
                  </div>
                </form>
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
