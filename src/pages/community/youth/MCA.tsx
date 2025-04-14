
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { School, Calendar, Users, BookOpen, MapPin, Heart, ChevronLeft, Phone, Mail, Clock } from 'lucide-react';

const MCA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample MCA programs data
  const programs = [
    {
      title: "Sunday Faith Formation",
      description: "Age-appropriate lessons that teach Catholic values, prayers, and Bible stories in a fun, interactive way.",
      schedule: "Every Sunday after 10:00 AM Mass",
      location: "Parish Hall - Rooms 1 & 2",
      ageGroups: ["Ages 2-5", "Ages 6-9", "Ages 10-12"]
    },
    {
      title: "Holy Childhood Society",
      description: "Children learn about and support mission work worldwide through prayer, educational activities, and small fundraising projects.",
      schedule: "Third Sunday of each month",
      location: "Parish Hall",
      ageGroups: ["Ages 5-12"]
    },
    {
      title: "First Communion Preparation",
      description: "Two-year program preparing children to receive the Sacrament of First Holy Communion.",
      schedule: "Wednesdays, 4:30-5:30 PM (September-May)",
      location: "Parish Center",
      ageGroups: ["Ages 7-9"]
    },
    {
      title: "Children's Liturgy of the Word",
      description: "During Sunday Mass, children are invited to hear and reflect on the Gospel reading in age-appropriate language.",
      schedule: "During 10:00 AM Sunday Mass",
      location: "Parish Hall - Room 3",
      ageGroups: ["Ages 4-10"]
    },
    {
      title: "Vacation Bible School",
      description: "Week-long summer program with games, crafts, music, and Bible lessons centered on a Catholic theme.",
      schedule: "One week in July (9:00 AM - 12:00 PM)",
      location: "Parish grounds",
      ageGroups: ["Ages 5-12"]
    }
  ];

  // Sample leadership team
  const leadershipTeam = [
    {
      name: "Mrs. Sarah Moyo",
      role: "MCA Coordinator",
      email: "mca@betania.org",
      phone: "(123) 456-7890"
    },
    {
      name: "Mr. David Chigumbu",
      role: "Sunday Faith Formation Leader",
      email: "formation@betania.org",
      phone: "(123) 456-7891"
    },
    {
      name: "Mrs. Maria Takawira",
      role: "First Communion Preparation",
      email: "communion@betania.org",
      phone: "(123) 456-7892"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Children's Mass & Blessing",
      date: "May 15, 2025",
      time: "10:00 AM",
      location: "Main Church",
      description: "Special Mass focused on children with blessing and involvement in liturgical roles."
    },
    {
      title: "MCA Family Picnic",
      date: "May 28, 2025",
      time: "12:00 PM - 3:00 PM",
      location: "Parish Grounds",
      description: "Annual family gathering with games, food, and fellowship."
    },
    {
      title: "First Communion Retreat",
      date: "June 5, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Parish Center",
      description: "Day of preparation for children receiving First Communion."
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
            <div className="h-64 md:h-80 bg-gradient-to-r from-yellow-500 to-amber-600 relative">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Missionary Childhood Association" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white p-2 rounded-full">
                        <School className="h-6 w-6 text-yellow-500" />
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Missionary Childhood Association
                      </h1>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl mb-4">
                      Nurturing young hearts in faith, service, and love
                    </p>
                    <span className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-yellow-600">
                      Ages 2–12 years
                    </span>
                    <blockquote className="mt-4 italic text-white/90 border-l-4 border-white/50 pl-4">
                      "Let the children come to me, and do not hinder them; for to such belongs the kingdom of heaven."
                      <footer className="text-right font-medium mt-1">— Matthew 19:14</footer>
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
                  <h2 className="text-2xl font-bold text-church-burgundy mb-4">About MCA</h2>
                  <p className="text-gray-700 mb-4">
                    The Missionary Childhood Association (MCA) at Musha WeBetania Parish provides spiritual, 
                    social, and service opportunities for our youngest parishioners. We nurture Catholic 
                    faith formation through age-appropriate activities that engage children and help them 
                    grow in their relationship with God and the Church.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our programs focus on teaching Catholic prayers, values, traditions, and Bible stories 
                    in ways that are fun, interactive, and meaningful. We believe that children are not only 
                    the future of our Church but active members of our parish today.
                  </p>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Mission</h3>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700">
                      To nurture the spiritual growth of children by helping them develop a personal 
                      relationship with Jesus Christ, understand Catholic teachings, and experience 
                      the joy of serving others through age-appropriate activities and faith formation.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-church-burgundy mb-3">Our Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Heart className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Faith</h4>
                      <p className="text-sm text-gray-700">
                        Learning to know, love, and serve God through prayer, sacraments, and Bible stories.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Community</h4>
                      <p className="text-sm text-gray-700">
                        Building friendships and experiencing belonging in our parish family.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <BookOpen className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <h4 className="font-medium text-church-burgundy mb-2">Service</h4>
                      <p className="text-sm text-gray-700">
                        Learning to share God's love through acts of kindness and service projects.
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
                                <Clock className="h-4 w-4 text-yellow-500" />
                                <span>{program.schedule}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-yellow-500" />
                                <span>{program.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {program.ageGroups.map((age, i) => (
                                <Badge key={i} variant="outline" className="bg-yellow-50">
                                  {age}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-bold text-church-burgundy mb-3">How to Join MCA</h3>
                    <p className="text-gray-700 mb-4">
                      All children ages 2-12 are welcome to participate in our MCA programs!
                    </p>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-700 mb-6">
                      <li>Complete the registration form (available at the Parish Office or online)</li>
                      <li>Submit the form to the MCA Coordinator or Parish Office</li>
                      <li>Attend any of our weekly or monthly programs</li>
                    </ol>
                    <div className="flex gap-4">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        Registration Form
                      </Button>
                      <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                        Parent Handbook
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
                            <div className="bg-yellow-100 rounded-lg w-16 h-16 flex flex-col items-center justify-center text-center">
                              <span className="text-xs text-gray-600">{event.date.split(',')[0].split(' ')[0]}</span>
                              <span className="text-xl font-bold text-yellow-600">{event.date.split(',')[0].split(' ')[1]}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-church-burgundy mb-1">{event.title}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-yellow-500" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-yellow-500" />
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
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                        <img 
                          src={`https://images.unsplash.com/photo-${1590000000000 + item * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                          alt={`MCA Activity ${item}`}
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
              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Leadership Team</h3>
                <div className="space-y-4">
                  {leadershipTeam.map((leader, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-church-burgundy mb-1">{leader.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{leader.role}</p>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-yellow-500" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-yellow-500" />
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Meeting Times */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Meeting Times</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Sunday Faith Formation</h4>
                      <p className="text-sm text-gray-600">Sundays after 10:00 AM Mass</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">First Communion Prep</h4>
                      <p className="text-sm text-gray-600">Wednesdays, 4:30-5:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Holy Childhood Society</h4>
                      <p className="text-sm text-gray-600">Third Sunday of each month</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Parent Involvement */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Parent Involvement</h3>
                <p className="text-gray-700 mb-4">
                  Parents are essential partners in our children's faith formation. 
                  We encourage you to get involved in the following ways:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-yellow-100 p-1 mt-0.5">
                      <Heart className="h-3 w-3 text-yellow-600" />
                    </div>
                    <span>Volunteer as a catechist or helper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-yellow-100 p-1 mt-0.5">
                      <Heart className="h-3 w-3 text-yellow-600" />
                    </div>
                    <span>Attend parent sessions and meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-yellow-100 p-1 mt-0.5">
                      <Heart className="h-3 w-3 text-yellow-600" />
                    </div>
                    <span>Continue faith discussions at home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-yellow-100 p-1 mt-0.5">
                      <Heart className="h-3 w-3 text-yellow-600" />
                    </div>
                    <span>Help with special events and activities</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  Volunteer Sign-Up
                </Button>
              </div>
              
              {/* Contact */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  Have questions about MCA? Contact our coordinator:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-yellow-500" />
                    <span>mca@betania.org</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-yellow-500" />
                    <span>(123) 456-7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MCA;
