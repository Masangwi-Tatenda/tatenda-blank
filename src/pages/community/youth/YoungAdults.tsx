
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Book, MapPin, Heart, ChevronLeft, Phone, Mail, Clock, Coffee, Globe, Briefcase, Lightbulb } from 'lucide-react';

const YoungAdults = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample Young Adults programs data
  const programs = [
    {
      title: "Faith Sharing Group",
      description: "Weekly gathering for young adults to discuss scripture, Church teachings, and topics relevant to living the faith in today's world.",
      schedule: "Tuesdays, 7:00 PM - 8:30 PM",
      location: "Parish Center - Conference Room",
      ageGroups: ["Ages 18-35"]
    },
    {
      title: "Theology on Tap",
      description: "Monthly social gathering with speakers discussing theological topics in a relaxed atmosphere.",
      schedule: "First Friday of each month, 7:00 PM - 9:00 PM",
      location: "Varies (local venues)",
      ageGroups: ["Ages 21-35"]
    },
    {
      title: "Lectio Divina Prayer Group",
      description: "Guided meditation on scripture using the ancient prayer practice of Lectio Divina.",
      schedule: "Every other Thursday, 7:00 PM - 8:00 PM",
      location: "Adoration Chapel",
      ageGroups: ["Ages 18-35"]
    },
    {
      title: "Service Outreach Team",
      description: "Coordinating and participating in local service projects, addressing needs in our community.",
      schedule: "Monthly projects (varies)",
      location: "Various community sites",
      ageGroups: ["Ages 18-35"]
    },
    {
      title: "Vocational Discernment Series",
      description: "Quarterly events focused on discernment of vocation—marriage, single life, priesthood, or religious life.",
      schedule: "Quarterly events",
      location: "Parish Center",
      ageGroups: ["Ages 18-35"]
    }
  ];

  // Sample leadership team
  const leadershipTeam = [
    {
      name: "Mr. Thomas Shumba",
      role: "Young Adult Ministry Coordinator",
      email: "youngadults@betania.org",
      phone: "(123) 456-7896"
    },
    {
      name: "Ms. Ruth Sibanda",
      role: "Faith Formation Leader",
      email: "ruthsibanda@betania.org",
      phone: "(123) 456-7897"
    },
    {
      name: "Mr. Daniel Moyo",
      role: "Service & Outreach Coordinator",
      email: "danielmoyo@betania.org",
      phone: "(123) 456-7898"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Theology on Tap: Faith in the Workplace",
      date: "May 3, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "The Local Pub & Restaurant",
      description: "Guest speaker discussing how to live your faith authentically in professional settings."
    },
    {
      title: "Weekend Hiking Retreat",
      date: "May 17-18, 2025",
      time: "Saturday 8:00 AM - Sunday 5:00 PM",
      location: "Mountain Trails Retreat Center",
      description: "Overnight retreat combining outdoor adventure, prayer, and fellowship for young adults."
    },
    {
      title: "Soup Kitchen Service Project",
      date: "May 24, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "City Soup Kitchen",
      description: "Preparing and serving meals to those in need in our community."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb and Back Link */}
          <div className="mb-6">
            <Link to="/community/youth" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Youth & Young Adults
            </Link>
          </div>

          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="h-64 md:h-80 bg-gradient-to-r from-church-gold to-amber-600 relative">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Young Adult Ministry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white p-2 rounded-full">
                        <Users className="h-6 w-6 text-church-gold" />
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Young Adult Ministry
                      </h1>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl mb-4">
                      Helping young adults grow in faith, fellowship, and purpose
                    </p>
                    <span className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-amber-600">
                      Ages 18–35 years
                    </span>
                    <blockquote className="mt-4 italic text-white/90 border-l-4 border-white/50 pl-4">
                      "They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles."
                      <footer className="text-right font-medium mt-1">— Isaiah 40:31</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-4">About Our Young Adult Ministry</h2>
                  <p className="text-gray-700 mb-4">
                    The Young Adult Ministry at Musha WeBetania Parish is a community of Catholics in their 
                    late teens, twenties, and thirties seeking to deepen their relationship with Christ and 
                    the Church while navigating the unique challenges and opportunities of young adulthood.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether you're in college, beginning your career, single, or married, our ministry provides 
                    meaningful ways to grow in faith, build authentic community, and live out your Catholic 
                    calling. We offer spiritual, social, and service opportunities designed specifically for 
                    this important stage of life.
                  </p>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Mission</h3>
                  <div className="bg-church-gold/10 rounded-lg p-4 mb-6">
                    <p className="text-gray-700">
                      To accompany young adults on their faith journey by creating a welcoming community where they can 
                      encounter Christ, deepen their Catholic identity, build meaningful relationships, discern their 
                      vocation, and discover how to live their faith authentically in all aspects of life.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Core Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Book className="h-8 w-8 text-church-gold mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Authentic Faith</h4>
                      <p className="text-sm text-gray-700">
                        Exploring and living the richness of Catholic tradition in today's world.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Users className="h-8 w-8 text-church-gold mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Genuine Community</h4>
                      <p className="text-sm text-gray-700">
                        Building relationships that support and challenge each other in faith and life.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Globe className="h-8 w-8 text-church-gold mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Mission & Service</h4>
                      <p className="text-sm text-gray-700">
                        Using our gifts to serve the Church and meet the needs of our community.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="programs" className="mt-6">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6">Our Programs</h2>
                  
                  <div className="space-y-6">
                    {programs.map((program, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-church-burgundy mb-2">{program.title}</h3>
                            <p className="text-gray-700 mb-4">{program.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-church-gold" />
                                <span>{program.schedule}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-church-gold" />
                                <span>{program.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {program.ageGroups.map((age, i) => (
                                <Badge key={i} variant="outline" className="bg-church-gold/10">
                                  {age}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-church-gold/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-bold text-church-burgundy mb-3">Get Involved</h3>
                    <p className="text-gray-700 mb-4">
                      All young adults ages 18-35 are welcome to join our ministry! No registration required.
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-church-gold/20 p-1 mt-0.5">
                          <Heart className="h-3 w-3 text-church-gold" />
                        </div>
                        <span>Simply show up to any event that interests you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-church-gold/20 p-1 mt-0.5">
                          <Heart className="h-3 w-3 text-church-gold" />
                        </div>
                        <span>Sign up for our email list to stay informed about upcoming events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-church-gold/20 p-1 mt-0.5">
                          <Heart className="h-3 w-3 text-church-gold" />
                        </div>
                        <span>Join our WhatsApp group for community updates and conversations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-church-gold/20 p-1 mt-0.5">
                          <Heart className="h-3 w-3 text-church-gold" />
                        </div>
                        <span>Speak with any of our team members about deeper involvement</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        Join Our Email List
                      </Button>
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                        WhatsApp Group
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="events" className="mt-6">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6">Upcoming Events</h2>
                  
                  <div className="space-y-4 mb-8">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="shrink-0">
                            <div className="bg-church-gold/10 rounded-lg w-16 h-16 flex flex-col items-center justify-center text-center">
                              <span className="text-xs text-gray-600">{event.date.split(',')[0].split(' ')[0]}</span>
                              <span className="text-xl font-bold text-church-gold">{event.date.split(',')[0].split(' ')[1]}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-church-burgundy mb-1">{event.title}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-church-gold" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-church-gold" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Link to="/parish-calendar">
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                        <Calendar className="mr-2 h-4 w-4" />
                        View Full Calendar
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6">Gallery</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[13, 14, 15, 16, 17, 18].map((item) => (
                      <div key={item} className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                        <img 
                          src={`https://images.unsplash.com/photo-${1590000000000 + item * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                          alt={`Young Adult Activity ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link to="/community/gallery">
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                        View All Photos
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Leadership Section */}
              <div className="bg-church-gold/10 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Leadership Team</h3>
                <div className="space-y-4">
                  {leadershipTeam.map((leader, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-church-burgundy mb-1">{leader.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{leader.role}</p>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-church-gold" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-church-gold" />
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Focus Areas */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Life Stage Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Book className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">College Students</h4>
                      <p className="text-sm text-gray-600">Support for faith life during studies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Young Professionals</h4>
                      <p className="text-sm text-gray-600">Faith in the workplace and career</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Singles</h4>
                      <p className="text-sm text-gray-600">Living faith fully in single life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Newly Married</h4>
                      <p className="text-sm text-gray-600">Support for early marriage years</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Special Events */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Signature Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-gold/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-gold" />
                    </div>
                    <span>Quarterly Overnight Retreats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-gold/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-gold" />
                    </div>
                    <span>Annual Pilgrimage Trip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-gold/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-gold" />
                    </div>
                    <span>Advent & Lenten Series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-gold/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-gold" />
                    </div>
                    <span>Summer Service Project Week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-gold/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-gold" />
                    </div>
                    <span>Monthly Theology on Tap</span>
                  </li>
                </ul>
              </div>
              
              {/* Vocational Discernment */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Vocational Discernment</h3>
                <p className="text-gray-700 mb-4">
                  Our ministry supports young adults in discerning God's call in their lives:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Marriage</h4>
                      <p className="text-sm text-gray-600">Preparation for Catholic marriage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Priesthood & Religious Life</h4>
                      <p className="text-sm text-gray-600">Support for those considering religious vocations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-church-gold mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Single Life</h4>
                      <p className="text-sm text-gray-600">Living faithfully as a single Catholic</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-church-gold text-church-gold hover:bg-church-gold/10">
                  Vocations Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YoungAdults;
