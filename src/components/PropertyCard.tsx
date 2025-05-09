
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  price: string;
  bathrooms: number;
  bedrooms: number;
  squareFeet: number;
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
  buttonText = "See a Home",
  tagText
}: PropertyCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg max-w-[350px] relative">
      {tagText && (
        <div className="absolute top-4 right-4 bg-realestate-tag text-white text-xs py-1 px-3 rounded-full z-10">
          {tagText}
        </div>
      )}
      <div className="h-[200px] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Property in ${location}`} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{location}</h3>
          <span className="font-bold text-realestate-blue">{price}</span>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2H2v20h20V2Z"></path>
              <path d="M22 8H2"></path>
              <path d="M8 2v20"></path>
            </svg>
            <span>{bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span>{squareFeet} sq ft</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
          <Button variant="outline" className="border-realestate-blue text-realestate-blue hover:bg-realestate-lightblue hover:text-realestate-blue">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
