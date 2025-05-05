
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '../common/SanityImage';
import PortableText from '../common/PortableText';
import { useSanityImage } from '@/hooks/use-sanity-image';

const Welcome = () => {
  const { welcomeSection, isLoading } = useSanity();

  // Fallback data if no data from Sanity
  const fallbackWelcome = {
    title: "Welcome to Our Parish",
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Welcome to Musha WeBetania Parish. We are excited to have you join our community of faith. Musha WeBetania is a place where everyone is embraced and encouraged to grow in love, service, and fellowship.',
          }
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Founded in 1965, Musha WeBetania Parish has been a beacon of faith and community. Our parish is dedicated to nurturing both spiritual and physical growth, supporting each member in their journey with Christ.',
          }
        ],
        markDefs: [],
        style: 'normal',
      }
    ],
    mission: "To build a community of faith that celebrates God's presence, forms disciples, and serves others in Christ's name.",
    vision: "To be a beacon of Catholic faith, known for our welcoming spirit, vibrant worship, and compassionate service.",
    quote: "I invite you to join us for Mass and become a part of our parish family. Together, let us grow in faith and service to God and one another.",
    quoteAuthor: "Fr. Nguluve",
    quoteAuthorTitle: "Parish Priest",
    ctaText: "Learn More About Us",
    ctaLink: "/about"
  };

  // Use data from Sanity or fallback
  const content = welcomeSection || fallbackWelcome;

  // Default image if none provided
  const fallbackImageUrl = "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1200&q=80";

  if (isLoading) {
    return (
      <section className="section-padding bg-church-cream">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-church-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                {welcomeSection?.image ? (
                  <SanityImage 
                    image={welcomeSection.image} 
                    alt="Parish Priest" 
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <img 
                    src={fallbackImageUrl}
                    alt="Parish Priest" 
                    className="w-full h-[400px] object-cover"
                  />
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-church-gold rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-church-burgundy rounded-full opacity-20 -z-10"></div>
              
              {/* Priest caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-church-burgundy/80 backdrop-blur-sm p-3 text-white text-center">
                <p className="font-medium">{welcomeSection?.quoteAuthor || "Fr Nguluve"}</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <SectionTitle 
              title={content.title}
              align="left"
            />
            
            <div className="prose prose-lg max-w-none">
              {welcomeSection?.description ? (
                <PortableText value={welcomeSection.description} />
              ) : (
                <>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Welcome to Musha WeBetania Parish. We are excited to have you join our community of faith. Musha WeBetania is a place where everyone is embraced and encouraged to grow in love, service, and fellowship.
                  </p>
                  
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    Founded in 1965, Musha WeBetania Parish has been a beacon of faith and community. Our parish is dedicated to nurturing both spiritual and physical growth, supporting each member in their journey with Christ.
                  </p>
                </>
              )}
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-church-gold mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy">Our Mission</h3>
                    <p className="text-gray-700">{content.mission}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-church-gold mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy">Our Vision</h3>
                    <p className="text-gray-700">{content.vision}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="mt-8 italic border-l-4 border-church-gold pl-4 py-2 text-gray-600">
                "{content.quote}"
                <footer className="mt-2 font-semibold text-church-burgundy">— {content.quoteAuthor}{content.quoteAuthorTitle ? `, ${content.quoteAuthorTitle}` : ''}</footer>
              </blockquote>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={content.ctaLink || "/about"} variant="primary">
                  {content.ctaText || "Learn More About Us"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
