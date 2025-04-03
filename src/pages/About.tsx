
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutPage = () => {
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
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498889444388-e67ea62c464b")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">About Our Parish</h1>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our History" 
              subtitle="The story of Musha WeBetania Parish through the years."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 1965, Musha WeBetania Parish has been serving the spiritual needs of Catholics in our community for over 50 years. What began as a small mission outpost has grown into a vibrant parish community with thousands of faithful members.
                </p><br></br>
                <p>
                  Our parish was established by Bishop Joseph Smith with the help of the Franciscan missionaries who came to our area to spread the Gospel. The first church building was a simple structure that could accommodate just 100 worshippers.
                </p><br></br>
                <p>
                  As our community grew throughout the 1970s and 1980s, so did our parish. In 1992, we consecrated our current church building, which stands as a testament to the faith and generosity of our parishioners.
                </p><br></br>
                <p>
                  Today, Musha WeBetania Parish continues to be a spiritual home for Catholics of all backgrounds, a place where faith is nurtured, community is built, and God's love is shared.
                </p>
              </div>
              
              <div className="order-first lg:order-last">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3" 
                    alt="Historic church" 
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
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
                  To build a community of faith that celebrates God's presence, forms disciples, and serves others in Christ's name.
                </p>
                <p className="text-gray-700">
                  We strive to be a welcoming parish where all people can encounter Jesus Christ, grow in their relationship with Him, and be formed as disciples to share the Gospel.
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 mb-4 rounded-full bg-church-burgundy/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-church-burgundy">V</span>
                </div>
                <h2 className="text-2xl font-bold text-church-burgundy mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  To be a beacon of Catholic faith, known for our welcoming spirit, vibrant worship, and compassionate service.
                </p>
                <p className="text-gray-700">
                  We envision a parish where the sacramental life is celebrated with reverence and joy, where faith formation is a lifelong journey, and where service to those in need is a way of life.
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
              {/* Parish Priest */}
              <StaffCard 
                name="Fr. John Doe"
                title="Parish Priest"
                bio="Fr. John has served our parish for 15 years. He was ordained in 1995 and holds a doctorate in Theology from the Catholic University."
                image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              />
              
              {/* Assistant Priest */}
              <StaffCard 
                name="Fr. Michael Smith"
                title="Assistant Priest"
                bio="Fr. Michael joined our parish in 2020. He specializes in youth ministry and spiritual direction."
                image="https://images.unsplash.com/photo-1534885018726-ac85213ce780"
              />
              
              {/* Parish Administrator */}
              <StaffCard 
                name="Sarah Johnson"
                title="Parish Administrator"
                bio="Sarah manages the day-to-day operations of our parish, including facility management and administrative functions."
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              />
              
              {/* Director of Religious Education */}
              <StaffCard 
                name="Mark Wilson"
                title="Director of Religious Education"
                bio="Mark oversees our faith formation programs for children, youth, and adults."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              />
              
              {/* Music Director */}
              <StaffCard 
                name="Emily Davis"
                title="Music Director"
                bio="Emily leads our music ministry, coordinating choirs and musicians for liturgical celebrations."
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              />
              
              {/* Youth Minister */}
              <StaffCard 
                name="David Thompson"
                title="Youth Minister"
                bio="David works with our teenagers, coordinating youth programs, retreats, and service opportunities."
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              />
            </div>
            
            {/* Parish Executive Link - New Addition */}
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Want to learn more about our parish leadership structure and organization?
              </p>
              <Button asChild>
                <Link to="/parish-executive" className="inline-flex items-center">
                  View Parish Executive Organogram
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Staff Card Component
const StaffCard = ({ name, title, bio, image }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy">{name}</h3>
        <p className="text-church-gold font-medium mb-3">{title}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default AboutPage;
