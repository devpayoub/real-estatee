
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Camera, Users, Zap } from "lucide-react";

const CanadianSellingSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-red-600/10 text-red-600">
            <BarChart3 className="w-4 h-4 mr-2" />
            VENTE OPTIMISÉE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Stratégie de 
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Vente Gagnante
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-6">Expertise du Marché Canadien</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Le marché immobilier canadien évolue rapidement. Nos agents spécialisés analysent 
              en temps réel les tendances de votre secteur pour déterminer le prix optimal et 
              la stratégie de vente la plus efficace.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous maîtrisons parfaitement les spécificités réglementaires canadiennes, 
              les attentes des acheteurs locaux, et les meilleures périodes pour vendre 
              selon votre région (Ontario, Québec, Colombie-Britannique, etc.).
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-red-600" />
                <span className="font-medium">Analyse comparative de marché (CMA)</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-red-600" />
                <span className="font-medium">Vente en moyenne 15% plus rapide</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-red-600" />
                <span className="font-medium">Réseau de 10 000+ acheteurs qualifiés</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
              alt="Analyse immobilière" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Marketing Professionnel</h3>
              <p className="text-gray-600 leading-relaxed">
                Photos HD professionnelles, visites virtuelles 3D, et campagnes publicitaires 
                ciblées sur les principales plateformes canadiennes (MLS, Realtor.ca).
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Prix Optimisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Évaluation précise basée sur l'analyse de milliers de transactions récentes 
                dans votre secteur. Stratégie de prix pour maximiser votre profit.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vente Rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Grâce à notre réseau et notre expertise, 85% de nos propriétés se vendent 
                dans les 30 premiers jours, souvent avec des offres multiples.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CanadianSellingSection;
