import React, { useState, useEffect } from "react";
import ServiceTabs from "@/components/services/ServiceTabs";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import { getPropertiesByType, PropertyType } from "@/data/properties";
import { DisplayProperty } from "@/types/property";

const Services = () => {
  const [displayProperties, setDisplayProperties] = useState<DisplayProperty[]>([]);
  const [activeTab, setActiveTab] = useState<PropertyType>("buy");

  useEffect(() => {
    const filteredProperties = getPropertiesByType(activeTab);
    
    // Convert properties to display format with proper type conversion
    const convertedProperties: DisplayProperty[] = filteredProperties.map(property => ({
      ...property,
      price: property.price // Keep as number, don't convert to string
    }));
    
    setDisplayProperties(convertedProperties);
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as PropertyType);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 pt-16">
        <ServiceTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <PropertiesGrid properties={displayProperties} />
      </main>
    </div>
  );
};

export default Services;
