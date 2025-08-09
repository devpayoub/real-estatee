import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Badge } from "@/components/ui/badge";
import { Calendar, BadgeCheck, MapPin, Star, User } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-realestate-lightred flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[400px] bg-realestate-red/80">
        <img
          src="../../lovable-uploads/face.jpg"
          alt="Agent immobilier professionnel"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 mt-16">
          <img
            src="../../lovable-uploads/face.jpg"
            alt="Kais Khayati"
            className="w-40 h-40 rounded-full object-cover border-4 border-realestate-red shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-realestate-red mb-2">
              Kais Khayati
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Agent immobilier passionné, dédié à trouver le logement parfait pour
              chaque client.
            </p>
            <Badge className="bg-realestate-red text-white px-4 py-2 text-base">
              Meilleur Agent 2025
            </Badge>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Info Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Details */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-3xl font-bold mb-6 text-realestate-red">
                À propos de l'agent
              </h2>
              <p className="text-gray-700 mb-6">
                Avec plus de 15 ans d'expérience dans le secteur immobilier, Kais
                s'est imposé comme un agent de confiance et compétent sur le
                marché. Son engagement envers ses clients et sa connaissance
                approfondie des quartiers locaux font de lui le partenaire idéal
                pour votre parcours immobilier.
              </p>
              <div className="space-y-4 mb-8">
                <div
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <Calendar size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">15+ ans d'expérience</p>
                    <p className="text-sm text-gray-600">Débuts en 2008</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <MapPin size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Zones d'expertise</p>
                    <p className="text-sm text-gray-600">
                      Longueuil, QC, Canada, Quebec
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <User size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">200+ clients satisfaits</p>
                    <p className="text-sm text-gray-600">
                      Aider les familles à trouver leurs maisons de rêve
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Star size={20} className="text-realestate-red" />
                  <div>
                    <p className="font-medium">Noté 5 étoiles</p>
                    <p className="text-sm text-gray-600">Avis clients excellents</p>
                  </div>
                </div>
              </div>
              <h3
                className="text-xl font-semibold mb-4"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Certifications
              </h3>
              <div
                className="flex flex-wrap gap-3 mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Agent Immobilier Agréé</span>
                </div>
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Spécialiste Résidentiel Certifié</span>
                </div>
                <div className="flex items-center gap-2 bg-realestate-lightred rounded-full px-4 py-2">
                  <BadgeCheck size={16} className="text-realestate-red" />
                  <span>Représentant Accrédité des Acheteurs</span>
                </div>
              </div>
            </div>
            {/* Right: Career Highlights */}
            <div data-aos="fade-left" data-aos-delay="100">
              <h2 className="text-2xl font-bold mb-6 text-realestate-red">
                Points Forts de Carrière
              </h2>
              <div className="space-y-6">
                <div
                  className="bg-white border-l-4 border-realestate-red p-6 rounded-lg shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Début de Carrière
                  </h3>
                  <p className="text-gray-700">
                    A débuté comme agent assistant et a rapidement gravi les
                    échelons grâce à un service client exceptionnel et une
                    connaissance approfondie du marché.
                  </p>
                </div>
                <div
                  className="bg-white border-l-4 border-realestate-red p-6 rounded-lg shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay="550"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Projets Notables
                  </h3>
                  <p className="text-gray-700">
                    A dirigé avec succès la commercialisation et la vente des
                    Résidences Parkview, un ensemble de condominiums haut de gamme.
                  </p>
                </div>
                <div
                  className="bg-white border-l-4 border-realestate-red p-6 rounded-lg shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3 className="text-lg font-semibold mb-2">Focus Actuel</h3>
                  <p className="text-gray-700">
                    Spécialisation dans les propriétés résidentielles de luxe et
                    aide aux clients internationaux à trouver leurs maisons
                    parfaites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-realestate-lightred py-16">
          <h2
            className="text-3xl font-bold mb-8 text-center text-realestate-red"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Témoignages de Clients
          </h2>
          <div className="container mx-auto px-6">
            <TestimonialsCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
