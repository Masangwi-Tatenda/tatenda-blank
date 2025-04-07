import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { cn } from '@/lib/utils';
import { Clock, Calendar, MapPin, AlertTriangle, ArrowRight, PlaySquare, FileText, Download, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Homily {
  id: string;
  title: string;
  date: string;
  priest: string;
  season: string;
  audioUrl?: string;
  textUrl?: string;
}

const MassTimes = () => {
  const [homilies] = useState<Homily[]>([
    {
      id: "1",
      title: "Finding Christ in Our Daily Lives",
      date: "2023-12-24",
      priest: "Fr. Nguluve",
      season: "Advent",
      audioUrl: "#",
      textUrl: "#"
    },
    {
      id: "2",
      title: "The Meaning of Baptism",
      date: "2023-12-10",
      priest: "Fr. Nguluve",
      season: "Advent",
      audioUrl: "#",
      textUrl: "#"
    },
    {
      id: "3",
      title: "Called to Discipleship",
      date: "2023-11-26",
      priest: "Fr. Nguluve",
      season: "Ordinary Time",
      audioUrl: "#",
      textUrl: "#"
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608158137211-5684e2bae3fd")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Mass & Worship</h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">Join us in prayer, liturgy, and sacraments as we worship together and grow in faith</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue="schedule" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="schedule">Mass Schedule</TabsTrigger>
                <TabsTrigger value="livestream">Livestream</TabsTrigger>
                <TabsTrigger value="homilies">Homily Archive</TabsTrigger>
                <TabsTrigger value="worship-guides">Worship Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="schedule">
                <SectionTitle 
                  title="Mass Schedule" 
                  subtitle="Join us in celebrating the Holy Eucharist."
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <ScheduleCard 
                    title="Weekday Masses"
                    times={[
                      { day: 'Monday', time: '6:30 AM' },
                      { day: 'Tuesday', time: '6:30 AM' },
                      { day: 'Wednesday', time: '6:30 AM' },
                      { day: 'Thursday', time: '6:30 AM' },
                      { day: 'Friday', time: '6:30 AM' },
                    ]}
                    color="bg-church-navy"
                  />
                  
                  <ScheduleCard 
                    title="Weekend Masses"
                    times={[
                      { day: 'Saturday (Vigil)', time: '6:00 PM' },
                      { day: 'Sunday', time: '7:00 AM' },
                      { day: 'Sunday', time: '9:00 AM' },
                    ]}
                    color="bg-church-burgundy"
                  />
                  
                  <ScheduleCard 
                    title="Confession & Adoration"
                    times={[
                      { day: 'Wednesday Adoration', time: '5:00 PM - 6:00 PM' },
                      { day: 'Friday Adoration', time: '7:00 AM - 8:00 AM' },
                      { day: 'Saturday Confession', time: '4:30 PM - 5:30 PM' },
                      { day: 'By Appointment', time: 'Contact Parish Office' },
                    ]}
                    color="bg-church-gold"
                    textColor="text-church-navy"
                  />
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">Holy Day Masses</h3>
                      <p className="text-gray-700 mb-4">
                        Holy Days of Obligation are special feast days when Catholics are obligated to attend Mass.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex justify-between pb-2 border-b border-gray-200">
                          <span>Holy Day Vigil</span>
                          <span className="font-medium">7:00 PM</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-200">
                          <span>Holy Day</span>
                          <span className="font-medium">9:00 AM & 6:30 PM</span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-church-burgundy mb-2">Holy Days of Obligation include:</h4>
                        <ul className="list-disc pl-5 text-gray-700">
                          <li>Solemnity of Mary, Mother of God (January 1)</li>
                          <li>The Ascension of the Lord (40 days after Easter)</li>
                          <li>The Assumption of the Blessed Virgin Mary (August 15)</li>
                          <li>All Saints Day (November 1)</li>
                          <li>The Immaculate Conception (December 8)</li>
                          <li>Christmas (December 25)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">Parish Devotions</h3>
                      <p className="text-gray-700 mb-4">
                        In addition to Mass, our parish offers various devotions to help enrich your spiritual life.
                      </p>
                      <ul className="space-y-3">
                        <li className="pb-3 border-b border-gray-200">
                          <span className="font-semibold text-church-burgundy block">Divine Mercy Chaplet</span>
                          <span className="text-gray-700">Fridays, 3:00 PM</span>
                        </li>
                        <li className="pb-3 border-b border-gray-200">
                          <span className="font-semibold text-church-burgundy block">Rosary</span>
                          <span className="text-gray-700">Daily, 6:00 AM before daily Mass</span>
                          <span className="text-gray-700 block">Sundays, 6:30 AM before 7:00 AM Mass</span>
                        </li>
                        <li className="pb-3 border-b border-gray-200">
                          <span className="font-semibold text-church-burgundy block">Stations of the Cross</span>
                          <span className="text-gray-700">Fridays during Lent, 6:00 PM</span>
                        </li>
                        <li>
                          <span className="font-semibold text-church-burgundy block">First Friday Devotion</span>
                          <span className="text-gray-700">First Friday of each month, Adoration all day</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Mass Etiquette & Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-church-burgundy mb-2">For Visitors & New Parishioners</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>We welcome visitors! Please feel free to attend any Mass.</li>
                        <li>Communion is offered to all Catholics who have made their First Communion and are in a state of grace.</li>
                        <li>Non-Catholics are welcome to come forward for a blessing during Communion (cross arms over chest).</li>
                        <li>New parishioners are encouraged to register with the parish office after Mass.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy mb-2">Mass Guidelines</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>Please arrive at least 5-10 minutes before Mass begins.</li>
                        <li>Appropriate attire is respectful and modest.</li>
                        <li>Silence cell phones before entering the church.</li>
                        <li>Parents with young children: quiet toys and books are welcome; a cry room is available if needed.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-gray-100 p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-church-burgundy mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Special Liturgical Celebrations</h3>
                      <p className="text-gray-700">
                        Please check our bulletin or announcements for additional special liturgical celebrations such as Easter Triduum, Pentecost, and other feast days. These may have different schedules from our regular Mass times.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="livestream">
                <SectionTitle 
                  title="Livestream Masses" 
                  subtitle="Join us virtually for the celebration of the Mass"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-black flex items-center justify-center">
                      <div className="text-center p-8">
                        <PlaySquare className="w-16 h-16 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70">YouTube Livestream Embed</p>
                        <p className="text-white/50 text-sm mt-2">Sunday Mass - 9:00 AM</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-church-burgundy mb-2">Sunday Mass Livestream</h3>
                      <p className="text-gray-700 mb-4">
                        Our 9:00 AM Sunday Mass is livestreamed every week for those unable to join us in person. The stream begins 10 minutes before Mass starts.
                      </p>
                      <a 
                        href="https://www.youtube.com/channel/yourchannelid" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-church-burgundy font-medium hover:text-church-gold"
                      >
                        Subscribe to our YouTube Channel <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-church-burgundy mb-4">Livestream Schedule</h3>
                        <ul className="space-y-3">
                          <li className="flex justify-between pb-2 border-b border-gray-200">
                            <span>Sunday Mass</span>
                            <span className="font-medium">9:00 AM</span>
                          </li>
                          <li className="flex justify-between pb-2 border-b border-gray-200">
                            <span>Holy Days</span>
                            <span className="font-medium">As announced</span>
                          </li>
                          <li className="flex justify-between pb-2 border-b border-gray-200">
                            <span>Special Events</span>
                            <span className="font-medium">As announced</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-church-burgundy mb-4">Previous Masses</h3>
                        <p className="text-gray-700 mb-4">
                          Missed a livestream? You can watch recordings of our previous Masses on our YouTube channel.
                        </p>
                        <a 
                          href="https://www.youtube.com/channel/yourchannelid/videos" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-church-burgundy font-medium hover:text-church-gold"
                        >
                          View Mass recordings <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="homilies">
                <SectionTitle 
                  title="Homily Archive" 
                  subtitle="Listen to and read past homilies from our parish priests"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {homilies.map((homily) => (
                    <Card key={homily.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="bg-church-burgundy text-white p-4">
                          <h3 className="text-xl font-semibold line-clamp-1">{homily.title}</h3>
                          <p className="text-white/80 text-sm">{new Date(homily.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div className="p-5">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-church-gold/20 text-church-burgundy px-3 py-1 rounded-full">
                              {homily.season}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                              {homily.priest}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 mt-4">
                            {homily.audioUrl && (
                              <a 
                                href={homily.audioUrl} 
                                className="flex items-center gap-1 text-sm text-church-burgundy hover:text-church-gold"
                              >
                                <PlaySquare className="w-4 h-4" /> Listen
                              </a>
                            )}
                            {homily.textUrl && (
                              <a 
                                href={homily.textUrl} 
                                className="flex items-center gap-1 text-sm text-church-burgundy hover:text-church-gold"
                              >
                                <FileText className="w-4 h-4" /> Read
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <a 
                    href="/homilies"
                    className="inline-flex items-center px-6 py-3 rounded-md bg-church-burgundy text-white hover:bg-church-burgundy/90 transition-colors"
                  >
                    View All Homilies <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </TabsContent>
              
              <TabsContent value="worship-guides">
                <SectionTitle 
                  title="Worship Guides & Resources" 
                  subtitle="Materials to enhance your participation in the liturgy"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-r from-church-burgundy to-church-navy flex items-center justify-center">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Guide to the Mass</h3>
                      <p className="text-gray-700 mb-4">A comprehensive guide to understanding the parts of the Mass, their significance, and how to fully participate in the liturgy.</p>
                      <a 
                        href="#"
                        className="inline-flex items-center text-church-burgundy font-medium hover:text-church-gold"
                      >
                        <Download className="mr-2 w-4 h-4" /> Download PDF
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-r from-church-gold to-yellow-500 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Seasonal Worship Aids</h3>
                      <p className="text-gray-700 mb-4">Special guides for Advent, Christmas, Lent, Easter, and other liturgical seasons to help you enter more deeply into these sacred times.</p>
                      <a 
                        href="#"
                        className="inline-flex items-center text-church-burgundy font-medium hover:text-church-gold"
                      >
                        <Download className="mr-2 w-4 h-4" /> Download Current Season
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Prayer Resources</h3>
                      <p className="text-gray-700 mb-4">Collection of traditional Catholic prayers, how to pray the Rosary, Divine Mercy Chaplet, and other devotions.</p>
                      <a 
                        href="#"
                        className="inline-flex items-center text-church-burgundy font-medium hover:text-church-gold"
                      >
                        <Download className="mr-2 w-4 h-4" /> Download Prayer Book
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-church-burgundy mb-4">Church Location</h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-church-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Musha WeBetania Parish</h3>
                    <p className="text-gray-600">123 Parish Road<br />City, Country 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-church-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Parish Office Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 italic">Google Maps embed would appear here</p>
                {/* In a real implementation, you would embed a Google Map here */}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ScheduleCard = ({ title, times, color, textColor = "text-white" }) => {
  return (
    <div className={cn("rounded-lg overflow-hidden shadow-lg animate-fade-in", color)}>
      <div className="p-6">
        <h3 className={cn("text-2xl font-bold mb-4", textColor)}>{title}</h3>
        <ul className="space-y-2">
          {times.map((item, index) => (
            <li key={index} className={cn("flex justify-between items-center py-2 border-b border-white/20", textColor)}>
              <span className="font-medium">{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MassTimes;
