import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Eye, Heart } from "lucide-react";

const FeaturedPropertiesSection = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Villa Moderne Toronto",
      location: "Toronto, Ontario",
      price: "850,000$",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Condo Luxueux Vancouver",
      location: "Vancouver, BC",
      price: "3,200$/mois",
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Maison Familiale Calgary",
      location: "Calgary, Alberta",
      price: "720,000$",
      bedrooms: 5,
      bathrooms: 4,
      area: 320,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-realestate-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-realestate-red/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-realestate-blue/10 rounded-full mb-6">
            <span className="text-realestate-blue font-semibold text-sm">PROPRIÉTÉS EXCLUSIVES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
            Découvrez l'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une sélection minutieuse de propriétés d'exception qui redéfinissent le luxe et le confort au Canada
          </p>
        </div>

        {/* Featured Property Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Property */}
          <div className="lg:col-span-2 group">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${featuredProperties[0].image}')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Property Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-realestate-red text-white text-sm font-semibold rounded-full">
                  COUP DE CŒUR
                </span>
              </div>
              
              {/* Property Actions */}
              <div className="absolute top-6 right-6 flex gap-2">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Property Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-sm">{featuredProperties[0].location}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{featuredProperties[0].title}</h3>
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm">{featuredProperties[0].bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm">{featuredProperties[0].bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm">{featuredProperties[0].area}m²</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">{featuredProperties[0].price}</span>
                  <Button className="bg-white text-realestate-blue hover:bg-gray-100 rounded-full px-6">
                    Visiter
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Properties */}
          <div className="space-y-6">
            {featuredProperties.slice(1).map((property) => (
              <div key={property.id} className="group">
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${property.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-3 h-3 text-white/80" />
                      <span className="text-white/80 text-xs">{property.location}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{property.title}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Bed className="w-3 h-3 text-white/80" />
                          <span className="text-white/80 text-xs">{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-3 h-3 text-white/80" />
                          <span className="text-white/80 text-xs">{property.bathrooms}</span>
                        </div>
                      </div>
                      <span className="text-white font-bold">{property.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            Voir Toutes les Propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
