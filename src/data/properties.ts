
export type PropertyType = 'rent' | 'buy';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
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
    title: "Modern Villa with Pool",
    description: "Beautiful modern villa with swimming pool, garden and amazing views. Perfect for a family looking for comfort and luxury.",
    price: 850000,
    type: "buy",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    features: ["Swimming Pool", "Garden", "Garage", "Terrace"],
    amenities: ["Air Conditioning", "Heating", "Security System", "Home Automation"]
  },
  {
    id: "2",
    title: "Downtown Apartment",
    description: "Modern apartment in the heart of the city. Close to restaurants, shops and public transportation.",
    price: 2500,
    type: "rent",
    location: "Downtown, NY",
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    features: ["Balcony", "Elevator", "Pet Friendly"],
    amenities: ["Air Conditioning", "Heating", "Washer/Dryer"]
  },
  {
    id: "3",
    title: "Suburban Family Home",
    description: "Spacious family home in a quiet suburban neighborhood with schools and parks nearby.",
    price: 450000,
    type: "buy",
    location: "Pleasantville, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1000&auto=format&fit=crop",
    features: ["Backyard", "Garage", "Basement"],
    amenities: ["Central Heating", "Fireplace", "Security System"]
  },
  {
    id: "4",
    title: "Luxury Beachfront Condo",
    description: "Experience oceanfront living in this luxury condo with panoramic views of the beach and ocean.",
    price: 4500,
    type: "rent",
    location: "Miami Beach, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    features: ["Ocean View", "Private Beach Access", "Pool"],
    amenities: ["Gym", "Concierge", "Security", "Parking"]
  },
  {
    id: "5",
    title: "Mountain Retreat",
    description: "Cozy cabin nestled in the mountains, perfect for nature lovers looking for peace and quiet.",
    price: 350000,
    type: "buy",
    location: "Aspen, CO",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
    features: ["Mountain View", "Fireplace", "Deck"],
    amenities: ["Wood Stove", "Hiking Trails", "Well Water"]
  },
  {
    id: "6",
    title: "Modern Townhouse",
    description: "Newly built townhouse with modern design and amenities in a gated community.",
    price: 3200,
    type: "rent",
    location: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop",
    features: ["Rooftop Terrace", "Garage", "Community Pool"],
    amenities: ["Smart Home", "Storage", "Energy Efficient"]
  }
];

// Function to filter properties by type
export const getPropertiesByType = (type: PropertyType): Property[] => {
  return properties.filter(property => property.type === type);
};

// Function to get a property by id
export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};
