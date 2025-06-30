import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, FileText, Info } from "lucide-react";
import { useEffect, useState } from "react";

const CalculatriceDroitMutation = () => {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const calculateTransferTax = () => {
    const propertyPrice = parseFloat(price.replace(/[^\d.]/g, ''));
    if (!propertyPrice || propertyPrice <= 0) return;

    let tax = 0;
    
    // Calcul selon les tranches du Québec
    if (propertyPrice <= 50000) {
      tax = propertyPrice * 0.005; // 0.5%
    } else if (propertyPrice <= 250000) {
      tax = 250 + (propertyPrice - 50000) * 0.01; // 1%
    } else if (propertyPrice <= 500000) {
      tax = 250 + 2000 + (propertyPrice - 250000) * 0.015; // 1.5%
    } else {
      tax = 250 + 2000 + 3750 + (propertyPrice - 500000) * 0.02; // 2%
    }

    setResult(Math.round(tax));
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^\d]/g, '');
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(number) || 0);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30" data-aos="fade-up">
              <Calculator className="w-4 h-4 mr-2" />
              CALCULATRICE DROIT DE MUTATION
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Calculez les Droits
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                de Mutation
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Estimez facilement les droits de mutation (taxe de bienvenue) que vous devrez payer 
              lors de l'achat de votre propriété au Québec.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Calculator Form */}
              <div data-aos="fade-right">
                <Card className="shadow-2xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                      <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                        Calculatrice
                      </span>
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="price" className="text-realestate-blue font-semibold text-lg">
                          Prix d'achat de la propriété
                        </Label>
                        <Input
                          id="price"
                          placeholder="ex: 400,000"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="border-gray-300 focus:border-realestate-blue text-lg h-14"
                        />
                      </div>

                      <Button 
                        onClick={calculateTransferTax}
                        className="w-full bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white py-4 text-lg font-semibold"
                      >
                        <Calculator className="mr-2 h-5 w-5" />
                        Calculer les Droits
                      </Button>

                      {result !== null && (
                        <Card className="bg-gradient-to-r from-realestate-lightblue to-realestate-lightred border-realestate-blue/20" data-aos="fade-in">
                          <CardContent className="p-6">
                            <div className="text-center">
                              <DollarSign className="w-12 h-12 text-realestate-blue mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-realestate-blue mb-2">
                                Droits de mutation estimés
                              </h3>
                              <p className="text-3xl font-bold text-realestate-red">
                                {formatCurrency(result.toString())}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Information Panel */}
              <div data-aos="fade-left" data-aos-delay="200">
                <Card className="border-realestate-blue/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Info className="w-6 h-6 text-realestate-blue mr-3" />
                      <h3 className="text-2xl font-bold text-realestate-blue">
                        Comment ça fonctionne ?
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-realestate-red">
                          Tranches de calcul au Québec :
                        </h4>
                        <div className="space-y-2 text-gray-700">
                          <p>• 0 à 50 000$ : <span className="font-semibold">0,5%</span></p>
                          <p>• 50 001$ à 250 000$ : <span className="font-semibold">1,0%</span></p>
                          <p>• 250 001$ à 500 000$ : <span className="font-semibold">1,5%</span></p>
                          <p>• 500 001$ et plus : <span className="font-semibold">2,0%</span></p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-realestate-blue mb-2">
                          Important à savoir :
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Les droits sont payables lors de la signature chez le notaire</li>
                          <li>• Certaines exemptions peuvent s'appliquer</li>
                          <li>• Les premiers acheteurs peuvent bénéficier de réductions</li>
                        </ul>
                      </div>

                      <div className="bg-realestate-lightblue p-4 rounded-lg border border-realestate-blue/20">
                        <h4 className="font-semibold text-realestate-blue mb-2">
                          Besoin d'aide ?
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Notre équipe peut vous aider à comprendre tous les coûts liés à votre achat immobilier.
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-realestate-blue text-realestate-blue hover:bg-realestate-blue hover:text-white"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Consultation Gratuite
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatriceDroitMutation