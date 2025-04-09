
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, HandHeart, HeartHandshake, Users, Timer, Star, GraduationCap, CalendarDays, Filter, ChevronRight } from 'lucide-react';

// Sample volunteer opportunities data
const volunteerOpportunities = [
  {
    id: 1,
    title: "Food Pantry Assistant",
    description: "Help sort, package, and distribute food to those in need through our parish food pantry.",
    commitment: "Weekly, 2-3 hours",
    timeframe: "Ongoing",
    category: "Outreach",
    skills: ["Organization", "Customer Service", "Physical Stamina"],
    urgency: "High Need",
    schedule: "Tuesdays and Thursdays, 9:00 AM - 12:00 PM",
    contactPerson: "Francis Chideme",
    contactEmail: "outreach@mushwebetania.org"
  },
  {
    id: 2,
    title: "Children's Liturgy Leader",
    description: "Lead children's liturgy sessions during Sunday 10:00 AM Mass, helping children understand the readings in an age-appropriate way.",
    commitment: "Monthly, 1 hour plus preparation",
    timeframe: "Ongoing",
    category: "Liturgical",
    skills: ["Teaching", "Creativity", "Love for Children"],
    urgency: "Medium Need",
    schedule: "Sundays, 10:00 AM Mass",
    contactPerson: "Joyce Mutendi",
    contactEmail: "faithformation@mushwebetania.org"
  },
  {
    id: 3,
    title: "Church Garden Caretaker",
    description: "Help maintain the parish gardens, including planting, weeding, and watering. Contribute to the beauty of our church grounds.",
    commitment: "Weekly or biweekly, 1-2 hours",
    timeframe: "Seasonal (Spring through Fall)",
    category: "Facilities",
    skills: ["Gardening Knowledge", "Physical Stamina"],
    urgency: "Low Need",
    schedule: "Flexible, mornings preferred",
    contactPerson: "James Shumba",
    contactEmail: "maintenance@mushwebetania.org"
  },
  {
    id: 4,
    title: "Technology/A/V Ministry",
    description: "Assist with operating sound, projection, and livestream equipment during Masses and special events.",
    commitment: "Weekly, 2 hours",
    timeframe: "Ongoing",
    category: "Technical",
    skills: ["Technical Aptitude", "Reliability", "Attention to Detail"],
    urgency: "High Need",
    schedule: "Weekend Masses and special events",
    contactPerson: "Timothy Kunaka",
    contactEmail: "tech@mushwebetania.org"
  },
  {
    id: 5,
    title: "Confirmation Retreat Team",
    description: "Help plan and facilitate the annual Confirmation retreat for youth preparing to receive the sacrament.",
    commitment: "Planning meetings plus 1 weekend retreat",
    timeframe: "Seasonal (January-March)",
    category: "Youth",
    skills: ["Leadership", "Planning", "Youth Ministry Experience"],
    urgency: "Medium Need",
    schedule: "Planning meetings monthly, retreat in March",
    contactPerson: "Timothy Kunaka",
    contactEmail: "youth@mushwebetania.org"
  },
  {
    id: 6,
    title: "Parish Festival Coordinator",
    description: "Join the team planning and organizing our annual parish festival. Various roles available from food coordination to setup/cleanup.",
    commitment: "Monthly meetings, plus full weekend of festival",
    timeframe: "Seasonal (Planning starts 6 months before)",
    category: "Parish Life",
    skills: ["Organization", "Leadership", "Event Planning"],
    urgency: "Medium Need",
    schedule: "Planning meetings on 3rd Monday of each month at 7:00 PM",
    contactPerson: "Grace Mutema",
    contactEmail: "hospitality@mushwebetania.org"
  },
  {
    id: 7,
    title: "Eucharistic Minister for Homebound",
    description: "Bring Holy Communion to parishioners who are homebound, in nursing homes, or hospitals.",
    commitment: "Weekly or biweekly, 2-3 hours",
    timeframe: "Ongoing",
    category: "Liturgical",
    skills: ["Compassion", "Reliability", "Valid Driver's License"],
    urgency: "High Need",
    schedule: "Flexible, typically weekday mornings",
    contactPerson: "Robert Hama",
    contactEmail: "liturgy@mushwebetania.org"
  },
  {
    id: 8,
    title: "RCIA Team Member",
    description: "Help guide candidates through the RCIA process, sharing your faith journey and knowledge of Catholic teaching.",
    commitment: "Weekly, 2 hours plus preparation",
    timeframe: "Seasonal (September-Easter)",
    category: "Faith Formation",
    skills: ["Knowledge of Catholic Faith", "Teaching", "Mentoring"],
    urgency: "Medium Need",
    schedule: "Thursday evenings, 7:00-9:00 PM",
    contactPerson: "Joyce Mutendi",
    contactEmail: "faithformation@mushwebetania.org"
  },
  {
    id: 9,
    title: "Coffee and Donuts Ministry",
    description: "Help provide hospitality after Sunday Masses by serving coffee, donuts, and creating a welcoming environment for fellowship.",
    commitment: "Monthly, 2 hours",
    timeframe: "Ongoing",
    category: "Parish Life",
    skills: ["Hospitality", "Friendliness"],
    urgency: "Low Need",
    schedule: "After Sunday Masses, rotation schedule",
    contactPerson: "Grace Mutema",
    contactEmail: "hospitality@mushwebetania.org"
  },
  {
    id: 10,
    title: "Angel Tree Gift Coordinator",
    description: "Help organize our annual Christmas Angel Tree program, which provides gifts to children in need in our community.",
    commitment: "Weekly meetings in November, daily in early December",
    timeframe: "Seasonal (November-December)",
    category: "Outreach",
    skills: ["Organization", "Communication", "Compassion"],
    urgency: "Low Need (until Fall)",
    schedule: "Planning starts in October, distribution in mid-December",
    contactPerson: "Francis Chideme",
    contactEmail: "outreach@mushwebetania.org"
  }
];

// Get unique categories and timeframes for filtering
const categories = [...new Set(volunteerOpportunities.map(opp => opp.category))];
const timeframes = [...new Set(volunteerOpportunities.map(opp => opp.timeframe))];
const urgencies = ["All", "High Need", "Medium Need", "Low Need"];

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTimeframe, setSelectedTimeframe] = useState("All");
  const [selectedUrgency, setSelectedUrgency] = useState("All");

  // Filter opportunities based on selections
  const filteredOpportunities = volunteerOpportunities.filter(opp => {
    const matchesCategory = selectedCategory === "All" || opp.category === selectedCategory;
    const matchesTimeframe = selectedTimeframe === "All" || opp.timeframe === selectedTimeframe;
    const matchesUrgency = selectedUrgency === "All" || opp.urgency === selectedUrgency;
    
    return matchesCategory && matchesTimeframe && matchesUrgency;
  });

  // Get color for urgency badge
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High Need":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium Need":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low Need":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Outreach":
        return <HandHeart className="h-5 w-5" />;
      case "Liturgical":
        return <Star className="h-5 w-5" />;
      case "Facilities":
        return <HeartHandshake className="h-5 w-5" />;
      case "Technical":
        return <HeartHandshake className="h-5 w-5" />;
      case "Youth":
        return <Users className="h-5 w-5" />;
      case "Parish Life":
        return <CalendarDays className="h-5 w-5" />;
      case "Faith Formation":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <HandHeart className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Volunteer Opportunities"
            subtitle="Share your time and talents with our parish community"
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
                    <h2 className="text-xl font-bold text-church-burgundy mb-3">Why Volunteer?</h2>
                    <p className="text-gray-700 mb-4">
                      Volunteering is a wonderful way to put your faith into action, build meaningful relationships, and make a tangible difference in our parish and wider community. Every act of service, no matter how small, helps build the Kingdom of God.
                    </p>
                    <p className="text-gray-700">
                      Below, you'll find current volunteer needs in our parish. We invite you to prayerfully consider where your gifts and interests might align with these opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-church-burgundy flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-gray-700">Category</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="All">All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-gray-700">Timeframe</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedTimeframe}
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                    >
                      <option value="All">All Timeframes</option>
                      {timeframes.map(timeframe => (
                        <option key={timeframe} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-gray-700">Urgency</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedUrgency}
                      onChange={(e) => setSelectedUrgency(e.target.value)}
                    >
                      {urgencies.map(urgency => (
                        <option key={urgency} value={urgency}>{urgency}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opportunities List */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-church-burgundy">Current Opportunities</h2>
              
              {filteredOpportunities.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <HandHeart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No opportunities match your filter criteria</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedTimeframe("All");
                      setSelectedUrgency("All");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                filteredOpportunities.map(opportunity => (
                  <Card key={opportunity.id} className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-3/4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                            <h3 className="text-xl font-bold text-church-burgundy">{opportunity.title}</h3>
                            <Badge variant="outline" className={`${getUrgencyColor(opportunity.urgency)} font-medium`}>
                              {opportunity.urgency}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{opportunity.description}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                            <div className="flex items-start gap-2">
                              <Timer className="h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Time Commitment</h4>
                                <p className="text-sm text-gray-700">{opportunity.commitment}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <Calendar className="h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Timeframe</h4>
                                <p className="text-sm text-gray-700">{opportunity.timeframe}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <Clock className="h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Schedule</h4>
                                <p className="text-sm text-gray-700">{opportunity.schedule}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <Users className="h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Contact</h4>
                                <p className="text-sm text-gray-700">{opportunity.contactPerson}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="bg-church-burgundy/10 px-2 py-1 rounded text-xs text-church-burgundy font-medium">
                              {opportunity.category}
                            </div>
                            {opportunity.skills.map((skill, index) => (
                              <div key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:w-1/4 flex lg:flex-col items-center justify-center gap-3">
                          <Button 
                            className="w-full bg-church-burgundy hover:bg-church-burgundy/90"
                            size="lg"
                          >
                            Sign Up
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            size="lg"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Additional Ways to Help */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">More Ways to Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Join a Ministry</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-sm text-gray-700 mb-4">
                    Explore our parish ministries to find ongoing ways to serve based on your interests and skills.
                  </p>
                  <Button 
                    variant="link" 
                    className="px-0 text-church-burgundy hover:text-church-gold hover:no-underline"
                    asChild
                  >
                    <Link to="/ministries" className="flex items-center">
                      View Parish Ministries <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Financial Support</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-sm text-gray-700 mb-4">
                    Support our parish mission and ministries through one-time or recurring donations.
                  </p>
                  <Button 
                    variant="link" 
                    className="px-0 text-church-burgundy hover:text-church-gold hover:no-underline"
                    asChild
                  >
                    <Link to="/donate" className="flex items-center">
                      Donate Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Prayer Support</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-sm text-gray-700 mb-4">
                    Join our prayer ministry to lift up the needs of our parish community in prayer.
                  </p>
                  <Button 
                    variant="link" 
                    className="px-0 text-church-burgundy hover:text-church-gold hover:no-underline"
                    asChild
                  >
                    <Link to="/prayers-novenas" className="flex items-center">
                      Prayer Resources <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <Card className="bg-church-burgundy text-white mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2">Have Questions?</h2>
                    <p className="mb-4">
                      If you have questions about volunteering or don't see an opportunity that matches your interests and skills, please contact our Volunteer Coordinator. We'd love to help you find the perfect way to serve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="secondary" 
                        asChild
                      >
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="bg-transparent border-white hover:bg-white/20"
                      >
                        Email: volunteer@mushwebetania.org
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/3 hidden md:flex justify-center">
                    <div className="bg-white/10 p-6 rounded-full">
                      <HeartHandshake className="h-24 w-24" />
                    </div>
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

export default Volunteer;
