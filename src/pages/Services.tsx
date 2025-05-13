
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Property, PropertyType, getPropertiesByType } from "@/data/properties";
import PropertyCardDetailed from "@/components/PropertyCardDetailed";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Building, DollarSign, Map, Shield, Award, MapPin } from "lucide-react";

// Define extended property type that can have a string price for display
interface DisplayProperty extends Omit<Property, 'price'> {
  price: string | number;
}

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

  // Convert properties to DisplayProperty type with string prices
  const displayProperties: DisplayProperty[] = properties.map(prop => ({
    ...prop,
    price: "Contactez-nous"
  }));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-blue-red">Nos Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Que vous cherchiez à louer ou à acheter, nous avons les options de propriétés parfaites pour vous.
            </p>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
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
            
            <TabsContent value="rent" className="mt-0">
              <div className="mb-8 bg-realestate-lightblue p-6 rounded-lg border-l-4 border-realestate-blue shadow-card" data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-2xl font-bold mb-3 text-realestate-blue flex items-center">
                  <Home className="mr-3 h-6 w-6 text-realestate-blue" />
                  Louer avec Kais Khayati
                </h2>
                <p className="text-gray-700 mb-4">
                  Louer une maison n'a jamais été aussi facile. Nous offrons une variété de propriétés locatives pour répondre à vos besoins et à votre budget.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-realestate-blue text-white p-2 rounded-full">
                      <Home className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Large Sélection</h3>
                      <p className="text-sm text-gray-600">Parcourez notre vaste collection de propriétés locatives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="250">
                    <div className="bg-realestate-red text-white p-2 rounded-full">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Conditions Flexibles</h3>
                      <p className="text-sm text-gray-600">Trouvez des contrats de location adaptés à votre situation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-gradient-to-r from-realestate-blue to-realestate-red text-white p-2 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emplacements de Choix</h3>
                      <p className="text-sm text-gray-600">Découvrez des propriétés dans les quartiers les plus désirables.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProperties.map((property, index) => (
                  <div key={property.id} data-aos="fade-up" data-aos-delay={350 + (index * 50)} className="transform transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <PropertyCardDetailed property={property} />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center" data-aos="fade-up">
                <Button variant="blue" size="lg" className="rounded-full">
                  <MapPin className="mr-2" />
                  Voir Plus de Propriétés à Louer
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="buy" className="mt-0">
              <div className="mb-8 bg-realestate-lightred p-6 rounded-lg border-l-4 border-realestate-red shadow-card" data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-2xl font-bold mb-3 text-realestate-red flex items-center">
                  <Building className="mr-3 h-6 w-6 text-realestate-red" />
                  Acheter avec Kais Khayati
                </h2>
                <p className="text-gray-700 mb-4">
                  Trouvez votre maison de rêve avec nos conseils d'expert. Nous vous aiderons à chaque étape du processus d'achat.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-realestate-red text-white p-2 rounded-full">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expertise Immobilière</h3>
                      <p className="text-sm text-gray-600">Bénéficiez de notre connaissance approfondie du marché immobilier local.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="250">
                    <div className="bg-realestate-blue text-white p-2 rounded-full">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Conseils Financiers</h3>
                      <p className="text-sm text-gray-600">Obtenez de l'aide pour les options de financement et solutions hypothécaires.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-gradient-to-r from-realestate-red to-realestate-blue text-white p-2 rounded-full">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Investissement Futur</h3>
                      <p className="text-sm text-gray-600">Trouvez des propriétés avec une excellente valeur à long terme et du potentiel.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProperties.map((property, index) => (
                  <div key={property.id} data-aos="fade-up" data-aos-delay={350 + (index * 50)} className="transform transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <PropertyCardDetailed property={property} />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center" data-aos="fade-up">
                <Button variant="red" size="lg" className="rounded-full">
                  <MapPin className="mr-2" />
                  Voir Plus de Propriétés à Acheter
                </Button>
              </div>
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

