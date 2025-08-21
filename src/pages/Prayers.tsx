import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Star, BookOpen } from 'lucide-react';
import { useSanity } from '@/contexts/SanityContext';

const Prayers = () => {
  const { prayers } = useSanity();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group prayers by category
  const categories = ['all', 'traditional', 'devotional', 'novenas', 'seasonal', 'saints'];
  
  const filteredPrayers = selectedCategory === 'all' 
    ? prayers 
    : prayers.filter(prayer => prayer.category?.toLowerCase() === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      traditional: 'bg-blue-100 text-blue-800',
      devotional: 'bg-purple-100 text-purple-800',
      novenas: 'bg-green-100 text-green-800',
      seasonal: 'bg-orange-100 text-orange-800',
      saints: 'bg-yellow-100 text-yellow-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // Sample prayers if none exist in Sanity
  const defaultPrayers = [
    {
      _id: 'our-father',
      title: 'Our Father',
      category: 'traditional',
      text: 'Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
      source: 'Matthew 6:9-13'
    },
    {
      _id: 'hail-mary',
      title: 'Hail Mary',
      category: 'traditional',
      text: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
      source: 'Luke 1:28, Luke 1:42'
    },
    {
      _id: 'glory-be',
      title: 'Glory Be',
      category: 'traditional',
      text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
      source: 'Traditional'
    }
  ];

  const displayPrayers = prayers.length > 0 ? filteredPrayers : defaultPrayers;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="relative bg-gradient-to-r from-church-burgundy to-church-gold text-white py-16">
          <div className="container-custom mx-auto px-4">
            <SectionTitle 
              title="Prayers & Devotions"
              subtitle="Traditional and contemporary prayers for spiritual growth"
              align="center"
              className="text-white"
            />
          </div>
        </div>

        <div className="container-custom mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Prayer is the heart of our Catholic faith, connecting us with God and strengthening our 
              spiritual journey. Explore our collection of traditional prayers, novenas, and devotions 
              to deepen your relationship with Christ.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="traditional">Traditional</TabsTrigger>
              <TabsTrigger value="devotional">Devotional</TabsTrigger>
              <TabsTrigger value="novenas">Novenas</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              <TabsTrigger value="saints">Saints</TabsTrigger>
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(category === 'all' ? displayPrayers : displayPrayers.filter(p => p.category === category))
                    .map((prayer) => (
                    <Card key={prayer._id} className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg text-church-burgundy">
                            {prayer.title}
                          </CardTitle>
                          {prayer.category && (
                            <Badge className={getCategoryColor(prayer.category.toLowerCase())}>
                              {prayer.category}
                            </Badge>
                          )}
                        </div>
                        {prayer.source && (
                          <p className="text-sm text-gray-600 italic">Source: {prayer.source}</p>
                        )}
                      </CardHeader>
                      
                      <CardContent className="flex-grow">
                        {typeof prayer.text === 'string' ? (
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {prayer.text}
                          </p>
                        ) : (
                          // This would be for Sanity portable text content
                          <div className="text-gray-700 leading-relaxed">
                            {/* Portable text would be rendered here */}
                            <p>{prayer.text}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Popular Devotions Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-church-burgundy text-center mb-8">
              Popular Catholic Devotions
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-church-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">The Rosary</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Meditate on the life of Christ through the mysteries of the Rosary, 
                    guided by the intercession of Mary.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-church-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Adoration</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Spend time in prayer before the Blessed Sacrament in our 
                    weekly Eucharistic Adoration.
                  </p>
                  <Button variant="outline" size="sm">Schedule</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-church-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Stations of the Cross</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Journey with Christ through his Passion and death, 
                    especially during the season of Lent.
                  </p>
                  <Button variant="outline" size="sm">Pray Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-church-burgundy/5 to-church-gold/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-church-burgundy mb-4">
                  Deepen Your Prayer Life
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Join our parish prayer groups and devotional activities to grow closer to God 
                  alongside fellow parishioners in community and fellowship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/ministries">Join Prayer Groups</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/spiritual-growth/daily-readings">Daily Readings</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scripture Quote */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <blockquote className="text-xl italic text-gray-600 border-l-4 border-church-burgundy pl-6">
              "Do not be anxious about anything, but in every situation, by prayer and petition, 
              with thanksgiving, present your requests to God."
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">Philippians 4:6</cite>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Prayers;