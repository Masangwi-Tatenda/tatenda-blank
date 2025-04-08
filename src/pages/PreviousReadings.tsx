
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Search, Filter, BookOpen, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { format, parseISO, addDays } from 'date-fns';

interface ReadingItem {
  date: string;
  liturgicalSeason: string;
  title: string;
  citations: string[];
  feastDay?: string;
}

const PreviousReadings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');

  // Sample data for the readings archive
  const generateSampleReadings = (): ReadingItem[] => {
    const seasons = ['Advent', 'Christmas', 'Ordinary Time', 'Lent', 'Easter', 'Pentecost'];
    const baseDate = parseISO('2025-01-01');
    
    // Generate 30 sample reading entries
    return Array.from({ length: 30 }).map((_, i) => {
      const date = format(addDays(baseDate, -i * 3), 'yyyy-MM-dd');
      const season = seasons[Math.floor(Math.random() * seasons.length)];
      const isFeastDay = i % 7 === 0;
      
      return {
        date,
        liturgicalSeason: season,
        title: `${format(parseISO(date), 'EEEE, MMMM d, yyyy')}`,
        citations: [
          'Isaiah 55:10-11',
          'Psalm 34:4-7, 16-19',
          'Romans 8:18-23',
          'Matthew 13:1-23',
        ],
        feastDay: isFeastDay ? `Feast of St. ${['John', 'Mary', 'Peter', 'Paul', 'Teresa'][i % 5]}` : undefined
      };
    });
  };

  const [readings] = useState<ReadingItem[]>(generateSampleReadings());

  // Filter readings based on search term and selected season
  const filteredReadings = readings.filter(reading => {
    const matchesSearch = 
      searchTerm === '' || 
      reading.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (reading.feastDay && reading.feastDay.toLowerCase().includes(searchTerm.toLowerCase())) ||
      reading.citations.some(citation => citation.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSeason = 
      selectedSeason === 'All' || 
      reading.liturgicalSeason === selectedSeason;
    
    return matchesSearch && matchesSeason;
  });

  // Group readings by month for the calendar view
  const groupedByMonth = filteredReadings.reduce<Record<string, ReadingItem[]>>((acc, reading) => {
    const month = format(parseISO(reading.date), 'MMMM yyyy');
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(reading);
    return acc;
  }, {});

  // Extract unique liturgical seasons for the filter
  const liturgicalSeasons = ['All', ...new Set(readings.map(r => r.liturgicalSeason))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Previous Readings"
            subtitle="Archive of past liturgical readings"
            className="text-center mb-8"
          />

          <div className="max-w-5xl mx-auto">
            <Card className="border-church-burgundy/10 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Search by date, feast day, or citation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <select 
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                      className="p-2 border rounded-md text-sm"
                    >
                      {liturgicalSeasons.map(season => (
                        <option key={season} value={season}>{season}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="list" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>List View</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Calendar View</span>
                </TabsTrigger>
              </TabsList>

              {/* List View Tab */}
              <TabsContent value="list">
                <div className="space-y-4">
                  {filteredReadings.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500">No readings match your search criteria.</p>
                      <Button 
                        variant="link" 
                        className="mt-2 text-church-burgundy"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                        }}
                      >
                        Clear filters
                      </Button>
                    </div>
                  ) : (
                    filteredReadings.map((reading, index) => (
                      <Card key={index} className="border-church-burgundy/10 hover:shadow-sm transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <div>
                              <h3 className="font-medium text-church-burgundy flex items-center gap-2">
                                <CalendarClock className="h-4 w-4" />
                                {reading.title}
                                {reading.feastDay && (
                                  <span className="text-xs bg-church-burgundy/10 text-church-burgundy px-2 py-1 rounded-full ml-2">
                                    {reading.feastDay}
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-gray-500">{reading.liturgicalSeason}</p>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {reading.citations.map((citation, idx) => (
                                  <span 
                                    key={idx} 
                                    className="text-xs bg-church-gold/10 text-church-burgundy px-2 py-1 rounded-md"
                                  >
                                    {citation}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link 
                              to={`/daily-readings?date=${reading.date}`} 
                              className="text-sm text-church-burgundy hover:text-church-gold transition-colors whitespace-nowrap"
                            >
                              View Readings →
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>

                {filteredReadings.length > 0 && (
                  <div className="mt-8 flex justify-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                )}
              </TabsContent>

              {/* Calendar View Tab */}
              <TabsContent value="calendar">
                <div className="space-y-8">
                  {Object.entries(groupedByMonth).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500">No readings match your search criteria.</p>
                      <Button 
                        variant="link" 
                        className="mt-2 text-church-burgundy"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                        }}
                      >
                        Clear filters
                      </Button>
                    </div>
                  ) : (
                    Object.entries(groupedByMonth).map(([month, monthReadings]) => (
                      <div key={month} className="mb-8">
                        <h3 className="text-xl font-bold text-church-burgundy mb-4">{month}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {monthReadings.map((reading, index) => (
                            <Card key={index} className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                              <CardHeader className="p-4">
                                <CardTitle className="text-base">
                                  {format(parseISO(reading.date), 'd MMMM')}
                                  {reading.feastDay && (
                                    <span className="block text-xs text-church-burgundy mt-1">
                                      {reading.feastDay}
                                    </span>
                                  )}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pt-0 px-4 pb-4">
                                <p className="text-xs text-gray-500 mb-2">{reading.liturgicalSeason}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {reading.citations.slice(0, 2).map((citation, idx) => (
                                    <span 
                                      key={idx} 
                                      className="text-xs bg-church-gold/10 text-church-burgundy px-2 py-0.5 rounded-md"
                                    >
                                      {citation}
                                    </span>
                                  ))}
                                  {reading.citations.length > 2 && (
                                    <span className="text-xs text-gray-500">+{reading.citations.length - 2} more</span>
                                  )}
                                </div>
                                <Link 
                                  to={`/daily-readings?date=${reading.date}`} 
                                  className="text-xs text-church-burgundy hover:text-church-gold transition-colors"
                                >
                                  View Readings →
                                </Link>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Link to="/daily-readings" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                <span className="mr-2">←</span> Return to Today's Readings
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreviousReadings;
