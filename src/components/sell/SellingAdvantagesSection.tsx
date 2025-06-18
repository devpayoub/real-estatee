
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

const SellingAdvantagesSection = () => {
  const stats = [
    {
      number: "15 jours",
      label: "Délai moyen de vente",
      description: "Grâce à notre réseau et expertise"
    },
    {
      number: "98%",
      label: "Taux de satisfaction",
      description: "De nos clients vendeurs"
    },
    {
      number: "500+",
      label: "Propriétés vendues",
      description: "Au cours de la dernière année"
    },
    {
      number: "24/7",
      label: "Support disponible",
      description: "Pour toutes vos questions"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-orange-600/10 text-orange-600">
            <Award className="w-4 h-4 mr-2" />
            NOTRE PERFORMANCE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des résultats qui
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}parlent d'eux-mêmes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise et notre réseau professionnel garantissent des résultats exceptionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop" 
              alt="Équipe de courtiers immobiliers professionnels" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-6">Une équipe de professionnels à votre service</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre équipe de courtiers immobiliers certifiés met son expertise au service de votre projet. 
              Nous travaillons en collaboration avec un réseau de professionnels de confiance pour 
              vous offrir un service complet et personnalisé.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              De l'évaluation initiale à la signature de l'acte de vente, nous gérons chaque aspect 
              de votre transaction avec professionnalisme et attention aux détails.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-red-600" />
                <span className="font-medium">Réseau de professionnels qualifiés</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <span className="font-medium">Stratégies de vente personnalisées</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="font-medium">Suivi complet de A à Z</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{stat.label}</h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingAdvantagesSection;
