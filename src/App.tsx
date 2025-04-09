
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SanityProvider } from "@/contexts/SanityContext";
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
import LiturgicalCalendar from "./pages/LiturgicalCalendar";

// Faith Formation Pages
import CoreFaith from "./pages/CoreFaith";
import EducationFormation from "./pages/EducationFormation";
import SpiritualGrowth from "./pages/SpiritualGrowth";
import Vocations from "./pages/Vocations";
import Apologetics from "./pages/Apologetics";
import ChurchDocuments from "./pages/ChurchDocuments";
import PrayersNovenas from "./pages/PrayersNovenas";
import BibleStudy from "./pages/BibleStudy";
import DailyReadings from "./pages/DailyReadings";
import PreviousReadings from "./pages/PreviousReadings";
import SaintsCalendar from "./pages/SaintsCalendar";

// Sacrament pages
import Baptism from "./pages/sacraments/Baptism";
import Communion from "./pages/sacraments/Communion";
import Confirmation from "./pages/sacraments/Confirmation";
import Marriage from "./pages/sacraments/Marriage";
import Reconciliation from "./pages/sacraments/Reconciliation";
import Anointing from "./pages/sacraments/Anointing";
import HolyOrders from "./pages/sacraments/HolyOrders";

// Community pages
import CatholicGuilds from "./pages/community/CatholicGuilds";
import ParishSections from "./pages/community/ParishSections";
import YouthMinistry from "./pages/community/YouthMinistry";
import PhotoGallery from "./pages/community/PhotoGallery";

// Parish leadership
import ParishExecutive from "./pages/ParishExecutive";

// Worship related pages
import MassRecordings from "./pages/MassRecordings";
import Homilies from "./pages/Homilies";

// Legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// New reorganized pages
import RCIA from "./pages/RCIA";
import ParishCalendar from "./pages/ParishCalendar";
import Bulletins from "./pages/Bulletins";
import Ministries from "./pages/Ministries";
import Volunteer from "./pages/Volunteer";
import NewParishioner from "./pages/NewParishioner";

// Create a new QueryClient instance inside the component to ensure proper React context
const App = () => {
  // Create a new QueryClient inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <SanityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <OpenExternalLinks />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              
              {/* Events & Calendar Routes */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/parish-calendar" element={<ParishCalendar />} />
              <Route path="/bulletins" element={<Bulletins />} />
              
              {/* Faith Formation Routes */}
              <Route path="/core-faith" element={<CoreFaith />} />
              <Route path="/education-formation" element={<EducationFormation />} />
              <Route path="/spiritual-growth" element={<SpiritualGrowth />} />
              <Route path="/vocations" element={<Vocations />} />
              <Route path="/apologetics" element={<Apologetics />} />
              <Route path="/church-documents" element={<ChurchDocuments />} />
              <Route path="/prayers-novenas" element={<PrayersNovenas />} />
              <Route path="/bible-study" element={<BibleStudy />} />
              <Route path="/daily-readings" element={<DailyReadings />} />
              <Route path="/previous-readings" element={<PreviousReadings />} />
              <Route path="/saints-calendar" element={<SaintsCalendar />} />
              <Route path="/rcia" element={<RCIA />} />
              
              {/* Liturgical Calendar Routes */}
              <Route path="/liturgical-calendar" element={<LiturgicalCalendar />} />
              <Route path="/mass-times" element={<MassTimes />} />
              <Route path="/mass-recordings" element={<MassRecordings />} />
              <Route path="/homilies" element={<Homilies />} />
              
              {/* Administration & Community Routes */}
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/parish-executive" element={<ParishExecutive />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/new-parishioner" element={<NewParishioner />} />
              
              {/* Legal Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* Sacrament Routes */}
              <Route path="/sacraments/baptism" element={<Baptism />} />
              <Route path="/sacraments/communion" element={<Communion />} />
              <Route path="/sacraments/confirmation" element={<Confirmation />} />
              <Route path="/sacraments/marriage" element={<Marriage />} />
              <Route path="/sacraments/reconciliation" element={<Reconciliation />} />
              <Route path="/sacraments/anointing" element={<Anointing />} />
              <Route path="/sacraments/holy-orders" element={<HolyOrders />} />
              
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
      </SanityProvider>
    </QueryClientProvider>
  );
};

export default App;
