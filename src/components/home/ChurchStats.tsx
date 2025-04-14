
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';
import { useSanity } from '@/contexts/SanityContext';
import { dynamicIcon } from '@/lib/dynamicIcon';
import { Users, Heart, ChurchIcon, Calendar } from 'lucide-react';

// Animated counter component
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().substring(0, 3));
    
    // Calculate animation duration per increment
    const incrementTime = (duration / end) * 1000;
    
    // Fast start, slow end animation
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count}</span>;
};

const ChurchStats = () => {
  const { churchStats, isLoading, error } = useSanity();
  
  // Fallback data in case Sanity data is not available
  const fallbackStats = [
    {
      _id: '1',
      label: 'Parishioners',
      value: 1200,
      description: 'Registered members of our parish',
      icon: 'Users',
      color: 'text-church-burgundy',
      order: 1
    },
    {
      _id: '2',
      label: 'Years of Service',
      value: 58,
      description: 'Serving our community since 1965',
      icon: 'Calendar',
      color: 'text-church-gold',
      order: 2
    },
    {
      _id: '3',
      label: 'Ministries',
      value: 25,
      description: 'Active groups serving various needs',
      icon: 'Heart',
      color: 'text-church-burgundy',
      order: 3
    },
    {
      _id: '4',
      label: 'Weekly Masses',
      value: 12,
      description: 'Opportunities for worship each week',
      icon: 'ChurchIcon',
      color: 'text-church-gold',
      order: 4
    },
  ];

  // Use Sanity data if available, otherwise use fallback
  const statsToDisplay = (churchStats && churchStats.length > 0) ? churchStats : fallbackStats;
  
  console.log('Church stats component rendering with:', statsToDisplay);

  if (isLoading) {
    return (
      <section className="section-padding bg-gradient-to-br from-gray-50 to-church-cream">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-church-burgundy border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-church-cream">
      <div className="container-custom">
        <SectionTitle 
          title="Our Parish at a Glance" 
          subtitle="Numbers that reflect our vibrant and growing Catholic community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {statsToDisplay.map((stat, index) => {
            // Create the icon element using our fixed dynamicIcon function
            const iconElement = dynamicIcon(stat.icon);
            
            return (
              <motion.div
                key={stat._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {iconElement && (
                    <div className={cn("w-8 h-8", stat.color || "text-church-burgundy")}>
                      {iconElement}
                    </div>
                  )}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  <Counter value={stat.value} />
                  <span className="text-2xl">+</span>
                </h3>
                
                <p className="text-lg font-medium text-church-burgundy mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center bg-church-burgundy/5 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-church-burgundy mb-2">Join Our Growing Community</h3>
          <p className="text-gray-700 mb-4">
            We invite you to become part of our vibrant parish family. Whether through worship, service, or fellowship, there's a place for everyone at Musha WeBetania Parish.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors duration-300"
          >
            Get Involved Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChurchStats;
