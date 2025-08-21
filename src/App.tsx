
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { SanityProvider } from "./contexts/SanityContext";
import ParishCalendar from "./pages/ParishCalendar";
import LiturgicalCalendarPage from "./pages/LiturgicalCalendarPage";
import ParishLeadership from "./pages/ParishLeadership";
import DailyReadings from "./pages/DailyReadings";

function App() {
  return (
    <BrowserRouter>
      <SanityProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/parish-calendar" element={<ParishCalendar />} />
          <Route path="/liturgical-calendar" element={<LiturgicalCalendarPage />} />
          <Route path="/parish-leadership" element={<ParishLeadership />} />
          <Route path="/spiritual-growth/daily-readings" element={<DailyReadings />} />
        </Routes>
      </SanityProvider>
    </BrowserRouter>
  );
}

export default App;
