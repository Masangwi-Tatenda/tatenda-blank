
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import ChurchCalendar from '@/components/common/ChurchCalendar';
import { Calendar, Clock, Filter, MapPin, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Sunday Mass',
    description: 'Join us for our regular Sunday worship service.',
    date: '2024-06-02',
    time: '10:00 AM',
    location: 'Main Church',
    category: 'Liturgy',
    image: 'https://images.unsplash.com/photo-1510508242927-8914ddd767e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Bible Study Group',
    description: 'Weekly gathering to study and discuss Scripture.',
    date: '2024-06-05',
    time: '6:30 PM',
    location: 'Parish Hall',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Parish Feast Day Celebration',
    description: 'Annual celebration of our parish patron saint with special Mass and community gathering.',
    date: '2024-06-20',
    time: '11:00 AM',
    location: 'Church Grounds',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1601926638618-25951e67d681?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Youth Group Meeting',
    description: 'Regular meeting of the parish youth group with games, discussions, and prayer.',
    date: '2024-06-15',
    time: '7:00 PM',
    location: 'Youth Center',
    category: 'Youth',
    image: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Choir Practice',
    description: 'Weekly rehearsal for the parish choir.',
    date: '2024-06-14',
    time: '6:00 PM',
    location: 'Choir Loft',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'First Communion Classes',
    description: 'Preparation classes for children receiving their First Holy Communion.',
    date: '2024-06-16',
    time: '9:00 AM',
    location: 'Classroom 3',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1486151581593-24ad785bb71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

const Events = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for filtering and searching
  const [events, setEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCalendarView, setShowCalendarView] = useState(false);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(eventsData.map(event => event.category)))];

  // Filter events based on search and category
  useEffect(() => {
    let filtered = eventsData;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
      );
    }
    
    setEvents(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Parish Events</h1>
            </div>
          </div>
        </section>
        
        {/* View Toggle */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="inline-flex rounded-md shadow-sm bg-white">
                <Button
                  variant={showCalendarView ? "outline" : "default"}
                  className={cn(
                    "rounded-r-none",
                    !showCalendarView && "bg-church-burgundy hover:bg-church-burgundy/90"
                  )}
                  onClick={() => setShowCalendarView(false)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  List View
                </Button>
                <Button
                  variant={!showCalendarView ? "outline" : "default"}
                  className={cn(
                    "rounded-l-none",
                    showCalendarView && "bg-church-burgundy hover:bg-church-burgundy/90"
                  )}
                  onClick={() => setShowCalendarView(true)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendar View
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        {showCalendarView ? (
          <section className="py-16">
            <div className="container-custom">
              <SectionTitle 
                title="Parish Calendar" 
                subtitle="View upcoming events and important dates in our parish community."
              />
              
              <Card className="shadow-md p-6 mt-8">
                <CardContent className="p-0">
                  <ChurchCalendar />
                </CardContent>
              </Card>
              
              {/* Upcoming Events - Mini List */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-church-burgundy mb-4">Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <h4 className="font-bold text-church-burgundy text-lg">{event.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      <div className="flex items-center mt-3 text-sm">
                        <Calendar className="w-4 h-4 text-church-gold mr-1" />
                        <span>{event.date}</span>
                        <Clock className="w-4 h-4 text-church-gold ml-3 mr-1" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                    onClick={() => setShowCalendarView(false)}
                  >
                    View All Events
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="container-custom">
              <SectionTitle 
                title="Upcoming Events" 
                subtitle="Join us for these special gatherings and activities in our parish community."
              />
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Events Listing */}
              {events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No events found matching your criteria.</p>
                  <button
                    className="mt-4 text-church-burgundy hover:text-church-gold transition-colors"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Event Card Component
const EventCard = ({ event }) => {
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
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-church-burgundy text-white px-3 py-1 rounded-md text-sm font-semibold">
          {formatDate(event.date)}
        </div>
        <div className="absolute top-4 right-4 bg-church-gold text-church-navy px-3 py-1 rounded-md text-xs font-bold">
          {event.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy mb-2 group-hover:text-church-gold transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-2 text-church-gold" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-2 text-church-gold" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 text-church-burgundy border-church-burgundy hover:bg-church-burgundy/10 w-full"
          asChild
        >
          <Link to={`/events/${event.id}`}>Event Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default Events;
