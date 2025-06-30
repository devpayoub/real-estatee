
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
import PropertyDetails from "./pages/PropertyDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminArticles from "./pages/AdminArticles";
import Buy from "./pages/Buy"
import Buyy from "./pages/Buyy";
import Evaluation from "./pages/Evaluation";
import AlerteImmobiliere from "./pages/AlerteImmobiliere";
import CalculatriceHypothecaire from "./pages/CalculatriceHypothecaire";
import CalculatriceDroitMutation from "./pages/CalculatriceDroitMutation";
import AdminEvaluationPanel from "./pages/AdminEvaluationPanel";
import AdminArticleForm from "./components/admin/AdminArticleForm";
import AdminAlertPanel from "./pages/AdminAlertPanel";
import AdminContactPanel from "./pages/AdminConatctPanel";
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
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/buyy" element={<Buyy />} />
                <Route path="/evaluation-gratuit" element={<Evaluation />} />
                <Route path="/alert-immobiliere" element={<AlerteImmobiliere />} />
                <Route path="/calculatrice-hypothecaire" element={<CalculatriceHypothecaire />} />
                <Route path="/calculatrice-droit-mutation" element={<CalculatriceDroitMutation />} />




                
                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/articles" element={<AdminArticles />} />
                  <Route path="/admin/evaluation-form" element={<AdminEvaluationPanel />} />
                  <Route path="/admin/alert-form" element={<AdminAlertPanel />} />
                  <Route path="/admin/contact-mails" element={<AdminContactPanel />} />
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
