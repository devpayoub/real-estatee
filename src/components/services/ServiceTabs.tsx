
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
      <TabsList className="grid grid-cols-2 w-[400px] border-2 border-realestate-blue/70 p-1 rounded-full shadow-md">
        <TabsTrigger 
          value="rent" 
          className="data-[state=active]:bg-realestate-blue data-[state=active]:text-white data-[state=inactive]:text-realestate-black font-semibold rounded-full"
        >
          <Home className="mr-2 h-4 w-4" />
          Louer une Maison
        </TabsTrigger>
        <TabsTrigger 
          value="buy" 
          className="data-[state=active]:bg-realestate-red data-[state=active]:text-white data-[state=inactive]:text-realestate-black font-semibold rounded-full"
        >
          <Building className="mr-2 h-4 w-4" />
          Acheter une Maison
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default ServiceTabs;
