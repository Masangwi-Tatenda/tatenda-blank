
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const executiveMembers = [
  {
    name: 'Fr. Nguluve',
    role: 'Parish Priest',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Leads the parish in spiritual and administrative matters.'
  },
  {
    name: 'Deacon Thomas',
    role: 'Deacon',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Assists in liturgical services and pastoral care.'
  },
  {
    name: 'Mrs. Sarah Moyo',
    role: 'Parish Council Chair',
    image: 'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Coordinates the parish council activities and meetings.'
  },
  {
    name: 'Mr. John Shumba',
    role: 'Finance Committee Chair',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Oversees the financial management of the parish.'
  },
  {
    name: 'Mrs. Elizabeth Chitima',
    role: 'Catechetical Coordinator',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Manages religious education programs for all ages.'
  },
  {
    name: 'Mr. David Zimuto',
    role: 'Youth Ministry Coordinator',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Leads and coordinates youth activities in the parish.'
  },
  {
    name: 'Mrs. Grace Gutu',
    role: 'Liturgy Committee Chair',
    image: 'https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Plans and organizes liturgical celebrations throughout the year.'
  },
  {
    name: 'Mr. Paul Matongo',
    role: 'Maintenance Manager',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Oversees the maintenance of church buildings and grounds.'
  },
  {
    name: 'Mrs. Lucy Gumbo',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    description: 'Manages administrative duties and communications.'
  }
];

// Group members by their roles for the organogram
const clergy = executiveMembers.filter(member => 
  ['Parish Priest', 'Deacon'].includes(member.role)
);

const leadership = executiveMembers.filter(member => 
  ['Parish Council Chair', 'Finance Committee Chair', 'Secretary'].includes(member.role)
);

const ministryCoordinators = executiveMembers.filter(member => 
  ['Catechetical Coordinator', 'Youth Ministry Coordinator', 'Liturgy Committee Chair'].includes(member.role)
);

const staff = executiveMembers.filter(member => 
  ['Maintenance Manager'].includes(member.role)
);

const ParishExecutive = () => {
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
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557053506-2b9d28499e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Parish Leadership</h1>
            </div>
          </div>
        </section>
        
        {/* Organogram Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Parish Executive Organogram" 
              subtitle="Meet the dedicated team that leads our parish community."
            />
            
            <div className="mt-12">
              {/* Hierarchical Organogram */}
              <div className="relative">
                {/* Clergy Section - Top Level */}
                <div className="relative mb-20">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Clergy</h2>
                  
                  {/* Center line from Parish Priest to subordinates */}
                  <div className="absolute left-1/2 top-[calc(100%+1.5rem)] h-10 w-0.5 bg-church-burgundy -translate-x-1/2 z-10"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative">
                    {clergy.map((member, index) => (
                      <div key={index} className={`${index === 0 ? 'md:col-span-2 max-w-xs mx-auto' : ''}`}>
                        <ExecutiveCard member={member} highlighted={index === 0} />
                        
                        {/* Vertical connector from Parish Priest */}
                        {index === 0 && <div className="absolute left-1/2 bottom-0 h-6 w-0.5 bg-church-burgundy -translate-x-1/2"></div>}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Line connecting to the second level */}
                <div className="absolute top-[calc(16rem+3.5rem)] left-1/2 w-[80%] h-0.5 bg-church-burgundy -translate-x-1/2"></div>
                
                {/* Parish Leadership - Second Level */}
                <div className="mb-20 relative">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Parish Leadership</h2>
                  
                  {/* Vertical connector to next level */}
                  <div className="absolute left-1/2 top-[calc(100%+1.5rem)] h-10 w-0.5 bg-church-burgundy -translate-x-1/2 z-10"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative">
                    {leadership.map((member, index) => (
                      <div key={index} className="relative">
                        <ExecutiveCard member={member} />
                        
                        {/* Vertical lines connecting each leadership position to the horizontal line above */}
                        <div className="absolute top-[-3rem] left-1/2 h-3rem w-0.5 bg-church-burgundy -translate-x-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Line connecting to the third level */}
                <div className="absolute top-[calc(32rem+5rem)] left-1/2 w-[80%] h-0.5 bg-church-burgundy -translate-x-1/2"></div>
                
                {/* Ministry Coordinators - Third Level */}
                <div className="mb-20 relative">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Ministry Coordinators</h2>
                  
                  {/* Vertical connector to next level */}
                  <div className="absolute left-1/2 top-[calc(100%+1.5rem)] h-10 w-0.5 bg-church-burgundy -translate-x-1/2 z-10"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative">
                    {ministryCoordinators.map((member, index) => (
                      <div key={index} className="relative">
                        <ExecutiveCard member={member} />
                        
                        {/* Vertical lines connecting each coordinator to the horizontal line above */}
                        <div className="absolute top-[-3rem] left-1/2 h-3rem w-0.5 bg-church-burgundy -translate-x-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Line connecting to the fourth level */}
                <div className="absolute top-[calc(48rem+6.5rem)] left-1/2 w-[50%] h-0.5 bg-church-burgundy -translate-x-1/2"></div>
                
                {/* Administrative Staff - Fourth Level */}
                <div className="relative">
                  <h2 className="text-2xl font-bold text-church-burgundy mb-6 text-center">Administrative Staff</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {staff.map((member, index) => (
                      <div key={index} className="relative md:col-start-2">
                        <ExecutiveCard member={member} />
                        
                        {/* Vertical line connecting to horizontal line above */}
                        <div className="absolute top-[-3rem] left-1/2 h-3rem w-0.5 bg-church-burgundy -translate-x-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Legend for organogram */}
              <div className="mt-16 bg-white p-4 rounded-lg shadow-sm max-w-md mx-auto">
                <h3 className="text-lg font-bold text-church-burgundy mb-3">Organogram Legend</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-church-burgundy rounded-full"></div>
                    <span className="text-sm text-gray-700">Direct reporting relationship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-0.5 bg-church-burgundy"></div>
                    <span className="text-sm text-gray-700">Hierarchical relationship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Parish Structure Description */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-church-burgundy mb-6 text-center">Our Parish Structure</h2>
              <div className="prose prose-lg max-w-none">
                <p>Our parish is structured to ensure effective spiritual leadership, administrative management, and community engagement. Led by our Parish Priest, the various committees and coordinators work together to fulfill our mission and serve the needs of our community.</p><br></br>
                
                <h3 className='text-church-burgundy'>Key Responsibilities</h3>
                <ul>
                  <li><strong>Parish Priest:</strong> Provides spiritual guidance, administers sacraments, and oversees all parish activities.</li>
                  <li><strong>Parish Council:</strong> Advises the Pastor on parish matters and helps develop pastoral plans.</li>
                  <li><strong>Finance Committee:</strong> Oversees financial management, budgeting, and stewardship.</li>
                  <li><strong>Ministry Coordinators:</strong> Lead specific areas of parish life such as catechesis, youth ministry, and liturgy.</li><br></br>
                </ul>
                
                <p>We encourage all parishioners to get involved in one or more of our parish ministries. To learn more about volunteer opportunities, please contact the parish office.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Executive Member Card Component
const ExecutiveCard = ({ member, highlighted = false }) => {
  return (
    <Card className={`w-full max-w-xs hover:shadow-lg transition-shadow duration-300 ${highlighted ? 'ring-2 ring-church-gold' : ''}`}>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className={`w-24 h-24 rounded-full overflow-hidden ${highlighted ? 'border-4 border-church-gold' : 'border-4 border-church-gold/20'}`}>
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold text-church-burgundy">{member.name}</h3>
        <p className="text-church-gold font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.description}</p>
      </CardContent>
    </Card>
  );
};

export default ParishExecutive;
