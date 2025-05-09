
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
    name: "Sarah Thompson",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "Ozalams helped me find my dream home in just two weeks! Their agent was extremely knowledgeable and understood exactly what I was looking for.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Harris",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "I was able to sell my property above asking price thanks to the excellent marketing strategy provided by the Ozalams team. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote: "As a first-time buyer, I was nervous about the process, but my agent walked me through every step with patience and expertise.",
    rating: 5
  },
  {
    id: 4,
    name: "David Chen",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "I've worked with many real estate companies for my investments, but Ozalams stands out for their professionalism and market knowledge.",
    rating: 4
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Home Seller",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    quote: "The selling process was seamless and stress-free. My agent handled everything professionally and kept me informed throughout.",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Repeat Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    quote: "This is my third transaction with Ozalams. Their consistent service excellence keeps me coming back whenever I need real estate assistance.",
    rating: 5
  },
  {
    id: 7,
    name: "Lisa Martinez",
    role: "Commercial Client",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    quote: "Finding the perfect commercial space for my business was challenging until I contacted Ozalams. They found exactly what I needed within my budget.",
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
