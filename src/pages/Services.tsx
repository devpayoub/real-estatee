
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyType, getPropertiesByType } from "@/data/properties";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DisplayProperty } from "@/types/property";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceTabs from "@/components/services/ServiceTabs";
import RentSection from "@/components/services/RentSection";
import BuySection from "@/components/services/BuySection";

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<PropertyType>("rent");
  const [properties, setProperties] = useState<DisplayProperty[]>([]);

  useEffect(() => {
    const typeParam = searchParams.get("type") as PropertyType;
    if (typeParam && (typeParam === "rent" || typeParam === "buy")) {
      setActiveTab(typeParam);
    }
    
    const filteredProperties = getPropertiesByType(activeTab);
    
    // Convert properties to DisplayProperty type with string prices
    const displayProperties = filteredProperties.map(prop => ({
      ...prop,
      price: "Contactez-nous"
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
            
            <TabsContent value="rent" className="mt-0">
              <RentSection properties={properties} />
            </TabsContent>
            
            <TabsContent value="buy" className="mt-0">
              <BuySection properties={properties} />
            </TabsContent>
          </Tabs>
        </section>
        
        <div className="py-8 bg-gradient-to-r from-realestate-blue/5 to-realestate-red/5">
          <TestimonialsCarousel />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
