
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const CalculatriceDroitMutation = () => {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [province, setProvince] = useState('QC');
  const [mutationTax, setMutationTax] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Calculate mutation tax based on Quebec rates (simplified)
  useEffect(() => {
    let tax = 0;
    if (province === 'QC') {
      if (propertyValue <= 50000) {
        tax = propertyValue * 0.005;
      } else if (propertyValue <= 250000) {
        tax = 250 + (propertyValue - 50000) * 0.01;
      } else {
        tax = 250 + 2000 + (propertyValue - 250000) * 0.015;
      }
    }
    setMutationTax(tax);
  }, [propertyValue, province]);

  const formatCanadianCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Badge className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              <Calculator className="w-4 h-4 mr-2" />
              CALCULATRICE DROIT DE MUTATION
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculez Vos
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}Droits de Mutation
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Estimez précisément les droits de mutation à payer lors de l'achat de votre propriété au Canada
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-xl border-none" data-aos="fade-right">
                <CardHeader>
                  <CardTitle className="text-2xl">Paramètres de Calcul</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="property-value">Valeur de la Propriété</Label>
                    <Input
                      id="property-value"
                      type="number"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(Number(e.target.value))}
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">{formatCanadianCurrency(propertyValue)}</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="province">Province</Label>
                    <select
                      id="province"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="QC">Québec</option>
                      <option value="ON">Ontario</option>
                      <option value="BC">Colombie-Britannique</option>
                      <option value="AB">Alberta</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-none bg-gradient-to-br from-purple-600 to-pink-600 text-white" data-aos="fade-left">
                <CardHeader>
                  <CardTitle className="text-2xl">Résultat du Calcul</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">
                      {formatCanadianCurrency(mutationTax)}
                    </div>
                    <p className="text-xl opacity-90">Droits de Mutation</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Détails du Calcul (Québec)</h3>
                    <div className="text-sm space-y-1">
                      <p>0$ à 50 000$ : 0,5%</p>
                      <p>50 001$ à 250 000$ : 1,0%</p>
                      <p>250 001$ et plus : 1,5%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-lg font-semibold">
                      Coût Total Estimé: {formatCanadianCurrency(propertyValue + mutationTax)}
                    </div>
                    <p className="text-sm opacity-80">Propriété + Droits de mutation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatriceDroitMutation;
