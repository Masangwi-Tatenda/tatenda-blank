
import React, { useState, useEffect, useRef } from 'react';
import Button from '../common/Button';
import { cn } from '@/lib/utils';
import { Calendar, BookOpen, Heart, Users, Church } from 'lucide-react';

// Updated hero images with high-quality Catholic church images
const heroImages = [
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  
  // Handle slide transitions
  useEffect(() => {
    // Auto-advance slides
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500); // Match this with the CSS transition duration
    }, 7000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Animate content when slide changes
  useEffect(() => {
    if (titleRef.current && subtitleRef.current && buttonsRef.current && hubRef.current) {
      // Reset animations
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(20px)';
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(20px)';
      buttonsRef.current.style.opacity = '0';
      buttonsRef.current.style.transform = 'translateY(20px)';
      hubRef.current.style.opacity = '0';
      
      // Apply animations with delays
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 500);
      
      setTimeout(() => {
        if (buttonsRef.current) {
          buttonsRef.current.style.opacity = '1';
          buttonsRef.current.style.transform = 'translateY(0)';
        }
      }, 700);
      
      setTimeout(() => {
        if (hubRef.current) {
          hubRef.current.style.opacity = '1';
        }
      }, 900);
    }
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
            style={{ 
              backgroundImage: `url(${image.url})`,
            }}
          >
            {/* Darker gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          </div>
        ))}
      </div>
      
      {/* Hero Content - Centered */}
      <div className="relative h-full flex items-center justify-center text-white container-custom">
        <div className="max-w-3xl text-center px-4">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-700 opacity-0"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
          >
            {heroImages[currentSlide].title}
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-6 text-white transition-all duration-700 opacity-0"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            {heroImages[currentSlide].subtitle}
          </p>
          <div 
            ref={buttonsRef} 
            className="flex flex-wrap gap-5 justify-center transition-all duration-700 opacity-0"
          >
            <Button 
              href="/mass-times" 
              variant="glass" 
              size="lg" 
              animated 
              className="font-medium backdrop-blur-md bg-white/40 border border-white/50 text-white hover:bg-white/50"
              icon={<Calendar className="w-5 h-5" />}
            >
              Mass & Worship
            </Button>
            <Button 
              href="/core-faith" 
              variant="outline" 
              size="lg"
              animated
              className="border-2 border-white text-white hover:bg-white/30 font-medium"
              icon={<BookOpen className="w-5 h-5" />}
            >
              Core Faith & Doctrine
            </Button>
          </div>
          
          {/* Faith Hub Navigation */}
          <div 
            ref={hubRef}
            className="mt-16 opacity-0 transition-opacity duration-1000"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <a 
                href="/spiritual-growth" 
                className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/20 group"
              >
                <Heart className="w-8 h-8 text-church-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm text-center">Spiritual Growth</span>
              </a>
              
              <a 
                href="/education-formation" 
                className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/20 group"
              >
                <BookOpen className="w-8 h-8 text-church-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm text-center">Education & Formation</span>
              </a>
              
              <a 
                href="/community/youth" 
                className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/20 group"
              >
                <Users className="w-8 h-8 text-church-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm text-center">Community Groups</span>
              </a>
              
              <a 
                href="/vocations" 
                className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/20 group"
              >
                <Church className="w-8 h-8 text-church-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm text-center">Vocations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider Navigation - updated with modern style and centered */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex space-x-3 backdrop-blur-md bg-black/40 px-5 py-3 rounded-full">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentSlide 
                  ? "bg-church-gold w-10 h-3" 
                  : "bg-white/70 w-3 h-3 hover:bg-white"
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
