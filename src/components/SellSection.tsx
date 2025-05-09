
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";

const SellSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Find Your Dream <br />
            <span className="text-realestate-blue">Property</span> With Us
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-[500px]">
            We have a wide range of properties for you to choose from. Our market analysis data will help you find the perfect property for your needs.
          </p>
          
          <div className="mt-6 flex">
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full px-8">
              Explore More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="New York"
              price="$1.2M"
              bedrooms={3}
              bathrooms={2}
              squareFeet={1200}
              tagText="New"
            />
            
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="Los Angeles"
              price="$950K"
              bedrooms={4}
              bathrooms={3}
              squareFeet={1800}
              tagText="Hot"
            />
            
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="Miami"
              price="$780K"
              bedrooms={2}
              bathrooms={2}
              squareFeet={1100}
              tagText="Sale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellSection;
