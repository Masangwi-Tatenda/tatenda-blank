
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import MassTimes from "./pages/MassTimes";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import OpenExternalLinks from "./components/layout/OpenExternalLinks";

// Sacrament pages
import Baptism from "./pages/sacraments/Baptism";
import Communion from "./pages/sacraments/Communion";
import Confirmation from "./pages/sacraments/Confirmation";
import Marriage from "./pages/sacraments/Marriage";
import Reconciliation from "./pages/sacraments/Reconciliation";
import Anointing from "./pages/sacraments/Anointing";

// Community pages
import CatholicGuilds from "./pages/community/CatholicGuilds";
import ParishSections from "./pages/community/ParishSections";
import YouthMinistry from "./pages/community/YouthMinistry";
import PhotoGallery from "./pages/community/PhotoGallery";

// Parish leadership
import ParishExecutive from "./pages/ParishExecutive";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <OpenExternalLinks />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mass-times" element={<MassTimes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/parish-executive" element={<ParishExecutive />} />
          
          {/* Sacrament Routes */}
          <Route path="/sacraments/baptism" element={<Baptism />} />
          <Route path="/sacraments/communion" element={<Communion />} />
          <Route path="/sacraments/confirmation" element={<Confirmation />} />
          <Route path="/sacraments/marriage" element={<Marriage />} />
          <Route path="/sacraments/reconciliation" element={<Reconciliation />} />
          <Route path="/sacraments/anointing" element={<Anointing />} />
          
          {/* Community Routes */}
          <Route path="/community/guilds" element={<CatholicGuilds />} />
          <Route path="/community/sections" element={<ParishSections />} />
          <Route path="/community/youth" element={<YouthMinistry />} />
          <Route path="/community/gallery" element={<PhotoGallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
