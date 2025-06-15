
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "buy" | "rent";
  images: string[];
  featured?: boolean;
  image?: string;
  description?: string;
  features?: string[];
  amenities?: string[];
}

export interface DisplayProperty {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "buy" | "rent";
  images: string[];
  featured?: boolean;
  image?: string;
  description?: string;
  features?: string[];
  amenities?: string[];
}
