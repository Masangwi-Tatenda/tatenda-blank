
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Search, Mail, Calendar, ChevronDown, Filter, ExternalLink } from 'lucide-react';
import { format, parse, isAfter, isBefore } from 'date-fns';

// Sample bulletins data
const bulletins = [
  {
    id: 1,
    title: "Parish Bulletin",
    date: "2024-05-26",
    description: "Fifth Sunday of Easter with special announcements for upcoming Pentecost events.",
    fileUrl: "#",
    fileSize: "1.2 MB"
  },
  {
    id: 2,
    title: "Parish Bulletin",
    date: "2024-05-19",
    description: "Fourth Sunday of Easter featuring First Communion celebration photos.",
    fileUrl: "#",
    fileSize: "1.5 MB"
  },
  {
    id: 3,
    title: "Parish Bulletin",
    date: "2024-05-12",
    description: "Third Sunday of Easter with Mother's Day blessings and activities.",
    fileUrl: "#",
    fileSize: "1.3 MB"
  },
  {
    id: 4,
    title: "Parish Bulletin",
    date: "2024-05-05",
    description: "Second Sunday of Easter with information about upcoming parish council elections.",
    fileUrl: "#",
    fileSize: "1.4 MB"
  },
  {
    id: 5,
    title: "Parish Bulletin",
    date: "2024-04-28",
    description: "First Sunday of Easter with Easter celebration highlights.",
    fileUrl: "#",
    fileSize: "1.6 MB"
  },
  {
    id: 6,
    title: "Easter Vigil Special Bulletin",
    date: "2024-04-20",
    description: "Special Easter Vigil edition with RCIA candidate information.",
    fileUrl: "#",
    fileSize: "2.0 MB"
  },
  {
    id: 7,
    title: "Good Friday Bulletin",
    date: "2024-04-19",
    description: "Good Friday service information and reflections.",
    fileUrl: "#",
    fileSize: "1.1 MB"
  },
  {
    id: 8,
    title: "Holy Thursday Bulletin",
    date: "2024-04-18",
    description: "Holy Thursday Mass of the Lord's Supper details.",
    fileUrl: "#",
    fileSize: "1.0 MB"
  },
];

// Sample newsletters data
const newsletters = [
  {
    id: 1,
    title: "Parish Monthly Newsletter",
    date: "2024-05-01",
    description: "May edition featuring summer program announcements and parish achievements.",
    fileUrl: "#",
    fileSize: "2.5 MB"
  },
  {
    id: 2,
    title: "Parish Monthly Newsletter",
    date: "2024-04-01",
    description: "April edition with Holy Week schedule and Easter celebration plans.",
    fileUrl: "#",
    fileSize: "2.3 MB"
  },
  {
    id: 3,
    title: "Parish Monthly Newsletter",
    date: "2024-03-01",
    description: "March edition focusing on Lenten programs and activities.",
    fileUrl: "#",
    fileSize: "2.4 MB"
  },
  {
    id: 4,
    title: "Parish Monthly Newsletter",
    date: "2024-02-01",
    description: "February edition with Valentine's Day charity drive information.",
    fileUrl: "#",
    fileSize: "2.2 MB"
  },
  {
    id: 5,
    title: "Parish Quarterly Report",
    date: "2024-01-15",
    description: "Special quarterly report with financial transparency and ministry updates.",
    fileUrl: "#",
    fileSize: "3.5 MB"
  },
  {
    id: 6,
    title: "Parish Monthly Newsletter",
    date: "2024-01-01",
    description: "January edition with New Year messages and upcoming events.",
    fileUrl: "#",
    fileSize: "2.1 MB"
  },
];

const Bulletins = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState<{start: string; end: string}>({ start: '', end: '' });
  const [showFilters, setShowFilters] = useState(false);

  // Filter documents based on search term and date range
  const filterDocuments = (documents: any[]) => {
    return documents.filter(doc => {
      // Filter by search term
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by date range
      let matchesDateRange = true;
      if (dateFilter.start && dateFilter.end) {
        const docDate = parse(doc.date, 'yyyy-MM-dd', new Date());
        const startDate = parse(dateFilter.start, 'yyyy-MM-dd', new Date());
        const endDate = parse(dateFilter.end, 'yyyy-MM-dd', new Date());
        matchesDateRange = !isBefore(docDate, startDate) && !isAfter(docDate, endDate);
      } else if (dateFilter.start) {
        const docDate = parse(doc.date, 'yyyy-MM-dd', new Date());
        const startDate = parse(dateFilter.start, 'yyyy-MM-dd', new Date());
        matchesDateRange = !isBefore(docDate, startDate);
      } else if (dateFilter.end) {
        const docDate = parse(doc.date, 'yyyy-MM-dd', new Date());
        const endDate = parse(dateFilter.end, 'yyyy-MM-dd', new Date());
        matchesDateRange = !isAfter(docDate, endDate);
      }
      
      return matchesSearch && matchesDateRange;
    });
  };

  const filteredBulletins = filterDocuments(bulletins);
  const filteredNewsletters = filterDocuments(newsletters);

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = parse(dateStr, 'yyyy-MM-dd', new Date());
    return format(date, 'MMMM d, yyyy');
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setDateFilter({ start: '', end: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Bulletins & Newsletters"
            subtitle="Stay informed with our parish publications"
          />

          <div className="max-w-4xl mx-auto mt-8">
            {/* Search and Filters */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Search bulletins and newsletters..." 
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center gap-2"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>

                  {showFilters && (
                    <div className="pt-3 border-t">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Start Date</label>
                          <Input 
                            type="date" 
                            value={dateFilter.start}
                            onChange={(e) => setDateFilter(prev => ({ ...prev, start: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">End Date</label>
                          <Input 
                            type="date"
                            value={dateFilter.end}
                            onChange={(e) => setDateFilter(prev => ({ ...prev, end: e.target.value }))}
                          />
                        </div>
                        <div className="sm:col-span-2 flex justify-end">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={resetFilters}
                          >
                            Reset Filters
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Email Subscription */}
            <Card className="mb-8 border-church-burgundy/10 bg-church-burgundy/5">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-bold text-church-burgundy mb-2">Stay Connected</h2>
                    <p className="text-gray-700 mb-4">
                      Subscribe to receive our weekly bulletin and monthly newsletter directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input placeholder="Your email address" className="flex-1" />
                      <Button className="bg-church-burgundy hover:bg-church-burgundy/90 text-white">
                        <Mail className="mr-2 h-4 w-4" />
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/3 rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/photo-1588345921523-c2dcdb7f1dcd" 
                      alt="Parish newsletter" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bulletins and Newsletters Tabs */}
            <Tabs defaultValue="bulletins" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="bulletins" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Weekly Bulletins</span>
                </TabsTrigger>
                <TabsTrigger value="newsletters" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Monthly Newsletters</span>
                </TabsTrigger>
              </TabsList>

              {/* Bulletins Tab */}
              <TabsContent value="bulletins">
                <div className="space-y-4">
                  {filteredBulletins.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg mb-2">No bulletins match your search criteria</p>
                      <Button variant="outline" size="sm" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    filteredBulletins.map(bulletin => (
                      <Card key={bulletin.id} className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="flex gap-4 items-start">
                              <div className="bg-church-burgundy/10 p-3 rounded-lg text-center min-w-[60px] hidden sm:block">
                                <FileText className="h-8 w-8 text-church-burgundy mx-auto" />
                                <div className="text-xs mt-1 text-gray-600">{bulletin.fileSize}</div>
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-bold text-church-burgundy">{bulletin.title}</h3>
                                  <span className="text-sm text-gray-500">
                                    {formatDate(bulletin.date)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">{bulletin.description}</p>
                              </div>
                            </div>
                            <div className="sm:self-center mt-2 sm:mt-0">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-1 border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                              >
                                <Download className="h-4 w-4" />
                                <span>PDF</span>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                  
                  {filteredBulletins.length > 0 && (
                    <div className="flex justify-center mt-8">
                      <Button variant="outline">
                        Load More Bulletins
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Newsletters Tab */}
              <TabsContent value="newsletters">
                <div className="space-y-4">
                  {filteredNewsletters.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg mb-2">No newsletters match your search criteria</p>
                      <Button variant="outline" size="sm" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    filteredNewsletters.map(newsletter => (
                      <Card key={newsletter.id} className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="flex gap-4 items-start">
                              <div className="bg-church-gold/10 p-3 rounded-lg text-center min-w-[60px] hidden sm:block">
                                <Calendar className="h-8 w-8 text-church-burgundy mx-auto" />
                                <div className="text-xs mt-1 text-gray-600">{newsletter.fileSize}</div>
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-bold text-church-burgundy">{newsletter.title}</h3>
                                  <span className="text-sm text-gray-500">
                                    {formatDate(newsletter.date)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">{newsletter.description}</p>
                              </div>
                            </div>
                            <div className="flex gap-2 sm:self-center mt-2 sm:mt-0">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-1 border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                              >
                                <Download className="h-4 w-4" />
                                <span>PDF</span>
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="flex items-center gap-1 text-church-burgundy hover:bg-church-burgundy/10"
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>View</span>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                  
                  {filteredNewsletters.length > 0 && (
                    <div className="flex justify-center mt-8">
                      <Button variant="outline">
                        Load More Newsletters
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {/* Additional Resources */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Diocesan Publications</CardTitle>
                  <CardDescription>Resources from our diocese</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Access publications from our diocese, including pastoral letters, announcements, and diocesan newsletters.
                  </p>
                  <Button variant="outline" className="w-full">
                    Visit Diocesan Website
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-church-burgundy">Special Parish Reports</CardTitle>
                  <CardDescription>Annual reports and financial statements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    View our parish's annual reports, financial statements, and strategic planning documents.
                  </p>
                  <Button variant="outline" className="w-full">
                    Access Reports
                  </Button>
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

export default Bulletins;
