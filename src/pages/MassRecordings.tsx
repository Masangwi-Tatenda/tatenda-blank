
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Calendar, Search, Filter, Video, Clock, CalendarDays, HeartHandshake } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { format, parseISO, subDays } from 'date-fns';

interface MassRecording {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
  description: string;
  videoUrl: string;
  presider: string;
  liturgicalSeason: string;
  specialOccasion?: string;
}

const MassRecordings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');

  // Sample data for mass recordings
  const generateSampleRecordings = (): MassRecording[] => {
    const today = new Date();
    const liturgicalSeasons = ['Ordinary Time', 'Advent', 'Christmas', 'Lent', 'Easter', 'Pentecost'];
    const presiders = ['Fr. James Ndoro', 'Fr. Thomas Matonga', 'Fr. Michael Chideme', 'Bishop Robert Ndlovu'];

    // Generate 20 sample recordings
    return Array.from({ length: 20 }).map((_, i) => {
      const date = subDays(today, i * 7); // One recording per week
      const season = liturgicalSeasons[Math.floor(Math.random() * liturgicalSeasons.length)];
      const presider = presiders[Math.floor(Math.random() * presiders.length)];
      const specialOccasion = i % 5 === 0 ? 
        ['Parish Feast Day', 'Confirmation Mass', 'First Communion Mass', 'Easter Vigil'][Math.floor(Math.random() * 4)] : 
        undefined;
      
      // Use placeholder images for thumbnails
      const thumbnailImages = [
        'https://source.unsplash.com/photo-1515733782105-84a8df52751d',
        'https://source.unsplash.com/photo-1618160702438-9b02ab6515c9',
        'https://source.unsplash.com/photo-1582562124811-c09040d0a901',
        'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
      ];
      
      return {
        id: `mass-${i}`,
        title: `${format(date, 'EEEE')} Mass - ${format(date, 'MMMM d, yyyy')}`,
        date: format(date, 'yyyy-MM-dd'),
        duration: `${Math.floor(Math.random() * 30) + 60}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        thumbnailUrl: thumbnailImages[i % thumbnailImages.length],
        description: specialOccasion 
          ? `Sunday Mass for ${format(date, 'MMMM d, yyyy')}. ${specialOccasion} celebration with ${presider}.`
          : `Sunday Mass for ${format(date, 'MMMM d, yyyy')} celebrated by ${presider}.`,
        videoUrl: '#', // Placeholder link
        presider,
        liturgicalSeason: season,
        specialOccasion
      };
    });
  };

  const [recordings] = useState<MassRecording[]>(generateSampleRecordings());

  // Filter recordings based on search term and selected season
  const filteredRecordings = recordings.filter(recording => {
    const matchesSearch = 
      searchTerm === '' || 
      recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recording.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recording.presider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (recording.specialOccasion && recording.specialOccasion.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSeason = 
      selectedSeason === 'All' || 
      recording.liturgicalSeason === selectedSeason;
    
    return matchesSearch && matchesSeason;
  });

  // Group recordings by month
  const groupedByMonth = filteredRecordings.reduce<Record<string, MassRecording[]>>((acc, recording) => {
    const month = format(parseISO(recording.date), 'MMMM yyyy');
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(recording);
    return acc;
  }, {});

  // Extract unique liturgical seasons for the filter
  const liturgicalSeasons = ['All', ...new Set(recordings.map(r => r.liturgicalSeason))];

  // Get upcoming Sunday for live stream info
  const getUpcomingSunday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday
    const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
    const nextSunday = new Date();
    nextSunday.setDate(today.getDate() + daysUntilSunday);
    return format(nextSunday, 'MMMM d, yyyy');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Mass Recordings"
            subtitle="Watch previous celebrations of the Holy Mass"
            className="text-center mb-8"
          />

          <div className="max-w-5xl mx-auto">
            <Card className="border-church-burgundy/10 mb-8 bg-church-light-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="shrink-0">
                    <div className="bg-church-burgundy rounded-full p-4 shadow-md">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-church-burgundy">Upcoming Live Stream</h2>
                    <p className="text-gray-700 mb-4">
                      Join us for our next live-streamed Mass on <strong>Sunday, {getUpcomingSunday()}</strong> at <strong>9:30 AM</strong>. Available on our YouTube and Facebook pages.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://youtube.com/channel/mushawabetania" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Play className="h-4 w-4" />
                        <span>YouTube</span>
                      </a>
                      <a 
                        href="https://facebook.com/mushawabetaniaparish" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-church-burgundy text-church-burgundy rounded-md hover:bg-church-burgundy/10 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Play className="h-4 w-4" />
                        <span>Facebook</span>
                      </a>
                      <Link 
                        to="/contact" 
                        className="px-4 py-2 border border-church-burgundy text-church-burgundy rounded-md hover:bg-church-burgundy/10 transition-colors text-sm"
                      >
                        Request Email Reminder
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-church-burgundy/10 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Search by title, description, or presider..."
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

            <Tabs defaultValue="grid" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  <span>Video Grid</span>
                </TabsTrigger>
                <TabsTrigger value="archive" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Archive</span>
                </TabsTrigger>
              </TabsList>

              {/* Grid View Tab */}
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecordings.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No recordings match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    filteredRecordings.slice(0, 12).map((recording) => (
                      <Card key={recording.id} className="border-church-burgundy/10 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative w-full h-40 bg-gray-100">
                          <img 
                            src={recording.thumbnailUrl} 
                            alt={recording.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <button className="bg-church-burgundy text-white p-3 rounded-full">
                              <Play className="h-6 w-6" />
                            </button>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{recording.duration}</span>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-bold text-church-burgundy line-clamp-1">{recording.title}</CardTitle>
                          <CardDescription className="flex items-center gap-1 text-xs">
                            <CalendarDays className="h-3 w-3" />
                            <span>{format(parseISO(recording.date), 'MMM d, yyyy')}</span>
                            {recording.specialOccasion && (
                              <span className="ml-1 bg-church-burgundy/10 px-2 rounded-full">
                                {recording.specialOccasion}
                              </span>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-xs text-gray-600">
                            Presider: {recording.presider} • {recording.liturgicalSeason}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <a 
                            href={recording.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-church-burgundy hover:text-church-gold transition-colors"
                          >
                            Watch Now →
                          </a>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>

                {filteredRecordings.length > 12 && (
                  <div className="mt-8 text-center">
                    <button className="px-6 py-2 border border-church-burgundy text-church-burgundy rounded-md hover:bg-church-burgundy/10 transition-colors">
                      Load More
                    </button>
                  </div>
                )}
              </TabsContent>

              {/* Archive View Tab */}
              <TabsContent value="archive">
                <div className="space-y-8">
                  {Object.entries(groupedByMonth).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500">No recordings match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    Object.entries(groupedByMonth).map(([month, monthRecordings]) => (
                      <div key={month} className="mb-8">
                        <h3 className="text-xl font-bold text-church-burgundy mb-4 flex items-center gap-2">
                          <CalendarDays className="h-5 w-5" />
                          {month}
                        </h3>
                        <div className="space-y-4">
                          {monthRecordings.map((recording) => (
                            <Card key={recording.id} className="border-church-burgundy/10 hover:shadow-sm transition-shadow overflow-hidden">
                              <div className="flex flex-col sm:flex-row">
                                <div className="sm:w-1/3 lg:w-1/4 h-32 sm:h-auto relative">
                                  <img 
                                    src={recording.thumbnailUrl} 
                                    alt={recording.title} 
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <button className="bg-church-burgundy text-white p-2 rounded-full">
                                      <Play className="h-5 w-5" />
                                    </button>
                                  </div>
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{recording.duration}</span>
                                  </div>
                                </div>
                                <div className="p-4 sm:w-2/3 lg:w-3/4">
                                  <h4 className="font-bold text-church-burgundy mb-1">{recording.title}</h4>
                                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 mb-2">
                                    <span className="flex items-center gap-1">
                                      <CalendarDays className="h-3 w-3" />
                                      {format(parseISO(recording.date), 'MMMM d, yyyy')}
                                    </span>
                                    <span>•</span>
                                    <span>{recording.presider}</span>
                                    <span>•</span>
                                    <span>{recording.liturgicalSeason}</span>
                                    {recording.specialOccasion && (
                                      <>
                                        <span>•</span>
                                        <span className="bg-church-burgundy/10 px-2 py-0.5 rounded-full text-xs">
                                          {recording.specialOccasion}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">{recording.description}</p>
                                  <a 
                                    href={recording.videoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-church-burgundy hover:text-church-gold transition-colors inline-flex items-center gap-1"
                                  >
                                    <Play className="h-3 w-3" />
                                    Watch Mass
                                  </a>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col md:flex-row gap-6 items-center bg-church-burgundy/5 rounded-lg p-8 text-center md:text-left">
              <div className="md:w-1/4 flex justify-center">
                <div className="p-4 rounded-full bg-white shadow-md">
                  <HeartHandshake className="h-16 w-16 text-church-burgundy" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-church-burgundy">Support Our Live Streaming Ministry</h3>
                <p className="text-gray-700 mb-4">
                  Our Mass recordings and live streams help connect parishioners who cannot attend in person due to illness, distance, or other circumstances. Your donation helps us maintain and improve our equipment and reach more people with the liturgy.
                </p>
                <Link to="/donate" className="inline-block px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                  Donate to Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MassRecordings;
