
import { Button } from "@/components/ui/button";

const StatisticsSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Pourquoi faire affaire avec nous</h2>
        <p className="text-xl mb-16 italic text-gray-200">Des résultats qui parlent d'eux-mêmes</p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-realestate-red">27</div>
            <div className="text-lg font-semibold">ANNÉES D'EXPÉRIENCE</div>
            <div className="text-sm opacity-75">CUMULÉES</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-realestate-blue">50M$</div>
            <div className="text-lg font-semibold">CHIFFRE D'AFFAIRES</div>
            <div className="text-sm opacity-75">TRANSACTIONS RÉALISÉES</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-realestate-red">1369</div>
            <div className="text-lg font-semibold">CLIENTS SATISFAITS</div>
            <div className="text-sm opacity-75">EN 2023</div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-8">
            Notre expertise du marché immobilier canadien, combinée à une approche personnalisée 
            et un service client exceptionnel, nous permet d'obtenir des résultats qui dépassent 
            constamment les attentes de nos clients.
          </p>
          <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
            Découvrir Notre Approche
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
