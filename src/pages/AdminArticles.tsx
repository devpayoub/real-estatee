
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useArticle } from "@/contexts/ArticleContext";
import { useNavigate } from "react-router-dom";
import { Article } from "@/types/article";
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
import AdminArticleForm from "@/components/admin/AdminArticleForm";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";

const AdminArticles = () => {
  const { isAuthenticated, logout } = useAuth();
  const { articles, deleteArticle } = useArticle();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [selectedArticles, setSelectedArticles] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelectedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
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
    deleteArticle(id);
    setSelectedArticles(prev => prev.filter(articleId => articleId !== id));
    toast({
      title: "Propriété supprimée",
      description: "La propriété a été supprimée avec succès",
    });
  };

  const handleDeleteSelected = () => {
    if (selectedArticles.length === 0) return;
    
    selectedArticles.forEach(id => {
      deleteArticle(id);
    });
    
    toast({
      title: "Propriétés supprimées",
      description: `${selectedArticles.length} propriété(s) supprimée(s) avec succès`,
    });
    
    setSelectedArticles([]);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingArticle(null);
    setIsFormOpen(true);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-8">
            <SidebarTrigger />
            <div className="flex-1 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <LayoutDashboard size={24} className="text-realestate-blue" />
                <h1 className="text-2xl font-bold text-gray-800">
                  Gestion des Propriétés
                </h1>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-50 border border-blue-300"
              >
                <LogOut size={16} className="mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Gérer les Propriétés
              </h2>
              <div className="flex gap-3">
                {selectedArticles.length > 0 && (
                  <Button 
                    onClick={handleDeleteSelected}
                    variant="destructive"
                    className="flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Supprimer ({selectedArticles.length})
                  </Button>
                )}
                <Button 
                  onClick={handleAddNew}
                  className="bg-realestate-blue hover:bg-realestate-darkblue flex items-center gap-2"
                >
                  <Plus size={16} />
                  Nouvelle Propriété
                </Button>
              </div>
            </div>
            
            {isFormOpen ? (
              <Card className="shadow-lg border-none overflow-hidden">
                <CardContent className="p-0">
                  <AdminArticleForm 
                    article={editingArticle} 
                    onClose={() => setIsFormOpen(false)} 
                  />
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-none overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        <TableHead className="w-[40px]">
                          <Checkbox 
                            checked={selectedArticles.length === articles.length && articles.length > 0}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedArticles(articles.map(article => article.id));
                              } else {
                                setSelectedArticles([]);
                              }
                            }}
                          />
                        </TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead>Auteur</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <p className="text-gray-500">Aucune propriété trouvée. Créez votre première propriété!</p>
                          </TableCell>
                        </TableRow>
                      ) : (
                        articles.map((article) => (
                          <TableRow key={article.id} className="hover:bg-gray-50">
                            <TableCell>
                              <Checkbox 
                                checked={selectedArticles.includes(article.id)}
                                onCheckedChange={() => toggleSelection(article.id)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">{article.title}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                article.category === "Marché" 
                                  ? "bg-blue-100 text-blue-700" 
                                  : article.category === "Investissement"
                                  ? "bg-green-100 text-green-700"
                                  : article.category === "Conseils"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}>
                                {article.category}
                              </span>
                            </TableCell>
                            <TableCell>{article.author}</TableCell>
                            <TableCell>{article.date}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleEdit(article)}
                                  className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  <Edit size={16} />
                                  <span className="sr-only">Modifier</span>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleDelete(article.id)}
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

export default AdminArticles;
