
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Events from './pages/Events';
import MassSchedulePage from './pages/MassSchedulePage';
import LiturgicalCalendarPage from './pages/LiturgicalCalendarPage';
import { SanityProvider } from './contexts/SanityContext';
import ParishCalendar from './pages/ParishCalendar';
import NotFound from './pages/NotFound';
import EventDetail from './pages/EventDetail';
import BlogDetail from './pages/BlogDetail';
import Blog from './pages/Blog';
import ChurchDocuments from './pages/ChurchDocuments';
import Apologetics from './pages/Apologetics';
import DailyReadings from './pages/DailyReadings';
import PreviousReadings from './pages/PreviousReadings';
import MassRecordings from './pages/MassRecordings';
import Homilies from './pages/Homilies';
import BibleStudy from './pages/BibleStudy';
import CoreFaith from './pages/CoreFaith';
import EducationFormation from './pages/EducationFormation';
import RCIA from './pages/RCIA';
import SpiritualGrowth from './pages/SpiritualGrowth';
import PrayersNovenas from './pages/PrayersNovenas';
import Ministries from './pages/Ministries';
import ParishExecutive from './pages/ParishExecutive';
import Volunteer from './pages/Volunteer';
import Bulletins from './pages/Bulletins';
import SaintsCalendar from './pages/SaintsCalendar';
import Contact from './pages/Contact';
import NewParishioner from './pages/NewParishioner';
import Donate from './pages/Donate';
import Vocations from './pages/Vocations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import IntegratedCalendar from './pages/IntegratedCalendar';

// Import sacrament pages
import Baptism from './pages/sacraments/Baptism';
import Communion from './pages/sacraments/Communion';
import Confirmation from './pages/sacraments/Confirmation';
import Reconciliation from './pages/sacraments/Reconciliation';
import Anointing from './pages/sacraments/Anointing';
import Marriage from './pages/sacraments/Marriage';
import HolyOrders from './pages/sacraments/HolyOrders';

// Import community pages
import CatholicGuilds from './pages/community/CatholicGuilds';
import ParishSections from './pages/community/ParishSections';
import PhotoGallery from './pages/community/PhotoGallery';
import YouthMinistry from './pages/community/YouthMinistry';
import YouthOverview from './pages/community/YouthOverview';
import CYA from './pages/community/youth/CYA';
import MCA from './pages/community/youth/MCA';
import YoungAdults from './pages/community/youth/YoungAdults';

function App() {
  return (
    <SanityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/mass-times" element={<MassSchedulePage />} />
          <Route path="/liturgical-calendar" element={<LiturgicalCalendarPage />} />
          <Route path="/parish-calendar" element={<ParishCalendar />} />
          <Route path="/bulletins" element={<Bulletins />} />
          <Route path="/saints-calendar" element={<SaintsCalendar />} />

          {/* Faith section */}
          <Route path="/core-faith" element={<CoreFaith />} />
          <Route path="/education-formation" element={<EducationFormation />} />
          <Route path="/rcia" element={<RCIA />} />
          <Route path="/bible-study" element={<BibleStudy />} />
          <Route path="/spiritual-growth" element={<SpiritualGrowth />} />
          <Route path="/prayers-novenas" element={<PrayersNovenas />} />

          {/* Resources section */}
          <Route path="/church-documents" element={<ChurchDocuments />} />
          <Route path="/apologetics" element={<Apologetics />} />
          <Route path="/daily-readings" element={<DailyReadings />} />
          <Route path="/previous-readings" element={<PreviousReadings />} />

          {/* Media section */}
          <Route path="/mass-recordings" element={<MassRecordings />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/community/gallery" element={<PhotoGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Community section */}
          <Route path="/community/guilds" element={<CatholicGuilds />} />
          <Route path="/community/sections" element={<ParishSections />} />
          <Route path="/parish-executive" element={<ParishExecutive />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/community/youth" element={<YouthOverview />} />
          <Route path="/community/youth/cya" element={<CYA />} />
          <Route path="/community/youth/mca" element={<MCA />} />
          <Route path="/community/youth/young-adults" element={<YoungAdults />} />
          <Route path="/new-parishioner" element={<NewParishioner />} />
          
          {/* Sacraments section */}
          <Route path="/sacraments/baptism" element={<Baptism />} />
          <Route path="/sacraments/communion" element={<Communion />} />
          <Route path="/sacraments/confirmation" element={<Confirmation />} />
          <Route path="/sacraments/reconciliation" element={<Reconciliation />} />
          <Route path="/sacraments/anointing" element={<Anointing />} />
          <Route path="/sacraments/marriage" element={<Marriage />} />
          <Route path="/sacraments/holy-orders" element={<HolyOrders />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Other essential pages */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/vocations" element={<Vocations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/integrated-calendar" element={<IntegratedCalendar />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SanityProvider>
  );
}

export default App;
