import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useSanity } from '@/contexts/SanityContext';
import SanityImage from '@/components/common/SanityImage';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, Clock } from 'lucide-react';

const ParishExecutive = () => {
  const { parishTeam, isLoading } = useSanity();
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
    return null;
  }
  
  // Sort and categorize team members
  const teamMembers = parishTeam || [];
  const sortedTeam = [...teamMembers].sort((a, b) => {
    // Sort by orderRank if available
    if (a.orderRank && b.orderRank) return a.orderRank - b.orderRank;
    // Otherwise sort by category priority
    const categoryOrder = { clergy: 1, staff: 2, council: 3, finance: 4, ministry: 5 };
    return (categoryOrder[a.category || 'staff'] || 99) - (categoryOrder[b.category || 'staff'] || 99);
  });
  
  // Group by category
  const memberCategories = {
    clergy: sortedTeam.filter(m => m.category === 'clergy'),
    staff: sortedTeam.filter(m => m.category === 'staff'),
    council: sortedTeam.filter(m => m.category === 'council'),
    finance: sortedTeam.filter(m => m.category === 'finance'),
    ministry: sortedTeam.filter(m => m.category === 'ministry'),
  };
  
  // Category labels
  const categoryLabels = {
    clergy: 'Clergy',
    staff: 'Parish Staff',
    council: 'Parish Council',
    finance: 'Finance Council',
    ministry: 'Ministry Leaders',
    all: 'All Team Members'
  };
  
  // Helper function for contact info display
  const renderContactInfo = (member) => (
    <div className="space-y-2 text-sm">
      {member.email && (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-church-burgundy" />
          <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-church-burgundy">
            {member.email}
          </a>
        </div>
      )}
      {member.phone && (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-church-burgundy" />
          <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-church-burgundy">
            {member.phone}
          </a>
        </div>
      )}
      {member.officeHours && (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-church-burgundy" />
          <span className="text-gray-600">{member.officeHours}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Parish Leadership"
            subtitle="Meet the dedicated team who guide our parish community"
            className="mb-8 text-center"
          />
          
          <div className="mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 mb-8">
                Our parish is blessed with dedicated leadership who work together to serve our community. 
                From our pastor and clergy to our staff and volunteers, each person plays a vital role in 
                the life and mission of our parish.
              </p>
            </div>
            
            {/* Parish Organogram */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Parish Organization Structure</h2>
              
              <div className="relative max-w-5xl mx-auto">
                {/* Pastor - Top Level */}
                <div className="flex justify-center mb-8">
                  <div className="w-64 bg-church-burgundy text-white p-4 rounded-lg text-center shadow-md">
                    <h3 className="font-bold text-lg">Pastor</h3>
                    <p className="text-sm opacity-90">
                      Parish Leadership
                    </p>
                  </div>
                </div>
                
                {/* Connecting lines */}
                <div className="absolute left-1/2 top-20 w-0.5 h-10 bg-gray-300 -translate-x-1/2"></div>
                
                {/* Second Level */}
                <div className="flex justify-center gap-4 md:gap-12 mb-8">
                  <div className="w-48 md:w-56 bg-church-gold text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Associate Pastor</h3>
                    <p className="text-xs">Clergy</p>
                  </div>
                  <div className="w-48 md:w-56 bg-church-gold text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Deacons</h3>
                    <p className="text-xs">Clergy</p>
                  </div>
                </div>
                
                {/* Connecting lines */}
                <div className="hidden md:block absolute left-1/4 top-48 w-1/2 h-0.5 bg-gray-300"></div>
                <div className="hidden md:block absolute left-1/4 top-48 w-0.5 h-10 bg-gray-300"></div>
                <div className="hidden md:block absolute right-1/4 top-48 w-0.5 h-10 bg-gray-300"></div>
                <div className="hidden md:block absolute left-1/2 top-48 w-0.5 h-10 bg-gray-300 -translate-x-1/2"></div>
                
                {/* Third Level */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                  <div className="bg-gray-700 text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Parish Staff</h3>
                    <p className="text-xs">Administration & Operations</p>
                  </div>
                  <div className="bg-gray-700 text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Parish Council</h3>
                    <p className="text-xs">Advisory Body</p>
                  </div>
                  <div className="bg-gray-700 text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Finance Council</h3>
                    <p className="text-xs">Financial Oversight</p>
                  </div>
                </div>
                
                {/* Connecting lines */}
                <div className="hidden md:block absolute left-1/6 top-96 w-2/3 h-0.5 bg-gray-300"></div>
                <div className="hidden md:block absolute left-1/6 top-96 w-0.5 h-10 bg-gray-300"></div>
                <div className="hidden md:block absolute right-1/6 top-96 w-0.5 h-10 bg-gray-300"></div>
                <div className="hidden md:block absolute left-1/2 top-96 w-0.5 h-10 bg-gray-300 -translate-x-1/2"></div>
                
                {/* Fourth Level - Ministry Leaders */}
                <div className="flex justify-center">
                  <div className="w-72 bg-gray-500 text-white p-3 rounded-lg text-center shadow-md">
                    <h3 className="font-bold">Ministry Leaders</h3>
                    <p className="text-xs">Liturgical, Educational, Service & Outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full mb-8"
          >
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="clergy">Clergy</TabsTrigger>
              <TabsTrigger value="staff">Parish Staff</TabsTrigger>
              <TabsTrigger value="council">Parish Council</TabsTrigger>
              <TabsTrigger value="finance">Finance Council</TabsTrigger>
              <TabsTrigger value="ministry">Ministry Leaders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              {Object.keys(memberCategories).map((category) => (
                memberCategories[category].length > 0 && (
                  <div key={category} className="mb-12">
                    <h2 className="text-2xl font-bold text-church-burgundy mb-6">{categoryLabels[category]}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {memberCategories[category].map((member, index) => (
                        <Card key={index} className="overflow-hidden border-church-gold/30 hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <div className="flex flex-col h-full">
                              {/* Image */}
                              <div className="h-48 bg-church-burgundy/10">
                                {member.image ? (
                                  <SanityImage 
                                    image={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-church-burgundy/10">
                                    <span className="text-5xl font-semibold text-church-burgundy/30">
                                      {member.name?.charAt(0) || "?"}
                                    </span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Content */}
                              <div className="p-5">
                                <h3 className="font-bold text-lg text-church-burgundy mb-1">{member.name}</h3>
                                <p className="font-medium text-gray-600 mb-3">{member.role}</p>
                                {member.bio && <p className="text-sm text-gray-700 mb-4 line-clamp-3">{member.bio}</p>}
                                {renderContactInfo(member)}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </TabsContent>
            
            {Object.keys(memberCategories).map((category) => (
              <TabsContent key={category} value={category} className="animate-fade-in">
                <h2 className="text-2xl font-bold text-church-burgundy mb-6">{categoryLabels[category]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {memberCategories[category].map((member, index) => (
                    <Card key={index} className="overflow-hidden border-church-gold/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex flex-col h-full">
                          {/* Image */}
                          <div className="h-48 bg-church-burgundy/10">
                            {member.image ? (
                              <SanityImage 
                                image={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-church-burgundy/10">
                                <span className="text-5xl font-semibold text-church-burgundy/30">
                                  {member.name?.charAt(0) || "?"}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className="p-5">
                            <h3 className="font-bold text-lg text-church-burgundy mb-1">{member.name}</h3>
                            <p className="font-medium text-gray-600 mb-3">{member.role}</p>
                            {member.bio && <p className="text-sm text-gray-700 mb-4 line-clamp-3">{member.bio}</p>}
                            {renderContactInfo(member)}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Contact Information */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold text-church-burgundy mb-3">Parish Office Contact</h2>
              <p className="text-gray-700 mb-2">
                For general inquiries or to connect with our parish leadership team, 
                please contact our parish office:
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-church-burgundy mr-2" />
                  <a href="tel:+11234567890" className="text-church-burgundy hover:underline">
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-church-burgundy mr-2" />
                  <a href="mailto:office@stcharlesparish.org" className="text-church-burgundy hover:underline">
                    office@stcharlesparish.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParishExecutive;
