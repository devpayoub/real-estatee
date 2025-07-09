
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
  price: string | number;
  image: string;
  images?: string[];
  features: string[];
  amenities: string[];
  featured?: boolean;
}

// Define extended property type that can have a string price for display
export interface DisplayProperty extends Property {
  price: string | number;
}
