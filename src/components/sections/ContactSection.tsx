
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Contactez</h2>
        <h3 className="text-3xl mb-8 italic">L'Équipe Le Vasco</h3>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed">
            Prêt à concrétiser vos projets immobiliers? Notre équipe d'experts est là 
            pour vous accompagner à chaque étape de votre parcours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>(514) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contact@levasco.ca</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Montréal, QC</span>
            </div>
          </div>
          
          <Button className="bg-realestate-red hover:bg-realestate-darkred text-white px-8 py-3 rounded-full">
            Prendre Rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
