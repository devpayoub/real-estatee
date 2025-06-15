
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Kais Khayati",
    role: "Agent Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    rating: 5.0,
    sales: "200+ Ventes",
    phone: "+33 01 23 45 67 89",
    email: "kais@kaiskhayati.com"
  },
  {
    name: "Sarah Martin",
    role: "Spécialiste Résidentiel",
    image: "https://images.unsplash.com/photo-1594736797933-d0a4e5c5bfdf?w=400&h=400&fit=crop",
    rating: 4.9,
    sales: "150+ Ventes",
    phone: "+33 01 23 45 67 90",
    email: "sarah@kaiskhayati.com"
  },
  {
    name: "Marc Dubois",
    role: "Conseiller Commercial",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 4.8,
    sales: "120+ Ventes",
    phone: "+33 01 23 45 67 91",
    email: "marc@kaiskhayati.com"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
            Notre Équipe d'Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rencontrez nos agents immobiliers expérimentés, dédiés à vous offrir 
            un service personnalisé et professionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                    <Star size={12} fill="white" />
                    {member.rating}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-realestate-blue mb-2">{member.name}</h3>
                <p className="text-realestate-red font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.sales}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone size={14} />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Mail size={14} />
                    <span>{member.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
