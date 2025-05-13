
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Property, getPropertyById } from "@/data/properties";
import { Button } from "@/components/ui/button";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyOverview from "@/components/property/PropertyOverview";
import PropertyFeatures from "@/components/property/PropertyFeatures";
import PropertyContactCard from "@/components/property/PropertyContactCard";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchedProperty = getPropertyById(id);
      if (fetchedProperty) {
        setProperty(fetchedProperty);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <p className="text-xl">Chargement des détails de la propriété...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 pt-24 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Propriété Non Trouvée</h1>
            <p className="mb-6">La propriété que vous recherchez n'existe pas ou a été supprimée.</p>
            <Link to="/services">
              <Button className="bg-realestate-red hover:bg-realestate-darkred">
                Voir Toutes les Propriétés
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-6 py-12">
          <PropertyHeader 
            title={property.title} 
            location={property.location} 
            price={property.price}
            type={property.type}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyGallery image={property.image} title={property.title} />
              <PropertyOverview 
                bedrooms={property.bedrooms} 
                bathrooms={property.bathrooms} 
                area={property.area} 
              />
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>
              
              <PropertyFeatures 
                features={property.features} 
                amenities={property.amenities} 
              />
            </div>
            
            <div>
              <PropertyContactCard />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
