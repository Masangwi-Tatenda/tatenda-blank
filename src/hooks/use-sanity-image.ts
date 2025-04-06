
import { useState, useEffect } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/lib/sanity';
import { useIsMobile } from './use-mobile';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
  highResDensity?: number; // For high-res displays like Retina
}

/**
 * Custom hook for responsive Sanity image loading with options
 * @param source Sanity image source
 * @param options Image sizing and quality options
 * @returns Responsive image URL and loading state
 */
export function useSanityImage(source: SanityImageSource | null | undefined, options: ImageOptions = {}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Default options
  const defaultOptions: ImageOptions = {
    width: isMobile ? 600 : 1200,
    quality: 80,
    fit: 'max',
    highResDensity: window.devicePixelRatio || 1,
  };

  // Merged options
  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    if (!source) {
      setImageUrl(null);
      return;
    }

    // Create the image URL with responsive options
    let builder = urlFor(source)
      .width(Math.round(mergedOptions.width! * Math.min(mergedOptions.highResDensity!, 2)))
      .quality(mergedOptions.quality!);

    if (mergedOptions.height) {
      builder = builder.height(Math.round(mergedOptions.height * Math.min(mergedOptions.highResDensity!, 2)));
    }

    if (mergedOptions.fit) {
      builder = builder.fit(mergedOptions.fit);
    }

    // Set the formatted URL
    setImageUrl(builder.url());
  }, [source, isMobile, mergedOptions.width, mergedOptions.height, mergedOptions.quality, mergedOptions.fit]);

  return { imageUrl, isLoading: !imageUrl && !!source };
}
