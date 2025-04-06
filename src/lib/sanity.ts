
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create a Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: true, // Use the Content Delivery Network for faster image loading
  token: import.meta.env.VITE_SANITY_TOKEN, // Optional: Only needed for write operations
});

// Set up image URL builder
const builder = imageUrlBuilder(client);

// Helper function to get image URLs from Sanity
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types for our Sanity content
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface HeroSlide {
  _key: string;
  title: string;
  subtitle: string;
  image: SanityImage;
}

export interface EventItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: SanityImage;
  slug: {
    current: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  author: string;
  publishedAt: string;
  excerpt: string;
  mainImage: SanityImage;
  slug: {
    current: string;
  };
  body: any[]; // This would be a Portable Text array
}

export interface DocumentItem {
  _id: string;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  downloadUrl: string;
}

// Sample queries to use with the Sanity client
export const queries = {
  heroSlides: `*[_type == "heroSlide"] | order(order asc) {
    _key,
    title,
    subtitle,
    "image": image
  }`,
  
  featuredEvents: `*[_type == "event" && featured == true] | order(date asc) [0...3] {
    _id,
    title,
    description,
    date,
    location,
    "image": mainImage,
    "slug": slug
  }`,
  
  allEvents: `*[_type == "event"] | order(date asc) {
    _id,
    title,
    description,
    date,
    location,
    "image": mainImage,
    "slug": slug
  }`,
  
  recentBlogPosts: `*[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    author,
    publishedAt,
    excerpt,
    "mainImage": mainImage,
    "slug": slug
  }`,
  
  allBlogPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    author,
    publishedAt,
    excerpt,
    "mainImage": mainImage,
    "slug": slug
  }`,
  
  singleBlogPost: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    author,
    publishedAt,
    body,
    "mainImage": mainImage
  }`,
  
  churchDocuments: `*[_type == "document"] | order(year desc) {
    _id,
    title,
    category,
    type,
    year,
    description,
    downloadUrl
  }`,
};
