
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
            <img src="/public/lovable-uploads/4e52e5c8-184b-4b0b-8aaa-f4475a33e028.png" alt="Kais Khayati Logo" className="h-16 w-auto" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            Nous vous aidons à trouver votre maison de rêve selon votre budget et vos préférences. Connectez-vous avec les meilleurs agents de votre région.
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
          <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-600 hover:text-realestate-blue transition-colors">Accueil</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-realestate-blue transition-colors">À Propos</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-realestate-blue transition-colors">Nos Services</Link></li>
            <li><Link to="/facilities" className="text-gray-600 hover:text-realestate-blue transition-colors">Installations</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-realestate-blue transition-colors">Blog & Actualités</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-realestate-blue transition-colors">Contactez-nous</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-realestate-red" />
              <span className="text-gray-600">123 Rue Principale, Montréal, QC H1A 1A1</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-realestate-red" />
              <span className="text-gray-600">+1 (514) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-realestate-red" />
              <span className="text-gray-600">info@kaiskhayati.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Mises à Jour Immobilières</h3>
          <p className="text-gray-600 text-sm mb-4">
            Abonnez-vous à notre newsletter pour les dernières nouvelles immobilières.
          </p>
          <div className="flex flex-col gap-3">
            <Input 
              type="email" 
              placeholder="Votre Email" 
              className="rounded-full border-gray-300 focus:border-realestate-blue"
            />
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full">
              S'abonner
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center">
          <Copyright size={16} className="mr-1" />
          <p>2025 Kais Khayati - Courtier Immobilier. Tous droits réservés.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-realestate-blue transition-colors">Conditions</Link>
          <Link to="/privacy" className="hover:text-realestate-blue transition-colors">Confidentialité</Link>
          <Link to="/cookies" className="hover:text-realestate-blue transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
