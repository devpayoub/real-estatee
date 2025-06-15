
import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProperties = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    location: "Toronto, ON",
    price: "850,000",
    bathrooms: 3,
    bedrooms: 4,
    squareFeet: 2500,
    tagText: "Featured"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    location: "Vancouver, BC",
    price: "1,200,000",
    bathrooms: 2,
    bedrooms: 3,
    squareFeet: 1800,
    tagText: "Hot Deal"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    location: "Montreal, QC",
    price: "650,000",
    bathrooms: 2,
    bedrooms: 3,
    squareFeet: 2000
  }
];

const FeaturedPropertiesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
            Propriétés en Vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive de propriétés exceptionnelles, 
            choisies pour leur qualité et leur emplacement privilégié.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <div 
              key={property.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Link to="/services">
            <Button 
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Voir Toutes les Propriétés
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
