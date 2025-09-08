
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Church, Users, Heart, Eye, Target, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSanity } from '@/contexts/SanityContext';
import PortableText from '@/components/common/PortableText';
import SanityImage from '@/components/common/SanityImage';
import EnhancedStaffCard from '@/components/about/EnhancedStaffCard';
import ParishOrganogram from '@/components/about/ParishOrganogram';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutPage = () => {
  const { aboutPage, isLoading, parishTeam } = useSanity();
  const [activeTab, setActiveTab] = useState('overview');
  
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-[70vh] bg-cover bg-center relative"
            style={{ backgroundImage: typeof heroImage === 'string' ? `url("${heroImage}")` : undefined }}
          >
            {typeof heroImage !== 'string' && 
              <div className="absolute inset-0 w-full h-full">
                {heroImage}
              </div>
            }
            <div className="absolute inset-0 bg-gradient-to-r from-church-navy/80 via-church-navy/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {pageData.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                    {pageData.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-church-gold hover:bg-church-gold/90 text-white px-8 py-3">
                      <Church className="w-5 h-5 mr-2" />
                      Our Story
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-church-navy px-8 py-3">
                      <Users className="w-5 h-5 mr-2" />
                      Meet Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white shadow-md sticky top-20 z-40">
          <div className="container-custom">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-transparent border-b rounded-none h-16">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-church-burgundy h-full"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="history" 
                  className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-church-burgundy h-full"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Our History
                </TabsTrigger>
                <TabsTrigger 
                  value="leadership" 
                  className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-church-burgundy h-full"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Leadership
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className="data-[state=active]:bg-church-burgundy data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-church-burgundy h-full"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Our Team
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Tab Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <section className="py-20 bg-gradient-to-br from-church-cream via-white to-church-cream/50">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold text-church-burgundy">Welcome to Our Parish Family</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        For over five decades, Musha WeBetania Parish has been a cornerstone of faith in our community. 
                        We are a vibrant Catholic community dedicated to worship, service, and spiritual growth.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-church-burgundy mb-2">50+</div>
                        <div className="text-gray-600 font-medium">Years of Service</div>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-church-burgundy mb-2">2000+</div>
                        <div className="text-gray-600 font-medium">Parish Members</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                      alt="Parish community" 
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-church-gold/20 rounded-2xl"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-church-burgundy/20 rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-church-burgundy">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-church-burgundy/10 flex items-center justify-center mr-4">
                        <Target className="w-8 h-8 text-church-burgundy" />
                      </div>
                      <h3 className="text-2xl font-bold text-church-burgundy">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      {pageData.mission}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {pageData.missionDescription}
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-church-gold">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-church-gold/10 flex items-center justify-center mr-4">
                        <Eye className="w-8 h-8 text-church-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-church-burgundy">Our Vision</h3>
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      {pageData.vision}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {pageData.visionDescription}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-0">
            <section className="py-20 bg-white">
              <div className="container-custom">
                <SectionTitle 
                  title={pageData.historyTitle || 'Our History'} 
                  subtitle={pageData.historySubtitle || 'The story of our parish through the years.'}
                  className="mb-16"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="prose prose-lg max-w-none space-y-6">
                    {aboutPage && aboutPage.historyContent ? (
                      <PortableText value={aboutPage.historyContent} />
                    ) : (
                      <>
                        {fallbackData.historyContent.map((paragraph, index) => (
                          <p key={index} className="text-gray-700 leading-relaxed text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </>
                    )}
                  </div>
                  
                  <div className="order-first lg:order-last">
                    <div className="relative">
                      {aboutPage && aboutPage.historyImage ? (
                        <SanityImage 
                          image={aboutPage.historyImage} 
                          alt="Parish history" 
                          className="rounded-2xl shadow-2xl w-full h-auto"
                        />
                      ) : (
                        <img 
                          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                          alt="Historic church" 
                          className="rounded-2xl shadow-2xl w-full h-auto"
                        />
                      )}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-church-gold/20 rounded-2xl"></div>
                      <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-church-burgundy/20 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="mt-0">
            <section className="py-20 bg-gradient-to-br from-church-cream to-white">
              <div className="container-custom">
                <SectionTitle 
                  title="Parish Leadership Structure" 
                  subtitle="Understanding our organizational framework and governance"
                  className="mb-16"
                />
                
                <ParishOrganogram />
                
                <div className="mt-16 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">
                      Collaborative Leadership
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Our parish operates under a collaborative model of leadership where clergy, staff, and lay leaders 
                      work together to serve our community. This structure ensures that all voices are heard and that 
                      decisions are made with the entire parish family in mind.
                    </p>
                    <Link 
                      to="/parish-executive"
                      className="inline-flex items-center px-6 py-3 bg-church-burgundy text-white rounded-lg hover:bg-church-burgundy/90 transition-colors"
                    >
                      Meet Our Leaders
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="mt-0">
            <section className="py-20 bg-white">
              <div className="container-custom">
                <SectionTitle 
                  title="Meet Our Parish Team" 
                  subtitle="Dedicated individuals serving our community with love and compassion"
                  className="mb-16"
                />
                
                {parishTeam && parishTeam.length > 0 ? (
                  <div className="space-y-16">
                    {Object.entries(categorizedTeam).map(([category, members]) => (
                      members.length > 0 && (
                        <div key={category}>
                          <h3 className="text-2xl font-bold text-church-burgundy mb-8 capitalize">
                            {category === 'clergy' ? 'Clergy' : 
                             category === 'staff' ? 'Parish Staff' : 
                             category === 'council' ? 'Parish Council' : 
                             category === 'finance' ? 'Finance Council' : 
                             'Ministry Leaders'}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-church-burgundy to-church-navy text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                {pageData.joinCommunityTitle}
              </h3>
              <p className="text-xl text-white/90 mb-8">
                {pageData.joinCommunityText}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to={pageData.joinCommunityButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-church-gold hover:bg-church-gold/90 text-white rounded-lg font-semibold transition-colors"
                >
                  {pageData.joinCommunityButtonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-church-burgundy rounded-lg font-semibold transition-colors"
                >
                  View Upcoming Events
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
