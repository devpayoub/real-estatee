
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
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
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Que vous cherchiez à louer ou à acheter, nous avons les options de propriétés parfaites pour vous.
            </p>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="rent" className="data-[state=active]:bg-realestate-red data-[state=active]:text-white">
                  Louer une Maison
                </TabsTrigger>
                <TabsTrigger value="buy" className="data-[state=active]:bg-realestate-red data-[state=active]:text-white">
                  Acheter une Maison
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="rent" className="mt-0">
              <div className="mb-8 bg-realestate-lightred p-6 rounded-lg" data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-2xl font-bold mb-3">Louer avec Kais Khayati</h2>
                <p className="text-gray-700 mb-4">
                  Louer une maison n'a jamais été aussi facile. Nous offrons une variété de propriétés locatives pour répondre à vos besoins et à votre budget.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-white p-2 rounded-full">
                      <Home className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Large Sélection</h3>
                      <p className="text-sm text-gray-600">Parcourez notre vaste collection de propriétés locatives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="250">
                    <div className="bg-white p-2 rounded-full">
                      <DollarSign className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Conditions Flexibles</h3>
                      <p className="text-sm text-gray-600">Trouvez des contrats de location adaptés à votre situation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-white p-2 rounded-full">
                      <Map className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emplacements de Choix</h3>
                      <p className="text-sm text-gray-600">Découvrez des propriétés dans les quartiers les plus désirables.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                  <div key={property.id} data-aos="fade-up" data-aos-delay={350 + (index * 50)}>
                    <PropertyCardDetailed property={property} />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="buy" className="mt-0">
              <div className="mb-8 bg-realestate-lightred p-6 rounded-lg" data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-2xl font-bold mb-3">Acheter avec Kais Khayati</h2>
                <p className="text-gray-700 mb-4">
                  Trouvez votre maison de rêve avec nos conseils d'expert. Nous vous aiderons à chaque étape du processus d'achat.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-white p-2 rounded-full">
                      <Building className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expertise Immobilière</h3>
                      <p className="text-sm text-gray-600">Bénéficiez de notre connaissance approfondie du marché immobilier local.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="250">
                    <div className="bg-white p-2 rounded-full">
                      <DollarSign className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Conseils Financiers</h3>
                      <p className="text-sm text-gray-600">Obtenez de l'aide pour les options de financement et solutions hypothécaires.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-white p-2 rounded-full">
                      <Map className="text-realestate-red h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Investissement Futur</h3>
                      <p className="text-sm text-gray-600">Trouvez des propriétés avec une excellente valeur à long terme et du potentiel.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                  <div key={property.id} data-aos="fade-up" data-aos-delay={350 + (index * 50)}>
                    <PropertyCardDetailed property={property} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
