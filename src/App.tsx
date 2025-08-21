
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { SanityProvider } from "./contexts/SanityContext";
import ParishCalendar from "./pages/ParishCalendar";
import LiturgicalCalendarPage from "./pages/LiturgicalCalendarPage";
import ParishLeadership from "./pages/ParishLeadership";
import DailyReadings from "./pages/DailyReadings";
import Contact from "./pages/Contact";
import History from "./pages/History";
import MassSchedule from "./pages/MassSchedule";
import Homilies from "./pages/Homilies";
import Prayers from "./pages/Prayers";
import Ministries from "./pages/Ministries";
import NotFound from "./pages/NotFound";
// Sacrament pages
import Baptism from "./pages/sacraments/Baptism";
import Communion from "./pages/sacraments/Communion";
import Confirmation from "./pages/sacraments/Confirmation";
import Reconciliation from "./pages/sacraments/Reconciliation";
import Marriage from "./pages/sacraments/Marriage";
import HolyOrders from "./pages/sacraments/HolyOrders";
import Anointing from "./pages/sacraments/Anointing";

function App() {
  return (
    <BrowserRouter>
      <SanityProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/mass-schedule" element={<MassSchedule />} />
          <Route path="/parish-calendar" element={<ParishCalendar />} />
          <Route path="/liturgical-calendar" element={<LiturgicalCalendarPage />} />
          <Route path="/parish-leadership" element={<ParishLeadership />} />
          <Route path="/spiritual-growth/daily-readings" element={<DailyReadings />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/ministries" element={<Ministries />} />
          
          {/* Sacrament routes */}
          <Route path="/baptism" element={<Baptism />} />
          <Route path="/eucharist" element={<Communion />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/reconciliation" element={<Reconciliation />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/holy-orders" element={<HolyOrders />} />
          <Route path="/anointing" element={<Anointing />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SanityProvider>
    </BrowserRouter>
  );
}

export default App;
