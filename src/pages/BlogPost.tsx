
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useBlog } from '@/contexts/BlogContext';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { blogPosts } = useBlog();
  const navigate = useNavigate();
  
  // Find the blog post
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    // Redirect if blog post not found
    if (!post && id) {
      navigate('/blog');
    }
    
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [post, id, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 px-6">
        <article className="container mx-auto max-w-4xl py-12">
          {/* Back button */}
          <div className="mb-8" data-aos="fade-up">
            <Link to="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Retour aux articles
              </Button>
            </Link>
          </div>
          
          {/* Blog post header */}
          <header className="mb-10" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <span className="bg-realestate-lightred text-realestate-red px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <User size={16} className="mr-1" />
              <span className="mr-4">{post.author}</span>
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
          </header>
          
          {/* Featured image */}
          <div 
            className="mb-10 rounded-lg overflow-hidden shadow-lg" 
            data-aos="fade-up" 
            data-aos-delay="150"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Blog content */}
          <div 
            className="prose prose-lg max-w-none" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <p className="text-lg font-medium text-gray-700 mb-6">{post.excerpt}</p>
            
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-gray-700">{paragraph}</p>
            ))}
          </div>
          
          {/* Related articles section could go here */}
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
