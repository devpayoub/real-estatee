
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6 inline-block p-6 rounded-full bg-realestate-lightblue">
          <span className="text-9xl font-bold text-realestate-blue">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-realestate-black">Page Non Trouvée</h1>
        <p className="text-xl text-gray-600 mb-8">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/">
          <Button variant="blue" size="lg" className="rounded-full">
            <Home className="mr-2" />
            Retourner à l'Accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
