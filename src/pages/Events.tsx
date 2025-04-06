
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import ChurchCalendar from '@/components/common/ChurchCalendar';
import { Calendar, Clock, Filter, MapPin, Search, Tag, Users, ChevronDown, Download, Share2, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSanity } from '@/contexts/SanityContext';
import { toast } from "@/components/ui/use-toast";

// Enhanced events data
const eventsData = [
  {
    id: 1,
    title: 'Sunday Mass',
    description: 'Join us for our regular Sunday worship service with beautiful choir music and a community gathering after the service.',
    date: '2025-06-01',
    time: '10:00 AM - 11:30 AM',
    location: 'Main Church',
    category: 'Liturgy',
    recurring: 'Weekly',
    organizer: 'Parish Liturgy Committee',
    contactEmail: 'liturgy@betania.org',
    attendees: 180,
    featured: true,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1510508242927-8914ddd767e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Mass', 'Worship', 'Community'],
    attachments: [
      { name: 'Sunday Readings', url: '#' },
      { name: 'Hymn List', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Bible Study Group',
    description: 'Weekly gathering to study and discuss Scripture, currently focusing on the Gospel of Matthew. All are welcome, from beginners to advanced Scripture students.',
    date: '2025-06-04',
    time: '6:30 PM - 8:00 PM',
    location: 'Parish Hall',
    category: 'Education',
    recurring: 'Weekly',
    organizer: 'Adult Faith Formation Team',
    contactEmail: 'biblestudies@betania.org',
    attendees: 30,
    featured: false,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Bible', 'Study', 'Faith Formation'],
    attachments: [
      { name: 'Study Guide', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Parish Feast Day Celebration',
    description: 'Annual celebration of our parish patron saint with special Mass, procession, and community gathering featuring traditional food, music, and activities for all ages.',
    date: '2025-06-15',
    time: '11:00 AM - 4:00 PM',
    location: 'Church Grounds',
    category: 'Community',
    recurring: 'Yearly',
    organizer: 'Parish Council',
    contactEmail: 'events@betania.org',
    attendees: 350,
    featured: true,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1601926638618-25951e67d681?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Feast Day', 'Celebration', 'Community'],
    attachments: [
      { name: 'Event Schedule', url: '#' },
      { name: 'Map of Activities', url: '#' }
    ]
  },
  {
    id: 4,
    title: 'Youth Group Meeting',
    description: 'Regular meeting of the parish youth group with games, discussions, prayer, and planning for upcoming service projects and retreats.',
    date: '2025-06-06',
    time: '7:00 PM - 9:00 PM',
    location: 'Youth Center',
    category: 'Youth',
    recurring: 'Bi-weekly',
    organizer: 'Youth Ministry Team',
    contactEmail: 'youth@betania.org',
    attendees: 45,
    featured: false,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Youth', 'Fellowship', 'Faith'],
    attachments: []
  },
  {
    id: 5,
    title: 'Choir Practice',
    description: 'Weekly rehearsal for the parish choir preparing music for upcoming liturgies. New members with musical experience are welcome to join.',
    date: '2025-06-11',
    time: '6:00 PM - 7:30 PM',
    location: 'Choir Loft',
    category: 'Music',
    recurring: 'Weekly',
    organizer: 'Music Ministry',
    contactEmail: 'music@betania.org',
    attendees: 25,
    featured: false,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Music', 'Choir', 'Liturgy'],
    attachments: []
  },
  {
    id: 6,
    title: 'First Communion Classes',
    description: 'Preparation classes for children receiving their First Holy Communion. Parent attendance is required for the first and last sessions.',
    date: '2025-06-07',
    time: '9:00 AM - 11:00 AM',
    location: 'Classroom 3',
    category: 'Education',
    recurring: 'Weekly',
    organizer: 'Religious Education Department',
    contactEmail: 'religiouseducation@betania.org',
    attendees: 20,
    featured: false,
    registrationRequired: true,
    image: 'https://images.unsplash.com/photo-1486151581593-24ad785bb71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['First Communion', 'Sacrament', 'Children'],
    attachments: [
      { name: 'Class Schedule', url: '#' },
      { name: 'Requirements', url: '#' }
    ]
  },
  {
    id: 7,
    title: 'Parish Council Meeting',
    description: 'Monthly meeting of the Parish Council to discuss ongoing projects, parish finances, and upcoming events. Parishioners are welcome to attend as observers.',
    date: '2025-06-09',
    time: '7:00 PM - 9:00 PM',
    location: 'Conference Room',
    category: 'Administration',
    recurring: 'Monthly',
    organizer: 'Parish Council Chair',
    contactEmail: 'council@betania.org',
    attendees: 15,
    featured: false,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Meeting', 'Leadership', 'Planning'],
    attachments: []
  },
  {
    id: 8,
    title: 'Marriage Preparation Course',
    description: 'Required preparation course for couples planning to be married in the Church. The course covers Church teaching on marriage, communication skills, and practical aspects of married life.',
    date: '2025-06-13',
    time: '9:00 AM - 4:00 PM',
    location: 'Parish Hall',
    category: 'Sacramental Preparation',
    recurring: 'Monthly',
    organizer: 'Family Life Ministry',
    contactEmail: 'marriage@betania.org',
    attendees: 12,
    featured: false,
    registrationRequired: true,
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Marriage', 'Preparation', 'Sacrament'],
    attachments: [
      { name: 'Course Outline', url: '#' }
    ]
  },
  {
    id: 9,
    title: 'Food Pantry Distribution',
    description: 'Monthly distribution of food to those in need in our community. Volunteers are always welcome to help with sorting and distribution.',
    date: '2025-06-20',
    time: '9:00 AM - 12:00 PM',
    location: 'Parish Hall',
    category: 'Outreach',
    recurring: 'Monthly',
    organizer: 'Social Concerns Committee',
    contactEmail: 'outreach@betania.org',
    attendees: 50,
    featured: true,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Charity', 'Food', 'Service'],
    attachments: []
  },
  {
    id: 10,
    title: 'Corpus Christi Procession',
    description: 'Annual Eucharistic procession through the neighborhood following the Corpus Christi Mass, with stops at beautifully decorated altars along the route.',
    date: '2025-06-22',
    time: '11:30 AM - 1:00 PM',
    location: 'Starting at Main Church',
    category: 'Liturgy',
    recurring: 'Yearly',
    organizer: 'Liturgy Committee',
    contactEmail: 'liturgy@betania.org',
    attendees: 200,
    featured: true,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1601730010202-87890cf891d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Eucharist', 'Procession', 'Feast Day'],
    attachments: [
      { name: 'Procession Route', url: '#' }
    ]
  },
  {
    id: 11,
    title: 'Men\'s Prayer Breakfast',
    description: 'Monthly gathering for men of the parish featuring breakfast, fellowship, and discussion of faith topics relevant to men\'s spiritual lives.',
    date: '2025-06-14',
    time: '8:00 AM - 9:30 AM',
    location: 'Parish Hall',
    category: 'Prayer',
    recurring: 'Monthly',
    organizer: 'Men\'s Ministry',
    contactEmail: 'mensministry@betania.org',
    attendees: 35,
    featured: false,
    registrationRequired: false,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Men', 'Prayer', 'Fellowship'],
    attachments: []
  },
  {
    id: 12,
    title: 'Vacation Bible School',
    description: 'Annual week-long program for children ages 5-12 featuring Bible stories, crafts, music, games, and snacks. Volunteer teen and adult helpers needed.',
    date: '2025-06-23',
    time: '9:00 AM - 12:00 PM',
    location: 'Parish School',
    category: 'Children',
    recurring: 'Yearly',
    organizer: 'Children\'s Ministry',
    contactEmail: 'vbs@betania.org',
    attendees: 80,
    featured: true,
    registrationRequired: true,
    image: 'https://images.unsplash.com/photo-1526635090919-b5d79696a9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Children', 'Bible', 'Summer'],
    attachments: [
      { name: 'Registration Form', url: '#' },
      { name: 'Daily Schedule', url: '#' }
    ]
  }
];

const getCategoryColor = (category) => {
  const categoryColors = {
    'Liturgy': 'bg-church-burgundy hover:bg-church-burgundy/90',
    'Education': 'bg-blue-600 hover:bg-blue-700',
    'Community': 'bg-green-600 hover:bg-green-700',
    'Youth': 'bg-purple-600 hover:bg-purple-700',
    'Music': 'bg-amber-600 hover:bg-amber-700',
    'Administration': 'bg-gray-600 hover:bg-gray-700',
    'Sacramental Preparation': 'bg-indigo-600 hover:bg-indigo-700',
    'Outreach': 'bg-rose-600 hover:bg-rose-700',
    'Prayer': 'bg-sky-600 hover:bg-sky-700',
    'Children': 'bg-emerald-600 hover:bg-emerald-700',
  };
  
  return categoryColors[category] || 'bg-church-gold hover:bg-church-gold/90';
};

// Helper functions
const getDateObject = (dateStr) => {
  return new Date(dateStr);
};

// Function to format date
const formatDate = (dateStr) => {
  const date = getDateObject(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
};

// Function to check if event is upcoming
const isUpcoming = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = getDateObject(dateStr);
  return eventDate >= today;
};

// Function to check if event is today
const isToday = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = getDateObject(dateStr);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate.getTime() === today.getTime();
};

// Event Card Component with Enhanced Features
const EventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in relative">
      {event.featured && (
        <div className="absolute top-0 right-0 z-10 bg-church-gold text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          Featured
        </div>
      )}
      
      {isToday(event.date) && (
        <div className="absolute top-0 left-0 z-10 bg-church-burgundy text-white text-xs font-bold px-2 py-1 rounded-br-lg">
          Today
        </div>
      )}
      
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
        <Badge variant="default" className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
          {event.category}
        </Badge>
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
          
          {event.recurring && (
            <div className="flex items-center text-gray-500">
              <Calendar size={16} className="mr-2 text-church-gold" />
              <span>Recurring: {event.recurring}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-500">
            <Users size={16} className="mr-2 text-church-gold" />
            <span>Expected: {event.attendees} people</span>
          </div>
        </div>
        
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {event.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="mt-5 flex space-x-2">
          <Button 
            variant="default" 
            size="sm" 
            className="text-white bg-church-burgundy hover:bg-church-burgundy/90 flex-1"
            asChild
          >
            <Link to={`/events/${event.id}`}>View Details</Link>
          </Button>
          
          {event.registrationRequired && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Register
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register for {event.title}</DialogTitle>
                  <DialogDescription>
                    Fill out this form to register for the event on {formatDate(event.date)}
                  </DialogDescription>
                </DialogHeader>
                
                <form className="space-y-4 py-4" onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Registration Successful",
                    description: `You have registered for ${event.title}`,
                  });
                }}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <input 
                        id="name" 
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <input 
                        id="email" 
                        type="email" 
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <input 
                        id="phone" 
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="attendees">Number of Attendees</Label>
                      <Select defaultValue="1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Send me reminders about this event</Label>
                    </div>
                    
                    <Button type="submit" className="bg-church-burgundy hover:bg-church-burgundy/90">
                      Complete Registration
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

// Event Detail Component
const EventDetails = ({ event, onClose }) => {
  if (!event) return null;
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-church-burgundy">{event.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={event.image} alt={event.title} className="w-full h-auto" />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About This Event</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
              
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              {event.attachments && event.attachments.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Event Materials</h3>
                  <div className="space-y-2">
                    {event.attachments.map((attachment, index) => (
                      <a 
                        key={index} 
                        href={attachment.url} 
                        className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2 text-church-burgundy" />
                        <span>{attachment.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3 pt-4">
                {event.registrationRequired && (
                  <Button 
                    size="sm" 
                    className="bg-church-burgundy hover:bg-church-burgundy/90"
                  >
                    Register Now
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                  onClick={() => {
                    // Add to calendar functionality
                    toast({
                      title: "Added to Calendar",
                      description: "This event has been added to your calendar",
                    });
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast({
                      title: "Link Copied",
                      description: "Event link copied to clipboard",
                    });
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                  onClick={() => {
                    toast({
                      title: "Reminder Set",
                      description: "We'll remind you about this event",
                    });
                  }}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Remind Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-church-burgundy mt-0.5" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-gray-600">{formatDate(event.date)}</p>
                    <p className="text-gray-600">{event.time}</p>
                    {event.recurring && (
                      <p className="text-gray-600 text-sm italic mt-1">Recurring: {event.recurring}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-church-burgundy mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-5 h-5 mr-3 text-church-burgundy mt-0.5" />
                  <div>
                    <p className="font-medium">Attendees</p>
                    <p className="text-gray-600">Expected: {event.attendees} people</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-medium">Organized by</p>
                  <p className="text-gray-600">{event.organizer}</p>
                  <a 
                    href={`mailto:${event.contactEmail}`} 
                    className="text-church-burgundy hover:underline text-sm"
                  >
                    {event.contactEmail}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-church-light-gold rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
              <p className="text-sm text-gray-700 mb-3">
                For questions about this event, please contact the organizer directly or our parish office.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Events = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for filtering and searching
  const [events, setEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState('upcoming');
  const [showCalendarView, setShowCalendarView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(eventsData.map(event => event.category)))];
  
  // Get unique tags
  const allTags = eventsData.flatMap(event => event.tags || []);
  const uniqueTags = ['All', ...Array.from(new Set(allTags))];

  // Filter events based on search, category, and timeframe
  useEffect(() => {
    let filtered = eventsData;
    
    // Filter by timeframe
    if (selectedTimeframe === 'upcoming') {
      filtered = filtered.filter(event => isUpcoming(event.date));
    } else if (selectedTimeframe === 'today') {
      filtered = filtered.filter(event => isToday(event.date));
    } else if (selectedTimeframe === 'featured') {
      filtered = filtered.filter(event => event.featured);
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(event => event.tags && event.tags.includes(selectedTag));
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term) ||
        (event.tags && event.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }
    
    // Sort events by date (earliest first)
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    setEvents(filtered);
  }, [searchTerm, selectedCategory, selectedTag, selectedTimeframe]);

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
              <div className="text-center max-w-3xl px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Parish Events</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Discover upcoming events, celebrations, and gatherings in our parish community
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* View Toggle */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
              
              <div className="flex gap-2">
                <Tabs 
                  defaultValue="upcoming" 
                  value={selectedTimeframe}
                  onValueChange={setSelectedTimeframe}
                  className="w-auto"
                >
                  <TabsList className="grid grid-cols-3 w-auto">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                  </TabsList>
                </Tabs>
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
                <h3 className="text-2xl font-bold text-church-burgundy mb-4">Highlighted Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {events.filter(event => event.featured).slice(0, 3).map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <h4 className="font-bold text-church-burgundy text-lg">{event.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{event.description}</p>
                      <div className="flex items-center mt-3 text-sm">
                        <Calendar className="w-4 h-4 text-church-gold mr-1" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm">
                        <Clock className="w-4 h-4 text-church-gold mr-1" />
                        <span>{event.time}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mt-3 border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                      </Button>
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
              
              {/* Event subscription */}
              <div className="mt-16 bg-church-light-gold rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-church-burgundy mb-3">Stay Updated</h3>
                    <p className="text-gray-700 mb-4">
                      Receive notifications for upcoming events, schedule changes, and special announcements.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="email-updates" />
                        <Label htmlFor="email-updates">Email Updates</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="sms-updates" />
                        <Label htmlFor="sms-updates">SMS Notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="calendar-sync" />
                        <Label htmlFor="calendar-sync">Sync with My Calendar</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg mb-4">Subscribe to Updates</h4>
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Subscription Successful",
                        description: "You're now subscribed to parish event updates",
                      });
                    }}>
                      <div className="space-y-2">
                        <Label htmlFor="sub-name">Name</Label>
                        <input id="sub-name" className="w-full p-2 border rounded-md" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sub-email">Email</Label>
                        <input id="sub-email" type="email" className="w-full p-2 border rounded-md" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sub-phone">Phone (optional)</Label>
                        <input id="sub-phone" className="w-full p-2 border rounded-md" />
                      </div>
                      <Button type="submit" className="w-full bg-church-burgundy hover:bg-church-burgundy/90">
                        Subscribe
                      </Button>
                    </form>
                  </div>
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
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2 relative">
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
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Filter className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="truncate">
                            {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                          </span>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category === 'All' ? 'All Categories' : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="relative">
                    <Select
                      value={selectedTag}
                      onValueChange={setSelectedTag}
                    >
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="truncate">
                            {selectedTag === 'All' ? 'All Tags' : selectedTag}
                          </span>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueTags.map((tag) => (
                          <SelectItem key={tag} value={tag}>
                            {tag === 'All' ? 'All Tags' : tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {(searchTerm || selectedCategory !== 'All' || selectedTag !== 'All') && (
                  <div className="mt-4 flex items-center">
                    <div className="text-sm text-gray-500 mr-4">
                      {events.length} results found
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                        setSelectedTag('All');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Events Listing */}
              {events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md mt-12">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
                  <p className="text-gray-500 mb-6">We couldn't find any events matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedTag('All');
                      setSelectedTimeframe('upcoming');
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
              
              {/* Event Organizer Information */}
              <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">Planning an Event?</h3>
                    <p className="text-gray-700 mb-6">
                      Parish groups and ministries can request to have their events listed in our parish calendar. 
                      Contact the parish office with your event details or use our online form.
                    </p>
                    <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                      Submit an Event
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-church-burgundy">Contact Information</h4>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <span className="font-medium w-24">Phone:</span>
                        <span>(+123) 456-7890</span>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="font-medium w-24">Email:</span>
                        <a href="mailto:events@betania.org" className="text-church-burgundy hover:underline">
                          events@betania.org
                        </a>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="font-medium w-24">Office Hours:</span>
                        <span>Mon-Fri, 9:00 AM - 4:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Show detailed event modal if an event is selected */}
        {selectedEvent && (
          <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
