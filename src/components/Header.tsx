import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, ChevronDown, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

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
          <img src="/public/lovable-uploads/4e52e5c8-184b-4b0b-8aaa-f4475a33e028.png" alt="Kais Khayati Logo" className="h-12 w-auto" />
        </Link>
      </div>
      
      <nav className="hidden lg:flex items-center justify-center flex-1">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-realestate-red transition-colors">Accueil</Link>
          <Link to="/about" className="font-medium hover:text-realestate-red transition-colors">À Propos</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium hover:text-realestate-red bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[200px] bg-white">
                    <Link to="/services?type=rent" className="block p-2 hover:bg-realestate-lightred rounded-md">
                      Vendre une Maison
                    </Link>
                    <Link to="/buy" className="block p-2 hover:bg-realestate-lightred rounded-md">
                      Acheter une Maison
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/blog" className="font-medium hover:text-realestate-red transition-colors">Blog</Link>
          <Link to="/contact" className="font-medium hover:text-realestate-red transition-colors">Contact</Link>
        </div>
      </nav>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center relative">
          <Input 
            type="text" 
            placeholder="Recherche" 
            className="pl-8 w-[200px] rounded-full bg-gray-50 border-gray-200"
          />
          <Search className="absolute left-2 h-4 w-4 text-gray-500" />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button className="bg-transparent hover:bg-realestate-lightred text-realestate-red border border-realestate-red rounded-full flex items-center gap-2">
              <LogIn size={16} />
              Login
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-realestate-red hover:bg-realestate-darkred text-white rounded-full">
              Contactez-nous
            </Button>
          </Link>
        </div>
        <button 
          className="lg:hidden text-gray-600 hover:text-realestate-red"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-5 px-6 lg:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-realestate-red transition-colors">Accueil</Link>
            <Link to="/about" className="font-medium hover:text-realestate-red transition-colors">À Propos</Link>
            
            <div className="space-y-2">
              <div className="font-medium">Services</div>
              <div className="pl-4 space-y-2">
                <Link to="/services?type=rent" className="block text-sm hover:text-realestate-red">
                  Vendre une Maison
                </Link>
                <Link to="/buy" className="block text-sm hover:text-realestate-red">
                  Acheter une Maison
                </Link>
              </div>
            </div>
            
            <Link to="/blog" className="font-medium hover:text-realestate-red transition-colors">Blog</Link>
            <Link to="/contact" className="font-medium hover:text-realestate-red transition-colors">Contact</Link>
            
            <div className="pt-3 flex flex-col space-y-3">
              <Link to="/login" className="w-full">
                <Button className="bg-transparent hover:bg-realestate-lightred text-realestate-red border border-realestate-red rounded-full w-full flex items-center justify-center gap-2">
                  <LogIn size={16} />
                  Login
                </Button>
              </Link>
              <Link to="/contact" className="w-full">
                <Button className="bg-realestate-red hover:bg-realestate-darkred text-white rounded-full w-full">
                  Contactez-nous
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