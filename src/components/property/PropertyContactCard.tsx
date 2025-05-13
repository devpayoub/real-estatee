
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, User } from "lucide-react";

const PropertyContactCard = () => {
  return (
    <div className="bg-realestate-lightred p-6 rounded-lg sticky top-24">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <User size={20} className="mr-2 text-realestate-red" />
        Contacter l'Agent
      </h2>
      <Separator className="my-4" />
      <div className="flex items-center gap-4 mb-4">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
          alt="Agent" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">Kais Khayati</h3>
          <p className="text-sm text-gray-600">Agent Immobilier Professionel</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-realestate-red" />
          <span className="text-sm">123 Rue Principale, Paris, 75001</span>
        </div>
      </div>
      
      <Link to="/contact">
        <Button className="w-full bg-realestate-red hover:bg-realestate-darkred rounded-full">
          Contacter Maintenant
        </Button>
      </Link>
    </div>
  );
};

export default PropertyContactCard;
