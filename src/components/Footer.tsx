
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-6 md:px-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/public/lovable-uploads/4002b8f5-a08d-408c-af9e-4f28f584b8ca.png" alt="RentHome Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl ml-2">RENTHOME</span>
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            We help you find your dream home that suits your budget and preferences. Connect with the best agents in your area.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-600 hover:text-realestate-blue transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-realestate-blue transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-realestate-blue transition-colors">Our Services</Link></li>
            <li><Link to="/properties" className="text-gray-600 hover:text-realestate-blue transition-colors">Properties</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-realestate-blue transition-colors">Blog & News</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-realestate-blue transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
          <ul className="space-y-3">
            <li><Link to="/faq" className="text-gray-600 hover:text-realestate-blue transition-colors">FAQ</Link></li>
            <li><Link to="/terms" className="text-gray-600 hover:text-realestate-blue transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-gray-600 hover:text-realestate-blue transition-colors">Privacy Policy</Link></li>
            <li><Link to="/support" className="text-gray-600 hover:text-realestate-blue transition-colors">Support Center</Link></li>
            <li><Link to="/career" className="text-gray-600 hover:text-realestate-blue transition-colors">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
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
          <div className="mt-6">
            <h4 className="font-medium mb-2">Contact</h4>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +012 345 6789
            </p>
            <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@renthome.com
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© 2025 RentHome. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
