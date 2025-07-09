
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { BlogProvider } from "@/contexts/BlogContext";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Properties from "@/pages/Properties";
import PropertyDetails from "@/pages/PropertyDetails";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminArticles from "@/pages/AdminArticles";
import Evaluation from "@/pages/Evaluation";
import Alerte from "@/pages/Alerte";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/evaluation" element={<Evaluation />} />
              <Route path="/alerte" element={<Alerte />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/properties" element={<AdminArticles />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
