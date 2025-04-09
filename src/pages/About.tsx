import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Church, Phone, Mail, MapPin, Users, FileText, Calendar, Book, Heart, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutPage = () => {
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
            
            {/* Detailed Parish Leadership Structure - Enhanced */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-church-burgundy text-center mb-8">Parish Leadership Structure</h3>
              
              <div className="max-w-6xl mx-auto">
                {/* Main Leadership Structure */}
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-church-burgundy/10">
                  <h4 className="text-xl font-semibold text-church-burgundy mb-6 text-center">Pastoral Governance</h4>
                  
                  {/* Top Level - Bishop */}
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="w-48 py-4 px-6 bg-church-burgundy text-white rounded-lg shadow-xl text-center flex flex-col items-center z-10 transform transition-transform hover:scale-105">
                        <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mb-2">
                          <Landmark className="text-white h-10 w-10" />
                        </div>
                        <div className="text-sm font-semibold">Diocesan Bishop</div>
                        <div className="text-xs mt-1">Most Rev. Raymond Mupandasekwa</div>
                        <div className="text-xs mt-1 text-white/70">Chinhoyi Diocese</div>
                      </div>
                      <div className="absolute left-1/2 bottom-0 w-0.5 h-10 bg-church-burgundy transform translate-y-full -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Parish Priest Level */}
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="w-44 py-4 px-6 bg-church-burgundy/90 text-white rounded-lg shadow-xl text-center flex flex-col items-center z-10 transform transition-transform hover:scale-105">
                        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mb-2">
                          <Church className="text-white h-8 w-8" />
                        </div>
                        <div className="text-sm font-semibold">Parish Priest</div>
                        <div className="text-xs mt-1">Fr. James Ndoro</div>
                        <div className="text-xs mt-1 text-white/70">Since 2018</div>
                      </div>
                      <div className="absolute left-1/2 bottom-0 w-0.5 h-10 bg-church-burgundy/80 transform translate-y-full -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Second Level - Assistant Priest & Deacon */}
                  <div className="flex justify-center gap-20 mb-12 relative">
                    <div className="absolute left-1/4 right-1/4 top-0 h-0.5 bg-church-burgundy/70"></div>
                    
                    <div className="relative">
                      <div className="w-36 py-3 px-4 bg-church-gold/90 text-church-burgundy rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105">
                        <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-1">
                          <Church className="text-church-burgundy h-6 w-6" />
                        </div>
                        <div className="text-sm font-semibold">Assistant Priest</div>
                        <div className="text-xs mt-1">Fr. Thomas Matonga</div>
                      </div>
                      <div className="absolute left-1/2 bottom-0 w-0.5 h-10 bg-church-burgundy/60 transform translate-y-full -translate-x-1/2"></div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-36 py-3 px-4 bg-church-gold/90 text-church-burgundy rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105">
                        <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-1">
                          <Book className="text-church-burgundy h-6 w-6" />
                        </div>
                        <div className="text-sm font-semibold">Deacon</div>
                        <div className="text-xs mt-1">Dcn. Peter Moyo</div>
                      </div>
                      <div className="absolute left-1/2 bottom-0 w-0.5 h-10 bg-church-burgundy/60 transform translate-y-full -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Third Level - Parish Council */}
                  <div className="bg-church-cream/50 p-6 rounded-xl mb-12 relative">
                    <h5 className="text-center text-church-burgundy font-semibold mb-6">Parish Pastoral Council</h5>
                    
                    {/* Council Leadership */}
                    <div className="flex justify-center gap-8 mb-8">
                      <div className="relative">
                        <div className="w-32 bg-white border border-church-burgundy/40 p-3 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                          <div className="w-10 h-10 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-1">
                            <Users className="text-church-burgundy h-5 w-5" />
                          </div>
                          <div className="text-xs font-semibold text-church-burgundy">Council Chair</div>
                          <div className="text-xs mt-1 text-gray-700">Joseph Takawira</div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-32 bg-white border border-church-burgundy/40 p-3 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                          <div className="w-10 h-10 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-1">
                            <Users className="text-church-burgundy h-5 w-5" />
                          </div>
                          <div className="text-xs font-semibold text-church-burgundy">Vice Chair</div>
                          <div className="text-xs mt-1 text-gray-700">Grace Mutema</div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-32 bg-white border border-church-burgundy/40 p-3 rounded-lg shadow-md text-center flex flex-col items-center transform transition-transform hover:scale-105">
                          <div className="w-10 h-10 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-1">
                            <FileText className="text-church-burgundy h-5 w-5" />
                          </div>
                          <div className="text-xs font-semibold text-church-burgundy">Secretary</div>
                          <div className="text-xs mt-1 text-gray-700">Francis Chideme</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Committee Heads */}
                    <h6 className="text-center text-church-burgundy/80 font-medium text-sm mb-5">Committee Chairpersons</h6>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                      <div className="w-full bg-white border border-church-burgundy/20 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                        <div className="text-xs font-semibold text-church-burgundy mb-1">Finance</div>
                        <div className="text-xs text-gray-700">F. Mukonoweshuro</div>
                      </div>
                      
                      <div className="w-full bg-white border border-church-burgundy/20 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                        <div className="text-xs font-semibold text-church-burgundy mb-1">Liturgy</div>
                        <div className="text-xs text-gray-700">P. Zambezi</div>
                      </div>
                      
                      <div className="w-full bg-white border border-church-burgundy/20 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                        <div className="text-xs font-semibold text-church-burgundy mb-1">Catechesis</div>
                        <div className="text-xs text-gray-700">R. Madzima</div>
                      </div>
                      
                      <div className="w-full bg-white border border-church-burgundy/20 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                        <div className="text-xs font-semibold text-church-burgundy mb-1">Outreach</div>
                        <div className="text-xs text-gray-700">C. Gono</div>
                      </div>
                      
                      <div className="w-full bg-white border border-church-burgundy/20 p-2 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                        <div className="text-xs font-semibold text-church-burgundy mb-1">Youth</div>
                        <div className="text-xs text-gray-700">M. Chadzuka</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Parish Ministries Grid */}
                  <div className="bg-white/70 border border-church-burgundy/10 rounded-xl p-6">
                    <h5 className="text-center text-church-burgundy font-semibold mb-6">Parish Ministries & Groups</h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {/* Liturgical Ministries */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Heart className="h-4 w-4 mr-1" /> Liturgical Ministries
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Lectors</li>
                          <li>• Extraordinary Ministers</li>
                          <li>• Altar Servers</li>
                          <li>• Music Ministry</li>
                          <li>• Ushers</li>
                        </ul>
                      </div>
                      
                      {/* Formation Ministries */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Book className="h-4 w-4 mr-1" /> Formation Ministries
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• RCIA</li>
                          <li>• Catechism Classes</li>
                          <li>• Bible Study</li>
                          <li>• Adult Formation</li>
                          <li>• Marriage Preparation</li>
                        </ul>
                      </div>
                      
                      {/* Community Life */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" /> Community Life
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Social Events</li>
                          <li>• Welcoming Committee</li>
                          <li>• Hospitality Team</li>
                          <li>• Parish Outreach</li>
                          <li>• Parish Life Committee</li>
                        </ul>
                      </div>
                      
                      {/* Service & Outreach */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Heart className="h-4 w-4 mr-1" /> Service & Outreach
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• St. Vincent de Paul Society</li>
                          <li>• Food Pantry</li>
                          <li>• Visiting the Sick</li>
                          <li>• Bereavement Ministry</li>
                          <li>• Community Service</li>
                        </ul>
                      </div>
                      
                      {/* Catholic Guilds */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" /> Catholic Guilds
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Sacred Heart of Jesus</li>
                          <li>• St. Anne's Guild</li>
                          <li>• St. Joseph's Guild</li>
                          <li>• Mary Queen of Heaven</li>
                          <li>• St. Monica Guild</li>
                        </ul>
                      </div>
                      
                      {/* Parish Administration */}
                      <div className="border border-church-burgundy/10 rounded-lg p-4 bg-white">
                        <h6 className="font-medium text-church-burgundy mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" /> Administration
                        </h6>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Parish Office Staff</li>
                          <li>• Building & Grounds</li>
                          <li>• Finance Committee</li>
                          <li>• Communications Team</li>
                          <li>• Technology Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 max-w-3xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Our parish governance follows the structure established by Canon Law and diocesan norms. The Bishop appoints the Parish Priest, who has primary responsibility for the pastoral and administrative care of the parish. The Parish Pastoral Council advises the priest and helps implement the parish vision. Various committees and ministries serve specific needs within our community. All parish leaders are committed to fostering a vibrant faith community centered on Christ.
                    </p>
                  </div>
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
