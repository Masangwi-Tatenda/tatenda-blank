
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Church, Phone, Mail, MapPin } from 'lucide-react';
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
            
            {/* Parish Organogram - New Addition */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-church-burgundy text-center mb-8">Parish Leadership Structure</h3>
              
              <div className="max-w-5xl mx-auto">
                {/* Parish Priest Level */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="w-36 bg-church-burgundy text-white p-4 rounded-lg shadow-lg text-center flex flex-col items-center z-10 transform transition-transform hover:scale-105">
                      <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mb-2">
                        <Church className="text-white h-10 w-10" />
                      </div>
                      <div className="text-sm font-semibold">Parish Priest</div>
                      <div className="text-xs mt-1">Fr. John Doe</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-church-burgundy/60 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Assistant Priest & Deacon Level */}
                <div className="flex justify-center gap-16 mb-10 relative">
                  <div className="absolute left-1/4 right-1/4 top-0 h-0.5 bg-church-burgundy/60"></div>
                  
                  <div className="relative">
                    <div className="w-32 bg-church-gold/90 text-church-burgundy p-3 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="text-sm font-semibold">Assistant Priest</div>
                      <div className="text-xs mt-1">Fr. Michael Smith</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-church-burgundy/60 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-32 bg-church-gold/90 text-church-burgundy p-3 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="text-sm font-semibold">Deacon</div>
                      <div className="text-xs mt-1">Dcn. Peter Moyo</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-church-burgundy/60 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Parish Council Leadership Level */}
                <div className="flex justify-center gap-8 mb-10 relative">
                  <div className="absolute left-[15%] right-[15%] top-0 h-0.5 bg-church-burgundy/60"></div>
                  
                  <div className="relative">
                    <div className="w-28 bg-white border border-church-burgundy p-2 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="text-xs font-semibold text-church-burgundy">Council Chair</div>
                      <div className="text-xs mt-1 text-gray-700">J. Takawira</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-church-burgundy/40 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-28 bg-white border border-church-burgundy p-2 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="text-xs font-semibold text-church-burgundy">Vice Chair</div>
                      <div className="text-xs mt-1 text-gray-700">G. Mutema</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-church-burgundy/40 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-28 bg-white border border-church-burgundy p-2 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="text-xs font-semibold text-church-burgundy">Secretary</div>
                      <div className="text-xs mt-1 text-gray-700">F. Chideme</div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-church-burgundy/40 transform translate-y-full -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Committee Heads Level */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto relative">
                  <div className="absolute left-[10%] right-[10%] top-0 h-0.5 bg-church-burgundy/40"></div>
                  
                  <div className="w-full bg-white border border-church-burgundy/30 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="text-xs font-semibold text-church-burgundy">Finance Committee</div>
                    <div className="text-xs mt-1 text-gray-700">F. Mukonoweshuro</div>
                  </div>
                  
                  <div className="w-full bg-white border border-church-burgundy/30 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="text-xs font-semibold text-church-burgundy">Liturgy Committee</div>
                    <div className="text-xs mt-1 text-gray-700">P. Zambezi</div>
                  </div>
                  
                  <div className="w-full bg-white border border-church-burgundy/30 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="text-xs font-semibold text-church-burgundy">Formation</div>
                    <div className="text-xs mt-1 text-gray-700">R. Madzima</div>
                  </div>
                  
                  <div className="w-full bg-white border border-church-burgundy/30 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="text-xs font-semibold text-church-burgundy">Outreach</div>
                    <div className="text-xs mt-1 text-gray-700">C. Gono</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 max-w-2xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our parish is led by the Parish Priest, assisted by the Assistant Priest and Deacon. The Parish Council, comprised of elected lay representatives, works closely with the clergy to oversee parish life and activities. Various committees focus on specific aspects of parish life including finances, liturgy, faith formation, and community outreach.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Link to Parish Executive page for more detailed information */}
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/parish-executive" className="inline-flex items-center">
                  View Detailed Parish Leadership Structure
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
