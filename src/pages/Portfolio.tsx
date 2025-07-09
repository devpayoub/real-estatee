
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Villa Moderne Westmount",
      type: "Vendu",
      price: "2,850,000 $",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
      description: "Magnifique propriété de luxe avec vue panoramique"
    },
    {
      id: 2,
      title: "Condo Downtown",
      type: "Loué",
      price: "3,200 $/mois",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
      description: "Appartement moderne en plein centre-ville"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Mon Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de mes réalisations récentes en immobilier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <Badge variant={item.type === "Vendu" ? "default" : "secondary"}>
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-2xl font-bold text-realestate-blue">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
