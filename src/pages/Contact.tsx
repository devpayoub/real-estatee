import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons sous peu.",
      });

      setTimeout(() => setFormSubmitted(false), 5000);

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-realestate-lightred flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16">
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form Card */}
            <div className="backdrop-blur-lg bg-white/80 border border-realestate-red/10 shadow-2xl rounded-3xl p-10">
              <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-realestate-red mb-2">Contactez-Nous</h1>
                <p className="text-lg text-gray-600">
                  Des questions sur nos propriétés ou services ? Remplissez le formulaire, nous vous répondrons rapidement.
                </p>
              </div>
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    className="w-full min-h-[120px] border-realestate-red/30 focus:border-realestate-red"
                    disabled={isSubmitting}
                  />
                </div>

                {formSubmitted && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 text-center">
                    Merci pour votre message! Nous vous répondrons sous peu.
                  </div>
                )}

                <Button
                  type="submit"
                  className="bg-realestate-red hover:bg-realestate-darkred rounded-full w-full py-3 text-lg font-semibold flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer Message"}
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white/90 border border-realestate-red/10 shadow-xl rounded-3xl p-10 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold mb-8 text-realestate-red text-center">Informations de Contact</h2>
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <span className="bg-realestate-lightred p-3 rounded-full">
                    <MapPin className="text-realestate-red h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse du Bureau</h3>
                    <p className="text-gray-600">Longueuil, QC, Canada, Quebec</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-realestate-lightred p-3 rounded-full">
                    <Phone className="text-realestate-red h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">Numéro de Téléphone</h3>
                    <p className="text-gray-600">+1 514-659-8664</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-realestate-lightred p-3 rounded-full">
                    <Mail className="text-realestate-red h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse Email</h3>
                    <p className="text-gray-600">Khayati.kaiss@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-realestate-lightred p-3 rounded-full">
                    <Clock className="text-realestate-red h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">Heures d'Ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 10h00 - 16h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4 text-center">Trouvez-Nous sur la Carte</h3>
                <div className="rounded-lg overflow-hidden shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.755030675505!2d-73.4961578!3d45.4983485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90522e1921549%3A0x13da86c1e722f387!2sKais%20khayati!5e0!3m2!1sfr!2sca!4v1680200115123!5m2!1sfr!2sca"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

