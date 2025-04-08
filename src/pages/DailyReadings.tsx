
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, BookOpen, ChevronLeft, ChevronRight, Download, Share2, BookMarked, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, addDays, subDays } from 'date-fns';

// Sample data for readings
const getSampleReadings = (date: Date) => {
  // This is just sample data - in a real implementation this would come from an API
  const dateStr = format(date, 'yyyy-MM-dd');
  const dayOfWeek = format(date, 'EEEE');
  
  return {
    date: dateStr,
    dayOfWeek,
    liturgicalSeason: 'Ordinary Time',
    liturgicalColor: 'Green',
    readings: [
      {
        title: 'First Reading',
        citation: 'Isaiah 55:10-11',
        text: 'Thus says the LORD: Just as from the heavens the rain and snow come down and do not return there till they have watered the earth, making it fertile and fruitful, giving seed to the one who sows and bread to the one who eats, so shall my word be that goes forth from my mouth; it shall not return to me void, but shall do my will, achieving the end for which I sent it.',
      },
      {
        title: 'Responsorial Psalm',
        citation: 'Psalm 34:4-5, 6-7, 16-17, 18-19',
        text: 'R. (18b) From all their distress God rescues the just.\nGlorify the LORD with me,\nlet us together extol his name.\nI sought the LORD, and he answered me\nand delivered me from all my fears.\n\nR. From all their distress God rescues the just.\nLook to him that you may be radiant with joy,\nand your faces may not blush with shame.\nWhen the poor one called out, the LORD heard,\nand from all his distress he saved him.\n\nR. From all their distress God rescues the just.',
      },
      {
        title: 'Second Reading',
        citation: '1 Corinthians 9:16-19, 22-23',
        text: 'Brothers and sisters: If I preach the gospel, this is no reason for me to boast, for an obligation has been imposed on me, and woe to me if I do not preach it! If I do so willingly, I have a recompense, but if unwillingly, then I have been entrusted with a stewardship. What then is my recompense? That, when I preach, I offer the gospel free of charge so as not to make full use of my right in the gospel.\n\nAlthough I am free in regard to all, I have made myself a slave to all so as to win over as many as possible. To the weak I became weak, to win over the weak. I have become all things to all, to save at least some. All this I do for the sake of the gospel, so that I too may have a share in it.',
      },
      {
        title: 'Gospel',
        citation: 'Mark 1:29-39',
        text: 'On leaving the synagogue Jesus entered the house of Simon and Andrew with James and John. Simon's mother-in-law lay sick with a fever. They immediately told him about her. He approached, grasped her hand, and helped her up. Then the fever left her and she waited on them.\n\nWhen it was evening, after sunset, they brought to him all who were ill or possessed by demons. The whole town was gathered at the door. He cured many who were sick with various diseases, and he drove out many demons, not permitting them to speak because they knew him.\n\nRising very early before dawn, he left and went off to a deserted place, where he prayed. Simon and those who were with him pursued him and on finding him said, "Everyone is looking for you." He told them, "Let us go on to the nearby villages that I may preach there also. For this purpose have I come." So he went into their synagogues, preaching and driving out demons throughout the whole of Galilee.',
      }
    ],
    saint: {
      name: 'St. Catherine of Siena',
      feast: dateStr === '2025-04-29',
      description: 'St. Catherine of Siena (1347-1380) was a Dominican tertiary, mystic, and Doctor of the Church. She worked to bring the papacy back to Rome from Avignon and to establish peace among Italian city-states.',
    }
  };
};

const DailyReadings = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [readings, setReadings] = useState(getSampleReadings(currentDate));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update readings when date changes
    setReadings(getSampleReadings(currentDate));
  }, [currentDate]);

  const goToPreviousDay = () => {
    setCurrentDate(prevDate => subDays(prevDate, 1));
  };

  const goToNextDay = () => {
    setCurrentDate(prevDate => addDays(prevDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Daily Readings"
            subtitle="The Word of God for today's liturgy"
            className="text-center mb-8"
          />

          <div className="max-w-4xl mx-auto">
            <Card className="border-church-burgundy/10 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <div className="bg-church-burgundy/10 p-2 rounded-full">
                      <CalendarDays className="h-6 w-6 text-church-burgundy" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-church-burgundy">
                        {format(currentDate, 'EEEE, MMMM d, yyyy')}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {readings.liturgicalSeason} • <span className="text-church-burgundy">{readings.liturgicalColor}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={goToPreviousDay}
                      className="h-9 w-9 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={goToToday}
                      className="h-9"
                    >
                      Today
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={goToNextDay}
                      className="h-9 w-9 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="readings" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="readings" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Today's Readings</span>
                </TabsTrigger>
                <TabsTrigger value="reflection" className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4" />
                  <span>Reflection</span>
                </TabsTrigger>
              </TabsList>

              {/* Readings Tab */}
              <TabsContent value="readings">
                <div className="space-y-8">
                  {readings.readings.map((reading, index) => (
                    <Card key={index} className="border-church-burgundy/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-church-burgundy">{reading.title}</CardTitle>
                        <CardDescription>{reading.citation}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="prose max-w-none">
                          <p className="whitespace-pre-line text-gray-700">{reading.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {readings.saint.feast && (
                    <Card className="border-church-burgundy/10 bg-church-light-gold/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-church-burgundy">Saint of the Day: {readings.saint.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{readings.saint.description}</p>
                        <Link to="/saints-calendar" className="inline-flex items-center mt-4 text-sm text-church-burgundy hover:text-church-gold transition-colors">
                          Learn more about today's saint <span className="ml-1">→</span>
                        </Link>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex flex-wrap justify-between mt-8">
                    <div className="flex gap-2 mb-4 sm:mb-0">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <Link to="/previous-readings" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                      <History className="h-4 w-4 mr-1" />
                      <span>View Previous Readings</span>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              {/* Reflection Tab */}
              <TabsContent value="reflection">
                <Card className="border-church-burgundy/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-church-burgundy">Daily Reflection</CardTitle>
                    <CardDescription>Insights on today's readings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="mb-4 text-gray-700">
                        In today's Gospel, we see Jesus in action, healing Simon's mother-in-law and many others who were sick or possessed. The passage reveals several important aspects of Christ's mission and ministry.
                      </p>
                      <p className="mb-4 text-gray-700">
                        First, we see Jesus's compassion and power in healing. He approaches Simon's mother-in-law, takes her by the hand, and helps her up. The fever immediately leaves her. Later, the whole town gathers at the door, bringing all who were ill or possessed, and Jesus heals many of them.
                      </p>
                      <p className="mb-4 text-gray-700">
                        Second, we witness Jesus's commitment to prayer. Despite his busy schedule of preaching and healing, he rises "very early before dawn" to go to a deserted place to pray. This highlights the importance of taking time for quiet prayer even—or especially—when we are busiest.
                      </p>
                      <p className="mb-4 text-gray-700">
                        Third, we see Jesus's clear sense of mission. When his disciples find him and tell him everyone is looking for him, he doesn't return to the adulation of the crowds. Instead, he says, "Let us go on to the nearby villages that I may preach there also. For this purpose have I come." Jesus knows his mission is not just to heal or to be popular but to preach the good news of the kingdom of God to all.
                      </p>
                      <p className="text-gray-700">
                        Today's readings invite us to reflect on our own mission in life. Are we clear about our purpose? Do we make time for prayer to discern God's will? And do we use whatever gifts we have been given to serve others, as Jesus did?
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500">
                    Reflection by Fr. James Ndoro
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-church-burgundy/10 bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookMarked className="h-5 w-5 text-church-burgundy" />
                    Bible Study Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Deepen your understanding of Sacred Scripture with our parish Bible study resources, reading plans, and study groups.
                  </p>
                  <Link to="/bible-study" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    Explore Bible Study
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/10 bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <History className="h-5 w-5 text-church-burgundy" />
                    Previous Readings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Access an archive of past liturgical readings organized by date, liturgical season, and feast days.
                  </p>
                  <Link to="/previous-readings" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    Browse Archive
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

export default DailyReadings;
