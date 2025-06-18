
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell, MapPin, DollarSign, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const AlerteImmobiliere = () => {
  const [alertData, setAlertData] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    email: "",
    frequency: "",
    notifications: {
      newListings: true,
      priceChanges: false,
      openHouses: true
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Alerte immobilière créée:", alertData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30" data-aos="fade-up">
              <Bell className="w-4 h-4 mr-2" />
              ALERTE IMMOBILIÈRE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Restez Informé des
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Nouvelles Opportunités
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Configurez votre alerte personnalisée et soyez le premier informé des propriétés 
              qui correspondent à vos critères de recherche.
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
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Notifications Instantanées</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recevez une notification dès qu'une propriété correspondant à vos critères est mise en vente.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-realestate-red to-realestate-blue rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Recherche Ciblée</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Définissez précisément vos critères : localisation, prix, type de propriété, nombre de chambres.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Avantage Concurrentiel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Soyez parmi les premiers à découvrir les meilleures opportunités avant qu'elles ne soient largement diffusées.
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
                Créer Votre
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Alerte Personnalisée
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Configurez vos critères de recherche et ne manquez plus aucune opportunité
              </p>
            </div>

            <Card className="shadow-2xl border-0" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location" className="text-realestate-blue font-semibold">Localisation *</Label>
                      <Input
                        id="location"
                        placeholder="Ville, quartier, code postal..."
                        value={alertData.location}
                        onChange={(e) => setAlertData({...alertData, location: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyType" className="text-realestate-blue font-semibold">Type de propriété</Label>
                      <Select value={alertData.propertyType} onValueChange={(value) => setAlertData({...alertData, propertyType: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Tous les types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous les types</SelectItem>
                          <SelectItem value="maison">Maison unifamiliale</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="triplex">Triplex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="minPrice" className="text-realestate-blue font-semibold">Prix minimum</Label>
                      <Input
                        id="minPrice"
                        placeholder="ex: 300,000"
                        value={alertData.minPrice}
                        onChange={(e) => setAlertData({...alertData, minPrice: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                      />
                    </div>

                    <div>
                      <Label htmlFor="maxPrice" className="text-realestate-blue font-semibold">Prix maximum</Label>
                      <Input
                        id="maxPrice"
                        placeholder="ex: 500,000"
                        value={alertData.maxPrice}
                        onChange={(e) => setAlertData({...alertData, maxPrice: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                      />
                    </div>

                    <div>
                      <Label htmlFor="minBedrooms" className="text-realestate-blue font-semibold">Nombre minimum de chambres</Label>
                      <Select value={alertData.minBedrooms} onValueChange={(value) => setAlertData({...alertData, minBedrooms: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Aucune préférence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Aucune préférence</SelectItem>
                          <SelectItem value="1">1+ chambre</SelectItem>
                          <SelectItem value="2">2+ chambres</SelectItem>
                          <SelectItem value="3">3+ chambres</SelectItem>
                          <SelectItem value="4">4+ chambres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-realestate-blue font-semibold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={alertData.email}
                        onChange={(e) => setAlertData({...alertData, email: e.target.value})}
                        className="border-gray-300 focus:border-realestate-blue"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="frequency" className="text-realestate-blue font-semibold">Fréquence des notifications</Label>
                      <Select value={alertData.frequency} onValueChange={(value) => setAlertData({...alertData, frequency: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-realestate-blue">
                          <SelectValue placeholder="Choisir la fréquence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immédiatement</SelectItem>
                          <SelectItem value="daily">Quotidienne</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-realestate-blue font-semibold">Types de notifications</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="newListings" 
                          checked={alertData.notifications.newListings}
                          onCheckedChange={(checked) => 
                            setAlertData({
                              ...alertData, 
                              notifications: {...alertData.notifications, newListings: checked as boolean}
                            })
                          }
                        />
                        <Label htmlFor="newListings">Nouvelles inscriptions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="priceChanges" 
                          checked={alertData.notifications.priceChanges}
                          onCheckedChange={(checked) => 
                            setAlertData({
                              ...alertData, 
                              notifications: {...alertData.notifications, priceChanges: checked as boolean}
                            })
                          }
                        />
                        <Label htmlFor="priceChanges">Changements de prix</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="openHouses" 
                          checked={alertData.notifications.openHouses}
                          onCheckedChange={(checked) => 
                            setAlertData({
                              ...alertData, 
                              notifications: {...alertData.notifications, openHouses: checked as boolean}
                            })
                          }
                        />
                        <Label htmlFor="openHouses">Portes ouvertes</Label>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Créer Mon Alerte
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

export default AlerteImmobiliere;
