
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { BlogPost } from "@/types/blog";

interface BlogContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, "id">) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Sample blog data
const initialBlogPosts = [
  {
    id: "1",
    title: "10 Conseils pour les Acheteurs d'une Première Maison",
    excerpt: "Acheter votre première maison peut être intimidant, mais avec ces conseils, vous serez prêt pour réussir.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    author: "Kais Khayati",
    date: "5 Mai 2025",
    category: "Achat"
  },
  {
    id: "2",
    title: "Comment Préparer Votre Maison pour une Vente Rapide",
    excerpt: "Apprenez comment rendre votre propriété plus attrayante pour les acheteurs potentiels et vendre plus rapidement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
    author: "Émilie Martin",
    date: "28 Avril 2025",
    category: "Vente"
  },
  {
    id: "3",
    title: "Comprendre les Taux Hypothécaires dans le Marché Actuel",
    excerpt: "Naviguez dans le monde complexe des taux hypothécaires et trouvez la meilleure offre pour votre nouvelle maison.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    author: "Michel Dubois",
    date: "15 Avril 2025",
    category: "Finance"
  },
  {
    id: "4",
    title: "Tendances des Maisons de Luxe pour 2025",
    excerpt: "Découvrez les dernières tendances en immobilier de luxe qui façonnent le marché haut de gamme.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1600607687644-c7722199181b?q=80&w=1000&auto=format&fit=crop",
    author: "Sophie Martinez",
    date: "8 Avril 2025",
    category: "Luxe"
  },
  {
    id: "5",
    title: "Investir dans des Propriétés Locatives: Guide du Débutant",
    excerpt: "Tout ce que vous devez savoir pour commencer votre parcours en tant qu'investisseur immobilier.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
    author: "David Wilson",
    date: "30 Mars 2025",
    category: "Investissement"
  },
  {
    id: "6",
    title: "Projets de Rénovation avec le Meilleur Retour sur Investissement",
    excerpt: "Concentrez votre budget de rénovation sur ces projets pour maximiser votre retour sur investissement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in fermentum ultricies. Mauris sed ultricies urna. Nullam sed sagittis nulla, a imperdiet sapien. Pellentesque odio sem, fringilla non arcu et, placerat commodo ante. Sed quis tincidunt massa.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop",
    author: "Sarah Thompson",
    date: "22 Mars 2025",
    category: "Rénovation"
  }
];

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load blog posts from localStorage if available
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with default data
      setBlogPosts(initialBlogPosts);
      localStorage.setItem("blogPosts", JSON.stringify(initialBlogPosts));
    }
  }, []);

  const addBlogPost = (post: Omit<BlogPost, "id">) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
    };
    const updatedPosts = [...blogPosts, newPost];
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const updateBlogPost = (post: BlogPost) => {
    const updatedPosts = blogPosts.map((p) => 
      p.id === post.id ? post : p
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const deleteBlogPost = (id: string) => {
    const updatedPosts = blogPosts.filter((p) => p.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, updateBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
