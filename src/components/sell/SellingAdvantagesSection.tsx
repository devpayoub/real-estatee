
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, DollarSign } from "lucide-react";

const SellingAdvantagesSection = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Commission Compétitive",
      description: "Structure de commission transparente et compétitive. Pas de frais cachés, tout est inclus dans notre service complet."
    },
    {
      icon: Clock,
      title: "Disponibilité 7j/7",
      description: "Notre équipe est disponible tous les jours pour répondre aux questions des acheteurs potentiels et organiser les visites."
    },
    {
      icon: Shield,
      title: "Garantie de Service",
      description: "Si vous n'êtes pas satisfait de notre service dans les 30 premiers jours, nous vous remboursons intégralement."
    },
    {
      icon: Award,
      title: "Experts Certifiés",
      description: "Tous nos agents sont certifiés et spécialisés dans le marché immobilier canadien avec une moyenne de 8 ans d'expérience."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-orange-600/10 text-orange-600">
            <Award className="w-4 h-4 mr-2" />
            AVANTAGES EXCLUSIFS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi Nous Choisir
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}Pour Vendre ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages uniques qui font la différence pour maximiser la valeur de votre bien
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop" 
              alt="Équipe d'experts immobiliers" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-6">Une Équipe d'Experts à Votre Service</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre équipe multidisciplinaire comprend des agents immobiliers certifiés, 
              des photographes professionnels, des spécialistes marketing digital, 
              et des conseillers juridiques spécialisés en droit immobilier canadien.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Chaque membre de notre équipe travaille en synergie pour que votre vente 
              se déroule dans les meilleures conditions. Du staging de votre propriété 
              à la signature finale, nous gérons chaque détail.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">500+</p>
                <p className="text-sm text-gray-600">Ventes réalisées</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">24j</p>
                <p className="text-sm text-gray-600">Délai moyen de vente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
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
