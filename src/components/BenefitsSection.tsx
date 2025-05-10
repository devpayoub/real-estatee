
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Maison moderne" 
            className="rounded-2xl shadow-lg w-full object-cover h-[450px]"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Nous Aidons les Gens à Trouver <br />
            <span className="text-realestate-blue">des Maisons Parfaites</span>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-[500px]">
            Nos agents expérimentés et nos outils d'analyse de marché vous aident à trouver la propriété idéale ou à vendre votre maison au meilleur prix.
          </p>
          
          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <div className="h-14 w-14 rounded-full bg-realestate-lightblue flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Accès aux Annonces Exclusives</h3>
                <p className="text-gray-600 mt-2">
                  Obtenez un accès prioritaire aux propriétés nouvellement listées avant qu'elles ne soient sur le marché. Notre réseau vous donne un avantage concurrentiel.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="h-14 w-14 rounded-full bg-realestate-lightblue flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="m7.5 4.27 9 5.15"></path>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Évaluation Immobilière Experte</h3>
                <p className="text-gray-600 mt-2">
                  Nos algorithmes avancés et nos agents expérimentés fournissent des évaluations immobilières précises pour maximiser votre investissement.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-realestate-blue hover:bg-realestate-darkblue text-white rounded-full px-8">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
