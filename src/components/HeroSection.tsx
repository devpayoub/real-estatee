
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Calendar, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full py-16 px-6 md:px-12 gap-10">
      <div className="flex-1 pt-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Your Perfect <br />
          <span className="text-realestate-blue">Dream Home</span> <br />
          With Us
        </h1>
        <p className="mt-5 text-gray-600 max-w-[500px]">
          We help you find your dream home that suits your budget. Get connected with the best agents to make this happen quickly and with ease.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-realestate-lightblue p-3 rounded-full">
              <Home className="text-realestate-blue h-6 w-6" />
            </div>
            <span className="mt-2 text-sm font-medium">Property Insurance</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-realestate-lightblue p-3 rounded-full">
              <Calendar className="text-realestate-blue h-6 w-6" />
            </div>
            <span className="mt-2 text-sm font-medium">Best Interest Rates</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-realestate-lightblue p-3 rounded-full">
              <Activity className="text-realestate-blue h-6 w-6" />
            </div>
            <span className="mt-2 text-sm font-medium">24/7 Support</span>
          </div>
        </div>
        
        <div className="mt-10 bg-white p-5 rounded-xl shadow-lg max-w-[550px]">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm text-gray-500">Location</label>
              <Input placeholder="Enter location" className="mt-1" />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm text-gray-500">Property Type</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="text-sm text-gray-500">Price Range</label>
            <div className="flex gap-3 mt-1">
              <Input placeholder="Min" className="flex-1" />
              <Input placeholder="Max" className="flex-1" />
            </div>
          </div>
          
          <div className="mt-4 flex">
            <Button className="w-full bg-realestate-blue hover:bg-realestate-darkblue text-white">Search</Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative ml-auto">
        <div className="relative mx-auto max-w-[420px]">
          <div className="absolute top-8 right-[-20px] bg-realestate-blue text-white text-xs py-1 px-3 rounded-full">
            Featured
          </div>
          <div className="bg-white rounded-3xl p-3 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Luxury apartment" 
              className="w-full rounded-2xl h-[420px] object-cover"
            />
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Modern Villa</h3>
                <span className="font-bold text-realestate-blue">$1.5M</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-100 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500">Los Angeles, CA</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">4 Beds</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                        <path d="M22 2H2v20h20V2Z"></path>
                        <path d="M22 8H2"></path>
                        <path d="M8 2v20"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">3 Baths</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">2500 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
