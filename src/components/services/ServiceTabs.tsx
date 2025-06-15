
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Building } from "lucide-react";
import { PropertyType } from "@/data/properties";

interface ServiceTabsProps {
  activeTab: PropertyType;
  onTabChange: (value: string) => void;
}

const ServiceTabs = ({ activeTab, onTabChange }: ServiceTabsProps) => {
  return (
    <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-[400px]">
        <TabsList 
          className="grid grid-cols-2 w-full border-2 border-realestate-blue/70 p-1 rounded-full shadow-md" 
          role="tablist" 
          aria-label="Services immobiliers"
        >
          <TabsTrigger 
            value="rent" 
            className="data-[state=active]:bg-realestate-blue data-[state=active]:text-white data-[state=inactive]:text-realestate-black font-semibold rounded-full transition-all duration-200"
            role="tab"
            aria-selected={activeTab === "rent"}
          >
            <Home className="mr-2 h-4 w-4" />
            Vendre une Maison
          </TabsTrigger>
          <TabsTrigger 
            value="buy" 
            className="data-[state=active]:bg-realestate-red data-[state=active]:text-white data-[state=inactive]:text-realestate-black font-semibold rounded-full transition-all duration-200"
            role="tab"
            aria-selected={activeTab === "buy"}
          >
            <Building className="mr-2 h-4 w-4" />
            Acheter une Maison
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
