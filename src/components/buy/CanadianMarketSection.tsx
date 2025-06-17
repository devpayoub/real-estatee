
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Shield, Users } from "lucide-react";

const CanadianMarketSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-green-600/10 text-green-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            MARCHÉ IMMOBILIER CANADIEN
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi Acheter au 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Canada ?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop" 
              alt="Architecture canadienne" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-6">Un Marché Stable et Attractif</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Le Canada se distingue par la stabilité de son marché immobilier et ses politiques favorables aux investisseurs. 
              Avec des villes comme Toronto, Vancouver, et Montréal qui connaissent une croissance constante, 
              c'est le moment idéal pour investir dans l'immobilier canadien.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nos experts connaissent parfaitement les spécificités du marché canadien : 
              réglementations locales, opportunités d'investissement, quartiers en développement, 
              et programmes gouvernementaux d'aide à l'achat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">Marché réglementé et sécurisé</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium">Appréciation constante des prix</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-medium">Programmes d'aide gouvernementaux</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accompagnement Complet</h3>
              <p className="text-gray-600 leading-relaxed">
                De la recherche à la signature, notre équipe vous accompagne à chaque étape. 
                Nous gérons toutes les formalités administratives canadiennes pour vous.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Financement Avantageux</h3>
              <p className="text-gray-600 leading-relaxed">
                Accès privilégié aux meilleurs taux hypothécaires canadiens grâce à nos partenariats 
                avec les principales banques et institutions financières.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sécurité Juridique</h3>
              <p className="text-gray-600 leading-relaxed">
                Vérifications complètes des titres de propriété, conformité réglementaire, 
                et protection juridique totale selon la législation canadienne.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CanadianMarketSection;
