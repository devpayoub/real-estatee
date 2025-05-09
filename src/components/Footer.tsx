
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 md:px-12 border-t">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="md:w-1/4">
          <Link to="/" className="flex items-center">
            <img src="/public/lovable-uploads/4002b8f5-a08d-408c-af9e-4f28f584b8ca.png" alt="RentHome Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl ml-2">RENTHOME</span>
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus felis eget ornare lacinia. In varius tortor vel risus tincidunt pulvinar.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-realestate-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-realestate-blue transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-realestate-blue transition-colors">About</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-realestate-blue transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-realestate-blue transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-gray-600">123 Street, New York, USA</span>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-gray-600">+012 345 6789</span>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="text-gray-600">info@example.com</span>
            </li>
          </ul>
        </div>
        
        <div className="md:w-1/4">
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-600 text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 rounded-l-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-realestate-blue focus:border-transparent"
            />
            <button className="bg-realestate-blue text-white py-2 px-4 rounded-r-lg text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2023 RentHome, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
