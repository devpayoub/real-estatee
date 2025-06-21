
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, TrendingUp, Calculator, CheckCircle, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { useEffect, useState } from "react";

const EvaluationGratuite = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    address: "",
    apt: "",
    
    // Step 2
    propertyType: "",
    constructionYear: "",
    livingArea: "",
    propertyPhoto: null as File | null,
    
    // Step 3
    bedrooms: "",
    bathrooms: "",
    parkingSpaces: "",
    garages: "",
    saleReason: "",
    renovations: "",
    
    // Step 4
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({...formData, propertyPhoto: file});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire d'évaluation soumis:", formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 1 sur 4</h3>
              <p className="text-gray-600">Entrez l'adresse de votre propriété</p>
            </div>
            <div>
              <Label htmlFor="address" className="text-realestate-blue font-semibold">Adresse de la propriété *</Label>
              <Input
                id="address"
                placeholder="123 Rue Example, Ville, Province"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="border-gray-300 focus:border-realestate-blue"
                required
              />
            </div>
            <div>
              <Label htmlFor="apt" className="text-realestate-blue font-semibold">Appartement / Unité</Label>
              <Input
                id="apt"
                placeholder="ex: Apt 101"
                value={formData.apt}
                onChange={(e) => setFormData({...formData, apt: e.target.value})}
                className="border-gray-300 focus:border-realestate-blue"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 2 sur 4</h3>
              <p className="text-gray-600">Informations sur la propriété</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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
                <Label htmlFor="constructionYear" className="text-realestate-blue font-semibold">Année de construction</Label>
                <Input
                  id="constructionYear"
                  placeholder="ex: 1995"
                  value={formData.constructionYear}
                  onChange={(e) => setFormData({...formData, constructionYear: e.target.value})}
                  className="border-gray-300 focus:border-realestate-blue"
                />
              </div>
              <div>
                <Label htmlFor="livingArea" className="text-realestate-blue font-semibold">Superficie habitable approximative</Label>
                <Input
                  id="livingArea"
                  placeholder="ex: 1500 pi²"
                  value={formData.livingArea}
                  onChange={(e) => setFormData({...formData, livingArea: e.target.value})}
                  className="border-gray-300 focus:border-realestate-blue"
                />
              </div>
              <div>
                <Label htmlFor="propertyPhoto" className="text-realestate-blue font-semibold">Télécharger une photo de votre propriété</Label>
                <div className="mt-2">
                  <label htmlFor="propertyPhoto" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-realestate-blue">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">
                        {formData.propertyPhoto ? formData.propertyPhoto.name : "Cliquer pour télécharger"}
                      </p>
                    </div>
                  </label>
                  <input
                    id="propertyPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 3 sur 4</h3>
              <p className="text-gray-600">Détails de la propriété</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="bedrooms" className="text-realestate-blue font-semibold">Chambres à coucher</Label>
                <Select value={formData.bedrooms} onValueChange={(value) => setFormData({...formData, bedrooms: value})}>
                  <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                    <SelectValue placeholder="Nombre de chambres" />
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
                <Label htmlFor="bathrooms" className="text-realestate-blue font-semibold">Salles de bain</Label>
                <Select value={formData.bathrooms} onValueChange={(value) => setFormData({...formData, bathrooms: value})}>
                  <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                    <SelectValue placeholder="Nombre de salles de bain" />
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
                <Label htmlFor="parkingSpaces" className="text-realestate-blue font-semibold">Places de stationnement extérieur</Label>
                <Select value={formData.parkingSpaces} onValueChange={(value) => setFormData({...formData, parkingSpaces: value})}>
                  <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                    <SelectValue placeholder="Nombre de places" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Aucune</SelectItem>
                    <SelectItem value="1">1 place</SelectItem>
                    <SelectItem value="2">2 places</SelectItem>
                    <SelectItem value="3">3 places</SelectItem>
                    <SelectItem value="4+">4+ places</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="garages" className="text-realestate-blue font-semibold">Garages</Label>
                <Select value={formData.garages} onValueChange={(value) => setFormData({...formData, garages: value})}>
                  <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                    <SelectValue placeholder="Nombre de garages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Aucun</SelectItem>
                    <SelectItem value="1">1 garage</SelectItem>
                    <SelectItem value="2">2 garages</SelectItem>
                    <SelectItem value="3+">3+ garages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="saleReason" className="text-realestate-blue font-semibold">Raison de la vente</Label>
              <Select value={formData.saleReason} onValueChange={(value) => setFormData({...formData, saleReason: value})}>
                <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                  <SelectValue placeholder="Sélectionnez la raison" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demenagement">Déménagement</SelectItem>
                  <SelectItem value="agrandissement">Besoin d'agrandissement</SelectItem>
                  <SelectItem value="reduction">Réduction de taille</SelectItem>
                  <SelectItem value="investissement">Investissement</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="renovations" className="text-realestate-blue font-semibold">Rénovations et améliorations majeures</Label>
              <Textarea
                id="renovations"
                placeholder="Décrivez les rénovations, l'année de réalisation et les coûts..."
                value={formData.renovations}
                onChange={(e) => setFormData({...formData, renovations: e.target.value})}
                className="border-gray-300 focus:border-realestate-blue min-h-[120px]"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 4 sur 4</h3>
              <p className="text-gray-600">Vos coordonnées</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-realestate-blue font-semibold">Prénom *</Label>
                <Input
                  id="firstName"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="border-gray-300 focus:border-realestate-blue"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-realestate-blue font-semibold">Nom *</Label>
                <Input
                  id="lastName"
                  placeholder="Votre nom de famille"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="border-gray-300 focus:border-realestate-blue"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-realestate-blue font-semibold">Téléphone *</Label>
                <Input
                  id="phone"
                  placeholder="(514) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="border-gray-300 focus:border-realestate-blue"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-realestate-blue font-semibold">Courriel *</Label>
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
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                En cliquant sur ENVOYER, vous confirmez que vous êtes intéressé à être contacté par notre équipe.
                <br />
                <span className="text-realestate-blue font-semibold">(* Champs obligatoires)</span>
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
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
                Remplissez ce formulaire en 4 étapes pour recevoir votre évaluation personnalisée
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`flex items-center ${step !== 4 ? 'flex-1' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step 
                        ? 'bg-realestate-blue text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    {step !== 4 && (
                      <div className={`flex-1 h-1 mx-4 ${
                        currentStep > step ? 'bg-realestate-blue' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-2xl border-0" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                  
                  <div className="flex justify-between items-center mt-8 pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrev}
                      disabled={currentStep === 1}
                      className="px-6 py-3"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Précédent
                    </Button>
                    
                    {currentStep === 4 ? (
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl"
                      >
                        Envoyer ma demande
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-6 py-3 rounded-full font-semibold"
                      >
                        Suivant
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
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
