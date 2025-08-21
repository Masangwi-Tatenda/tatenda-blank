
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { useSanity } from '@/contexts/SanityContext';
import { ParishTeamMember } from '@/lib/sanity';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import StaffCard from '@/components/about/StaffCard';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ParishLeadership = () => {
  const { parishTeam = [], isLoading } = useSanity();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sort team members by orderRank or order
  const sortedTeamMembers = [...parishTeam].sort((a, b) => {
    return (a.orderRank || a.order || 100) - (b.orderRank || b.order || 100);
  });
  
  // Group team members by category
  const teamMembersByCategory: Record<string, ParishTeamMember[]> = {};
  sortedTeamMembers.forEach(member => {
    const category = member.category || 'Uncategorized';
    if (!teamMembersByCategory[category]) {
      teamMembersByCategory[category] = [];
    }
    teamMembersByCategory[category].push(member);
  });
  
  // Categories in the preferred display order
  const categoryOrder = [
    'clergy',
    'staff',
    'council',
    'finance',
    'ministry',
    'Uncategorized'
  ];
  
  const getCategoryLabel = (key: string): string => {
    const labelMap: Record<string, string> = {
      'clergy': 'Clergy',
      'staff': 'Parish Staff',
      'council': 'Parish Council',
      'finance': 'Finance Council',
      'ministry': 'Ministry Leaders',
      'Uncategorized': 'Other Team Members'
    };
    return labelMap[key] || key;
  };
  
  const sortedCategories = Object.keys(teamMembersByCategory).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Parish Leadership"
            subtitle="Meet our dedicated team serving our parish community"
          />
          
          {/* Organization Chart */}
          <div className="max-w-5xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Parish Organizational Structure</h2>
            
            <div className="org-chart">
              {/* Root Node - Pastor */}
              {sortedTeamMembers.filter(member => member.role.toLowerCase().includes('pastor')).map(pastor => (
                <div key={pastor._id} className="org-node org-root mb-6">
                  <div className="bg-church-burgundy text-white p-4 rounded-lg shadow-md max-w-md mx-auto text-center">
                    <h3 className="font-bold text-lg">{pastor.name}</h3>
                    <p>{pastor.role}</p>
                  </div>
                  
                  {/* Divider line */}
                  <div className="h-8 w-0.5 bg-gray-300 mx-auto"></div>
                </div>
              ))}
              
              {/* Main Branches */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Parish Staff Branch */}
                <div className="org-branch">
                  <div className="bg-church-gold/10 p-4 rounded-lg shadow-sm text-center mb-2">
                    <h3 className="font-bold text-church-burgundy">Parish Staff</h3>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                    {teamMembersByCategory['staff']?.map(member => (
                      <div key={member._id} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <p className="font-medium text-church-burgundy">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Pastoral Council Branch */}
                <div className="org-branch">
                  <div className="bg-church-gold/10 p-4 rounded-lg shadow-sm text-center mb-2">
                    <h3 className="font-bold text-church-burgundy">Parish Council</h3>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                    {teamMembersByCategory['council']?.map(member => (
                      <div key={member._id} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <p className="font-medium text-church-burgundy">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Finance Council Branch */}
                <div className="org-branch">
                  <div className="bg-church-gold/10 p-4 rounded-lg shadow-sm text-center mb-2">
                    <h3 className="font-bold text-church-burgundy">Finance Council</h3>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                    {teamMembersByCategory['finance']?.map(member => (
                      <div key={member._id} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <p className="font-medium text-church-burgundy">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Ministry Leaders */}
              <div className="mt-8">
                <div className="bg-church-gold/20 p-4 rounded-lg shadow-sm max-w-md mx-auto text-center mb-6">
                  <h3 className="font-bold text-church-burgundy">Ministry Leaders</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {teamMembersByCategory['ministry']?.map(member => (
                    <div key={member._id} className="bg-gray-50 p-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium text-church-burgundy">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            
          {/* Detailed Team Listings */}
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="clergy">Clergy</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="council">Councils</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="animate-fade-in">
                {sortedCategories.map(category => (
                  <div key={category} className="mb-10">
                    <div 
                      className="flex items-center justify-between bg-church-burgundy/10 p-3 rounded-md cursor-pointer"
                      onClick={() => toggleSection(category)}
                    >
                      <h3 className="text-xl font-semibold text-church-burgundy">{getCategoryLabel(category)}</h3>
                      {expandedSection === category ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                    
                    {expandedSection === category && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {teamMembersByCategory[category].map((member) => (
                          <StaffCard 
                            key={member._id} 
                            name={member.name} 
                            title={member.role}
                            image={member.image}
                            email={member.email || member.contactEmail}
                            phone={member.phone || member.contactPhone}
                            officeHours={member.officeHours}
                            bio={member.bio || ""}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="clergy" className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembersByCategory['clergy']?.map((member) => (
                    <StaffCard 
                      key={member._id} 
                      name={member.name} 
                      title={member.role}
                      image={member.image}
                      email={member.email || member.contactEmail}
                      phone={member.phone || member.contactPhone}
                      officeHours={member.officeHours}
                      bio={member.bio || ""}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="staff" className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembersByCategory['staff']?.map((member) => (
                    <StaffCard 
                      key={member._id} 
                      name={member.name} 
                      title={member.role}
                      image={member.image}
                      email={member.email || member.contactEmail}
                      phone={member.phone || member.contactPhone}
                      officeHours={member.officeHours}
                      bio={member.bio || ""}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="council" className="animate-fade-in">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-4">Parish Council</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {teamMembersByCategory['council']?.map((member) => (
                        <StaffCard 
                          key={member._id} 
                          name={member.name} 
                          title={member.role}
                          image={member.image}
                          email={member.email || member.contactEmail}
                          phone={member.phone || member.contactPhone}
                          bio={member.bio || ""}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-church-burgundy mb-4">Finance Council</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {teamMembersByCategory['finance']?.map((member) => (
                        <StaffCard 
                          key={member._id} 
                          name={member.name} 
                          title={member.role}
                          image={member.image}
                          email={member.email || member.contactEmail}
                          phone={member.phone || member.contactPhone}
                          bio={member.bio || ""}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Contact Section */}
          <div className="max-w-3xl mx-auto mt-16 bg-church-burgundy/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-church-burgundy mb-3">Parish Office</h2>
            <p className="text-gray-600 mb-6">
              For general inquiries or to connect with any of our parish leaders, please contact the parish office.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium">Phone</p>
                  <p className="text-church-burgundy">(555) 123-4567</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium">Email</p>
                  <p className="text-church-burgundy">office@stmichaels.org</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium">Office Hours</p>
                  <p className="text-church-burgundy">Mon-Fri: 9am - 4pm</p>
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

export default ParishLeadership;
