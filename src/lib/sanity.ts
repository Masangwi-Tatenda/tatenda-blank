import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create a Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2025-04-10',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

// Set up image URL builder
const builder = imageUrlBuilder(client);

// Helper function to get image URLs from Sanity
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Common Types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanityFile {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// Content Types
export interface HeroSlide {
  _key: string;
  title: string;
  subtitle: string;
  image: SanityImage;
  order: number;
  cta?: {
    text: string;
    link: string;
  };
}

export interface EventItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime?: string;
  location: string;
  category: string;
  recurring?: string;
  organizer?: string;
  contactEmail?: string;
  contactPhone?: string;
  featured?: boolean;
  registrationRequired?: boolean;
  registrationLink?: string;
  mainImage: SanityImage;
  tags?: string[];
  attachments?: {
    _key: string;
    name: string;
    file: SanityFile;
    description?: string;
  }[];
  body: any[];
  slug: SanitySlug;
}

export interface BlogPost {
  _id: string;
  title: string;
  author: {
    _ref: string;
    name: string;
    image?: SanityImage;
  };
  publishedAt: string;
  excerpt: string;
  mainImage: SanityImage;
  categories?: string[];
  slug: SanitySlug;
  body: any[];
}

export interface DocumentItem {
  _id: string;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  file?: SanityFile;
  downloadUrl?: string;
  summary?: any[];
  slug: SanitySlug;
}

export interface LiturgicalSeason {
  _id: string;
  name: string;
  start: string;
  end: string;
  color: string;
  image?: SanityImage;
  description: string;
  significance: string;
  readings: string;
  traditions: string;
  content: any[];
  slug: SanitySlug;
}

export interface FeastDay {
  _id: string;
  name: string;
  date: string;
  type: string;
  color: string;
  description: string;
  readings?: {
    title: string;
    citation: string;
    text: string;
  }[];
  content: any[];
  slug: SanitySlug;
}

export interface Ministry {
  _id: string;
  name: string;
  description: string;
  category: string;
  image?: SanityImage;
  leaders?: {
    name: string;
    role: string;
    email?: string;
    phone?: string;
  }[];
  meetingTime?: string;
  meetingLocation?: string;
  requirements?: string;
  howtojoin?: string;
  content: any[];
  slug: SanitySlug;
}

export interface ParishTeamMember {
  _id: string;
  name: string;
  role: string;
  category: string;
  orderRank: number;
  image?: SanityImage;
  bio: string;
  email?: string;
  phone?: string;
  officeHours?: string;
  content?: any[];
  slug: SanitySlug;
}

export interface BulletinItem {
  _id: string;
  title: string;
  date: string;
  file: SanityFile;
  description?: string;
  thumbnail?: SanityImage;
}

export interface HomilyItem {
  _id: string;
  title: string;
  preacher: {
    _ref: string;
    name: string;
    image?: SanityImage;
  };
  date: string;
  readings?: {
    title: string;
    citation: string;
  }[];
  audioFile?: SanityFile;
  videoUrl?: string;
  liturgicalSeason?: string;
  transcript?: any[];
  slug: SanitySlug;
}

export interface MassRecording {
  _id: string;
  title: string;
  date: string;
  celebrant?: {
    _ref: string;
    name: string;
  };
  type: string;
  videoUrl: string;
  thumbnail?: SanityImage;
  description?: string;
  readings?: {
    title: string;
    citation: string;
  }[];
  slug: SanitySlug;
}

export interface Prayer {
  _id: string;
  title: string;
  category: string;
  text: any[];
  origin?: string;
  isNovena: boolean;
  novenaStructure?: {
    day: number;
    intention: string;
    prayers: any[];
  }[];
  audioFile?: SanityFile;
  image?: SanityImage;
  slug: SanitySlug;
}

export interface Saint {
  _id: string;
  name: string;
  feastDay: string;
  lifeYears?: string;
  region?: string;
  patronageOf?: string[];
  image?: SanityImage;
  description: string;
  biography?: any[];
  quote?: string;
  slug: SanitySlug;
}

export interface PhotoGallery {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  coverImage?: SanityImage;
  category?: string;
  images: {
    _key: string;
    caption?: string;
    alt?: string;
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }[];
  slug: SanitySlug;
}

export interface YouthEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  ageGroup: string;
  coordinator?: {
    _ref: string;
    name: string;
  };
  contactEmail?: string;
  contactPhone?: string;
  registrationRequired: boolean;
  registrationLink?: string;
  featured: boolean;
  mainImage?: SanityImage;
  details?: any[];
  slug: SanitySlug;
}

export interface DailyReading {
  _id: string;
  date: string;
  liturgicalSeason?: string;
  liturgicalColor?: string;
  readings: {
    title: string;
    citation: string;
    text: string;
  }[];
  reflection?: any[];
  saint?: {
    name: string;
    feast: boolean;
    description?: string;
  };
}

export interface ChurchStat {
  _id: string;
  label: string;
  value: number;
  description?: string;
  icon?: string;
  order: number;
}

// New interfaces for our added schemas
export interface WelcomeSection {
  _id: string;
  title: string;
  subtitle?: string;
  description: any[];
  mission?: string;
  vision?: string;
  quote?: string;
  quoteAuthor?: string;
  quoteAuthorTitle?: string;
  image?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface CoreFaithItem {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  link?: string;
  order?: number;
  content?: any[];
}

export interface QuickLink {
  _id: string;
  title: string;
  description?: string;
  href: string;
  icon: string;
  color: string;
  order?: number;
}

export interface WeeklyScripture {
  _id: string;
  verse: string;
  text: string;
  reflection?: string;
  week: string;
  active: boolean;
}

export interface BibleStudyResource {
  _id: string;
  title: string;
  description?: string;
  link?: string;
  resourceType?: string;
  featured: boolean;
  content?: any[];
  thumbnail?: SanityImage;
}

// Sample queries to use with the Sanity client
export const queries = {
  churchDocuments: `*[_type == "churchDocument"]`,
  // Hero and Site Content
  heroSlides: `*[_type == "heroSlide"] | order(order asc) {
    _key,
    title,
    subtitle,
    image,
    order,
    cta
  }`,
  
  churchStats: `*[_type == "churchStat"] | order(order asc) {
    _id,
    label,
    value,
    description,
    icon,
    order
  }`,
  
  // Events and Schedule
  featuredEvents: `*[_type == "event" && featured == true] | order(date asc) [0...4] {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    contactPhone,
    featured,
    registrationRequired,
    registrationLink,
    mainImage,
    tags,
    attachments,
    slug
  }`,
  
  upcomingEvents: `*[_type == "event" && date >= now()] | order(date asc) [0...10] {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    category,
    slug,
    mainImage
  }`,
  
  allEvents: `*[_type == "event"] | order(date desc) {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    contactPhone,
    featured,
    registrationRequired,
    registrationLink,
    mainImage,
    tags,
    attachments,
    slug
  }`,
  
  singleEvent: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    category,
    recurring,
    organizer,
    contactEmail,
    contactPhone,
    featured,
    registrationRequired,
    registrationLink,
    mainImage,
    tags,
    attachments,
    body,
    slug
  }`,

  featuredYouthEvents: `*[_type == "youthEvent" && featured == true] | order(date asc) [0...4] {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    ageGroup,
    coordinator->{name},
    contactEmail,
    contactPhone,
    registrationRequired,
    registrationLink,
    featured,
    mainImage,
    slug
  }`,
  
  allYouthEvents: `*[_type == "youthEvent"] | order(date desc) {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    ageGroup,
    coordinator->{name},
    contactEmail,
    contactPhone,
    registrationRequired,
    registrationLink,
    featured,
    mainImage,
    slug
  }`,
  
  singleYouthEvent: (slug: string) => `*[_type == "youthEvent" && slug.current == "${slug}"][0] {
    _id,
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    ageGroup,
    coordinator->{
      _id,
      name,
      role,
      image,
      email,
      phone
    },
    contactEmail,
    contactPhone,
    registrationRequired,
    registrationLink,
    featured,
    mainImage,
    details,
    slug
  }`,
  
  recentMasses: `*[_type == "mass"] | order(date desc) [0...6] {
    _id,
    title,
    date,
    celebrant->{name},
    type,
    videoUrl,
    thumbnail,
    slug
  }`,
  
  allMasses: `*[_type == "mass"] | order(date desc) {
    _id,
    title,
    date,
    celebrant->{name},
    type,
    videoUrl,
    thumbnail,
    description,
    readings,
    slug
  }`,
  
  singleMass: (slug: string) => `*[_type == "mass" && slug.current == "${slug}"][0] {
    _id,
    title,
    date,
    celebrant->{
      _id,
      name,
      role,
      image
    },
    type,
    videoUrl,
    thumbnail,
    description,
    readings,
    slug
  }`,
  
  // Blog and Media
  recentBlogPosts: `*[_type == "post"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    author->{name, image},
    publishedAt,
    excerpt,
    mainImage,
    categories,
    slug
  }`,
  
  allBlogPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    author->{name, image},
    publishedAt,
    excerpt,
    mainImage,
    categories,
    slug
  }`,
  
  singleBlogPost: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    author->{
      name,
      image,
      bio
    },
    publishedAt,
    body,
    categories,
    mainImage,
    slug
  }`,
  
  recentPhotoGalleries: `*[_type == "photoGallery"] | order(date desc) [0...6] {
    _id,
    title,
    description,
    date,
    coverImage,
    category,
    slug
  }`,
  
  allGalleries: `*[_type == "photoGallery"] | order(date desc) {
    _id,
    title,
    description,
    date,
    coverImage,
    category,
    slug
  }`,
  
  singleGallery: (slug: string) => `*[_type == "photoGallery" && slug.current == "${slug}"][0] {
    _id,
    title,
    description,
    date,
    coverImage,
    category,
    images,
    slug
  }`,
  
  recentHomilies: `*[_type == "homily"] | order(date desc) [0...6] {
    _id,
    title,
    preacher->{name, image},
    date,
    readings,
    audioFile,
    videoUrl,
    liturgicalSeason,
    slug
  }`,
  
  allHomilies: `*[_type == "homily"] | order(date desc) {
    _id,
    title,
    preacher->{name, image},
    date,
    readings,
    audioFile,
    videoUrl,
    liturgicalSeason,
    slug
  }`,
  
  singleHomily: (slug: string) => `*[_type == "homily" && slug.current == "${slug}"][0] {
    _id,
    title,
    preacher->{
      _id,
      name,
      role,
      image,
      bio
    },
    date,
    readings,
    audioFile,
    videoUrl,
    liturgicalSeason,
    transcript,
    slug
  }`,
  
  recentBulletins: `*[_type == "bulletin"] | order(date desc) [0...6] {
    _id,
    title,
    date,
    file,
    description,
    thumbnail
  }`,
  
  allBulletins: `*[_type == "bulletin"] | order(date desc) {
    _id,
    title,
    date,
    file,
    description,
    thumbnail
  }`,
  
  // Faith Resources
  featuredPrayers: `*[_type == "prayer"] | order(_createdAt desc) [0...6] {
    _id,
    title,
    category,
    text,
    origin,
    isNovena,
    audioFile,
    image,
    slug
  }`,
  
  allPrayers: `*[_type == "prayer"] | order(title asc) {
    _id,
    title,
    category,
    text,
    origin,
    isNovena,
    audioFile,
    image,
    slug
  }`,
  
  singlePrayer: (slug: string) => `*[_type == "prayer" && slug.current == "${slug}"][0] {
    _id,
    title,
    category,
    text,
    origin,
    isNovena,
    novenaStructure,
    audioFile,
    image,
    slug
  }`,
  
  recentReadings: `*[_type == "dailyReading" && date >= now()] | order(date asc) [0...1] {
    _id,
    date,
    liturgicalSeason,
    liturgicalColor,
    readings,
    reflection,
    saint
  }`,
  
  allReadings: `*[_type == "dailyReading"] | order(date desc) {
    _id,
    date,
    liturgicalSeason,
    liturgicalColor,
    readings,
    reflection,
    saint
  }`,
  
  singleReading: (date: string) => `*[_type == "dailyReading" && date == "${date}"][0] {
    _id,
    date,
    liturgicalSeason,
    liturgicalColor,
    readings,
    reflection,
    saint
  }`,
  
  allDocuments: `*[_type == "document"] | order(year desc) {
    _id,
    title,
    category,
    type,
    year,
    description,
    file,
    downloadUrl,
    slug
  }`,
  
  singleDocument: (slug: string) => `*[_type == "document" && slug.current == "${slug}"][0] {
    _id,
    title,
    category,
    type,
    year,
    description,
    file,
    downloadUrl,
    summary,
    slug
  }`,
  
  // Liturgical Calendar
  liturgicalSeasons: `*[_type == "liturgicalSeason"] | order(start asc) {
    _id,
    name,
    start,
    end,
    color,
    image,
    description,
    significance,
    readings,
    traditions,
    slug
  }`,
  
  currentFeastDays: `*[_type == "feastDay" && date >= now() && date <= dateTime(now() + 60*60*24*30)] | order(date asc) [0...6] {
    _id,
    name,
    date,
    type,
    color,
    description,
    slug
  }`,
  
  featuredSaints: `*[_type == "saint"] | order(feastDay asc) [0...6] {
    _id,
    name,
    feastDay,
    lifeYears,
    region,
    patronageOf,
    image,
    description,
    quote,
    slug
  }`,
  
  allSaints: `*[_type == "saint"] | order(feastDay asc) {
    _id,
    name,
    feastDay,
    lifeYears,
    region,
    patronageOf,
    image,
    description,
    quote,
    slug
  }`,
  
  singleSaint: (slug: string) => `*[_type == "saint" && slug.current == "${slug}"][0] {
    _id,
    name,
    feastDay,
    lifeYears,
    region,
    patronageOf,
    image,
    description,
    biography,
    quote,
    slug
  }`,
  
  // Parish Organization
  parishTeam: `*[_type == "parishTeam"] | order(orderRank asc) {
    _id,
    name,
    role,
    category,
    orderRank,
    image,
    bio,
    email,
    phone,
    officeHours,
    slug
  }`,
  
  allTeamMembers: `*[_type == "parishTeam"] | order(category asc, orderRank asc) {
    _id,
    name,
    role,
    category,
    orderRank,
    image,
    bio,
    email,
    phone,
    officeHours,
    slug
  }`,
  
  singleTeamMember: (slug: string) => `*[_type == "parishTeam" && slug.current == "${slug}"][0] {
    _id,
    name,
    role,
    category,
    orderRank,
    image,
    bio,
    email,
    phone,
    officeHours,
    content,
    slug
  }`,
  
  ministries: `*[_type == "ministry"] | order(name asc) {
    _id,
    name,
    description,
    category,
    image,
    leaders,
    meetingTime,
    meetingLocation,
    slug
  }`,
  
  allMinistries: `*[_type == "ministry"] | order(category asc, name asc) {
    _id,
    name,
    description,
    category,
    image,
    leaders,
    meetingTime,
    meetingLocation,
    slug
  }`,
  
  singleMinistry: (slug: string) => `*[_type == "ministry" && slug.current == "${slug}"][0] {
    _id,
    name,
    description,
    category,
    image,
    leaders,
    meetingTime,
    meetingLocation,
    requirements,
    howtojoin,
    content,
    slug
  }`,
  
  // Welcome Section
  welcomeSection: `*[_type == "welcomeSection"][0] {
    _id,
    title,
    subtitle,
    description,
    mission,
    vision,
    quote,
    quoteAuthor,
    quoteAuthorTitle,
    image,
    ctaText,
    ctaLink
  }`,

  // Core Faith Items
  coreFaithItems: `*[_type == "coreFaith"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    link,
    order,
    content
  }`,

  // Quick Links
  quickLinks: `*[_type == "quickLink"] | order(order asc) {
    _id,
    title,
    description,
    href,
    icon,
    color,
    order
  }`,

  // Weekly Scripture
  currentWeeklyScripture: `*[_type == "weeklyScripture" && active == true][0] {
    _id,
    verse,
    text,
    reflection,
    week
  }`,

  // Bible Study Resources
  featuredBibleStudyResources: `*[_type == "bibleStudyResource" && featured == true] | order(_createdAt desc) [0...3] {
    _id,
    title,
    description,
    link,
    resourceType,
    featured,
    thumbnail
  }`,
  
  allBibleStudyResources: `*[_type == "bibleStudyResource"] | order(_createdAt desc) {
    _id,
    title,
    description,
    link,
    resourceType,
    featured,
    thumbnail
  }`,
  
  singleBibleStudyResource: (id: string) => `*[_type == "bibleStudyResource" && _id == "${id}"][0] {
    _id,
    title,
    description,
    link,
    resourceType,
    featured,
    content,
    thumbnail
  }`,
};

export default client;
