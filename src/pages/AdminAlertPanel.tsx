import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAlerts, Alert } from "../lib/useAlerts";
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
  Filter,
  Bell,
  BellOff
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

const AdminAlertsPanel = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    alerts,
    loading,
    error,
    fetchAlerts,
    deleteAlert,
    updateAlertStatus,
    searchAlerts,
    getStatistics,
    formatPriceRange,
    getNotificationTypes
  } = useAlerts();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterFrequency, setFilterFrequency] = useState("all");
  const [filterActive, setFilterActive] = useState("all");
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleDelete = async (id: number) => {
    const result = await deleteAlert(id);
    
    if (result.success) {
      toast({
        title: "Alerte supprimée",
        description: "L'alerte a été supprimée avec succès",
      });
    } else {
      toast({
        title: "Erreur",
        description: result.error || "Impossible de supprimer l'alerte",
        variant: "destructive",
      });
    }
  };

  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    const result = await updateAlertStatus(id, !currentStatus);
    
    if (result.success) {
      toast({
        title: !currentStatus ? "Alerte activée" : "Alerte désactivée",
        description: `L'alerte a été ${!currentStatus ? 'activée' : 'désactivée'} avec succès`,
      });
    } else {
      toast({
        title: "Erreur",
        description: result.error || "Impossible de modifier le statut de l'alerte",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = [
      'ID', 'Date', 'Email', 'Localisation', 'Type de bien', 
      'Prix min', 'Prix max', 'Chambres min', 'Fréquence', 
      'Nouvelles annonces', 'Changements prix', 'Portes ouvertes', 'Statut'
    ];

    const csvData = filteredAlerts.map(alert => [
      alert.id,
      new Date(alert.created_at).toLocaleDateString('fr-CA'),
      alert.email,
      alert.location,
      alert.property_type,
      alert.min_price || '',
      alert.max_price || '',
      alert.min_bedrooms || '',
      alert.frequency,
      alert.new_listings ? 'Oui' : 'Non',
      alert.price_changes ? 'Oui' : 'Non',
      alert.open_houses ? 'Oui' : 'Non',
      alert.is_active !== false ? 'Actif' : 'Inactif'
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `alertes_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get filtered alerts
  const filteredAlerts = (() => {
    let filtered = searchTerm ? searchAlerts(searchTerm) : alerts;
    
    if (filterFrequency !== "all") {
      filtered = filtered.filter(alert => alert.frequency === filterFrequency);
    }
    
    if (filterActive !== "all") {
      filtered = filtered.filter(alert => 
        filterActive === "active" ? alert.is_active !== false : alert.is_active === false
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
            <Button onClick={fetchAlerts} className="mt-4">
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
        
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-3">
                <LayoutDashboard size={24} className="text-realestate-blue" />
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  Alertes Immobilières
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

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
                <p className="text-xs text-muted-foreground">
                  alertes créées
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
                  nouvelles alertes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Actives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.active}</div>
                <p className="text-xs text-muted-foreground">
                  alertes actives
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quotidiennes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.byFrequency.quotidienne || 0}</div>
                <p className="text-xs text-muted-foreground">
                  alertes quotidiennes
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Gérer les Alertes Immobilières
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={fetchAlerts}
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
                  disabled={filteredAlerts.length === 0}
                >
                  <Download size={16} />
                  Exporter CSV
                </Button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={filterFrequency} onValueChange={setFilterFrequency}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter size={16} className="mr-2" />
                    <SelectValue placeholder="Fréquence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les fréquences</SelectItem>
                    <SelectItem value="quotidienne">Quotidienne</SelectItem>
                    <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                    <SelectItem value="mensuelle">Mensuelle</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterActive} onValueChange={setFilterActive}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="active">Actives</SelectItem>
                    <SelectItem value="inactive">Inactives</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Card className="shadow-lg border-none">
              <div className="rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="hidden lg:table-cell">Localisation</TableHead>
                      <TableHead className="hidden sm:table-cell">Type</TableHead>
                      <TableHead className="hidden md:table-cell">Prix</TableHead>
                      <TableHead className="hidden lg:table-cell">Fréquence</TableHead>
                      <TableHead className="hidden xl:table-cell">Notifications</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-8">
                          <RefreshCw className="animate-spin mx-auto mb-2" size={24} />
                          Chargement des alertes...
                        </TableCell>
                      </TableRow>
                    ) : filteredAlerts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                          {searchTerm || filterFrequency !== "all" || filterActive !== "all" 
                            ? "Aucune alerte trouvée avec ces critères" 
                            : "Aucune alerte disponible"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAlerts.map((alert) => (
                        <TableRow key={alert.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium hidden md:table-cell">
                            {new Date(alert.created_at).toLocaleDateString('fr-CA')}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium truncate max-w-[150px]">{alert.email}</div>
                            <div className="text-sm text-gray-500 lg:hidden">{alert.location}</div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <div className="text-sm">
                              {alert.location}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {alert.property_type}
                            </span>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="text-sm">
                              <div>{formatPriceRange(alert.min_price, alert.max_price)}</div>
                              {alert.min_bedrooms && (
                                <div className="text-gray-500">{alert.min_bedrooms}+ ch</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <Badge variant="outline" className="capitalize">
                              {alert.frequency}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden xl:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {getNotificationTypes(alert).map((type, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {type}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={alert.is_active !== false ? "default" : "secondary"}
                              className={`${alert.is_active !== false ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"} whitespace-nowrap`}
                            >
                              {alert.is_active !== false ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => setSelectedAlert(alert)}
                                    className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                                  >
                                    <Eye size={16} />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md md:max-w-4xl max-h-[90vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Détails de l'alerte
                                    </DialogTitle>
                                  </DialogHeader>
                                  {selectedAlert && (
                                    <div className="space-y-6 p-1">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Informations générales</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Email:</strong> <span className="break-all">{selectedAlert.email}</span></p>
                                            <p><strong>Créée le:</strong> {new Date(selectedAlert.created_at).toLocaleString('fr-CA')}</p>
                                            <p><strong>Fréquence:</strong> {selectedAlert.frequency}</p>
                                            <p><strong>Statut:</strong> {selectedAlert.is_active !== false ? "Active" : "Inactive"}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-realestate-blue mb-3">Critères de recherche</h4>
                                          <div className="space-y-2 text-sm">
                                            <p><strong>Localisation:</strong> {selectedAlert.location}</p>
                                            <p><strong>Type de bien:</strong> {selectedAlert.property_type}</p>
                                            <p><strong>Prix:</strong> {formatPriceRange(selectedAlert.min_price, selectedAlert.max_price)}</p>
                                            {selectedAlert.min_bedrooms && <p><strong>Chambres min:</strong> {selectedAlert.min_bedrooms}</p>}
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h4 className="font-semibold text-realestate-blue mb-3">Notifications activées</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {getNotificationTypes(selectedAlert).length > 0 ? 
                                            getNotificationTypes(selectedAlert).map((type, index) => (
                                              <Badge key={index}>{type}</Badge>
                                            )) :
                                            <p className="text-sm text-gray-500">Aucune</p>
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleToggleStatus(alert.id, alert.is_active !== false)}
                                className={`h-8 w-8 p-0 ${alert.is_active !== false ? 'text-gray-500 hover:text-gray-600' : 'text-green-500 hover:text-green-600'}`}
                              >
                                {alert.is_active !== false ? <BellOff size={16} /> : <Bell size={16} />}
                              </Button>
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDelete(alert.id)}
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

export default AdminAlertsPanel;
