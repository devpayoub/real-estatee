
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Property, getPropertyById } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Home, Check, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
          <p className="text-xl">Loading property details...</p>
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
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="mb-6">The property you are looking for does not exist or has been removed.</p>
            <Link to="/services">
              <Button className="bg-realestate-blue hover:bg-realestate-darkblue">
                View All Properties
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number, type: string) => {
    return type === 'rent' 
      ? `$${price.toLocaleString()}/month` 
      : `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Link to="/" className="text-gray-500 hover:text-realestate-blue">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/services" className="text-gray-500 hover:text-realestate-blue">Properties</Link>
              <span className="text-gray-400">/</span>
              <span className="text-realestate-blue">{property.title}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
                <div className="flex items-center mt-2">
                  <MapPin size={18} className="text-realestate-blue mr-1" />
                  <span className="text-gray-600">{property.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <Badge className="mb-2 px-3 py-1 text-base bg-realestate-blue text-white">
                  {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                </Badge>
                <span className="text-2xl font-bold text-realestate-blue">
                  {formatPrice(property.price, property.type)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <Bed size={24} className="text-realestate-blue mb-2" />
                  <span className="text-sm text-gray-500">Bedrooms</span>
                  <span className="font-semibold text-lg">{property.bedrooms}</span>
                </div>
                
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <Bath size={24} className="text-realestate-blue mb-2" />
                  <span className="text-sm text-gray-500">Bathrooms</span>
                  <span className="font-semibold text-lg">{property.bathrooms}</span>
                </div>
                
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <Square size={24} className="text-realestate-blue mb-2" />
                  <span className="text-sm text-gray-500">Area</span>
                  <span className="font-semibold text-lg">{property.area} ft²</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check size={18} className="text-realestate-blue" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check size={18} className="text-realestate-blue" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <User size={20} className="mr-2 text-realestate-blue" />
                  Contact Agent
                </h2>
                <Separator className="my-4" />
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                    alt="Agent" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">John Smith</h3>
                    <p className="text-sm text-gray-600">Professional Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-realestate-blue" />
                    <span className="text-sm">123 Main Street, New York, NY 10001</span>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="w-full bg-realestate-blue hover:bg-realestate-darkblue rounded-full">
                    Contact Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
