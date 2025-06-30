import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  Award,
} from "lucide-react"
import BuySection from "@/components/services/BuySection"
import RentSection from "@/components/services/RentSection"
import ServiceHeader from "@/components/services/ServiceHeader"
import ServiceTabs from "@/components/services/ServiceTabs"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import { getPropertiesByType, properties, PropertyType } from "@/data/properties"
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { useSearchParams } from "react-router-dom"
import { DisplayProperty } from "@/types/property"
import { useState, useEffect } from "react"


const Buyy = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<PropertyType>("rent");
    const [properties, setProperties] = useState<DisplayProperty[]>([]);
  
    useEffect(() => {
      const typeParam = searchParams.get("type") as PropertyType;
      if (typeParam && (typeParam === "rent" || typeParam === "buy")) {
        setActiveTab(typeParam);
      }
      
      const filteredProperties = getPropertiesByType(activeTab);
      
      // Convert properties to DisplayProperty type with contact text instead of price
      const displayProperties = filteredProperties.map(prop => ({
        ...prop,
        price: "Contactez-nous pour le prix"
      }));
      
      setProperties(displayProperties);
      
      // Initialize AOS animations
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
      }
    }, [searchParams, activeTab]);
  
    const handleTabChange = (value: string) => {
      setActiveTab(value as PropertyType);
      setSearchParams({ type: value });
    };
    return (
<div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
          <section className="container mx-auto px-6 py-12">
          <ServiceHeader 
            title="Nos Services" 
            description="Que vous cherchiez à louer ou à acheter, nous avons les options de propriétés parfaites pour vous."
          />
          
          <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
            <ServiceTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
          </Tabs>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Solutions de Financement</Badge>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Acheter une
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}
                    propriété
                  </span>
                </h2>
              </div>
  
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. Grâce à nos{" "}
                  <span className="font-semibold text-blue-600">
                    partenariats avec des institutions financières réputées
                  </span>{" "}
                  (banques, établissements de crédit, organismes de prêt immobilier), nous serons là pour vous accompagner
                  et vous faciliter l'accès à votre propriété dans les meilleures conditions.
                </p>
  
                {/* Feature Cards */}
                <div className="space-y-6 not-prose">
                  {[
                    {
                      icon: TrendingUp,
                      title: "1. Accès à des Offres de Financement Privilégiées",
                      description: "Nos partenaires financiers proposent des solutions sur mesure, incluant :",
                      features: [
                        "Taux d'intérêt compétitifs (fixes ou variables) négociés grâce à notre réseau",
                        "Durées de prêt flexibles (de 25 à 30 ans)",
                        "Pas de Frais de dossier",
                      ],
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      icon: Users,
                      title: "2. Un Accompagnement Personnalisé",
                      description: "",
                      features: [
                        "Simulation gratuite : Estimation de votre capacité d'emprunt et montant envisageable",
                        "Dossier simplifié : Centralisation des démarches avec nos partenaires pour gagner du temps",
                        "Conseils experts : Choix entre prêt conventionnel ou assuré",
                      ],
                      color: "from-blue-500 to-indigo-600",
                    },
                    {
                      icon: Award,
                      title: "3. Avantages Exclusifs",
                      description: "En passant par notre réseau, vous bénéficiez :",
                      features: [
                        "D'une étude préalable accélérée pour valider votre qualification",
                        "De conditions préférentielles réservées à nos clients",
                        "D'un suivi jusqu'à la signature de l'hypothèque",
                      ],
                      color: "from-purple-500 to-violet-600",
                    },
                  ].map((section, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h4>
                            {section.description && <p className="text-gray-600 mb-4">{section.description}</p>}
                          </div>
                        </div>
                        <div className="space-y-3">
                          {section.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
  
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  <Calculator className="w-5 h-5 mr-2" />
                  REMPLIR LE FORMULAIRE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Guide Gratuit
                </Button>
              </div>
            </div>
  
            {/* Right Column - Visual Elements */}
            <div className="space-y-8">
              {/* Document Images */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                    <div className="bg-gradient-to-br from-blue-200 to-indigo-300 h-32 rounded-lg mb-4 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Guide de l'acheteur</p>
                    <p className="text-xs text-gray-500 mt-1">Tout ce que vous devez savoir</p>
                  </div>
                </Card>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6">
                    <div className="bg-gradient-to-br from-gray-200 to-slate-300 h-32 rounded-lg mb-4 flex items-center justify-center">
                      <Calculator className="w-8 h-8 text-gray-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Calculatrice</p>
                    <p className="text-xs text-gray-500 mt-1">Estimez vos paiements</p>
                  </div>
                </Card>
              </div>
  
              {/* Enhanced Team Section */}
              <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white border-0 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
  
                <div className="relative p-8">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-blue-600/20 text-blue-200 border-blue-400/30">Équipe Experte</Badge>
                    <img 
        src="/lovable-uploads/logo.png" 
        alt="Logo Kais Khayati" 
        className="h-20 w-auto object-contain items-center" 
      />
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-300 ml-2">Excellence garantie</span>
                    </div>
                  </div>
  
                  <div className="space-y-4">
                    {[
                      { icon: Calculator, text: "Analyse de votre profil financier" },
                      { icon: TrendingUp, text: "Sélection des meilleures offres disponibles" },
                      { icon: Shield, text: "Négociation des conditions optimales" },
                      { icon: Users, text: "Accompagnement dans les démarches" },
                      { icon: Clock, text: "Suivi personnalisé jusqu'à la signature" },
                      { icon: Award, text: "Service après-vente et conseils continus" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                          <item.icon className="w-4 h-4 text-blue-300" />
                        </div>
                        <span className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-300" />
                        <span className="text-gray-300">514-746-2907</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-300" />
                        <span className="text-gray-300">info@equipelovasco.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
  
        {/* Enhanced Contact Form Section */}
        <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Contact Expert</Badge>
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
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      ENVOYER MA DEMANDE
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">Réponse garantie sous 24h • Consultation gratuite</p>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
        </main>


        <Footer />

      </div>    );

};

export default Buyy;
