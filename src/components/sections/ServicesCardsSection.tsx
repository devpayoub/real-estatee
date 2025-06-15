
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Search, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Achat de Propriété",
    description: "Trouvez la maison parfaite avec notre expertise du marché local et nos conseils personnalisés.",
    features: ["Évaluation gratuite", "Négociation", "Accompagnement complet"],
    link: "/services?type=buy"
  },
  {
    icon: Building,
    title: "Vente de Propriété",
    description: "Vendez votre propriété au meilleur prix avec notre stratégie marketing innovante.",
    features: ["Marketing digital", "Photos professionnelles", "Estimation précise"],
    link: "/services?type=rent"
  },
  {
    icon: Search,
    title: "Évaluation Immobilière",
    description: "Obtenez une estimation précise de la valeur de votre propriété par nos experts.",
    features: ["Analyse de marché", "Rapport détaillé", "Conseils d'amélioration"],
    link: "/contact"
  },
  {
    icon: TrendingUp,
    title: "Investissement",
    description: "Découvrez les meilleures opportunités d'investissement immobilier.",
    features: ["Analyse ROI", "Conseils stratégiques", "Suivi de portefeuille"],
    link: "/contact"
  },
  {
    icon: Shield,
    title: "Assurance & Legal",
    description: "Sécurisez vos transactions avec nos partenaires juridiques et d'assurance.",
    features: ["Vérifications légales", "Assurance propriété", "Support juridique"],
    link: "/contact"
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Bénéficiez de nos conseils d'experts pour tous vos projets immobiliers.",
    features: ["Consultation gratuite", "Stratégie personnalisée", "Suivi continu"],
    link: "/contact"
  }
];

const ServicesCardsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
            Nos Services Complets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            De l'achat à la vente, en passant par l'investissement, 
            nous vous accompagnons dans tous vos projets immobiliers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-realestate-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-realestate-red rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link}>
                  <Button className="w-full bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white rounded-full font-semibold transition-all duration-300">
                    En Savoir Plus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
