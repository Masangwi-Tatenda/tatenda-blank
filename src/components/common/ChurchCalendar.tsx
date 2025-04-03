
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Sample events data
const churchEvents = [
  {
    id: 1,
    title: "Sunday Mass",
    date: new Date(2024, 5, 2), // June 2, 2024
    time: "10:00 AM",
    location: "Main Church",
    description: "Regular Sunday worship service",
    category: "Liturgy"
  },
  {
    id: 2,
    title: "First Friday Adoration",
    date: new Date(2024, 5, 7), // June 7, 2024
    time: "6:00 PM",
    location: "Adoration Chapel",
    description: "Eucharistic adoration and benediction",
    category: "Prayer"
  },
  {
    id: 3,
    title: "Parish Council Meeting",
    date: new Date(2024, 5, 10), // June 10, 2024
    time: "7:00 PM",
    location: "Parish Hall",
    description: "Monthly meeting of the parish council",
    category: "Meeting"
  },
  {
    id: 4,
    title: "Youth Group Gathering",
    date: new Date(2024, 5, 14), // June 14, 2024
    time: "5:30 PM",
    location: "Youth Center",
    description: "Activities and fellowship for parish youth",
    category: "Youth"
  },
  {
    id: 5,
    title: "Corpus Christi Procession",
    date: new Date(2024, 5, 16), // June 16, 2024
    time: "11:30 AM",
    location: "Church Grounds",
    description: "Solemn procession with the Blessed Sacrament",
    category: "Liturgy"
  },
  {
    id: 6,
    title: "Bible Study",
    date: new Date(2024, 5, 20), // June 20, 2024
    time: "6:30 PM",
    location: "Parish Library",
    description: "Weekly Scripture study group",
    category: "Education"
  },
  {
    id: 7,
    title: "St. John the Baptist Feast Day",
    date: new Date(2024, 5, 24), // June 24, 2024
    time: "9:00 AM",
    location: "Main Church",
    description: "Special Mass for the feast of St. John the Baptist",
    category: "Feast Day"
  },
  {
    id: 8,
    title: "Parish Food Drive",
    date: new Date(2024, 5, 28), // June 28, 2024
    time: "9:00 AM - 2:00 PM",
    location: "Parish Hall",
    description: "Collection of non-perishable food items for local food bank",
    category: "Outreach"
  }
];

// Helper function to get events for a specific date
const getEventsForDate = (date: Date) => {
  return churchEvents.filter(
    event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );
};

// Helper function to check if a date has events
const hasEvents = (date: Date) => {
  return getEventsForDate(date).length > 0;
};

interface ChurchCalendarProps {
  className?: string;
}

const ChurchCalendar: React.FC<ChurchCalendarProps> = ({ className }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Get events for the selected date
  const selectedDateEvents = getEventsForDate(selectedDate);
  
  // Format a date to display in the events list
  const formatEventDate = (date: Date) => {
    return format(date, 'EEEE, MMMM d, yyyy');
  };
  
  // Handle day selection
  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-5 gap-6", className)}>
      {/* Calendar Component */}
      <Card className="md:col-span-2 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl text-church-burgundy flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Parish Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            className="rounded-md border"
            components={{
              DayContent: ({ date }) => (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div>{date.getDate()}</div>
                  {hasEvents(date) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-church-gold rounded-full" />
                  )}
                </div>
              ),
            }}
          />
        </CardContent>
      </Card>
      
      {/* Events List */}
      <Card className="md:col-span-3 shadow-md">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-church-burgundy">
            Events for {formatEventDate(selectedDate)}
          </CardTitle>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() - 1);
                setSelectedDate(newDate);
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous day</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() + 1);
                setSelectedDate(newDate);
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next day</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-church-burgundy">{event.title}</h3>
                    <Badge variant="outline" className="bg-church-gold/10 text-church-burgundy border-church-gold">
                      {event.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-church-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-church-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No events scheduled for this date.</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 text-church-burgundy border-church-burgundy hover:bg-church-burgundy/10"
              >
                View All Upcoming Events
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ChurchCalendar;
