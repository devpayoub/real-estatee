
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useBlog } from "@/contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/types/blog";
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
import { Edit, Trash2, LogOut, Plus, LayoutDashboard } from "lucide-react";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const { blogPosts, deleteBlogPost } = useBlog();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);

  // Handle checkbox selection
  const toggleSelection = (id: string) => {
    setSelectedPosts(prev => 
      prev.includes(id) 
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    );
  };
  
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
    setSelectedPosts(prev => prev.filter(postId => postId !== id));
    toast({
      title: "Post supprimé",
      description: "L'article a été supprimé avec succès",
    });
  };

  const handleDeleteSelected = () => {
    if (selectedPosts.length === 0) return;
    
    selectedPosts.forEach(id => {
      deleteBlogPost(id);
    });
    
    toast({
      title: "Posts supprimés",
      description: `${selectedPosts.length} article(s) supprimé(s) avec succès`,
    });
    
    setSelectedPosts([]);
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-3">
                <LayoutDashboard size={24} className="text-realestate-blue" />
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  Tableau de Bord
                </h1>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-50 border border-blue-300 w-full md:w-auto"
              >
                <LogOut size={16} className="mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Gérer les Articles de Blog
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                {selectedPosts.length > 0 && (
                  <Button 
                    onClick={handleDeleteSelected}
                    variant="destructive"
                    className="flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Supprimer ({selectedPosts.length})
                  </Button>
                )}
                <Button 
                  onClick={handleAddNew}
                  className="bg-realestate-blue hover:bg-realestate-darkblue flex items-center gap-2"
                >
                  <Plus size={16} />
                  Nouveau Post
                </Button>
              </div>
            </div>
            
            {isFormOpen ? (
              <Card className="shadow-lg border-none overflow-hidden">
                <CardContent className="p-0">
                  <AdminBlogForm 
                    post={editingPost} 
                    onClose={() => setIsFormOpen(false)} 
                  />
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-none">
                <div className="rounded-lg overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        <TableHead className="w-[40px]">
                          <Checkbox 
                            checked={selectedPosts.length === blogPosts.length && blogPosts.length > 0}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPosts(blogPosts.map(post => post.id));
                              } else {
                                setSelectedPosts([]);
                              }
                            }}
                          />
                        </TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead className="hidden sm:table-cell">Catégorie</TableHead>
                        <TableHead className="hidden md:table-cell">Auteur</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <p className="text-gray-500">Aucun article trouvé. Créez votre premier article!</p>
                          </TableCell>
                        </TableRow>
                      ) : (
                        blogPosts.map((post) => (
                          <TableRow key={post.id} className="hover:bg-gray-50">
                            <TableCell>
                              <Checkbox 
                                checked={selectedPosts.includes(post.id)}
                                onCheckedChange={() => toggleSelection(post.id)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              <div className="truncate max-w-[150px] md:max-w-xs">{post.title}</div>
                              <div className="text-xs text-gray-500 sm:hidden">{post.category} - {post.date}</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                post.category === "Achat" 
                                  ? "bg-blue-100 text-blue-700" 
                                  : "bg-green-100 text-green-700"
                              }`}>
                                {post.category}
                              </span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.date}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleEdit(post)}
                                  className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
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
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
