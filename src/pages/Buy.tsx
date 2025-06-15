import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Buy = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

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
                  ACHAT IMMOBILIER
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
                  Grâce à nos <strong>partenariats avec des institutions financières réputées</strong>, 
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
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Avantages Exclusifs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Taux d'intérêt compétitifs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Pas de frais de dossier</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Accompagnement personnalisé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Étude préalable accélérée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Solutions Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <Badge className="mb-4 px-4 py-2 bg-realestate-blue/10 text-realestate-blue">
                SOLUTIONS DE FINANCEMENT
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Accès à des Offres de
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Financement Privilégiées
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos partenaires financiers proposent des solutions sur mesure pour réaliser votre projet immobilier
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Taux Compétitifs */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Taux d'Intérêt Compétitifs</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bénéficiez de taux fixes ou variables négociés grâce à notre réseau de partenaires financiers.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Taux fixes ou variables</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Négociés par notre réseau</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Conditions préférentielles</span>
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
                  <h3 className="text-2xl font-bold mb-4">Durées de Prêt Flexibles</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Choisissez la durée qui correspond à votre situation financière et à vos objectifs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">De 25 à 30 ans</span>
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
                    Économisez sur les frais administratifs grâce à nos accords avec nos partenaires.
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

        {/* Personalized Support Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-realestate-blue to-realestate-red">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  ACCOMPAGNEMENT EXPERT
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Un Accompagnement
                  <br />
                  <span className="text-yellow-300">Personnalisé</span>
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Notre équipe d'experts vous guide à chaque étape de votre projet d'achat immobilier, 
                  de la simulation initiale jusqu'à la signature de l'hypothèque.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Simulation Gratuite</h3>
                      <p className="text-white/80">Estimation de votre capacité d'emprunt et montant envisageable.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Dossier Simplifié</h3>
                      <p className="text-white/80">Centralisation des démarches avec nos partenaires pour gagner du temps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Conseils Experts</h3>
                      <p className="text-white/80">Choix entre prêt conventionnel ou assuré selon votre profil.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Processus d'Accompagnement</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-realestate-blue text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold">Analyse de votre situation</h4>
                        <p className="text-gray-600 text-sm">Évaluation de vos besoins et capacités</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-realestate-blue text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold">Recherche de financement</h4>
                        <p className="text-gray-600 text-sm">Négociation avec nos partenaires</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-realestate-blue text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold">Constitution du dossier</h4>
                        <p className="text-gray-600 text-sm">Préparation et suivi administratif</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-realestate-red text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold">Finalisation</h4>
                        <p className="text-gray-600 text-sm">Signature et remise des clés</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Benefits Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <Badge className="mb-4 px-4 py-2 bg-realestate-red/10 text-realestate-red">
                <Star className="w-4 h-4 mr-2" />
                AVANTAGES EXCLUSIFS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bénéficiez de Nos
                <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
                  {" "}Avantages Exclusifs
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En passant par notre réseau, vous accédez à des conditions privilégiées et un service premium
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-gradient-to-r from-realestate-blue to-realestate-blue/80 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Étude Préalable Accélérée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Validation rapide de votre qualification pour sécuriser votre projet d'achat.
                </p>
              </Card>

              <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-gradient-to-r from-realestate-red to-realestate-red/80 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Conditions Préférentielles</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accès à des offres spéciales réservées exclusivement à nos clients.
                </p>
              </Card>

              <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Suivi Jusqu'à la Signature</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accompagnement complet jusqu'à la signature de l'hypothèque et la remise des clés.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-realestate-blue to-realestate-red">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Concrétiser Votre Projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une simulation gratuite et découvrez comment nous pouvons vous aider à acquérir votre propriété.
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