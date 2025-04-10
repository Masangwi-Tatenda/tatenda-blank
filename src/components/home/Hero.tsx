import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { cn } from "@/lib/utils";
import { Calendar, BookOpen } from 'lucide-react';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '@/components/common/SanityImage';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { heroSlides, isLoading } = useSanity();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateContent, setAnimateContent] = useState(true);
  const isMobile = useIsMobile();
  
  // Fallback slides in case Sanity data is not available
  const fallbackSlides = [
    {
      url: 'assets/betania.jpg',
      title: 'Welcome to Musha WeBetania',
      subtitle: 'A Community of Faith, Hope, and Love',
    },
    {
      url: 'assets/jacob-bentzinger-79il9S3c8Q0-unsplash.jpg',
      title: 'Grow in Faith Together',
      subtitle: 'Join us in prayer, worship, and spiritual formation',
    },
    {
      url: 'assets/james-coleman-QHRZv6PIW4s-unsplash.jpg',
      title: 'Discover Catholic Teaching',
      subtitle: 'Explore the richness of Catholic doctrine and tradition',
    },
  ];
  
  // Handle slide transitions
  useEffect(() => {
    // Auto-advance slides
    const timer = setInterval(() => {
      setAnimateContent(false);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === (heroSlides.length || fallbackSlides.length) - 1 ? 0 : prev + 1));
        setAnimateContent(true);
      }, 500);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  if (isLoading) {
    return (
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-church-navy/10">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-church-burgundy font-medium">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="absolute inset-0">
        {/* Use Sanity data if available, otherwise use fallback */}
        {heroSlides.length > 0 ? (
          // Sanity data slides
          heroSlides.map((slide, index) => (
            <div 
              key={slide._key}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="absolute inset-0 w-full h-full">
                <SanityImage 
                  image={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Darker gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          ))
        ) : (
          // Fallback slides
          fallbackSlides.map((slide, index) => (
            <div 
              key={index}
              className={cn(
                "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
              style={{ 
                backgroundImage: `url(${slide.url})`,
              }}
            >
              {/* Darker gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          ))
        )}
      </div>
      
      {/* Hero Content - Centered with animation */}
      <div className="relative h-full flex items-center justify-center text-white container-custom">
        <div className="max-w-3xl text-center px-4">
          <h1 
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700",
              animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
          >
            {heroSlides.length > 0 
              ? heroSlides[currentSlide]?.title 
              : fallbackSlides[currentSlide]?.title}
          </h1>
          <p 
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white transition-all duration-700 delay-100",
              animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            {heroSlides.length > 0 
              ? heroSlides[currentSlide]?.subtitle 
              : fallbackSlides[currentSlide]?.subtitle}
          </p>
          <div 
            className={cn(
              "flex flex-wrap gap-4 justify-center transition-all duration-700 delay-200",
              animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Show CTA button if available in current slide */}
            {heroSlides.length > 0 && heroSlides[currentSlide]?.cta ? (
              <Button 
                href={heroSlides[currentSlide].cta.link} 
                variant="glass" 
                size={isMobile ? "sm" : "md"} 
                animated 
                className="font-medium backdrop-blur-md bg-white/40 border border-white/50 text-white hover:bg-white/50"
              >
                {heroSlides[currentSlide].cta.text}
              </Button>
            ) : (
              <>
                <Button 
                  href="/mass-times" 
                  variant="glass" 
                  size={isMobile ? "sm" : "md"} 
                  animated 
                  className="font-medium backdrop-blur-md bg-white/40 border border-white/50 text-white hover:bg-white/50"
                  icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  Mass Times
                </Button>
                <Button 
                  href="/liturgical-calendar" 
                  variant="outline" 
                  size={isMobile ? "sm" : "md"}
                  animated
                  className="border-2 border-white text-white hover:bg-white/30 font-medium"
                  icon={<BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  Liturgical Calendar
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Slider Navigation - updated with modern style and centered */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center">
        <div className="flex space-x-2 sm:space-x-3 backdrop-blur-md bg-black/40 px-3 sm:px-5 py-2 sm:py-3 rounded-full">
          {(heroSlides.length > 0 ? heroSlides : fallbackSlides).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAnimateContent(false);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setAnimateContent(true);
                }, 300);
              }}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentSlide 
                  ? "bg-church-gold w-6 sm:w-10 h-2 sm:h-3" 
                  : "bg-white/70 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
