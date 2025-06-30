import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEvaluations, PropertyEvaluation } from "../lib/useEvaluations";
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

const AdminEvaluationPanel = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    evaluations,
    loading,
    error,
    fetchEvaluations,
    deleteEvaluation,
    searchEvaluations,
    getStatistics
  } = useEvaluations();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedEvaluation, setSelectedEvaluation] = useState<PropertyEvaluation | null>(null);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleDelete = async (id: number) => {
    const result = await deleteEvaluation(id);
    
    if (result.success) {
      toast({
        title: "Évaluation supprimée",
        description: "L'évaluation a été supprimée avec succès",
      });
    } else {
      toast({
        title: "Erreur",
        description: result.error || "Impossible de supprimer l'évaluation",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = [
      'ID', 'Date', 'Nom', 'Email', 'Téléphone', 'Adresse', 
      'Type de propriété', 'Année construction', 'Superficie', 
      'Chambres', 'Salles de bain', 'Stationnement', 'Garages', 
      'Raison de vente', 'Rénovations'
    ];

    const csvData = filteredEvaluations.map(evaluation => [
      evaluation.id,
      new Date(evaluation.created_at).toLocaleDateString('fr-CA'),
      `${evaluation.first_name} ${evaluation.last_name}`,
      evaluation.email,
      evaluation.phone,
      `${evaluation.address}${evaluation.apt ? ` ${evaluation.apt}` : ''}`,
      evaluation.property_type,
      evaluation.construction_year || '',
      evaluation.living_area || '',
      evaluation.bedrooms,
      evaluation.bathrooms,
      evaluation.parking_spaces,
      evaluation.garages,
      evaluation.sale_reason,
      evaluation.renovations || ''
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `evaluations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get filtered evaluations
  const filteredEvaluations = (() => {
    let filtered = searchTerm ? searchEvaluations(searchTerm) : evaluations;
    
    if (filterType !== "all") {
      filtered = filtered.filter(evaluation => evaluation.property_type === filterType);
    }
    
    return filtered;
  })();

  // Get property type label
  const getPropertyTypeLabel = (value: string) => {
    const types = {
      "maison": "Maison unifamiliale",
      "condo": "Condominium", 
      "duplex": "Duplex",
      "triplex": "Triplex",
      "terrain": "Terrain"
    };
    return types[value as keyof typeof types] || value;
  };

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
            <Button onClick={fetchEvaluations} className="mt-4">
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
                  Demandes d'Évaluation
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
                  demandes reçues
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
                  nouvelles demandes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Maisons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.byType.maison || 0}</div>
                <p className="text-xs text-muted-foreground">
                  évaluations maisons
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Condos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.byType.condo || 0}</div>
                <p className="text-xs text-muted-foreground">
                  évaluations condos
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Gérer les Demandes d'Évaluation
              </h2>
              <div className="flex gap-3">
                <Button 
                  onClick={fetchEvaluations}
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
                  disabled={filteredEvaluations.length === 0}
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
                  placeholder="Rechercher par nom, email ou adresse..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Filtrer par type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="maison">Maison unifamiliale</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="triplex">Triplex</SelectItem>
                  <SelectItem value="terrain">Terrain</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Card className="shadow-lg border-none overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Adresse</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Détails</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <RefreshCw className="animate-spin mx-auto mb-2" size={24} />
                          Chargement des évaluations...
                        </TableCell>
                      </TableRow>
                    ) : filteredEvaluations.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                          {searchTerm || filterType !== "all" 
                            ? "Aucune évaluation trouvée avec ces critères" 
                            : "Aucune évaluation disponible"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredEvaluations.map((evaluation) => (
                        <TableRow key={evaluation.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {new Date(evaluation.created_at).toLocaleDateString('fr-CA')}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">
                              {evaluation.first_name} {evaluation.last_name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{evaluation.email}</div>
                              <div className="text-gray-500">{evaluation.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {evaluation.address}
                              {evaluation.apt && <div className="text-gray-500">{evaluation.apt}</div>}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {getPropertyTypeLabel(evaluation.property_type)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{evaluation.bedrooms} ch, {evaluation.bathrooms} sdb</div>
                              <div className="text-gray-500">{evaluation.living_area}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => setSelectedEvaluation(evaluation)}
                                    className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                                  >
                                    <Eye size={16} />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Détails de l'évaluation - {evaluation.first_name} {evaluation.last_name}
                                    </DialogTitle>
                                  </DialogHeader>
                                  {selectedEvaluation && (
                                    <div className="space-y-6">
                                      <div className="grid grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Informations Client</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Nom:</strong> {selectedEvaluation.first_name} {selectedEvaluation.last_name}</p>
                                            <p><strong>Email:</strong> {selectedEvaluation.email}</p>
                                            <p><strong>Téléphone:</strong> {selectedEvaluation.phone}</p>
                                            <p><strong>Date de demande:</strong> {new Date(selectedEvaluation.created_at).toLocaleString('fr-CA')}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Propriété</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Adresse:</strong> {selectedEvaluation.address}</p>
                                            {selectedEvaluation.apt && <p><strong>Appartement:</strong> {selectedEvaluation.apt}</p>}
                                            <p><strong>Type:</strong> {getPropertyTypeLabel(selectedEvaluation.property_type)}</p>
                                            {selectedEvaluation.construction_year && <p><strong>Année:</strong> {selectedEvaluation.construction_year}</p>}
                                            {selectedEvaluation.living_area && <p><strong>Superficie:</strong> {selectedEvaluation.living_area}</p>}
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="grid grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Détails</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Chambres:</strong> {selectedEvaluation.bedrooms}</p>
                                            <p><strong>Salles de bain:</strong> {selectedEvaluation.bathrooms}</p>
                                            <p><strong>Stationnement:</strong> {selectedEvaluation.parking_spaces}</p>
                                            <p><strong>Garages:</strong> {selectedEvaluation.garages}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Vente</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Raison:</strong> {selectedEvaluation.sale_reason}</p>
                                          </div>
                                        </div>
                                      </div>

                                      {selectedEvaluation.renovations && (
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Rénovations</h4>
                                          <p className="text-sm bg-gray-50 p-3 rounded">{selectedEvaluation.renovations}</p>
                                        </div>
                                      )}

                                      {selectedEvaluation.property_photo_url && (
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Photo de la propriété</h4>
                                          <img 
                                            src={selectedEvaluation.property_photo_url} 
                                            alt="Propriété" 
                                            className="max-w-full h-auto rounded-lg"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDelete(evaluation.id)}
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

export default AdminEvaluationPanel;

