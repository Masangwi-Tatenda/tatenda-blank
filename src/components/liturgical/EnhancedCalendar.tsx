import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Star, 
  Cross,
  Sparkles,
  Bell
} from 'lucide-react';
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import { cn } from '@/lib/utils';

// Enhanced events with liturgical significance
const liturgicalEvents = [
  {
    id: 1,
    title: "Sunday Mass",
    date: new Date(2024, 11, 1), // December 1, 2024 (First Sunday of Advent)
    time: "10:00 AM",
    location: "Main Church",
    description: "First Sunday of Advent - Beginning of the new liturgical year",
    category: "Mass",
    liturgicalSeason: "Advent",
    color: "#7C3AED",
    importance: "high"
  },
  {
    id: 2,
    title: "Advent Wreath Blessing",
    date: new Date(2024, 11, 1),
    time: "9:30 AM",
    location: "Main Church",
    description: "Blessing of Advent wreaths for families",
    category: "Liturgy",
    liturgicalSeason: "Advent",
    color: "#7C3AED",
    importance: "medium"
  },
  {
    id: 3,
    title: "St. Nicholas Feast Day",
    date: new Date(2024, 11, 6),
    time: "7:00 AM",
    location: "Main Church",
    description: "Special Mass for St. Nicholas, patron of children",
    category: "Feast Day",
    liturgicalSeason: "Advent",
    color: "#DC2626",
    importance: "high"
  },
  {
    id: 4,
    title: "Immaculate Conception",
    date: new Date(2024, 11, 8),
    time: "10:00 AM",
    location: "Main Church",
    description: "Solemnity of the Immaculate Conception of Mary",
    category: "Solemnity",
    liturgicalSeason: "Advent",
    color: "#FFFFFF",
    importance: "highest"
  },
  {
    id: 5,
    title: "Gaudete Sunday",
    date: new Date(2024, 11, 15),
    time: "10:00 AM",
    location: "Main Church",
    description: "Third Sunday of Advent - Rose vestments, rejoice!",
    category: "Mass",
    liturgicalSeason: "Advent",
    color: "#EC4899",
    importance: "high"
  },
  {
    id: 6,
    title: "Christmas Vigil Mass",
    date: new Date(2024, 11, 24),
    time: "11:00 PM",
    location: "Main Church",
    description: "Christmas Eve - The Nativity of our Lord",
    category: "Vigil Mass",
    liturgicalSeason: "Christmas",
    color: "#FFFFFF",
    importance: "highest"
  },
  {
    id: 7,
    title: "Christmas Day Mass",
    date: new Date(2024, 11, 25),
    time: "10:00 AM",
    location: "Main Church",
    description: "The Nativity of our Lord Jesus Christ",
    category: "Solemnity",
    liturgicalSeason: "Christmas",
    color: "#FFFFFF",
    importance: "highest"
  },
  {
    id: 8,
    title: "Holy Family Sunday",
    date: new Date(2024, 11, 29),
    time: "10:00 AM",
    location: "Main Church",
    description: "Feast of the Holy Family of Jesus, Mary, and Joseph",
    category: "Feast",
    liturgicalSeason: "Christmas",
    color: "#FFFFFF",
    importance: "high"
  }
];

// Helper functions
const getEventsForDate = (date: Date) => {
  return liturgicalEvents.filter(event => isSameDay(event.date, date));
};

const hasEvents = (date: Date) => {
  return getEventsForDate(date).length > 0;
};

const getImportanceIcon = (importance: string) => {
  switch (importance) {
    case 'highest': return <Star className="w-4 h-4 text-yellow-500" />;
    case 'high': return <Cross className="w-4 h-4 text-church-burgundy" />;
    case 'medium': return <Bell className="w-4 h-4 text-church-gold" />;
    default: return <Sparkles className="w-4 h-4 text-gray-400" />;
  }
};

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'Solemnity':
      return 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold';
    case 'Feast Day':
      return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
    case 'Mass':
      return 'bg-gradient-to-r from-church-burgundy to-church-navy text-white';
    case 'Vigil Mass':
      return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white';
    case 'Liturgy':
      return 'bg-gradient-to-r from-church-gold to-amber-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export interface EnhancedCalendarProps {
  className?: string;
}

const EnhancedCalendar: React.FC<EnhancedCalendarProps> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  const selectedDateEvents = getEventsForDate(selectedDate);
  
  const formatEventDate = (date: Date) => {
    return format(date, 'EEEE, MMMM d, yyyy');
  };
  
  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setSelectedDate(newDate);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Calendar Component */}
        <Card className="xl:col-span-1 shadow-2xl border-0 bg-gradient-to-br from-white via-church-cream/20 to-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-church-burgundy flex items-center gap-3">
                <CalendarIcon className="w-6 h-6" />
                Liturgical Calendar
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateMonth('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateMonth('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className="rounded-lg border shadow-inner bg-white"
              components={{
                DayContent: ({ date }) => {
                  const events = getEventsForDate(date);
                  const hasImportantEvent = events.some(e => e.importance === 'highest');
                  const hasHighEvent = events.some(e => e.importance === 'high');
                  
                  return (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full transition-all",
                        isToday(date) && "bg-church-gold text-white font-bold",
                        isSameDay(date, selectedDate) && !isToday(date) && "bg-church-burgundy text-white"
                      )}>
                        {date.getDate()}
                      </div>
                      {hasEvents(date) && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                          {hasImportantEvent && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
                          )}
                          {hasHighEvent && !hasImportantEvent && (
                            <div className="w-2 h-2 bg-church-burgundy rounded-full shadow-sm"></div>
                          )}
                          {events.length > 0 && !hasImportantEvent && !hasHighEvent && (
                            <div className="w-2 h-2 bg-church-gold rounded-full shadow-sm"></div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                },
              }}
            />
            
            {/* Mini Legend */}
            <div className="mt-6 p-4 bg-church-cream/50 rounded-lg">
              <h4 className="font-semibold text-church-burgundy mb-3 text-sm">Event Indicators</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Solemnities & Major Feasts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-church-burgundy rounded-full"></div>
                  <span className="text-gray-700">Important Celebrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-church-gold rounded-full"></div>
                  <span className="text-gray-700">Regular Events</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Events List */}
        <Card className="xl:col-span-2 shadow-2xl border-0 bg-gradient-to-br from-white via-church-cream/10 to-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-church-burgundy">
                <div className="flex items-center gap-3">
                  <Cross className="w-6 h-6" />
                  {formatEventDate(selectedDate)}
                </div>
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateDay('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateDay('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-8">
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-6">
                {selectedDateEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ borderLeftColor: event.color }}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          {getImportanceIcon(event.importance)}
                          <h3 className="font-bold text-xl text-church-burgundy">{event.title}</h3>
                        </div>
                        <Badge className={getCategoryStyle(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">{event.description}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-church-gold" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-church-gold" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-church-gold" />
                          <span className="font-medium text-church-burgundy">{event.liturgicalSeason}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-church-burgundy to-church-navy text-white">
                <CardContent className="p-12 text-center">
                  <Cross className="w-16 h-16 text-church-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">No liturgical events scheduled</h3>
                  <p className="text-white/90 text-lg mb-6">
                    This is a day for personal prayer and reflection. Consider attending daily Mass or spending time in adoration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-church-burgundy font-semibold"
                      onClick={() => setSelectedDate(new Date())}
                    >
                      Return to Today
                    </Button>
                    <Button 
                      className="bg-church-gold hover:bg-church-gold/90 text-church-burgundy font-semibold"
                    >
                      View All Events
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedCalendar;