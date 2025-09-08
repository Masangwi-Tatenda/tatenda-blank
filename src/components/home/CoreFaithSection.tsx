
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useSanity } from '@/contexts/SanityContext';
import { dynamicIcon } from '@/lib/dynamicIcon';

const CoreFaithSection = () => {
  const { coreFaithItems } = useSanity();
  
  // Fallback items if Sanity data isn't available
  const fallbackItems = [
    {
      _id: '1',
      title: 'Catholic Beliefs',
      description: 'Explore the core tenets of our Catholic faith and tradition.',
      icon: 'BookOpen',
      link: '/core-faith/beliefs'
    },
    {
      _id: '2',
      title: 'Prayer & Devotion',
      description: 'Discover traditional Catholic prayers and devotional practices.',
      icon: 'Heart',
      link: '/core-faith/prayers'
    },
    {
      _id: '3',
      title: 'Sacraments',
      description: 'Learn about the seven sacraments that mark our spiritual journey.',
      icon: 'Cross',
      link: '/sacraments'
    }
  ];

  // Use Sanity data if available, otherwise use fallback
  const itemsToDisplay = (coreFaithItems && coreFaithItems.length > 0) ? coreFaithItems : fallbackItems;
  
  return (
    <section className="section-padding bg-church-navy text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Core Faith & Doctrine" 
          subtitle="Discover the timeless truths of Catholic teaching and tradition"
          className="text-white"
          titleClassName="text-white"
          subtitleClassName="text-white/80"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itemsToDisplay.map((item) => {
            const iconElement = dynamicIcon(item.icon);
            
            return (
              <div 
                key={item._id} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {iconElement && (
                    <div className="text-church-gold w-6 h-6 mr-2">
                      {iconElement}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-church-gold">{item.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{item.description}</p>
                <Link 
                  to={item.link || "/core-faith"} 
                  className="inline-flex items-center text-church-gold hover:text-white transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            href="/core-faith" 
            variant="glass" 
            size="lg"
            className="bg-white/20 hover:bg-white/30 border-white/10"
          >
            Explore Catholic Doctrine
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreFaithSection;
