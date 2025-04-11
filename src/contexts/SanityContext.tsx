import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { client, queries, HeroSlide, EventItem, BlogPost, DocumentItem, LiturgicalSeason, FeastDay, Ministry, ParishTeamMember, BulletinItem, HomilyItem, MassRecording, Prayer, Saint, PhotoGallery, YouthEvent, DailyReading, ChurchStat, WelcomeSection, CoreFaithItem, QuickLink, WeeklyScripture, BibleStudyResource } from '@/lib/sanity';

interface SanityContextType {
  // Common data
  heroSlides: HeroSlide[];
  churchStats: ChurchStat[];
  isLoading: boolean;
  error: string | null;

  // Events and schedule
  featuredEvents: EventItem[];
  upcomingEvents: EventItem[];
  youthEvents: YouthEvent[];
  massRecordings: MassRecording[];

  // Blog and media
  recentBlogPosts: BlogPost[];
  photoGalleries: PhotoGallery[];
  homilies: HomilyItem[];
  bulletins: BulletinItem[];

  // Faith resources
  prayers: Prayer[];
  dailyReadings: DailyReading[];
  churchDocuments: DocumentItem[];

  // Liturgical calendar
  liturgicalSeasons: LiturgicalSeason[];
  feastDays: FeastDay[];
  saints: Saint[];

  // Parish organization
  parishTeam: ParishTeamMember[];
  ministries: Ministry[];

  // New content types
  welcomeSection: WelcomeSection | null;
  coreFaithItems: CoreFaithItem[];
  quickLinks: QuickLink[];
  weeklyScripture: WeeklyScripture | null;
  bibleStudyResources: BibleStudyResource[];

  // Fetch functions
  fetchSingleEvent: (slug: string) => Promise<EventItem | null>;
  fetchSinglePost: (slug: string) => Promise<BlogPost | null>;
  fetchSingleYouthEvent: (slug: string) => Promise<YouthEvent | null>;
  fetchSingleMinistry: (slug: string) => Promise<Ministry | null>;
  fetchSingleTeamMember: (slug: string) => Promise<ParishTeamMember | null>;
  fetchSingleReading: (date: string) => Promise<DailyReading | null>;
  fetchSinglePrayer: (slug: string) => Promise<Prayer | null>;
  fetchSingleSaint: (slug: string) => Promise<Saint | null>;
  fetchSingleGallery: (slug: string) => Promise<PhotoGallery | null>;
  fetchSingleHomily: (slug: string) => Promise<HomilyItem | null>;
  fetchSingleMass: (slug: string) => Promise<MassRecording | null>;
  fetchSingleDocument: (slug: string) => Promise<DocumentItem | null>;

  fetchAllEvents: () => Promise<EventItem[] | null>;
  fetchAllPosts: () => Promise<BlogPost[] | null>;
  fetchAllYouthEvents: () => Promise<YouthEvent[] | null>;
  fetchAllMinistries: () => Promise<Ministry[] | null>;
  fetchAllTeamMembers: () => Promise<ParishTeamMember[] | null>;
  fetchAllReadings: () => Promise<DailyReading[] | null>;
  fetchAllPrayers: () => Promise<Prayer[] | null>;
  fetchAllSaints: () => Promise<Saint[] | null>;
  fetchAllGalleries: () => Promise<PhotoGallery[] | null>;
  fetchAllHomilies: () => Promise<HomilyItem[] | null>;
  fetchAllMasses: () => Promise<MassRecording[] | null>;
  fetchAllDocuments: () => Promise<DocumentItem[] | null>;
  fetchAllBulletins: () => Promise<BulletinItem[] | null>;
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
  // State for all content types
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [churchStats, setChurchStats] = useState<ChurchStat[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<EventItem[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [youthEvents, setYouthEvents] = useState<YouthEvent[]>([]);
  const [massRecordings, setMassRecordings] = useState<MassRecording[]>([]);
  const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([]);
  const [photoGalleries, setPhotoGalleries] = useState<PhotoGallery[]>([]);
  const [homilies, setHomilies] = useState<HomilyItem[]>([]);
  const [bulletins, setBulletins] = useState<BulletinItem[]>([]);
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [dailyReadings, setDailyReadings] = useState<DailyReading[]>([]);
  const [churchDocuments, setChurchDocuments] = useState<DocumentItem[]>([]);
  const [liturgicalSeasons, setLiturgicalSeasons] = useState<LiturgicalSeason[]>([]);
  const [feastDays, setFeastDays] = useState<FeastDay[]>([]);
  const [saints, setSaints] = useState<Saint[]>([]);
  const [parishTeam, setParishTeam] = useState<ParishTeamMember[]>([]);
  const [ministries, setMinistries] = useState<Ministry[]>([]);

  const [welcomeSection, setWelcomeSection] = useState<WelcomeSection | null>(null);
  const [coreFaithItems, setCoreFaithItems] = useState<CoreFaithItem[]>([]);
  const [quickLinks, setQuickLinks] = useState<QuickLink[]>([]);
  const [weeklyScripture, setWeeklyScripture] = useState<WeeklyScripture | null>(null);
  const [bibleStudyResources, setBibleStudyResources] = useState<BibleStudyResource[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        const [
          slides,
          stats,
          fEvents,
          uEvents,
          yEvents,
          masses,
          bPosts,
          galleries,
          hItems,
          bItems,
          pItems,
          readings,
          documents,
          seasons,
          feasts,
          saintItems,
          team,
          ministryItems,
          welcome,
          faithItems,
          links,
          scripture,
          studyResources,
        ] = await Promise.all([
          client.fetch(queries.heroSlides),
          client.fetch(queries.churchStats),
          client.fetch(queries.featuredEvents),
          client.fetch(queries.upcomingEvents),
          client.fetch(queries.featuredYouthEvents),
          client.fetch(queries.recentMasses),
          client.fetch(queries.recentBlogPosts),
          client.fetch(queries.recentPhotoGalleries),
          client.fetch(queries.recentHomilies),
          client.fetch(queries.recentBulletins),
          client.fetch(queries.featuredPrayers),
          client.fetch(queries.recentReadings),
          client.fetch(queries.churchDocuments),
          client.fetch(queries.liturgicalSeasons),
          client.fetch(queries.currentFeastDays),
          client.fetch(queries.featuredSaints),
          client.fetch(queries.parishTeam),
          client.fetch(queries.ministries),
          client.fetch(queries.welcomeSection),
          client.fetch(queries.coreFaithItems),
          client.fetch(queries.quickLinks),
          client.fetch(queries.currentWeeklyScripture),
          client.fetch(queries.featuredBibleStudyResources),
        ]);

        setHeroSlides(slides || []);
        setChurchStats(stats || []);
        setFeaturedEvents(fEvents || []);
        setUpcomingEvents(uEvents || []);
        setYouthEvents(yEvents || []);
        setMassRecordings(masses || []);
        setRecentBlogPosts(bPosts || []);
        setPhotoGalleries(galleries || []);
        setHomilies(hItems || []);
        setBulletins(bItems || []);
        setPrayers(pItems || []);
        setDailyReadings(readings || []);
        setChurchDocuments(documents || []);
        setLiturgicalSeasons(seasons || []);
        setFeastDays(feasts || []);
        setSaints(saintItems || []);
        setParishTeam(team || []);
        setMinistries(ministryItems || []);
        
        setWelcomeSection(welcome || null);
        setCoreFaithItems(faithItems || []);
        setQuickLinks(links || []);
        setWeeklyScripture(scripture || null);
        setBibleStudyResources(studyResources || []);
      } catch (err) {
        console.error('Error fetching Sanity data:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <SanityContext.Provider
      value={{
        heroSlides,
        churchStats,
        isLoading,
        error,
        featuredEvents,
        upcomingEvents,
        youthEvents,
        massRecordings,
        recentBlogPosts,
        photoGalleries,
        homilies,
        bulletins,
        prayers,
        dailyReadings,
        churchDocuments,
        liturgicalSeasons,
        feastDays,
        saints,
        parishTeam,
        ministries,
        welcomeSection,
        coreFaithItems,
        quickLinks,
        weeklyScripture,
        bibleStudyResources,
        fetchSingleEvent: async (slug: string) => client.fetch(queries.singleEvent(slug)),
        fetchSinglePost: async (slug: string) => client.fetch(queries.singleBlogPost(slug)),
        fetchSingleYouthEvent: async (slug: string) => client.fetch(queries.singleYouthEvent(slug)),
        fetchSingleMinistry: async (slug: string) => client.fetch(queries.singleMinistry(slug)),
        fetchSingleTeamMember: async (slug: string) => client.fetch(queries.singleTeamMember(slug)),
        fetchSingleReading: async (date: string) => client.fetch(queries.singleReading(date)),
        fetchSinglePrayer: async (slug: string) => client.fetch(queries.singlePrayer(slug)),
        fetchSingleSaint: async (slug: string) => client.fetch(queries.singleSaint(slug)),
        fetchSingleGallery: async (slug: string) => client.fetch(queries.singleGallery(slug)),
        fetchSingleHomily: async (slug: string) => client.fetch(queries.singleHomily(slug)),
        fetchSingleMass: async (slug: string) => client.fetch(queries.singleMass(slug)),
        fetchSingleDocument: async (slug: string) => client.fetch(queries.singleDocument(slug)),
        fetchAllEvents: async () => client.fetch(queries.allEvents),
        fetchAllPosts: async () => client.fetch(queries.allBlogPosts),
        fetchAllYouthEvents: async () => client.fetch(queries.allYouthEvents),
        fetchAllMinistries: async () => client.fetch(queries.allMinistries),
        fetchAllTeamMembers: async () => client.fetch(queries.allTeamMembers),
        fetchAllReadings: async () => client.fetch(queries.allReadings),
        fetchAllPrayers: async () => client.fetch(queries.allPrayers),
        fetchAllSaints: async () => client.fetch(queries.allSaints),
        fetchAllGalleries: async () => client.fetch(queries.allGalleries),
        fetchAllHomilies: async () => client.fetch(queries.allHomilies),
        fetchAllMasses: async () => client.fetch(queries.allMasses),
        fetchAllDocuments: async () => client.fetch(queries.allDocuments),
        fetchAllBulletins: async () => client.fetch(queries.allBulletins),
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};
