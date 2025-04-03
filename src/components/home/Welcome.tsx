
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const Welcome = () => {
  return (
    <section className="section-padding bg-church-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="assets/bishoop.jpg"
                  alt="Parish Priest" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-church-gold rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-church-burgundy rounded-full opacity-20 -z-10"></div>
              
              {/* Priest caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-church-burgundy/80 backdrop-blur-sm p-3 text-white text-center">
                <p className="font-medium">Fr Nguluve</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <SectionTitle 
              title="Welcome to Our Parish"
              align="left"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to Musha WeBetania Parish. We are excited to have you join our community of faith. Musha WeBetania is a place where everyone is embraced and encouraged to grow in love, service, and fellowship.
              </p>
              
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Founded in 1965, Musha WeBetania Parish has been a beacon of faith and community. Our parish is dedicated to nurturing both spiritual and physical growth, supporting each member in their journey with Christ.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-church-gold mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy">Our Mission</h3>
                    <p className="text-gray-700">To build a community of faith that celebrates God's presence, forms disciples, and serves others in Christ's name.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-church-gold mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy">Our Vision</h3>
                    <p className="text-gray-700">To be a beacon of Catholic faith, known for our welcoming spirit, vibrant worship, and compassionate service.</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="mt-8 italic border-l-4 border-church-gold pl-4 py-2 text-gray-600">
                "I invite you to join us for Mass and become a part of our parish family. Together, let us grow in faith and service to God and one another."
                <footer className="mt-2 font-semibold text-church-burgundy">— Fr. Nguluve, Parish Priest</footer>
              </blockquote>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about" variant="primary">
                  Learn More About Us
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
