
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import ChurchCalendar from '@/components/common/ChurchCalendar';
import { CalendarDays, Grid3X3, List, Clock } from 'lucide-react';
import { format, addDays, startOfWeek, startOfMonth, addMonths, subMonths, addWeeks, subWeeks } from 'date-fns';

// Sample events data with expanded properties
const churchEvents = [
  {
    id: 1,
    title: "Sunday Mass",
    date: new Date(2024, 5, 2), // June 2, 2024
    time: "10:00 AM",
    location: "Main Church",
    description: "Regular Sunday worship service",
    category: "Liturgy",
    ministry: "Liturgical",
    season: "Ordinary Time"
  },
  {
    id: 2,
    title: "First Friday Adoration",
    date: new Date(2024, 5, 7), // June 7, 2024
    time: "6:00 PM",
    location: "Adoration Chapel",
    description: "Eucharistic adoration and benediction",
    category: "Prayer",
    ministry: "Prayer Ministry",
    season: "Ordinary Time"
  },
  {
    id: 3,
    title: "Parish Council Meeting",
    date: new Date(2024, 5, 10), // June 10, 2024
    time: "7:00 PM",
    location: "Parish Hall",
    description: "Monthly meeting of the parish council",
    category: "Meeting",
    ministry: "Parish Administration",
    season: "Ordinary Time"
  },
  {
    id: 4,
    title: "Youth Group Gathering",
    date: new Date(2024, 5, 14), // June 14, 2024
    time: "5:30 PM",
    location: "Youth Center",
    description: "Activities and fellowship for parish youth",
    category: "Youth",
    ministry: "Youth Ministry",
    season: "Ordinary Time"
  },
  {
    id: 5,
    title: "Corpus Christi Procession",
    date: new Date(2024, 5, 16), // June 16, 2024
    time: "11:30 AM",
    location: "Church Grounds",
    description: "Solemn procession with the Blessed Sacrament",
    category: "Liturgy",
    ministry: "Liturgical",
    season: "Ordinary Time"
  },
  {
    id: 6,
    title: "Bible Study",
    date: new Date(2024, 5, 20), // June 20, 2024
    time: "6:30 PM",
    location: "Parish Library",
    description: "Weekly Scripture study group",
    category: "Education",
    ministry: "Faith Formation",
    season: "Ordinary Time"
  },
  {
    id: 7,
    title: "St. John the Baptist Feast Day",
    date: new Date(2024, 5, 24), // June 24, 2024
    time: "9:00 AM",
    location: "Main Church",
    description: "Special Mass for the feast of St. John the Baptist",
    category: "Feast Day",
    ministry: "Liturgical",
    season: "Ordinary Time"
  },
  {
    id: 8,
    title: "Parish Food Drive",
    date: new Date(2024, 5, 28), // June 28, 2024
    time: "9:00 AM - 2:00 PM",
    location: "Parish Hall",
    description: "Collection of non-perishable food items for local food bank",
    category: "Outreach",
    ministry: "Social Justice",
    season: "Ordinary Time"
  }
];

// Create a list of unique ministries, categories, and seasons for filters
const ministries = [...new Set(churchEvents.map(event => event.ministry))];
const categories = [...new Set(churchEvents.map(event => event.category))];
const seasons = [...new Set(churchEvents.map(event => event.season))];

const ParishCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<"monthly" | "weekly" | "agenda">("monthly");
  const [selectedMinistry, setSelectedMinistry] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSeason, setSelectedSeason] = useState<string>("All");
  
  // Filter events based on selections
  const filteredEvents = churchEvents.filter(event => {
    const matchesMinistry = selectedMinistry === "All" || event.ministry === selectedMinistry;
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSeason = selectedSeason === "All" || event.season === selectedSeason;
    
    return matchesMinistry && matchesCategory && matchesSeason;
  });
  
  // Get events for the current view (week or month)
  const getEventsForCurrentView = () => {
    if (view === "monthly") {
      const monthStart = startOfMonth(date);
      const monthEnd = addMonths(monthStart, 1);
      
      return filteredEvents.filter(event => 
        event.date >= monthStart && event.date < monthEnd
      );
    } else if (view === "weekly") {
      const weekStart = startOfWeek(date);
      const weekEnd = addWeeks(weekStart, 1);
      
      return filteredEvents.filter(event => 
        event.date >= weekStart && event.date < weekEnd
      );
    }
    
    // For agenda view, return all filtered events
    return filteredEvents;
  };

  const viewEvents = getEventsForCurrentView();
  
  // Navigation functions
  const navigateToPrevious = () => {
    if (view === "monthly") {
      setDate(subMonths(date, 1));
    } else if (view === "weekly") {
      setDate(subWeeks(date, 1));
    }
  };
  
  const navigateToNext = () => {
    if (view === "monthly") {
      setDate(addMonths(date, 1));
    } else if (view === "weekly") {
      setDate(addWeeks(date, 1));
    }
  };
  
  const navigateToToday = () => {
    setDate(new Date());
  };

  // Helpers to format dates for display
  const formatViewTitle = () => {
    if (view === "monthly") {
      return format(date, 'MMMM yyyy');
    } else if (view === "weekly") {
      const weekStart = startOfWeek(date);
      const weekEnd = addDays(weekStart, 6);
      return `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`;
    } else {
      return "Upcoming Events";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Parish Calendar"
            subtitle="Stay connected with all parish events and activities"
          />
          
          <div className="max-w-5xl mx-auto mt-8">
            {/* Filters */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg text-church-burgundy flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Calendar Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Ministry</label>
                    <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Ministry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Ministries</SelectItem>
                        {ministries.map(ministry => (
                          <SelectItem key={ministry} value={ministry}>{ministry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Liturgical Season</label>
                    <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Seasons</SelectItem>
                        {seasons.map(season => (
                          <SelectItem key={season} value={season}>{season}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Calendar View Controls */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-church-burgundy">{formatViewTitle()}</h2>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex mr-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={navigateToPrevious}
                        className="rounded-r-none"
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={navigateToToday}
                        className="rounded-none border-l-0 border-r-0"
                      >
                        Today
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={navigateToNext}
                        className="rounded-l-none"
                      >
                        Next
                      </Button>
                    </div>
                    
                    <Tabs defaultValue={view} onValueChange={(value) => setView(value as "monthly" | "weekly" | "agenda")}>
                      <TabsList className="grid grid-cols-3 w-[180px]">
                        <TabsTrigger value="monthly" className="flex items-center justify-center">
                          <Grid3X3 className="h-4 w-4" />
                        </TabsTrigger>
                        <TabsTrigger value="weekly" className="flex items-center justify-center">
                          <CalendarDays className="h-4 w-4" />
                        </TabsTrigger>
                        <TabsTrigger value="agenda" className="flex items-center justify-center">
                          <List className="h-4 w-4" />
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Calendar Views */}
            <div className="mb-12">
              {view === "monthly" && (
                <ChurchCalendar className="mb-6" />
              )}
              
              {view === "weekly" && (
                <Card className="border-church-burgundy/10">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({length: 7}).map((_, i) => {
                        const day = addDays(startOfWeek(date), i);
                        const dayEvents = filteredEvents.filter(
                          event => event.date.getDate() === day.getDate() && 
                                  event.date.getMonth() === day.getMonth() && 
                                  event.date.getFullYear() === day.getFullYear()
                        );
                        
                        return (
                          <div key={i} className="min-h-[200px] border rounded-md p-2">
                            <div className="text-center mb-2 font-semibold">
                              <div className="text-xs text-gray-500">{format(day, 'EEE')}</div>
                              <div className="text-lg text-church-burgundy">{format(day, 'd')}</div>
                            </div>
                            <div className="space-y-1 text-sm">
                              {dayEvents.map(event => (
                                <div 
                                  key={event.id} 
                                  className="p-1 rounded bg-church-burgundy/10 truncate hover:bg-church-burgundy/20 cursor-pointer"
                                >
                                  {event.time} - {event.title}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {view === "agenda" && (
                <div className="space-y-4">
                  {viewEvents.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <p className="text-gray-500">No events match your filter criteria.</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => {
                          setSelectedMinistry("All");
                          setSelectedCategory("All");
                          setSelectedSeason("All");
                        }}
                        className="mt-2"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    viewEvents
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .map((event) => (
                        <Card key={event.id} className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex flex-col sm:flex-row justify-between gap-4">
                              <div className="flex gap-4 items-start">
                                <div className="bg-church-burgundy/10 p-3 rounded-lg text-center min-w-[60px]">
                                  <div className="text-xs text-gray-600">{format(event.date, 'MMM')}</div>
                                  <div className="text-xl font-bold text-church-burgundy">{format(event.date, 'd')}</div>
                                </div>
                                <div>
                                  <h3 className="font-bold text-church-burgundy">{event.title}</h3>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3 text-church-gold" />
                                      <span>{event.time}</span>
                                    </div>
                                    <span>{event.location}</span>
                                  </div>
                                  <p className="text-sm text-gray-700">{event.description}</p>
                                  <div className="mt-2 flex flex-wrap gap-1">
                                    <span className="text-xs bg-church-burgundy/10 px-2 py-0.5 rounded-full">
                                      {event.ministry}
                                    </span>
                                    <span className="text-xs bg-church-gold/10 px-2 py-0.5 rounded-full">
                                      {event.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="shrink-0 sm:self-center">
                                <Button variant="outline" size="sm" className="whitespace-nowrap">
                                  Add to Calendar
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                  )}
                </div>
              )}
            </div>
            
            {/* Sync Options */}
            <Card className="bg-church-burgundy/5 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-church-burgundy mb-2">
                      Stay Updated with Parish Events
                    </h3>
                    <p className="text-gray-700">
                      Subscribe to our parish calendar to receive updates and reminders for upcoming events.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                      Google Calendar
                    </Button>
                    <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                      iCal Download
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

export default ParishCalendar;
