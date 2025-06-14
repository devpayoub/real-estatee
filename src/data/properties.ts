
import { Property } from "@/types/property";

export type PropertyType = "buy" | "rent";

export const properties: Property[] = [
  {
    id: "1",
    title: "Maison Moderne à Toronto",
    description: "Belle maison familiale avec jardin privé dans un quartier résidentiel calme. Architecture contemporaine avec finitions haut de gamme.",
    location: "Toronto, Ontario",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    type: "buy",
    price: 850000,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: true
  },
  {
    id: "2", 
    title: "Appartement de Luxe à Vancouver",
    description: "Appartement spacieux avec vue sur les montagnes. Cuisine moderne équipée et balcon panoramique.",
    location: "Vancouver, Colombie-Britannique",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "rent",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: true
  },
  {
    id: "3",
    title: "Condo Moderne à Montréal",
    description: "Condo neuf dans le centre-ville avec tous les services à proximité. Parfait pour les professionnels.",
    location: "Montréal, Québec",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    type: "rent",
    price: 2100,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "4",
    title: "Villa Familiale à Calgary",
    description: "Grande maison familiale avec garage double et grand terrain. Idéale pour les familles nombreuses.",
    location: "Calgary, Alberta",
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    type: "buy",
    price: 720000,
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: "5",
    title: "Loft Industriel à Ottawa",
    description: "Loft au design industriel dans un ancien entrepôt rénové. Espace ouvert avec hauts plafonds.",
    location: "Ottawa, Ontario",
    bedrooms: 2,
    bathrooms: 2,
    area: 140,
    type: "buy",
    price: 520000,
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

// Filter properties by type
export const getPropertiesByType = (type: PropertyType): Property[] => {
  return properties.filter(property => property.type === type);
};

// Get property by ID
export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

// CRUD operations for admin
export const addProperty = (property: Omit<Property, 'id'>): Property => {
  const newProperty = {
    ...property,
    id: Math.random().toString(36).substr(2, 9)
  };
  properties.push(newProperty);
  return newProperty;
};

export const updateProperty = (id: string, updates: Partial<Property>): Property | null => {
  const index = properties.findIndex(property => property.id === id);
  if (index === -1) return null;
  
  properties[index] = { ...properties[index], ...updates };
  return properties[index];
};

export const deleteProperty = (id: string): boolean => {
  const index = properties.findIndex(property => property.id === id);
  if (index === -1) return false;
  
  properties.splice(index, 1);
  return true;
};

export { type Property } from "@/types/property";
