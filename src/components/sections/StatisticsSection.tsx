
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, MapPin, Clock, Shield } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "27",
      unit: "ANS",
      label: "D'EXPÉRIENCE CUMULÉE",
      description: "Une expertise forgée par des milliers de transactions"
    },
    {
      icon: TrendingUp,
      number: "50M",
      unit: "$",
      label: "CHIFFRE D'AFFAIRES",
      description: "En transactions immobilières réalisées"
    },
    {
      icon: Users,
      number: "1369",
      unit: "",
      label: "CLIENTS SATISFAITS",
      description: "Qui nous font confiance année après année"
    },
    {
      icon: Award,
      number: "98",
      unit: "%",
      label: "TAUX DE SATISFACTION",
      description: "Selon nos derniers sondages clients"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "Certification Excellence",
      description: "Certifié par l'OACIQ et reconnu par l'industrie"
    },
    {
      icon: MapPin,
      title: "Couverture Nationale",
      description: "Présent dans toutes les grandes villes du Canada"
    },
    {
      icon: Award,
      title: "Prix d'Excellence",
      description: "Récompensé pour notre service client exceptionnel"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-realestate-blue/90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-realestate-red/50 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-realestate-blue/40 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-white font-semibold">PERFORMANCES & RÉSULTATS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Des Chiffres qui
            <br />
            <span className="bg-gradient-to-r from-realestate-red to-yellow-400 bg-clip-text text-transparent">
              Parlent d'Eux-Mêmes
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Notre succès se mesure à travers la satisfaction de nos clients et l'excellence de nos résultats
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-realestate-red to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {stat.number}
                    </span>
                    <span className="text-xl font-bold text-realestate-red">
                      {stat.unit}
                    </span>
                  </div>
                </div>
                
                {/* Label */}
                <div className="mb-3">
                  <h3 className="text-sm font-bold text-white/90 tracking-wider">
                    {stat.label}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-realestate-red/10 to-yellow-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Nos Distinctions</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{achievement.title}</h4>
                      <p className="text-white/80 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Notre Engagement</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Notre expertise du marché immobilier canadien, combinée à une approche personnalisée 
              et un service client exceptionnel, nous permet d'obtenir des résultats qui dépassent 
              constamment les attentes de nos clients.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-realestate-red rounded-full"></div>
                <span className="text-white/90">Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white/90">Transparence totale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-realestate-blue rounded-full"></div>
                <span className="text-white/90">Résultats garantis</span>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-realestate-red to-yellow-400 hover:from-realestate-darkred hover:to-yellow-500 text-white px-8 py-4 rounded-full font-semibold w-full">
              Découvrir Notre Approche
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
