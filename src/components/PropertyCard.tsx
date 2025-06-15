
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  price: string;
  bathrooms: number;
  bedrooms: number;
  squareFeet: number;
  tagText?: string;
  id?: string;
}

const formatCanadianPrice = (price: string | number) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) : price;
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
};

const PropertyCard = ({ 
  imageUrl, 
  location, 
  price, 
  bathrooms, 
  bedrooms, 
  squareFeet, 
  tagText,
  id = "1"
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={location}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          {tagText && (
            <Badge className="absolute top-3 left-3 bg-realestate-red text-white">
              {tagText}
            </Badge>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin size={16} />
            <span className="text-sm">{location}</span>
          </div>
          <h3 className="text-xl font-bold text-realestate-blue mb-3">
            {formatCanadianPrice(price)}
          </h3>
          <div className="flex items-center justify-between text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} />
              <span>{squareFeet} sq ft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
