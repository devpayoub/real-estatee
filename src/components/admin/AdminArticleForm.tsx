
import { useState, useEffect } from "react";
import { useArticle } from "@/contexts/ArticleContext";
import { Article } from "@/types/article";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdminArticleFormProps {
  article?: Article | null;
  onClose: () => void;
}

const AdminArticleForm = ({ article, onClose }: AdminArticleFormProps) => {
  const { addArticle, updateArticle } = useArticle();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    excerpt: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        content: article.content,
        category: article.category,
        author: article.author,
        excerpt: article.excerpt,
        imageUrl: article.imageUrl || "",
      });
    }
  }, [article]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category || !formData.author || !formData.excerpt) {
      toast({
        title: "Erreur",
        description: "Tous les champs sont requis",
        variant: "destructive",
      });
      return;
    }

    const articleData = {
      ...formData,
      date: new Date().toLocaleDateString('fr-FR'),
    };

    if (article) {
      updateArticle(article.id, articleData);
      toast({
        title: "Propriété modifiée",
        description: "La propriété a été modifiée avec succès",
      });
    } else {
      addArticle(articleData);
      toast({
        title: "Propriété créée",
        description: "La propriété a été créée avec succès",
      });
    }

    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          {article ? "Modifier la propriété" : "Nouvelle propriété"}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0"
        >
          <X size={16} />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Titre</label>
          <Input
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Titre de la propriété"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Catégorie</label>
          <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Marché">Marché</SelectItem>
              <SelectItem value="Investissement">Investissement</SelectItem>
              <SelectItem value="Conseils">Conseils</SelectItem>
              <SelectItem value="Actualités">Actualités</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Auteur</label>
          <Input
            value={formData.author}
            onChange={(e) => handleChange("author", e.target.value)}
            placeholder="Nom de l'auteur"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Extrait</label>
          <Textarea
            value={formData.excerpt}
            onChange={(e) => handleChange("excerpt", e.target.value)}
            placeholder="Bref résumé de la propriété"
            rows={2}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">URL de l'image (optionnel)</label>
          <Input
            value={formData.imageUrl}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Description de la propriété"
            rows={8}
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="bg-realestate-blue hover:bg-realestate-darkblue">
            {article ? "Modifier" : "Créer"}
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminArticleForm;
