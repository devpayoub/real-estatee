
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { BlogProvider } from "@/contexts/BlogContext";
import { ArticleProvider } from "@/contexts/ArticleContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Calcule from "./pages/Calcule";
import EvaluationGratuite from "./pages/EvaluationGratuite";
import AlerteImmobiliere from "./pages/AlerteImmobiliere";
import CalculatriceDroitMutation from "./pages/CalculatriceDroitMutation";
import CalculatriceHypothecaire from "./pages/CalculatriceHypothecaire";
import PropertyDetails from "./pages/PropertyDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminArticles from "./pages/AdminArticles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BlogProvider>
        <ArticleProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/calcule" element={<Calcule />} />
                <Route path="/evaluation-gratuite" element={<EvaluationGratuite />} />
                <Route path="/alerte-immobiliere" element={<AlerteImmobiliere />} />
                <Route path="/calculatrice-droit-mutation" element={<CalculatriceDroitMutation />} />
                <Route path="/calculatrice-hypothecaire" element={<CalculatriceHypothecaire />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/articles" element={<AdminArticles />} />
                </Route>
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ArticleProvider>
      </BlogProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
