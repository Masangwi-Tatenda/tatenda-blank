import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import SanityImage from '@/components/common/SanityImage';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Calendar, Users } from 'lucide-react';
import { useSanity } from '@/contexts/SanityContext';

const MassSchedule = () => {
  const { massSchedule } = useSanity();

  // Default schedule if not loaded from Sanity
  const defaultWeekdayMasses = [
    { day: "Monday", time: "7:00 AM", language: "English", location: "Main Church" },
    { day: "Tuesday", time: "7:00 AM", language: "English", location: "Main Church" },
    { day: "Wednesday", time: "7:00 AM", language: "English", location: "Main Church" },
    { day: "Thursday", time: "7:00 AM", language: "English", location: "Main Church" },
    { day: "Friday", time: "7:00 AM", language: "English", location: "Main Church" },
  ];

  const defaultWeekendMasses = [
    { day: "Saturday", time: "5:00 PM", language: "English", location: "Main Church" },
    { day: "Sunday", time: "8:00 AM", language: "English", location: "Main Church" },
    { day: "Sunday", time: "10:30 AM", language: "English", location: "Main Church" },
    { day: "Sunday", time: "12:00 PM", language: "Spanish", location: "Main Church" },
    { day: "Sunday", time: "6:00 PM", language: "English", location: "Main Church" },
  ];

  const defaultConfessionTimes = [
    { day: "Saturday", time: "4:00 PM - 4:45 PM" },
    { day: "Sunday", time: "30 minutes before each Mass" },
    { day: "Weekdays", time: "By appointment" },
  ];

  const defaultHolyDays = [
    { title: "Christmas Day", date: "December 25", time: "9:00 AM, 11:00 AM" },
    { title: "New Year's Day", date: "January 1", time: "10:00 AM" },
    { title: "Ash Wednesday", date: "Varies", time: "7:00 AM, 12:00 PM, 7:00 PM" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="relative bg-gradient-to-r from-church-burgundy to-church-gold text-white py-16">
          <div className="container-custom mx-auto px-4">
            <SectionTitle 
              title={massSchedule?.title || "Mass Schedule"}
              subtitle={massSchedule?.subtitle || "Join us for worship and celebration"}
              align="center"
              className="text-white"
            />
          </div>
        </div>

        <div className="container-custom mx-auto px-4 py-16">
          {/* Hero Image */}
          {massSchedule?.heroImage && (
            <div className="mb-16 text-center">
              <SanityImage
                image={massSchedule.heroImage}
                alt="Mass Schedule"
                className="rounded-lg shadow-lg mx-auto max-w-4xl"
              />
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Weekend Masses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-church-burgundy" />
                  Weekend Masses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(massSchedule?.weekendMasses || defaultWeekendMasses).map((mass, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-church-burgundy">{mass.day}</p>
                        <p className="text-sm text-gray-600">{mass.language}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{mass.time}</p>
                        <p className="text-sm text-gray-600">{mass.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekday Masses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-church-burgundy" />
                  Weekday Masses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(massSchedule?.weekdayMasses || defaultWeekdayMasses).map((mass, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-church-burgundy">{mass.day}</p>
                        <p className="text-sm text-gray-600">{mass.language}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{mass.time}</p>
                        <p className="text-sm text-gray-600">{mass.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Confession Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-church-burgundy" />
                  Confession Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(massSchedule?.confessionTimes || defaultConfessionTimes).map((confession, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-church-burgundy">{confession.day}</p>
                      <p className="font-semibold">{confession.time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-church-burgundy/10 rounded-lg">
                  <p className="text-sm text-church-burgundy font-medium">
                    Private confessions are always available by appointment. 
                    Please call the parish office to schedule.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Holy Days */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-church-burgundy" />
                  Holy Days of Obligation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(massSchedule?.holyDays || defaultHolyDays).map((holyDay, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-church-burgundy">{holyDay.title}</p>
                      <p className="text-sm text-gray-600">{holyDay.date}</p>
                      <p className="font-semibold mt-1">{holyDay.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          {massSchedule?.additionalInfo && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{massSchedule.additionalInfo}</p>
              </CardContent>
            </Card>
          )}

          {/* General Information */}
          <Card className="mt-8 bg-gradient-to-r from-church-burgundy/5 to-church-gold/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-church-burgundy text-center mb-6">
                Important Notes
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-church-burgundy mb-2">Preparation</h3>
                  <p className="text-sm">
                    Please arrive 10-15 minutes early for Mass to allow time for prayer and preparation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-church-burgundy mb-2">Special Masses</h3>
                  <p className="text-sm">
                    Schedule changes for holidays and special occasions will be announced in advance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-church-burgundy mb-2">Accessibility</h3>
                  <p className="text-sm">
                    Our church is fully accessible. Assistive listening devices are available upon request.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-church-burgundy mb-2">Contact</h3>
                  <p className="text-sm">
                    For questions about Mass times or to request a private Mass, please contact the parish office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MassSchedule;