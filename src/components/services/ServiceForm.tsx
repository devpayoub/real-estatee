import {Mail, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
const ServiceFrom=() => {
  return (
    <>
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
      <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 rounded-full border border-realestate-blue/20 mb-6">
      <Star className="w-4 h-4 text-realestate-blue" />
      <span className="text-realestate-blue font-semibold text-sm">FORMULAIRE</span>
    </div>
  
  </div>              
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contactez-Nous Pour L'achat De Votre
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {" "}
            Maison De Rêve
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Remplissez ce formulaire et notre équipe d'experts vous contactera dans les 24 heures
        </p>
      </div>

      <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        <div className="p-8 md:p-12">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-sm font-medium text-gray-700">
                  Nom complet *
                </Label>
                <Input
                  id="nom"
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-sm font-medium text-gray-700">
                  Téléphone *
                </Label>
                <Input
                  id="telephone"
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="courriel" className="text-sm font-medium text-gray-700">
                Courriel *
              </Label>
              <Input
                id="courriel"
                type="email"
                className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="situation" className="text-sm font-medium text-gray-700">
                  Quelle est votre situation actuelle? *
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Choisissez votre situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premier-achat">Premier achat</SelectItem>
                    <SelectItem value="changement">Changement de propriété</SelectItem>
                    <SelectItem value="investissement">Investissement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="propriete" className="text-sm font-medium text-gray-700">
                  Type de propriété recherchée
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Choisissez le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                Budget approximatif *
              </Label>
              <Input
                id="budget"
                placeholder="Ex: 300 000 - 500 000 $"
                className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="text-center pt-6">
  <Button
    type="submit"
    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
  >
    <Mail className="w-5 h-5" />
    <span className="whitespace-nowrap">ENVOYER MA DEMANDE</span>
    <ArrowRight className="w-5 h-5" />
  </Button>
  <p className="text-sm text-gray-500 mt-4 px-2">Réponse garantie sous 24h • Consultation gratuite</p>
</div>

          </form>
        </div>
      </Card>
    </div>
  </div>
  </>
  );
}

export default ServiceFrom;