
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

// Guild data
const guilds = [
  {
    id: 'st-annes',
    name: 'St. Anne\'s Guild',
    description: 'A guild for married women dedicated to the spiritual and moral formation of families.',
    image: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    fullDescription: `<p>St. Anne's Guild is dedicated to married women in our parish who are committed to the spiritual and moral formation of families. Named after the mother of the Blessed Virgin Mary, this guild promotes Christian values within the family and supports women in their role as nurturers of faith.</p>
    <p>The guild provides a community where women can share experiences, support one another, and grow in faith through prayer, scripture study, and service.</p>`,
    activities: [
      'Weekly prayer meetings',
      'Family support initiatives',
      'Charitable works in the community',
      'Religious education for children',
      'Mentoring of younger women'
    ],
    leadership: [
      { name: 'Mrs. Elizabeth Moyo', role: 'Chairperson' },
      { name: 'Mrs. Sarah Zimuto', role: 'Vice Chairperson' },
      { name: 'Mrs. Grace Musvipa', role: 'Secretary' }
    ],
    meetingTime: 'Second and fourth Sunday of each month, 2:00 PM',
    meetingLocation: 'Parish Hall',
    membershipRequirements: 'Open to all married women of the parish.'
  },
  {
    id: 'st-josephs',
    name: 'St. Joseph\'s Guild',
    description: 'A guild for married men focused on spiritual leadership in the home and parish community.',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    fullDescription: `<p>St. Joseph's Guild is a fraternity of married men in the parish who are dedicated to becoming better husbands, fathers, and spiritual leaders in their homes and in the parish community. Named after the foster father of Jesus, the guild emphasizes the virtues of faith, integrity, responsibility, and service.</p>
    <p>Through prayer, fellowship, and action, members of the guild support each other in living out their Catholic faith and fulfilling their roles as spiritual heads of their families.</p>`,
    activities: [
      'Monthly spiritual retreats',
      'Family prayer initiatives',
      'Parish maintenance projects',
      'Mentoring young men',
      'Community outreach and service'
    ],
    leadership: [
      { name: 'Mr. John Marufu', role: 'Chairman' },
      { name: 'Mr. Paul Gumbo', role: 'Vice Chairman' },
      { name: 'Mr. David Chitima', role: 'Secretary' }
    ],
    meetingTime: 'First and third Saturday of each month, 9:00 AM',
    meetingLocation: 'Parish Hall',
    membershipRequirements: 'Open to all married men of the parish.'
  },
  {
    id: 'st-marys',
    name: 'St. Mary\'s Guild',
    description: 'A guild for young women focused on purity, faith formation, and preparation for Christian marriage.',
    image: 'https://images.unsplash.com/photo-1618076262573-7c6d495e7384?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    fullDescription: `<p>St. Mary's Guild is a community of young women dedicated to growing in virtue, particularly purity, and preparing for their future vocations, whether in marriage or consecrated life. Named after the Blessed Virgin Mary, this guild emphasizes the virtues of faith, purity, humility, and service.</p>
    <p>The guild provides a supportive environment where young women can deepen their relationship with Christ, learn about authentic femininity, and develop skills that will help them in their future vocation.</p>`,
    activities: [
      'Faith formation meetings',
      'Service projects',
      'Marian devotions',
      'Personal development workshops',
      'Social activities'
    ],
    leadership: [
      { name: 'Ms. Ruth Munoda', role: 'Chairperson' },
      { name: 'Ms. Tendai Gutu', role: 'Vice Chairperson' },
      { name: 'Ms. Faith Matinanga', role: 'Secretary' }
    ],
    meetingTime: 'Every Sunday, 12:00 PM',
    meetingLocation: 'Youth Room',
    membershipRequirements: 'Open to unmarried women aged 16-35.'
  },
  {
    id: 'st-aloysius',
    name: 'St. Aloysius Guild',
    description: 'A guild for young men dedicated to faith formation, leadership development, and preparation for adult Catholic life.',
    image: 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    fullDescription: `<p>St. Aloysius Guild is a brotherhood of young men committed to growing in virtue, particularly purity and courage, and preparing for their future vocations. Named after St. Aloysius Gonzaga, patron saint of youth, this guild emphasizes the virtues of faith, integrity, purity, and servant leadership.</p>
    <p>The guild provides a supportive environment where young men can deepen their relationship with Christ, learn about authentic masculinity from a Catholic perspective, and develop leadership skills.</p>`,
    activities: [
      'Faith formation meetings',
      'Service projects',
      'Sports and outdoor activities',
      'Leadership development',
      'Vocational discernment'
    ],
    leadership: [
      { name: 'Mr. Tanaka Moyo', role: 'Chairman' },
      { name: 'Mr. Farai Gumbo', role: 'Vice Chairman' },
      { name: 'Mr. Simba Matongo', role: 'Secretary' }
    ],
    meetingTime: 'Every Sunday, 12:00 PM',
    meetingLocation: 'Parish Hall',
    membershipRequirements: 'Open to unmarried men aged 16-35.'
  },
  {
    "id": "st-augustines-guild",
    "name": "St. Augustine's Guild",
    "description": "A guild for Catholic intellectuals, teachers, and professionals committed to faith, wisdom, and leadership.",
    "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "fullDescription": "<p>St. Augustine's Guild brings together Catholic intellectuals, professionals, and educators who seek to integrate faith and reason in their personal and professional lives. Inspired by the teachings of St. Augustine, members engage in theological discussions, leadership training, and community service.</p><p>The guild also supports Catholic education, mentors young professionals, and promotes the Church's role in intellectual and societal development.</p>",
    "activities": [
      "Theological and philosophical discussions",
      "Leadership and mentorship programs",
      "Workshops on integrating faith and work",
      "Community outreach and educational initiatives",
      "Retreats and spiritual enrichment activities"
    ],
    "leadership": [
      { "name": "Dr. John Chigova", "role": "Chairperson" },
      { "name": "Prof. Mary Nyandoro", "role": "Vice Chairperson" },
      { "name": "Mr. Tendai Mupfupi", "role": "Secretary" }
    ],
    "meetingTime": "Every last Sunday of the month, 2:00 PM",
    "meetingLocation": "St. Augustine's Parish Hall",
    "membershipRequirements": "Open to Catholic scholars, teachers, professionals, and those interested in intellectual and spiritual growth."
  },
   {
    "id": "catholic-youth-guild",
    "name": "Catholic Youth Guild (CYG)",
    "description": "A guild for young Catholics focusing on faith, leadership, and community service.",
    "image": "https://images.unsplash.com/photo-1598387993521-71a8bbd68ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "fullDescription": "<p>The Catholic Youth Guild (CYG) is a vibrant community for young Catholics seeking to grow in faith, leadership, and service. The guild offers a platform for young people to engage in spiritual activities, mentorship, and social outreach.</p><p>CYG aims to strengthen Catholic identity among the youth, preparing them for active participation in the Church and society.</p>",
    "activities": [
      "Weekly faith-sharing and Bible study",
      "Youth retreats and pilgrimages",
      "Leadership and career development workshops",
      "Community service and charity work",
      "Sports and recreational activities"
    ],
    "leadership": [
      { "name": "Mr. Kudzai Mandizha", "role": "President" },
      { "name": "Ms. Rutendo Mupfupi", "role": "Vice President" },
      { "name": "Mr. Blessing Nyasha", "role": "Secretary" }
    ],
    "meetingTime": "Every Sunday, 3:00 PM",
    "meetingLocation": "Parish Youth Center",
    "membershipRequirements": "Open to young Catholics aged 15-35."
  },
];

const CatholicGuilds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Catholic Guilds</h1>
                <p className="text-xl text-white/80">Serving the parish community through faith, fellowship, and service</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle 
                title="Our Parish Guilds" 
                subtitle="Faith-based communities within our parish"
              />
              
              <div className="prose prose-lg max-w-none mt-8">
                <p>
                  Guilds are specialized groups within our parish that bring together members who share common characteristics 
                  such as age, gender, or marital status. Each guild is dedicated to fostering spiritual growth, providing 
                  mutual support, and engaging in service to the parish and wider community.
                </p>
                <p>
                  These guilds offer a way for parishioners to connect more deeply with others who share similar life 
                  experiences while growing in faith together. They provide opportunities for fellowship, prayer, 
                  formation, and service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Guilds Listing */}
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue={guilds[0].id} className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 space-x-2">
                {guilds.map((guild) => (
                  <TabsTrigger key={guild.id} value={guild.id} className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white">
                    {guild.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {guilds.map((guild) => (
                <TabsContent key={guild.id} value={guild.id} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <Card className="shadow-md">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-2xl text-church-burgundy">{guild.name}</CardTitle>
                          <CardDescription>{guild.description}</CardDescription>
                        </CardHeader>
                        <div className="px-6 pb-4">
                          <div className="w-full h-60 md:h-80 rounded-md overflow-hidden mb-6">
                            <img
                              src={guild.image}
                              alt={guild.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <CardContent className="pb-6">
                          <div className="prose prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: guild.fullDescription }} />
                            
                            <h3>Activities</h3>
                            <ul>
                              {guild.activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                              ))}
                            </ul>
                            
                            <h3>Guild Leadership</h3>
                            <ul>
                              {guild.leadership.map((leader, index) => (
                                <li key={index}><strong>{leader.name}</strong> - {leader.role}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-8 bg-church-burgundy/10 p-6 rounded-lg border border-church-burgundy/20">
                            <h3 className="text-xl font-bold text-church-burgundy mb-4">How to Join</h3>
                            <p className="text-gray-700 mb-4">
                              Interested in joining the {guild.name}? New members are always welcome! 
                              To join, you can:
                            </p>
                            <ul className="space-y-2 text-gray-700 mb-6">
                              <li className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-church-gold mr-2" />
                                <span>Attend any of our meetings as a visitor</span>
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-church-gold mr-2" />
                                <span>Speak with any of the guild leaders</span>
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-church-gold mr-2" />
                                <span>Contact the parish office for more information</span>
                              </li>
                            </ul>
                            <Button asChild>
                              <Link to="/contact">Contact Us to Join</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Sidebar */}
                    <div>
                      <div className="space-y-6">
                        {/* Meeting Information */}
                        <Card className="shadow-md">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-xl text-church-burgundy">Meeting Information</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-6">
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <CalendarDays className="h-5 w-5 text-church-gold mr-3 mt-1" />
                                <div>
                                  <h4 className="font-medium">Meeting Schedule</h4>
                                  <p className="text-gray-600">{guild.meetingTime}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <Clock className="h-5 w-5 text-church-gold mr-3 mt-1" />
                                <div>
                                  <h4 className="font-medium">Location</h4>
                                  <p className="text-gray-600">{guild.meetingLocation}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <Users className="h-5 w-5 text-church-gold mr-3 mt-1" />
                                <div>
                                  <h4 className="font-medium">Membership Requirements</h4>
                                  <p className="text-gray-600">{guild.membershipRequirements}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Upcoming Guild Events */}
                        <Card className="shadow-md">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-xl text-church-burgundy">Upcoming Guild Events</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-6">
                            <div className="space-y-4">
                              <div className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                                <h4 className="font-bold text-church-burgundy">Monthly Meeting</h4>
                                <p className="text-sm text-gray-600 mb-2">Next Sunday, 2:00 PM</p>
                                <p className="text-sm">Regular meeting with prayer, discussion, and planning.</p>
                              </div>
                              
                              <div className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                                <h4 className="font-bold text-church-burgundy">Community Service Day</h4>
                                <p className="text-sm text-gray-600 mb-2">July 15, 9:00 AM</p>
                                <p className="text-sm">Volunteering at the local food bank.</p>
                              </div>
                              
                              <div className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                                <h4 className="font-bold text-church-burgundy">Annual Retreat</h4>
                                <p className="text-sm text-gray-600 mb-2">August 5-7</p>
                                <p className="text-sm">A weekend of prayer, reflection, and fellowship.</p>
                              </div>
                            </div>
                            
                            <div className="mt-4 text-center">
                              <Button variant="outline" className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                                View All Guild Events
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Join Other Guilds */}
                        <Card className="shadow-md bg-church-gold/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-xl text-church-burgundy">Explore Other Communities</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-6">
                            <p className="text-gray-700 mb-4">
                              In addition to our guilds, our parish offers various other ways to get involved in our community:
                            </p>
                            <div className="space-y-2">
                              <Link to="/community/sections" className="flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                                <ChevronRight className="h-4 w-4 mr-2" />
                                <span>Parish Sections</span>
                              </Link>
                              <Link to="/community/youth" className="flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                                <ChevronRight className="h-4 w-4 mr-2" />
                                <span>Catholic Youth Ministry</span>
                              </Link>
                              <Link to="/community/gallery" className="flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                                <ChevronRight className="h-4 w-4 mr-2" />
                                <span>Parish Photo Gallery</span>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Guild Member Testimonials" 
              subtitle="Hear from those who have found community in our parish guilds"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-church-gold text-4xl mb-4">"</div>
                  <p className="italic text-gray-700 mb-6">
                    Being part of St. Anne's Guild has strengthened my faith and given me a support system of like-minded women who help me navigate the challenges of family life with grace and faith.
                  </p>
                  <Separator className="mb-4" />
                  <div>
                    <h4 className="font-bold text-church-burgundy">Maria Chikwanda</h4>
                    <p className="text-sm text-gray-600">St. Anne's Guild, Member since 2018</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-church-gold text-4xl mb-4">"</div>
                  <p className="italic text-gray-700 mb-6">
                    St. Joseph's Guild has taught me what it means to be a true Catholic man, husband, and father. The brotherhood and accountability have been transformative for me and my family.
                  </p>
                  <Separator className="mb-4" />
                  <div>
                    <h4 className="font-bold text-church-burgundy">James Mutasa</h4>
                    <p className="text-sm text-gray-600">St. Joseph's Guild, Member since 2015</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-church-gold text-4xl mb-4">"</div>
                  <p className="italic text-gray-700 mb-6">
                    As a young woman, St. Mary's Guild has provided me with guidance, mentorship, and friendship that has deepened my faith and helped me make important life decisions.
                  </p>
                  <Separator className="mb-4" />
                  <div>
                    <h4 className="font-bold text-church-burgundy">Tatenda Moyo</h4>
                    <p className="text-sm text-gray-600">St. Mary's Guild, Member since 2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-church-burgundy hover:bg-church-burgundy/90">
                <Link to="/contact">Contact Us to Join a Guild</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CatholicGuilds;