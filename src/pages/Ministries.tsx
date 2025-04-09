
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserCircle2, Heart, Users, Book, Music, HandHeart, Star, PrayingHands, Search, Info, ChevronRight } from 'lucide-react';

// Sample ministry data
const ministries = [
  {
    id: 1,
    name: "Liturgical Ministry",
    description: "Assists with the liturgical celebrations of the parish, including Mass and other sacramental celebrations.",
    category: "Worship",
    image: "https://source.unsplash.com/photo-1510508242927-8914ddd767e4",
    roles: ["Lectors", "Extraordinary Ministers of Holy Communion", "Altar Servers", "Ushers/Greeters", "Sacristans"],
    leader: "Mr. Robert Hama",
    meetingSchedule: "Monthly, 1st Sunday after 10:00 AM Mass",
    contactEmail: "liturgy@mushwebetania.org"
  },
  {
    id: 2,
    name: "Music Ministry",
    description: "Provides music for parish liturgies and special celebrations, enhancing worship through song.",
    category: "Worship",
    image: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    roles: ["Choir members", "Cantors", "Instrumentalists", "Children's Choir"],
    leader: "Mrs. Catherine Dhewa",
    meetingSchedule: "Weekly rehearsals, Thursdays at 6:30 PM",
    contactEmail: "music@mushwebetania.org"
  },
  {
    id: 3,
    name: "Faith Formation",
    description: "Coordinates religious education programs for children, youth, and adults in the parish.",
    category: "Education",
    image: "https://source.unsplash.com/photo-1529070538774-1843cb3265df",
    roles: ["Catechists", "RCIA Team", "Bible Study Leaders", "Youth Ministry Volunteers"],
    leader: "Mrs. Joyce Mutendi",
    meetingSchedule: "Quarterly planning meetings",
    contactEmail: "faithformation@mushwebetania.org"
  },
  {
    id: 4,
    name: "Social Justice & Outreach",
    description: "Works to promote social justice and provide assistance to those in need in our community.",
    category: "Outreach",
    image: "https://source.unsplash.com/photo-1593113646773-028c64a8f1b8",
    roles: ["Food Pantry Volunteers", "Home Visitors", "Social Justice Advocates", "Charity Drive Coordinators"],
    leader: "Mr. Francis Chideme",
    meetingSchedule: "Monthly, 2nd Tuesday at 7:00 PM",
    contactEmail: "outreach@mushwebetania.org"
  },
  {
    id: 5,
    name: "Prayer & Spirituality",
    description: "Organizes opportunities for prayer and spiritual growth within the parish community.",
    category: "Spiritual Growth",
    image: "https://source.unsplash.com/photo-1507662228303-17d0f9f0b3a6",
    roles: ["Prayer Group Leaders", "Retreat Coordinators", "Adoration Chapel Volunteers", "Rosary Groups"],
    leader: "Mrs. Anna Mauchi",
    meetingSchedule: "Weekly prayer meetings, Wednesdays at 6:00 PM",
    contactEmail: "prayer@mushwebetania.org"
  },
  {
    id: 6,
    name: "Hospitality & Welcome",
    description: "Creates a welcoming environment for all who come to our parish, especially newcomers.",
    category: "Parish Life",
    image: "https://source.unsplash.com/photo-1511632765486-a01980e01a18",
    roles: ["Welcome Desk Volunteers", "New Parishioner Orientation", "Parish Event Hosts", "Sunday Coffee & Donuts"],
    leader: "Mrs. Grace Mutema",
    meetingSchedule: "Monthly, 3rd Sunday after 10:00 AM Mass",
    contactEmail: "hospitality@mushwebetania.org"
  },
  {
    id: 7,
    name: "Youth Ministry",
    description: "Provides spiritual formation, service opportunities, and social activities for parish youth.",
    category: "Education",
    image: "https://source.unsplash.com/photo-1523240795612-9a054b0db644",
    roles: ["Youth Group Leaders", "Confirmation Preparation Team", "Youth Event Chaperones", "Youth Retreat Team"],
    leader: "Mr. Timothy Kunaka",
    meetingSchedule: "Youth meetings every Sunday at 4:00 PM",
    contactEmail: "youth@mushwebetania.org"
  },
  {
    id: 8,
    name: "Parish Maintenance",
    description: "Helps maintain and improve the parish buildings and grounds.",
    category: "Administration",
    image: "https://source.unsplash.com/photo-1517142089942-ba376ce32a2e",
    roles: ["Building Committee", "Grounds Maintenance", "Church Cleaning Teams", "Special Projects"],
    leader: "Mr. James Shumba",
    meetingSchedule: "Quarterly planning meetings, work days as needed",
    contactEmail: "maintenance@mushwebetania.org"
  },
];

// Get unique categories for filter tabs
const categories = ["All", ...new Set(ministries.map(ministry => ministry.category))];

const Ministries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter ministries based on search term and category
  const filteredMinistries = ministries.filter(ministry => {
    const matchesSearch = 
      ministry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ministry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ministry.roles.some(role => role.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || ministry.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Worship':
        return <PrayingHands className="h-5 w-5" />;
      case 'Education':
        return <Book className="h-5 w-5" />;
      case 'Outreach':
        return <HandHeart className="h-5 w-5" />;
      case 'Spiritual Growth':
        return <Star className="h-5 w-5" />;
      case 'Parish Life':
        return <Heart className="h-5 w-5" />;
      case 'Administration':
        return <Users className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Parish Ministries"
            subtitle="Ways to serve, grow, and connect within our parish community"
          />

          <div className="max-w-5xl mx-auto mt-8">
            {/* Introduction Card */}
            <Card className="mb-8 border-church-burgundy/10 bg-church-light-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/60 flex items-center justify-center shadow-md">
                      <HandHeart className="h-16 w-16 text-church-burgundy" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-xl font-bold text-church-burgundy mb-3">Called to Serve</h2>
                    <p className="text-gray-700 mb-4">
                      Each of us is gifted with unique talents and abilities. Our parish ministries provide opportunities for you to share your gifts in service to God and our community, while growing in faith and forming meaningful relationships.
                    </p>
                    <p className="text-gray-700">
                      We invite you to explore our various ministries and prayerfully consider where God might be calling you to serve. Whether you can offer a few hours a month or several hours a week, your contribution makes a difference.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search ministries..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Tabs 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="grid grid-cols-4 md:grid-cols-8 h-auto">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="py-2 text-xs md:text-sm"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Ministries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredMinistries.length === 0 ? (
                <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No ministries match your search criteria</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                filteredMinistries.map(ministry => (
                  <Card key={ministry.id} className="border-church-burgundy/10 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={ministry.image} 
                        alt={ministry.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 text-white">
                          <div className="bg-church-burgundy/80 p-2 rounded-full">
                            {getCategoryIcon(ministry.category)}
                          </div>
                          <span className="text-sm font-medium">{ministry.category}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-church-burgundy">{ministry.name}</CardTitle>
                      <CardDescription>Led by {ministry.leader}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-700 mb-4">{ministry.description}</p>
                      <h4 className="font-medium text-church-burgundy text-sm mb-1">Includes:</h4>
                      <ul className="text-sm text-gray-700 list-disc pl-5 mb-4 space-y-0.5">
                        {ministry.roles.slice(0, 3).map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                        {ministry.roles.length > 3 && (
                          <li>And {ministry.roles.length - 3} more roles</li>
                        )}
                      </ul>
                      <div className="text-xs text-gray-600">
                        <p><span className="font-medium">Meets:</span> {ministry.meetingSchedule}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        variant="link" 
                        className="px-0 text-church-burgundy hover:text-church-gold hover:no-underline"
                        asChild
                      >
                        <Link to={`/ministries/${ministry.id}`} className="flex items-center">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>

            {/* Call to Action */}
            <Card className="bg-church-burgundy text-white mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <UserCircle2 className="h-16 w-16 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Ready to Get Involved?</h2>
                  <p className="mb-6 max-w-2xl">
                    Take the next step in your faith journey by joining one of our parish ministries. We welcome volunteers of all ages, backgrounds, and skill levels.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      asChild
                    >
                      <Link to="/volunteer">Volunteer Opportunities</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-transparent border-white hover:bg-white/20"
                      asChild
                    >
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ministry FAQs */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Common Questions</h2>
            <div className="space-y-4 mb-8">
              <Card className="border-church-burgundy/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">How do I get involved in a ministry?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To get involved, you can either contact the ministry leader directly via email, speak with them after Mass, or reach out to our parish office. Many ministries welcome visitors to observe before making a commitment, so don't hesitate to ask about attending a meeting.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Do I need special training?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    This varies by ministry. Some roles require specific training (such as Extraordinary Ministers of Holy Communion), while others provide on-the-job guidance. Each ministry provides the formation needed for their particular area of service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">How much time is required?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Time commitments vary widely between ministries. Some may ask for service once a month, while others might involve weekly participation. Many ministries are flexible and can work with your schedule. Be sure to discuss time expectations when you inquire.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">What if I'm not sure which ministry is right for me?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We're happy to help you discern where your gifts might best be used. Consider your interests, skills, and availability. You might also pray about where God is calling you to serve. Our parish staff can provide guidance and suggest ministries that might be a good fit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ministries;
