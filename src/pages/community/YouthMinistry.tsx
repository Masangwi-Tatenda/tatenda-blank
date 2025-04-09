
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, UserPlus, Users, CalendarClock, Map, Mail, Phone, Heart, Calendar, BookOpen, Clock, MapPin, ChevronRight, Leaf, Sparkles, Award, Megaphone, Briefcase, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Youth age group programs
const youthPrograms = [
  {
    id: 1,
    name: "Little Saints",
    ageRange: "5-9 years",
    description: "Introducing younger children to basic Catholic teachings through fun activities, crafts, stories, and songs. Focus on building a foundation of faith in a playful environment.",
    schedule: "Every Sunday after 10:00 AM Mass",
    location: "Parish Hall - Room 3",
    coordinator: "Mrs. Sarah Moyo",
    email: "littlesaints@betania.org",
    upcomingEvents: [
      { title: "Bible Heroes Day", date: "April 20, 2025", time: "11:30 AM - 1:00 PM" },
      { title: "Mary's Garden Craft", date: "May 11, 2025", time: "11:30 AM - 1:00 PM" },
    ],
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Leaf
  },
  {
    id: 2,
    name: "Faith Explorers",
    ageRange: "10-13 years",
    description: "Pre-teens learn to explore their faith more deeply, with discussions on scripture, Catholic traditions, and practical applications of faith in daily life. Preparation for confirmation begins at this level.",
    schedule: "Wednesdays, 5:30 PM - 7:00 PM",
    location: "Parish Center - Room 101",
    coordinator: "Mr. David Chigumbu",
    email: "explorers@betania.org",
    upcomingEvents: [
      { title: "Scripture Treasure Hunt", date: "April 16, 2025", time: "5:30 PM - 7:00 PM" },
      { title: "Saints Quiz Night", date: "May 7, 2025", time: "5:30 PM - 7:00 PM" },
    ],
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles
  },
  {
    id: 3,
    name: "Teen Disciples",
    ageRange: "14-17 years",
    description: "For high school students, focusing on deeper faith formation, apologetics, peer ministry, and service projects. Teens are encouraged to take leadership roles and actively participate in parish life.",
    schedule: "Sundays, 5:00 PM - 7:00 PM",
    location: "Youth Center",
    coordinator: "Ms. Lucy Mutasa",
    email: "teendisciples@betania.org",
    upcomingEvents: [
      { title: "Teen Retreat Planning", date: "April 14, 2025", time: "5:00 PM - 7:00 PM" },
      { title: "Service Project: Food Drive", date: "April 21, 2025", time: "4:00 PM - 8:00 PM" },
    ],
    image: "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Award
  },
  {
    id: 4,
    name: "Young Adult Ministry",
    ageRange: "18-35 years",
    description: "For college students and young professionals seeking to deepen their faith and build community. Activities include Bible studies, social events, service opportunities, and discussions on faith and contemporary issues.",
    schedule: "First & Third Fridays, 7:00 PM - 9:00 PM",
    location: "Parish Hall & Various Locations",
    coordinator: "Mr. Thomas Shumba",
    email: "youngadults@betania.org",
    upcomingEvents: [
      { title: "Theology on Tap", date: "April 18, 2025", time: "7:00 PM - 9:00 PM" },
      { title: "Weekend Hiking Retreat", date: "May 2-4, 2025", time: "All Day Event" },
    ],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Briefcase
  }
];

// Special programs and opportunities
const specialPrograms = [
  {
    id: 1,
    name: "Youth Leadership Team",
    description: "A select group of teens and young adults who help plan and execute youth events and programs, developing leadership skills while serving their peers.",
    meetingSchedule: "Monthly, 2nd Sunday, 3:00 PM",
    requirements: "Ages 15-22, active parish participation, application and interview",
    coordinator: "Ms. Lucy Mutasa",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Megaphone
  },
  {
    id: 2,
    name: "Annual Youth Retreat",
    description: "A weekend away focused on spiritual growth, fellowship, and fun. Each retreat has a unique theme centered on some aspect of Catholic faith and features guest speakers, small group discussions, prayer experiences, and recreational activities.",
    nextRetreat: "June 12-14, 2025",
    theme: "Anchored in Christ",
    location: "St. Joseph's Retreat Center",
    coordinator: "Youth Ministry Team",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Heart
  },
  {
    id: 3,
    name: "Mission Trip",
    description: "Annual service opportunity for teens and young adults to put faith into action through community service either locally or abroad. Participants engage in meaningful service work while growing in faith and solidarity.",
    nextTrip: "July 18-25, 2025",
    destination: "Rural Community Outreach",
    ageRequirement: "Ages 16+ (with parent permission for minors)",
    coordinator: "Mr. Thomas Shumba",
    image: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Map
  },
  {
    id: 4,
    name: "Confirmation Preparation",
    description: "A two-year preparation program for teens to receive the Sacrament of Confirmation. Includes catechesis, retreats, service projects, and mentorship from adult parish members.",
    schedule: "Bi-weekly sessions, September through May",
    requirements: "Ages 14-17, Baptized Catholic, First Communion completed",
    coordinator: "Mrs. Esther Moyo, Director of Religious Education",
    image: "https://images.unsplash.com/photo-1581252584736-320aa142cd07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: BookOpen
  }
];

// Upcoming youth events
const upcomingEvents = [
  {
    id: 1,
    title: "Youth Mass & Social",
    description: "Monthly Mass celebrated with youth participation in all liturgical roles, followed by social gathering with food and games.",
    date: "April 11, 2025",
    time: "5:30 PM - 8:00 PM",
    location: "Main Church & Parish Hall",
    ageGroups: ["All Youth"],
    image: "https://images.unsplash.com/photo-1510508242927-8914ddd767e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Teen Bible Study",
    description: "Weekly gathering for teens to dive deeper into Scripture and discuss how it applies to their lives.",
    date: "April 15, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "Youth Center",
    ageGroups: ["Teen Disciples"],
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Young Adult Service Day",
    description: "Local service project helping at the community food bank, followed by reflection and social time.",
    date: "April 18, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Community Food Bank",
    ageGroups: ["Young Adult Ministry"],
    image: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Faith Explorers Game Night",
    description: "Fun night of faith-based games and activities for our pre-teen group.",
    date: "April 23, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "Parish Center - Room 101",
    ageGroups: ["Faith Explorers"],
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Youth Leadership Team Meeting",
    description: "Monthly planning meeting for youth leaders to organize upcoming events and programs.",
    date: "April 13, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Youth Center - Conference Room",
    ageGroups: ["Teen Disciples", "Young Adult Ministry"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Little Saints Easter Celebration",
    description: "Special gathering for our youngest members with Easter-themed crafts, stories, and activities.",
    date: "April 20, 2025",
    time: "11:30 AM - 1:00 PM",
    location: "Parish Hall - Room 3",
    ageGroups: ["Little Saints"],
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const YouthMinistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("programs");
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Youth & Young Adult Programs"
            subtitle="Growing in faith, fellowship, and service"
          />

          <div className="relative overflow-hidden rounded-xl mb-12">
            <div className="h-64 md:h-80 bg-gradient-to-r from-church-burgundy to-church-navy relative">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Youth Ministry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      Faith, Fellowship & Fun
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-6">
                      Our youth and young adult programs create a space for young Catholics to grow in faith, 
                      build meaningful relationships, and discover how to live as disciples of Christ in today's world.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-white text-church-burgundy hover:bg-white/90">
                        <CalendarPlus className="mr-2 h-4 w-4" />
                        View Calendar
                      </Button>
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Get Involved
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-3">
                <TabsTrigger value="programs" className="text-sm md:text-base">
                  <Users className="h-4 w-4 mr-2 hidden sm:inline" />
                  Programs
                </TabsTrigger>
                <TabsTrigger value="events" className="text-sm md:text-base">
                  <CalendarClock className="h-4 w-4 mr-2 hidden sm:inline" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="calendar" className="text-sm md:text-base">
                  <Calendar className="h-4 w-4 mr-2 hidden sm:inline" />
                  Calendar
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="programs" className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-church-burgundy mb-6">Age Group Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {youthPrograms.map((program) => (
                    <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 relative">
                        <img 
                          src={program.image} 
                          alt={program.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-white">
                            <div className="bg-church-burgundy p-2 rounded-full">
                              <program.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-bold">{program.name}</h3>
                              <p className="text-sm text-white/80">{program.ageRange}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="pt-5">
                        <p className="text-gray-700 mb-4">{program.description}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-church-gold mt-1 mr-2" />
                            <span>{program.schedule}</span>
                          </div>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-church-gold mt-1 mr-2" />
                            <span>{program.location}</span>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-4 w-4 text-church-gold mt-1 mr-2" />
                            <span>Contact: {program.coordinator} ({program.email})</span>
                          </div>
                        </div>
                        
                        {program.upcomingEvents && program.upcomingEvents.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-medium text-church-burgundy mb-2">Upcoming Activities:</h4>
                            <ul className="space-y-1">
                              {program.upcomingEvents.map((event, idx) => (
                                <li key={idx} className="text-sm">
                                  <span className="font-medium">{event.title}</span>: {event.date}, {event.time}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="link" 
                          className="px-0 text-church-burgundy hover:text-church-gold"
                        >
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-church-burgundy mb-6">Special Programs & Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specialPrograms.map((program) => (
                    <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 relative">
                        <img 
                          src={program.image} 
                          alt={program.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-white">
                            <div className="bg-church-gold p-2 rounded-full">
                              <program.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold">{program.name}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="pt-5">
                        <p className="text-gray-700 mb-4">{program.description}</p>
                        
                        <div className="space-y-2 text-sm">
                          {program.meetingSchedule && (
                            <div className="flex items-start">
                              <Clock className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Meets:</span> {program.meetingSchedule}</span>
                            </div>
                          )}
                          
                          {program.nextRetreat && (
                            <div className="flex items-start">
                              <Calendar className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Next date:</span> {program.nextRetreat}</span>
                            </div>
                          )}
                          
                          {program.nextTrip && (
                            <div className="flex items-start">
                              <Calendar className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Next trip:</span> {program.nextTrip}</span>
                            </div>
                          )}
                          
                          {program.schedule && (
                            <div className="flex items-start">
                              <Clock className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Schedule:</span> {program.schedule}</span>
                            </div>
                          )}
                          
                          {program.location && (
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Location:</span> {program.location}</span>
                            </div>
                          )}
                          
                          {program.destination && (
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Destination:</span> {program.destination}</span>
                            </div>
                          )}
                          
                          {program.requirements && (
                            <div className="flex items-start">
                              <Info className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Requirements:</span> {program.requirements}</span>
                            </div>
                          )}
                          
                          {program.ageRequirement && (
                            <div className="flex items-start">
                              <Users className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Age requirement:</span> {program.ageRequirement}</span>
                            </div>
                          )}
                          
                          {program.theme && (
                            <div className="flex items-start">
                              <Sparkles className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Theme:</span> {program.theme}</span>
                            </div>
                          )}
                          
                          {program.coordinator && (
                            <div className="flex items-start">
                              <Mail className="h-4 w-4 text-church-gold mt-1 mr-2" />
                              <span><span className="font-medium">Contact:</span> {program.coordinator}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="link" 
                          className="px-0 text-church-burgundy hover:text-church-gold"
                        >
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="bg-church-light-gold/30 p-6 md:p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Get Involved" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-church-burgundy mb-3">Get Involved</h2>
                    <p className="text-gray-700 mb-5">
                      Our youth and young adult programs are always looking for new participants and volunteers! 
                      Parents, guardians, and adults interested in supporting our ministries through volunteering 
                      or chaperoning events are encouraged to reach out.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-church-burgundy mr-3" />
                        <p className="text-gray-700">
                          <span className="font-medium">Email:</span> youth@betania.org
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-church-burgundy mr-3" />
                        <p className="text-gray-700">
                          <span className="font-medium">Phone:</span> (123) 456-7890
                        </p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-church-burgundy mr-3" />
                        <p className="text-gray-700">
                          <span className="font-medium">Office:</span> Youth Ministry Office, Parish Center
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        Volunteer Application
                      </Button>
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                        Registration Forms
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="events" className="space-y-8">
              <h2 className="text-2xl font-bold text-church-burgundy mb-6">Upcoming Youth Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-church-burgundy hover:bg-church-burgundy/90">
                          {formatDate(event.date)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-church-burgundy">{event.title}</CardTitle>
                      <CardDescription>{event.time}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-700 mb-3">{event.description}</p>
                      
                      <div className="flex items-start text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-church-gold mt-1 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-1">
                        {event.ageGroups.map((group, idx) => (
                          <Badge key={idx} variant="outline" className="bg-gray-100">
                            {group}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="link" 
                        className="px-0 text-church-burgundy hover:text-church-gold"
                      >
                        View details <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Link to="/parish-calendar">
                  <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Full Parish Calendar
                  </Button>
                </Link>
              </div>
              
              <section className="mt-12 bg-church-navy/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-church-burgundy mb-4">Planning a Youth Event?</h2>
                <p className="text-gray-700 mb-4">
                  Youth ministry teams and parish groups can request to have youth events added to our parish 
                  calendar. Please submit your event details at least three weeks in advance.
                </p>
                <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                  Submit Event Request
                </Button>
              </section>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-church-burgundy mb-6">Youth & Young Adult Calendar</h2>
                <p className="text-gray-700 mb-6">
                  Our youth and young adult calendar shows all upcoming events, meetings, and activities. 
                  You can filter by age group or program type to find events relevant to you.
                </p>
                
                <div className="border rounded-lg h-96 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Calendar Integration</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-4">
                      This section connects to the Parish Calendar with events filtered for youth and young adults.
                    </p>
                    <Link to="/parish-calendar">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        View Full Calendar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <section className="bg-church-light-gold/30 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-church-burgundy mb-4">Get Calendar Updates</h2>
                <p className="text-gray-700 mb-4">
                  Stay informed about youth and young adult events by subscribing to our calendar updates. 
                  You can receive notifications via email or text message.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                    Subscribe to Updates
                  </Button>
                  <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                    Download Calendar (iCal)
                  </Button>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthMinistry;
