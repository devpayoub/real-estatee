
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CalculeCallToAction = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
<div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
        <div className="mb-6" data-aos="zoom-in" data-aos-delay="100">
          <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-4 animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à Calculer Votre Financement ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour une simulation gratuite et découvrez comment nous pouvons vous aider à financer votre propriété dans les meilleures conditions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <Link to="/contact">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all">
              <Calculator className="mr-2 h-5 w-5" />
              Simulation Gratuite
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all">
              Voir les Propriétés
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculeCallToAction;
