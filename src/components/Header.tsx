
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/public/lovable-uploads/4002b8f5-a08d-408c-af9e-4f28f584b8ca.png" alt="RentHome Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl ml-2 text-gray-800">RENTHOME</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-medium hover:text-realestate-blue transition-colors">Home</Link>
        <Link to="/about" className="font-medium hover:text-realestate-blue transition-colors">About Us</Link>
        <Link to="/services" className="font-medium hover:text-realestate-blue transition-colors">Services</Link>
        <Link to="/properties" className="font-medium hover:text-realestate-blue transition-colors">Properties</Link>
        <Link to="/blog" className="font-medium hover:text-realestate-blue transition-colors">Blog</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center relative">
          <Input 
            type="text" 
            placeholder="Search" 
            className="pl-8 w-[200px] rounded-full bg-gray-50 border-gray-200"
          />
          <Search className="absolute left-2 h-4 w-4 text-gray-500" />
        </div>
        <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full">Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;
