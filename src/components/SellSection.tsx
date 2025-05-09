
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SellSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative mx-auto max-w-[500px]">
            <div className="absolute -top-4 -left-4 bg-realestate-blue text-white py-3 px-5 rounded-lg z-10 shadow-lg">
              <span className="text-xl font-bold">Super Sale$</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Luxury property" 
              className="rounded-3xl w-full h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2">
          <h2 className="text-3xl font-bold">
            Sell for more than the <br />
            <span className="text-realestate-blue">home next door</span>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-[500px]">
            We have a wide range of properties for you to choose from. Our market analysis data will help you find the perfect property for your needs.
          </p>
          
          <div className="mt-6 flex">
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full px-8">
              Explore More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="overflow-hidden border-none shadow-lg rounded-xl">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Rent a home" 
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Rent a Home</h3>
                <p className="text-sm text-gray-500 mt-1">Find your dream rental from our curated selection</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg rounded-xl">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Buy a home" 
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Buy a Home</h3>
                <p className="text-sm text-gray-500 mt-1">Browse thousands of listings in your area</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg rounded-xl">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Sell a home" 
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Sell a Home</h3>
                <p className="text-sm text-gray-500 mt-1">Get the best value for your property</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellSection;
