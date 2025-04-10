import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { cn } from '@/lib/utils';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '../common/SanityImage';
import { format, parseISO } from 'date-fns';

const EventCard = ({ event, index }) => {
  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Date to be announced';
    const date = parseISO(dateStr);
    return format(date, 'EEEE, MMMM d, yyyy');
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
        {event.mainImage ? (
          <SanityImage 
            image={event.mainImage} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-church-burgundy/20 flex items-center justify-center">
            <Calendar className="h-12 w-12 text-church-burgundy/50" />
          </div>
        )}
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
          {event.startTime && (
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-2 text-church-gold" />
              <span>{event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}</span>
            </div>
          )}
          
          {event.location && (
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-2 text-church-gold" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
        
        <Link 
          to={`/events/${event.slug.current}`}
          className="inline-block text-church-burgundy font-medium hover:text-church-gold transition-colors duration-300"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const FeaturedEvents = () => {
  const { featuredEvents, isLoading, error } = useSanity();

  // Create fallback events if needed
  const fallbackEvents = [
    {
      _id: "1",
      title: 'Sunday Mass',
      description: 'Join us for our regular Sunday worship service.',
      date: '2025-04-14',
      startTime: '10:00 AM',
      location: 'Main Church',
      slug: { current: '#' },
    },
    {
      _id: "2",
      title: 'Bible Study Group',
      description: 'Weekly gathering to study and discuss Scripture.',
      date: '2025-04-17',
      startTime: '6:30 PM',
      location: 'Parish Hall',
      slug: { current: '#' },
    },
    {
      _id: "3",
      title: 'Parish Feast Day Celebration',
      description: 'Annual celebration of our parish patron saint with special Mass and community gathering.',
      date: '2025-04-30',
      startTime: '11:00 AM',
      location: 'Church Grounds',
      slug: { current: '#' },
    },
  ];

  const eventsToDisplay = featuredEvents.length > 0 ? featuredEvents : fallbackEvents;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Upcoming Events" 
          subtitle="Join us for these special gatherings and activities in our parish community."
        />
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">{error}</p>
            <p>Please check back later for our upcoming events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsToDisplay.map((event, index) => (
              <EventCard key={event._id} event={event} index={index} />
            ))}
          </div>
        )}
        
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
