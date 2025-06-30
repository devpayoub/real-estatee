
import { DisplayProperty } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Eye, FileText, Shield, Users } from "lucide-react";
import ServiceFrom from "./ServiceForm";

interface RentSectionProps {
  properties: DisplayProperty[];
}

const RentSection = ({ properties }: RentSectionProps) => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Vendre au juste prix",
      description: "Le courtier immobilier vous aide à établir le juste prix de votre propriété. Un prix trop élevé pourrait faire fuir certains acheteurs et vous faire perdre un temps précieux. D'autre part, un prix trop bas n'est pas avantageux pour vous."
    },
    {
      icon: Eye,
      title: "Maximiser la visibilité et l'achalandage",
      description: "Le courtier immobilier s'y connaît en mise en marché de propriété. Qui plus est, le courtier immobilier dispose d'une banque d'acheteurs sérieux et préqualifiés qui n'attendent qu'une chose : trouver une propriété comme la vôtre!"
    },
    {
      icon: FileText,
      title: "Être accompagné à chaque étape",
      description: "Le courtier immobilier vous accompagne à toutes les étapes de la transaction immobilière, de la mise en marché à l'acte de vente, en passant par la coordination des visites et toute la paperasse importante. On serait fou de s'en passer !"
    },
    {
      icon: Users,
      title: "Profiter d'un réseau clé en main",
      description: "La réussite de votre transaction immobilière repose sur l'expertise de plusieurs professionnels : représentant hypothécaire, inspecteur en bâtiment, notaire, etc. Votre courtier immobilier saura vous recommander les meilleures personnes."
    },
    {
      icon: Shield,
      title: "Profiter d'une sécurité et de protections",
      description: "Une transaction immobilière est l'une des décisions les plus importantes d'une vie. C'est pourquoi l'Organisme d'autoréglementation du courtage immobilier du Québec (OACIQ) s'assure que tous les courtiers immobiliers respectent la loi sur le courtage."
    },
    {
      icon: Clock,
      title: "Économiser temps et énergie",
      description: "Vendre sa propriété est une expérience qui peut être accompagnée de beaucoup de stress. Confiez la gestion de la transaction à un courtier immobilier vous permet de ralentir, et de vous concentrer sur votre déménagement."
    }
  ];
    return (
    <>
<section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-red-600/10 text-red-600">
            <Users className="w-4 h-4 mr-2" />
            AVANTAGES DU COURTIER
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vendre sa propriété avec un
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {" "}courtier immobilier pour
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages de faire appel à un professionnel pour vendre votre propriété
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg h-full" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Protection OACIQ</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              En cas de faute, l'Organisme d'autoréglementation du courtage immobilier du Québec (OACIQ) 
              est doté d'un comité de discipline efficace pour protéger vos intérêts et garantir 
              le respect des normes professionnelles les plus strictes.
            </p>
          </div>
        </div>
      </div>
    </section>


    
        {/* Contact Form Section */}

        <ServiceFrom />


    </>
  );
};

export default RentSection;
