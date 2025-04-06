
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
  time: string;
  location: string;
  category: string;
  recurring?: string;
  organizer?: string;
  contactEmail?: string;
  attendees?: number;
  featured?: boolean;
  registrationRequired?: boolean;
  image: SanityImage;
  tags?: string[];
  attachments?: {
    _key: string;
    name: string;
    url: string;
  }[];
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
  categories?: string[];
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

export interface LiturgicalSeason {
  _id: string;
  name: string;
  start: string;
  end: string;
  color: string;
  description: string;
  significance: string;
  readings: string;
  traditions: string;
}

export interface FeastDay {
  _id: string;
  name: string;
  date: string;
  type: string;
  color: string;
  description: string;
}

export interface CatholicSchool {
  _id: string;
  name: string;
  location: string;
  level: string;
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
  description: string;
  image?: SanityImage;
}

// Sample queries to use with the Sanity client
export const queries = {
  heroSlides: `*[_type == "heroSlide"] | order(order asc) {
    _key,
    title,
    subtitle,
    "image": image
  }`,
  
  featuredEvents: `*[_type == "event" && featured == true] | order(date asc) [0...4] {
    _id,
    title,
    description,
    date,
    time,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    attendees,
    featured,
    registrationRequired,
    "image": mainImage,
    tags,
    attachments,
    "slug": slug
  }`,
  
  allEvents: `*[_type == "event"] | order(date asc) {
    _id,
    title,
    description,
    date,
    time,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    attendees,
    featured,
    registrationRequired,
    "image": mainImage,
    tags,
    attachments,
    "slug": slug
  }`,
  
  singleEvent: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
    _id,
    title,
    description,
    date,
    time,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    attendees,
    featured,
    registrationRequired,
    "image": mainImage,
    tags,
    attachments
  }`,
  
  recentBlogPosts: `*[_type == "post"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    author,
    publishedAt,
    excerpt,
    "mainImage": mainImage,
    categories,
    "slug": slug
  }`,
  
  allBlogPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    author,
    publishedAt,
    excerpt,
    "mainImage": mainImage,
    categories,
    "slug": slug
  }`,
  
  singleBlogPost: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    author,
    publishedAt,
    body,
    categories,
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
  
  liturgicalSeasons: `*[_type == "liturgicalSeason"] | order(start asc) {
    _id,
    name,
    start,
    end,
    color,
    description,
    significance,
    readings,
    traditions
  }`,
  
  feastDays: `*[_type == "feastDay"] | order(date asc) {
    _id,
    name,
    date,
    type,
    color,
    description
  }`,
  
  catholicSchools: `*[_type == "catholicSchool"] | order(name asc) {
    _id,
    name,
    location,
    level,
    website,
    contactEmail,
    contactPhone,
    description,
    image
  }`,
};

export default client;
