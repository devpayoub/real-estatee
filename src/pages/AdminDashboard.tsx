
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useBlog } from "@/contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, LogOut, Plus } from "lucide-react";
import AdminBlogForm from "@/components/admin/AdminBlogForm";

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const { blogPosts, deleteBlogPost } = useBlog();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleDelete = (id: string) => {
    deleteBlogPost(id);
    toast({
      title: "Post supprimé",
      description: "L'article a été supprimé avec succès",
    });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingPost(null);
    setIsFormOpen(true);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Tableau de Bord Admin</h1>
            <div className="flex items-center gap-4">
              <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
                <LogOut size={16} />
                Déconnexion
              </Button>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Gérer les Articles de Blog</h2>
              <Button 
                onClick={handleAddNew}
                className="bg-realestate-blue hover:bg-realestate-darkblue flex items-center gap-2"
              >
                <Plus size={16} />
                Nouveau Post
              </Button>
            </div>
            
            {isFormOpen ? (
              <AdminBlogForm 
                post={editingPost} 
                onClose={() => setIsFormOpen(false)} 
              />
            ) : (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Auteur</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.category}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(post)}
                              className="h-8 w-8 p-0"
                            >
                              <Edit size={16} />
                              <span className="sr-only">Modifier</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDelete(post.id)}
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
