
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full pt-28 pb-16 px-6 md:px-12 gap-10">
      <div className="flex-1 pt-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Trouvez Votre Maison <br />
          Parfaite avec <span className="text-realestate-red">Kais Khayati</span>
        </h1>
        <p className="mt-5 text-gray-600 max-w-[500px]">
          Nous vous aidons à trouver votre maison de rêve selon votre budget. Connectez-vous avec les meilleurs agents pour y parvenir rapidement et facilement.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="bg-realestate-lightred p-2 rounded-full">
              <Star className="text-realestate-red h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Partenaire de Confiance</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-realestate-lightred p-2 rounded-full">
              <CheckCircle className="text-realestate-red h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Annonces Vérifiées</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-realestate-lightred p-2 rounded-full">
              <Headphones className="text-realestate-red h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Support 24/7</span>
          </div>
        </div>
        
        <div className="mt-10 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 p-6 rounded-xl shadow-lg max-w-[550px] border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="bg-realestate-lightblue p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="text-sm font-semibold text-realestate-blue">Localisation</span>
              <span className="text-xs text-gray-500 mt-1 text-center">Trouvez dans votre quartier</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="bg-realestate-lightred p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-red">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="text-sm font-semibold text-realestate-red">Propriétés</span>
              <span className="text-xs text-gray-500 mt-1 text-center">Options variées</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-r from-realestate-lightblue to-realestate-lightred p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-black">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-800">Rapide</span>
              <span className="text-xs text-gray-500 mt-1 text-center">Délais optimisés</span>
            </div>
          </div>
          
          <div className="mt-6 flex">
            <Button className="w-full bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white">
              Commencer Maintenant
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative mt-10 lg:mt-0">
        <div className="relative mx-auto max-w-[520px]">
          <div className="absolute -top-4 -right-4 bg-realestate-red text-white py-3 px-5 rounded-lg z-10 shadow-lg">
            <span className="text-xl font-bold">Offres Spéciales</span>
          </div>
          <div className="bg-white rounded-3xl p-3 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Maison de luxe" 
              className="w-full rounded-2xl h-[420px] object-cover"
            />
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Villa Moderne</h3>
                <span className="font-bold text-realestate-red">Exclusif</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-realestate-lightred rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-red">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500">Paris, France</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-realestate-lightred rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-red">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">4 Chambres</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="bg-realestate-lightred rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-red">
                        <path d="M22 2H2v20h20V2Z"></path>
                        <path d="M22 8H2"></path>
                        <path d="M8 2v20"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">3 Salles de bain</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="bg-realestate-lightred rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-red">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">230 m²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating feature cards */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md z-10">
            <div className="flex items-center gap-2">
              <div className="bg-realestate-lightred p-2 rounded-full">
                <CheckCircle className="text-realestate-red h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Emplacement Premium</span>
            </div>
          </div>

          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-md z-10">
            <div className="flex items-center gap-2">
              <div className="bg-realestate-lightred p-2 rounded-full">
                <Star className="text-realestate-red h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Très Bien Noté</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
