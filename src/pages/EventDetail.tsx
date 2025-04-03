import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ChevronLeft, ArrowRight, User, Users, Calendar as CalendarIcon, ArrowLeft } from 'lucide-react';
import GoogleMap from '@/components/common/GoogleMap';
import SocialShare from '@/components/common/SocialShare';

interface EventDetail {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  image: string;
  description: string;
  organizer: string;
  registrationLink?: string;
  eventType: string;
  audience: string;
}

const events: EventDetail[] = [
  {
    "id": "1",
    "title": "Sunday Mass",
    "date": "30/03/25",
    "startTime": "7:00 AM",
    "endTime": "11:00 AM",
    "location": {
      "name": "Musha WeBetania Parish",
      "address": "123 Church Avenue, Harare",
      "latitude": -17.829222,
      "longitude": 31.052222
    },
    "image": "https://images.unsplash.com/photo-1574812276790-d7d5d8102069?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Join us every Sunday for the celebration of the Holy Eucharist, a time of worship, prayer, and community. The Sunday Mass is the central liturgical event of the week, where we gather as a parish family to deepen our relationship with Christ and each other.</p>
    <p>The Mass includes:</p>
    <ul>
      <li>Scripture readings and reflection</li>
      <li>The celebration of the Eucharist</li>
      <li>Community prayers and intentions</li>
      <li>Sacred hymns and music</li>
      <li>Offering of the gifts and Eucharistic procession</li>
    </ul>
    <p>All are welcome to attend and participate in the Mass, regardless of your background or faith journey. Come and experience the warmth of our community and the presence of Christ in the Eucharist.</p>
    <p>Children’s liturgy is also available for young ones during Mass. For more information about Sunday Mass, please contact the parish office.</p>`,
    "organizer": "St. Augustine's Parish",
    "registrationLink": "https://example.com/sunday-mass",
    "eventType": "Religious",
    "audience": "All Parishioners"
  },
  {
    "id": "2",
    "title": "Bible Study Group",
    "date": "Every Thursday",
    "startTime": "6:30 PM",
    "endTime": "8:00 PM",
    "location": {
      "name": "St. Paul's Parish Hall",
      "address": "123 Bible Road, Harare",
      "latitude": -17.820222,
      "longitude": 31.053555
    },
    "image": "https://images.unsplash.com/photo-1571325015476-49c8b0de0735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Join us for a spiritually enriching Bible Study Group every Thursday. We come together to reflect on the Word of God and engage in discussions that deepen our understanding of the Scriptures. Whether you're new or experienced, everyone is welcome to grow together in faith.</p>
    <ul>
      <li>Reading and discussion of the weekly Scripture</li>
      <li>In-depth reflection on God's message</li>
      <li>Prayer and community sharing</li>
      <li>Strengthening our Catholic faith and understanding</li>
    </ul>
    <p>This is a great opportunity to connect with others in your faith community while learning and growing spiritually.</p>`,
    "organizer": "St. Paul's Parish",
    "registrationLink": "https://example.com/bible-study",
    "eventType": "Religious",
    "audience": "All Parishioners"
  },
  {
    "id": "3",
    "title": "Parish Feast Day Celebration",
    "date": "15/06/25",
    "startTime": "10:00 AM",
    "endTime": "2:00 PM",
    "location": {
      "name": "St. Mary's Parish Grounds",
      "address": "456 Holy Street, Bulawayo",
      "latitude": -20.150222,
      "longitude": 28.598888
    },
    "image": "https://images.unsplash.com/photo-1515380764255-98f9c0f2d5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Join us for the annual celebration of our parish’s feast day! This event honors the patron saint of our parish and is a time to gather as a community in prayer, worship, and fellowship.</p>
    <ul>
      <li>Mass in honor of our patron saint</li>
      <li>Community celebration with food and games</li>
      <li>Live performances and entertainment</li>
      <li>Raffle with exciting prizes</li>
      <li>Family-friendly activities for all ages</li>
    </ul>
    <p>Don’t miss out on this beautiful day of celebration and thanksgiving. Bring your family and friends!</p>`,
    "organizer": "St. Mary's Parish",
    "registrationLink": "https://example.com/parish-feast-day",
    "eventType": "Religious",
    "audience": "All Parishioners"
  },
  {
    "id": "4",
    "title": "Youth Group Meeting",
    "date": "Every Friday",
    "startTime": "5:30 PM",
    "endTime": "7:00 PM",
    "location": {
      "name": "St. John's Youth Center",
      "address": "789 Youth Avenue, Chitungwiza",
      "latitude": -18.000500,
      "longitude": 31.070122
    },
    "image": "https://images.unsplash.com/photo-1600363463584-cda45d02e6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Our Youth Group meets every Friday to explore our Catholic faith, discuss relevant topics, and enjoy fellowship with other young people. It's a place for youth to grow in their spiritual journey and deepen their connection with Christ.</p>
    <ul>
      <li>Group discussions on faith and life</li>
      <li>Prayer and spiritual reflection</li>
      <li>Games and activities for building community</li>
      <li>Opportunities for service and outreach</li>
    </ul>
    <p>Join us for fun, faith, and friendship!</p>`,
    "organizer": "St. John's Youth Group",
    "registrationLink": "https://example.com/youth-group",
    "eventType": "Religious",
    "audience": "Young Catholics (Ages 13-25)"
  },
  {
    "id": "5",
    "title": "Choir Practice",
    "date": "Every Wednesday",
    "startTime": "7:00 PM",
    "endTime": "8:30 PM",
    "location": {
      "name": "St. Cecilia's Choir Room",
      "address": "123 Music Lane, Harare",
      "latitude": -17.830411,
      "longitude": 31.053211
    },
    "image": "https://images.unsplash.com/photo-1516258936142-c2c93e41ef9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Come and join our choir for practice every Wednesday evening! Together, we sing praises to the Lord and prepare for upcoming liturgies, making every Mass a more beautiful and meaningful experience.</p>
    <ul>
      <li>Rehearsing hymns and Mass songs</li>
      <li>Vocal training and musical growth</li>
      <li>Building camaraderie through music and faith</li>
    </ul>
    <p>No prior musical experience is necessary—just a love for music and serving the Church! Come help us lift our voices in praise.</p>`,
    "organizer": "St. Cecilia's Choir",
    "registrationLink": "https://example.com/choir-practice",
    "eventType": "Religious",
    "audience": "All Parishioners with an interest in music"
  },
  {
    "id": "6",
    "title": "First Communion Classes",
    "date": "Every Saturday",
    "startTime": "10:00 AM",
    "endTime": "12:00 PM",
    "location": {
      "name": "St. Peter's Parish Hall",
      "address": "101 Church Street, Masvingo",
      "latitude": -20.078712,
      "longitude": 30.810120
    },
    "image": "https://images.unsplash.com/photo-1560748830-7ec3ad679772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "description": `<p>Help prepare your child for the sacrament of First Holy Communion by enrolling in our First Communion Classes. These classes, held every Saturday, provide a comprehensive understanding of the sacrament and its significance in the Catholic faith.</p>
    <ul>
      <li>Teaching children the importance of the Eucharist</li>
      <li>Prayer and spiritual preparation for the sacrament</li>
      <li>Fun activities to help children engage in the faith</li>
      <li>Rehearsal for the First Communion Mass</li>
    </ul>
    <p>Parents are encouraged to attend the classes with their children and participate in their faith journey.</p>`,
    "organizer": "St. Peter's Religious Education",
    "registrationLink": "https://example.com/first-communion",
    "eventType": "Religious",
    "audience": "Children preparing for First Holy Communion"
  },
   
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchEvent = () => {
      setLoading(true);
      setTimeout(() => {
        const foundEvent = events.find(e => e.id === id) || null;
        setEvent(foundEvent);
        setLoading(false);
      }, 300);
    };
    
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-church-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-6">The event you're looking for could not be found or may have been removed.</p>
            <Button asChild>
              <Link to="/events" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        <section className="relative h-64 md:h-96 lg:h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-black/80"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="container-custom">
              <Link 
                to="/events" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to All Events
              </Link>
              <span className="ml-2 px-3 py-1 bg-church-burgundy/80 text-white text-xs font-medium rounded-full mb-4 inline-block">
                {event.eventType}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{event.title}</h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-white/90">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.startTime} - {event.endTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none" style={{ lineHeight: 1.6 }}>
                  <div dangerouslySetInnerHTML={{ __html: event.description }} />
                </div>
                
                {event.registrationLink && (
                  <div className="mt-8">
                    <Button size="lg" className="bg-church-burgundy hover:bg-church-burgundy/90" asChild>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        Register for This Event
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Event Organizer</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-church-burgundy" />
                    </div>
                    <div>
                      <h4 className="font-bold">{event.organizer}</h4>
                      <p className="text-gray-600">Contact the parish office for more information</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <SocialShare
                    url={window.location.href}
                    title={event.title}
                    description={`Join us for ${event.title} on ${formattedDate} at ${event.location.name}`}
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Event Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CalendarIcon className="h-5 w-5 text-church-gold mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Date & Time</h4>
                        <p className="text-gray-700">{formattedDate}</p>
                        <p className="text-gray-700">{event.startTime} - {event.endTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-church-gold mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-gray-700">{event.location.name}</p>
                        <p className="text-gray-700">{event.location.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-church-gold mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Who Should Attend</h4>
                        <p className="text-gray-700">{event.audience}</p>
                      </div>
                    </div>
                  </div>
                  
                  {event.registrationLink && (
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register Now
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  <h3 className="text-lg font-bold p-4 bg-white border-b">Event Location</h3>
                  <GoogleMap 
                    address={event.location.address} 
                    latitude={event.location.latitude}
                    longitude={event.location.longitude}
                    height="250px"
                  />
                  <div className="bg-white p-4">
                    <p className="text-gray-700 font-medium">{event.location.name}</p>
                    <p className="text-gray-600">{event.location.address}</p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${event.location.latitude},${event.location.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-church-burgundy hover:underline text-sm inline-block mt-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <h3 className="text-lg font-bold p-4 border-b">Upcoming Events</h3>
                  <div className="divide-y divide-gray-200">
                    {events
                      .filter(e => e.id !== event.id)
                      .map((otherEvent) => (
                        <Link 
                          key={otherEvent.id} 
                          to={`/events/${otherEvent.id}`}
                          className="block p-4 hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-bold text-gray-900">{otherEvent.title}</h4>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>
                              {new Date(otherEvent.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="p-4 border-t">
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/events">View All Events</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
