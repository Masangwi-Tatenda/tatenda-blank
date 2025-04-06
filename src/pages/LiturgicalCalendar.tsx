
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSanity } from '@/contexts/SanityContext';

// Define types
interface LiturgicalSeason {
  id: string;
  name: string;
  start: Date;
  end: Date;
  color: string;
  description: string;
  significance: string;
  readings: string;
  traditions: string;
}

interface FeastDay {
  id: string;
  name: string;
  date: Date;
  type: 'Solemnity' | 'Feast' | 'Memorial' | 'Optional Memorial';
  color: string;
  description: string;
}

// Sample data for 2025 liturgical year
const liturgicalSeasons: LiturgicalSeason[] = [
  {
    id: "advent",
    name: "Advent",
    start: new Date("2024-12-01"),
    end: new Date("2024-12-24"),
    color: "purple",
    description: "Advent is a season of preparation for the birth of Christ. The word 'advent' means 'coming' or 'arrival.'",
    significance: "Advent marks the beginning of the liturgical year and is a time of expectant waiting and preparation for both the celebration of the Nativity of Jesus at Christmas and the return of Jesus at the Second Coming.",
    readings: "The readings during Advent focus on the prophets who foretold the coming of the Messiah, John the Baptist who prepared the way, and Mary's acceptance of God's will.",
    traditions: "Advent wreaths, Advent calendars, and the progressive lighting of the four candles (three purple, one rose) are common traditions during this season."
  },
  {
    id: "christmas",
    name: "Christmas",
    start: new Date("2024-12-25"),
    end: new Date("2025-01-12"),
    color: "white",
    description: "Christmas is the celebration of the birth of Jesus Christ, the incarnation of God as man.",
    significance: "Christmas celebrates God becoming human in Jesus Christ to bring salvation to the world. It's a season of joy, peace, and goodwill.",
    readings: "The Christmas season readings focus on the birth narratives of Jesus from the Gospels of Matthew and Luke, as well as the manifestation of Christ to all nations.",
    traditions: "Nativity scenes, Christmas trees, gift-giving, and special liturgies like Midnight Mass are common traditions."
  },
  {
    id: "ordinary-time-1",
    name: "Ordinary Time (First Part)",
    start: new Date("2025-01-13"),
    end: new Date("2025-02-25"),
    color: "green",
    description: "Ordinary Time is the period in the liturgical calendar outside of the major seasons (Advent, Christmas, Lent, and Easter).",
    significance: "During Ordinary Time, the Church focuses on Christ's public ministry and teachings. The term 'ordinary' doesn't mean 'common' but refers to 'ordinal' or 'numbered' time.",
    readings: "The readings during Ordinary Time systematically work through Christ's life and ministry as presented in one of the synoptic Gospels (Matthew, Mark, or Luke).",
    traditions: "While there are fewer specific traditions for Ordinary Time, it's a period for growth in faith and understanding of the mysteries of Christ's life."
  },
  {
    id: "lent",
    name: "Lent",
    start: new Date("2025-02-26"),
    end: new Date("2025-04-12"),
    color: "purple",
    description: "Lent is a 40-day season of prayer, fasting, and almsgiving that begins on Ash Wednesday and ends at sundown on Holy Thursday.",
    significance: "Lent prepares the faithful for Easter through a time of repentance, spiritual growth, and renewal. It recalls Jesus' 40 days in the wilderness and the Israelites' 40 years in the desert.",
    readings: "Lenten readings focus on themes of conversion, sin, mercy, and redemption, culminating in the Passion narratives during Holy Week.",
    traditions: "Ashes on Ash Wednesday, abstaining from meat on Fridays, giving up something for Lent, Stations of the Cross, and increased prayer and almsgiving are common practices."
  },
  {
    id: "sacred-paschal-triduum",
    name: "Sacred Paschal Triduum",
    start: new Date("2025-04-13"),
    end: new Date("2025-04-15"),
    color: "varies",
    description: "The Paschal Triduum is the summit of the liturgical year, commemorating Christ's suffering, death, and resurrection.",
    significance: "These three days (Holy Thursday, Good Friday, and Holy Saturday/Easter Vigil) celebrate the Paschal Mystery—the passion, death, burial, and resurrection of Jesus Christ.",
    readings: "The readings during the Triduum follow Christ's last supper, passion, death, and resurrection, drawing heavily from the Gospel of John.",
    traditions: "Washing of feet on Holy Thursday, Adoration of the Cross on Good Friday, and the Easter Vigil with its service of light, baptisms, and the first Eucharist of Easter."
  },
  {
    id: "easter",
    name: "Easter",
    start: new Date("2025-04-16"),
    end: new Date("2025-06-04"),
    color: "white",
    description: "Easter is the celebration of Christ's resurrection from the dead and is the most important Christian feast.",
    significance: "Easter celebrates Christ's victory over sin and death and the new life offered to all who believe. It is the foundation of Christian faith.",
    readings: "The Easter season readings focus on post-resurrection appearances of Jesus, the early Church as described in Acts, and passages from 1 Peter and Revelation.",
    traditions: "The Easter Vigil with fire and water symbolism, renewal of baptismal promises, Easter eggs symbolizing new life, and the Easter candle representing the light of Christ."
  },
  {
    id: "ordinary-time-2",
    name: "Ordinary Time (Second Part)",
    start: new Date("2025-06-05"),
    end: new Date("2025-11-29"),
    color: "green",
    description: "The second and longer period of Ordinary Time spans from after Pentecost until the beginning of Advent.",
    significance: "This extended period allows for a deeper exploration of Christ's ministry and teaching, as well as the life and mission of the Church.",
    readings: "The readings continue the systematic journey through one of the synoptic Gospels and corresponding epistles.",
    traditions: "Various feasts and solemnities occur during this time, including Trinity Sunday, Corpus Christi, the Assumption, and All Saints Day."
  }
];

// Sample major feast days for 2025
const majorFeastDays: FeastDay[] = [
  {
    id: "christmas",
    name: "Christmas - Nativity of the Lord",
    date: new Date("2024-12-25"),
    type: "Solemnity",
    color: "white",
    description: "Celebration of the birth of Jesus Christ in Bethlehem."
  },
  {
    id: "mary-mother-of-god",
    name: "Mary, Mother of God",
    date: new Date("2025-01-01"),
    type: "Solemnity",
    color: "white",
    description: "Honors Mary as the Mother of God (Theotokos)."
  },
  {
    id: "epiphany",
    name: "Epiphany",
    date: new Date("2025-01-06"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates the manifestation of Christ to the Gentiles, represented by the Magi."
  },
  {
    id: "ash-wednesday",
    name: "Ash Wednesday",
    date: new Date("2025-02-26"),
    type: "Feast",
    color: "purple",
    description: "Marks the beginning of Lent with the imposition of ashes."
  },
  {
    id: "joseph",
    name: "St. Joseph, Spouse of the Blessed Virgin Mary",
    date: new Date("2025-03-19"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates the foster father of Jesus and patron of the universal Church."
  },
  {
    id: "annunciation",
    name: "Annunciation of the Lord",
    date: new Date("2025-03-25"),
    type: "Solemnity",
    color: "white",
    description: "Commemorates the announcement by the angel Gabriel to the Virgin Mary of her conception of Christ."
  },
  {
    id: "palm-sunday",
    name: "Palm Sunday",
    date: new Date("2025-04-06"),
    type: "Feast",
    color: "red",
    description: "Commemorates Jesus' triumphal entry into Jerusalem, beginning Holy Week."
  },
  {
    id: "holy-thursday",
    name: "Holy Thursday",
    date: new Date("2025-04-10"),
    type: "Feast",
    color: "white",
    description: "Commemorates the Last Supper and institution of the Eucharist."
  },
  {
    id: "good-friday",
    name: "Good Friday",
    date: new Date("2025-04-11"),
    type: "Feast",
    color: "red",
    description: "Commemorates the crucifixion and death of Jesus Christ."
  },
  {
    id: "easter-sunday",
    name: "Easter Sunday",
    date: new Date("2025-04-13"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates the resurrection of Jesus Christ from the dead."
  },
  {
    id: "divine-mercy",
    name: "Divine Mercy Sunday",
    date: new Date("2025-04-20"),
    type: "Feast",
    color: "white",
    description: "Celebrates the Divine Mercy of Jesus Christ, as revealed to St. Faustina Kowalska."
  },
  {
    id: "ascension",
    name: "Ascension of the Lord",
    date: new Date("2025-05-22"),
    type: "Solemnity",
    color: "white",
    description: "Commemorates Jesus' bodily ascension into heaven."
  },
  {
    id: "pentecost",
    name: "Pentecost Sunday",
    date: new Date("2025-06-01"),
    type: "Solemnity",
    color: "red",
    description: "Celebrates the descent of the Holy Spirit upon the Apostles and the Virgin Mary."
  },
  {
    id: "trinity",
    name: "Trinity Sunday",
    date: new Date("2025-06-08"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates the Christian doctrine of the Trinity: Father, Son, and Holy Spirit."
  },
  {
    id: "corpus-christi",
    name: "Corpus Christi",
    date: new Date("2025-06-15"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates the Real Presence of the Body and Blood of Jesus Christ in the Eucharist."
  },
  {
    id: "assumption",
    name: "Assumption of the Blessed Virgin Mary",
    date: new Date("2025-08-15"),
    type: "Solemnity",
    color: "white",
    description: "Commemorates the taking up of Mary, body and soul, into heaven."
  },
  {
    id: "all-saints",
    name: "All Saints Day",
    date: new Date("2025-11-01"),
    type: "Solemnity",
    color: "white",
    description: "Honors all saints, known and unknown."
  },
  {
    id: "christ-the-king",
    name: "Christ the King",
    date: new Date("2025-11-23"),
    type: "Solemnity",
    color: "white",
    description: "Celebrates Christ's kingship and sovereignty over all creation, marking the end of the liturgical year."
  }
];

// Helper function to get color class based on liturgical color
const getLiturgicalColorClass = (color: string) => {
  switch (color.toLowerCase()) {
    case 'green':
      return "bg-green-500";
    case 'purple':
      return "bg-purple-600";
    case 'white':
      return "bg-amber-100 border border-amber-300";
    case 'red':
      return "bg-red-600";
    case 'rose':
      return "bg-pink-400";
    case 'gold':
      return "bg-yellow-500";
    case 'black':
      return "bg-black";
    case 'varies':
      return "bg-gradient-to-r from-purple-600 via-red-600 to-white";
    default:
      return "bg-gray-400";
  }
};

// Function to find the liturgical season for a given date
const findLiturgicalSeason = (date: Date): LiturgicalSeason | undefined => {
  return liturgicalSeasons.find(season => 
    date >= season.start && date <= season.end
  );
};

// Function to find a feast day for a given date
const findFeastDay = (date: Date): FeastDay | undefined => {
  return majorFeastDays.find(feast => 
    feast.date.getDate() === date.getDate() && 
    feast.date.getMonth() === date.getMonth()
  );
};

const LiturgicalCalendar = () => {
  // State for the selected date in the calendar
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentSeason, setCurrentSeason] = useState<LiturgicalSeason | undefined>();
  const [feastDay, setFeastDay] = useState<FeastDay | undefined>();
  
  // Get data for the selected date
  useEffect(() => {
    const season = findLiturgicalSeason(selectedDate);
    const feast = findFeastDay(selectedDate);
    
    setCurrentSeason(season);
    setFeastDay(feast);
  }, [selectedDate]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545990702-9a94cf7d8c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Liturgical Calendar</h1>
                <p className="text-white/90 max-w-2xl mx-auto px-4">
                  Exploring the sacred rhythm of time in the Catholic tradition
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calendar Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="seasons">Seasons</TabsTrigger>
                <TabsTrigger value="feasts">Feast Days</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              
              {/* Calendar View */}
              <TabsContent value="calendar" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Calendar Component */}
                  <Card className="shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-church-burgundy flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        2025 Liturgical Calendar
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => date && setSelectedDate(date)}
                        className="rounded-md border"
                        components={{
                          DayContent: ({ date }) => {
                            const feast = findFeastDay(date);
                            const season = findLiturgicalSeason(date);
                            const colorClass = feast 
                              ? getLiturgicalColorClass(feast.color) 
                              : season 
                                ? getLiturgicalColorClass(season.color)
                                : "";
                                
                            return (
                              <div className="relative w-full h-full flex items-center justify-center">
                                <div>{date.getDate()}</div>
                                {(feast || season) && (
                                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 ${colorClass} rounded-full`} />
                                )}
                              </div>
                            );
                          },
                        }}
                      />
                    </CardContent>
                  </Card>
                  
                  {/* Selected Date Details */}
                  <Card className="shadow-md md:col-span-2">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between">
                      <CardTitle className="text-xl text-church-burgundy">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </CardTitle>
                      <div className="flex space-x-1">
                        <button
                          className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-200"
                          onClick={() => {
                            const newDate = new Date(selectedDate);
                            newDate.setDate(newDate.getDate() - 1);
                            setSelectedDate(newDate);
                          }}
                        >
                          <ChevronLeft className="h-5 w-5 text-church-burgundy" />
                        </button>
                        <button
                          className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-200"
                          onClick={() => {
                            const newDate = new Date(selectedDate);
                            newDate.setDate(newDate.getDate() + 1);
                            setSelectedDate(newDate);
                          }}
                        >
                          <ChevronRight className="h-5 w-5 text-church-burgundy" />
                        </button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {feastDay ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-4 w-4 rounded-full ${getLiturgicalColorClass(feastDay.color)}`}></div>
                            <h3 className="text-lg font-bold">{feastDay.name}</h3>
                            <Badge variant="outline" className="ml-auto">
                              {feastDay.type}
                            </Badge>
                          </div>
                          <p className="text-gray-700">{feastDay.description}</p>
                          
                          {currentSeason && (
                            <div className="pt-4 border-t mt-4">
                              <p className="text-sm text-gray-500 mb-1">This date falls within:</p>
                              <div className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${getLiturgicalColorClass(currentSeason.color)}`}></div>
                                <span className="font-medium">{currentSeason.name}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : currentSeason ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-4 w-4 rounded-full ${getLiturgicalColorClass(currentSeason.color)}`}></div>
                            <h3 className="text-lg font-bold">{currentSeason.name}</h3>
                          </div>
                          <p className="text-gray-700">{currentSeason.description}</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-40">
                          <p className="text-gray-500 text-center">
                            No specific liturgical information available for this date.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Seasons View */}
              <TabsContent value="seasons">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {liturgicalSeasons.map(season => (
                      <Card key={season.id} className="overflow-hidden">
                        <div className={`h-2 ${getLiturgicalColorClass(season.color)}`}></div>
                        <CardHeader>
                          <CardTitle className="text-lg">{season.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Dates:</span>{' '}
                            {season.start.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})} - {season.end.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                          </p>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Liturgical Color:</span>{' '}
                            <span className="capitalize">{season.color}</span>
                          </p>
                          <p className="text-sm">{season.description}</p>
                          
                          <button
                            className="text-church-burgundy text-sm font-medium mt-2 inline-flex items-center"
                            onClick={() => setSelectedDate(new Date(season.start))}
                          >
                            View in Calendar
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
                    {liturgicalSeasons.map(season => (
                      <AccordionItem key={season.id} value={season.id}>
                        <AccordionTrigger className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-3 w-3 rounded-full ${getLiturgicalColorClass(season.color)}`}></div>
                            <span>{season.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-church-burgundy">Significance</h4>
                              <p className="text-gray-700 mt-1">{season.significance}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-church-burgundy">Scripture Readings</h4>
                              <p className="text-gray-700 mt-1">{season.readings}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-church-burgundy">Traditions & Customs</h4>
                              <p className="text-gray-700 mt-1">{season.traditions}</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
              
              {/* Feast Days View */}
              <TabsContent value="feasts">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 bg-church-burgundy/10 border-b">
                    <h2 className="text-xl font-semibold text-church-burgundy">Major Feast Days & Solemnities 2025</h2>
                    <p className="text-gray-600 mt-1">
                      Significant celebrations in the Church's liturgical calendar
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[180px]">Date</TableHead>
                          <TableHead>Celebration</TableHead>
                          <TableHead className="w-[150px]">Type</TableHead>
                          <TableHead className="w-[100px]">Color</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {majorFeastDays.map(feast => (
                          <TableRow key={feast.id} className="cursor-pointer hover:bg-gray-50" onClick={() => setSelectedDate(new Date(feast.date))}>
                            <TableCell className="font-medium">
                              {feast.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                            </TableCell>
                            <TableCell>{feast.name}</TableCell>
                            <TableCell>
                              <Badge variant={feast.type === 'Solemnity' ? 'default' : 'outline'} className={feast.type === 'Solemnity' ? 'bg-church-burgundy hover:bg-church-burgundy/90' : ''}>
                                {feast.type}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${getLiturgicalColorClass(feast.color)}`}></div>
                                <span className="capitalize">{feast.color}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              
              {/* About the Liturgical Calendar */}
              <TabsContent value="about">
                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="prose prose-sm sm:prose max-w-none">
                      <h2>Understanding the Liturgical Calendar</h2>
                      
                      <p>
                        The liturgical year, also known as the church year or Christian year, consists of the cycle of 
                        liturgical seasons in Christian churches that determines when feast days, including celebrations 
                        of saints, are to be observed, and which portions of Scripture are to be read either in an annual 
                        cycle or in a cycle of several years.
                      </p>
                      
                      <h3>Structure of the Liturgical Year</h3>
                      
                      <p>
                        The Catholic liturgical year is divided into several seasons, each with its own focus and character:
                      </p>
                      
                      <ul>
                        <li><strong>Advent</strong> - Four Sundays before Christmas, beginning the liturgical year</li>
                        <li><strong>Christmas</strong> - From Christmas Eve until the Baptism of the Lord</li>
                        <li><strong>Ordinary Time (First Part)</strong> - Between Christmas and Lent</li>
                        <li><strong>Lent</strong> - Forty days before Easter, beginning on Ash Wednesday</li>
                        <li><strong>Sacred Paschal Triduum</strong> - Holy Thursday, Good Friday, Holy Saturday</li>
                        <li><strong>Easter</strong> - Fifty days from Easter Sunday to Pentecost</li>
                        <li><strong>Ordinary Time (Second Part)</strong> - From after Pentecost until Advent</li>
                      </ul>
                      
                      <h3>Liturgical Colors</h3>
                      
                      <p>
                        The Catholic Church uses five main colors for its liturgical vestments and decorations:
                      </p>
                      
                      <ul>
                        <li><strong>Green</strong> - Used during Ordinary Time, symbolizing hope and growth in faith</li>
                        <li><strong>Purple/Violet</strong> - Used during Advent and Lent, symbolizing penance, preparation, and sorrow</li>
                        <li><strong>White/Gold</strong> - Used during Christmas and Easter, and for feasts of the Lord, Mary, and saints who were not martyrs, symbolizing purity, joy, and glory</li>
                        <li><strong>Red</strong> - Used on Palm Sunday, Good Friday, Pentecost, and feasts of martyrs, symbolizing the Holy Spirit and martyrdom</li>
                        <li><strong>Rose</strong> - Used on the Third Sunday of Advent (Gaudete Sunday) and the Fourth Sunday of Lent (Laetare Sunday), symbolizing joy amid a season of penance</li>
                      </ul>
                      
                      <div className="flex items-center gap-3 p-4 bg-church-burgundy/10 rounded-lg mt-6 mb-6">
                        <Info className="h-10 w-10 text-church-burgundy flex-shrink-0" />
                        <p className="text-sm m-0">
                          The liturgical calendar is designed to sanctify time itself, making each day and season an opportunity to encounter Christ and the mysteries of salvation throughout the year.
                        </p>
                      </div>
                      
                      <h3>Reading Cycles</h3>
                      
                      <p>
                        The Church follows a three-year cycle (A, B, C) for Sunday readings:
                      </p>
                      
                      <ul>
                        <li><strong>Year A</strong> - Primarily from the Gospel of Matthew</li>
                        <li><strong>Year B</strong> - Primarily from the Gospel of Mark</li>
                        <li><strong>Year C</strong> - Primarily from the Gospel of Luke</li>
                      </ul>
                      
                      <p>
                        Readings from the Gospel of John appear in all three years, especially during the Easter season.
                      </p>
                      
                      <p>
                        Weekday readings follow a two-year cycle (I, II) for the first reading, while the Gospel readings remain the same each year.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LiturgicalCalendar;
