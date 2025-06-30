import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Home, TrendingUp, PieChart } from "lucide-react";
import { useEffect, useState } from "react";

const CalculatriceHypothecaire = () => {
  const [mortgageData, setMortgageData] = useState({
    propertyPrice: "",
    downPayment: "",
    interestRate: "",
    amortization: "",
    paymentFrequency: ""
  });

  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const calculateMortgage = () => {
    const price = parseFloat(mortgageData.propertyPrice.replace(/[^\d.]/g, ''));
    const down = parseFloat(mortgageData.downPayment.replace(/[^\d.]/g, ''));
    const rate = parseFloat(mortgageData.interestRate) / 100 / 12;
    const years = parseInt(mortgageData.amortization);

    if (!price || !down || !rate || !years) return;

    const principal = price - down;
    const numberOfPayments = years * 12;

    const monthlyPayment = principal * (rate * Math.pow(1 + rate, numberOfPayments)) / (Math.pow(1 + rate, numberOfPayments) - 1);
    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;

    setResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    });
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
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30" data-aos="fade-up">
              <Calculator className="w-4 h-4 mr-2" />
              CALCULATRICE HYPOTHÉCAIRE
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Calculez Vos
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Paiements Hypothécaires
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Estimez facilement vos paiements mensuels et planifiez votre budget immobilier 
              avec notre calculatrice hypothécaire complète.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div data-aos="fade-right">
                <Card className="shadow-2xl border-0">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                      <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                        Calculatrice
                      </span>
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="propertyPrice" className="text-realestate-blue font-semibold">
                          Prix de la propriété
                        </Label>
                        <Input
                          id="propertyPrice"
                          placeholder="ex: 400,000"
                          value={mortgageData.propertyPrice}
                          onChange={(e) => setMortgageData({ ...mortgageData, propertyPrice: e.target.value })}
                          className="border-gray-300 focus:border-realestate-blue"
                        />
                      </div>

                      <div>
                        <Label htmlFor="downPayment" className="text-realestate-blue font-semibold">
                          Mise de fonds
                        </Label>
                        <Input
                          id="downPayment"
                          placeholder="ex: 80,000"
                          value={mortgageData.downPayment}
                          onChange={(e) => setMortgageData({ ...mortgageData, downPayment: e.target.value })}
                          className="border-gray-300 focus:border-realestate-blue"
                        />
                      </div>

                      <div>
                        <Label htmlFor="interestRate" className="text-realestate-blue font-semibold">
                          Taux d'intérêt annuel (%)
                        </Label>
                        <Input
                          id="interestRate"
                          placeholder="ex: 5.25"
                          value={mortgageData.interestRate}
                          onChange={(e) => setMortgageData({ ...mortgageData, interestRate: e.target.value })}
                          className="border-gray-300 focus:border-realestate-blue"
                        />
                      </div>

                      <div>
                        <Label htmlFor="amortization" className="text-realestate-blue font-semibold">
                          Période d'amortissement
                        </Label>
                        <Select
                          value={mortgageData.amortization}
                          onValueChange={(value) => setMortgageData({ ...mortgageData, amortization: value })}
                        >
                          <SelectTrigger className="w-full border-gray-300 focus:border-realestate-blue">
                            <SelectValue placeholder="Choisir la période" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 ans</SelectItem>
                            <SelectItem value="20">20 ans</SelectItem>
                            <SelectItem value="25">25 ans</SelectItem>
                            <SelectItem value="30">30 ans</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="paymentFrequency" className="text-realestate-blue font-semibold">
                          Fréquence de paiement
                        </Label>
                        <Select
                          value={mortgageData.paymentFrequency}
                          onValueChange={(value) => setMortgageData({ ...mortgageData, paymentFrequency: value })}
                        >
                          <SelectTrigger className="w-full border-gray-300 focus:border-realestate-blue">
                            <SelectValue placeholder="Fréquence" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Mensuel</SelectItem>
                            <SelectItem value="biweekly">Aux 2 semaines</SelectItem>
                            <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        onClick={calculateMortgage}
                        className="w-full bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white py-4 text-base sm:text-lg font-semibold"
                      >
                        <Calculator className="mr-2 h-5 w-5" />
                        Calculer les Paiements
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Panel */}
              <div data-aos="fade-left" data-aos-delay="200">
                {result ? (
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-realestate-lightblue to-realestate-lightred border-realestate-blue/20">
                      <CardContent className="p-6 sm:p-8">
                        <div className="text-center">
                          <Home className="w-12 h-12 text-realestate-blue mx-auto mb-4" />
                          <h3 className="text-xl sm:text-2xl font-bold text-realestate-blue mb-4 text-center">
                            Résultats de votre hypothèque
                          </h3>

                          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md text-center">
                              <h4 className="text-base sm:text-lg font-semibold text-realestate-blue mb-2">
                                Paiement mensuel
                              </h4>
                              <p className="text-2xl sm:text-3xl font-bold text-realestate-red">
                                {formatCurrency(result.monthlyPayment.toString())}
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md text-center">
                              <h4 className="text-base sm:text-lg font-semibold text-realestate-blue mb-2">
                                Total des intérêts
                              </h4>
                              <p className="text-xl sm:text-2xl font-bold text-gray-700">
                                {formatCurrency(result.totalInterest.toString())}
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md text-center">
                              <h4 className="text-base sm:text-lg font-semibold text-realestate-blue mb-2">
                                Montant total payé
                              </h4>
                              <p className="text-xl sm:text-2xl font-bold text-gray-700">
                                {formatCurrency(result.totalAmount.toString())}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card className="border-realestate-blue/20">
                    <CardContent className="p-6 sm:p-8">
                      <div className="text-center">
                        <PieChart className="w-16 h-16 text-realestate-blue mx-auto mb-6" />
                        <h3 className="text-xl sm:text-2xl font-bold text-realestate-blue mb-4 text-center">
                          Planifiez votre budget
                        </h3>
                        <p className="text-gray-600 mb-6 text-base sm:text-lg">
                          Remplissez le formulaire pour obtenir une estimation précise 
                          de vos paiements hypothécaires mensuels.
                        </p>

                        <div className="space-y-4 text-left max-w-md mx-auto">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-realestate-red" />
                            <span className="text-sm">Calcul basé sur les taux actuels</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Home className="w-5 h-5 text-realestate-red" />
                            <span className="text-sm">Estimation pour tous types de propriétés</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calculator className="w-5 h-5 text-realestate-red" />
                            <span className="text-sm">Résultats instantanés et précis</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatriceHypothecaire;
