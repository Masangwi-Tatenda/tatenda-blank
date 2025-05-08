
import React from 'react';
import { Heart, Calendar, BookMarked } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';
import { useSanity } from '@/contexts/SanityContext';
import DailyReadingBlock from '@/components/common/DailyReadingBlock';

const WeeklyScripture = () => {
  const { weeklyScripture, bibleStudyResources } = useSanity();
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Spiritual Growth" 
          subtitle="Resources to nurture your faith journey"
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Daily Reading Block */}
          <DailyReadingBlock simplified className="mb-8" />
          
          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Catholic Prayers */}
            <Card className="border-church-gold/30 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-church-burgundy/5 pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-church-burgundy" />
                  Catholic Prayers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">Access a treasury of traditional Catholic prayers, novenas, and devotionals to enrich your prayer life.</p>
                <Link to="/spiritual-growth/prayers" className="text-church-burgundy font-medium hover:text-church-gold transition-colors">
                  Browse Prayer Collection →
                </Link>
              </CardContent>
            </Card>
              
            {/* Bible Study */}
            <Card className="border-church-gold/30 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-church-burgundy/5 pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-church-burgundy" />
                  Bible Study
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">Explore guided reading plans, study guides, and reflection questions to deepen your understanding of Scripture.</p>
                <Link to="/spiritual-growth/bible-study" className="text-church-burgundy font-medium hover:text-church-gold transition-colors">
                  Start a Bible Study Plan →
                </Link>
              </CardContent>
            </Card>
              
            {/* Liturgical Calendar */}
            <Card className="border-church-gold/30 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-church-burgundy/5 pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-church-burgundy" />
                  Liturgical Calendar
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">Follow the Church's liturgical seasons and feast days to align your spiritual journey with the rhythm of the Catholic year.</p>
                <Link to="/liturgical-calendar" className="text-church-burgundy font-medium hover:text-church-gold transition-colors">
                  View Liturgical Calendar →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyScripture;
