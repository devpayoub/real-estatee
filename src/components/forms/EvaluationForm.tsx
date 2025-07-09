
"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Upload, Home, User, Phone, Mail, CheckCircle, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EvaluationData {
  address: string;
  apt: string;
  propertyType: string;
  constructionYear: string;
  livingArea: string;
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
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const [evaluationData, setEvaluationData] = useState<EvaluationData>({
    address: "",
    apt: "",
    propertyType: "",
    constructionYear: "",
    livingArea: "",
    bedrooms: "",
    bathrooms: "",
    parkingSpaces: "",
    garages: "",
    saleReason: "",
    renovations: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (field: keyof EvaluationData, value: string) => {
    setEvaluationData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission without database
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Evaluation form submitted:", evaluationData);
      setIsSubmitted(true);
      
      toast({
        title: "Évaluation soumise",
        description: "Votre demande d'évaluation a été soumise avec succès. Nous vous contacterons sous peu.",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <div className="mb-4">
            <Label>Adresse complète *</Label>
            <Input
              placeholder="123 Rue Example, Ville, Code Postal"
              value={evaluationData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label>Appartement/Unité (optionnel)</Label>
            <Input
              placeholder="Apt 5B"
              value={evaluationData.apt}
              onChange={(e) => handleInputChange("apt", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label>Type de propriété *</Label>
            <Select
              onValueChange={(val) => handleInputChange("propertyType", val)}
              value={evaluationData.propertyType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner le type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maison">Maison unifamiliale</SelectItem>
                <SelectItem value="condo">Condominium</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="triplex">Triplex</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label>Année de construction</Label>
              <Input
                type="number"
                placeholder="2020"
                value={evaluationData.constructionYear}
                onChange={(e) => handleInputChange("constructionYear", e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label>Surface habitable (m²)</Label>
              <Input
                placeholder="120"
                value={evaluationData.livingArea}
                onChange={(e) => handleInputChange("livingArea", e.target.value)}
              />
            </div>
          </div>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label>Chambres *</Label>
              <Select
                onValueChange={(val) => handleInputChange("bedrooms", val)}
                value={evaluationData.bedrooms}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Salles de bain *</Label>
              <Select
                onValueChange={(val) => handleInputChange("bathrooms", val)}
                value={evaluationData.bathrooms}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="1.5">1.5</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="2.5">2.5</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label>Stationnements</Label>
              <Select
                onValueChange={(val) => handleInputChange("parkingSpaces", val)}
                value={evaluationData.parkingSpaces}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Garages</Label>
              <Select
                onValueChange={(val) => handleInputChange("garages", val)}
                value={evaluationData.garages}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4">
            <Label>Raison de la vente *</Label>
            <Select
              onValueChange={(val) => handleInputChange("saleReason", val)}
              value={evaluationData.saleReason}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demenagement">Déménagement</SelectItem>
                <SelectItem value="investissement">Investissement</SelectItem>
                <SelectItem value="succession">Succession</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label>Rénovations récentes (optionnel)</Label>
            <Textarea
              placeholder="Décrivez les rénovations importantes des 5 dernières années..."
              value={evaluationData.renovations}
              onChange={(e) => handleInputChange("renovations", e.target.value)}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="mb-4">
          <Label>Prénom *</Label>
          <Input
            placeholder="Jean"
            value={evaluationData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label>Nom *</Label>
          <Input
            placeholder="Dupont"
            value={evaluationData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label>Téléphone *</Label>
          <Input
            type="tel"
            placeholder="(514) 123-4567"
            value={evaluationData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label>Email *</Label>
          <Input
            type="email"
            placeholder="jean.dupont@email.com"
            value={evaluationData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>
      </>
    );
  };

  const getStepIcon = (step: number) => {
    if (step === 1) return <Home className="w-5 h-5" />;
    if (step === 2) return <Upload className="w-5 h-5" />;
    return <User className="w-5 h-5" />;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStep >= step
                  ? 'bg-realestate-blue border-realestate-blue text-white'
                  : 'border-gray-300 text-gray-400'
              }`}>
                {getStepIcon(step)}
              </div>
              {step < 3 && (
                <div className={`w-16 h-0.5 ${
                  currentStep > step ? 'bg-realestate-blue' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="shadow-2xl border-0">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>

              {currentStep === 3 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`px-8 py-3 rounded-full text-lg font-semibold shadow-xl ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Évaluation soumise
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      Obtenir mon évaluation
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-6 py-3 rounded-full font-semibold"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EvaluationForm;
