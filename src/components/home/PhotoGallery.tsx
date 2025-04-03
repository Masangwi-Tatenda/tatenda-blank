
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';

// Sample gallery images
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
    alt: 'Church interior with stained glass',
    caption: 'Beautiful sanctuary during Sunday service'
  },
  {
    src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618',
    alt: 'Community outreach program',
    caption: 'Helping our local community'
  },
  {
    src: 'https://images.unsplash.com/photo-1541960071727-c531398e7494',
    alt: 'Church choir performance',
    caption: 'Our choir during Christmas celebration'
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0',
    alt: 'Youth group activity',
    caption: 'Youth retreat at Mount Sinai'
  },
  {
    src: 'https://images.unsplash.com/photo-1563891799089-a5f8f4b5bd75',
    alt: 'Easter celebration',
    caption: 'Easter Sunday gathering'
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    alt: 'Church exterior',
    caption: 'Our beautiful church building'
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    caption: string;
  }>(null);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };
  
  const handlePrevImage = () => {
    const newIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };
  
  const handleNextImage = () => {
    const newIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };
  
  return (
    <section className="section-padding bg-church-cream">
      <div className="container-custom">
        <SectionTitle 
          title="Parish Photo Gallery" 
          subtitle="Glimpses of our vibrant community life and parish activities"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer hover-lift"
              onClick={() => handleImageClick(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/gallery" 
            className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors duration-300"
          >
            View Full Gallery 
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Lightbox Modal with Navigation */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full animate-fade-in" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute -top-12 right-0 text-white hover:text-church-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Navigation Arrows */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-white hover:text-church-gold transition-colors p-3 bg-black/40 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-white hover:text-church-gold transition-colors p-3 bg-black/40 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-white text-center">
                <p className="font-medium text-lg">{selectedImage.caption}</p>
                <p className="text-white/70 text-sm mt-1">Image {selectedIndex + 1} of {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile Carousel (visible only on small screens) */}
        <div className="md:hidden mt-8">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="rounded-lg overflow-hidden aspect-video cursor-pointer"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 text-church-burgundy" />
            <CarouselNext className="right-2 text-church-burgundy" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
