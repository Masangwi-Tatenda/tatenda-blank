
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '@/components/common/SanityImage';
import { Clock, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MassSchedulePage = () => {
  const { massSchedule, isLoading } = useSanity();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Fallback data in case Sanity data is not available
  const fallbackSchedule = {
    title: "Mass & Confession Schedule",
    subtitle: "Join us in prayer and worship",
    weekdayMasses: [
      { day: "Monday", time: "7:30 AM", location: "Main Church" },
      { day: "Tuesday", time: "7:30 AM", location: "Main Church" },
      { day: "Wednesday", time: "7:30 AM", location: "Main Church" },
      { day: "Thursday", time: "7:30 AM", location: "Main Church" },
      { day: "Friday", time: "7:30 AM", location: "Main Church" }
    ],
    weekendMasses: [
      { day: "Saturday (Vigil)", time: "5:00 PM", location: "Main Church" },
      { day: "Sunday", time: "8:00 AM", location: "Main Church" },
      { day: "Sunday", time: "10:00 AM", location: "Main Church", language: "English" },
      { day: "Sunday", time: "12:00 PM", location: "Main Church" }
    ],
    confessionTimes: [
      { day: "Saturday", time: "3:30 PM - 4:30 PM" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM" }
    ],
    holyDays: [
      { title: "Christmas", date: "December 25", time: "8:00 AM, 10:00 AM, 12:00 PM" },
      { title: "Easter", date: "Varies each year", time: "8:00 AM, 10:00 AM, 12:00 PM" }
    ],
    additionalInfo: "Holy Days of Obligation have additional Mass times. Please check the bulletin or call the parish office for the most current schedule."
  };

  // Use Sanity data if available, otherwise use fallback
  const schedule = massSchedule || fallbackSchedule;

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
            title={schedule.title || "Mass & Confession Schedule"}
            subtitle={schedule.subtitle || "Join us in prayer and worship"}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Weekday Masses */}
            <Card className="shadow-md">
              <CardHeader className="bg-church-burgundy text-white">
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Weekday Masses
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {schedule.weekdayMasses?.map((mass, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-church-burgundy/10 p-2 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-church-burgundy" />
                      </div>
                      <div>
                        <p className="font-semibold text-church-burgundy">{mass.day}</p>
                        <p>{mass.time}</p>
                        {mass.location && (
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" /> {mass.location}
                          </p>
                        )}
                        {mass.language && (
                          <p className="text-sm text-gray-600">{mass.language}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Weekend Masses */}
            <Card className="shadow-md">
              <CardHeader className="bg-church-gold text-white">
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Weekend Masses
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {schedule.weekendMasses?.map((mass, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-church-gold/10 p-2 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-church-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-church-gold">{mass.day}</p>
                        <p>{mass.time}</p>
                        {mass.location && (
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" /> {mass.location}
                          </p>
                        )}
                        {mass.language && (
                          <p className="text-sm text-gray-600">{mass.language}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Confession Times */}
            <Card className="shadow-md">
              <CardHeader className="bg-gray-800 text-white">
                <CardTitle>Confession Schedule</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {schedule.confessionTimes?.map((confession, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-gray-800" />
                      </div>
                      <div>
                        <p className="font-semibold">{confession.day}</p>
                        <p>{confession.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Holy Days */}
            <Card className="shadow-md">
              <CardHeader className="bg-church-burgundy/80 text-white">
                <CardTitle>Holy Days of Obligation</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {schedule.holyDays?.map((holyday, index) => (
                    <li key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <p className="font-semibold text-church-burgundy">{holyday.title}</p>
                      <p className="text-sm">{holyday.date}</p>
                      <p className="mt-1">{holyday.time}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {schedule.additionalInfo && (
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-church-burgundy mb-2">Additional Information</h3>
              <p>{schedule.additionalInfo}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MassSchedulePage;
