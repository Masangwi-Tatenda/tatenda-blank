
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SanityContextProvider from "./contexts/SanityContext";
import ParishCalendar from "./pages/ParishCalendar";
import LiturgicalCalendarPage from "./pages/LiturgicalCalendarPage";
import ParishLeadership from "./pages/ParishLeadership";
import DailyReadings from "./pages/DailyReadings";

function App() {
  return (
    <BrowserRouter>
      <SanityContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/parish-calendar" element={<ParishCalendar />} />
          <Route path="/liturgical-calendar" element={<LiturgicalCalendarPage />} />
          <Route path="/parish-leadership" element={<ParishLeadership />} />
          <Route path="/spiritual-growth/daily-readings" element={<DailyReadings />} />
        </Routes>
      </SanityContextProvider>
    </BrowserRouter>
  );
}

export default App;
