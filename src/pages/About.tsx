
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Church, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSanity } from '@/contexts/SanityContext';
import PortableText from '@/components/common/PortableText';
import SanityImage from '@/components/common/SanityImage';
import StaffCard from '@/components/about/StaffCard';

const AboutPage = () => {
  const { aboutPage, isLoading, parishTeam } = useSanity();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback data
  const fallbackData = {
    title: 'About Our Parish',
    historyTitle: 'Our History',
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: typeof heroImage === 'string' ? `url("${heroImage}")` : undefined }}
          >
            {typeof heroImage !== 'string' && 
              <div className="absolute inset-0 w-full h-full">
                {heroImage}
              </div>
            }
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{pageData.title}</h1>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title={pageData.historyTitle || 'Our History'} 
              subtitle={pageData.historySubtitle || 'The story of our parish through the years.'}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                {aboutPage && aboutPage.historyContent ? (
                  <PortableText value={aboutPage.historyContent} />
                ) : (
                  <>
                    {fallbackData.historyContent.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
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
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                      alt="Historic church" 
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  )}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-church-gold rounded-lg opacity-20"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-church-burgundy rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 mb-4 rounded-full bg-church-burgundy/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-church-burgundy">M</span>
                </div>
                <h2 className="text-2xl font-bold text-church-burgundy mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  {pageData.mission}
                </p>
                <p className="text-gray-700">
                  {aboutPage && aboutPage.missionDescription ? (
                    <PortableText value={aboutPage.missionDescription} />
                  ) : (
                    pageData.missionDescription
                  )}
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 mb-4 rounded-full bg-church-burgundy/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-church-burgundy">V</span>
                </div>
                <h2 className="text-2xl font-bold text-church-burgundy mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  {pageData.vision}
                </p>
                <p className="text-gray-700">
                  {aboutPage && aboutPage.visionDescription ? (
                    <PortableText value={aboutPage.visionDescription} />
                  ) : (
                    pageData.visionDescription
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Parish Staff */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Meet Our Parish Team" 
              subtitle="Dedicated clergy and staff serving our community."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parishTeam && parishTeam.length > 0 ? (
                parishTeam.map((member) => (
                  <StaffCard 
                    key={member._id}
                    name={member.name}
                    title={member.role}
                    bio={member.bio}
                    image={member.image}
                  />
                ))
              ) : (
                <>
                  <StaffCard 
                    name="Fr. John Doe"
                    title="Parish Priest"
                    bio="Fr. John has served our parish for 15 years. He was ordained in 1995 and holds a doctorate in Theology from the Catholic University."
                    image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                  />
                  
                  <StaffCard 
                    name="Fr. Michael Smith"
                    title="Assistant Priest"
                    bio="Fr. Michael joined our parish in 2020. He specializes in youth ministry and spiritual direction."
                    image="https://images.unsplash.com/photo-1534885018726-ac85213ce780"
                  />
                  
                  <StaffCard 
                    name="Sarah Johnson"
                    title="Parish Administrator"
                    bio="Sarah manages the day-to-day operations of our parish, including facility management and administrative functions."
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="py-16 bg-church-burgundy/5">
          <div className="container-custom">
            <div className="text-center bg-church-burgundy/5 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-church-burgundy mb-2">
                {pageData.joinCommunityTitle}
              </h3>
              <p className="text-gray-700 mb-4">
                {pageData.joinCommunityText}
              </p>
              <Link
                to={pageData.joinCommunityButtonLink}
                className="inline-block px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors duration-300"
              >
                {pageData.joinCommunityButtonText}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
