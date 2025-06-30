import { Property } from "@/types/property";

export type PropertyType = 'rent' | 'buy';

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  features: string[];
  amenities: string[];
}

// Sample properties data
export const properties: Property[] = [
  {
    id: "1",
    title: "Villa Moderne avec Piscine",
    description: "Magnifique villa moderne avec piscine, jardin et vue imprenable. Parfaite pour une famille à la recherche de confort et de luxe.",
    type: "buy",
    location: "Paris 16ème",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    features: ["Piscine", "Jardin", "Garage", "Terrasse"],
    amenities: ["Climatisation", "Chauffage", "Système de Sécurité", "Domotique"]
  },
  {
    id: "2",
    title: "Appartement en Centre-Ville",
    description: "Appartement moderne en plein cœur de la ville. Proche des restaurants, commerces et transports en commun.",
    type: "rent",
    location: "Lyon Centre",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    features: ["Balcon", "Ascenseur", "Cave"],
    amenities: ["Climatisation", "Chauffage", "Lave-linge"]
  }
];

export const addProperty = (property: Omit<Property, 'id'>): Property => {
  const newProperty = {
    ...property,
    id: Date.now().toString()
  };
  properties.push(newProperty);
  return newProperty;
};

export const updateProperty = (id: string, property: Omit<Property, 'id'>): Property | null => {
  const index = properties.findIndex(p => p.id === id);
  if (index !== -1) {
    const updatedProperty = { ...property, id };
    properties[index] = updatedProperty;
    return updatedProperty;
  }
  return null;
};

export const deleteProperty = (id: string): boolean => {
  const index = properties.findIndex(p => p.id === id);
  if (index !== -1) {
    properties.splice(index, 1);
    return true;
  }
  return false;
};

export const getPropertiesByType = (type: PropertyType): Property[] => {
  return properties.filter(property => property.type === type);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};