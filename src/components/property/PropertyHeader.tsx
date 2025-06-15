
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { PropertyType } from "@/data/properties";

interface PropertyHeaderProps {
  title: string;
  location: string;
  price: number | string;
  type: PropertyType;
}

const PropertyHeader = ({ title, location, price, type }: PropertyHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link to="/" className="text-gray-500 hover:text-realestate-red">Accueil</Link>
        <span className="text-gray-400">/</span>
        <Link to="/services" className="text-gray-500 hover:text-realestate-red">Propriétés</Link>
        <span className="text-gray-400">/</span>
        <span className="text-realestate-red">{title}</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <div className="flex items-center mt-2">
            <MapPin size={18} className="text-realestate-red mr-1" />
            <span className="text-gray-600">{location}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <Badge className="mb-2 px-3 py-1 text-base bg-realestate-red text-white">
            {type === 'rent' ? 'À Louer' : 'À Vendre'}
          </Badge>
          <span className="text-2xl font-bold text-realestate-red">
            Contactez-nous pour le prix
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
