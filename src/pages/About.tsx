import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Church, Users, Heart, Eye, Target, Award, ArrowRight, Cross, BookOpen, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { useSanity } from '@/contexts/SanityContext';
import PortableText from '@/components/common/PortableText';
import SanityImage from '@/components/common/SanityImage';
import EnhancedStaffCard from '@/components/about/EnhancedStaffCard';
import ParishOrganogram from '@/components/about/ParishOrganogram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const { aboutPage, isLoading, parishTeam } = useSanity();
  const [activeSection, setActiveSection] = useState('overview');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback data
  const fallbackData = {
    title: 'About Our Parish',
    subtitle: 'A community of faith, hope, and love serving God together',
    historyTitle: 'Our Rich History',
    historySubtitle: 'The story of Musha WeBetania Parish through the years.',
    historyContent: [
      'Founded in 1965, Musha WeBetania Parish has been serving the spiritual needs of Catholics in our community for over 50 years. What began as a small mission outpost has grown into a vibrant parish community with thousands of faithful members.',
      'Our parish was established by Bishop Joseph Smith with the help of the Franciscan missionaries who came to our area to spread the Gospel. The first church building was a simple structure that could accommodate just 100 worshippers.',
      'As our community grew throughout the 1970s and 1980s, so did our parish. In 1992, we consecrated our current church building, which stands as a testament to the faith and generosity of our parishioners.',
      'Today, Musha WeBetania Parish continues to be a spiritual home for Catholics of all backgrounds, a place where faith is nurtured, community is built, and God\'s love is shared.'
    ],
    mission: 'To build a community of faith that celebrates God\'s presence, forms disciples, and serves others in Christ\'s name.',
    missionDescription: 'We strive to be a welcoming parish where all people can encounter Jesus Christ, grow in their relationship with Him, and be formed as disciples to share the Gospel.',
    vision: 'To be a beacon of Catholic faith, known for our welcoming spirit, vibrant worship, and compassionate service.',
    visionDescription: 'We envision a parish where the sacramental life is celebrated with reverence and joy, where faith formation is a lifelong journey, and where service to those in need is a way of life.',
    joinCommunityTitle: 'Join Our Growing Community',
    joinCommunityText: 'We invite you to become part of our vibrant parish family. Whether through worship, service, or fellowship, there\'s a place for everyone at Musha WeBetania Parish.',
    joinCommunityButtonText: 'Get Involved Today',
    joinCommunityButtonLink: '/contact'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  // Use Sanity data or fallback
  const pageData = aboutPage || fallbackData;
  const heroImage = aboutPage?.heroImage ? 
    <SanityImage image={aboutPage.heroImage} alt={pageData.title} /> : 
    "https://images.unsplash.com/photo-1498889444388-e67ea62c464b";

  // Categorize parish team members
  const teamMembers = parishTeam || [];
  const categorizedTeam = {
    clergy: teamMembers.filter(m => m.category === 'clergy'),
    staff: teamMembers.filter(m => m.category === 'staff'),
    council: teamMembers.filter(m => m.category === 'council'),
    finance: teamMembers.filter(m => m.category === 'finance'),
    ministry: teamMembers.filter(m => m.category === 'ministry'),
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Church },
    { id: 'history', label: 'History', icon: BookOpen },
    { id: 'mission-vision', label: 'Mission & Vision', icon: Target },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'team', label: 'Our Team', icon: Heart },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section with Stained Glass Effect */}
        <section className="relative overflow-hidden">
          <div 
            className="h-[80vh] bg-cover bg-center relative"
            style={{ backgroundImage: typeof heroImage === 'string' ? `url("${heroImage}")` : undefined }}
          >
            {typeof heroImage !== 'string' && 
              <div className="absolute inset-0 w-full h-full">
                {heroImage}
              </div>
            }
            {/* Stained Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-church-burgundy/90 via-church-navy/80 to-church-gold/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-3xl text-center mx-auto">
                  <div className="mb-8">
                    <Cross className="w-16 h-16 text-church-gold mx-auto mb-6 drop-shadow-lg" />
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                    {pageData.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/95 mb-10 font-light drop-shadow-lg">
                    {pageData.subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      onClick={() => scrollToSection('overview')}
                      className="bg-church-gold hover:bg-church-gold/90 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all"
                    >
                      <Church className="w-6 h-6 mr-3" />
                      Discover Our Story
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('team')}
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-church-navy px-10 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all"
                    >
                      <Users className="w-6 h-6 mr-3" />
                      Meet Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-church-gold/30 rounded-full"></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
          </div>
        </section>

        {/* Floating Navigation */}
        <section className="sticky top-20 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-church-gold/20">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                    activeSection === id 
                      ? 'bg-church-burgundy text-white shadow-lg' 
                      : 'text-church-burgundy hover:bg-church-burgundy/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-gradient-to-br from-church-cream via-white to-church-cream/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <Church className="w-8 h-8 text-church-burgundy" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold text-church-burgundy mb-6">Welcome to Our Parish Family</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                For over five decades, Musha WeBetania Parish has been a cornerstone of faith in our community. 
                We are a vibrant Catholic community dedicated to worship, service, and spiritual growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <Card className="text-center p-8 bg-gradient-to-br from-church-burgundy to-church-navy text-white shadow-xl transform hover:scale-105 transition-all">
                    <CardContent className="pt-6">
                      <div className="text-5xl font-bold mb-3">50+</div>
                      <div className="text-lg font-medium">Years of Faithful Service</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-8 bg-gradient-to-br from-church-gold to-amber-500 text-white shadow-xl transform hover:scale-105 transition-all">
                    <CardContent className="pt-6">
                      <div className="text-5xl font-bold mb-3">2000+</div>
                      <div className="text-lg font-medium">Parish Family Members</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <Card className="text-center p-8 bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-xl transform hover:scale-105 transition-all">
                    <CardContent className="pt-6">
                      <div className="text-5xl font-bold mb-3">25+</div>
                      <div className="text-lg font-medium">Active Ministries</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-8 bg-gradient-to-br from-purple-600 to-indigo-500 text-white shadow-xl transform hover:scale-105 transition-all">
                    <CardContent className="pt-6">
                      <div className="text-5xl font-bold mb-3">365</div>
                      <div className="text-lg font-medium">Days of Prayer</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                  alt="Parish community" 
                  className="rounded-3xl shadow-2xl w-full h-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-church-gold/20 rounded-3xl -z-10"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 border-4 border-church-burgundy/20 rounded-3xl -z-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-2xl p-6 shadow-xl">
                  <Cross className="w-12 h-12 text-church-burgundy mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <BookOpen className="w-8 h-8 text-church-burgundy" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold text-church-burgundy mb-6">{pageData.historyTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{pageData.historySubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                {fallbackData.historyContent.map((paragraph, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 top-2 w-4 h-4 bg-church-gold rounded-full"></div>
                    <div className="absolute -left-6 top-6 w-0.5 h-full bg-church-gold/20"></div>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                  alt="Historic church" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-burgundy/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <Badge className="bg-church-gold text-church-burgundy font-semibold px-4 py-2">
                    Est. 1965
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-20 bg-gradient-to-br from-church-navy to-church-burgundy text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <Target className="w-8 h-8 text-church-gold" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Guided by faith, driven by love, united in purpose
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl transform hover:scale-105 transition-all">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 rounded-full bg-church-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-church-gold" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl text-white/95 mb-6 font-medium">
                    {pageData.mission}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {pageData.missionDescription}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl transform hover:scale-105 transition-all">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 rounded-full bg-church-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-10 h-10 text-church-gold" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl text-white/95 mb-6 font-medium">
                    {pageData.vision}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {pageData.visionDescription}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-gradient-to-br from-church-cream to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <Users className="w-8 h-8 text-church-burgundy" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold text-church-burgundy mb-6">Parish Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding our organizational framework and collaborative governance
              </p>
            </div>
            
            <ParishOrganogram />
            
            <div className="mt-16 text-center">
              <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-church-gold">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-bold text-church-burgundy mb-6">
                    Collaborative Leadership
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our parish operates under a collaborative model of leadership where clergy, staff, and lay leaders 
                    work together to serve our community. This structure ensures that all voices are heard and that 
                    decisions are made with the entire parish family in mind.
                  </p>
                  <Link 
                    to="/parish-executive"
                    className="inline-flex items-center px-8 py-4 bg-church-burgundy text-white rounded-full hover:bg-church-burgundy/90 transition-colors font-semibold shadow-lg transform hover:scale-105"
                  >
                    Meet Our Leaders
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <Heart className="w-8 h-8 text-church-burgundy" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold text-church-burgundy mb-6">Meet Our Parish Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated individuals serving our community with love and compassion
              </p>
            </div>
            
            {parishTeam && parishTeam.length > 0 ? (
              <div className="space-y-20">
                {Object.entries(categorizedTeam).map(([category, members]) => (
                  members.length > 0 && (
                    <div key={category}>
                      <h3 className="text-3xl font-bold text-church-burgundy mb-12 text-center">
                        {category === 'clergy' ? 'Our Clergy' : 
                         category === 'staff' ? 'Parish Staff' : 
                         category === 'council' ? 'Parish Council' : 
                         category === 'finance' ? 'Finance Council' : 
                         'Ministry Leaders'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {members.map((member) => (
                          <EnhancedStaffCard 
                            key={member._id}
                            name={member.name}
                            title={member.role}
                            bio={member.bio}
                            category={member.category}
                            email={member.email}
                            phone={member.phone}
                            officeHours={member.officeHours}
                            image={member.image}
                          />
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <EnhancedStaffCard 
                  name="Fr. John Doe"
                  title="Parish Priest"
                  bio="Fr. John has served our parish for 15 years. He was ordained in 1995 and holds a doctorate in Theology from the Catholic University."
                  category="clergy"
                  email="fr.john@parish.com"
                  phone="+263 123 456 789"
                  officeHours="Mon-Fri: 9AM-5PM"
                  image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                />
                
                <EnhancedStaffCard 
                  name="Fr. Michael Smith"
                  title="Assistant Priest"
                  bio="Fr. Michael joined our parish in 2020. He specializes in youth ministry and spiritual direction."
                  category="clergy"
                  email="fr.michael@parish.com"
                  phone="+263 123 456 788"
                  officeHours="Tue-Sat: 8AM-4PM"
                  image="https://images.unsplash.com/photo-1534885018726-ac85213ce780"
                />
                
                <EnhancedStaffCard 
                  name="Sarah Johnson"
                  title="Parish Administrator"
                  bio="Sarah manages the day-to-day operations of our parish, including facility management and administrative functions."
                  category="staff"
                  email="sarah@parish.com"
                  phone="+263 123 456 787"
                  officeHours="Mon-Fri: 8AM-5PM"
                  image="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                />
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-church-burgundy via-church-navy to-church-burgundy text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
                <Mail className="w-8 h-8 text-church-gold" />
                <div className="w-12 h-1 bg-church-gold rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold mb-6">{pageData.joinCommunityTitle}</h2>
              <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
                {pageData.joinCommunityText}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center shadow-xl">
                <CardContent className="pt-8">
                  <Phone className="w-12 h-12 text-church-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/80">+263 123 456 789</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center shadow-xl">
                <CardContent className="pt-8">
                  <Mail className="w-12 h-12 text-church-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-white/80">info@mushawbetania.org</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center shadow-xl">
                <CardContent className="pt-8">
                  <MapPin className="w-12 h-12 text-church-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-white/80">123 Faith Street, Harare</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to={pageData.joinCommunityButtonLink}
                  className="inline-flex items-center px-10 py-5 bg-church-gold hover:bg-church-gold/90 text-church-burgundy rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all"
                >
                  {pageData.joinCommunityButtonText}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-church-burgundy rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all"
                >
                  View Upcoming Events
                  <Calendar className="ml-3 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;