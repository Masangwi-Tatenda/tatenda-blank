
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '@/components/common/SanityImage';
import { Calendar, Info } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PortableText from '@/components/common/PortableText';
import { format, parseISO } from 'date-fns';

const LiturgicalCalendarPage = () => {
  const { liturgicalCalendar, liturgicalSeasons, feastDays, isLoading } = useSanity();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Fallback seasons if Sanity data is not available
  const fallbackSeasons = [
    {
      name: "Advent",
      color: "purple",
      description: "A time of joyful expectation and preparation for the celebration of Christ's birth and his return in glory.",
      startDate: "Four Sundays before Christmas",
      endDate: "Christmas Eve"
    },
    {
      name: "Christmas",
      color: "white",
      description: "The celebration of Jesus' nativity and the mystery of the Incarnation, extending from Christmas Day to the Baptism of the Lord.",
      startDate: "December 25",
      endDate: "Feast of the Baptism of the Lord (January)"
    },
    {
      name: "Ordinary Time (First Part)",
      color: "green",
      description: "A period of growth and maturation in the faith, focusing on Christ's public ministry and teachings.",
      startDate: "After the Baptism of the Lord",
      endDate: "Before Ash Wednesday"
    },
    {
      name: "Lent",
      color: "purple",
      description: "A 40-day period of prayer, fasting, and almsgiving in preparation for Easter, focused on repentance and spiritual renewal.",
      startDate: "Ash Wednesday",
      endDate: "Holy Thursday"
    },
    {
      name: "Easter",
      color: "white",
      description: "The most important and joyous celebration of the liturgical year, commemorating Christ's resurrection and triumph over death.",
      startDate: "Easter Sunday",
      endDate: "Pentecost Sunday"
    },
    {
      name: "Ordinary Time (Second Part)",
      color: "green",
      description: "Continues the period of growth, extending from Pentecost until the beginning of Advent.",
      startDate: "After Pentecost",
      endDate: "Before First Sunday of Advent"
    }
  ];

  // Use Sanity data if available, otherwise use fallbacks
  const seasons = liturgicalCalendar?.seasons || fallbackSeasons;
  const upcomingFeasts = liturgicalCalendar?.upcomingFeasts || feastDays || [];
  const currentSeason = liturgicalCalendar?.currentSeason || (liturgicalSeasons ? liturgicalSeasons[0] : null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center pt-24">
          <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title={liturgicalCalendar?.title || "Liturgical Calendar"}
            subtitle={liturgicalCalendar?.subtitle || "Understanding the Sacred Rhythm of the Church Year"}
          />

          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-12">
            {liturgicalCalendar?.introduction ? (
              <PortableText value={liturgicalCalendar.introduction} />
            ) : (
              <p className="text-lg text-gray-700">
                The liturgical year is the annual cycle of seasons and celebrations in the Catholic Church. It revolves around the life, death, and resurrection of Jesus Christ, helping the faithful to enter more deeply into the mystery of salvation throughout the year. Each season has its own character, colors, and traditions that enrich our spiritual journey.
              </p>
            )}
          </div>

          {/* Current Season Highlight */}
          {currentSeason && (
            <div className="bg-church-burgundy/10 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold text-church-burgundy mb-4">Current Season: {currentSeason.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  {currentSeason.mainImage ? (
                    <SanityImage 
                      image={currentSeason.mainImage}
                      alt={currentSeason.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-64 bg-church-burgundy/20 flex items-center justify-center rounded-lg">
                      <Calendar className="w-16 h-16 text-church-burgundy/50" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-6 h-6 rounded-full mr-2" 
                      style={{backgroundColor: currentSeason.color || 'green'}}
                    ></div>
                    <p className="font-medium">Liturgical Color: {currentSeason.color || 'Green'}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{currentSeason.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Dates:</strong> {currentSeason.startDate} - {currentSeason.endDate}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Feast Days */}
          <h2 className="text-2xl font-bold text-church-burgundy mb-6">Upcoming Feast Days</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingFeasts.slice(0, 6).map((feast, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{feast.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-church-gold font-medium mb-2">
                    {typeof feast.date === 'string' && 
                      (feast.date.includes('-') ? format(parseISO(feast.date), 'MMMM d, yyyy') : feast.date)
                    }
                  </p>
                  <p className="text-gray-700 line-clamp-3">{feast.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Liturgical Seasons */}
          <h2 className="text-2xl font-bold text-church-burgundy mb-6">Liturgical Seasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season, index) => (
              <Card key={index} className={`overflow-hidden shadow-md border-l-4`} style={{ borderLeftColor: season.color || 'green' }}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-2" 
                      style={{ backgroundColor: season.color || 'green' }}
                    ></div>
                    {season.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{season.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Typical Dates:</strong> {season.startDate} to {season.endDate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <div className="flex items-start">
              <Info className="w-6 h-6 text-church-burgundy mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-church-burgundy mb-2">About Liturgical Colors</h3>
                <p className="text-gray-700">
                  Liturgical colors are used throughout the year to symbolize different aspects of our faith and mark the changing seasons. White symbolizes purity and joy (used for Easter, Christmas); Green represents hope and growth (Ordinary Time); Purple signifies penance and preparation (Advent, Lent); Red represents the Holy Spirit and martyrdom (Pentecost, feasts of martyrs); and Rose can be used on Gaudete and Laetare Sundays as a sign of joy amid seasons of penance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LiturgicalCalendarPage;
