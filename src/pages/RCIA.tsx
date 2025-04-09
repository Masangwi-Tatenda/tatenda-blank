
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Clock, Users, UserRound, CheckCircle2, MapPin, Lightbulb, GraduationCap, Library } from 'lucide-react';

const RCIA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Rite of Christian Initiation for Adults (RCIA)"
            subtitle="The journey to full communion with the Catholic Church"
          />

          <div className="max-w-4xl mx-auto mt-8">
            {/* Introduction Section */}
            <Card className="mb-8 border-church-burgundy/10 bg-church-light-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 hidden md:block">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      <GraduationCap className="h-16 w-16 text-church-burgundy" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-church-burgundy mb-3">What is RCIA?</h2>
                    <p className="text-gray-700 mb-4">
                      The Rite of Christian Initiation for Adults (RCIA) is the process through which adults are introduced to the Catholic faith and way of life. It's a journey that includes prayer, study, reflection, faith sharing, and participation in parish life.
                    </p>
                    <p className="text-gray-700">
                      RCIA is designed for those who are not baptized, those baptized in other Christian traditions who wish to become Catholic, and baptized Catholics who have not completed their sacraments of initiation (Confirmation and Eucharist).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RCIA Journey Stages */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">The RCIA Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-church-burgundy/10 rounded-full flex items-center justify-center mb-2">
                    <UserRound className="h-6 w-6 text-church-burgundy" />
                  </div>
                  <CardTitle className="text-lg text-church-burgundy">Period of Inquiry</CardTitle>
                  <CardDescription>Getting to know the Catholic Church</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    During this first stage, inquirers have the opportunity to ask questions about the Catholic faith, share their own faith journeys, and learn about basic Catholic beliefs and practices. This is an informal time with no commitment required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-church-burgundy/10 rounded-full flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-church-burgundy" />
                  </div>
                  <CardTitle className="text-lg text-church-burgundy">Catechumenate</CardTitle>
                  <CardDescription>Learning and formation in the faith</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    This period involves more formal catechesis (teaching) on Catholic doctrine, morals, prayer, and worship. Participants reflect on the Scriptures, participate in parish activities, and develop their prayer life. This stage typically lasts from several months to a year.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-church-burgundy/10 rounded-full flex items-center justify-center mb-2">
                    <Library className="h-6 w-6 text-church-burgundy" />
                  </div>
                  <CardTitle className="text-lg text-church-burgundy">Purification & Enlightenment</CardTitle>
                  <CardDescription>Preparing for the sacraments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    This more intense preparation period typically coincides with Lent. It's a time of prayer, fasting, and spiritual preparation for receiving the sacraments. Special rites, such as the Scrutinies, help the elect (those preparing for Baptism) to examine their lives in light of the Gospel.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-church-burgundy/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-church-burgundy/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-6 w-6 text-church-burgundy" />
                  </div>
                  <CardTitle className="text-lg text-church-burgundy">Mystagogy</CardTitle>
                  <CardDescription>Living the Catholic faith</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    After receiving the sacraments at the Easter Vigil, new Catholics enter this period of ongoing formation. They continue to deepen their understanding of the faith, participate more fully in parish life, and learn to live out their Catholic commitment in daily life.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Current RCIA Schedule */}
            <Card className="mb-8 border-church-burgundy/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-church-burgundy">
                  <Calendar className="h-5 w-5" />
                  RCIA Schedule 2024-2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b">
                    <div className="font-medium text-church-burgundy min-w-[180px]">Information Sessions:</div>
                    <div className="text-gray-700">
                      <p>August 18 & 25, 2024 at 9:30 AM</p>
                      <p className="text-sm text-gray-500">Parish Hall (after 8:30 AM Mass)</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b">
                    <div className="font-medium text-church-burgundy min-w-[180px]">Weekly Sessions:</div>
                    <div className="text-gray-700">
                      <p>Thursdays, 7:00 - 8:30 PM</p>
                      <p className="text-sm text-gray-500">Beginning September 12, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b">
                    <div className="font-medium text-church-burgundy min-w-[180px]">Rite of Acceptance:</div>
                    <div className="text-gray-700">
                      <p>November 24, 2024 at 10:00 AM Mass</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b">
                    <div className="font-medium text-church-burgundy min-w-[180px]">Rite of Election:</div>
                    <div className="text-gray-700">
                      <p>First Sunday of Lent, 2025</p>
                      <p className="text-sm text-gray-500">At the Cathedral</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="font-medium text-church-burgundy min-w-[180px]">Easter Vigil:</div>
                    <div className="text-gray-700">
                      <p>April 19, 2025 at 8:00 PM</p>
                      <p className="text-sm text-gray-500">Reception of Sacraments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t px-6 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-church-burgundy" />
                    <span>All weekly sessions held in the Parish Hall</span>
                  </div>
                  <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                    Download Complete Schedule (PDF)
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Frequently Asked Questions</h2>
            <Card className="mb-8 border-church-burgundy/10">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-church-burgundy">
                      Who is RCIA for?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      RCIA is for adults (usually 18+) who:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Have never been baptized and are interested in becoming Catholic</li>
                        <li>Were baptized in another Christian tradition and wish to become Catholic</li>
                        <li>Were baptized Catholic but have not received Confirmation and/or First Communion</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-church-burgundy">
                      How long does the RCIA process take?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      The RCIA process typically runs from fall through spring, culminating with reception of the sacraments at the Easter Vigil. However, everyone's journey is different. Some may need more time, while others who are already baptized Christians may proceed differently. The process is meant to be flexible to meet individual needs.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-church-burgundy">
                      What if I'm not sure about becoming Catholic?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      That's completely fine! The Period of Inquiry is specifically designed for asking questions and exploring the faith without any commitment. Many people attend RCIA sessions for months before deciding whether to continue the process. There is no obligation to become Catholic.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-church-burgundy">
                      What if I've been away from the Church for many years?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Welcome back! RCIA can be a wonderful refresher for Catholics who have been away from the Church. Depending on your situation, you might participate in all or part of the RCIA process, or we might recommend a different program. Please speak with our RCIA coordinator about your specific circumstances.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-church-burgundy">
                      Do I need a sponsor?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Yes, each RCIA participant needs a sponsor who is a practicing Catholic in good standing. Your sponsor will accompany you to sessions, answer questions, and support you on your faith journey. If you don't know anyone who can serve as your sponsor, our parish will help match you with one.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Team and Contact Info */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">RCIA Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-church-burgundy/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <img 
                        src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                        alt="Fr. Thomas Matonga" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-church-burgundy">Fr. Thomas Matonga</h3>
                    <p className="text-church-gold">RCIA Director</p>
                    <p className="text-gray-700 mt-2">
                      Fr. Thomas oversees the RCIA program and provides spiritual guidance throughout the journey.
                    </p>
                    <Button variant="link" className="text-church-burgundy mt-2">
                      Email: frthomas@mushwebetania.org
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-church-burgundy/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <img 
                        src="https://source.unsplash.com/photo-1582562124811-c09040d0a901" 
                        alt="Mrs. Grace Mutema" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-church-burgundy">Mrs. Grace Mutema</h3>
                    <p className="text-church-gold">RCIA Coordinator</p>
                    <p className="text-gray-700 mt-2">
                      Grace coordinates weekly sessions and serves as the main contact for participants and sponsors.
                    </p>
                    <Button variant="link" className="text-church-burgundy mt-2">
                      Email: grace.rcia@mushwebetania.org
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration CTA */}
            <Card className="bg-church-burgundy text-white mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Lightbulb className="h-16 w-16 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Interested in Beginning Your Journey?</h2>
                  <p className="mb-6 max-w-2xl">
                    We invite you to attend one of our upcoming information sessions or contact us directly. There's no obligation to continue, and we're happy to answer any questions you might have.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-transparent border-white hover:bg-white/20"
                    >
                      Register for RCIA
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">RCIA Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <Card className="bg-gray-50 border-church-burgundy/10">
                <CardContent className="p-6">
                  <blockquote className="italic text-gray-700 mb-4">
                    "RCIA changed my life. The journey wasn't always easy, but the support from the team and my sponsor made all the difference. I finally feel like I've found my spiritual home."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-church-burgundy/20 flex items-center justify-center mr-3">
                      <span className="text-church-burgundy font-bold">MT</span>
                    </div>
                    <div>
                      <p className="font-semibold text-church-burgundy">Maria T.</p>
                      <p className="text-xs text-gray-500">Received sacraments Easter 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-church-burgundy/10">
                <CardContent className="p-6">
                  <blockquote className="italic text-gray-700 mb-4">
                    "After years of attending Mass with my Catholic wife, I decided to explore the faith more deeply through RCIA. The process helped me understand not just what Catholics believe, but why. I'm grateful for this welcoming community that helped me on my journey."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-church-burgundy/20 flex items-center justify-center mr-3">
                      <span className="text-church-burgundy font-bold">JM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-church-burgundy">James M.</p>
                      <p className="text-xs text-gray-500">Received sacraments Easter 2024</p>
                    </div>
                  </div>
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

export default RCIA;
