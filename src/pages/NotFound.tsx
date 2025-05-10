
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erreur 404: L'utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-realestate-lightblue">
      <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-lg border border-realestate-blue/10">
        <div className="mb-6 inline-block p-6 rounded-full bg-realestate-lightblue border-4 border-realestate-blue">
          <span className="text-9xl font-bold text-realestate-blue">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-realestate-black">Page Non Trouvée</h1>
        <p className="text-xl text-gray-600 mb-8">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/">
          <Button variant="blue" size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all">
            <Home className="mr-2" />
            Retourner à l'Accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
