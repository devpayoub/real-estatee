
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Users, ArrowRight, Star, CheckCircle } from "lucide-react";

const ServicesCardsSection = () => {
  const services = [
    {
      icon: Home,
      title: "ACHAT IMMOBILIER",
      subtitle: "Trouvez votre chez-vous",
      description: "Découvrez des propriétés exceptionnelles avec notre expertise du marché canadien et notre réseau exclusif.",
      features: ["Recherche personnalisée", "Négociation experte", "Accompagnement complet"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: TrendingUp,
      title: "VENTE IMMOBILIÈRE",
      subtitle: "Maximisez votre investissement",
      description: "Vendez au meilleur prix grâce à notre stratégie marketing innovante et notre expertise en évaluation.",
      features: ["Évaluation précise", "Marketing digital", "Vente rapide"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Users,
      title: "CONSULTATION",
      subtitle: "Expertise sur mesure",
      description: "Bénéficiez de conseils personnalisés pour optimiser vos investissements immobiliers au Canada.",
      features: ["Analyse de marché", "Stratégie d'investissement", "Conseils juridiques"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #003DA5 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #e4002b 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-realestate-blue" />
            <span className="text-realestate-blue font-semibold text-sm">SERVICES PREMIUM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nos
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Expertises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un accompagnement complet pour tous vos projets immobiliers au Canada
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${service.image}')`
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-80`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Number */}
                  <div className="absolute top-6 right-6">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button className={`w-full ${service.bgColor} hover:opacity-90 text-white rounded-full py-3 group-hover:shadow-lg transition-all`}>
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-realestate-blue to-realestate-red rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre projet ?</h3>
            <p className="text-white/90 mb-6">Contactez-nous pour une consultation gratuite et personnalisée</p>
            <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Consultation Gratuite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
