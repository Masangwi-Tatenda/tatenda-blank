
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, Users, CheckCircle, BookMarked, FileText, Download, Lightbulb, Bookmark } from 'lucide-react';

const BibleStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Bible Study Resources"
            subtitle="Deepen your understanding of Sacred Scripture through guided study"
            className="text-center mb-8"
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-church-burgundy/10 to-church-gold/10 p-8 rounded-lg mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="shrink-0">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <BookOpen className="h-12 w-12 text-church-burgundy" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-church-burgundy">Why Study the Bible?</h2>
                  <p className="text-gray-700 mb-4">
                    "Ignorance of Scripture is ignorance of Christ." — St. Jerome
                  </p>
                  <p className="text-gray-700">
                    The Bible is God's Word—a living message revealing His plan for humanity. Through Scripture, God speaks to us, guiding our lives and drawing us closer to Him. Regular Bible study helps us to know God better, understand our faith more deeply, and apply biblical teachings to our daily lives.
                  </p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="plans" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="plans" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Study Plans</span>
                </TabsTrigger>
                <TabsTrigger value="groups" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Study Groups</span>
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4" />
                  <span>Resources</span>
                </TabsTrigger>
              </TabsList>

              {/* Bible Study Plans */}
              <TabsContent value="plans">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Bible Reading Plans</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookMarked className="h-5 w-5 text-church-burgundy" />
                          30-Day Gospel Journey
                        </CardTitle>
                        <CardDescription>Explore the life of Christ through the four Gospels</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This 30-day reading plan takes you through key passages in Matthew, Mark, Luke, and John, providing a comprehensive overview of Jesus's life, ministry, teachings, death, and resurrection.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          <li>Duration: 30 days</li>
                          <li>Time commitment: 15-20 minutes daily</li>
                          <li>Includes reflection questions</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download Plan</span>
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookMarked className="h-5 w-5 text-church-burgundy" />
                          Psalms & Wisdom
                        </CardTitle>
                        <CardDescription>Find spiritual guidance in the Wisdom Literature</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          Dive into the beautiful poetry of the Psalms and the practical wisdom of Proverbs, Ecclesiastes, and Wisdom. This plan helps you apply biblical wisdom to everyday situations.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          <li>Duration: 45 days</li>
                          <li>Time commitment: 10-15 minutes daily</li>
                          <li>Includes journal prompts</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download Plan</span>
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookMarked className="h-5 w-5 text-church-burgundy" />
                          Letters of St. Paul
                        </CardTitle>
                        <CardDescription>Study the theological foundations of our faith</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          Explore St. Paul's epistles, which form the backbone of Christian theology. This plan covers themes like justification, sanctification, the Church, and Christian living.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          <li>Duration: 60 days</li>
                          <li>Time commitment: 20-25 minutes daily</li>
                          <li>Includes supplementary explanations</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download Plan</span>
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookMarked className="h-5 w-5 text-church-burgundy" />
                          Salvation History
                        </CardTitle>
                        <CardDescription>Trace God's plan from Creation to Christ</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This comprehensive plan follows God's plan of salvation through the Old and New Testaments, highlighting covenants, key figures, and how it all points to Christ.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          <li>Duration: 90 days</li>
                          <li>Time commitment: 15-20 minutes daily</li>
                          <li>Includes historical context</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download Plan</span>
                        </button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-church-burgundy mb-4">Liturgical Reading Plan</h3>
                    <Card className="border-church-burgundy/10">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                          <div className="shrink-0 bg-church-burgundy/10 p-3 rounded-full">
                            <Calendar className="h-8 w-8 text-church-burgundy" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-2 text-church-burgundy">Follow the Church's Liturgical Calendar</h4>
                            <p className="text-gray-700 mb-4">
                              One of the best ways to study the Bible is to follow the daily and Sunday readings used in the Mass. This approach allows you to journey through Scripture in harmony with the Church's liturgical seasons.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Link to="/daily-readings" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors text-center">
                                Today's Readings
                              </Link>
                              <Link to="/liturgical-calendar" className="inline-block px-4 py-2 border border-church-burgundy text-church-burgundy rounded-md hover:bg-church-burgundy/10 transition-colors text-center">
                                Liturgical Calendar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Bible Study Groups */}
              <TabsContent value="groups">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Parish Bible Study Groups</h3>
                  
                  <Card className="border-church-burgundy/10 mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="shrink-0 bg-church-burgundy/10 p-3 rounded-full">
                          <Users className="h-8 w-8 text-church-burgundy" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2 text-church-burgundy">Why Join a Bible Study Group?</h4>
                          <p className="text-gray-700 mb-4">
                            Studying Scripture in community enhances our understanding through shared insights and discussion. It also provides accountability, encouragement, and the opportunity to build meaningful relationships with fellow parishioners.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle>Sunday Gospel Study</CardTitle>
                        <CardDescription>Prepare for the upcoming Sunday readings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This group studies and discusses the upcoming Sunday readings, exploring their context, meaning, and application to daily life.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3 text-sm">
                          <li>When: Wednesdays, 7:00 - 8:30 PM</li>
                          <li>Where: Parish Hall, Room 2</li>
                          <li>Leader: Mr. Thomas Makope</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="text-church-burgundy hover:text-church-gold transition-colors">
                          Register to Join
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle>Women's Bible Study</CardTitle>
                        <CardDescription>Faith formation for women of all ages</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This group focuses on women in Scripture and topics particularly relevant to women's spiritual journeys. All women are welcome regardless of Bible knowledge.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3 text-sm">
                          <li>When: Tuesdays, 9:30 - 11:00 AM</li>
                          <li>Where: Parish Conference Room</li>
                          <li>Leader: Mrs. Grace Mutema</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="text-church-burgundy hover:text-church-gold transition-colors">
                          Register to Join
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle>Young Adult Scripture Study</CardTitle>
                        <CardDescription>For parishioners ages 18-35</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This group explores Scripture through the lens of young adult Catholic life, addressing questions about faith, vocation, relationships, and more.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3 text-sm">
                          <li>When: Thursdays, 7:00 - 8:30 PM</li>
                          <li>Where: Parish Youth Center</li>
                          <li>Leader: Mr. Farai Madziva</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="text-church-burgundy hover:text-church-gold transition-colors">
                          Register to Join
                        </button>
                      </CardFooter>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle>Family Bible Adventure</CardTitle>
                        <CardDescription>Scripture study for families with children</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          This family-friendly group makes Scripture accessible to all ages with activities, discussions, and prayers that parents and children can participate in together.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3 text-sm">
                          <li>When: Sundays, 4:00 - 5:30 PM</li>
                          <li>Where: Parish Hall, Room 1</li>
                          <li>Leaders: The Moyo Family</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="text-church-burgundy hover:text-church-gold transition-colors">
                          Register to Join
                        </button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="mt-8 text-center">
                    <Link to="/contact" className="inline-block px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                      Start Your Own Bible Study Group
                    </Link>
                    <p className="mt-3 text-sm text-gray-600">
                      The parish offers resources and support for those interested in starting a new Bible study group.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Bible Study Resources */}
              <TabsContent value="resources">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Recommended Resources</h3>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-church-burgundy" />
                          Bible Editions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">The New American Bible</h4>
                            <p className="text-sm text-gray-700">The official English translation approved for use in Catholic liturgy in the United States.</p>
                          </li>
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">The Revised Standard Version - Catholic Edition</h4>
                            <p className="text-sm text-gray-700">Known for its accuracy and beautiful English, this translation is excellent for study.</p>
                          </li>
                          <li>
                            <h4 className="font-bold text-gray-800">The Jerusalem Bible</h4>
                            <p className="text-sm text-gray-700">Features extensive footnotes and introductions, ideal for deeper study.</p>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-church-burgundy" />
                          Study Guides
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">The Great Adventure Bible Timeline</h4>
                            <p className="text-sm text-gray-700">A color-coded system that helps you understand the narrative flow of salvation history.</p>
                          </li>
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">Ignatius Catholic Study Bible</h4>
                            <p className="text-sm text-gray-700">Extensive commentary and study notes based on Catholic teaching.</p>
                          </li>
                          <li>
                            <h4 className="font-bold text-gray-800">Little Rock Scripture Study</h4>
                            <p className="text-sm text-gray-700">Accessible guides for individual or group study, with questions for reflection.</p>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-church-burgundy" />
                          Study Methods
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">Lectio Divina</h4>
                            <p className="text-sm text-gray-700">An ancient practice of scriptural reading, meditation, prayer, and contemplation.</p>
                            <a href="#" className="text-xs text-church-burgundy hover:text-church-gold">Learn how →</a>
                          </li>
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">The SOAP Method</h4>
                            <p className="text-sm text-gray-700">Scripture, Observation, Application, Prayer—a simple framework for Bible study.</p>
                            <a href="#" className="text-xs text-church-burgundy hover:text-church-gold">Learn how →</a>
                          </li>
                          <li>
                            <h4 className="font-bold text-gray-800">The Four Senses of Scripture</h4>
                            <p className="text-sm text-gray-700">The Catholic approach to interpreting Scripture: literal, allegorical, moral, and anagogical.</p>
                            <a href="#" className="text-xs text-church-burgundy hover:text-church-gold">Learn how →</a>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-church-burgundy/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Bookmark className="h-5 w-5 text-church-burgundy" />
                          Online Resources
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">USCCB Bible</h4>
                            <p className="text-sm text-gray-700">The United States Conference of Catholic Bishops offers the complete Bible online with study notes.</p>
                            <a href="https://bible.usccb.org/" target="_blank" rel="noreferrer" className="text-xs text-church-burgundy hover:text-church-gold">Visit →</a>
                          </li>
                          <li className="border-b border-gray-100 pb-3">
                            <h4 className="font-bold text-gray-800">Catholic Answers</h4>
                            <p className="text-sm text-gray-700">Offers articles explaining difficult passages and Catholic interpretations of Scripture.</p>
                            <a href="https://www.catholic.com/" target="_blank" rel="noreferrer" className="text-xs text-church-burgundy hover:text-church-gold">Visit →</a>
                          </li>
                          <li>
                            <h4 className="font-bold text-gray-800">Formed.org</h4>
                            <p className="text-sm text-gray-700">Provides Catholic video-based Bible studies and other faith formation resources.</p>
                            <a href="https://formed.org/" target="_blank" rel="noreferrer" className="text-xs text-church-burgundy hover:text-church-gold">Visit →</a>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <Card className="border-church-burgundy/10 bg-church-light-gold/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                          <div className="shrink-0 bg-church-gold/20 p-3 rounded-full">
                            <CheckCircle className="h-8 w-8 text-church-burgundy" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-2 text-church-burgundy">Parish Library</h4>
                            <p className="text-gray-700 mb-4">
                              Did you know our parish has a library with a wide selection of Catholic books, including Bible commentaries, study guides, and spiritual reading? Visit the library after Sunday Mass or during office hours.
                            </p>
                            <p className="text-sm text-gray-600">
                              Location: Parish Center, Room 103<br />
                              Hours: Sundays 10:30 AM - 1:00 PM, Weekdays during office hours
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col md:flex-row gap-6 items-center bg-church-burgundy/5 rounded-lg p-6 mb-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <BookMarked className="h-16 w-16 text-church-burgundy" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-church-burgundy">Need Help Getting Started?</h3>
                <p className="text-gray-700 mb-4">
                  Whether you're new to Bible study or looking to deepen your existing practice, our parish team is here to help. We can recommend resources tailored to your interests, connect you with a study group, or answer any questions you may have.
                </p>
                <Link to="/contact" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                  Contact Us for Guidance
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link to="/prayers-novenas" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                <span className="mr-2">←</span> Explore Catholic Prayers & Novenas
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BibleStudy;
