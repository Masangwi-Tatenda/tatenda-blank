
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { cn } from '@/lib/utils';
import { Clock, Calendar, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';

const MassTimes = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608158137211-5684e2bae3fd")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Mass Times & Sacraments</h1>
            </div>
          </div>
        </section>
        
        {/* Schedule Section */}
        <section className="py-16">
          <div className="container-custom">
            <SectionTitle 
              title="Mass Schedule" 
              subtitle="Join us in celebrating the Holy Eucharist."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Weekday Masses */}
              <ScheduleCard 
                title="Weekday Masses"
                times={[
                  { day: 'Monday', time: '6:30 AM' },
                  { day: 'Tuesday', time: '6:30 AM' },
                  { day: 'Wednesday', time: '6:30 AM' },
                  { day: 'Thursday', time: '6:30 AM' },
                  { day: 'Friday', time: '6:30 AM' },
                ]}
                color="bg-church-navy"
              />
              
              {/* Sunday Masses */}
              <ScheduleCard 
                title="Weekend Masses"
                times={[
                  { day: 'Saturday (Vigil)', time: '6:00 PM' },
                  { day: 'Sunday', time: '7:00 AM' },
                  { day: 'Sunday', time: '9:00 AM' },
                ]}
                color="bg-church-burgundy"
              />
              
              {/* Holy Days */}
              <ScheduleCard 
                title="Holy Days & Special Masses"
                times={[
                  { day: 'Christmas Eve', time: '8:00 PM' },
                  { day: 'Christmas Day', time: '9:00 AM' },
                  { day: 'New Year\'s Day', time: '10:00 AM' },
                  { day: 'Ash Wednesday', time: '7:00 AM & 6:00 PM' },
                  { day: 'Holy Thursday', time: '7:00 PM' },
                  { day: 'Good Friday', time: '3:00 PM' },
                  { day: 'Easter Vigil', time: '8:00 PM' },
                  { day: 'Easter Sunday', time: '7:00 AM & 9:00 AM' },
                  { day: 'Pentecost', time: '9:00 AM' },
                ]}
                color="bg-church-gold"
                textColor="text-church-navy"
              />
            </div>
            
            <div className="mt-12 bg-gray-100 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-church-burgundy mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Special Liturgical Celebrations</h3>
                  <p className="text-gray-700">
                    Please check our bulletin or announcements for additional special liturgical celebrations such as Easter Triduum, Pentecost, and other feast days. These may have different schedules from our regular Mass times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sacraments Section */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Sacraments" 
              subtitle="The seven sacraments are outward signs of inward grace, instituted by Christ for our sanctification."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SacramentCard 
                title="Baptism"
                description="The gateway to life in the Spirit and the door which gives access to the other sacraments."
                details="Baptisms are celebrated on Sundays at 1:30 PM. Parents are required to attend a baptism preparation class. Please contact the parish office to schedule."
                image="https://images.unsplash.com/photo-1516424716442-a934a2469d48"
                link="/sacraments/baptism"
              />
              
              <SacramentCard 
                title="Eucharist"
                description="The source and summit of the Christian life, in which Christ himself is present."
                details="First Communion preparation is part of our Religious Education program. Adults seeking First Communion should inquire about RCIA."
                image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
                link="/sacraments/first-communion"
              />
              
              <SacramentCard 
                title="Confirmation"
                description="The sacrament that completes baptismal grace and strengthens us for our Christian mission."
                details="Confirmation preparation is a two-year program typically beginning in 8th grade. Adults seeking Confirmation should inquire about RCIA."
                image="https://images.unsplash.com/photo-1563891217861-7924b471afb1"
                link="/sacraments/confirmation"
              />
              
              <SacramentCard 
                title="Reconciliation"
                description="The sacrament of healing that reconciles us with God and the Church."
                details="Confessions are heard on Saturdays from 3:30 PM to 4:30 PM, and by appointment."
                image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                link="/sacraments/reconciliation"
              />
              
              <SacramentCard 
                title="Anointing of the Sick"
                description="A sacrament of healing that provides strength, peace, and courage to those who are ill."
                details="Please contact the parish office to arrange for the Anointing of the Sick for yourself or a loved one."
                image="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
                link="/sacraments/anointing"
              />
              
              <SacramentCard 
                title="Matrimony"
                description="A covenant by which a man and a woman establish a partnership for the whole of life."
                details="Couples planning to marry should contact the parish at least six months before their intended wedding date to begin preparation."
                image="https://images.unsplash.com/photo-1551854319-acefede53666"
                link="/sacraments/matrimony"
              />
            </div>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-church-burgundy mb-4">Church Location</h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-church-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Musha WeBetania Parish</h3>
                    <p className="text-gray-600">123 Parish Road<br />City, Country 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-church-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Parish Office Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 italic">Google Maps embed would appear here</p>
                {/* In a real implementation, you would embed a Google Map here */}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Schedule Card Component
const ScheduleCard = ({ title, times, color, textColor = "text-white" }) => {
  return (
    <div className={cn("rounded-lg overflow-hidden shadow-lg animate-fade-in", color)}>
      <div className="p-6">
        <h3 className={cn("text-2xl font-bold mb-4", textColor)}>{title}</h3>
        <ul className="space-y-2">
          {times.map((item, index) => (
            <li key={index} className={cn("flex justify-between items-center py-2 border-b border-white/20", textColor)}>
              <span className="font-medium">{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Sacrament Card Component
const SacramentCard = ({ title, description, details, image, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy mb-2">{title}</h3>
        <p className="text-gray-700 italic mb-3">{description}</p>
        <div className="border-t border-gray-200 pt-3">
          <p className="text-gray-600 text-sm mb-4">{details}</p>
          <a 
            href={link} 
            className="text-church-burgundy font-medium hover:text-church-gold transition-colors duration-300 inline-flex items-center"
          >
            Learn More <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MassTimes;
