
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Clock, Award, HandHeart } from "lucide-react";

const ExclusiveAdvantages = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-yellow-600/10 text-yellow-600">
            <Crown className="w-4 h-4 mr-2" />
            AVANTAGES EXCLUSIFS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Avantages
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Exclusifs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En passant par notre réseau, vous bénéficiez d'avantages privilégiés réservés à nos clients
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Étude Préalable */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-blue-50" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bounce transition-all duration-500">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Étude Préalable Accélérée</h3>
              <p className="text-gray-600 leading-relaxed">
                D'une <em>étude préalable accélérée</em> pour valider votre qualification rapidement.
              </p>
            </CardContent>
          </Card>

          {/* Conditions Préférentielles */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-purple-50" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bounce transition-all duration-500">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conditions Préférentielles</h3>
              <p className="text-gray-600 leading-relaxed">
                De <em>conditions préférentielles</em> réservées exclusivement à nos clients.
              </p>
            </CardContent>
          </Card>

          {/* Suivi Complet */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-green-50" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bounce transition-all duration-500">
                <HandHeart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suivi Jusqu'à la Signature</h3>
              <p className="text-gray-600 leading-relaxed">
                D'un <em>suivi jusqu'à la signature de l'hypothèque</em> pour votre tranquillité d'esprit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveAdvantages;
