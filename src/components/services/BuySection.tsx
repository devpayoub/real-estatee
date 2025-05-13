
import { Button } from "@/components/ui/button";
import { DisplayProperty } from "@/types/property";
import PropertyCardDetailed from "@/components/PropertyCardDetailed";
import { Building, Shield, Award, MapPin } from "lucide-react";

interface BuySectionProps {
  properties: DisplayProperty[];
}

const BuySection = ({ properties }: BuySectionProps) => {
  return (
    <>
      <div className="mb-8 bg-realestate-lightred p-6 rounded-lg border-l-4 border-realestate-red shadow-card" data-aos="fade-up" data-aos-delay="150">
        <h2 className="text-2xl font-bold mb-3 text-realestate-red flex items-center">
          <Building className="mr-3 h-6 w-6 text-realestate-red" />
          Acheter avec Kais Khayati
        </h2>
        <p className="text-gray-700 mb-4">
          Trouvez votre maison de rêve avec nos conseils d'expert. Nous vous aiderons à chaque étape du processus d'achat.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-realestate-red text-white p-2 rounded-full">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Expertise Immobilière</h3>
              <p className="text-sm text-gray-600">Bénéficiez de notre connaissance approfondie du marché immobilier local.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="250">
            <div className="bg-realestate-blue text-white p-2 rounded-full">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Conseils Financiers</h3>
              <p className="text-sm text-gray-600">Obtenez de l'aide pour les options de financement et solutions hypothécaires.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-r from-realestate-red to-realestate-blue text-white p-2 rounded-full">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Investissement Futur</h3>
              <p className="text-sm text-gray-600">Trouvez des propriétés avec une excellente valeur à long terme et du potentiel.</p>
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
        <Button variant="red" size="lg" className="rounded-full">
          <MapPin className="mr-2" />
          Voir Plus de Propriétés à Acheter
        </Button>
      </div>
    </>
  );
};

export default BuySection;
