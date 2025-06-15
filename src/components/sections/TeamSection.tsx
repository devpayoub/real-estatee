
import { Button } from "@/components/ui/button";
import { Users, Award, TrendingUp, Shield, Phone, Mail } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/95 via-realestate-blue/85 to-realestate-red/90"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-realestate-red/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-semibold">RENCONTREZ NOTRE ÉQUIPE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            L'Excellence en
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Plus de 15 ans d'expertise au service de votre réussite immobilière
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Kais Khayati</h3>
                  <p className="text-white/80">Courtier Principal & Fondateur</p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "Chaque client mérite une approche unique. Notre mission est de transformer 
                vos rêves immobiliers en réalité grâce à notre expertise du marché canadien."
              </p>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Notre Mission</h4>
              <p className="text-white/80 leading-relaxed">
                Chez Le Vasco, nous croyons que chaque transaction immobilière est unique. 
                Notre approche personnalisée combine l'expertise du marché canadien avec 
                un service client d'exception.
              </p>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Certification</h4>
              <p className="text-white/80 text-sm">Courtier certifié OACIQ</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Performance</h4>
              <p className="text-white/80 text-sm">Top 5% au Canada</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group col-span-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Garantie Satisfaction</h4>
              <p className="text-white/80 text-sm">100% de nos clients recommandent nos services</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all">
            Planifier une Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
