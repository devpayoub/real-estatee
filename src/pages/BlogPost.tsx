import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// Sample blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Buying your first home can be intimidating, but with these tips, you'll be prepared for success.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    author: "John Smith",
    date: "May 5, 2025",
    category: "Buying",
    readTime: "5 min read",
    content: `
      <p class="mb-4">Buying your first home is a significant milestone in life, but it can also be a complex and overwhelming process. With careful planning and the right information, you can navigate this journey with confidence.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Check Your Credit Score</h2>
      <p class="mb-4">Your credit score plays a crucial role in determining your mortgage options and interest rates. Before you start house hunting, check your credit report and take steps to improve your score if necessary. Aim for a score of at least 620, though a score above 740 will qualify you for the best rates.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Determine Your Budget</h2>
      <p class="mb-4">Assess your finances honestly to determine how much house you can afford. The general rule is that your housing expenses should not exceed 28% of your gross monthly income. Don't forget to consider additional costs beyond the mortgage payment, such as property taxes, insurance, utilities, and maintenance.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Save for a Down Payment</h2>
      <p class="mb-4">While some loans allow for down payments as low as 3.5%, a 20% down payment helps you avoid private mortgage insurance (PMI) and reduces your monthly payment. Start saving early and explore down payment assistance programs that may be available to first-time buyers.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Get Pre-Approved for a Mortgage</h2>
      <p class="mb-4">Before you start looking at homes, get pre-approved for a mortgage. This gives you a clear idea of how much you can borrow and makes your offer more competitive in the market. Shop around with different lenders to compare interest rates and terms.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Consider All Housing Expenses</h2>
      <p class="mb-4">The mortgage payment is just one part of homeownership costs. Factor in property taxes, homeowner's insurance, possible HOA fees, utilities, maintenance, and repairs. A general rule is to budget 1-3% of your home's value annually for maintenance and repairs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Research Neighborhoods</h2>
      <p class="mb-4">The location of your home affects not only your lifestyle but also your property's value over time. Research neighborhoods for safety, school quality, amenities, commute times, and future development plans. Visit potential neighborhoods at different times of the day to get a comprehensive feel.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Make a Must-Have List</h2>
      <p class="mb-4">Before you start viewing homes, create a list of must-have features versus nice-to-have amenities. This helps you focus your search and avoid being swayed by attractive but unnecessary features that might stretch your budget.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Hire a Knowledgeable Real Estate Agent</h2>
      <p class="mb-4">An experienced agent who specializes in helping first-time buyers can guide you through the process, help you find suitable properties, negotiate on your behalf, and assist with paperwork. Their expertise can be invaluable, especially for newcomers to the real estate market.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Get a Home Inspection</h2>
      <p class="mb-4">Never skip the home inspection. A professional inspector can identify issues with the house that might not be apparent during a showing. This information can help you negotiate repairs or price adjustments, or even decide to walk away from a problematic property.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Plan for the Future</h2>
      <p class="mb-4">Consider your long-term plans when buying your first home. How long do you intend to live there? Is the space suitable for potential family growth? Is the property likely to appreciate in value? These considerations can help you make a more strategic purchase.</p>
      
      <p class="mt-8">By following these tips, you'll be better prepared for the journey of buying your first home. Remember, homeownership is a significant investment, so take your time, do your research, and make informed decisions. With proper planning and guidance, you can find a home that meets your needs and fits your budget.</p>
    `
  },
  {
    id: "2",
    title: "How to Stage Your Home for a Quick Sale",
    excerpt: "Learn how to make your property more attractive to potential buyers and sell faster.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
    author: "Emily Johnson",
    date: "April 28, 2025",
    category: "Selling",
    readTime: "6 min read",
    content: `
      <p class="mb-4">When selling your home, first impressions matter enormously. Proper staging can highlight your home's strengths, minimize its weaknesses, and help potential buyers envision themselves living in the space.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Declutter Thoroughly</h2>
      <p class="mb-4">The first and most crucial step in home staging is decluttering. Remove personal items, excess furniture, and anything that makes spaces look smaller or disorganized. Consider renting a storage unit for items you want to keep but don't need in the home while it's on the market.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Deep Clean Everything</h2>
      <p class="mb-4">A spotless home gives the impression that the property has been well-maintained. Pay special attention to kitchens and bathrooms. Clean windows to allow maximum natural light, steam clean carpets, and don't forget often-overlooked areas like baseboards and ceiling fans.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Make Necessary Repairs</h2>
      <p class="mb-4">Fix anything that's broken or visibly worn – leaky faucets, cracked tiles, scuffed walls, or doors that don't close properly. These small issues can signal to buyers that the home hasn't been well-maintained and could have larger problems.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
            <Link to="/blog">
              <Button className="mt-4">Return to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-6 py-8">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-realestate-blue mb-6 hover:underline"
            data-aos="fade-right"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all articles
          </Link>
          
          {/* Post header */}
          <div className="mb-8" data-aos="fade-up">
            <Badge className="bg-realestate-lightblue text-realestate-blue mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div 
            className="w-full h-[400px] rounded-lg overflow-hidden mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Post content */}
          <div 
            className="prose prose-lg max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author bio */}
          <div 
            className="mt-12 p-6 bg-gray-50 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <img 
                  src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop`}
                  alt={post.author}
                />
              </Avatar>
              <div>
                <h4 className="text-xl font-semibold mb-1">About {post.author}</h4>
                <p className="text-gray-600">
                  Real estate expert with over 10 years of experience helping clients find their perfect homes and investment properties.
                </p>
              </div>
            </div>
          </div>
        </article>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;