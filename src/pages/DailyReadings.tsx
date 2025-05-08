
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Calendar, BookMarked, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DailyReadingBlock from '@/components/common/DailyReadingBlock';

const DailyReadings = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
            <DailyReadingBlock showControls={true} className="mb-12" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                    <Calendar className="h-5 w-5 text-church-burgundy" />
                    Liturgical Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Follow the Church's liturgical seasons and feast days throughout the year to deepen your connection to the liturgical rhythm.
                  </p>
                  <Link to="/liturgical-calendar" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    View Liturgical Calendar
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            {/* Previous Readings Section */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-church-burgundy/10 p-3 rounded-full">
                  <History className="h-6 w-6 text-church-burgundy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-church-burgundy mb-2">Previous Readings Archive</h3>
                  <p className="text-gray-700 mb-4">
                    Access our archive of past liturgical readings organized by date, liturgical season, and feast days.
                    Search through past readings to follow the Church's lectionary cycle.
                  </p>
                  <Link to="/previous-readings" className="text-church-burgundy font-medium hover:underline">
                    Browse the Reading Archive →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Subscription Card */}
            <Card className="border-church-burgundy text-center p-6">
              <CardHeader>
                <CardTitle className="text-xl text-church-burgundy">
                  Daily Readings Delivered to Your Inbox
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Sign up to receive the daily readings, reflections, and prayers directly in your email inbox each morning.
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-burgundy/50"
                    />
                    <button className="px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    You can unsubscribe at any time. View our Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailyReadings;
