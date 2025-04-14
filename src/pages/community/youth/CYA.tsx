
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, BookOpen, MapPin, Heart, ChevronLeft, Phone, Mail, Clock, Music, Award, Brush } from 'lucide-react';

const CYA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample CYA programs data
  const programs = [
    {
      title: "Teen Faith Formation",
      description: "Weekly sessions focused on Catholic teachings, scripture, and moral formation for teenagers.",
      schedule: "Sundays, 5:00 PM - 6:30 PM",
      location: "Youth Center",
      ageGroups: ["Ages 13-17"]
    },
    {
      title: "Confirmation Preparation",
      description: "Two-year program preparing teens to receive the Sacrament of Confirmation and deepen their commitment to the faith.",
      schedule: "Wednesdays, 6:00 PM - 7:30 PM (September-May)",
      location: "Parish Center",
      ageGroups: ["Ages 14-17"]
    },
    {
      title: "Youth Choir",
      description: "Musical group that leads worship at the monthly Youth Mass and special liturgical celebrations.",
      schedule: "Thursdays, 6:00 PM - 7:30 PM",
      location: "Church Choir Room",
      ageGroups: ["Ages 13-17"]
    },
    {
      title: "Service Corps",
      description: "Teens engage in regular community service projects both within the parish and in the wider community.",
      schedule: "Monthly service projects",
      location: "Various locations",
      ageGroups: ["Ages 13-17"]
    },
    {
      title: "Teen Bible Study",
      description: "Small group exploration of scripture with a focus on applying biblical teachings to teen life.",
      schedule: "Every other Tuesday, 6:30 PM - 8:00 PM",
      location: "Youth Center",
      ageGroups: ["Ages 13-17"]
    }
  ];

  // Sample leadership team
  const leadershipTeam = [
    {
      name: "Ms. Lucy Mutasa",
      role: "CYA Coordinator",
      email: "cya@betania.org",
      phone: "(123) 456-7893"
    },
    {
      name: "Mr. James Zvobgo",
      role: "Confirmation Program Leader",
      email: "confirmation@betania.org",
      phone: "(123) 456-7894"
    },
    {
      name: "Miss Grace Mugabe",
      role: "Youth Music Minister",
      email: "youthmusic@betania.org",
      phone: "(123) 456-7895"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Youth Mass & Social",
      date: "May 12, 2025",
      time: "5:30 PM - 8:00 PM",
      location: "Main Church & Youth Center",
      description: "Monthly Mass celebrated with youth participation, followed by social gathering with food and games."
    },
    {
      title: "Teen Service Project",
      date: "May 19, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Community Food Bank",
      description: "Helping sort and distribute food at the local community food bank."
    },
    {
      title: "Confirmation Retreat",
      date: "June 7-9, 2025",
      time: "All Day",
      location: "St. Joseph's Retreat Center",
      description: "Weekend retreat for confirmation candidates focused on prayer, reflection, and community building."
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
            <div className="h-64 md:h-80 bg-gradient-to-r from-church-burgundy to-red-700 relative">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Catholic Youth Association" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white p-2 rounded-full">
                        <Star className="h-6 w-6 text-church-burgundy" />
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Catholic Youth Association
                      </h1>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl mb-4">
                      Empowering teens to live their Catholic faith with purpose and passion
                    </p>
                    <span className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-church-burgundy">
                      Ages 13–17 years
                    </span>
                    <blockquote className="mt-4 italic text-white/90 border-l-4 border-white/50 pl-4">
                      "Let no one despise your youth, but set the believers an example in speech and conduct, in love, in faith, in purity."
                      <footer className="text-right font-medium mt-1">— 1 Timothy 4:12</footer>
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
                  <h2 className="text-2xl font-bold text-church-burgundy mb-4">About CYA</h2>
                  <p className="text-gray-700 mb-4">
                    The Catholic Youth Association (CYA) at Musha WeBetania Parish is a vibrant 
                    community where teenagers deepen their faith, develop leadership skills, and 
                    form meaningful friendships. We provide a welcoming environment where teens 
                    can ask questions, explore their Catholic identity, and grow as disciples of Christ.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our programs blend catechesis, prayer experiences, service opportunities, and 
                    social activities to nurture the whole person—mind, body, and spirit. We recognize 
                    that adolescence is a crucial time of identity formation, and we walk alongside 
                    teens as they discover who God is calling them to be.
                  </p>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Mission</h3>
                  <div className="bg-church-burgundy/10 rounded-lg p-4 mb-6">
                    <p className="text-gray-700">
                      To empower teenagers to grow in their Catholic faith, develop their gifts and talents, 
                      build authentic community, and respond to Christ's call to service, so they may become 
                      lifelong disciples and leaders in the Church and world.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Focus Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <BookOpen className="h-8 w-8 text-church-burgundy mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Catechesis</h4>
                      <p className="text-sm text-gray-700">
                        Learning and living Catholic teachings through engaging, relevant formation.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Heart className="h-8 w-8 text-church-burgundy mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Prayer & Worship</h4>
                      <p className="text-sm text-gray-700">
                        Developing personal prayer lives and participating in liturgical celebrations.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Users className="h-8 w-8 text-church-burgundy mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Service & Leadership</h4>
                      <p className="text-sm text-gray-700">
                        Putting faith into action through service projects and leadership development.
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
                                <Clock className="h-4 w-4 text-church-burgundy" />
                                <span>{program.schedule}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-church-burgundy" />
                                <span>{program.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {program.ageGroups.map((age, i) => (
                                <Badge key={i} variant="outline" className="bg-church-burgundy/10">
                                  {age}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-church-burgundy/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-bold text-church-burgundy mb-3">How to Join CYA</h3>
                    <p className="text-gray-700 mb-4">
                      All parish teens ages 13-17 are welcome to join our CYA programs!
                    </p>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-700 mb-6">
                      <li>Complete the teen registration form (with parent/guardian signature)</li>
                      <li>Return completed forms to the CYA Coordinator or Parish Office</li>
                      <li>Attend any of our weekly or special events</li>
                    </ol>
                    <div className="flex gap-4">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        Registration Form
                      </Button>
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                        Permission Forms
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
                            <div className="bg-church-burgundy/10 rounded-lg w-16 h-16 flex flex-col items-center justify-center text-center">
                              <span className="text-xs text-gray-600">{event.date.split(',')[0].split(' ')[0]}</span>
                              <span className="text-xl font-bold text-church-burgundy">{event.date.split(',')[0].split(' ')[1]}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-church-burgundy mb-1">{event.title}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-church-burgundy" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-church-burgundy" />
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
                    {[7, 8, 9, 10, 11, 12].map((item) => (
                      <div key={item} className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                        <img 
                          src={`https://images.unsplash.com/photo-${1590000000000 + item * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                          alt={`CYA Activity ${item}`}
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
              <div className="bg-church-burgundy/10 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Leadership Team</h3>
                <div className="space-y-4">
                  {leadershipTeam.map((leader, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-church-burgundy mb-1">{leader.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{leader.role}</p>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-church-burgundy" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-church-burgundy" />
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Youth Ministry Teams */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Ministry Teams</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Music className="h-5 w-5 text-church-burgundy mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Youth Choir</h4>
                      <p className="text-sm text-gray-600">Lead worship through music ministry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-church-burgundy mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Leadership Team</h4>
                      <p className="text-sm text-gray-600">Help plan and lead youth events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-church-burgundy mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Prayer Team</h4>
                      <p className="text-sm text-gray-600">Coordinate prayer activities and retreats</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brush className="h-5 w-5 text-church-burgundy mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Creative Arts Team</h4>
                      <p className="text-sm text-gray-600">Express faith through art, drama, and media</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Annual Events */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Annual Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-burgundy/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-burgundy" />
                    </div>
                    <span>Teen Retreat Weekend (Fall)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-burgundy/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-burgundy" />
                    </div>
                    <span>Confirmation Ceremony (Spring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-burgundy/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-burgundy" />
                    </div>
                    <span>Christmas Pageant & Caroling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-burgundy/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-burgundy" />
                    </div>
                    <span>Youth Summer Camp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-church-burgundy/10 p-1 mt-0.5">
                      <Calendar className="h-3 w-3 text-church-burgundy" />
                    </div>
                    <span>Easter Sunrise Service</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Media */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Connect With Us</h3>
                <p className="text-gray-700 mb-4">
                  Follow our youth activities and stay updated:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-church-burgundy rounded-full w-8 h-8 flex items-center justify-center">
                      <i className="text-white">I</i>
                    </div>
                    <span>@BetaniaYouth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-church-burgundy rounded-full w-8 h-8 flex items-center justify-center">
                      <i className="text-white">F</i>
                    </div>
                    <span>Betania Parish Youth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-church-burgundy rounded-full w-8 h-8 flex items-center justify-center">
                      <i className="text-white">W</i>
                    </div>
                    <span>CYA WhatsApp Group</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                  Join Our Communication List
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

export default CYA;
