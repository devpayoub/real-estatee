
import { Property } from "@/data/properties";

// Define extended property type that can have a string price for display
export interface DisplayProperty extends Omit<Property, 'price'> {
  price: string | number;
}
