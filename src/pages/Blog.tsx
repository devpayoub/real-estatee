
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useBlog } from "@/contexts/BlogContext";

const Blog = () => {
  const { blogPosts } = useBlog();
  
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Restez informé avec les dernières nouvelles, conseils et perspectives sur le marché immobilier.
            </p>
          </div>
          
          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
              <Card className="overflow-hidden border-realestate-red/20 hover:border-realestate-red transition-colors duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="bg-realestate-lightred text-realestate-red px-3 py-1 rounded-full text-sm">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                    <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <User size={16} className="mr-1" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      <Button className="w-fit bg-realestate-red hover:bg-realestate-darkred">
                        Lire Plus <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden flex flex-col h-full border-realestate-red/20 hover:border-realestate-red transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={150 + (index * 50)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="mb-2">
                    <span className="bg-realestate-lightred text-realestate-red px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-auto">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0 text-realestate-red">
                      Lire Plus <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
