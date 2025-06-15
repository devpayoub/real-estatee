import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { MapPin, Bed, Bath, Square, Users } from "lucide-react";

// Extend the Property type to allow string prices
interface ExtendedProperty extends Omit<Property, 'price'> {
  price: string | number;
}

interface PropertyCardDetailedProps {
  property: ExtendedProperty;
  showVisitButton?: boolean;
}

const formatCanadianPrice = (price: string | number) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price.toString().replace(/[^0-9.]/g, '')) : price;
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
};

const PropertyCardDetailed = ({ property, showVisitButton = true }: PropertyCardDetailedProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-realestate-blue text-white">
          {property.type === 'rent' ? 'For Rent' : 'For Sale'}
        </Badge>
        
        {showVisitButton && (
          <div className="absolute bottom-4 right-4 flex items-center space-x-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
              <Users size={16} className="text-realestate-blue mr-1" />
              <span className="text-sm font-medium">12+ Visitors</span>
            </div>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{property.title}</h3>
          <span className="text-lg font-bold text-realestate-blue">
            {formatCanadianPrice(property.price)}
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
            <Bed size={18} className="text-realestate-blue mb-1" />
            <span className="text-xs text-gray-500">Bedrooms</span>
            <span className="font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
            <Bath size={18} className="text-realestate-blue mb-1" />
            <span className="text-xs text-gray-500">Bathrooms</span>
            <span className="font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
            <Square size={18} className="text-realestate-blue mb-1" />
            <span className="text-xs text-gray-500">Area</span>
            <span className="font-medium">{property.area} ft²</span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-2">{property.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 mt-auto">
        <Link to={`/property/${property.id}`} className="w-full">
          <Button className="w-full rounded-full bg-realestate-blue hover:bg-realestate-darkblue">
            {showVisitButton ? "Visit Property" : "View Details"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCardDetailed;
