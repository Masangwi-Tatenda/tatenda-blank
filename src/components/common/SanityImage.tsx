import React from 'react';
import { urlFor } from '@/lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { cn } from '@/lib/utils';

interface SanityImageProps {
  image: SanityImageSource;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
  quality?: number;
}

const SanityImage: React.FC<SanityImageProps> = ({
  image,
  alt = '',
  width,
  height,
  className,
  fit = 'max',
  quality = 80,
}) => {
  if (!image) {
    return (
      <div className={cn("bg-gray-200 flex items-center justify-center", className)}>
        <span className="text-gray-400 text-sm">No image</span>
      </div>
    );
  }

  let imageBuilder = urlFor(image).quality(quality);

  if (width) {
    imageBuilder = imageBuilder.width(width);
  }

  if (height) {
    imageBuilder = imageBuilder.height(height);
  }

  if (fit) {
    imageBuilder = imageBuilder.fit(fit);
  }

  return (
    <img
      src={imageBuilder.url()}
      alt={alt || (image as any).alt || ''}
      className={className}
      loading="lazy"
    />
  );
};

export default SanityImage;
