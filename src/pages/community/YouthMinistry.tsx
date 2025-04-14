
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { School, Star, Users } from 'lucide-react';

const YouthMinistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Youth groups
  const youthGroups = [
    {
      id: 'mca',
      name: 'Missionary Childhood Association (MCA)',
      ageRange: '2–12 years',
      description: 'Nurturing young hearts in the love of Christ and service to others through fun, age-appropriate activities that build a strong Catholic foundation.',
      icon: School,
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
      icon: Star,
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
      icon: Users,
      color: 'from-church-gold to-amber-600',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      verse: 'They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles. — Isaiah 40:31',
      link: '/community/youth/young-adults'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Youth & Young Adults Ministry"
            subtitle="Fostering faith, fellowship, and spiritual growth for children, teens, and young adults"
          />

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our youth and young adult ministries are dedicated to helping 
              the next generation of Catholics grow in their faith, build 
              lasting relationships, and discover their place in the Church 
              and the world.
            </p>
            <Link to="/community/youth">
              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                Explore Our Youth Ministry
              </Button>
            </Link>
          </div>

          {/* Youth Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {youthGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={group.image} 
                    alt={group.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${group.color} mix-blend-multiply`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{group.name}</h3>
                    <p className="font-medium text-white/90">{group.ageRange}</p>
                    <Link to={group.link} className="mt-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-church-burgundy/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-church-burgundy mb-4">Join Our Youth Programs</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              We welcome all young people to be part of our vibrant youth community. 
              Check out our dedicated youth section to find the right group for you or your child's age range.
            </p>
            <Link to="/community/youth">
              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                View Youth Ministry Details
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YouthMinistry;
