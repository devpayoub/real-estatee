import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ChevronLeft, ChevronRight, MapPin, Home, DollarSign, Mail, Phone, User } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FormData {
  propertyType: string;
  otherPropertyType: string;
  budgetMin: number | string;
  budgetMax: number | string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location?: string;
  otherLocation?: string;
}

const MultiStepsAlert = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    location: "",
    otherLocation: "",
    propertyType: "",
    otherPropertyType: "",
    budgetMin: "",
    budgetMax: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const locations = [
    "Montréal",
    "West Island (Montréal)",
    "Laval",
    "Sainte-Eustache / Boisbriand",
    "Blainville",
    "Rosemère / Lorraine",
    "Bois des fillions",
    "Sainte-Thérèse",
    "Mirabel",
    "Laurentides",
    "Repentigny",
    "Mascouche",
    "Lachenaie",
    "Lanaudière",
    "Terrebonne",
    "Vaudreuil-Dorion",
    "Ile Perrot / Pincourt",
    "Les Coteaux / Les Cèdres / Saint-Zotique",
    "Saint-Lazare / Hudson / Rigaud",
    "Châteauguay",
    "Sainte-Catherine",
    "Saint-Constant / Delson",
    "Candiac / La Prairie",
    "Brossard",
    "Longueuil / Saint-Hubert",
    "Boucherville / Saint-Julie",
    "Rive Sud"
  ];

  const propertyTypes = [
    "Bungalow",
    "Condo",
    "Cottage",
    "Duplex",
    "Immeuble commercial",
    "Quadruplex et plus",
    "Terrain",
    "Vente d'entreprise",
    "Bungalow semi-détaché",
    "Copropriété indivisée",
    "Cottage semi-détaché",
    "Immeuble à revenus",
    "Maison de ville",
    "Paliers multiples",
    "Triplex"
  ];

  const validateStep = () => {
      const newErrors: { [key: string]: string } = {};
    
    if (step === 1 && !formData.location && !formData.otherLocation) {
      newErrors.location = "Veuillez sélectionner ou spécifier un emplacement";
    }
    
    if (step === 2) {
      if (!formData.propertyType && !formData.otherPropertyType) {
        newErrors.propertyType = "Veuillez sélectionner ou spécifier un type de propriété";
      }
      if (!formData.budgetMin) {
        newErrors.budgetMin = "Veuillez spécifier un budget minimum";
      }
    }
    
    if (step === 3) {
      if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
      if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
      if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email invalide";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form submitted:", formData);
      setSuccess(true);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Où désirez-vous acheter?</h3>
            </div>
            
            <div>
              <Label>Sélectionnez une région *</Label>
              <Select 
                onValueChange={value => handleChange("location", value)} 
                value={formData.location}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisissez une région" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.location && !formData.otherLocation && (
                <p className="text-sm text-red-500 mt-1">{errors.location}</p>
              )}
            </div>
            
            <div className="pt-2">
              <Label>Ou spécifiez une autre région</Label>
              <Input 
                value={formData.otherLocation} 
                onChange={e => handleChange("otherLocation", e.target.value)} 
                placeholder="Entrez votre région"
              />
              {errors.location && !formData.location && (
                <p className="text-sm text-red-500 mt-1">{errors.location}</p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Quel type de propriété recherchez-vous?</h3>
            </div>
            
            <div>
              <Label>Type de propriété *</Label>
              <Select 
                onValueChange={value => handleChange("propertyType", value)} 
                value={formData.propertyType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.propertyType && !formData.otherPropertyType && (
                <p className="text-sm text-red-500 mt-1">{errors.propertyType}</p>
              )}
            </div>
            
            <div className="pt-2">
              <Label>Ou spécifiez un autre type</Label>
              <Input 
                value={formData.otherPropertyType} 
                onChange={e => handleChange("otherPropertyType", e.target.value)} 
                placeholder="Entrez le type de propriété"
              />
              {errors.propertyType && !formData.propertyType && (
                <p className="text-sm text-red-500 mt-1">{errors.propertyType}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <Label>Budget minimum ($) *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    required 
                    type="number" 
                    min="0"
                    className="pl-10"
                    value={formData.budgetMin} 
                    onChange={e => handleChange("budgetMin", e.target.value)} 
                    placeholder="Minimum"
                  />
                </div>
                {errors.budgetMin && <p className="text-sm text-red-500 mt-1">{errors.budgetMin}</p>}
              </div>
              
              <div>
                <Label>Budget maximum ($)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    type="number" 
                    min={formData.budgetMin || "0"}
                    className="pl-10"
                    value={formData.budgetMax} 
                    onChange={e => handleChange("budgetMax", e.target.value)} 
                    placeholder="Maximum"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Dites-nous où vous envoyer les alertes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Prénom *</Label>
                <Input 
                  required 
                  value={formData.firstName} 
                  onChange={e => handleChange("firstName", e.target.value)} 
                  placeholder="Votre prénom"
                />
                {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <Label>Nom *</Label>
                <Input 
                  required 
                  value={formData.lastName} 
                  onChange={e => handleChange("lastName", e.target.value)} 
                  placeholder="Votre nom"
                />
                {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>
            
            <div>
              <Label>Téléphone *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  required 
                  type="tel" 
                  className="pl-10"
                  value={formData.phone} 
                  onChange={e => handleChange("phone", e.target.value)} 
                  placeholder="Ex: 514-123-4567"
                />
              </div>
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <Label>Courriel *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  required 
                  type="email" 
                  className="pl-10"
                  value={formData.email} 
                  onChange={e => handleChange("email", e.target.value)} 
                  placeholder="votre@email.com"
                />
              </div>
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <p className="text-sm text-blue-700">
                En cliquant sur ENREGISTRER, vous acceptez de recevoir des alertes par courriel et SMS lorsque de nouvelles propriétés correspondant à vos critères seront disponibles.
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Vérifiez vos informations</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-4">Résumé de votre alerte immobilière</h4>
              
              <div className="space-y-4 text-sm">
                <div className="border-b pb-3">
                  <h5 className="font-medium text-gray-600 mb-2">Localisation</h5>
                  <p>{formData.location || formData.otherLocation || "Non spécifié"}</p>
                </div>
                
                <div className="border-b pb-3">
                  <h5 className="font-medium text-gray-600 mb-2">Type de propriété</h5>
                  <p>{formData.propertyType || formData.otherPropertyType || "Non spécifié"}</p>
                </div>
                
                <div className="border-b pb-3">
                  <h5 className="font-medium text-gray-600 mb-2">Budget</h5>
                  <p>
                    {formData.budgetMin ? `$${Number(formData.budgetMin).toLocaleString()}` : "Non spécifié"}
                    {formData.budgetMax ? ` - $${Number(formData.budgetMax).toLocaleString()}` : ""}
                  </p>
                </div>
                
                <div className="border-b pb-3">
                  <h5 className="font-medium text-gray-600 mb-2">Coordonnées</h5>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.phone}</p>
                  <p>{formData.email}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <p className="text-sm text-blue-700">
                Veuillez vérifier que toutes les informations sont correctes avant d'enregistrer votre alerte.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">ALERTE IMMOBILIÈRE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recevez des alertes pour
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> votre propriété idéale</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soyez le premier informé lorsque de nouvelles propriétés correspondant à vos critères seront disponibles
          </p>
        </div>
        
        <div className="border border-gray-200 shadow-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Étape {step} sur 4
              </h3>
              <span className="text-sm font-medium text-blue-600">
                {Math.round((step / 4) * 100)}% complet
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}

            {!success && (
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button 
                    onClick={handlePrev} 
                    type="button" 
                    variant="outline" 
                    className="gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 4 ? (
                  <Button 
                    onClick={handleNext} 
                    type="button" 
                    className="gap-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Suivant <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 text-white gap-1"
                  >
                    <CheckCircle className="w-4 h-4" /> ENREGISTRER L'ALERTE
                  </Button>
                )}
              </div>
            )}

            {success && (
              <div className="flex flex-col items-center justify-center gap-3 bg-green-50 text-green-700 p-6 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Votre alerte est enregistrée!</h3>
                <p className="text-gray-600">
                  Nous vous enverrons des notifications dès que de nouvelles propriétés correspondant à vos critères seront disponibles.
                </p>
                <Button 
                  onClick={() => {
                    setStep(1);
                    setSuccess(false);
                    setFormData({
                      location: "",
                      otherLocation: "",
                      propertyType: "",
                      otherPropertyType: "",
                      budgetMin: "",
                      budgetMax: "",
                      firstName: "",
                      lastName: "",
                      phone: "",
                      email: "",
                    });
                  }} 
                  variant="outline" 
                  className="mt-4"
                >
                  Créer une autre alerte
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepsAlert;