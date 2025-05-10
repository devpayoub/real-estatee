
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow hover:shadow-md transition-all cursor-pointer">
    <div className="h-12 w-12 rounded-full bg-realestate-lightblue flex items-center justify-center mb-3">
      {icon}
    </div>
    <p className="font-medium text-center">{title}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Nos <span className="text-realestate-blue">Fonctionnalités</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-[600px] mx-auto">
          Découvrez toutes les caractéristiques qui distinguent nos propriétés des autres.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
            </svg>}
            title="Serrure Intelligente"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
              <path d="M18.5 12c0 3.59-2.91 6.5-6.5 6.5S5.5 15.59 5.5 12 8.41 5.5 12 5.5s6.5 2.91 6.5 6.5Z"></path>
            </svg>}
            title="Sécurité Domicile"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M2 12h10"></path>
              <path d="M9 4v16"></path>
              <path d="m3 9 3 3-3 3"></path>
              <path d="M14 8V6c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2v-2"></path>
            </svg>}
            title="Contrôle à Distance"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M17.618 5.968a8 8 0 1 0 0 12.064"></path>
              <path d="M19.979 12c-.341 1.176-.747 2.096-1.36 3.018"></path>
              <path d="M11.458 11.731A2 2 0 1 0 12 15.999"></path>
              <path d="M8.65 10.248A4 4 0 1 0 15.537 13"></path>
              <path d="M7.5 10.5c-1.667 1.167-2.5 3.833-2.5 8.5 3.879 0 6.381-.621 7.703-1.891"></path>
            </svg>}
            title="Air Intelligent"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M18 8c0 4.5-6 8-6 8s-6-3.5-6-8a6 6 0 0 1 12 0Z"></path>
              <circle cx="12" cy="8" r="2"></circle>
              <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"></path>
            </svg>}
            title="Accès Piscine"
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
              <path d="M12 7V5.5a2.5 2.5 0 0 1 5 0V7"></path>
              <path d="M3 7v2c0 6.667 7.333 10 7.333 10"></path>
              <path d="M21 7v2c0 6.667-7.333 10-7.333 10"></path>
              <path d="M12 7H3"></path>
              <path d="M12 7h9"></path>
              <path d="M12 22V7"></path>
              <path d="M10 22h4"></path>
            </svg>}
            title="Vue sur Jardin"
          />
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Maison moderne" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute right-5 top-[35%] space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-realestate-lightblue rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="text-sm">3 Chambres</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-realestate-lightblue rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M22 2H2v20h20V2Z"></path>
                  <path d="M22 8H2"></path>
                  <path d="M8 2v20"></path>
                </svg>
              </div>
              <span className="text-sm">2 Salles de Bain</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-realestate-lightblue rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
              </div>
              <span className="text-sm">140 m²</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-realestate-lightblue rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="text-sm">Paris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
