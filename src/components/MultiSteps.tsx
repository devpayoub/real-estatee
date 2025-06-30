import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CheckCircle, Star, ChevronLeft, ChevronRight, Home, Info, MapPin, Camera, Bed, Bath, Car, Hammer, User, Phone, Mail } from "lucide-react";

const propertyTypes = [
  { value: "house", label: "Maison" },
  { value: "apartment", label: "Appartement" },
  { value: "condo", label: "Condominium" },
  { value: "townhouse", label: "Maison de ville" },
  { value: "land", label: "Terrain" },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    address: "",
    type: "",
    year: "",
    size: "",
    photos: [],
    bedrooms: "",
    bathrooms: "",
    parking: "",
    garages: "",
    reason: "",
    renovations: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const validateStep = () => {
      const newErrors: { [key: string]: string } = {};
    
    if (step === 1 && !formData.address.trim()) {
      newErrors.address = "L'adresse est requise";
    }
    
    if (step === 2) {
      if (!formData.type.trim()) newErrors.type = "Le type est requis";
      if (!formData.year.trim()) newErrors.year = "L'année est requise";
      if (!formData.size.trim()) newErrors.size = "La superficie est requise";
    }
    
    if (step === 3) {
      if (!formData.bedrooms.trim()) newErrors.bedrooms = "Le nombre de chambres est requis";
      if (!formData.bathrooms.trim()) newErrors.bathrooms = "Le nombre de salles de bain est requis";
      if (!formData.reason.trim()) newErrors.reason = "La raison est requise";
    }
    
    if (step === 4) {
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
    // Clear error when field is edited
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    setFormData(prev => ({ ...prev, photos: files }));
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
      // Here you would typically send the data to your backend
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
              <h3 className="text-xl font-semibold">Informations sur la propriété</h3>
            </div>
            <div>
              <Label>Adresse de votre propriété *</Label>
              <Input 
                required 
                value={formData.address} 
                onChange={e => handleChange("address", e.target.value)} 
                placeholder="123 Rue Principale, Montréal, QC"
              />
              {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Détails de la propriété</h3>
            </div>
            <div>
              <Label>Type de propriété *</Label>
              <Select onValueChange={value => handleChange("type", value)} value={formData.type}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.type && <p className="text-sm text-red-500 mt-1">{errors.type}</p>}
            </div>
            <div>
              <Label>Année de construction *</Label>
              <Input 
                required 
                type="number" 
                min="1800" 
                max={new Date().getFullYear()}
                value={formData.year} 
                onChange={e => handleChange("year", e.target.value)} 
                placeholder="Ex: 1995"
              />
              {errors.year && <p className="text-sm text-red-500 mt-1">{errors.year}</p>}
            </div>
            <div>
              <Label>Superficie habitable approximative (pi²) *</Label>
              <Input 
                required 
                type="number" 
                value={formData.size} 
                onChange={e => handleChange("size", e.target.value)} 
                placeholder="Ex: 1500"
              />
              {errors.size && <p className="text-sm text-red-500 mt-1">{errors.size}</p>}
            </div>
            <div>
              <Label>Télécharger des photos (max 6)</Label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB par image)</p>
                  </div>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleFileChange} 
                    className="hidden" 
                  />
                </label>
              </div>
              {formData.photos.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  {formData.photos.length} fichier(s) sélectionné(s): {formData.photos.map(f => f.name).join(", ")}
                </p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Caractéristiques supplémentaires</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Chambres à coucher *</Label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    required 
                    type="number" 
                    className="pl-10"
                    value={formData.bedrooms} 
                    onChange={e => handleChange("bedrooms", e.target.value)} 
                    placeholder="Ex: 3"
                  />
                </div>
                {errors.bedrooms && <p className="text-sm text-red-500 mt-1">{errors.bedrooms}</p>}
              </div>
              <div>
                <Label>Salles de bain *</Label>
                <div className="relative">
                  <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    required 
                    type="number" 
                    className="pl-10"
                    value={formData.bathrooms} 
                    onChange={e => handleChange("bathrooms", e.target.value)} 
                    placeholder="Ex: 2"
                  />
                </div>
                {errors.bathrooms && <p className="text-sm text-red-500 mt-1">{errors.bathrooms}</p>}
              </div>
              <div>
                <Label>Places de stationnement extérieur</Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    type="number" 
                    className="pl-10"
                    value={formData.parking} 
                    onChange={e => handleChange("parking", e.target.value)} 
                    placeholder="Ex: 1"
                  />
                </div>
              </div>
              <div>
                <Label>Garages</Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    type="number" 
                    className="pl-10"
                    value={formData.garages} 
                    onChange={e => handleChange("garages", e.target.value)} 
                    placeholder="Ex: 1"
                  />
                </div>
              </div>
            </div>
            <div>
              <Label>Raison de la vente *</Label>
              <Textarea 
                required 
                value={formData.reason} 
                onChange={e => handleChange("reason", e.target.value)} 
                placeholder="Pourquoi vendez-vous cette propriété?"
                rows={3}
              />
              {errors.reason && <p className="text-sm text-red-500 mt-1">{errors.reason}</p>}
            </div>
            <div>
              <Label>Rénovations majeures</Label>
              <div className="relative">
                <Hammer className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Textarea 
                  value={formData.renovations} 
                  onChange={e => handleChange("renovations", e.target.value)} 
                  placeholder="Avez-vous effectué des rénovations récentes?"
                  className="pl-10"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Informations personnelles</h3>
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
                En cliquant sur ENVOYER, vous confirmez que vous êtes intéressé à être contacté par notre équipe. (* Champs obligatoires)
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Vérification des informations</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-4">Résumé de votre soumission</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {Object.entries(formData).map(([key, val]) => (
                  <div key={key} className="border-b pb-2">
                    <strong className="capitalize text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> 
                    <div className="mt-1">
                      {Array.isArray(val) ? (
                        val.length > 0 ? (
                          <span>{val.length} fichier(s) sélectionné(s)</span>
                        ) : (
                          <span className="text-gray-400">Aucun fichier</span>
                        )
                      ) : val ? (
                        val
                      ) : (
                        <span className="text-gray-400">Non fourni</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <p className="text-sm text-blue-700">
                Veuillez vérifier que toutes les informations sont correctes avant de soumettre le formulaire.
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
            <span className="text-blue-600 font-semibold text-sm">FORMULAIRE DE MA PROPRIÉTÉ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous Pour L'achat De Votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Maison De Rêve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Remplissez ce formulaire et notre équipe d'experts vous contactera dans les 24 heures
          </p>
        </div>
        
        <div className="border border-gray-200 shadow-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Étape {step} sur 5
              </h3>
              <span className="text-sm font-medium text-blue-600">
                {Math.round((step / 5) * 100)}% complet
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${(step / 5) * 100}%` }}
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
                  <div></div> // Empty div to maintain space
                )}
                {step < 5 ? (
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
                    <CheckCircle className="w-4 h-4" /> ENVOYER
                  </Button>
                )}
              </div>
            )}

            {success && (
              <div className="flex flex-col items-center justify-center gap-3 bg-green-50 text-green-700 p-6 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Merci pour votre soumission!</h3>
                <p className="text-gray-600">
                  Votre formulaire a été envoyé avec succès. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <Button 
                  onClick={() => {
                    setStep(1);
                    setSuccess(false);
                    setFormData({
                      address: "",
                      type: "",
                      year: "",
                      size: "",
                      photos: [],
                      bedrooms: "",
                      bathrooms: "",
                      parking: "",
                      garages: "",
                      reason: "",
                      renovations: "",
                      firstName: "",
                      lastName: "",
                      phone: "",
                      email: "",
                    });
                  }} 
                  variant="outline" 
                  className="mt-4"
                >
                  Soumettre une nouvelle demande
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;