import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContactMessages, ContactMessage } from "../lib/useContactMessages";
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
import { 
  LogOut, 
  LayoutDashboard, 
  Eye, 
  Trash2, 
  Download,
  RefreshCw,
  Search,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AdminContactPanel = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    contactMessages,
    loading,
    error,
    fetchContactMessages,
    deleteContactMessage,
    searchContactMessages,
    getStatistics
  } = useContactMessages();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleDelete = async (id: number) => {
    const result = await deleteContactMessage(id);
    
    if (result.success) {
      toast({
        title: "Message supprimé",
        description: "Le message de contact a été supprimé avec succès",
      });
    } else {
      toast({
        title: "Erreur",
        description: result.error || "Impossible de supprimer le message",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = [
      'ID', 'Date', 'Nom', 'Email', 'Téléphone', 'Sujet', 'Message'
    ];

    const csvData = filteredMessages.map(message => [
      message.id,
      new Date(message.created_at).toLocaleDateString('fr-CA'),
      message.name,
      message.email,
      message.phone || '',
      message.subject,
      message.message
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `messages_contact_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get filtered messages
  const filteredMessages = (() => {
    let filtered = searchTerm ? searchContactMessages(searchTerm) : contactMessages;
    
    if (filterSubject !== "all") {
      filtered = filtered.filter(message => 
        message.subject.toLowerCase().includes(filterSubject.toLowerCase())
      );
    }
    
    return filtered;
  })();

  // Get statistics
  const stats = getStatistics();

  if (!isAuthenticated) {
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6">
          <CardContent>
            <p className="text-red-600">Erreur: {error}</p>
            <Button onClick={fetchContactMessages} className="mt-4">
              Réessayer
            </Button>
          </CardContent>
        </Card>
      </div>
    );
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
                  Messages de Contact
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

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
                <p className="text-xs text-muted-foreground">
                  messages reçus
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cette semaine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.thisWeek}</div>
                <p className="text-xs text-muted-foreground">
                  nouveaux messages
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ce mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.thisMonth}</div>
                <p className="text-xs text-muted-foreground">
                  messages ce mois
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.today}</div>
                <p className="text-xs text-muted-foreground">
                  messages aujourd'hui
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Gérer les Messages de Contact
              </h2>
              <div className="flex gap-3">
                <Button 
                  onClick={fetchContactMessages}
                  variant="outline"
                  className="flex items-center gap-2"
                  disabled={loading}
                >
                  <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                  Actualiser
                </Button>
                <Button 
                  onClick={exportToCSV}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  disabled={filteredMessages.length === 0}
                >
                  <Download size={16} />
                  Exporter CSV
                </Button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Rechercher par nom, email ou sujet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterSubject} onValueChange={setFilterSubject}>
                <SelectTrigger className="w-48">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Filtrer par sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les sujets</SelectItem>
                  <SelectItem value="propriété">Renseignements propriété</SelectItem>
                  <SelectItem value="service">Questions service</SelectItem>
                  <SelectItem value="général">Demande générale</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Card className="shadow-lg border-none overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Sujet</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <RefreshCw className="animate-spin mx-auto mb-2" size={24} />
                          Chargement des messages...
                        </TableCell>
                      </TableRow>
                    ) : filteredMessages.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                          {searchTerm || filterSubject !== "all" 
                            ? "Aucun message trouvé avec ces critères" 
                            : "Aucun message disponible"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredMessages.map((message) => (
                        <TableRow key={message.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {new Date(message.created_at).toLocaleDateString('fr-CA')}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">
                              {message.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{message.email}</div>
                              {message.phone && <div className="text-gray-500">{message.phone}</div>}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {message.subject}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm max-w-xs truncate">
                              {message.message}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => setSelectedMessage(message)}
                                    className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                                  >
                                    <Eye size={16} />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Message de {message.name}
                                    </DialogTitle>
                                  </DialogHeader>
                                  {selectedMessage && (
                                    <div className="space-y-6">
                                      <div className="grid grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Informations Contact</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Nom:</strong> {selectedMessage.name}</p>
                                            <p><strong>Email:</strong> {selectedMessage.email}</p>
                                            {selectedMessage.phone && <p><strong>Téléphone:</strong> {selectedMessage.phone}</p>}
                                            <p><strong>Date:</strong> {new Date(selectedMessage.created_at).toLocaleString('fr-CA')}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Sujet</h4>
                                          <div className="space-y-2 text-sm">
                                            <p>{selectedMessage.subject}</p>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h4 className="font-semibold text-realestate-blue mb-3">Message</h4>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                          <p className="text-sm whitespace-pre-wrap">{selectedMessage.message}</p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDelete(message.id)}
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                <Trash2 size={16} />
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminContactPanel;

