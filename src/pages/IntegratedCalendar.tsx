
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
import { CalendarDays, Grid3X3, List, Clock, CalendarRange, Cross, Leaf, Users, Bookmark } from 'lucide-react';
import { format, addDays, startOfWeek, startOfMonth, addMonths, subMonths, addWeeks, subWeeks } from 'date-fns';
import { Badge } from '@/components/ui/badge';

const IntegratedCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [calendarType, setCalendarType] = useState<string>("parish");
  const [view, setView] = useState<"monthly" | "weekly" | "agenda">("monthly");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
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

  // Categories based on the selected calendar type
  const getCategories = () => {
    switch (calendarType) {
      case "parish":
        return ["All", "Liturgical", "Community", "Youth", "Education", "Outreach", "Administration"];
      case "liturgical":
        return ["All", "Ordinary Time", "Advent", "Christmas", "Lent", "Easter", "Pentecost", "Feasts"];
      case "saints":
        return ["All", "Martyrs", "Confessors", "Doctors", "Virgins", "Holy Men", "Holy Women"];
      case "youth":
        return ["All", "MCA", "CYA", "Young Adults", "All Youth"];
      default:
        return ["All"];
    }
  };

  // Sample events based on the selected calendar type and category
  const getEvents = () => {
    const baseEvents = [
      // Parish Calendar Events
      {
        id: 1,
        title: "Sunday Mass",
        date: new Date(2024, 5, 2),
        time: "10:00 AM",
        location: "Main Church",
        description: "Regular Sunday worship service",
        category: "Liturgical",
        calendarType: "parish"
      },
      {
        id: 2,
        title: "Parish Council Meeting",
        date: new Date(2024, 5, 10),
        time: "7:00 PM",
        location: "Parish Hall",
        description: "Monthly meeting of the parish council",
        category: "Administration",
        calendarType: "parish"
      },
      {
        id: 3,
        title: "Youth Group Gathering",
        date: new Date(2024, 5, 14),
        time: "5:30 PM",
        location: "Youth Center",
        description: "Activities and fellowship for parish youth",
        category: "Youth",
        calendarType: "parish"
      },
      // Liturgical Calendar Events
      {
        id: 4,
        title: "Pentecost Sunday",
        date: new Date(2024, 5, 19),
        time: "All Masses",
        location: "Main Church",
        description: "Celebration of the descent of the Holy Spirit",
        category: "Pentecost",
        calendarType: "liturgical"
      },
      {
        id: 5,
        title: "Corpus Christi",
        date: new Date(2024, 5, 26),
        time: "All Masses",
        location: "Main Church",
        description: "Solemnity of the Most Holy Body and Blood of Christ",
        category: "Feasts",
        calendarType: "liturgical"
      },
      // Saints Calendar Events
      {
        id: 6,
        title: "St. Anthony of Padua",
        date: new Date(2024, 5, 13),
        time: "Memorial",
        location: "Universal Church",
        description: "Memorial of St. Anthony of Padua, Priest and Doctor of the Church",
        category: "Doctors",
        calendarType: "saints"
      },
      {
        id: 7,
        title: "St. Aloysius Gonzaga",
        date: new Date(2024, 5, 21),
        time: "Memorial",
        location: "Universal Church",
        description: "Memorial of St. Aloysius Gonzaga, Religious",
        category: "Holy Men",
        calendarType: "saints"
      },
      // Youth Calendar Events
      {
        id: 8,
        title: "MCA Faith Formation",
        date: new Date(2024, 5, 9),
        time: "11:30 AM",
        location: "Parish Hall",
        description: "Weekly faith formation for Missionary Childhood Association",
        category: "MCA",
        calendarType: "youth"
      },
      {
        id: 9,
        title: "CYA Bible Study",
        date: new Date(2024, 5, 11),
        time: "6:30 PM",
        location: "Youth Center",
        description: "Weekly Bible study for Catholic Youth Association",
        category: "CYA",
        calendarType: "youth"
      },
      {
        id: 10,
        title: "Young Adult Theology on Tap",
        date: new Date(2024, 5, 17),
        time: "7:00 PM",
        location: "Local Restaurant",
        description: "Monthly social and theological discussion for young adults",
        category: "Young Adults",
        calendarType: "youth"
      }
    ];
    
    return baseEvents.filter(event => 
      event.calendarType === calendarType && 
      (selectedCategory === "All" || event.category === selectedCategory)
    );
  };

  // Get filtered events
  const filteredEvents = getEvents();
  
  // Get events for the current view
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
    
    // For agenda view, sort all filtered events by date
    return [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  const viewEvents = getEventsForCurrentView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Church Calendars"
            subtitle="Stay connected with parish events, liturgical seasons, and feast days"
          />
          
          <div className="max-w-5xl mx-auto mt-8">
            {/* Calendar Selection Tabs */}
            <Tabs 
              value={calendarType} 
              onValueChange={setCalendarType}
              className="mb-8"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="parish" className="flex items-center justify-center">
                  <CalendarDays className="h-4 w-4 mr-2 hidden sm:inline" />
                  <span>Parish</span>
                </TabsTrigger>
                <TabsTrigger value="liturgical" className="flex items-center justify-center">
                  <Cross className="h-4 w-4 mr-2 hidden sm:inline" />
                  <span>Liturgical</span>
                </TabsTrigger>
                <TabsTrigger value="saints" className="flex items-center justify-center">
                  <Bookmark className="h-4 w-4 mr-2 hidden sm:inline" />
                  <span>Saints</span>
                </TabsTrigger>
                <TabsTrigger value="youth" className="flex items-center justify-center">
                  <Users className="h-4 w-4 mr-2 hidden sm:inline" />
                  <span>Youth</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="parish">
                <Card className="border-church-burgundy/10 mb-6">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg text-church-burgundy">Parish Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 mb-4">
                      View all upcoming events and activities at Musha WeBetania Parish, including Masses, 
                      meetings, social events, and more.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="liturgical">
                <Card className="border-church-burgundy/10 mb-6">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg text-church-burgundy">Liturgical Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 mb-4">
                      Follow the Catholic liturgical year with its seasons, solemnities, feasts, and memorials 
                      that guide our worship and spiritual life.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="saints">
                <Card className="border-church-burgundy/10 mb-6">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg text-church-burgundy">Saints Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 mb-4">
                      Celebrate the lives of the saints throughout the year, learning from their examples 
                      of faith, hope, and charity.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="youth">
                <Card className="border-church-burgundy/10 mb-6">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg text-church-burgundy">Youth & Young Adult Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 mb-4">
                      Keep track of events and activities for all youth groups: Missionary Childhood Association (MCA), 
                      Catholic Youth Association (CYA), and Young Adult Ministry.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* Category Filters */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg text-church-burgundy flex items-center gap-2">
                  <CalendarRange className="h-5 w-5" />
                  Calendar Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {getCategories().map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedCategory("All")}
                      className="h-10"
                    >
                      Reset Filters
                    </Button>
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
                <ChurchCalendar 
                  className="mb-6"
                  date={date}
                  events={filteredEvents}
                />
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
                          setSelectedCategory("All");
                        }}
                        className="mt-2"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    viewEvents.map((event) => (
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
                                  <Badge className={`text-xs ${
                                    calendarType === "parish" ? "bg-church-burgundy/10" : 
                                    calendarType === "liturgical" ? "bg-indigo-100" : 
                                    calendarType === "saints" ? "bg-yellow-100" : 
                                    "bg-teal-100"
                                  }`}>
                                    {event.category}
                                  </Badge>
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
            
            {/* Calendar Options */}
            <Card className="bg-church-burgundy/5 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-church-burgundy mb-2">
                      Stay Updated with Parish Events
                    </h3>
                    <p className="text-gray-700">
                      Subscribe to our calendar to receive updates and reminders for upcoming events.
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
            
            {/* Calendar Legend */}
            <Card className="border-church-burgundy/10 mb-8">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg text-church-burgundy">Calendar Legend</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="block w-4 h-4 bg-church-burgundy/10 rounded-full"></span>
                    <span className="text-sm">Parish Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block w-4 h-4 bg-indigo-100 rounded-full"></span>
                    <span className="text-sm">Liturgical Calendar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block w-4 h-4 bg-yellow-100 rounded-full"></span>
                    <span className="text-sm">Saints' Feast Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block w-4 h-4 bg-teal-100 rounded-full"></span>
                    <span className="text-sm">Youth Events</span>
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

export default IntegratedCalendar;
