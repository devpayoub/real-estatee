
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import { properties } from "@/data/properties";
import { DisplayProperty } from "@/types/property";

const Properties = () => {
  // Convert properties to DisplayProperty format
  const displayProperties: DisplayProperty[] = properties.map(property => ({
    ...property,
    price: property.price || "Contactez-nous"
  }));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nos Propriétés</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de propriétés premium disponibles à la location ou à l'achat
            </p>
          </div>
          
          <PropertiesGrid properties={displayProperties} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
