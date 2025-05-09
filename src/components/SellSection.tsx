
import PropertyCard from "./PropertyCard";

const SellSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 relative">
          <div className="relative mx-auto max-w-[380px]">
            <div className="absolute top-6 right-[-10px] bg-realestate-tag text-white text-xs py-1 px-3 rounded-full">
              Super Sale
            </div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Modern house" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Sell For More Than <br />
            The Home <span className="text-realestate-blue">Next Door</span>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-[500px]">
            Ready to sell? Get an instant estimate of your home's value. Our market analysis data will help you get the perfect price for your property.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="New York"
              price="$1.2M"
              bedrooms={3}
              bathrooms={2}
              squareFeet={1200}
              buttonText="See a Home"
              tagText="New"
            />
            
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="Los Angeles"
              price="$950K"
              bedrooms={4}
              bathrooms={3}
              squareFeet={1800}
              buttonText="See a Home"
              tagText="Hot"
            />
            
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              location="Miami"
              price="$780K"
              bedrooms={2}
              bathrooms={2}
              squareFeet={1100}
              buttonText="See a Home"
              tagText="Sale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellSection;
