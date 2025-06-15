
import React, { useState, useEffect } from "react";
import ServiceTabs from "@/components/services/ServiceTabs";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPropertiesByType, PropertyType } from "@/data/properties";
import { DisplayProperty } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Home } from "lucide-react";
import { Input } from "@/components/ui/input";

const Services = () => {
  const [displayProperties, setDisplayProperties] = useState<DisplayProperty[]>([]);
  const [activeTab, setActiveTab] = useState<PropertyType>("buy");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState<DisplayProperty[]>([]);

  useEffect(() => {
    const filteredProperties = getPropertiesByType(activeTab);
    
    const convertedProperties: DisplayProperty[] = filteredProperties.map(property => ({
      ...property,
      price: property.price
    }));
    
    setDisplayProperties(convertedProperties);
    setFilteredProperties(convertedProperties);
  }, [activeTab]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = displayProperties.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(displayProperties);
    }
  }, [searchTerm, displayProperties]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as PropertyType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
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
                onClick={() => setActiveTab("buy")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "buy" 
                    ? "bg-white text-realestate-blue shadow-lg" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Home className="mr-2 h-5 w-5" />
                Acheter
              </Button>
              <Button 
                onClick={() => setActiveTab("rent")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "rent" 
                    ? "bg-white text-realestate-red shadow-lg" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Vendre
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-6 bg-white border-b" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Rechercher par titre ou localisation..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20 rounded-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-realestate-blue text-realestate-blue hover:bg-realestate-lightblue rounded-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtres
                </Button>
                <span className="text-gray-600">
                  {filteredProperties.length} propriété{filteredProperties.length !== 1 ? 's' : ''} trouvée{filteredProperties.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <ServiceTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Properties Grid */}
        <PropertiesGrid properties={filteredProperties} />

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-realestate-blue to-realestate-red" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Commencer Votre Projet Immobilier?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Consultation Gratuite
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold">
                Voir Plus de Propriétés
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
