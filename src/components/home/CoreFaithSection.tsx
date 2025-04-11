
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useSanity } from '@/contexts/SanityContext';
import { dynamicIcon } from '@/lib/dynamicIcon';

// Fallback data to use if Sanity data is not available
const fallbackItems = [
  {
    _id: "1",
    title: "The Creed",
    description: "The Apostles' Creed and Nicene Creed summarize the foundational beliefs of the Catholic faith, including our understanding of the Trinity, the Church, and salvation.",
    icon: "BookOpen",
    link: "/core-faith#creed"
  },
  {
    _id: "2",
    title: "The Sacraments",
    description: "The seven sacraments are efficacious signs of grace instituted by Christ and entrusted to the Church, through which Divine life is bestowed upon us.",
    icon: "Droplet",
    link: "/core-faith#sacraments"
  },
  {
    _id: "3",
    title: "Moral Teaching",
    description: "Catholic moral teaching guides us in living a life of virtue, dignity, and holiness, informed by Scripture, Tradition, and natural law.",
    icon: "Heart",
    link: "/core-faith#moral-teaching"
  }
];

const CoreFaithSection = () => {
  const { coreFaithItems, isLoading } = useSanity();
  
  // Use Sanity data if available, otherwise use fallback data
  const faithItems = coreFaithItems?.length > 0 ? coreFaithItems : fallbackItems;
  
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
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faithItems.map((item) => {
              const IconComponent = dynamicIcon(item.icon);
              
              return (
                <div 
                  key={item._id} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {IconComponent && (
                      <IconComponent className="text-church-gold w-6 h-6 mr-2" />
                    )}
                    <h3 className="text-2xl font-bold text-church-gold">{item.title}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{item.description}</p>
                  <a href={item.link || "/core-faith"} className="inline-flex items-center text-church-gold hover:text-white transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        )}
        
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
