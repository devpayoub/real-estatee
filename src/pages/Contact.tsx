
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous avez des questions sur nos propriétés ou services? Nous sommes là pour vous aider à trouver votre maison parfaite.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Entrez en Contact</h2>
                <p className="text-gray-700 mb-6">
                  Remplissez le formulaire ci-dessous, et notre équipe vous répondra dès que possible. Nous sommes impatients de vous entendre.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Votre Nom</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        required
                        className="w-full border-realestate-red/30 focus:border-realestate-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Adresse Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.com"
                        required
                        className="w-full border-realestate-red/30 focus:border-realestate-red"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Numéro de Téléphone</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(+33) 01 23 45 67 89"
                        className="w-full border-realestate-red/30 focus:border-realestate-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Renseignements sur une propriété"
                        required
                        className="w-full border-realestate-red/30 focus:border-realestate-red"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Votre Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Je suis intéressé à en savoir plus sur..."
                      required
                      className="w-full min-h-[150px] border-realestate-red/30 focus:border-realestate-red"
                    />
                  </div>
                  
                  {formSubmitted && (
                    <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                      Merci pour votre message! Nous vous répondrons sous peu.
                    </div>
                  )}
                  
                  <Button type="submit" className="bg-realestate-red hover:bg-realestate-darkred rounded-full">
                    Envoyer Message <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-realestate-lightred p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <MapPin className="text-realestate-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Adresse du Bureau</h3>
                      <p className="text-gray-600">123 Rue Principale, Paris, 75001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <Phone className="text-realestate-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Numéro de Téléphone</h3>
                      <p className="text-gray-600">+33 01 23 45 67 89</p>
                      <p className="text-gray-600">+33 01 23 45 67 90</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <Mail className="text-realestate-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Adresse Email</h3>
                      <p className="text-gray-600">info@kaiskhayati.com</p>
                      <p className="text-gray-600">support@kaiskhayati.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <Clock className="text-realestate-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Heures d'Ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                      <p className="text-gray-600">Samedi: 10h00 - 16h00</p>
                      <p className="text-gray-600">Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Trouvez-Nous sur la Carte</h3>
                  <div className="bg-white h-[200px] rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Emplacement de la carte - serait remplacé par une vraie intégration de carte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
