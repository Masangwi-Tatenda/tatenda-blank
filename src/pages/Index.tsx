
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import Welcome from '@/components/home/Welcome';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import PhotoGallery from '@/components/home/PhotoGallery';
import WeeklyScripture from '@/components/home/WeeklyScripture';
import ChurchStats from '@/components/home/ChurchStats';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow page-transition">
        <Hero />
        <QuickLinks />
        <Welcome />
        <FeaturedEvents />
        <PhotoGallery />
        <WeeklyScripture />
        <ChurchStats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
