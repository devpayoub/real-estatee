
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Kaouthar Mahou",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "J'ai eu le plaisir de travailler avec Mr. Kais khayati et je ne peux que recommander ses services. Sa patience, son écoute et son professionnalisme ont rendu toute l'expérience agréable et fluide. Il a su parfaitement comprendre mes attentes et m'orienter vers les meilleures options. Toujours disponible, il a su me guider à chaque étape. Un grand merci pour votre excellent accompagnement !",
    rating: 5
  },
  {
    id: 2,
    name: "Bensalem Al",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "Mr Kais est quelqu'un très aimable, courtois et soucieux des intérêts de ses clients. N'hésite pas à présenter des conseils et explique les différents scénarios à ses clients.",
    rating: 5
  },
  {
    id: 3,
    name: "Lassaad Toukabri",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote: "Kais est un vrai professionnel avec son excellent travail,service,ses conseils et sa disponibilité.Il a su nous mettre en confiance et nous a très bien conseillé, il a joué un rôle important dans les négociations avec le courtier vendeur.",
    rating: 5
  },
  {
    id: 4,
    name: "Marie Reine Fatal",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "Un très bon courtier immobilier, respectueux, patient, courtois, belle personnalité. J’ai eu un excellent service. Je le recommande fortement.",
    rating: 5
  },
  {
    id: 5,
    name: "Camélia Ezzina",
    role: "Home Seller",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    quote: "Je remercie infiniment Kais Khayati pour son dévouement et son précieux accompagnement,Merci de nous accompagner dans la réalisation de notre projet de Vie souhaité.Je te recommande vivement.",
    rating: 5
  },
  {
    id: 6,
    name: "Taranpreet Singh",
    role: "Repeat Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    quote: "It was pleasure working with Kais. Kais was extremely patient with our questions. He shared great insights with us regarding the market and took personal interest in getting the house closed for us at the price well below the listed price.",
    rating: 5
  },
  {
    id: 7,
    name: "Anka Paradis",
    role: "Commercial Client",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    quote: "Kaïs est très gentil. Le service a été superbe avec lui et facile! Il est très flexible et écoute très bien nos recommandations. Il est bilingue et je le recommande. Lorsqu’ont va acheter notre maison ses sur que je vais l’appeler. Un gros merci encore pour votre service imperméable!!.",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg 
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      ));
  };

  return (
    <section className="py-16 bg-gray-50 aos-init aos-animate" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Ozalams.
          </p>
        </div>
        
        <div className="relative px-12">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full p-6 flex flex-col justify-between border border-gray-200 shadow-sm">
                      <div>
                        <div className="mb-4 text-realestate-blue">
                          <Quote size={24} />
                        </div>
                        <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                      </div>
                      <div>
                        <div className="flex mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <img src={testimonial.image} alt={testimonial.name} />
                          </Avatar>
                          <div className="ml-3">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white shadow-md border-gray-200" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white shadow-md border-gray-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
