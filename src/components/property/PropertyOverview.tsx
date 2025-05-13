
import { Bed, Bath, Square } from "lucide-react";

interface PropertyOverviewProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const PropertyOverview = ({ bedrooms, bathrooms, area }: PropertyOverviewProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="flex flex-col items-center bg-realestate-lightred p-4 rounded-lg">
        <Bed size={24} className="text-realestate-red mb-2" />
        <span className="text-sm text-gray-500">Chambres</span>
        <span className="font-semibold text-lg">{bedrooms}</span>
      </div>
      
      <div className="flex flex-col items-center bg-realestate-lightred p-4 rounded-lg">
        <Bath size={24} className="text-realestate-red mb-2" />
        <span className="text-sm text-gray-500">Salles de Bain</span>
        <span className="font-semibold text-lg">{bathrooms}</span>
      </div>
      
      <div className="flex flex-col items-center bg-realestate-lightred p-4 rounded-lg">
        <Square size={24} className="text-realestate-red mb-2" />
        <span className="text-sm text-gray-500">Surface</span>
        <span className="font-semibold text-lg">{area} m²</span>
      </div>
    </div>
  );
};

export default PropertyOverview;
