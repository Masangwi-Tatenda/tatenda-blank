
import React from 'react';
import { BookOpen, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';

const WeeklyScripture = () => {
  // For a real site, this could be fetched from an API
  const scripture = {
    verse: "Matthew 5:14-16",
    text: "You are the light of the world. A city built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    reflection: "Christ calls us to be visible witnesses of His love in the world. How are we letting our light shine in our community this week? Through our actions and words, we can bring the light of Christ to those around us, especially to those who live in darkness and despair."
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Weekly Scripture Reflection" 
          subtitle="Nourish your faith with our weekly scripture reading and reflection"
        />
        
        <Card className="border-church-gold/30 shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-0">
            {/* Scripture Verse */}
            <div className="md:col-span-5 bg-church-burgundy text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5"></div>
              
              <div className="relative z-10">
                <BookOpen className="w-10 h-10 mb-4 text-church-gold" />
                <h3 className="text-xl font-semibold mb-4">This Week's Reading</h3>
                <p className="text-2xl font-playfair mb-3">{scripture.verse}</p>
                <div className="flex items-start mt-4">
                  <Quote className="w-8 h-8 text-church-gold shrink-0 mt-1 mr-2" />
                  <p className="italic text-white/90">{scripture.text}</p>
                </div>
              </div>
            </div>
            
            {/* Reflection */}
            <div className="md:col-span-7 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-church-burgundy mb-4">Reflection</h3>
              <p className="text-gray-700 leading-relaxed">{scripture.reflection}</p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a 
                  href="/blog/weekly-reflections" 
                  className="text-church-burgundy hover:text-church-gold transition-colors font-medium"
                >
                  Read Previous Reflections
                </a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a 
                  href="/mass-times" 
                  className="text-church-burgundy hover:text-church-gold transition-colors font-medium"
                >
                  Join Us for Mass
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WeeklyScripture;
