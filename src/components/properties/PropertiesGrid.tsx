
import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { DisplayProperty } from "@/types/property";

interface PropertiesGridProps {
  properties: DisplayProperty[];
}

const PropertiesGrid = ({ properties }: PropertiesGridProps) => {
  if (properties.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">
            Aucune propriété trouvée
          </h3>
          <p className="text-gray-500">
            Aucune propriété ne correspond à vos critères de recherche.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGrid;
