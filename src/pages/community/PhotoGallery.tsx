
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sample gallery data
const galleryCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'events', name: 'Parish Events' },
  { id: 'sacraments', name: 'Sacraments' },
  { id: 'community', name: 'Community' },
  { id: 'services', name: 'Services' },
];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1601926638618-25951e67d681?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Parish Feast Day Celebration',
    category: 'events',
    date: 'June 20, 2023',
    description: 'Annual celebration of our parish patron saint.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1515126610754-40f9c9fad774?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'First Communion Ceremony',
    category: 'sacraments',
    date: 'May 5, 2023',
    description: 'Children receiving their First Holy Communion.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1510508242927-8914ddd767e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunday Mass',
    category: 'services',
    date: 'Every Sunday',
    description: 'Our community gathering for Sunday worship.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Baptism Service',
    category: 'sacraments',
    date: 'March 12, 2023',
    description: 'Welcoming new members into our faith community through Baptism.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1542769102-7e8a5c5b4395?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Youth Group Gathering',
    category: 'community',
    date: 'April 8, 2023',
    description: 'Our parish youth enjoying fellowship and spiritual activities.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1543363136-3fdb62e11be9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Parish Food Drive',
    category: 'community',
    date: 'February 18, 2023',
    description: 'Parishioners collecting food for those in need in our community.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Bible Study Group',
    category: 'community',
    date: 'Weekly',
    description: 'Our parish Bible study group exploring Scripture together.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Easter Vigil',
    category: 'services',
    date: 'April 16, 2023',
    description: 'The beautiful Easter Vigil service celebrating Christ\'s resurrection.'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Parish Wedding',
    category: 'sacraments',
    date: 'May 27, 2023',
    description: 'A joyful celebration of the Sacrament of Marriage in our parish.'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1552511962-0cb8a492e1a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Altar Servers',
    category: 'services',
    date: 'Ongoing',
    description: 'Our dedicated altar servers assisting in the liturgy.'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1565726206220-c866ee659b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Church Choir',
    category: 'community',
    date: 'Ongoing',
    description: 'Our parish choir enhancing our worship through music.'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1493993779196-9c7a70f4e07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Parish Picnic',
    category: 'events',
    date: 'July 8, 2023',
    description: 'Annual parish picnic bringing our community together for food and fun.'
  },
];

const PhotoGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);
  
  // Open lightbox for a specific image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Navigate to previous image in lightbox
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next image in lightbox
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529367207863-f1523a2f2467?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Parish Photo Gallery</h1>
                <p className="text-xl text-white/80">Capturing moments of faith, fellowship, and community</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16">
          <div className="container-custom">
            <SectionTitle 
              title="Browse Our Gallery" 
              subtitle="Explore images from our parish life and events"
            />
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((category) => (
                <Button 
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={cn(
                    selectedCategory === category.id 
                      ? "bg-church-burgundy hover:bg-church-burgundy/90" 
                      : "border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}

                  className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                    <p className="text-white/80 text-sm">{image.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
                <Button 
                  className="mt-4"
                  onClick={() => setSelectedCategory('all')}
                >
                  View All Photos
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            {/* Previous button */}
            <button 
              className="absolute left-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft size={40} />
            </button>
            
            {/* Next button */}
            <button 
              className="absolute right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight size={40} />
            </button>
            
            {/* Image */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
              <div className="relative max-w-5xl w-full h-auto max-h-[80vh] overflow-hidden">
                <img 
                  src={filteredImages[currentImageIndex].src} 
                  alt={filteredImages[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Caption */}
              <div className="mt-4 text-center text-white max-w-3xl">
                <h3 className="text-xl font-bold">{filteredImages[currentImageIndex].alt}</h3>
                <p className="text-white/80 mt-1">{filteredImages[currentImageIndex].description}</p>
                <p className="text-white/60 text-sm mt-2">{filteredImages[currentImageIndex].date}</p>
              </div>
              
              {/* Image counter */}
              <div className="absolute bottom-4 text-white/60 text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        )}
        
        {/* Submit Photos CTA */}
        <section className="py-16 bg-church-burgundy/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Share Your Photos</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have photos from parish events or activities? We'd love to include them in our gallery! 
                Submit your high-quality images to help us document our parish's vibrant community life.
              </p>
              <Button asChild size="lg">
                <a href="mailto:photos@mushwebetania.org">Submit Your Photos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;
