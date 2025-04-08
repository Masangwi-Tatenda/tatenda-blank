
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Search, Filter, Star, CalendarDays, UserRound, Globe, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { format, parseISO, addDays } from 'date-fns';

interface Saint {
  id: string;
  name: string;
  feastDay: string;
  date: string;
  lifeYears: string;
  region: string;
  patronageOf: string[];
  description: string;
  imageUrl?: string;
}

const SaintsCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Sample data for saints
  const generateSampleSaints = (): Saint[] => {
    const baseDate = parseISO('2025-01-01');
    const regions = ['Europe', 'Africa', 'Asia', 'Americas', 'Oceania', 'Middle East'];
    const patronages = [
      'Missionaries', 'Doctors', 'Children', 'Teachers', 'Farmers', 
      'Musicians', 'Artists', 'Travelers', 'The Poor', 'Students',
      'Lost Causes', 'Animals', 'Workers', 'Families', 'Mothers'
    ];
    
    // List of saints with basic information
    const saintsBase = [
      {
        id: '1',
        name: 'St. Francis of Assisi',
        lifeYears: '1181-1226',
        region: 'Europe',
        description: 'Founder of the Franciscan Order, known for his love of nature and animals. His devotion to God was expressed through his love for all of God's creation.',
        imageUrl: 'https://source.unsplash.com/photo-1582562124811-c09040d0a901' // Placeholder image
      },
      {
        id: '2',
        name: 'St. Thérèse of Lisieux',
        lifeYears: '1873-1897',
        region: 'Europe',
        description: 'Also known as "The Little Flower," St. Thérèse is known for her "little way" of spiritual childhood and doing small acts with great love.',
        imageUrl: 'https://source.unsplash.com/photo-1515733782105-84a8df52751d'
      },
      {
        id: '3',
        name: 'St. Augustine of Hippo',
        lifeYears: '354-430',
        region: 'Africa',
        description: 'Early Christian theologian and philosopher whose writings influenced the development of Western Christianity. Author of "Confessions" and "City of God."',
        imageUrl: 'https://source.unsplash.com/photo-1618160702438-9b02ab6515c9'
      },
      {
        id: '4',
        name: 'St. Teresa of Calcutta',
        lifeYears: '1910-1997',
        region: 'Asia',
        description: 'Founder of the Missionaries of Charity, known for her work among the poorest of the poor in Calcutta, India. Nobel Peace Prize recipient.',
        imageUrl: 'https://source.unsplash.com/photo-1582562124811-c09040d0a901'
      },
      {
        id: '5',
        name: 'St. John Paul II',
        lifeYears: '1920-2005',
        region: 'Europe',
        description: 'Pope from 1978 to 2005, known for his extensive travels, emphasis on human dignity, and role in the fall of communism in Eastern Europe.',
        imageUrl: 'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
      },
      {
        id: '6',
        name: 'St. Josephine Bakhita',
        lifeYears: '1869-1947',
        region: 'Africa',
        description: 'Born in Sudan, she was kidnapped and sold into slavery before eventually gaining freedom and becoming a Canossian Sister in Italy.',
        imageUrl: 'https://source.unsplash.com/photo-1515733782105-84a8df52751d'
      },
      {
        id: '7',
        name: 'St. Juan Diego',
        lifeYears: '1474-1548',
        region: 'Americas',
        description: 'Indigenous Mexican to whom the Virgin Mary appeared as Our Lady of Guadalupe. His cloak bearing her image is preserved in Mexico City.',
        imageUrl: 'https://source.unsplash.com/photo-1618160702438-9b02ab6515c9'
      },
      {
        id: '8',
        name: 'St. Mary MacKillop',
        lifeYears: '1842-1909',
        region: 'Oceania',
        description: 'First Australian saint, she co-founded the Sisters of St. Joseph of the Sacred Heart, who worked in education and care of the poor.',
        imageUrl: 'https://source.unsplash.com/photo-1582562124811-c09040d0a901'
      },
      {
        id: '9',
        name: 'St. Charbel Makhlouf',
        lifeYears: '1828-1898',
        region: 'Middle East',
        description: 'Lebanese monk and priest known for his piety and supernatural gifts. He spent the last 23 years of his life living as a hermit.',
        imageUrl: 'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
      },
      {
        id: '10',
        name: 'St. Kateri Tekakwitha',
        lifeYears: '1656-1680',
        region: 'Americas',
        description: 'Known as the "Lily of the Mohawks," she was the first Native American to be canonized. She converted to Catholicism at age 19.',
        imageUrl: 'https://source.unsplash.com/photo-1618160702438-9b02ab6515c9'
      },
      {
        id: '11',
        name: 'St. Thomas Aquinas',
        lifeYears: '1225-1274',
        region: 'Europe',
        description: 'Dominican friar and Doctor of the Church, known for his synthesis of Aristotelian philosophy with Christian doctrine.',
        imageUrl: 'https://source.unsplash.com/photo-1582562124811-c09040d0a901'
      },
      {
        id: '12',
        name: 'St. Martin de Porres',
        lifeYears: '1579-1639',
        region: 'Americas',
        description: 'Peruvian Dominican brother known for his work with the poor and sick, as well as his humility and devotion to prayer.',
        imageUrl: 'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
      }
    ];
    
    // Assign feast days throughout the year and add patronages
    return saintsBase.map((saint, index) => {
      const randomPatronages = [];
      const patronageCount = Math.floor(Math.random() * 3) + 1; // 1-3 patronages
      for (let i = 0; i < patronageCount; i++) {
        const patronage = patronages[Math.floor(Math.random() * patronages.length)];
        if (!randomPatronages.includes(patronage)) {
          randomPatronages.push(patronage);
        }
      }
      
      const date = format(addDays(baseDate, index * 30), 'yyyy-MM-dd');
      
      return {
        ...saint,
        feastDay: format(parseISO(date), 'MMMM d'),
        date,
        patronageOf: randomPatronages
      };
    });
  };

  const [saints] = useState<Saint[]>(generateSampleSaints());

  // Filter saints based on search term, month, and region
  const filteredSaints = saints.filter(saint => {
    const matchesSearch = 
      searchTerm === '' || 
      saint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      saint.patronageOf.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesMonth = 
      selectedMonth === 'All' || 
      saint.feastDay.split(' ')[0] === selectedMonth;
    
    const matchesRegion = 
      selectedRegion === 'All' || 
      saint.region === selectedRegion;
    
    return matchesSearch && matchesMonth && matchesRegion;
  });

  // Group saints by month for the calendar view
  const groupedByMonth = filteredSaints.reduce<Record<string, Saint[]>>((acc, saint) => {
    const month = saint.feastDay.split(' ')[0];
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(saint);
    return acc;
  }, {});

  // Extract unique months and regions for filters
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const regions = ['All', ...new Set(saints.map(s => s.region))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Saints Calendar"
            subtitle="Discover the holy men and women celebrated throughout the liturgical year"
            className="text-center mb-8"
          />

          <div className="max-w-5xl mx-auto">
            <Card className="border-church-burgundy/10 mb-8 bg-church-light-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="shrink-0 bg-church-gold/20 p-3 rounded-full">
                    <Star className="h-7 w-7 text-church-burgundy" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-church-burgundy">The Communion of Saints</h2>
                    <p className="text-gray-700">
                      The saints are holy men and women who lived exemplary Christian lives and now enjoy eternal life with God in heaven. The Church honors these individuals throughout the liturgical year, offering us models of holiness and powerful intercessors for our prayers. The saints demonstrate that sanctity is possible in every time, place, and walk of life.
                    </p>
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
                        placeholder="Search by saint name or patronage..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CalendarDays className="h-4 w-4 text-gray-500" />
                    <select 
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="p-2 border rounded-md text-sm"
                    >
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <select 
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="p-2 border rounded-md text-sm"
                    >
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="grid" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  <span>Saint Cards</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Calendar View</span>
                </TabsTrigger>
              </TabsList>

              {/* Grid View Tab */}
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSaints.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No saints match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedMonth('All');
                          setSelectedRegion('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    filteredSaints.map((saint) => (
                      <Card key={saint.id} className="border-church-burgundy/10 overflow-hidden hover:shadow-md transition-shadow">
                        {saint.imageUrl && (
                          <div className="w-full h-40 bg-gray-100 relative">
                            <img 
                              src={saint.imageUrl} 
                              alt={saint.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                              <div className="flex items-center gap-1 text-white">
                                <CalendarDays className="h-3 w-3" />
                                <span className="text-xs font-medium">{saint.feastDay}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-bold text-church-burgundy">{saint.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="text-xs">{saint.lifeYears}</span>
                            <span className="text-xs bg-church-burgundy/10 px-2 py-0.5 rounded-full">
                              {saint.region}
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="py-2">
                          <div className="mb-3">
                            <p className="text-xs text-gray-600 font-medium mb-1">Patron of:</p>
                            <div className="flex flex-wrap gap-1">
                              {saint.patronageOf.map((patronage, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-xs bg-church-gold/10 text-church-burgundy px-2 py-0.5 rounded-md"
                                >
                                  {patronage}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-3">{saint.description}</p>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <button className="text-sm text-church-burgundy hover:text-church-gold transition-colors">
                            Learn More →
                          </button>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Calendar View Tab */}
              <TabsContent value="calendar">
                <div className="space-y-8">
                  {Object.entries(groupedByMonth).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500">No saints match your search criteria.</p>
                      <button 
                        className="mt-2 text-church-burgundy hover:text-church-gold transition-colors"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedMonth('All');
                          setSelectedRegion('All');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    Object.entries(groupedByMonth).map(([month, monthSaints]) => (
                      <div key={month} className="mb-8">
                        <h3 className="text-xl font-bold text-church-burgundy mb-4 flex items-center gap-2">
                          <CalendarDays className="h-5 w-5" />
                          {month}
                        </h3>
                        <div className="space-y-3">
                          {monthSaints.map((saint) => (
                            <Card key={saint.id} className="border-church-burgundy/10 hover:shadow-sm transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex flex-col sm:flex-row justify-between gap-4">
                                  <div className="flex gap-4">
                                    {saint.imageUrl && (
                                      <div className="hidden sm:block shrink-0 h-16 w-16 rounded-full overflow-hidden">
                                        <img 
                                          src={saint.imageUrl} 
                                          alt={saint.name} 
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                    )}
                                    <div>
                                      <h4 className="font-bold text-church-burgundy">{saint.name}</h4>
                                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                        <span>{saint.feastDay}</span>
                                        <span>•</span>
                                        <span>{saint.lifeYears}</span>
                                        <span className="text-xs bg-church-burgundy/10 px-2 py-0.5 rounded-full">
                                          {saint.region}
                                        </span>
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                        {saint.patronageOf.map((patronage, idx) => (
                                          <span 
                                            key={idx} 
                                            className="text-xs bg-church-gold/10 text-church-burgundy px-2 py-0.5 rounded-md"
                                          >
                                            {patronage}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="shrink-0">
                                    <button className="text-sm text-church-burgundy hover:text-church-gold transition-colors whitespace-nowrap">
                                      Learn More →
                                    </button>
                                  </div>
                                </div>
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

            <div className="flex justify-center items-center bg-church-burgundy/5 rounded-lg p-8 text-center">
              <div>
                <div className="mb-4">
                  <div className="bg-white mx-auto w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                    <GraduationCap className="h-8 w-8 text-church-burgundy" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Want to Learn More About the Saints?</h3>
                <p className="text-gray-700 max-w-xl mx-auto mb-4">
                  Join our monthly "Saints Study Circle" where we explore the lives and teachings of these holy men and women who inspire our faith journey.
                </p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                  Contact Us to Join
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

export default SaintsCalendar;
