
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { client, queries, HeroSlide, EventItem, BlogPost, DocumentItem } from '@/lib/sanity';

interface SanityContextType {
  heroSlides: HeroSlide[];
  featuredEvents: EventItem[];
  recentBlogPosts: BlogPost[];
  churchDocuments: DocumentItem[];
  isLoading: boolean;
  error: string | null;
  fetchSinglePost: (slug: string) => Promise<BlogPost | null>;
  fetchAllEvents: () => Promise<EventItem[] | null>;
  fetchAllPosts: () => Promise<BlogPost[] | null>;
  fetchAllDocuments: () => Promise<DocumentItem[] | null>;
}

const SanityContext = createContext<SanityContextType | undefined>(undefined);

export const useSanity = () => {
  const context = useContext(SanityContext);
  if (context === undefined) {
    throw new Error('useSanity must be used within a SanityProvider');
  }
  return context;
};

interface SanityProviderProps {
  children: ReactNode;
}

export const SanityProvider: React.FC<SanityProviderProps> = ({ children }) => {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<EventItem[]>([]);
  const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([]);
  const [churchDocuments, setChurchDocuments] = useState<DocumentItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        const [slides, events, posts, documents] = await Promise.all([
          client.fetch(queries.heroSlides),
          client.fetch(queries.featuredEvents),
          client.fetch(queries.recentBlogPosts),
          client.fetch(queries.churchDocuments),
        ]);

        setHeroSlides(slides || []);
        setFeaturedEvents(events || []);
        setRecentBlogPosts(posts || []);
        setChurchDocuments(documents || []);
      } catch (err) {
        console.error('Error fetching Sanity data:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Function to fetch a single blog post by slug
  const fetchSinglePost = async (slug: string): Promise<BlogPost | null> => {
    try {
      return await client.fetch(queries.singleBlogPost(slug));
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError('Failed to load the blog post. Please try again later.');
      return null;
    }
  };

  // Function to fetch all events
  const fetchAllEvents = async (): Promise<EventItem[] | null> => {
    try {
      return await client.fetch(queries.allEvents);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to load events. Please try again later.');
      return null;
    }
  };

  // Function to fetch all blog posts
  const fetchAllPosts = async (): Promise<BlogPost[] | null> => {
    try {
      return await client.fetch(queries.allBlogPosts);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
      return null;
    }
  };

  // Function to fetch all church documents
  const fetchAllDocuments = async (): Promise<DocumentItem[] | null> => {
    try {
      return await client.fetch(queries.churchDocuments);
    } catch (err) {
      console.error('Error fetching church documents:', err);
      setError('Failed to load documents. Please try again later.');
      return null;
    }
  };

  return (
    <SanityContext.Provider
      value={{
        heroSlides,
        featuredEvents,
        recentBlogPosts,
        churchDocuments,
        isLoading,
        error,
        fetchSinglePost,
        fetchAllEvents,
        fetchAllPosts,
        fetchAllDocuments,
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};
