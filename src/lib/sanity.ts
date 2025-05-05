
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { groq } from '@sanity/client';

// Types for Sanity data
export interface HeroSlide {
  _key: string;
  title: string;
  subtitle?: string;
  image: any;
  cta?: { text: string; link: string };
}

export interface EventItem {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  description?: string;
  mainImage?: any;
  body?: any[];
}

export interface YouthEvent extends EventItem {
  ageGroup?: string;
  registration?: { required: boolean; link?: string };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author?: { name: string; image?: any };
  mainImage?: any;
  excerpt?: string;
  categories?: { title: string }[];
  body?: any[];
}

export interface DocumentItem {
  _id: string;
  title: string;
  slug: { current: string };
  documentType: string;
  publishedAt: string;
  description?: string;
  file?: { asset?: { url?: string } };
}

export interface LiturgicalSeason {
  _id: string;
  title: string;
  slug: { current: string };
  startDate: string;
  endDate: string;
  color: string;
  description?: string;
  mainImage?: any;
  body?: any[];
}

export interface FeastDay {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  description?: string;
  mainImage?: any;
  body?: any[];
}

export interface Ministry {
  _id: string;
  title: string;
  slug: { current: string };
  leader?: string;
  contactEmail?: string;
  contactPhone?: string;
  meetingDay?: string;
  meetingTime?: string;
  meetingLocation?: string;
  mainImage?: any;
  description?: string;
  body?: any[];
}

export interface ParishTeamMember {
  _id: string;
  name: string;
  slug: { current: string };
  role: string;
  image?: any;
  bio?: string;
  contactEmail?: string;
  contactPhone?: string;
  order?: number;
}

export interface BulletinItem {
  _id: string;
  title: string;
  date: string;
  file?: { asset?: { url?: string } };
}

export interface HomilyItem {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  priest?: string;
  scripture?: string;
  audioFile?: { asset?: { url?: string } };
  transcript?: any[];
}

export interface MassRecording {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  type: string;
  celebrant?: string;
  videoUrl?: string;
  description?: string;
}

export interface Prayer {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  text?: any[];
  source?: string;
}

export interface Saint {
  _id: string;
  name: string;
  slug: { current: string };
  feastDay: string;
  patronOf?: string[];
  bio?: any[];
  image?: any;
}

export interface PhotoGallery {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  description?: string;
  images?: any[];
}

export interface DailyReading {
  _id: string;
  date: string;
  firstReading?: { reference: string; text: any[] };
  psalm?: { reference: string; text: any[] };
  secondReading?: { reference: string; text: any[] };
  gospel?: { reference: string; text: any[] };
  reflection?: any[];
}

export interface ChurchStat {
  _id: string;
  label: string;
  value: number;
  description?: string;
  icon?: string;
  color?: string;
  order?: number;
}

export interface WelcomeSection {
  _id: string;
  title: string;
  subtitle?: string;
  description?: any[];
  mainImage?: any;
  buttonText?: string;
  buttonLink?: string;
}

export interface CoreFaithItem {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
  link?: string;
  order?: number;
}

export interface QuickLink {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
  href: string;
  color?: string;
  order?: number;
}

export interface WeeklyScripture {
  _id: string;
  title: string;
  reference: string;
  text?: any[];
  reflection?: any[];
  date: string;
}

export interface BibleStudyResource {
  _id: string;
  title: string;
  description?: string;
  link?: string;
  resourceType?: string;
  category?: string;
  image?: any;
}

export interface AboutPage {
  _id: string;
  title: string;
  subtitle?: string;
  history?: any[];
  mission?: any[];
  vision?: any[];
  mainImage?: any;
  galleryImages?: any[];
}

export interface ContactPage {
  _id: string;
  title: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  officeHours?: string;
  mapLocation?: { lat: number; lng: number };
  contactForm?: { enabled: boolean; recipient?: string };
}

export interface MassSchedule {
  _id: string;
  weekdayMasses?: { day: string; time: string; language?: string; location?: string }[];
  weekendMasses?: { day: string; time: string; language?: string; location?: string }[];
  holyDays?: { title: string; date: string; time: string }[];
  confessionTimes?: { day: string; time: string }[];
  additionalInfo?: string;
}

export interface YouthMinistryPage {
  _id: string;
  title: string;
  subtitle?: string;
  overview?: any[];
  programs?: { title: string; description: string; ageGroup: string; meetingInfo?: string }[];
  leadersInfo?: any[];
  mainImage?: any;
  galleryImages?: any[];
}

export interface CatholicTeachingPage {
  _id: string;
  title: string;
  subtitle?: string;
  sections?: { title: string; content: any[] }[];
  resources?: { title: string; link: string; description?: string }[];
}

export interface Sacrament {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  description?: any[];
  requirements?: any[];
  preparationProcess?: any[];
  requestForm?: { enabled: boolean; recipient?: string };
  FAQs?: { question: string; answer: string }[];
  image?: any;
}

export interface PageContent {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle?: string;
  mainImage?: any;
  body?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Initialize Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'cfnd6oxb',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2025-04-10',
  useCdn: true,
});

// For image handling
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Queries for fetching data
export const queries = {
  // Home page content
  heroSlides: groq`*[_type == "heroSlide"] | order(order asc)`,
  welcomeSection: groq`*[_type == "welcomeSection"][0]`,
  churchStats: groq`*[_type == "churchStat"] | order(order asc)`,
  coreFaithItems: groq`*[_type == "coreFaith"] | order(order asc)`,
  quickLinks: groq`*[_type == "quickLink"] | order(order asc)`,
  currentWeeklyScripture: groq`*[_type == "weeklyScripture"] | order(date desc)[0]`,
  featuredBibleStudyResources: groq`*[_type == "bibleStudyResource"][0...3]`,
  
  // Event queries
  featuredEvents: groq`*[_type == "event" && defined(date) && dateTime(date) >= dateTime(now())] | order(date asc)[0...3]`,
  upcomingEvents: groq`*[_type == "event" && defined(date) && dateTime(date) >= dateTime(now())] | order(date asc)[0...10]`,
  allEvents: groq`*[_type == "event"] | order(date desc)`,
  singleEvent: (slug) => groq`*[_type == "event" && slug.current == "${slug}"][0]`,
  
  // Blog queries
  recentBlogPosts: groq`*[_type == "post"] | order(publishedAt desc)[0...3]`,
  allBlogPosts: groq`*[_type == "post"] | order(publishedAt desc)`,
  singleBlogPost: (slug) => groq`*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    "author": author->{name, image, bio}
  }`,
  
  // Youth ministry
  featuredYouthEvents: groq`*[_type == "youthEvent" && defined(date) && dateTime(date) >= dateTime(now())] | order(date asc)[0...3]`,
  allYouthEvents: groq`*[_type == "youthEvent"] | order(date desc)`,
  singleYouthEvent: (slug) => groq`*[_type == "youthEvent" && slug.current == "${slug}"][0]`,
  youthMinistryPage: groq`*[_type == "youthMinistryPage"][0]`,
  
  // Parish organization
  ministries: groq`*[_type == "ministry"] | order(title asc)`,
  allMinistries: groq`*[_type == "ministry"] | order(title asc)`,
  singleMinistry: (slug) => groq`*[_type == "ministry" && slug.current == "${slug}"][0]`,
  
  parishTeam: groq`*[_type == "parishTeam"] | order(order asc)`,
  allTeamMembers: groq`*[_type == "parishTeam"] | order(order asc)`,
  singleTeamMember: (slug) => groq`*[_type == "parishTeam" && slug.current == "${slug}"][0]`,
  
  // Media content
  recentMasses: groq`*[_type == "mass"] | order(date desc)[0...4]`,
  allMasses: groq`*[_type == "mass"] | order(date desc)`,
  singleMass: (slug) => groq`*[_type == "mass" && slug.current == "${slug}"][0]`,
  
  recentPhotoGalleries: groq`*[_type == "photoGallery"] | order(date desc)[0...3]`,
  allGalleries: groq`*[_type == "photoGallery"] | order(date desc)`,
  singleGallery: (slug) => groq`*[_type == "photoGallery" && slug.current == "${slug}"][0]`,
  
  recentHomilies: groq`*[_type == "homily"] | order(date desc)[0...4]`,
  allHomilies: groq`*[_type == "homily"] | order(date desc)`,
  singleHomily: (slug) => groq`*[_type == "homily" && slug.current == "${slug}"][0]`,
  
  recentBulletins: groq`*[_type == "bulletin"] | order(date desc)[0...4]`,
  allBulletins: groq`*[_type == "bulletin"] | order(date desc)`,
  
  // Faith resources
  featuredPrayers: groq`*[_type == "prayer"][0...4]`,
  allPrayers: groq`*[_type == "prayer"] | order(title asc)`,
  singlePrayer: (slug) => groq`*[_type == "prayer" && slug.current == "${slug}"][0]`,
  
  recentReadings: groq`*[_type == "dailyReading"] | order(date desc)[0...7]`,
  allReadings: groq`*[_type == "dailyReading"] | order(date desc)`,
  singleReading: (date) => groq`*[_type == "dailyReading" && date == "${date}"][0]`,
  
  churchDocuments: groq`*[_type == "document"] | order(publishedAt desc)`,
  allDocuments: groq`*[_type == "document"] | order(publishedAt desc)`,
  singleDocument: (slug) => groq`*[_type == "document" && slug.current == "${slug}"][0]`,
  
  // Liturgical content
  liturgicalSeasons: groq`*[_type == "liturgicalSeason"] | order(startDate asc)`,
  currentFeastDays: groq`*[_type == "feastDay"] | order(date asc)[0...5]`,
  featuredSaints: groq`*[_type == "saint"][0...4]`,
  allSaints: groq`*[_type == "saint"] | order(feastDay asc)`,
  singleSaint: (slug) => groq`*[_type == "saint" && slug.current == "${slug}"][0]`,
  
  // Common pages
  aboutPage: groq`*[_type == "aboutPage"][0]`,
  contactPage: groq`*[_type == "contactPage"][0]`,
  massSchedule: groq`*[_type == "massSchedule"][0]`,
  catholicTeachingPage: groq`*[_type == "catholicTeachingPage"][0]`,
  
  // Sacraments
  allSacraments: groq`*[_type == "sacrament"] | order(order asc)`,
  singleSacrament: (slug) => groq`*[_type == "sacrament" && slug.current == "${slug}"][0]`,
  
  // Generic page content
  pageBySlug: (slug) => groq`*[_type == "pageContent" && slug.current == "${slug}"][0]`,
};

console.log(`Sanity client initialized with project ID: ${import.meta.env.VITE_SANITY_PROJECT_ID || 'cfnd6oxb'}`);

// Test connection function - can be used to verify Sanity connection
export const testSanityConnection = async () => {
  try {
    const result = await client.fetch(groq`*[_type == "sanity.imageAsset"][0...1]`);
    console.log("Sanity connection test:", result ? "Successful" : "Failed (no data)");
    return !!result;
  } catch (error) {
    console.error("Sanity connection test failed:", error);
    return false;
  }
};
