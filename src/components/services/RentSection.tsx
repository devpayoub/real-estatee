
import { Button } from "@/components/ui/button";
import { DisplayProperty } from "@/types/property";
import PropertyCardDetailed from "@/components/PropertyCardDetailed";
import { Home, DollarSign, MapPin } from "lucide-react";

interface RentSectionProps {
  properties: DisplayProperty[];
}

const RentSection = ({ properties }: RentSectionProps) => {
  return (
    <>
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
        {properties.map((property, index) => (
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
    </>
  );
};

export default RentSection;
