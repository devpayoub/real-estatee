
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useEffect } from "react";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Buying your first home can be intimidating, but with these tips, you'll be prepared for success.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    author: "John Smith",
    date: "May 5, 2025",
    category: "Buying"
  },
  {
    id: "2",
    title: "How to Stage Your Home for a Quick Sale",
    excerpt: "Learn how to make your property more attractive to potential buyers and sell faster.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
    author: "Emily Johnson",
    date: "April 28, 2025",
    category: "Selling"
  },
  {
    id: "3",
    title: "Understanding Mortgage Rates in Today's Market",
    excerpt: "Navigate the complex world of mortgage rates and find the best deal for your new home.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    author: "Michael Brown",
    date: "April 15, 2025",
    category: "Finance"
  },
  {
    id: "4",
    title: "Luxury Home Trends for 2025",
    excerpt: "Discover the latest trends in luxury real estate that are shaping the high-end market.",
    image: "https://images.unsplash.com/photo-1600607687644-c7722199181b?q=80&w=1000&auto=format&fit=crop",
    author: "Sophia Martinez",
    date: "April 8, 2025",
    category: "Luxury"
  },
  {
    id: "5",
    title: "Investing in Rental Properties: A Beginner's Guide",
    excerpt: "Everything you need to know about starting your journey as a real estate investor.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
    author: "David Wilson",
    date: "March 30, 2025",
    category: "Investing"
  },
  {
    id: "6",
    title: "Home Renovation Projects with the Highest ROI",
    excerpt: "Focus your renovation budget on these projects to maximize your return on investment.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop",
    author: "Sarah Thompson",
    date: "March 22, 2025",
    category: "Renovation"
  }
];

const Blog = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest news, tips, and insights about the real estate market.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
            <Card className="overflow-hidden">
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
                    <span className="bg-realestate-lightblue text-realestate-blue px-3 py-1 rounded-full text-sm">
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
                    <Button className="w-fit bg-realestate-blue hover:bg-realestate-darkblue">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden flex flex-col h-full"
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
                    <span className="bg-realestate-lightblue text-realestate-blue px-3 py-1 rounded-full text-sm">
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
                    <Button variant="link" className="p-0 text-realestate-blue">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <Button className="bg-realestate-blue hover:bg-realestate-darkblue">
              Load More Articles
            </Button>
          </div>
        </section>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
