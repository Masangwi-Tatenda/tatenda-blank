
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { cn } from '@/lib/utils';

// Sample events data
const events = [
  {
    id: "1",
    title: 'Sunday Mass',
    description: 'Join us for our regular Sunday worship service.',
    date: '2023-09-10',
    time: '10:00 AM',
    location: 'Main Church',
    image: 'https://images.unsplash.com/photo-1510508242927-8914ddd767e4',
  },
  {
    id: "2",
    title: 'Bible Study Group',
    description: 'Weekly gathering to study and discuss Scripture.',
    date: '2023-09-13',
    time: '6:30 PM',
    location: 'Parish Hall',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
  },
  {
    id: "3",
    title: 'Parish Feast Day Celebration',
    description: 'Annual celebration of our parish patron saint with special Mass and community gathering.',
    date: '2023-09-20',
    time: '11:00 AM',
    location: 'Church Grounds',
    image: 'https://images.unsplash.com/photo-1601926638618-25951e67d681',
  },
];

const EventCard = ({ event, index }) => {
  // Format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <div 
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl",
        "animate-fade-in",
        { "delay-100": index === 1, "delay-200": index === 2 }
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-church-burgundy text-white px-3 py-1 rounded-md text-sm font-semibold">
          {formatDate(event.date)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy mb-2 group-hover:text-church-gold transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-2 text-church-gold" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-2 text-church-gold" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <Link 
          to={`/events/${event.id}`}
          className="inline-block text-church-burgundy font-medium hover:text-church-gold transition-colors duration-300"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const FeaturedEvents = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Upcoming Events" 
          subtitle="Join us for these special gatherings and activities in our parish community."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/events" variant="outline">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
