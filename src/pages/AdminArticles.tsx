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
  const [status, setStatus] = useState<"draft" | "published" | "archived">("draft");
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
        images: images.split(',').map(img => img.trim()).filter(img => img !== ''),
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
        category,
        status
      });
      toast.success("Article updated successfully.");
    } else {
      addArticle({
        title,
        content,
        excerpt,
        images: images.split(',').map(img => img.trim()).filter(img => img !== ''),
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
        category,
        status,
        author: "Admin",
        date: new Date().toISOString().split('T')[0],
        imageUrl: images.split(',')[0]?.trim() || ""
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
    <div className="container mx-auto py-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
        Admin Articles
      </h1>

      {/* Article Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="title" className="text-gray-700 font-semibold">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
            />
          </div>
          <div>
            <Label htmlFor="excerpt" className="text-gray-700 font-semibold">Excerpt</Label>
            <Input
              type="text"
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <Label htmlFor="images" className="text-gray-700 font-semibold">Images (comma separated URLs)</Label>
            <Input
              type="text"
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
            />
          </div>
          <div>
            <Label htmlFor="tags" className="text-gray-700 font-semibold">Tags (comma separated)</Label>
            <Input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <Label htmlFor="category" className="text-gray-700 font-semibold">Category</Label>
            <Input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
            />
          </div>
          <div>
            <Label htmlFor="status" className="text-gray-700 font-semibold">Status</Label>
            <Select value={status} onValueChange={(value: "draft" | "published" | "archived") => setStatus(value)}>
              <SelectTrigger className="w-full mt-2 border-gray-300 focus:border-realestate-blue">
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
          <Label htmlFor="content" className="text-gray-700 font-semibold">Content</Label>
          <Input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-2 border-gray-300 focus:border-realestate-blue focus:ring-realestate-blue/20"
          />
        </div>
        <Button 
          type="submit" 
          className="mt-6 bg-gradient-to-r from-realestate-blue to-realestate-red hover:from-realestate-darkblue hover:to-realestate-darkred text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {editingId ? "Update Article" : "Add Article"}
        </Button>
      </form>

      {/* Article Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
        <ScrollArea>
          <Table>
            <TableCaption className="text-gray-600 py-4">A list of your articles.</TableCaption>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-realestate-lightblue to-realestate-lightred">
                <TableHead className="font-semibold text-gray-800">Title</TableHead>
                <TableHead className="font-semibold text-gray-800">Category</TableHead>
                <TableHead className="font-semibold text-gray-800">Status</TableHead>
                <TableHead className="text-right font-semibold text-gray-800">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900">{article.title}</TableCell>
                  <TableCell className="text-gray-700">{article.category}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.status === 'published' ? 'bg-green-100 text-green-800' :
                      article.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {article.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(article)}
                      className="mr-2 hover:bg-realestate-lightblue hover:text-realestate-blue"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(article.id)}
                      className="hover:bg-red-100 hover:text-red-600"
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
    </div>
  );
};

export default AdminArticles;
