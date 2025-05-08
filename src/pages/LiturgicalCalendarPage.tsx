
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '@/components/common/SanityImage';
import { Calendar as CalendarIcon, Info, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import PortableText from '@/components/common/PortableText';
import { format, parseISO } from 'date-fns';
import ChurchCalendar from '@/components/common/ChurchCalendar';
import { Button } from '@/components/ui/button';

const LiturgicalCalendarPage = () => {
  const { liturgicalCalendar, liturgicalSeasons, feastDays, isLoading } = useSanity();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Fallback seasons if Sanity data is not available
  const fallbackSeasons = [
    {
      name: "Advent",
      color: "purple",
      description: "A time of joyful expectation and preparation for the celebration of Christ's birth and his return in glory.",
      startDate: "Four Sundays before Christmas",
      endDate: "Christmas Eve",
      significance: "Advent marks the beginning of the liturgical year and is a time of preparation for the coming of Christ. It has a twofold nature: it prepares us for celebrating the birth of Jesus and also reminds us that we are awaiting his second coming at the end of time.",
      readings: "Readings focus on the prophetic anticipation of the Messiah, John the Baptist's ministry, and Mary's role in salvation history.",
      traditions: "Advent wreaths, Advent calendars, and Jesse trees are popular traditions during this season. The color purple represents penance and preparation, while pink (rose) is used on the third Sunday (Gaudete Sunday) to symbolize joy."
    },
    {
      name: "Christmas",
      color: "white",
      description: "The celebration of Jesus' nativity and the mystery of the Incarnation, extending from Christmas Day to the Baptism of the Lord.",
      startDate: "December 25",
      endDate: "Feast of the Baptism of the Lord (January)",
      significance: "Christmas celebrates the Incarnation of the Word of God, when Christ was born into the world. This season extends beyond December 25 to include several important feasts including the Holy Family, Mary Mother of God, Epiphany, and the Baptism of the Lord.",
      readings: "Readings tell the story of Jesus' birth, the visit of the Magi, and the early life of Jesus.",
      traditions: "Nativity scenes, Christmas trees, and gift-giving are common traditions. The white color symbolizes purity, joy, and the light of Christ."
    },
    {
      name: "Ordinary Time (First Part)",
      color: "green",
      description: "A period of growth and maturation in the faith, focusing on Christ's public ministry and teachings.",
      startDate: "After the Baptism of the Lord",
      endDate: "Before Ash Wednesday",
      significance: "Ordinary Time is not 'ordinary' in the sense of being common, but rather refers to the ordered or numbered weeks. This first part follows the Christmas season and focuses on Christ's public ministry, miracles, and teachings.",
      readings: "Readings follow Jesus through his public ministry, miracles, and teachings.",
      traditions: "The green color represents hope, life, and growth in faith."
    },
    {
      name: "Lent",
      color: "purple",
      description: "A 40-day period of prayer, fasting, and almsgiving in preparation for Easter, focused on repentance and spiritual renewal.",
      startDate: "Ash Wednesday",
      endDate: "Holy Thursday",
      significance: "Lent is a solemn season of penance and preparation for the celebration of Easter. It recalls Jesus' 40 days in the desert and prepares the faithful through prayer, fasting, and almsgiving.",
      readings: "Readings focus on themes of repentance, baptism, and the journey to the cross.",
      traditions: "Ash Wednesday, abstaining from meat on Fridays, Stations of the Cross, and giving up something for Lent are common practices. The purple color symbolizes penance and preparation."
    },
    {
      name: "Easter",
      color: "white",
      description: "The most important and joyous celebration of the liturgical year, commemorating Christ's resurrection and triumph over death.",
      startDate: "Easter Sunday",
      endDate: "Pentecost Sunday",
      significance: "Easter is the most important season of the liturgical year, celebrating Christ's resurrection and victory over sin and death. It lasts for 50 days, culminating in the feast of Pentecost, which celebrates the descent of the Holy Spirit.",
      readings: "Readings tell the story of the resurrection, the early Church, and the Holy Spirit.",
      traditions: "The Paschal candle, renewed baptismal promises, and the proclamation 'Alleluia' are important elements. White symbolizes joy, purity, and the resurrection."
    },
    {
      name: "Ordinary Time (Second Part)",
      color: "green",
      description: "Continues the period of growth, extending from Pentecost until the beginning of Advent.",
      startDate: "After Pentecost",
      endDate: "Before First Sunday of Advent",
      significance: "This longest season of the liturgical year focuses on the growth of the Church under the guidance of the Holy Spirit. It includes many important feasts and culminates in the Feast of Christ the King, which emphasizes Christ's universal kingship and sovereignty.",
      readings: "Readings focus on the growth of the early Church, parables, and teachings for Christian life.",
      traditions: "The green color symbolizes hope and growth in the faith life of the Church."
    }
  ];

  // Use Sanity data if available, otherwise use fallbacks
  const seasons = liturgicalCalendar?.seasons || fallbackSeasons;
  const upcomingFeasts = liturgicalCalendar?.upcomingFeasts || feastDays || [];
  const currentSeason = liturgicalCalendar?.currentSeason || (liturgicalSeasons ? liturgicalSeasons[0] : null);

  const getLiturgicalColor = (colorName: string) => {
    const colorMap: Record<string, string> = {
      "green": "bg-emerald-600",
      "purple": "bg-purple-600",
      "rose": "bg-pink-500",
      "white": "bg-white border border-gray-200",
      "red": "bg-red-600",
      "gold": "bg-amber-400"
    };
    return colorMap[colorName.toLowerCase()] || "bg-gray-400";
  };

  const getTextClass = (colorName: string) => {
    return colorName?.toLowerCase() === "white" ? "text-gray-800" : "text-white";
  };

  const getSeasonById = (seasonId: string) => {
    return seasons.find(season => season.name === seasonId);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title={liturgicalCalendar?.title || "Liturgical Calendar"}
            subtitle={liturgicalCalendar?.subtitle || "Understanding the Sacred Rhythm of the Church Year"}
          />

          {/* Tabs for different views */}
          <Tabs defaultValue={activeTab} className="w-full mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="seasons">Seasons & Feasts</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              {/* Introduction */}
              <div className="max-w-4xl mx-auto mb-12">
                {liturgicalCalendar?.introduction ? (
                  <PortableText value={liturgicalCalendar.introduction} />
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700">
                      The liturgical calendar is the cycle of seasons and feasts that guides our worship throughout the year. It helps us to enter more deeply into the mystery of Christ's life, death, and resurrection, and to grow in our faith and understanding of God's love for us.
                    </p>
                    <p className="text-lg text-gray-700">
                      Each season has its own character, themes, and colors that enrich our spiritual journey and connect us to the universal Church across time and space. The liturgical year begins with Advent, moves through Christmas, Ordinary Time, Lent, Easter, and concludes with Ordinary Time leading back to Advent.
                    </p>
                  </div>
                )}
              </div>

              {/* Current Season Highlight */}
              {currentSeason && (
                <div className="bg-church-burgundy/10 rounded-xl p-6 md:p-8 mb-12 shadow-sm">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-4">Current Season: {currentSeason.title || currentSeason.name}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      {currentSeason.mainImage ? (
                        <SanityImage 
                          image={currentSeason.mainImage}
                          alt={currentSeason.title || currentSeason.name}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      ) : (
                        <div className="w-full h-64 bg-church-burgundy/20 flex items-center justify-center rounded-lg">
                          <CalendarIcon className="w-16 h-16 text-church-burgundy/50" />
                        </div>
                      )}
                      
                      <div className="flex items-center mt-4 gap-3">
                        <div 
                          className={`w-6 h-6 rounded-full ${getLiturgicalColor(currentSeason.color || 'green')}`}
                          title={`Liturgical color: ${currentSeason.color || 'Green'}`}
                        ></div>
                        <p className="font-medium">Liturgical Color: {currentSeason.color || 'Green'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-4">{currentSeason.description}</p>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Period:</strong> {currentSeason.startDate || currentSeason.start} - {currentSeason.endDate || currentSeason.end}
                      </p>
                      {currentSeason.significance && (
                        <p className="text-sm text-gray-600">{currentSeason.significance}</p>
                      )}
                      <Button 
                        variant="outline" 
                        className="mt-4 text-church-burgundy border-church-burgundy hover:bg-church-burgundy/10"
                        onClick={() => {
                          setActiveTab("seasons");
                          setSelectedSeason(currentSeason.title || currentSeason.name);
                        }}
                      >
                        Learn more about this season
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Upcoming Feast Days */}
              <h2 className="text-2xl font-bold text-church-burgundy mb-6">Upcoming Feast Days</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {upcomingFeasts.slice(0, 6).map((feast, index) => (
                  <Card key={index} className="shadow-sm overflow-hidden border-t-4" style={{ 
                    borderTopColor: feast.color ? 
                      feast.color.startsWith('#') ? feast.color : 
                      (['red', 'green', 'white', 'purple', 'gold', 'rose'].includes(feast.color.toLowerCase()) ? 
                        `var(--${feast.color.toLowerCase()})` : 'var(--gold)') : 
                      'var(--gold)' 
                  }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {feast.title}
                        {feast.type && (
                          <Badge variant="outline" className="ml-2 text-xs font-normal">
                            {feast.type}
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-church-gold font-medium mb-2">
                        {typeof feast.date === 'string' && 
                          (feast.date.includes('-') ? format(parseISO(feast.date), 'MMMM d, yyyy') : feast.date)
                        }
                      </p>
                      <p className="text-gray-700 line-clamp-3">{feast.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-church-burgundy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-2">Understanding Liturgical Colors</h3>
                    <div className="prose prose-sm max-w-none text-gray-700">
                      <p>Liturgical colors are used throughout the year to symbolize different aspects of our faith:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-white border border-gray-200"></div>
                          <span><strong>White/Gold:</strong> Joy, purity, glory (Christmas, Easter)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-600"></div>
                          <span><strong>Green:</strong> Hope, growth (Ordinary Time)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                          <span><strong>Purple:</strong> Penance, preparation (Advent, Lent)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-red-600"></div>
                          <span><strong>Red:</strong> Holy Spirit, martyrdom (Pentecost, martyrs' feasts)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                          <span><strong>Rose:</strong> Joy amid penance (Gaudete and Laetare Sundays)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar" className="animate-fade-in">
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-gray-700 mb-8">
                  Explore upcoming liturgical events, feast days, and parish activities in our interactive calendar. You can view events for specific dates and plan your participation in the liturgical life of the church.
                </p>
                
                <ChurchCalendar className="mb-12" />
                
                <div className="bg-church-burgundy/5 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-church-burgundy mb-3">Key Upcoming Liturgical Dates</h3>
                  <ul className="space-y-3">
                    {upcomingFeasts.slice(0, 5).map((feast, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${getLiturgicalColor(feast.color || 'gold')}`}></div>
                        <span className="font-medium">{feast.title}</span>
                        <span className="text-gray-600">—</span>
                        <span className="text-gray-600">
                          {typeof feast.date === 'string' && 
                            (feast.date.includes('-') ? format(parseISO(feast.date), 'MMMM d, yyyy') : feast.date)
                          }
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Seasons Tab */}
            <TabsContent value="seasons" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8">
                  The liturgical year is divided into distinct seasons, each with its own character, themes, and spiritual focus. Explore each season below to understand its significance in the life of the Church.
                </p>
                
                {/* Liturgical Year Diagram */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-church-burgundy mb-4">The Liturgical Year Cycle</h3>
                  <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80">
                    {/* Simple visual representation of the liturgical year as a circle */}
                    <div className="absolute inset-0 rounded-full border-8 border-dashed border-gray-200"></div>
                    
                    {/* Season markers around the circle */}
                    {fallbackSeasons.map((season, index) => {
                      const angle = (index / fallbackSeasons.length) * 2 * Math.PI;
                      const radius = 45; // percentage of circle size
                      const top = 50 - Math.cos(angle) * radius;
                      const left = 50 + Math.sin(angle) * radius;
                      
                      return (
                        <div 
                          key={season.name}
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                          style={{ top: `${top}%`, left: `${left}%` }}
                          onClick={() => setSelectedSeason(season.name)}
                        >
                          <div 
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${getLiturgicalColor(season.color)} ${getTextClass(season.color)} text-sm md:text-base font-medium shadow-md hover:scale-110 transition-transform`}
                            title={season.name}
                          >
                            {season.name.substring(0, 1)}
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Center label */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="bg-church-burgundy text-white rounded-full w-20 h-20 flex items-center justify-center">
                        <div className="text-xs">
                          <p className="font-bold">Liturgical</p>
                          <p className="font-bold">Year</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Seasons Accordion */}
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full"
                  defaultValue={selectedSeason || undefined}
                  value={selectedSeason || undefined}
                  onValueChange={setSelectedSeason}
                >
                  {seasons.map((season, index) => (
                    <AccordionItem key={index} value={season.name}>
                      <AccordionTrigger className="hover:bg-gray-50 rounded-t px-3">
                        <div className="flex items-center gap-3">
                          <div 
                            className={`w-4 h-4 rounded-full ${getLiturgicalColor(season.color || 'green')}`}
                          ></div>
                          <span>{season.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="bg-gray-50/50 rounded-b px-4 pb-4">
                        <div className="grid sm:grid-cols-3 gap-6">
                          {/* Season Image - if available */}
                          {season.image && (
                            <div className="sm:col-span-1">
                              <SanityImage 
                                image={season.image}
                                alt={season.name}
                                className="w-full h-40 object-cover rounded-lg"
                              />
                            </div>
                          )}
                          
                          {/* Season Details */}
                          <div className={season.image ? "sm:col-span-2" : "sm:col-span-3"}>
                            <h4 className="font-semibold text-lg text-church-burgundy mb-2">{season.name}</h4>
                            <p className="text-gray-700 mb-3">{season.description}</p>
                            
                            <div className="mt-4 space-y-3 text-sm">
                              <p><strong>Period:</strong> {season.startDate || season.start} to {season.endDate || season.end}</p>
                              
                              {season.significance && (
                                <div>
                                  <p className="font-medium text-church-burgundy">Spiritual Significance</p>
                                  <p className="text-gray-700">{season.significance}</p>
                                </div>
                              )}
                              
                              {season.readings && (
                                <div>
                                  <p className="font-medium text-church-burgundy">Notable Readings</p>
                                  <p className="text-gray-700">{season.readings}</p>
                                </div>
                              )}
                              
                              {season.traditions && (
                                <div>
                                  <p className="font-medium text-church-burgundy">Traditions & Customs</p>
                                  <p className="text-gray-700">{season.traditions}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {/* Major Feast Days Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6">Major Feast Days</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {upcomingFeasts.map((feast, index) => (
                      <Card key={index} className="shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {feast.title}
                            {feast.type && (
                              <Badge variant="outline" className="ml-auto text-xs">
                                {feast.type}
                              </Badge>
                            )}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-church-gold font-medium mb-2">
                            {typeof feast.date === 'string' && 
                              (feast.date.includes('-') ? format(parseISO(feast.date), 'MMMM d, yyyy') : feast.date)
                            }
                          </p>
                          <p className="text-gray-700">{feast.description}</p>
                          
                          {feast.readings && feast.readings.length > 0 && (
                            <div className="mt-3">
                              <p className="font-medium text-sm text-church-burgundy">Readings:</p>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {feast.readings.map((reading: any, idx: number) => (
                                  <li key={idx}>{reading.citation}: {reading.title}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                        {feast.color && (
                          <CardFooter className="pt-0 pb-3">
                            <div className="flex items-center gap-2">
                              <div 
                                className={`w-3 h-3 rounded-full ${getLiturgicalColor(feast.color)}`}
                              ></div>
                              <span className="text-xs text-gray-500">Liturgical color: {feast.color}</span>
                            </div>
                          </CardFooter>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
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
