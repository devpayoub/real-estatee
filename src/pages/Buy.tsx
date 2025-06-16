
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  Clock, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  FileText, 
  Users, 
  Star,
  Home,
  DollarSign,
  Award,
  ArrowRight,
  MapPin,
  Percent,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Buy = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

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

  const canadianBanks = [
    { name: "RBC Banque Royale", logo: "🏛️", rate: "5.25%" },
    { name: "TD Canada Trust", logo: "🏦", rate: "5.35%" },
    { name: "Banque Scotia", logo: "🏪", rate: "5.30%" },
    { name: "BMO Banque de Montréal", logo: "🏢", rate: "5.28%" },
    { name: "CIBC", logo: "🏛️", rate: "5.40%" },
    { name: "Desjardins", logo: "🏦", rate: "5.20%" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-realestate-blue via-realestate-blue/90 to-realestate-red overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
                  <Home className="w-4 h-4 mr-2" />
                  ACHAT IMMOBILIER AU CANADA
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Achetez Votre
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Maison de Rêve
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  L'achat d'une maison est une étape importante qui nécessite souvent un financement adapté. 
                  Grâce à nos <strong>partenariats avec des institutions financières canadiennes réputées</strong>, 
                  nous serons là pour vous accompagner et vous faciliter l'accès à votre propriété dans les meilleures conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-realestate-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                      <Calculator className="mr-2 h-5 w-5" />
                      Simulation Gratuite
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold">
                      Voir les Propriétés
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-delay="200">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white mb-6">Avantages Exclusifs Canada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">Taux hypothécaires compétitifs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">Admissibilité SCHL disponible</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">Crédit d'impôt pour acheteurs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Mortgage Calculator */}
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

        {/* Canadian Banking Partners */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <Badge className="mb-4 px-4 py-2 bg-realestate-red/10 text-realestate-red">
                <Building2 className="w-4 h-4 mr-2" />
                PARTENAIRES FINANCIERS CANADIENS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Partenaires
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Bancaires
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accédez aux meilleures conditions hypothécaires grâce à nos partenariats avec les grandes institutions financières canadiennes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {canadianBanks.map((bank, index) => (
                <Card key={bank.name} className="p-6 hover:shadow-xl transition-all border-none shadow-lg" data-aos="fade-up" data-aos-delay={100 * index}>
                  <CardContent className="text-center">
                    <div className="text-4xl mb-4">{bank.logo}</div>
                    <h3 className="text-lg font-bold mb-2">{bank.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Percent className="w-4 h-4 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">{bank.rate}</span>
                    </div>
                    <p className="text-sm text-gray-600">Taux préférentiel négocié</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Solutions Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <Badge className="mb-4 px-4 py-2 bg-realestate-blue/10 text-realestate-blue">
                SOLUTIONS DE FINANCEMENT CANADIENNES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Accès à des Offres de
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Financement Privilégiées
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos partenaires financiers proposent des solutions sur mesure pour réaliser votre projet immobilier canadien
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Taux Compétitifs */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Taux Hypothécaires Compétitifs</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bénéficiez de taux fixes ou variables négociés grâce à notre réseau de partenaires financiers canadiens.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Taux fixes de 5.25% à 5.40%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Taux variables disponibles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Négociés par notre réseau</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Durées Flexibles */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Durées d'Amortissement Flexibles</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Choisissez la durée qui correspond à votre situation financière et à vos objectifs au Canada.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">De 25 à 30 ans d'amortissement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Adaptées à votre budget</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Remboursement anticipé possible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pas de Frais */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pas de Frais de Dossier</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Économisez sur les frais administratifs grâce à nos accords avec nos partenaires canadiens.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Frais de dossier offerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Économies substantielles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Plus de budget pour votre projet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Buy;
