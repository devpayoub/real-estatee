
import { Button } from "@/components/ui/button";

const FeaturedPropertiesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Propriétés <span className="italic font-light">En Vedette</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de propriétés exceptionnelles, choisies pour leur qualité, 
            leur emplacement et leur potentiel d'investissement.
          </p>
        </div>

        {/* Featured Property with Background */}
        <div className="relative mb-16 rounded-xl overflow-hidden shadow-2xl">
          <div 
            className="h-96 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Villa Exclusive Toronto</h3>
                <p className="text-xl mb-4">Architecture moderne • 4 chambres • 850,000$</p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-realestate-red hover:bg-realestate-darkred text-white">
                    Visiter Virtuellement
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Plus de Détails
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
