
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Church, HeartHandshake, Users, Phone, FileText, Mail, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from '@/components/common/Button';

const Vocations = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1565073624497-7144245abc66")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Vocations</h1>
                <p className="text-xl text-white/90">Discerning God's call in your life</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Church className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Called by God</h2>
              <p className="text-lg text-gray-700 mb-6">
                Every baptized Christian has a vocation—a call from God to live out their faith in a specific way. The Catholic Church recognizes various vocations, including priesthood, religious life, consecrated single life, and marriage.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Discerning one's vocation is a journey of prayer, reflection, and seeking guidance from the Holy Spirit. It involves discovering how God is calling you to use your unique gifts to serve Him and His people.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  href="#discernment-resources" 
                  variant="primary"
                >
                  Discernment Resources
                </Button>
                <Button 
                  href="#vocation-directors" 
                  variant="outline"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Contact Vocation Directors
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vocations Overview */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Types of Vocations" 
              subtitle="Different ways of living out the call to holiness"
            />
            
            <Tabs defaultValue="priesthood" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12">
                <TabsTrigger value="priesthood">Priesthood</TabsTrigger>
                <TabsTrigger value="religious">Religious Life</TabsTrigger>
                <TabsTrigger value="diaconate">Diaconate</TabsTrigger>
                <TabsTrigger value="marriage">Marriage</TabsTrigger>
              </TabsList>
              
              {/* Priesthood Tab */}
              <TabsContent value="priesthood">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
                        alt="Catholic Priest" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">The Priesthood</h3>
                    <p className="text-gray-700 mb-4">
                      Catholic priests are ordained men who serve the Church by celebrating the sacraments, preaching the Gospel, and shepherding the faithful. Through the Sacrament of Holy Orders, priests act in the person of Christ (in persona Christi) and serve as spiritual fathers to their communities.
                    </p>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Diocesan Priesthood</h4>
                        <p className="text-gray-700">
                          Diocesan priests typically serve in parishes within a specific diocese under the authority of the local bishop. They promise obedience to their bishop and commit to celibacy, focusing their lives on serving the needs of their parish community.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Religious Priesthood</h4>
                        <p className="text-gray-700">
                          Religious priests belong to specific orders or congregations (like Franciscans, Dominicans, or Jesuits) and live according to the charism and rule of their community. In addition to the priesthood, they profess vows of poverty, chastity, and obedience.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Formation Process</h4>
                        <p className="text-gray-700">
                          The journey to priesthood typically involves several years of formation, including studies in philosophy and theology, spiritual formation, human development, and pastoral experience. This usually takes place in a seminary, where men discern and prepare for priestly ministry.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-church-burgundy">Signs of a Priestly Vocation May Include:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>A desire to celebrate the sacraments and lead others to Christ</li>
                        <li>A heart for service and pastoral care</li>
                        <li>The ability to listen and accompany others in their faith journey</li>
                        <li>A love for the Church and its teachings</li>
                        <li>A sense of being called to spiritual fatherhood</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Religious Life Tab */}
              <TabsContent value="religious">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0"
                        alt="Religious Sisters" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">Religious Life</h3>
                    <p className="text-gray-700 mb-4">
                      Men and women in religious life commit themselves to following Christ through the vows of poverty, chastity, and obedience. They live in community with others who share their charism—the particular gift or focus that defines their order's mission and spirituality.
                    </p>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Sisters & Nuns</h4>
                        <p className="text-gray-700">
                          Women religious may be either sisters (who typically engage in active ministry in the world) or nuns (who usually live more contemplative, cloistered lives focused on prayer). Both serve the Church in vital ways, whether through education, healthcare, social services, or contemplative prayer.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Brothers</h4>
                        <p className="text-gray-700">
                          Religious brothers are men who take vows and live in community but are not ordained as priests. They serve in various ministries according to their order's charism, often in education, healthcare, or social services.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Active vs. Contemplative Life</h4>
                        <p className="text-gray-700">
                          Religious communities may be primarily active (focused on service in the world), contemplative (dedicated to prayer and reflection), or a mixture of both. Each type of community offers a unique way to live out the evangelical counsels.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-church-burgundy">Signs of a Religious Vocation May Include:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>A desire for community life and shared prayer</li>
                        <li>Attraction to a particular order's charism or mission</li>
                        <li>A heart for radical witness to the Gospel</li>
                        <li>Desire to serve others according to a specific tradition</li>
                        <li>Feeling called to a life of simplicity and total dedication to God</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Diaconate Tab */}
              <TabsContent value="diaconate">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3"
                        alt="Deacon" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">The Diaconate</h3>
                    <p className="text-gray-700 mb-4">
                      Deacons are ordained ministers who serve the Church in the ministry of liturgy, word, and charity. The word "deacon" comes from the Greek word diakonos, meaning "servant," reflecting their special call to service.
                    </p>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Permanent Diaconate</h4>
                        <p className="text-gray-700">
                          Permanent deacons are men (often married) who are called to serve as ordained ministers without becoming priests. They assist at liturgies, proclaim and preach the Gospel, perform baptisms, witness marriages, conduct funeral services, and engage in various ministries of charity.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Transitional Diaconate</h4>
                        <p className="text-gray-700">
                          Transitional deacons are men who are in the process of becoming priests. They serve as deacons for a period (typically one year) before priestly ordination, gaining experience in ministry.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Formation Process</h4>
                        <p className="text-gray-700">
                          Formation for the permanent diaconate typically takes several years and includes theological study, spiritual formation, and pastoral training. For married men, the process also involves the support and participation of their wives.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-church-burgundy">Signs of a Diaconal Vocation May Include:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>A heart for service, especially to those in need</li>
                        <li>A desire to proclaim and teach the Gospel</li>
                        <li>Aptitude for liturgical ministry</li>
                        <li>Leadership in charitable works</li>
                        <li>For married men, support from their spouse</li>
                        <li>A balanced life of prayer, family (if married), work, and ministry</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Marriage Tab */}
              <TabsContent value="marriage">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1519741347686-c1e331fcb4d8"
                        alt="Catholic Marriage" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">Marriage</h3>
                    <p className="text-gray-700 mb-4">
                      Marriage is a covenant by which a man and a woman establish a partnership for the whole of life. In the Catholic Church, marriage is a sacrament—a visible sign of God's grace—that reflects Christ's faithful love for the Church.
                    </p>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Sacramental Nature</h4>
                        <p className="text-gray-700">
                          Catholic marriage is characterized by unity, indissolubility, and openness to children. Spouses commit to a lifelong, exclusive relationship in which they help each other grow in holiness and cooperate with God in the creation and education of children.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Domestic Church</h4>
                        <p className="text-gray-700">
                          The family formed through marriage is often called the "domestic church"—the first place where children experience faith, prayer, and Christian values. Parents are the primary educators of their children in the faith.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-church-burgundy mb-2">Preparation Process</h4>
                        <p className="text-gray-700">
                          Preparation for marriage in the Catholic Church involves discernment, education about the sacrament, discussions about important aspects of married life, and practical preparation for the wedding ceremony itself.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-church-burgundy">Signs of a Vocation to Marriage May Include:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Desire to form a lifelong, faithful partnership with another person</li>
                        <li>Openness to children and family life</li>
                        <li>Willingness to grow together in faith</li>
                        <li>Capacity for selfless love and sacrifice</li>
                        <li>Complementary values and life goals with a potential spouse</li>
                        <li>Sense of God's presence in the relationship</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Discernment Resources */}
        <section id="discernment-resources" className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Discernment Resources" 
              subtitle="Tools and guidance for hearing God's call"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Prayer Resources */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-church-burgundy to-red-700 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Prayer Resources</h3>
                  <p className="text-gray-700 mb-4">
                    Discernment begins with prayer. These resources will help you develop a prayer life that opens you to hearing God's voice.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Prayers for Vocational Discernment</li>
                    <li>Scripture Passages for Reflection</li>
                    <li>Guided Meditations</li>
                    <li>Examination of Conscience for Discernment</li>
                  </ul>
                  <a 
                    href="#"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    <FileText className="mr-1 w-4 h-4" /> Download Prayer Guide
                  </a>
                </CardContent>
              </Card>
              
              {/* Discernment Steps */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Discernment Steps</h3>
                  <p className="text-gray-700 mb-4">
                    Practical guidance for the process of discerning your vocation, based on the wisdom of Catholic tradition.
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                    <li>Establish a regular prayer life</li>
                    <li>Receive the sacraments frequently</li>
                    <li>Find a spiritual director</li>
                    <li>Learn about different vocations</li>
                    <li>Attend discernment events</li>
                    <li>Listen for God's voice in daily life</li>
                  </ol>
                  <a 
                    href="/vocations/discernment-guide"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Detailed Discernment Guide <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Recommended Reading */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-amber-700 to-amber-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Recommended Reading</h3>
                  <p className="text-gray-700 mb-4">
                    Books and articles that can help you understand vocational discernment and different paths of Catholic life.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>To Save a Thousand Souls (Fr. Brett Brannen)</li>
                    <li>And You Are Christ's (Fr. Thomas Dubay)</li>
                    <li>Discerning the Will of God (Fr. Timothy Gallagher)</li>
                    <li>The Meaning of Vocation (St. John Paul II)</li>
                    <li>Three to Get Married (Fulton Sheen)</li>
                  </ul>
                  <a 
                    href="/vocations/reading-list"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Complete Reading List <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Upcoming Discernment Events" 
              subtitle="Opportunities to explore different vocations"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Retreat */}
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <div className="bg-church-burgundy text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Vocations Retreat</h3>
                      <Calendar className="w-5 h-5" />
                    </div>
                    <p className="text-white/80 text-sm">October 15-17, 2023</p>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">
                      A weekend retreat for young men (ages 18-35) considering the priesthood. Includes prayer, talks, Q&A with seminarians, and time for reflection.
                    </p>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-church-burgundy mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Location</h4>
                        <p className="text-gray-600">St. Joseph's Seminary, Harare</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="/vocations/events/retreat"
                        className="inline-flex items-center text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Register <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Discernment Group */}
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <div className="bg-church-navy text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Women's Discernment Group</h3>
                      <Calendar className="w-5 h-5" />
                    </div>
                    <p className="text-white/80 text-sm">Monthly, First Saturday</p>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">
                      A monthly gathering for women interested in exploring religious life. Join sisters from various orders for prayer, discussion, and fellowship.
                    </p>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-church-burgundy mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Location</h4>
                        <p className="text-gray-600">Sisters of Mercy Convent, Bulawayo</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="/vocations/events/womens-group"
                        className="inline-flex items-center text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Come and See */}
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <div className="bg-church-gold text-church-navy p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Come and See Weekend</h3>
                      <Calendar className="w-5 h-5" />
                    </div>
                    <p className="text-church-navy/80 text-sm">November 4-5, 2023</p>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">
                      A weekend experience for men and women to visit a religious community, participate in their life of prayer and ministry, and learn about their particular charism.
                    </p>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-church-burgundy mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Location</h4>
                        <p className="text-gray-600">Franciscan Monastery, Mutare</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="/vocations/events/come-and-see"
                        className="inline-flex items-center text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Register <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button
                href="/vocations/events"
                variant="outline"
                className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
              >
                View All Upcoming Events
              </Button>
            </div>
          </div>
        </section>
        
        {/* Vocation Directors */}
        <section id="vocation-directors" className="py-16 bg-church-burgundy text-white">
          <div className="container-custom">
            <SectionTitle 
              title="Contact Vocation Directors" 
              subtitle="Get personalized guidance on your discernment journey"
              className="text-white"
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Diocesan Vocations */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Church className="w-6 h-6 text-church-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diocesan Vocations</h3>
                <p className="text-white/80 mb-4">
                  Contact your diocesan vocations director to explore priesthood or the permanent diaconate within your local diocese.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Fr. John Doe</h4>
                      <p className="text-white/80">Vocations Director, Archdiocese of Harare</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-white/80">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/80">vocations@harare.org</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="mailto:vocations@harare.org"
                  variant="glass"
                  className="w-full bg-white/20 hover:bg-white/30 border-white/10"
                >
                  Contact Now
                </Button>
              </div>
              
              {/* Religious Orders */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6 text-church-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Religious Orders</h3>
                <p className="text-white/80 mb-4">
                  Interested in a particular religious community? Contact their vocation director to learn more and arrange a visit.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Sr. Jane Doe</h4>
                      <p className="text-white/80">Vocations Director, Sisters of Mercy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-white/80">(123) 456-7891</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/80">vocations@sistersofmercy.org</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="/vocations/religious-orders"
                  variant="glass"
                  className="w-full bg-white/20 hover:bg-white/30 border-white/10"
                >
                  View Religious Communities
                </Button>
              </div>
              
              {/* Parish Support */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-church-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Parish Support</h3>
                <p className="text-white/80 mb-4">
                  Our parish offers support for those discerning any vocation, including marriage and single life. Speak with our vocations committee.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Mr. & Mrs. Smith</h4>
                      <p className="text-white/80">Parish Vocations Committee</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-white/80">Tuesdays, 2:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/80">vocations@mushaiwebetania.org</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant="glass"
                  className="w-full bg-white/20 hover:bg-white/30 border-white/10"
                >
                  Contact Parish Office
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Vocation Stories" 
              subtitle="Hearing from those who have answered God's call"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Priest Testimonial */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-burgundy/90">
                    <Church className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Fr. Michael's Journey</h3>
                  <p className="text-gray-500 text-sm mb-4">Ordained 2018</p>
                  <p className="text-gray-700 mb-4">
                    "I first felt the call to priesthood during adoration in college. What followed was years of discernment, with both certainty and doubt. Seminary helped me confirm this was truly God's call for me."
                  </p>
                  <a 
                    href="/vocations/stories/fr-michael"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Sister Testimonial */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-navy/90">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Sr. Elizabeth's Journey</h3>
                  <p className="text-gray-500 text-sm mb-4">Final Vows 2020</p>
                  <p className="text-gray-700 mb-4">
                    "I was a teacher before entering religious life. Working with the sisters at my school, I began to feel drawn to their joy and sense of purpose. After several 'Come and See' weekends, I knew this was home."
                  </p>
                  <a 
                    href="/vocations/stories/sr-elizabeth"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Married Couple Testimonial */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-gold/90">
                    <HeartHandshake className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">David & Sarah's Journey</h3>
                  <p className="text-gray-500 text-sm mb-4">Married 2019</p>
                  <p className="text-gray-700 mb-4">
                    "We met in a parish young adult group. As our relationship grew, we prayed together about whether marriage was our vocation. Pre-Cana helped us see how God was calling us to holiness together."
                  </p>
                  <a 
                    href="/vocations/stories/david-sarah"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button
                href="/vocations/stories"
                variant="primary"
              >
                More Vocation Stories
              </Button>
            </div>
          </div>
        </section>
        
        {/* Prayer for Vocations */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-church-burgundy mb-6">Prayer for Vocations</h2>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <p className="text-gray-700 italic">
                  O God, who wills not the death of a sinner but rather that he be converted and live, grant we beseech you, through the intercession of the Blessed Mary ever Virgin, Saint Joseph, her spouse, St. Junipero Serra, and all the saints, an increase of laborers for your Church, fellow laborers with Christ to spend and consume themselves for souls through the same Jesus Christ, Your Son, Who lives and reigns with You, in the unity of the Holy Spirit, God forever and ever. Amen.
                </p>
              </div>
              <p className="text-gray-700">
                Please join us in praying for vocations to the priesthood, religious life, diaconate, and marriage. The Church needs holy men and women in all vocations to carry on Christ's mission in the world.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vocations;
