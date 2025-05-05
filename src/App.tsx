
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Events from './pages/Events';
import MassSchedulePage from './pages/MassSchedulePage';
import LiturgicalCalendarPage from './pages/LiturgicalCalendarPage';
import { SanityProvider } from './contexts/SanityContext';

function App() {
  return (
    <SanityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mass-times" element={<MassSchedulePage />} />
          <Route path="/liturgical-calendar" element={<LiturgicalCalendarPage />} />
        </Routes>
      </Router>
    </SanityProvider>
  );
}

export default App;
