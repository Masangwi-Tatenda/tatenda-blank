
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { GraduationCap, BookOpen, Users, Calendar, FileText, ArrowRight, School, Building, Bookmark } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Button from '@/components/common/Button';

const EducationFormation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example data for schools - in a real app, this would come from a database
  const catholicSchools = [
    {
      id: 1,
      name: "St. Anthony's Catholic School",
      location: "Harare",
      level: "Primary and Secondary",
      website: "https://example.com/stanthonys"
    },
    {
      id: 2,
      name: "St. Mary's Catholic Academy",
      location: "Bulawayo",
      level: "Primary",
      website: "https://example.com/stmarys"
    },
    {
      id: 3,
      name: "Holy Cross Catholic School",
      location: "Mutare",
      level: "Secondary",
      website: "https://example.com/holycross"
    },
    {
      id: 4,
      name: "Blessed Sacrament Catholic School",
      location: "Gweru",
      level: "Primary and Secondary",
      website: "https://example.com/blessedsacrament"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1603164221980-7c5a247c5777")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Education & Formation</h1>
                <p className="text-xl text-white/90">Growing in knowledge and understanding of our Catholic faith</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Faith Formation Programs</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Musha WeBetania Parish, we are committed to providing comprehensive faith formation for Catholics of all ages. Our programs are designed to deepen understanding of Catholic teaching, foster spiritual growth, and equip individuals to live out their faith in daily life.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a lifelong Catholic seeking to deepen your knowledge, a parent looking for resources for your children, or someone exploring the Catholic faith for the first time, we have programs and resources to support your journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* RCIA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-church-burgundy text-white px-4 py-2 rounded-md mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-3xl font-bold text-church-burgundy mb-4">Rite of Christian Initiation for Adults (RCIA)</h2>
                <p className="text-gray-700 mb-4">
                  The RCIA is a process for adults who are interested in learning about the Catholic faith and possibly becoming Catholic. It's designed for:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Those who have never been baptized</li>
                  <li>Those baptized in another Christian tradition who want to enter the Catholic Church</li>
                  <li>Baptized Catholics who have not received First Communion or Confirmation</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  The RCIA process typically begins in the fall and culminates at the Easter Vigil, though we welcome inquiries year-round. Sessions include teaching on Catholic doctrine, prayer, Scripture, and the sacraments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-church-burgundy mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Meeting Times</h3>
                      <p className="text-gray-600">Tuesdays, 7:00 PM - 8:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-burgundy mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Contact</h3>
                      <p className="text-gray-600">Faith Formation Office: (123) 456-7890</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant="primary"
                  >
                    Inquire About RCIA
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544286523-5fcbcad53e35"
                  alt="RCIA Session"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs for All Ages */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Faith Formation for All Ages" 
              subtitle="Programs designed to meet the needs of parishioners at every stage of life"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Children's Catechesis */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Children's Catechesis</h3>
                  <p className="text-gray-700 mb-4">
                    Religious education for children grades K-6, focusing on prayer, sacraments, Scripture, and Catholic teaching in an age-appropriate way.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Sundays, 10:30 AM - 11:45 AM</li>
                    <li>First Communion preparation</li>
                    <li>Family-centered activities</li>
                  </ul>
                  <a 
                    href="/education-formation/children"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Program Details <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Youth Ministry */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Youth Ministry</h3>
                  <p className="text-gray-700 mb-4">
                    Programs for middle and high school students, including Confirmation preparation, retreats, service projects, and social activities.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Wednesdays, 6:30 PM - 8:00 PM</li>
                    <li>Confirmation classes (grades 8-9)</li>
                    <li>Youth group for high school students</li>
                  </ul>
                  <a 
                    href="/community/youth"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Adult Faith Formation */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Adult Faith Formation</h3>
                  <p className="text-gray-700 mb-4">
                    Ongoing education for adults including Bible studies, theological discussions, and workshops on various aspects of Catholic life and teaching.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Various times throughout the week</li>
                    <li>Bible study groups</li>
                    <li>Seasonal seminars and retreats</li>
                  </ul>
                  <a 
                    href="/education-formation/adults"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    See Calendar <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Catholic Study Resources */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Catholic Study Resources" 
              subtitle="Materials to deepen your understanding of the Catholic faith"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Catechism */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <FileText className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Catechism of the Catholic Church</h3>
                <p className="text-gray-700 mb-4">
                  The Catechism provides a complete summary of what Catholics believe. Our parish offers both the complete version and a condensed compendium.
                </p>
                <div className="space-y-2 mb-4">
                  <a 
                    href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Read Online (Vatican Website)
                  </a>
                  <a 
                    href="/education-formation/catechism-study-guide"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Catechism Study Guide
                  </a>
                </div>
              </div>
              
              {/* Bible Studies */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <BookOpen className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Catholic Bible Studies</h3>
                <p className="text-gray-700 mb-4">
                  Resources for studying the Bible from a Catholic perspective, including guides on interpreting Scripture and understanding the Church's teaching.
                </p>
                <div className="space-y-2 mb-4">
                  <a 
                    href="/spiritual-growth/bible-study"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Join a Bible Study Group
                  </a>
                  <a 
                    href="/education-formation/bible-resources"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Catholic Bible Resources
                  </a>
                </div>
              </div>
              
              {/* Digital Resources */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <Bookmark className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Digital Study Resources</h3>
                <p className="text-gray-700 mb-4">
                  Online courses, videos, and apps to supplement your Catholic education, available for all ages and knowledge levels.
                </p>
                <div className="space-y-2 mb-4">
                  <a 
                    href="/education-formation/online-courses"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Free Online Courses
                  </a>
                  <a 
                    href="/education-formation/recommended-apps"
                    className="block text-church-burgundy hover:text-church-gold"
                  >
                    Recommended Catholic Apps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Catholic Schools */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Catholic Schools in Zimbabwe" 
              subtitle="Institutions providing quality education rooted in Catholic values"
            />
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-church-burgundy text-white">
                    <th className="p-4 text-left">School Name</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Level</th>
                    <th className="p-4 text-left">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {catholicSchools.map((school) => (
                    <tr key={school.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <School className="w-5 h-5 text-church-burgundy" />
                          <span className="font-medium">{school.name}</span>
                        </div>
                      </td>
                      <td className="p-4">{school.location}</td>
                      <td className="p-4">{school.level}</td>
                      <td className="p-4">
                        <a 
                          href={school.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-church-burgundy hover:text-church-gold inline-flex items-center"
                        >
                          Visit <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-church-burgundy shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">About Catholic Education</h3>
                  <p className="text-gray-700 mb-4">
                    Catholic schools in Zimbabwe are known for their academic excellence and commitment to forming students in the Catholic faith. These institutions integrate religious education into a comprehensive curriculum that prepares students for success in all areas of life.
                  </p>
                  <p className="text-gray-700">
                    For more information about Catholic education or to inquire about enrollment in a Catholic school, please contact the Catholic Education Office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact & Registration */}
        <section className="py-16 bg-church-burgundy text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Register for Programs</h2>
                <p className="text-white/90 mb-6">
                  Ready to take the next step in your faith journey? Contact our Faith Formation Office to register for any of our programs or to get more information.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Faith Formation Director</h3>
                      <p className="text-white/80">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-white/80">Monday - Friday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant="glass"
                  className="bg-white/20 hover:bg-white/30 border-white/10"
                >
                  Contact Faith Formation Office
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Upcoming Classes & Events</h3>
                <ul className="space-y-4">
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">RCIA Inquiry Session</h4>
                      <span className="text-church-gold text-sm">Sep 12</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Informational meeting for those interested in learning about the Catholic faith.
                    </p>
                  </li>
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Bible Study: Gospel of John</h4>
                      <span className="text-church-gold text-sm">Sep 15</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      New study group forming to explore the Gospel of John.
                    </p>
                  </li>
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Children's Catechesis Begins</h4>
                      <span className="text-church-gold text-sm">Sep 19</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      First day of religious education classes for children.
                    </p>
                  </li>
                  <li>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Adult Faith Workshop</h4>
                      <span className="text-church-gold text-sm">Sep 25</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      "Understanding the Mass" - A deeper look at Catholic liturgy.
                    </p>
                  </li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="/events"
                    className="inline-flex items-center text-church-gold hover:text-white transition-colors"
                  >
                    View Full Calendar <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducationFormation;
