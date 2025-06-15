
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-realestate-blue/95 via-black/85 to-realestate-red/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-realestate-red/20 to-transparent rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-realestate-blue/20 to-transparent rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">PARLONS DE VOTRE PROJET</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactez
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              L'Équipe Le Vasco
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Prêt à concrétiser vos projets immobiliers ? Notre équipe d'experts est là 
            pour vous accompagner à chaque étape de votre parcours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Appelez-nous</h3>
                    <p className="text-white/80">Disponible 7j/7</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-2">(514) 123-4567</p>
                <p className="text-white/70">Réponse garantie sous 2h</p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Écrivez-nous</h3>
                    <p className="text-white/80">Réponse rapide</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-white mb-2">contact@levasco.ca</p>
                <p className="text-white/70">Réponse sous 24h</p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Visitez-nous</h3>
                    <p className="text-white/80">Bureau principal</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-white mb-2">Montréal, QC</p>
                <p className="text-white/70">Sur rendez-vous</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h3 className="text-white font-bold text-lg">Heures d'ouverture</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Lundi - Vendredi</span>
                  <span className="text-white font-semibold">8h00 - 20h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Samedi</span>
                  <span className="text-white font-semibold">9h00 - 17h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Dimanche</span>
                  <span className="text-white font-semibold">10h00 - 16h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Commençons votre projet</h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              Que vous souhaitiez acheter, vendre ou investir, notre équipe vous accompagne 
              avec expertise et transparence vers la réussite de vos objectifs immobiliers.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl">
                <Calendar className="w-5 h-5 mr-3" />
                Planifier un Rendez-vous
              </Button>
              
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl">
                <Send className="w-5 h-5 mr-3" />
                Évaluation Gratuite
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-bold mb-4">Pourquoi nous choisir ?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Consultation gratuite et sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Expertise certifiée et reconnue</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Résultats garantis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">Prêt à faire le premier pas ?</h3>
            <p className="text-black/80 mb-6 text-lg">
              Rejoignez les 1369 clients qui nous ont fait confiance cette année
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-xl">
              Commencer Maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
