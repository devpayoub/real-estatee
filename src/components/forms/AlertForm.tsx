"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Mail, Eye, Loader, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface AlertData {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  minBedrooms: string;
  email: string;
  frequency: string;
  notifications: {
    newListings: boolean;
    priceChanges: boolean;
    openHouses: boolean;
  };
}

const AlerteForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const [alertData, setAlertData] = useState<AlertData>({
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
      openHouses: true,
    },
  });

  const handleInputChange = (field: keyof AlertData, value: string) => {
    setAlertData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (type: keyof AlertData["notifications"], checked: boolean) => {
    setAlertData(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [type]: checked },
    }));
  };

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("alerts").insert([
        {
          location: alertData.location,
          property_type: alertData.propertyType,
          min_price: alertData.minPrice ? parseInt(alertData.minPrice) : null,
          max_price: alertData.maxPrice ? parseInt(alertData.maxPrice) : null,
          min_bedrooms: alertData.minBedrooms === "any" ? null : parseInt(alertData.minBedrooms),
          email: alertData.email,
          frequency: alertData.frequency,
          new_listings: alertData.notifications.newListings,
          price_changes: alertData.notifications.priceChanges,
          open_houses: alertData.notifications.openHouses,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Alerte créée",
        description: "Votre alerte immobilière a été créée avec succès.",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue.",
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
            <Label>Ville ou quartier</Label>
            <Input
              placeholder="Ex: Paris, Marseille..."
              value={alertData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label>Type de bien</Label>
            <Input
              placeholder="Ex: Appartement, Maison..."
              value={alertData.propertyType}
              onChange={(e) => handleInputChange("propertyType", e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label>Prix min (€)</Label>
              <Input
                type="number"
                value={alertData.minPrice}
                onChange={(e) => handleInputChange("minPrice", e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label>Prix max (€)</Label>
              <Input
                type="number"
                value={alertData.maxPrice}
                onChange={(e) => handleInputChange("maxPrice", e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label>Nombre de chambres min</Label>
            <Input
              type="number"
              value={alertData.minBedrooms}
              onChange={(e) => handleInputChange("minBedrooms", e.target.value)}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="mb-4">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="votre.email@example.com"
            value={alertData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label>Fréquence</Label>
          <Select
            onValueChange={(val) => handleInputChange("frequency", val)}
            value={alertData.frequency}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quotidienne">Quotidienne</SelectItem>
              <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
              <SelectItem value="mensuelle">Mensuelle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label>Notifications</Label>
          <div className="space-y-2 mt-2">
            {([
              { label: "Nouvelles annonces", key: "newListings" },
              { label: "Changements de prix", key: "priceChanges" },
              { label: "Portes ouvertes", key: "openHouses" },
            ] as const).map(({ label, key }) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  checked={alertData.notifications[key]}
                  onCheckedChange={(checked: boolean) => handleNotificationChange(key, checked)}
                />
                <Label htmlFor={key}>{label}</Label>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
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

              {currentStep === 2 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`px-8 py-3 rounded-full text-lg font-semibold shadow-xl ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-5 w-5 animate-spin" />
                      Création...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Alerte créée
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      Créer mon alerte
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Vérifier
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

export default AlerteForm;
