import React, { useState, useEffect } from "react";
import {
  addArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  Article as ArticleType,
} from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Article extends ArticleType {}

const AdminArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [images, setImages] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleList = getArticles();
      setArticles(articleList);
    };

    fetchArticles();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      updateArticle(editingId, {
        title,
        content,
        excerpt,
        images: images.split(',').map(img => img.trim()).filter(img => img !== ''), // Convert to array
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''), // Convert to array
        category,
        status
      });
      toast.success("Article updated successfully.");
    } else {
      addArticle({
        title,
        content,
        excerpt,
        images: images.split(',').map(img => img.trim()).filter(img => img !== ''), // Convert to array
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''), // Convert to array
        category,
        status
      });
      toast.success("Article added successfully.");
    }

    setTitle("");
    setContent("");
    setExcerpt("");
    setImages("");
    setTags("");
    setCategory("");
    setStatus("draft");
    setEditingId(null);

    // Refresh articles
    setArticles(getArticles());
  };

  const handleEdit = (article: Article) => {
    setEditingId(article.id);
    setTitle(article.title);
    setContent(article.content);
    setExcerpt(article.excerpt);
    setImages(article.images.join(', '));
    setTags(article.tags.join(', '));
    setCategory(article.category);
    setStatus(article.status);
  };

  const handleDelete = (id: string) => {
    deleteArticle(id);
    setArticles(getArticles());
    toast.success("Article deleted successfully.");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Articles</h1>

      {/* Article Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              type="text"
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <Label htmlFor="images">Images (comma separated URLs)</Label>
            <Input
              type="text"
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="content">Content</Label>
          <Input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="mt-6">
          {editingId ? "Update Article" : "Add Article"}
        </Button>
      </form>

      {/* Article Table */}
      <ScrollArea>
        <Table>
          <TableCaption>A list of your articles.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.category}</TableCell>
                <TableCell>{article.status}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(article)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(article.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default AdminArticles;
