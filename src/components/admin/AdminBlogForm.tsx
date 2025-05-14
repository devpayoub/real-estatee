
import { useState, useEffect } from "react";
import { useBlog } from "@/contexts/BlogContext";
import { BlogPost } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";

interface AdminBlogFormProps {
  post: BlogPost | null;
  onClose: () => void;
}

const AdminBlogForm = ({ post, onClose }: AdminBlogFormProps) => {
  const { addBlogPost, updateBlogPost } = useBlog();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "Achat",
  });

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content || "",
        image: post.image,
        author: post.author,
        category: post.category,
      });
    }
  }, [post]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (post) {
        // Update existing post
        updateBlogPost({
          id: post.id,
          ...formData,
          date: post.date,
        });
        toast({
          title: "Post mis à jour",
          description: "L'article a été mis à jour avec succès",
        });
      } else {
        // Add new post
        addBlogPost({
          ...formData,
          date: format(new Date(), "d MMMM yyyy"),
        });
        toast({
          title: "Post créé",
          description: "L'article a été créé avec succès",
        });
      }
      onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite, veuillez réessayer",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">
        {post ? "Modifier l'article" : "Créer un nouvel article"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Titre
            </label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Catégorie
            </label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="excerpt" className="text-sm font-medium">
            Extrait
          </label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={2}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            Contenu
          </label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={8}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium">
              Auteur
            </label>
            <Input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="image" className="text-sm font-medium">
              URL de l'image
            </label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-realestate-blue hover:bg-realestate-darkblue"
          >
            {post ? "Mettre à jour" : "Créer"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogForm;
