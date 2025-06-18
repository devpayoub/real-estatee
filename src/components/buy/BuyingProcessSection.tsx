
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Key, Home } from "lucide-react";

const BuyingProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Recherche et Sélection",
      description: "Analyse de vos besoins et recherche ciblée dans nos bases de données exclusives. Visites virtuelles et sur site selon vos préférences."
    },
    {
      icon: FileText,
      title: "Négociation et Offre",
      description: "Négociation professionnelle du prix et des conditions. Rédaction et présentation de votre offre d'achat selon les standards canadiens."
    },
    {
      icon: Key,
      title: "Financement et Légal",
      description: "Montage du dossier de financement avec nos partenaires bancaires. Gestion complète des aspects juridiques et notariaux."
    },
    {
      icon: Home,
      title: "Remise des Clés",
      description: "Inspection finale, signature définitive et remise des clés. Accompagnement post-achat pour toutes vos démarches administratives."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-realestate-blue/10 text-realestate-blue">
            <FileText className="w-4 h-4 mr-2" />
            PROCESSUS D'ACHAT
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Processus
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Simplifié
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes claires, nous vous accompagnons de la recherche à la remise des clés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-none shadow-lg relative" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center text-white font-bold z-10">
                {index + 1}
              </div>
              <CardContent className="p-8 text-center pt-12">
                <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-red rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingProcessSection;
