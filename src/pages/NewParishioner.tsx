
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HomeIcon, Calendar, Users, Church, BookOpen, History, Mail, MapPin, Heart, CheckCircle2, User, UserPlus, FileText, ChevronRight } from 'lucide-react';

const NewParishioner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Welcome to Musha WeBetania"
            subtitle="Information for new and prospective parishioners"
          />

          <div className="max-w-4xl mx-auto mt-8">
            {/* Welcome Card */}
            <Card className="mb-8 border-church-burgundy/10 bg-church-light-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/60 flex items-center justify-center shadow-md">
                      <Church className="h-16 w-16 text-church-burgundy" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-xl font-bold text-church-burgundy mb-3">Welcome Home!</h2>
                    <p className="text-gray-700 mb-4">
                      We're delighted that you're interested in joining our parish family at Musha WeBetania. Whether you're new to the area, returning to the practice of your faith, or seeking a new spiritual home, we're here to welcome you with open arms.
                    </p>
                    <p className="text-gray-700">
                      This page provides information to help you get connected and feel at home in our parish community. We look forward to walking with you on your faith journey!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration CTA */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-bold text-church-burgundy mb-3">Register with Our Parish</h2>
                    <p className="text-gray-700 mb-4">
                      Registering with the parish helps us serve you better and allows you to fully participate in parish life. Registration forms are available online or at the parish office.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                        Register Online
                      </Button>
                      <Button variant="outline">
                        Download Registration Form (PDF)
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg">
                    <h3 className="font-bold text-church-burgundy mb-2">Parish Office Hours</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                        <MapPin className="h-4 w-4 text-church-burgundy" />
                        <span>123 Main Street, Betania Town</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Mail className="h-4 w-4 text-church-burgundy" />
                        <span>office@mushwebetania.org</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for different aspects of parish life */}
            <Tabs defaultValue="worship" className="mb-8">
              <TabsList className="grid w-full grid-cols-4 h-auto">
                <TabsTrigger value="worship" className="flex flex-col py-3 text-xs sm:text-sm h-auto">
                  <Church className="h-5 w-5 mb-1" />
                  <span>Worship</span>
                </TabsTrigger>
                <TabsTrigger value="connect" className="flex flex-col py-3 text-xs sm:text-sm h-auto">
                  <Users className="h-5 w-5 mb-1" />
                  <span>Connect</span>
                </TabsTrigger>
                <TabsTrigger value="grow" className="flex flex-col py-3 text-xs sm:text-sm h-auto">
                  <BookOpen className="h-5 w-5 mb-1" />
                  <span>Grow</span>
                </TabsTrigger>
                <TabsTrigger value="serve" className="flex flex-col py-3 text-xs sm:text-sm h-auto">
                  <Heart className="h-5 w-5 mb-1" />
                  <span>Serve</span>
                </TabsTrigger>
              </TabsList>

              {/* Worship Tab */}
              <TabsContent value="worship" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-church-burgundy">Worship Times & Information</CardTitle>
                    <CardDescription>Learn about our Mass schedule, sacraments, and liturgical traditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Mass Schedule</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Sunday Masses</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>8:00 AM - English</li>
                              <li>10:00 AM - English with Children's Liturgy</li>
                              <li>12:00 PM - Shona</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Weekday Masses</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>Monday - Friday: 7:30 AM</li>
                              <li>Wednesday: 6:00 PM</li>
                              <li>Saturday: 9:00 AM</li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          to="/mass-times"
                          className="inline-flex items-center text-church-burgundy hover:text-church-gold mt-2 text-sm"
                        >
                          View complete Mass schedule <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Sacraments</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Confession</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>Saturday: 3:00 PM - 4:30 PM</li>
                              <li>Wednesday: 5:00 PM - 5:45 PM</li>
                              <li>By appointment</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Other Sacraments</h4>
                            <p className="text-sm text-gray-700">
                              Please contact the parish office for information about Baptism, First Communion, Confirmation, Marriage, and Anointing of the Sick.
                            </p>
                          </div>
                        </div>
                        <Link
                          to="/sacraments/reconciliation"
                          className="inline-flex items-center text-church-burgundy hover:text-church-gold mt-2 text-sm"
                        >
                          Learn more about our sacraments <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Connect Tab */}
              <TabsContent value="connect" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-church-burgundy">Connect with Others</CardTitle>
                    <CardDescription>Find ways to build relationships in our parish community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Upcoming Events for Newcomers</h3>
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex gap-4">
                              <div className="bg-church-burgundy/10 p-2 rounded text-center min-w-[60px]">
                                <span className="block text-sm">JUN</span>
                                <span className="block text-xl font-bold text-church-burgundy">15</span>
                              </div>
                              <div>
                                <h4 className="font-medium">New Parishioner Welcome Brunch</h4>
                                <p className="text-sm text-gray-700">Sunday after 10:00 AM Mass in the Parish Hall</p>
                                <Button variant="link" className="p-0 h-auto text-church-burgundy">RSVP</Button>
                              </div>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex gap-4">
                              <div className="bg-church-burgundy/10 p-2 rounded text-center min-w-[60px]">
                                <span className="block text-sm">JUL</span>
                                <span className="block text-xl font-bold text-church-burgundy">10</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Parish Family Picnic</h4>
                                <p className="text-sm text-gray-700">Saturday, 12:00 PM - 4:00 PM at Betania Community Park</p>
                                <Button variant="link" className="p-0 h-auto text-church-burgundy">Details</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/events"
                          className="inline-flex items-center text-church-burgundy hover:text-church-gold mt-2 text-sm"
                        >
                          View all upcoming events <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Parish Groups</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Catholic Guilds</h4>
                            <p className="text-sm text-gray-700 mb-2">
                              Join one of our Catholic guilds based on age, gender, or interests. 
                            </p>
                            <Link
                              to="/community/guilds"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold text-sm"
                            >
                              Learn more <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Parish Sections</h4>
                            <p className="text-sm text-gray-700 mb-2">
                              Connect with parishioners in your geographic area through parish sections.
                            </p>
                            <Link
                              to="/community/sections"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold text-sm"
                            >
                              Learn more <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Grow Tab */}
              <TabsContent value="grow" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-church-burgundy">Grow in Faith</CardTitle>
                    <CardDescription>Resources and programs for spiritual growth and faith formation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Faith Formation Programs</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Adult Faith Formation</h4>
                            <ul className="space-y-1 text-sm text-gray-700 mt-2">
                              <li>Bible Studies</li>
                              <li>Faith Sharing Groups</li>
                              <li>Adult Education Classes</li>
                              <li>RCIA for those interested in becoming Catholic</li>
                            </ul>
                            <Link
                              to="/education-formation"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold mt-2 text-sm"
                            >
                              Explore programs <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Children & Youth</h4>
                            <ul className="space-y-1 text-sm text-gray-700 mt-2">
                              <li>Religious Education (Ages 5-12)</li>
                              <li>First Communion Preparation</li>
                              <li>Confirmation Program</li>
                              <li>Youth Ministry (Ages 13-18)</li>
                            </ul>
                            <Link
                              to="/community/youth"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold mt-2 text-sm"
                            >
                              Learn more <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Spiritual Resources</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Daily Readings</h4>
                            <p className="text-sm text-gray-700 my-2">
                              Follow the daily Mass readings to reflect on Scripture.
                            </p>
                            <Link
                              to="/daily-readings"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold text-sm"
                            >
                              View readings <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Prayers & Devotions</h4>
                            <p className="text-sm text-gray-700 my-2">
                              Access traditional Catholic prayers and devotional practices.
                            </p>
                            <Link
                              to="/prayers-novenas"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold text-sm"
                            >
                              Learn more <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium">Homilies</h4>
                            <p className="text-sm text-gray-700 my-2">
                              Listen to or read past homilies from our parish priests.
                            </p>
                            <Link
                              to="/homilies"
                              className="inline-flex items-center text-church-burgundy hover:text-church-gold text-sm"
                            >
                              Access homilies <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Serve Tab */}
              <TabsContent value="serve" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-church-burgundy">Serve Others</CardTitle>
                    <CardDescription>Discover ways to serve within our parish and the wider community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Volunteer Opportunities</h3>
                        <p className="text-gray-700 mb-4">
                          There are many ways to share your time and talents with our parish community. Here are a few areas where you can get involved:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="bg-church-burgundy/10 p-3 rounded-full mb-2">
                                <Church className="h-6 w-6 text-church-burgundy" />
                              </div>
                              <h4 className="font-medium">Liturgical Ministries</h4>
                              <p className="text-xs text-gray-700 my-2">
                                Serve as a lector, usher, altar server, or Eucharistic minister.
                              </p>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="bg-church-burgundy/10 p-3 rounded-full mb-2">
                                <BookOpen className="h-6 w-6 text-church-burgundy" />
                              </div>
                              <h4 className="font-medium">Faith Formation</h4>
                              <p className="text-xs text-gray-700 my-2">
                                Help as a catechist, RCIA team member, or youth ministry volunteer.
                              </p>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="bg-church-burgundy/10 p-3 rounded-full mb-2">
                                <Heart className="h-6 w-6 text-church-burgundy" />
                              </div>
                              <h4 className="font-medium">Outreach & Service</h4>
                              <p className="text-xs text-gray-700 my-2">
                                Participate in community service projects and parish outreach initiatives.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <Button 
                            asChild
                            className="bg-church-burgundy hover:bg-church-burgundy/90"
                          >
                            <Link to="/volunteer">Explore All Volunteer Opportunities</Link>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-church-burgundy mb-2">Parish Ministries</h3>
                        <p className="text-gray-700 mb-4">
                          Our parish has numerous ministries to serve various needs within our community and beyond. Find a ministry that aligns with your interests and skills.
                        </p>
                        <Button 
                          variant="outline"
                          asChild
                          className="w-full"
                        >
                          <Link to="/ministries">View All Parish Ministries</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Frequently Asked Questions</h2>
            <Card className="mb-8 border-church-burgundy/10">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-church-burgundy">
                      How do I become a registered member of the parish?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      You can register by completing our parish registration form either online or in person at the parish office. Registration forms are also available in the church vestibule. After submitting your form, you'll receive a welcome packet with information about the parish.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-church-burgundy">
                      What are the benefits of registering with the parish?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Registration helps us serve you better by keeping you informed about parish activities and providing sacramental records when needed. Registered parishioners can participate fully in parish life, including serving in ministries, enrolling children in religious education, and receiving discounted rates for parish school and events.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-church-burgundy">
                      How can I meet other parishioners?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We encourage new members to attend our quarterly New Parishioner Welcome Events. You can also join a ministry, participate in parish social events, become part of a parish section (geographic community groups), or join one of our Catholic guilds. Our coffee and donuts fellowship after Sunday Masses is also a great way to meet others.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-church-burgundy">
                      I'm returning to the Church after some time away. Where should I start?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Welcome back! We're so glad you're returning to the faith. We encourage you to start by attending Mass regularly and receiving the Sacrament of Reconciliation. Our parish offers a "Welcome Home" program specifically for those returning to the Church. You might also consider meeting with one of our priests for guidance on your faith journey.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-church-burgundy">
                      How do I arrange for a sacrament (Baptism, Marriage, etc.)?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Please contact the parish office to begin arrangements for any sacrament. For Baptisms, we require parents to attend a preparation class. For Marriage, couples should contact the parish at least six months before their desired wedding date to begin the preparation process. For First Communion, Confirmation, and other sacraments, please inquire about our preparation programs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Your Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-4">
                      <UserPlus className="h-8 w-8 text-church-burgundy" />
                    </div>
                    <h3 className="font-bold text-church-burgundy">1. Register</h3>
                    <p className="text-sm text-gray-700 my-2">
                      Complete and submit a parish registration form to officially join our community.
                    </p>
                    <Button variant="link" className="text-church-burgundy hover:text-church-gold hover:no-underline p-0 h-auto">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-church-burgundy" />
                    </div>
                    <h3 className="font-bold text-church-burgundy">2. Attend</h3>
                    <p className="text-sm text-gray-700 my-2">
                      Join us for Mass and attend a new parishioner welcome event to meet others.
                    </p>
                    <Button variant="link" className="text-church-burgundy hover:text-church-gold hover:no-underline p-0 h-auto">
                      View Mass Times
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-church-burgundy" />
                    </div>
                    <h3 className="font-bold text-church-burgundy">3. Connect</h3>
                    <p className="text-sm text-gray-700 my-2">
                      Get involved in parish life by joining a ministry, group, or volunteer opportunity.
                    </p>
                    <Button variant="link" className="text-church-burgundy hover:text-church-gold hover:no-underline p-0 h-auto">
                      Explore Ways to Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <Card className="bg-church-burgundy text-white">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold mb-2">We're Here to Help</h2>
                  <p className="mb-6 max-w-2xl">
                    If you have any questions or need assistance as you join our parish family, please don't hesitate to reach out. We're excited to welcome you into our community!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-transparent border-white hover:bg-white/20"
                    >
                      Schedule Meeting with Priest
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewParishioner;
