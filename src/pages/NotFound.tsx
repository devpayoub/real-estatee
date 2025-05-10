
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-realestate-red">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page non trouvée</p>
        <a href="/" className="text-realestate-red hover:text-realestate-darkred underline">
          Retourner à l'Accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
