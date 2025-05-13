
import { Button } from "@/components/ui/button";

const PropertyStepCard = ({ 
  imageUrl, 
  title,
  location,
  beds, 
  baths
}: { 
  imageUrl: string;
  title: string;
  location: string;
  beds: number; 
  baths: number; 
  price?: string; // Made price optional
}) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-[200px] w-full overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt="Property" 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 right-3 bg-realestate-tag text-white text-xs py-1 px-3 rounded-full">
          For Sale
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {location}
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              {beds} beds
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2H2v20h20V2Z"></path>
                <path d="M22 8H2"></path>
                <path d="M8 2v20"></path>
              </svg>
              {baths} baths
            </span>
          </div>
          <span className="font-bold text-realestate-blue">Contactez-nous</span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button className="w-full bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepsSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="text-3xl font-bold">
          Featured <span className="text-realestate-blue">Properties</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Explore our handpicked selection of featured properties. These represent the best in comfort, value, and potential for appreciation.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Luxury Villa"
          location="Beverly Hills"
          beds={4}
          baths={3}
        />
        
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80"
          title="Modern Apartment"
          location="San Francisco"
          beds={2}
          baths={2}
        />
        
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Coastal Home"
          location="Miami Beach"
          beds={3}
          baths={2}
        />
      </div>
      
      <div className="mt-10 text-center">
        <Button variant="outline" className="border-realestate-blue text-realestate-blue hover:bg-realestate-lightblue rounded-full px-8">
          View All Properties
        </Button>
      </div>
    </div>
  );
};

export default StepsSection;
