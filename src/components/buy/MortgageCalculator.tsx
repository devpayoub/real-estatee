
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate monthly mortgage payment
  useEffect(() => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = amortization * 12;
    
    if (monthlyRate > 0) {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(principal / numberOfPayments);
    }
  }, [loanAmount, downPayment, interestRate, amortization]);

  const formatCanadianCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-realestate-blue/10 text-realestate-blue">
            <Calculator className="w-4 h-4 mr-2" />
            CALCULATEUR HYPOTHÉCAIRE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculez Vos
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Paiements Hypothécaires
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilisez notre calculateur pour estimer vos paiements mensuels selon les conditions du marché canadien
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 shadow-xl border-none" data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-2xl mb-6">Paramètres du Prêt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="loan-amount">Montant du Prêt</Label>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">{formatCanadianCurrency(loanAmount)}</p>
              </div>
              
              <div>
                <Label htmlFor="down-payment">Mise de Fonds</Label>
                <Input
                  id="down-payment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formatCanadianCurrency(downPayment)} ({((downPayment / loanAmount) * 100).toFixed(1)}%)
                </p>
              </div>
              
              <div>
                <Label htmlFor="interest-rate">Taux d'Intérêt (%)</Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="amortization">Amortissement (années)</Label>
                <Input
                  id="amortization"
                  type="number"
                  value={amortization}
                  onChange={(e) => setAmortization(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-xl border-none bg-gradient-to-br from-realestate-blue to-realestate-red text-white" data-aos="fade-left">
            <CardHeader>
              <CardTitle className="text-2xl mb-6">Résultats du Calcul</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  {formatCanadianCurrency(monthlyPayment)}
                </div>
                <p className="text-xl opacity-90">Paiement Mensuel</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">{formatCanadianCurrency(loanAmount - downPayment)}</div>
                  <p className="text-sm opacity-80">Montant Financé</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">{formatCanadianCurrency(monthlyPayment * 12 * amortization)}</div>
                  <p className="text-sm opacity-80">Coût Total</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/contact">
                  <Button className="w-full bg-white text-realestate-blue hover:bg-gray-100">
                    Obtenir une Pré-Approbation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
