
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BuyCallToAction = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-realestate-blue to-realestate-red">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à Concrétiser Votre Projet au Canada ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour une simulation gratuite et découvrez comment nous pouvons vous aider à acquérir votre propriété canadienne.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
              <Calculator className="mr-2 h-5 w-5" />
              Simulation Gratuite
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold">
              Voir les Propriétés
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuyCallToAction;
