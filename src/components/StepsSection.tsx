
import { Button } from "@/components/ui/button";

const PropertyStepCard = ({ 
  imageUrl, 
  beds, 
  baths, 
  price 
}: { 
  imageUrl: string; 
  beds: number; 
  baths: number; 
  price: string;
}) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md">
      <div className="h-[200px] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Property" 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {beds} beds
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {baths} baths
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {price}
          </span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
            Send Money
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
            Pay The Bill
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
          Take The First <span className="text-realestate-blue">Step</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus felis eget ornare lacinia. In varius tortor vel risus tincidunt pulvinar.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          beds={3}
          baths={2}
          price="$850K"
        />
        
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80"
          beds={4}
          baths={3}
          price="$1.2M"
        />
        
        <PropertyStepCard 
          imageUrl="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          beds={2}
          baths={2}
          price="$720K"
        />
      </div>
    </div>
  );
};

export default StepsSection;
