
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Church, Heart, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const links = [
  {
    icon: Church,
    title: 'Mass Times',
    description: 'Join us for daily and Sunday Masses',
    href: '/mass-times',
    color: 'from-church-burgundy/90 to-church-burgundy/70',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Stay updated with parish activities',
    href: '/events',
    color: 'from-church-navy/90 to-church-navy/70',
  },
  {
    icon: Heart,
    title: 'Donate',
    description: 'Support our parish and ministries',
    href: '/donate',
    color: 'from-church-gold/90 to-church-gold/70',
  },
  {
    icon: BookOpen,
    title: 'Sacraments',
    description: 'Learn about our sacramental life',
    href: '/sacraments',
    color: 'from-church-rose/90 to-church-rose/70',
  },
];

const QuickLinkCard = ({ icon: Icon, title, description, href, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link 
        to={href}
        className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block h-full"
      >
        <div className={cn(
          "absolute inset-0 transition-all duration-500 bg-gradient-to-br backdrop-blur-sm opacity-90 group-hover:opacity-100",
          color
        )}></div>
        
        {/* Glass overlay on hover */}
        <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-500 group-hover:backdrop-blur-sm group-hover:bg-white/10"></div>
        
        <div className="relative p-8 text-white h-full flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
            <Icon className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
          
          {/* Animated arrow */}
          <div className="mt-4 w-8 h-8 rounded-full bg-white/0 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const QuickLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <QuickLinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
