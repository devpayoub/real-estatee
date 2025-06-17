
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    address: "",
    currentValue: "",
    urgency: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande d'évaluation envoyée !",
      description: "Nous vous contacterons sous 24h pour programmer votre évaluation gratuite."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "",
      address: "",
      currentValue: "",
      urgency: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Évaluation Gratuite
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {" "}de Votre Propriété
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez une évaluation précise et gratuite de votre bien immobilier canadien
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <Card className="shadow-2xl border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-red-600" />
                  Demande d'Évaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresse de la propriété *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      required
                      placeholder="123 Rue Principale, Ville, Province, Code Postal"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Type de propriété *</Label>
                      <Select onValueChange={(value) => handleChange("propertyType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maison">Maison individuelle</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Maison de ville</SelectItem>
                          <SelectItem value="duplex">Duplex/Triplex</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="terrain">Terrain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="currentValue">Valeur estimée actuelle</Label>
                      <Select onValueChange={(value) => handleChange("currentValue", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Fourchette de prix" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-300k">Moins de 300 000 CAD</SelectItem>
                          <SelectItem value="300k-500k">300 000 - 500 000 CAD</SelectItem>
                          <SelectItem value="500k-750k">500 000 - 750 000 CAD</SelectItem>
                          <SelectItem value="750k-1m">750 000 CAD - 1M CAD</SelectItem>
                          <SelectItem value="1m-1.5m">1M - 1.5M CAD</SelectItem>
                          <SelectItem value="plus-1.5m">Plus de 1.5M CAD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Délai de vente souhaité</Label>
                    <Select onValueChange={(value) => handleChange("urgency", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Quand souhaitez-vous vendre ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Le plus tôt possible</SelectItem>
                        <SelectItem value="1-3mois">Dans 1-3 mois</SelectItem>
                        <SelectItem value="3-6mois">Dans 3-6 mois</SelectItem>
                        <SelectItem value="6-12mois">Dans 6-12 mois</SelectItem>
                        <SelectItem value="evaluation">Juste une évaluation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Informations complémentaires</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Rénovations récentes, particularités de la propriété, raison de la vente..."
                      className="mt-1 h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 text-lg font-semibold">
                    <Send className="mr-2 h-5 w-5" />
                    Demander mon Évaluation Gratuite
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop" 
                alt="Évaluation immobilière" 
                className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
              />
            </div>

            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
              <h3 className="text-2xl font-bold mb-6 text-center">Notre Processus d'Évaluation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Analyse Comparative</h4>
                    <p className="text-gray-600 text-sm">Étude des ventes récentes dans votre secteur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Visite de la Propriété</h4>
                    <p className="text-gray-600 text-sm">Inspection détaillée et évaluation sur place</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Rapport Détaillé</h4>
                    <p className="text-gray-600 text-sm">Évaluation précise avec stratégie de vente</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="p-4 border-none shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Urgence ?</h3>
                    <p className="text-gray-600 text-sm">Appelez-nous au +1 (514) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-none shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Secteurs Couverts</h3>
                    <p className="text-gray-600 text-sm">Tout le Canada - Déplacements gratuits</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellContactForm;
