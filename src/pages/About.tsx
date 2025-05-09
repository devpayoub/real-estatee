
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Certificate, MapPin, Star, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Agent</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience and a passion for real estate, our agent is dedicated to finding the perfect home for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">John Smith</h2>
              <p className="text-gray-700 mb-6">
                With over 15 years of experience in the real estate industry, John has established himself as a trusted and knowledgeable agent in the market. His commitment to his clients and his extensive knowledge of local neighborhoods make him the perfect partner for your real estate journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-realestate-blue" />
                  <div>
                    <p className="font-medium">15+ Years of Experience</p>
                    <p className="text-sm text-gray-600">Started his career in 2008</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-realestate-blue" />
                  <div>
                    <p className="font-medium">Areas of Expertise</p>
                    <p className="text-sm text-gray-600">Beverly Hills, Downtown, Suburban Areas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <User size={20} className="text-realestate-blue" />
                  <div>
                    <p className="font-medium">200+ Satisfied Clients</p>
                    <p className="text-sm text-gray-600">Helping families find their dream homes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-realestate-blue" />
                  <div>
                    <p className="font-medium">5-Star Rated</p>
                    <p className="text-sm text-gray-600">Consistently receiving top reviews</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                  <Certificate size={16} className="text-realestate-blue" />
                  <span>Licensed Real Estate Agent</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                  <Certificate size={16} className="text-realestate-blue" />
                  <span>Certified Residential Specialist</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                  <Certificate size={16} className="text-realestate-blue" />
                  <span>Accredited Buyer's Representative</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional real estate agent" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-realestate-blue">Top Agent 2024</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Career Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Early Career</h3>
                <p className="text-gray-700">Started as an assistant agent and quickly rose through the ranks due to exceptional client service and market knowledge.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Notable Projects</h3>
                <p className="text-gray-700">Led the successful marketing and sale of the Parkview Residences, a high-end condominium development.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                <p className="text-gray-700">Specializing in luxury residential properties and helping international clients find their perfect homes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
