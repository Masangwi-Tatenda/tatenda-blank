
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Search, Filter, FileText, CalendarDays, BookOpen, AudioLines, Download, Share2, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { format, parseISO, subDays } from 'date-fns';
import { Button } from '@/components/ui/button';

interface Homily {
  id: string;
  title: string;
  date: string;
  priest: string;
  liturgicalSeason: string;
  readings: string[];
  text: string;
  audioUrl?: string;
  imageUrl?: string;
  keywords: string[];
}

const Homilies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [selectedPreacher, setSelectedPreacher] = useState('All');
  const [expandedHomilies, setExpandedHomilies] = useState<Record<string, boolean>>({});

  // Sample data for homilies
  const generateSampleHomilies = (): Homily[] => {
    const today = new Date();
    const liturgicalSeasons = ['Ordinary Time', 'Advent', 'Christmas', 'Lent', 'Easter', 'Pentecost'];
    const priests = ['Fr. James Ndoro', 'Fr. Thomas Matonga', 'Fr. Michael Chideme', 'Bishop Robert Ndlovu'];
    const keywords = [
      'mercy', 'forgiveness', 'faith', 'hope', 'love', 'charity', 'prayer',
      'discipleship', 'evangelization', 'salvation', 'redemption', 'conversion',
      'eucharist', 'family', 'justice', 'peace', 'vocation', 'holiness'
    ];
    
    // Placeholder images
    const imageUrls = [
      'https://source.unsplash.com/photo-1515733782105-84a8df52751d',
      'https://source.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://source.unsplash.com/photo-1582562124811-c09040d0a901',
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
    ];

    // Generate 15 sample homilies
    return Array.from({ length: 15 }).map((_, i) => {
      const date = subDays(today, i * 7); // One homily per week
      const season = liturgicalSeasons[Math.floor(Math.random() * liturgicalSeasons.length)];
      const priest = priests[Math.floor(Math.random() * priests.length)];
      
      // Select 3-5 random keywords
      const selectedKeywords = [];
      const keywordCount = Math.floor(Math.random() * 3) + 3; // 3-5 keywords
      for (let j = 0; j < keywordCount; j++) {
        const keyword = keywords[Math.floor(Math.random() * keywords.length)];
        if (!selectedKeywords.includes(keyword)) {
          selectedKeywords.push(keyword);
        }
      }
      
      // Generate sample readings
      const readings = [
        `${['Isaiah', 'Exodus', 'Genesis', 'Psalms', 'Jeremiah'][Math.floor(Math.random() * 5)]} ${Math.floor(Math.random() * 40) + 1}:${Math.floor(Math.random() * 30) + 1}-${Math.floor(Math.random() * 40) + 30}`,
        `${['Romans', 'Corinthians', 'Galatians', 'Ephesians', 'Philippians'][Math.floor(Math.random() * 5)]} ${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 20) + 1}-${Math.floor(Math.random() * 30) + 20}`,
        `${['Matthew', 'Mark', 'Luke', 'John'][Math.floor(Math.random() * 4)]} ${Math.floor(Math.random() * 20) + 1}:${Math.floor(Math.random() * 40) + 1}-${Math.floor(Math.random() * 30) + 40}`
      ];
      
      return {
        id: `homily-${i}`,
        title: `${format(date, 'EEEE')} Homily - ${format(date, 'MMMM d, yyyy')}`,
        date: format(date, 'yyyy-MM-dd'),
        priest,
        liturgicalSeason: season,
        readings,
        text: `In today's Gospel, we hear Jesus say, "I am the bread of life; whoever comes to me will never hunger, and whoever believes in me will never thirst." This statement reveals a profound truth about our spiritual journey.\n\nFirst, Jesus identifies himself as the essential nourishment for our souls. Just as physical bread sustains our bodies, Christ sustains our spiritual life. Without this nourishment, our souls grow weak and vulnerable.\n\nSecond, Jesus promises that those who come to him will never hunger or thirst again. This doesn't mean that we won't experience difficult times or spiritual dryness, but rather that at the deepest level, our souls will be satisfied in Christ.\n\nWhen we receive the Eucharist, we are literally taking in this Bread of Life. We are being nourished not just symbolically, but actually receiving Christ himself. This is why the Eucharist is the "source and summit" of our faith.\n\nBut how do we truly "come to" Jesus and "believe in" him? It's not just about attending Mass or saying prayers, though these are important. It's about developing a relationship with Christ—speaking to him in prayer, listening to him in Scripture, and recognizing him in others, especially the poor and suffering.\n\nToday, let us reflect on how we are nourishing our spiritual lives. Are we coming to Jesus regularly? Are we allowing him to satisfy our deepest hungers? Or are we trying to fill ourselves with things that can never truly satisfy—material possessions, fleeting pleasures, or worldly success?\n\nMay we all recognize Christ as the true Bread of Life and allow him to nourish and transform us. Amen.`,
        audioUrl: i % 2 === 0 ? '#' : undefined, // Only even-numbered homilies have audio
        imageUrl: imageUrls[i % imageUrls.length],
        keywords: selectedKeywords
      };
    });
  };

  const [homilies] = useState<Homily[]>(generateSampleHomilies());

  // Filter homilies based on search term, selected season, and selected preacher
  const filteredHomilies = homilies.filter(homily => {
    const matchesSearch = 
      searchTerm === '' || 
      homily.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      homily.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      homily.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
      homily.readings.some(reading => reading.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSeason = 
      selectedSeason === 'All' || 
      homily.liturgicalSeason === selectedSeason;
    
    const matchesPreacher = 
      selectedPreacher === 'All' || 
      homily.priest === selectedPreacher;
    
    return matchesSearch && matchesSeason && matchesPreacher;
  });

  // Extract unique liturgical seasons and preachers for the filters
  const liturgicalSeasons = ['All', ...new Set(homilies.map(h => h.liturgicalSeason))];
  const preachers = ['All', ...new Set(homilies.map(h => h.priest))];

  // Toggle expanded state of homily
  const toggleHomily = (id: string) => {
    setExpandedHomilies(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Homilies"
            subtitle="Explore sermons from our parish priests"
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
                        placeholder="Search homilies by content, readings, or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
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
                    <select 
                      value={selectedPreacher}
                      onChange={(e) => setSelectedPreacher(e.target.value)}
                      className="p-2 border rounded-md text-sm"
                    >
                      {preachers.map(preacher => (
                        <option key={preacher} value={preacher}>
                          {preacher === 'All' ? 'All Preachers' : preacher}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="list" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>List View</span>
                </TabsTrigger>
                <TabsTrigger value="cards" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Card View</span>
                </TabsTrigger>
              </TabsList>

              {/* List View Tab */}
              <TabsContent value="list">
                <div className="space-y-6">
                  {filteredHomilies.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500">No homilies match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                          setSelectedPreacher('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    filteredHomilies.map((homily) => (
                      <Card key={homily.id} className="border-church-burgundy/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-bold text-church-burgundy">{homily.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <CalendarDays className="h-3 w-3" />
                            <span>{format(parseISO(homily.date), 'MMMM d, yyyy')}</span>
                            <span>•</span>
                            <span>{homily.liturgicalSeason}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-full bg-church-burgundy/10 flex items-center justify-center overflow-hidden">
                              <User className="h-4 w-4 text-church-burgundy" />
                            </div>
                            <span className="font-medium text-gray-800">{homily.priest}</span>
                          </div>

                          <div className="mb-4 flex flex-wrap gap-2 text-xs">
                            {homily.readings.map((reading, idx) => (
                              <span key={idx} className="bg-church-light-gold/30 text-church-burgundy px-2 py-1 rounded-md">
                                {reading}
                              </span>
                            ))}
                          </div>
                          
                          <div className={`prose max-w-none mb-4 ${!expandedHomilies[homily.id] && 'line-clamp-3'}`}>
                            <p className="whitespace-pre-line text-gray-700">{homily.text}</p>
                          </div>
                          
                          <button 
                            onClick={() => toggleHomily(homily.id)}
                            className="text-church-burgundy hover:text-church-gold transition-colors text-sm font-medium mb-4"
                          >
                            {expandedHomilies[homily.id] ? 'Show Less' : 'Read More'}
                          </button>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {homily.keywords.map((keyword, idx) => (
                              <span key={idx} className="bg-church-burgundy/10 text-church-burgundy text-xs px-2 py-1 rounded-full">
                                {keyword}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {homily.audioUrl && (
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <AudioLines className="h-3 w-3" />
                                <span>Listen</span>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="h-8 gap-1">
                              <Download className="h-3 w-3" />
                              <span>Download PDF</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 gap-1">
                              <Share2 className="h-3 w-3" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>

                {filteredHomilies.length > 10 && (
                  <div className="mt-8 text-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                )}
              </TabsContent>

              {/* Card View Tab */}
              <TabsContent value="cards">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredHomilies.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No homilies match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSeason('All');
                          setSelectedPreacher('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    filteredHomilies.map((homily) => (
                      <Card key={homily.id} className="border-church-burgundy/10 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                        {homily.imageUrl && (
                          <div className="w-full h-48 bg-gray-100 relative">
                            <img 
                              src={homily.imageUrl} 
                              alt={homily.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
                              <div className="absolute bottom-0 left-0 w-full p-3">
                                <div className="flex justify-between items-end">
                                  <div className="flex items-center gap-1 text-white">
                                    <CalendarDays className="h-3 w-3" />
                                    <span className="text-xs font-medium">
                                      {format(parseISO(homily.date), 'MMM d, yyyy')}
                                    </span>
                                  </div>
                                  <div className="text-xs font-medium text-white px-2 py-1 bg-church-burgundy/70 rounded-full">
                                    {homily.liturgicalSeason}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-bold text-church-burgundy line-clamp-1">
                            {homily.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span>{homily.priest}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="py-2 flex-grow">
                          <div className="mb-3 flex flex-wrap gap-1 text-xs">
                            {homily.readings.map((reading, idx) => (
                              <span key={idx} className="bg-church-light-gold/30 text-church-burgundy px-2 py-0.5 rounded-md">
                                {reading}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-sm text-gray-700 line-clamp-4 mb-3">
                            {homily.text}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-2">
                            {homily.keywords.slice(0, 3).map((keyword, idx) => (
                              <span key={idx} className="bg-church-burgundy/10 text-church-burgundy text-xs px-2 py-0.5 rounded-full">
                                {keyword}
                              </span>
                            ))}
                            {homily.keywords.length > 3 && (
                              <span className="text-xs text-gray-500">+{homily.keywords.length - 3} more</span>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 flex gap-2">
                          <Button size="sm" variant="default" className="h-8 text-xs">
                            Read Full Homily
                          </Button>
                          {homily.audioUrl && (
                            <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
                              <AudioLines className="h-3 w-3" />
                              <span>Listen</span>
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>

                {filteredHomilies.length > 12 && (
                  <div className="mt-8 text-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <Card className="border-church-burgundy/10 md:w-1/2 bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-church-burgundy" />
                    Daily Readings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Follow the Church's daily scripture readings to deepen your understanding of the Word of God.
                  </p>
                  <Link to="/daily-readings" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    View Daily Readings
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/10 md:w-1/2 bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="h-5 w-5 text-church-burgundy" />
                    Submit Homily Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Is there a particular topic or Bible passage you'd like to hear a homily about? Submit your request to our priests.
                  </p>
                  <Link to="/contact?subject=Homily%20Request" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    Send Request
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homilies;
