
import React from 'react';
import { BookOpen, Quote, Heart, Calendar, BookMarked } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';
import Button from '../common/Button';
import { useSanity } from '@/contexts/SanityContext';

const WeeklyScripture = () => {
  const { weeklyScripture, bibleStudyResources } = useSanity();
  
  // Fallback data if Sanity data is not available
  const fallbackScripture = {
    verse: "Matthew 5:14-16",
    text: "You are the light of the world. A city built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    reflection: "Christ calls us to be visible witnesses of His love in the world. How are we letting our light shine in our community this week? Through our actions and words, we can bring the light of Christ to those around us, especially to those who live in darkness and despair."
  };

  // Use Sanity data if available, otherwise use fallback
  const scripture = weeklyScripture || fallbackScripture;
  
  // Get the scripture reference from verse field
  const scriptureReference = scripture.verse || "Scripture";

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Spiritual Growth" 
          subtitle="Resources to nurture your faith journey"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Scripture Card */}
          <div className="lg:col-span-6">
            <Card className="border-church-gold/30 shadow-lg overflow-hidden h-full">
              <div className="grid md:grid-cols-12 gap-0 h-full">
                {/* Scripture Verse */}
                <div className="md:col-span-5 bg-church-burgundy text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10"></div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5"></div>
                  
                  <div className="relative z-10">
                    <BookOpen className="w-10 h-10 mb-4 text-church-gold" />
                    <h3 className="text-xl font-semibold mb-4">Daily Scripture</h3>
                    <p className="text-2xl font-playfair mb-3">{scriptureReference}</p>
                    <div className="flex items-start mt-4">
                      <Quote className="w-8 h-8 text-church-gold shrink-0 mt-1 mr-2" />
                      <p className="italic text-white/90">{scripture.text}</p>
                    </div>
                  </div>
                </div>
                
                {/* Reflection */}
                <div className="md:col-span-7 p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-church-burgundy mb-4">Today's Reflection</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{scripture.reflection}</p>
                  
                  <div className="mt-4">
                    <Button
                      href="/spiritual-growth"
                      variant="outline"
                      className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                    >
                      View All Daily Readings
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Prayer & Study Resources */}
          <div className="lg:col-span-6">
            <div className="h-full flex flex-col gap-6">
              {/* Catholic Prayers */}
              <Card className="border-church-gold/30 shadow-md p-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-church-gold/10 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-2">Catholic Prayers & Novenas</h3>
                    <p className="text-gray-700 mb-4">Access a treasury of traditional Catholic prayers, novenas, and devotionals to enrich your prayer life.</p>
                    <Button
                      href="/spiritual-growth/prayers"
                      variant="link"
                      className="text-church-burgundy p-0 h-auto hover:text-church-gold"
                    >
                      Browse Prayer Collection
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Bible Study */}
              <Card className="border-church-gold/30 shadow-md p-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-church-gold/10 p-3 rounded-full">
                    <BookMarked className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-2">Bible Study Resources</h3>
                    <p className="text-gray-700 mb-4">Explore guided reading plans, study guides, and reflection questions to deepen your understanding of Scripture.</p>
                    <Button
                      href="/spiritual-growth/bible-study"
                      variant="link"
                      className="text-church-burgundy p-0 h-auto hover:text-church-gold"
                    >
                      Start a Bible Study Plan
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Liturgical Calendar */}
              <Card className="border-church-gold/30 shadow-md p-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-church-gold/10 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-church-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-2">Liturgical Calendar</h3>
                    <p className="text-gray-700 mb-4">Follow the Church's liturgical seasons and feast days to align your spiritual journey with the rhythm of the Catholic year.</p>
                    <Button
                      href="/spiritual-growth/liturgical-calendar"
                      variant="link"
                      className="text-church-burgundy p-0 h-auto hover:text-church-gold"
                    >
                      View Liturgical Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyScripture;
