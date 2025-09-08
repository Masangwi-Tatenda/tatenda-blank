import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import SanityImage from '@/components/common/SanityImage';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface EnhancedStaffCardProps {
  name: string;
  title: string;
  bio: string;
  category?: string;
  email?: string;
  phone?: string;
  officeHours?: string;
  image?: SanityImageSource | string;
}

const EnhancedStaffCard: React.FC<EnhancedStaffCardProps> = ({ 
  name, 
  title, 
  bio, 
  category,
  email, 
  phone, 
  officeHours, 
  image 
}) => {
  const getCategoryColor = (cat: string = '') => {
    switch (cat.toLowerCase()) {
      case 'clergy': return 'from-church-burgundy to-church-burgundy/90';
      case 'staff': return 'from-church-gold to-church-gold/90';
      case 'council': return 'from-church-navy to-church-navy/90';
      case 'finance': return 'from-gray-600 to-gray-700';
      case 'ministry': return 'from-gray-500 to-gray-600';
      default: return 'from-church-burgundy to-church-burgundy/90';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        {typeof image === 'string' ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : image ? (
          <SanityImage
            image={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-church-cream to-gray-100 flex items-center justify-center">
            <div className="text-6xl font-bold text-church-burgundy/20">
              {name.charAt(0)}
            </div>
          </div>
        )}
        {category && (
          <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(category)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-church-burgundy mb-2 group-hover:text-church-gold transition-colors">
            {name}
          </h3>
          <p className="text-church-navy font-semibold text-sm bg-church-cream px-3 py-1 rounded-full inline-block">
            {title}
          </p>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
          {bio}
        </p>
        
        {/* Contact Information */}
        {(email || phone || officeHours) && (
          <div className="space-y-2 pt-4 border-t border-church-cream">
            {email && (
              <div className="flex items-center gap-2 group/item">
                <Mail className="w-4 h-4 text-church-burgundy group-hover/item:text-church-gold transition-colors" />
                <a 
                  href={`mailto:${email}`} 
                  className="text-gray-600 hover:text-church-burgundy text-sm transition-colors"
                >
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2 group/item">
                <Phone className="w-4 h-4 text-church-burgundy group-hover/item:text-church-gold transition-colors" />
                <a 
                  href={`tel:${phone}`} 
                  className="text-gray-600 hover:text-church-burgundy text-sm transition-colors"
                >
                  {phone}
                </a>
              </div>
            )}
            {officeHours && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-church-burgundy" />
                <span className="text-gray-600 text-sm">{officeHours}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedStaffCard;