
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-6 md:px-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/public/lovable-uploads/4002b8f5-a08d-408c-af9e-4f28f584b8ca.png" alt="Ozalams Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl ml-2">OZALAMS</span>
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            We help you find your dream home that suits your budget and preferences. Connect with the best agents in your area.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-600 hover:text-realestate-blue transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-realestate-blue transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-realestate-blue transition-colors">Our Services</Link></li>
            <li><Link to="/facilities" className="text-gray-600 hover:text-realestate-blue transition-colors">Facilities</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-realestate-blue transition-colors">Blog & News</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-realestate-blue transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-realestate-blue" />
              <span className="text-gray-600">123 Main Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-realestate-blue" />
              <span className="text-gray-600">+123 456 7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-realestate-blue" />
              <span className="text-gray-600">info@ozalams.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">House Updates</h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our newsletter for the latest property updates.
          </p>
          <div className="flex flex-col gap-3">
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="rounded-full border-gray-300 focus:border-realestate-blue"
            />
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center">
          <Copyright size={16} className="mr-1" />
          <p>2025 Ozalams Real Estate. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-realestate-blue transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-realestate-blue transition-colors">Privacy</Link>
          <Link to="/cookies" className="hover:text-realestate-blue transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
