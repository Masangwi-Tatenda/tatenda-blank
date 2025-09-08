import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useSanity } from '@/contexts/SanityContext';
import SectionTitle from '@/components/common/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LiturgicalYearWheel from '@/components/liturgical/LiturgicalYearWheel';
import EnhancedCalendar from '@/components/liturgical/EnhancedCalendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar as CalendarIcon, 
  Info, 
  Book, 
  Cross, 
  Sparkles,
  Clock,
  Users,
  Heart
} from 'lucide-react';

const LiturgicalCalendarPage = () => {
  const { liturgicalCalendar, liturgicalSeasons, feastDays, isLoading } = useSanity();
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Enhanced seasons with more detailed information
  const enhancedSeasons = [
    {
      name: "Advent",
      color: "#7C3AED",
      shortDescription: "Preparation for Christmas",
      description: "A time of joyful expectation and preparation for the celebration of Christ's birth and his return in glory.",
      duration: "4 Sundays before Christmas",
      themes: ["Hope", "Preparation", "Waiting", "Joy"],
      practices: ["Advent wreath", "Advent calendar", "Jesse tree", "Special prayers"],
      scripture: "Readings focus on prophetic anticipation of the Messiah and John the Baptist's ministry.",
      significance: "Advent marks the beginning of the liturgical year and prepares us for celebrating Christ's birth while awaiting his second coming."
    },
    {
      name: "Christmas",
      color: "#FFFFFF",
      shortDescription: "Celebration of Jesus' birth",
      description: "The celebration of Jesus' nativity and the mystery of the Incarnation.",
      duration: "December 25 - Baptism of the Lord",
      themes: ["Joy", "Light", "Incarnation", "Emmanuel"],
      practices: ["Nativity scenes", "Christmas carols", "Gift giving", "Family gatherings"],
      scripture: "Readings tell the story of Jesus' birth, the visit of the Magi, and early life of Jesus.",
      significance: "Christmas celebrates the Incarnation of the Word of God, when Christ was born into our world."
    },
    {
      name: "Ordinary Time",
      color: "#059669",
      shortDescription: "Growth in faith and discipleship",
      description: "A period of growth and maturation in faith, focusing on Christ's ministry and teachings.",
      duration: "After Christmas season and after Easter season",
      themes: ["Growth", "Discipleship", "Teaching", "Service"],
      practices: ["Scripture study", "Community service", "Regular prayer", "Faith formation"],
      scripture: "Readings follow Jesus through his public ministry, miracles, and teachings.",
      significance: "Ordinary Time focuses on living out our baptismal calling in daily life."
    },
    {
      name: "Lent",
      color: "#7C3AED",
      shortDescription: "Prayer, fasting & almsgiving",
      description: "A 40-day period of prayer, fasting, and almsgiving in preparation for Easter.",
      duration: "Ash Wednesday - Holy Thursday",
      themes: ["Repentance", "Fasting", "Prayer", "Almsgiving"],
      practices: ["Ash Wednesday", "Stations of the Cross", "Fasting", "Charitable giving"],
      scripture: "Readings focus on themes of repentance, baptism, and the journey to the cross.",
      significance: "Lent prepares us for the celebration of Easter through penance and spiritual discipline."
    },
    {
      name: "Easter",
      color: "#FFFFFF",
      shortDescription: "Resurrection celebration",
      description: "The most important celebration of the liturgical year, commemorating Christ's resurrection.",
      duration: "Easter Sunday - Pentecost (50 days)",
      themes: ["Resurrection", "New Life", "Victory", "Alleluia"],
      practices: ["Paschal candle", "Renewed baptismal promises", "Alleluia proclamations"],
      scripture: "Readings tell of the resurrection, appearances of Jesus, and early Church.",
      significance: "Easter celebrates Christ's victory over sin and death, the foundation of our faith."
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-church-navy via-church-burgundy to-church-navy text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(255,215,0,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]"></div>
          
          <div className="container-custom relative">
            <div className="py-24 text-center">
              <div className="mb-8">
                <Cross className="w-20 h-20 text-church-gold mx-auto mb-6 drop-shadow-lg" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Liturgical Calendar
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light max-w-4xl mx-auto">
                Understanding the Sacred Rhythm of the Church Year
              </p>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Journey through the seasons of faith as we celebrate the mysteries of Christ's life, 
                death, and resurrection throughout the liturgical year.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-church-gold/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </section>

        <div className="container-custom py-16">
          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16 bg-white shadow-lg rounded-2xl p-2">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-xl py-4 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="wheel" 
                className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-xl py-4 font-semibold"
              >
                <Cross className="w-5 h-5 mr-2" />
                Liturgical Year
              </TabsTrigger>
              <TabsTrigger 
                value="calendar" 
                className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-xl py-4 font-semibold"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Events Calendar
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="space-y-16">
                {/* Introduction */}
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-church-cream/20 to-white">
                  <CardContent className="p-12">
                    <div className="text-center mb-12">
                      <Book className="w-16 h-16 text-church-burgundy mx-auto mb-6" />
                      <h2 className="text-4xl font-bold text-church-burgundy mb-6">
                        The Sacred Journey of Faith
                      </h2>
                      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        The liturgical calendar is the cycle of seasons and feasts that guides our worship throughout the year. 
                        It helps us enter more deeply into the mystery of Christ's life, death, and resurrection, 
                        growing in faith and understanding of God's love.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-8 bg-gradient-to-br from-church-burgundy to-church-navy text-white rounded-2xl shadow-xl">
                        <Clock className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Cyclical Journey</h3>
                        <p className="text-white/90">
                          Each year we journey through Christ's life, from anticipation to resurrection
                        </p>
                      </div>
                      
                      <div className="text-center p-8 bg-gradient-to-br from-church-gold to-amber-500 text-white rounded-2xl shadow-xl">
                        <Users className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Universal Church</h3>
                        <p className="text-white/90">
                          Connects us with Catholics worldwide in synchronized worship and prayer
                        </p>
                      </div>
                      
                      <div className="text-center p-8 bg-gradient-to-br from-emerald-600 to-green-500 text-white rounded-2xl shadow-xl">
                        <Heart className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Spiritual Growth</h3>
                        <p className="text-white/90">
                          Each season offers unique opportunities for deepening our relationship with God
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Current Season Highlight */}
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-church-burgundy to-church-navy text-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 rounded-full bg-purple-500 shadow-lg"></div>
                          <Badge className="bg-church-gold text-church-burgundy font-bold px-4 py-2">
                            Current Season
                          </Badge>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Advent</h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          A time of joyful expectation and preparation for the celebration of Christ's birth 
                          and his return in glory. We light candles, sing carols, and prepare our hearts 
                          for the coming of our Savior.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-church-gold" />
                            <span>Duration: Four Sundays before Christmas</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Cross className="w-5 h-5 text-church-gold" />
                            <span>Color: Purple (preparation and penance)</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-12 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                            <CalendarIcon className="w-16 h-16 text-white" />
                          </div>
                          <Button 
                            onClick={() => setActiveTab("wheel")}
                            className="bg-church-gold hover:bg-church-gold/90 text-church-burgundy font-bold px-8 py-3"
                          >
                            Explore the Liturgical Year
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Seasons Overview Grid */}
                <div>
                  <h2 className="text-4xl font-bold text-church-burgundy text-center mb-12">
                    The Six Liturgical Seasons
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {enhancedSeasons.map((season, index) => (
                      <Card key={index} className="shadow-xl border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" style={{ borderLeftColor: season.color }}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl text-church-burgundy">{season.name}</CardTitle>
                            <div 
                              className="w-8 h-8 rounded-full shadow-lg"
                              style={{ backgroundColor: season.color }}
                            />
                          </div>
                          <p className="text-gray-600">{season.shortDescription}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4 leading-relaxed">{season.description}</p>
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-church-burgundy">Duration: </span>
                              <span className="text-gray-600">{season.duration}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-church-burgundy">Key Themes: </span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {season.themes.slice(0, 3).map((theme, i) => (
                                  <Badge key={i} variant="outline" className="bg-church-cream text-church-burgundy">
                                    {theme}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Understanding Colors Section */}
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-church-cream via-white to-church-cream/50">
                  <CardContent className="p-12">
                    <div className="text-center mb-12">
                      <Info className="w-16 h-16 text-church-burgundy mx-auto mb-6" />
                      <h2 className="text-4xl font-bold text-church-burgundy mb-6">
                        Understanding Liturgical Colors
                      </h2>
                      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Colors in the liturgy help us understand the spiritual significance of each season and feast
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-purple-600 mx-auto mb-4 shadow-lg"></div>
                        <h3 className="font-bold text-purple-800 mb-2">Purple/Violet</h3>
                        <p className="text-sm text-gray-600">Penance & Preparation</p>
                        <p className="text-xs text-gray-500 mt-2">Advent & Lent</p>
                      </div>
                      
                      <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-200 mx-auto mb-4 shadow-lg"></div>
                        <h3 className="font-bold text-gray-800 mb-2">White/Gold</h3>
                        <p className="text-sm text-gray-600">Joy & Glory</p>
                        <p className="text-xs text-gray-500 mt-2">Christmas & Easter</p>
                      </div>
                      
                      <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-green-600 mx-auto mb-4 shadow-lg"></div>
                        <h3 className="font-bold text-green-800 mb-2">Green</h3>
                        <p className="text-sm text-gray-600">Growth & Hope</p>
                        <p className="text-xs text-gray-500 mt-2">Ordinary Time</p>
                      </div>
                      
                      <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-red-600 mx-auto mb-4 shadow-lg"></div>
                        <h3 className="font-bold text-red-800 mb-2">Red</h3>
                        <p className="text-sm text-gray-600">Holy Spirit & Martyrs</p>
                        <p className="text-xs text-gray-500 mt-2">Pentecost & Saints</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Liturgical Year Wheel Tab */}
            <TabsContent value="wheel" className="animate-fade-in">
              <LiturgicalYearWheel />
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar" className="animate-fade-in">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-church-burgundy mb-6">
                    Liturgical Events Calendar
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Explore upcoming liturgical events, feast days, and parish celebrations. 
                    Click on any date to see what the Church celebrates on that day.
                  </p>
                </div>
                
                <EnhancedCalendar />
                
                <Card className="shadow-xl bg-gradient-to-br from-church-burgundy to-church-navy text-white">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-16 h-16 text-church-gold mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                    <p className="text-white/90 text-lg mb-6">
                      Never miss an important liturgical celebration. Subscribe to our parish calendar 
                      or check back regularly for updates on feast days and special events.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button className="bg-church-gold hover:bg-church-gold/90 text-church-burgundy font-semibold">
                        Subscribe to Calendar
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-church-burgundy">
                        Download PDF Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LiturgicalCalendarPage;