import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Upload, Eye, Loader, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface FormData {
  address: string;
  apt: string;
  propertyType: string;
  constructionYear: string;
  livingArea: string;
  propertyPhoto: File | null;
  bedrooms: string;
  bathrooms: string;
  parkingSpaces: string;
  garages: string;
  saleReason: string;
  renovations: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const EvaluationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    address: "",
    apt: "",
    propertyType: "",
    constructionYear: "",
    livingArea: "",
    propertyPhoto: null,
    bedrooms: "",
    bathrooms: "",
    parkingSpaces: "",
    garages: "",
    saleReason: "",
    renovations: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const handleNext = () => {
    if (currentStep < 5) {
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

  const uploadPropertyPhoto = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `property-photos/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('property-photos')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        return null;
      }

      const { data } = supabase.storage
        .from('property-photos')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let photoUrl = null;
      
      // Upload property photo if exists
      if (formData.propertyPhoto) {
        photoUrl = await uploadPropertyPhoto(formData.propertyPhoto);
      }

      // Prepare data for database insertion
      const submissionData = {
        address: formData.address,
        apt: formData.apt,
        property_type: formData.propertyType,
        construction_year: formData.constructionYear ? parseInt(formData.constructionYear) : null,
        living_area: formData.livingArea,
        property_photo_url: photoUrl,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        parking_spaces: formData.parkingSpaces,
        garages: formData.garages,
        sale_reason: formData.saleReason,
        renovations: formData.renovations,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        created_at: new Date().toISOString()
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('property_evaluations')
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      console.log("Formulaire d'évaluation soumis:", data);
      setIsSubmitted(true);
      
      toast({
        title: "Demande envoyée",
        description: "Votre demande d'évaluation a été envoyée avec succès.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPropertyTypeLabel = (value: string) => {
    const types = {
      "maison": "Maison unifamiliale",
      "condo": "Condominium", 
      "duplex": "Duplex",
      "triplex": "Triplex",
      "terrain": "Terrain"
    };
    return types[value as keyof typeof types] || value;
  };

  const getBedroomsLabel = (value: string) => {
    const bedrooms = {
      "1": "1 chambre",
      "2": "2 chambres", 
      "3": "3 chambres",
      "4": "4 chambres",
      "5+": "5+ chambres"
    };
    return bedrooms[value as keyof typeof bedrooms] || value;
  };

  const getBathroomsLabel = (value: string) => {
    const bathrooms = {
      "1": "1 salle de bain",
      "1.5": "1.5 salles de bain",
      "2": "2 salles de bain", 
      "2.5": "2.5 salles de bain",
      "3+": "3+ salles de bain"
    };
    return bathrooms[value as keyof typeof bathrooms] || value;
  };

  const getParkingLabel = (value: string) => {
    const parking = {
      "0": "Aucune",
      "1": "1 place",
      "2": "2 places",
      "3": "3 places", 
      "4+": "4+ places"
    };
    return parking[value as keyof typeof parking] || value;
  };

  const getGarageLabel = (value: string) => {
    const garages = {
      "0": "Aucun",
      "1": "1 garage",
      "2": "2 garages",
      "3+": "3+ garages"
    };
    return garages[value as keyof typeof garages] || value;
  };

  const getSaleReasonLabel = (value: string) => {
    const reasons = {
      "demenagement": "Déménagement",
      "agrandissement": "Besoin d'agrandissement",
      "reduction": "Réduction de taille",
      "investissement": "Investissement",
      "autre": "Autre"
    };
    return reasons[value as keyof typeof reasons] || value;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 1 sur 5</h3>
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
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 2 sur 5</h3>
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
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 3 sur 5</h3>
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
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 4 sur 5</h3>
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
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-realestate-blue mb-2">Étape 5 sur 5</h3>
              <p className="text-gray-600">Vérifiez vos informations</p>
            </div>
            <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-realestate-blue mb-2">Propriété</h4>
                  <p><strong>Adresse:</strong> {formData.address} {formData.apt}</p>
                  <p><strong>Type:</strong> {getPropertyTypeLabel(formData.propertyType)}</p>
                  <p><strong>Année:</strong> {formData.constructionYear || "Non spécifiée"}</p>
                  <p><strong>Superficie:</strong> {formData.livingArea || "Non spécifiée"}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-realestate-blue mb-2">Détails</h4>
                  <p><strong>Chambres:</strong> {getBedroomsLabel(formData.bedrooms) || "Non spécifié"}</p>
                  <p><strong>Salles de bain:</strong> {getBathroomsLabel(formData.bathrooms) || "Non spécifié"}</p>
                  <p><strong>Stationnement:</strong> {getParkingLabel(formData.parkingSpaces) || "Non spécifié"}</p>
                  <p><strong>Garages:</strong> {getGarageLabel(formData.garages) || "Non spécifié"}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-realestate-blue mb-2">Raison de la vente</h4>
                <p>{getSaleReasonLabel(formData.saleReason) || "Non spécifiée"}</p>
              </div>
              {formData.renovations && (
                <div>
                  <h4 className="font-semibold text-realestate-blue mb-2">Rénovations</h4>
                  <p>{formData.renovations}</p>
                </div>
              )}
              <div>
                <h4 className="font-semibold text-realestate-blue mb-2">Contact</h4>
                <p><strong>Nom:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Téléphone:</strong> {formData.phone}</p>
                <p><strong>Courriel:</strong> {formData.email}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-3xl font-bold text-realestate-blue">Demande envoyée!</h2>
            <p className="text-gray-600 text-lg">
              Merci pour votre demande d'évaluation. Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-realestate-blue">
                <strong>Prochaines étapes:</strong><br />
                • Un agent vous contactera dans les 24 heures<br />
                • Visite de la propriété planifiée<br />
                • Rapport d'évaluation détaillé fourni
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Précédent
            </Button>
            
            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-realestate-blue hover:bg-realestate-blue/90"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-realestate-blue hover:bg-realestate-blue/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Envoyer la demande
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EvaluationForm;

