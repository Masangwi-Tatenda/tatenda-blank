
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Heart, BookOpen, Calendar } from 'lucide-react';
import SanityImage from '@/components/common/SanityImage';
import { useSanity } from '@/contexts/SanityContext';
import PortableText from '@/components/common/PortableText';
import { dynamicIcon } from '@/lib/dynamicIcon';

const YouthOverview = () => {
  const { youthMinistryPage, isLoading, youthEvents } = useSanity();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback data
  const fallbackYouthGroups = [
    {
      id: 'mca',
      name: 'Missionary Childhood Association (MCA)',
      ageRange: '2–12 years',
      description: 'Nurturing young hearts in the love of Christ and service to others through fun, age-appropriate activities that build a strong Catholic foundation.',
      icon: 'School',
      color: 'from-yellow-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      verse: 'Let the children come to me, and do not hinder them; for to such belongs the kingdom of heaven. — Matthew 19:14',
      link: '/community/youth/mca'
    },
    {
      id: 'cya',
      name: 'Catholic Youth Association (CYA)',
      ageRange: '13–17 years',
      description: 'Empowering teenagers to deepen their Catholic identity, develop leadership skills, and live out their faith through worship, service, and community.',
      icon: 'Star',
      color: 'from-church-burgundy to-red-700',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      verse: 'Let no one despise your youth, but set the believers an example in speech and conduct, in love, in faith, in purity. — 1 Timothy 4:12',
      link: '/community/youth/cya'
    },
    {
      id: 'young-adults',
      name: 'Young Adults',
      ageRange: '18–35 years',
      description: 'Accompanying young adults on their faith journey through spiritual, social, and service opportunities that foster Catholic community and vocation discernment.',
      icon: 'Users',
      color: 'from-church-gold to-amber-600',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      verse: 'They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles. — Isaiah 40:31',
      link: '/community/youth/young-adults'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center pt-24">
          <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  // Use Sanity data or fallback
  const youthGroups = youthMinistryPage?.youthGroups || fallbackYouthGroups;
  const bibleVerse = youthMinistryPage?.bibleVerse || {
    text: "Let no one despise your youth, but set the believers an example in speech and conduct, in love, in faith, in purity.",
    reference: "1 Timothy 4:12"
  };
  const missionStatement = youthMinistryPage?.missionStatement || {
    title: "Our Youth Ministry Mission",
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "At Musha WeBetania Parish, we believe in nurturing the faith of our children, adolescents, and young adults through engaging programs that foster spiritual growth, community service, and lifelong Catholic values. Our ministry offers age-appropriate activities that meet young people where they are, while guiding them toward a deeper relationship with Christ and His Church."
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "We invite all young parishioners and their families to join one of our three youth groups, each tailored to specific stages of spiritual and personal development."
          }
        ]
      }
    ]
  };
  const parentalInvolvement = youthMinistryPage?.parentalInvolvement || {
    title: "Parental & Guardian Involvement",
    content: "Parents and guardians play an essential role in supporting our youth ministry programs. We encourage your active participation and welcome your assistance in various capacities:",
    roles: [
      {
        icon: "Heart",
        title: "Volunteer",
        description: "Share your time and talents as a group leader, event chaperone, or program assistant."
      },
      {
        icon: "BookOpen",
        title: "Faith Formation",
        description: "Continue faith discussions at home and participate in family-centered activities."
      },
      {
        icon: "Users",
        title: "Community Building",
        description: "Help organize community events, provide refreshments, or host youth gatherings."
      }
    ],
    buttonText: "Become a Youth Ministry Volunteer",
    buttonLink: "/contact"
  };
  const contactInformation = youthMinistryPage?.contactInformation || {
    title: "Contact Our Youth Ministry",
    content: "Have questions about our youth programs? Contact our Youth Ministry Coordinator:",
    coordinator: "Mrs. Sarah Moyo",
    role: "Youth Ministry Coordinator",
    email: "youth@betania.org",
    phone: "(123) 456-7890"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title={youthMinistryPage?.title || "Youth & Young Adults Ministry"}
            subtitle={youthMinistryPage?.subtitle || "Nurturing faith, fostering community, and empowering the next generation of Catholic leaders"}
          />

          {/* Inspirational Bible Verse */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <blockquote className="italic text-lg text-gray-700 border-l-4 border-church-gold pl-4 py-2">
              "{bibleVerse.text}"
              <footer className="text-right font-medium mt-1">— {bibleVerse.reference}</footer>
            </blockquote>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden">
                  {missionStatement && missionStatement.image ? (
                    <SanityImage 
                      image={missionStatement.image} 
                      alt="Youth Ministry"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1570438395701-aee9c8ba0219?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Youth Ministry"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-church-burgundy mb-3">{missionStatement.title}</h3>
                {Array.isArray(missionStatement.content) ? (
                  <PortableText value={missionStatement.content} />
                ) : (
                  <p className="text-gray-700">{missionStatement.content}</p>
                )}
              </div>
            </div>
          </div>

          {/* Youth Group Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {youthGroups.map((group) => {
              const iconElement = dynamicIcon(group.icon);
              
              return (
                <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="h-48 relative">
                    {typeof group.image === 'string' ? (
                      <img 
                        src={group.image} 
                        alt={group.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : group.image ? (
                      <SanityImage 
                        image={group.image} 
                        alt={group.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${group.color} opacity-60`}></div>
                    <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                      {iconElement && (
                        <div className="h-6 w-6 text-yellow-500">
                          {iconElement}
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-medium">
                        {group.ageRange}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-church-burgundy">{group.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-gray-700">{group.description}</p>
                    <blockquote className="italic text-sm text-gray-600 border-l-2 border-church-gold pl-3 mt-4 line-clamp-2">
                      {group.verse}
                    </blockquote>
                  </CardContent>
                  <CardFooter>
                    <Link to={group.link}>
                      <Button>
                        Explore
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Upcoming Youth Events Preview */}
          <div className="bg-church-burgundy/5 rounded-xl p-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-church-burgundy">Upcoming Youth Events</h3>
              <Link to="/parish-calendar">
                <Button variant="outline" className="border-church-burgundy text-church-burgundy">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Calendar
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {youthEvents && youthEvents.length > 0 ? (
                youthEvents.slice(0, 3).map((event) => (
                  <div key={event._id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="bg-church-burgundy/10 rounded-md p-2 text-center min-w-[60px]">
                        <span className="block text-xs text-gray-600">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-xl font-bold text-church-burgundy">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-church-burgundy mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''} | {event.location || 'TBA'}
                        </p>
                        <div className="inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                          {event.ageGroup}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Fallback events if no Sanity data
                [1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="bg-church-burgundy/10 rounded-md p-2 text-center min-w-[60px]">
                        <span className="block text-xs text-gray-600">May</span>
                        <span className="block text-xl font-bold text-church-burgundy">{item + 10}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-church-burgundy mb-1">Youth Group Event {item}</h4>
                        <p className="text-sm text-gray-600 mb-2">7:00 PM | Parish Hall</p>
                        <div className="inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                          {item === 1 ? 'MCA' : item === 2 ? 'CYA' : 'Young Adults'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Parental Involvement */}
          <div className="bg-church-light-gold/30 rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-bold text-church-burgundy mb-4">{parentalInvolvement.title}</h3>
            <p className="text-gray-700 mb-4">
              {parentalInvolvement.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {parentalInvolvement.roles.map((role, index) => {
                const roleIcon = dynamicIcon(role.icon);
                
                return (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    {roleIcon && (
                      <div className="h-6 w-6 text-church-burgundy mb-2">
                        {roleIcon}
                      </div>
                    )}
                    <h4 className="font-medium text-church-burgundy mb-2">{role.title}</h4>
                    <p className="text-sm text-gray-700">
                      {role.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                {parentalInvolvement.buttonText}
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-church-burgundy mb-3">{contactInformation.title}</h3>
            <p className="text-gray-700 mb-4">
              {contactInformation.content}
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm inline-block">
              <p className="font-medium text-church-burgundy">{contactInformation.coordinator}</p>
              <p className="text-gray-700">{contactInformation.role}</p>
              <p className="text-gray-700">Email: {contactInformation.email}</p>
              <p className="text-gray-700">Phone: {contactInformation.phone}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YouthOverview;
