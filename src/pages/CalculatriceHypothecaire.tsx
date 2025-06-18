
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import MortgageCalculator from "@/components/buy/MortgageCalculator";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

const CalculatriceHypothecaire = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Badge className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              <Calculator className="w-4 h-4 mr-2" />
              CALCULATRICE HYPOTHÉCAIRE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculez Vos
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}Paiements Hypothécaires
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Utilisez notre calculateur avancé pour estimer vos paiements mensuels et planifier votre financement immobilier
            </p>
          </div>
        </section>

        {/* Calculator Component */}
        <MortgageCalculator />
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatriceHypothecaire;
