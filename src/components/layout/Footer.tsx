
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Globe, Clock, Church, Heart, Calendar, Book, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import GoogleMap from '@/components/common/GoogleMap';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/mushawabetaniaparish', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/mushawabetaniaparish', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/mushawabetania', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/channel/mushawabetania', label: 'YouTube' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Parish Calendar', href: '/parish-calendar' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Parish Leadership', href: '/parish-executive' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact Us', href: '/contact' },
];

const contactDetails = [
  { icon: MapPin, text: "Tangwena Road, Opposite Jongwe Tarven, Chikonohono" },
  { icon: Phone, text: "+123 456 7890" },
  { icon: Mail, text: "info@mushwebetania.org", link: "mailto:info@mushwebetania.org" },
  { icon: Globe, text: "Chinhoyi Diocese" },
  { icon: Clock, text: "Office Hours: Mon-Fri, 9am-4pm" },
];

const worshipLinks = [
  { label: 'Mass Times', href: '/mass-times' },
  { label: 'Liturgical Calendar', href: '/liturgical-calendar' },
  { label: 'Mass Recordings', href: '/mass-recordings' },
  { label: 'Homilies', href: '/homilies' },
  { label: 'Daily Readings', href: '/daily-readings' },
];

const faithLinks = [
  { label: 'Core Faith & Doctrine', href: '/core-faith' },
  { label: 'Catechesis', href: '/education-formation' },
  { label: 'RCIA', href: '/rcia' },
  { label: 'Spiritual Growth', href: '/spiritual-growth' },
  { label: 'Prayers & Novenas', href: '/prayers-novenas' },
  { label: 'Bible Study', href: '/bible-study' },
  { label: 'Apologetics', href: '/apologetics' },
  { label: 'Saints Calendar', href: '/saints-calendar' },
];

const communityLinks = [
  { label: 'Catholic Guilds', href: '/community/guilds' },
  { label: 'Parish Sections', href: '/community/sections' },
  { label: 'Youth & Young Adults', href: '/community/youth' },
  { label: 'Photo Gallery', href: '/community/gallery' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'Volunteer', href: '/volunteer' },
];

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = '' }) => (
  <Link 
    to={href} 
    className={cn(
      "text-gray-400 hover:text-white transition duration-300 ease-in-out",
      className
    )}
  >
    {children}
  </Link>
);

interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-church-burgundy/25 text-white hover:bg-church-gold hover:text-church-navy transition-all duration-300"
  >
    <Icon size={20} />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-church-navy text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Church Info */}
          <div className="col-span-1 lg:col-span-2">
            {/* Parish Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-church-burgundy/20 flex items-center justify-center">
                <Church size={24} className="text-church-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Musha WeBetania</h3>
                <p className="text-xs text-white/70">Roman Catholic Parish</p>
              </div>
            </div>
            
            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-church-gold">Contact Us</h3>
              <ul className="space-y-4">
                {contactDetails.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="shrink-0 text-church-gold" size={18} />
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:text-white transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <SocialIcon key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-church-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Worship */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-church-gold">Worship & Prayer</h3>
            <ul className="space-y-3">
              {worshipLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Faith & Sacraments */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-church-gold">Faith & Formation</h3>
            <ul className="space-y-3">
              {faithLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/sacraments/baptism">Sacraments →</FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Community Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-church-gold">Our Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-church-gold text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4 text-center">Stay updated with parish activities, events, and announcements.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-church-gold"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-church-gold text-church-navy font-medium rounded-md hover:bg-church-gold/90 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 py-6 border-t border-white/10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Musha WeBetania Parish. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex gap-4 text-sm text-gray-500">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <span className="text-gray-600">|</span>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
