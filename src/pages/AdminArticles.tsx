import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Property, properties, addProperty, updateProperty, deleteProperty } from "@/data/properties";
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
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminArticles = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "buy",
    location: "",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    image: "",
    features: "",
    amenities: ""
  });

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleDelete = (id: string) => {
    deleteProperty(id);
    setSelectedProperties(prev => prev.filter(propId => propId !== id));
    toast({
      title: "Propriété supprimée",
      description: "La propriété a été supprimée avec succès",
    });
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      description: property.description,
      type: property.type,
      location: property.location,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      image: property.image,
      features: property.features.join(", "),
      amenities: property.amenities.join(", ")
    });
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const propertyData = {
      title: formData.title,
      description: formData.description,
      type: formData.type as "buy" | "rent",
      location: formData.location,
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      image: formData.image,
      features: formData.features.split(",").map(f => f.trim()),
      amenities: formData.amenities.split(",").map(a => a.trim())
    };

    if (editingProperty) {
      updateProperty(editingProperty.id, propertyData);
      toast({
        title: "Propriété modifiée",
        description: "La propriété a été modifiée avec succès",
      });
    } else {
      addProperty(propertyData);
      toast({
        title: "Propriété ajoutée",
        description: "La propriété a été ajoutée avec succès",
      });
    }

    setIsFormOpen(false);
    setEditingProperty(null);
    setFormData({
      title: "",
      description: "",
      type: "buy",
      location: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      image: "",
      features: "",
      amenities: ""
    });
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
              <Button 
                onClick={() => {
                  setEditingProperty(null);
                  setIsFormOpen(true);
                }}
                className="bg-realestate-blue hover:bg-realestate-darkblue flex items-center gap-2"
              >
                <Plus size={16} />
                Nouvelle Propriété
              </Button>
            </div>
            
            {isFormOpen ? (
              <Card className="shadow-lg border-none overflow-hidden">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Titre</label>
                        <Input
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Type</label>
                        <Select 
                          value={formData.type}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner le type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">À Vendre</SelectItem>
                            <SelectItem value="rent">À Louer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Chambres</label>
                        <Input
                          type="number"
                          value={formData.bedrooms}
                          onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: Number(e.target.value) }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Salles de bain</label>
                        <Input
                          type="number"
                          value={formData.bathrooms}
                          onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: Number(e.target.value) }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Surface (m²)</label>
                        <Input
                          type="number"
                          value={formData.area}
                          onChange={(e) => setFormData(prev => ({ ...prev, area: Number(e.target.value) }))}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Image URL</label>
                      <Input
                        value={formData.image}
                        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Caractéristiques (séparées par des virgules)</label>
                      <Input
                        value={formData.features}
                        onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Commodités (séparées par des virgules)</label>
                      <Input
                        value={formData.amenities}
                        onChange={(e) => setFormData(prev => ({ ...prev, amenities: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button type="submit" className="bg-realestate-blue hover:bg-realestate-darkblue">
                        {editingProperty ? "Modifier" : "Créer"}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
                        Annuler
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-none overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        <TableHead>Titre</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Surface</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {properties.map((property) => (
                        <TableRow key={property.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{property.title}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              property.type === "buy" 
                                ? "bg-blue-100 text-blue-700" 
                                : "bg-green-100 text-green-700"
                            }`}>
                              {property.type === "buy" ? "À Vendre" : "À Louer"}
                            </span>
                          </TableCell>
                          <TableCell>{property.location}</TableCell>
                          <TableCell>{property.area} m²</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleEdit(property)}
                                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDelete(property.id)}
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
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