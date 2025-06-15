
import { Button } from "@/components/ui/button";
import { HandCoins, CreditCard, Users } from "lucide-react";

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  price: string;
  bathrooms: number;
  bedrooms: number;
  squareFeet: number;
  visitors?: number;
  buttonText?: string;
  tagText?: string;
}

const PropertyCard = ({
  imageUrl,
  location,
  price,
  bathrooms,
  bedrooms,
  squareFeet,
  visitors = 3,
  buttonText = "Visit",
  tagText
}: PropertyCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg max-w-[380px] relative border border-gray-100">
      {tagText && (
        <div className="absolute top-3 right-3 bg-realestate-tag text-white text-xs py-1 px-3 rounded-full z-10">
          {tagText}
        </div>
      )}
      <div className="h-[220px] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Property in ${location}`} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{location}</h3>
          <span className="font-bold text-realestate-blue">{price}</span>
        </div>
        
        <div className="mt-3 flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M22 2H2v20h20V2Z"></path>
              <path d="M22 8H2"></path>
              <path d="M8 2v20"></path>
            </svg>
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span>{squareFeet} sq ft</span>
          </div>
        </div>
        
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/150?img=${20 + i}`} 
                    alt="Visitor" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">{visitors} Visitors</span>
          </div>
          
          <Button variant="outline" size="sm" className="border-realestate-blue text-realestate-blue hover:bg-realestate-lightblue hover:text-realestate-blue rounded-full">
            {buttonText}
          </Button>
        </div>
        
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
            <div className="bg-realestate-lightblue p-1.5 rounded-full">
              <HandCoins className="text-realestate-blue h-4 w-4" />
            </div>
            <span className="text-xs font-medium">Send Money</span>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
            <div className="bg-realestate-lightblue p-1.5 rounded-full">
              <CreditCard className="text-realestate-blue h-4 w-4" />
            </div>
            <span className="text-xs font-medium">Pay The Bill</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
