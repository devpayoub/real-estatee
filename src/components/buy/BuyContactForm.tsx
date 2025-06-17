
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuyContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    location: "",
    propertyType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      budget: "",
      location: "",
      propertyType: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Acheter ?
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Contactez-nous
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez une consultation gratuite personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <Card className="shadow-2xl border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Send className="w-6 h-6 text-blue-600" />
                  Demande d'Information
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
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez votre budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-300k">Moins de 300 000 CAD</SelectItem>
                          <SelectItem value="300k-500k">300 000 - 500 000 CAD</SelectItem>
                          <SelectItem value="500k-750k">500 000 - 750 000 CAD</SelectItem>
                          <SelectItem value="750k-1m">750 000 CAD - 1M CAD</SelectItem>
                          <SelectItem value="plus-1m">Plus de 1M CAD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Localisation souhaitée</Label>
                      <Select onValueChange={(value) => handleChange("location", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choisissez une ville" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toronto">Toronto, ON</SelectItem>
                          <SelectItem value="vancouver">Vancouver, BC</SelectItem>
                          <SelectItem value="montreal">Montréal, QC</SelectItem>
                          <SelectItem value="calgary">Calgary, AB</SelectItem>
                          <SelectItem value="ottawa">Ottawa, ON</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="propertyType">Type de propriété</Label>
                    <Select onValueChange={(value) => handleChange("propertyType", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Type de propriété recherché" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maison">Maison individuelle</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Maison de ville</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez-nous vos besoins spécifiques..."
                      className="mt-1 h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma Demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=300&fit=crop" 
                alt="Consultation immobilière" 
                className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-none shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@immobilier-canada.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Téléphone</h3>
                    <p className="text-gray-600">+1 (514) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Bureau</h3>
                    <p className="text-gray-600">123 Rue McGill, Montréal, QC</p>
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

export default BuyContactForm;
