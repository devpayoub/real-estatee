
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/public/lovable-uploads/4002b8f5-a08d-408c-af9e-4f28f584b8ca.png" alt="RentHome Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl ml-2 text-gray-800">OZALAMS</span>
        </Link>
      </div>
      
      <nav className="hidden lg:flex items-center justify-center flex-1">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-realestate-blue transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-realestate-blue transition-colors">About Us</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium hover:text-realestate-blue bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[200px] bg-white">
                    <Link to="/services?type=rent" className="block p-2 hover:bg-gray-50 rounded-md">
                      Rent a House
                    </Link>
                    <Link to="/services?type=buy" className="block p-2 hover:bg-gray-50 rounded-md">
                      Buy a House
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/facilities" className="font-medium hover:text-realestate-blue transition-colors">Facilities</Link>
          <Link to="/blog" className="font-medium hover:text-realestate-blue transition-colors">Blogs</Link>
        </div>
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
        <div className="hidden md:flex items-center gap-3">
          <Button className="bg-transparent hover:bg-gray-100 text-realestate-blue border border-realestate-blue rounded-full">
            Visit Now
          </Button>
          <Link to="/contact">
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
        <button 
          className="lg:hidden text-gray-600 hover:text-realestate-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-5 px-6 lg:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-realestate-blue transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-realestate-blue transition-colors">About Us</Link>
            
            <div className="space-y-2">
              <div className="font-medium">Services</div>
              <div className="pl-4 space-y-2">
                <Link to="/services?type=rent" className="block text-sm hover:text-realestate-blue">
                  Rent a House
                </Link>
                <Link to="/services?type=buy" className="block text-sm hover:text-realestate-blue">
                  Buy a House
                </Link>
              </div>
            </div>
            
            <Link to="/facilities" className="font-medium hover:text-realestate-blue transition-colors">Facilities</Link>
            <Link to="/blog" className="font-medium hover:text-realestate-blue transition-colors">Blogs</Link>
            <div className="pt-3 flex flex-col space-y-3">
              <Button className="bg-transparent hover:bg-gray-100 text-realestate-blue border border-realestate-blue rounded-full w-full">
                Visit Now
              </Button>
              <Link to="/contact" className="w-full">
                <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
