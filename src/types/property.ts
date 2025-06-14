
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "buy" | "rent";
  price: number;
  images: string[];
  featured?: boolean;
}

export interface DisplayProperty extends Property {
  // Additional display properties can be added here
}
