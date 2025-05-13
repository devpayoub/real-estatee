
import { Check } from "lucide-react";

interface PropertyFeaturesProps {
  features: string[];
  amenities: string[];
}

const PropertyFeatures = ({ features, amenities }: PropertyFeaturesProps) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Caractéristiques</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check size={18} className="text-realestate-red" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Commodités</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check size={18} className="text-realestate-red" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyFeatures;
