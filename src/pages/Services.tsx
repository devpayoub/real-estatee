
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Property, PropertyType, getPropertiesByType } from "@/data/properties";
import PropertyCardDetailed from "@/components/PropertyCardDetailed";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Building, DollarSign, Map } from "lucide-react";

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<PropertyType>("rent");
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const typeParam = searchParams.get("type") as PropertyType;
    if (typeParam && (typeParam === "rent" || typeParam === "buy")) {
      setActiveTab(typeParam);
    }
    
    const filteredProperties = getPropertiesByType(activeTab);
    setProperties(filteredProperties);
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to rent or buy, we have the perfect property options for you.
            </p>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="rent" className="data-[state=active]:bg-realestate-blue data-[state=active]:text-white">
                  Rent a House
                </TabsTrigger>
                <TabsTrigger value="buy" className="data-[state=active]:bg-realestate-blue data-[state=active]:text-white">
                  Buy a House
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="rent" className="mt-0">
              <div className="mb-8 bg-realestate-lightblue p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-3">Renting with Ozalams</h2>
                <p className="text-gray-700 mb-4">
                  Renting a house has never been easier. We offer a variety of rental properties to suit your needs and budget.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Home className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Wide Selection</h3>
                      <p className="text-sm text-gray-600">Browse through our extensive collection of rental properties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <DollarSign className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Terms</h3>
                      <p className="text-sm text-gray-600">Find rental agreements that work for your situation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Map className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Prime Locations</h3>
                      <p className="text-sm text-gray-600">Discover properties in the most desirable neighborhoods.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map(property => (
                  <PropertyCardDetailed key={property.id} property={property} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="buy" className="mt-0">
              <div className="mb-8 bg-realestate-lightblue p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-3">Buying with Ozalams</h2>
                <p className="text-gray-700 mb-4">
                  Find your dream home with our expert guidance. We'll help you through every step of the buying process.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Building className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Property Expertise</h3>
                      <p className="text-sm text-gray-600">Benefit from our deep knowledge of the local real estate market.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <DollarSign className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Financial Guidance</h3>
                      <p className="text-sm text-gray-600">Get assistance with financing options and mortgage solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Map className="text-realestate-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Future Investment</h3>
                      <p className="text-sm text-gray-600">Find properties with excellent long-term value and potential.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map(property => (
                  <PropertyCardDetailed key={property.id} property={property} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
