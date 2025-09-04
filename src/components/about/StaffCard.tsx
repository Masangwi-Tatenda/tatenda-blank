
import React from 'react';
import SanityImage from '@/components/common/SanityImage';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface StaffCardProps {
  name: string;
  title: string;
  bio: string;
  image?: SanityImageSource | string;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, title, bio, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-64 overflow-hidden">
        {typeof image === 'string' ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : image ? (
          <SanityImage
            image={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy mb-1">{name}</h3>
        <p className="text-gray-600 font-medium mb-3">{title}</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default StaffCard;
