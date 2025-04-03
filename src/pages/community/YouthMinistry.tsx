
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Award, HeartHandshake, Music, Book, ChevronRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const youthGroups = [
  {
    id: 'mca',
    name: 'Missionary Childhood Association (MCA)',
    ageRange: '1-12 years',
    description: 'Introducing children to the Catholic faith through age-appropriate activities, games, and basic catechism.',
    image: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    leaderPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    coordinator: 'Mrs. Mary Chikwanha',
    meetingTime: 'Sundays after 8:30 AM Mass',
    meetingLocation: 'Parish Hall - Room 3',
    missionStatement: 'To nurture the seeds of faith in our youngest parishioners, fostering a lifelong relationship with Christ through age-appropriate engagement and activities.',
    activities: [
      'Bible stories and activities',
      'Songs and games',
      'Basic prayers and Catholic traditions',
      'Seasonal celebrations',
      'Service projects appropriate for young children'
    ]
  },
  {
    id: 'cya',
    name: 'Junior Youth (CYA)',
    ageRange: '13-17 years',
    description: 'Nurturing the faith of teenagers through fellowship, discipleship, and service opportunities.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    leaderPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    coordinator: 'Mr. David Zimuto',
    meetingTime: 'Fridays at 5:30 PM',
    meetingLocation: 'Parish Youth Center',
    missionStatement: 'To provide a Christ-centered environment where teenagers can grow in faith, develop genuine friendships, and discover their unique gifts in service to the Church and community.',
    activities: [
      'Weekly faith formation meetings',
      'Social events and games',
      'Community service projects',
      'Annual retreats',
      'Participation in diocesan youth events'
    ]
  },
  {
    id: 'young-adults',
    name: 'Young Adults',
    ageRange: '18-35 years',
    description: 'Supporting young adults in their faith journey through deeper study, fellowship, and leadership development.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    leaderPhoto: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    coordinator: 'Mr. Peter Chitimbe',
    meetingTime: 'Wednesdays at 7:00 PM',
    meetingLocation: 'Parish Hall - Main Room',
    missionStatement: 'To empower young adults to live authentically Catholic lives in the modern world, integrating faith with career, relationships, and life decisions through a supportive community of peers.',
    activities: [
      'Bible study and faith discussions',
      'Social events and community building',
      'Service and outreach initiatives',
      'Career and vocational discernment',
      'Leadership development',
      'Spiritual retreats'
    ]
  }
];

const upcomingEvents = [
  {
    title: 'Youth Retreat',
    date: 'June 15-17, 2024',
    group: 'Junior Youth (CYA)',
    location: "St. Mary's Retreat Center"
  },
  {
    title: 'Mission Trip',
    date: 'July 10-15, 2024',
    group: 'Young Adults',
    location: 'Mhondoro Mission'
  },
  {
    title: 'MCA Fun Day',
    date: 'May 25, 2024',
    group: 'Missionary Childhood Association',
    location: 'Parish Grounds'
  }
];

const YouthMinistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Youth Ministry</h1>
                <p className="text-xl text-white/80">Forming young disciples through faith, fellowship, and service</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Youth Groups Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Youth Groups" 
              subtitle="Growing in faith at every age"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {youthGroups.map((group) => (
                <Card key={group.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <span className="inline-block bg-church-burgundy text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Ages: {group.ageRange}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-church-gold mr-4">
                        <img 
                          src={group.leaderPhoto} 
                          alt={`${group.coordinator}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy">{group.name}</h3>
                        <p className="text-sm text-gray-600">{group.coordinator}, Coordinator</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-church-burgundy mb-2">Mission Statement:</h4>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{group.missionStatement}</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-church-gold mr-2" />
                        <span className="text-sm text-gray-700"><span className="font-semibold">Meets:</span> {group.meetingTime}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-church-gold mr-2" />
                        <span className="text-sm text-gray-700"><span className="font-semibold">Location:</span> {group.meetingLocation}</span>
                      </div>
                    </div>
                    
                    <details className="mt-2 text-sm">
                      <summary className="font-medium text-church-burgundy cursor-pointer">View Activities</summary>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        {group.activities.slice(0, 3).map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                        {group.activities.length > 3 && (
                          <li>And {group.activities.length - 3} more activities...</li>
                        )}
                      </ul>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Upcoming Youth Events" 
              subtitle="Join us for these special activities"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-church-burgundy mb-2">{event.title}</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-church-gold mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-church-gold mr-2" />
                        <span>{event.group}</span>
                      </div>
                      <div className="flex items-center">
                        <HeartHandshake className="h-5 w-5 text-church-gold mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/events" className="inline-flex items-center">
                  View All Events <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Get Involved Section */}
        <section className="py-16 bg-church-burgundy text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
              <p className="text-lg text-white/90 mb-8">
                Our youth ministry is always looking for young people to participate as well as adult volunteers to help mentor and guide our youth. If you are interested in joining our youth ministry either as a participant or volunteer, please contact us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-church-burgundy" asChild>
                  <Link to="/contact">Contact Youth Ministry</Link>
                </Button>
                <Button className="bg-church-gold text-church-navy hover:bg-church-gold/90" asChild>
                  <Link to="/events">Upcoming Youth Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthMinistry;
