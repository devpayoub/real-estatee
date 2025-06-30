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
  MapPin,
  Home,
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
import PartenLogos from "@/components/PartenLogos"


const Buy = () => {

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
        <section className="relative py-20 px-6 bg-gradient-to-r from-realestate-blue to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Nos Services Immobiliers
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos services complets pour l'achat et la vente de propriétés au Canada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setActiveTab("rent")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "rent"
                    ? "bg-white text-realestate-blue shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                <Home className="mr-2 h-5 w-5" />
                Vendre
              </Button>
              <Button
                onClick={() => setActiveTab("buy")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "buy"
                    ? "bg-white text-realestate-red shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Acheter
              </Button>
            </div>
          </div>
        </section>


        <section className="container mx-auto px-6 py-12">
          <ServiceHeader
            title="Nos Services"
            description="Que vous cherchiez à louer ou à acheter, nous avons les options de propriétés parfaites pour vous."
          />

          <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
            <ServiceTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <TabsContent value="rent" className="mt-0">
              <RentSection properties={properties} />
            </TabsContent>

            <TabsContent value="buy" className="mt-0">
              <BuySection properties={properties} />
            </TabsContent>
          </Tabs>
        </section>
        
        <div className="animate-on-scroll opacity-0" data-aos="fade-up" data-aos-delay="300">
          <PartenLogos />
        </div>

        <div className="py-8 bg-gradient-to-r from-realestate-blue/5 to-realestate-red/5">
          <TestimonialsCarousel />
        </div>
      </main>
      
      <Footer />

    </div>
  );

};

export default Buy;
