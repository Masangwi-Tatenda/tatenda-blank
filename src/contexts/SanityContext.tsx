import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { client, queries, HeroSlide, EventItem, BlogPost, DocumentItem, LiturgicalSeason, FeastDay, Ministry, ParishTeamMember, BulletinItem, HomilyItem, MassRecording, Prayer, Saint, PhotoGallery, YouthEvent, DailyReading, ChurchStat, WelcomeSection, CoreFaithItem, QuickLink, WeeklyScripture, BibleStudyResource, AboutPage, ContactPage, MassSchedule, YouthMinistryPage, CatholicTeachingPage, Sacrament, PageContent, LiturgicalCalendar } from '@/lib/sanity';

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

  // Home page content
  welcomeSection: WelcomeSection | null;
  coreFaithItems: CoreFaithItem[];
  quickLinks: QuickLink[];
  weeklyScripture: WeeklyScripture | null;
  bibleStudyResources: BibleStudyResource[];
  
  // Page content
  aboutPage: AboutPage | null;
  contactPage: ContactPage | null;
  massSchedule: MassSchedule | null;
  youthMinistryPage: YouthMinistryPage | null;
  catholicTeachingPage: CatholicTeachingPage | null;
  sacraments: Sacrament[];

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

  fetchSacrament: (slug: string) => Promise<Sacrament | null>;
  fetchAllSacraments: () => Promise<Sacrament[] | null>;
  fetchPageBySlug: (slug: string) => Promise<PageContent | null>;

  // Add new properties
  liturgicalCalendar: LiturgicalCalendar | null;
  
  // Add new fetch functions
  fetchLiturgicalCalendar: () => Promise<LiturgicalCalendar | null>;
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

  const [aboutPage, setAboutPage] = useState<AboutPage | null>(null);
  const [contactPage, setContactPage] = useState<ContactPage | null>(null);
  const [massSchedule, setMassSchedule] = useState<MassSchedule | null>(null);
  const [youthMinistryPage, setYouthMinistryPage] = useState<YouthMinistryPage | null>(null);
  const [catholicTeachingPage, setCatholicTeachingPage] = useState<CatholicTeachingPage | null>(null);
  const [sacraments, setSacraments] = useState<Sacrament[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [liturgicalCalendar, setLiturgicalCalendar] = useState<LiturgicalCalendar | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching Sanity data, project ID:', import.meta.env.VITE_SANITY_PROJECT_ID);
        
        // Add fallback data for when Sanity is unavailable
        const fallbackData = {
          heroSlides: [{
            _id: 'fallback-1',
            title: 'Welcome to Our Parish',
            subtitle: 'A community of faith, hope, and love',
            description: 'Join us for worship, fellowship, and spiritual growth.',
            backgroundImage: { asset: { url: '/placeholder.svg' } },
            ctaText: 'Learn More',
            ctaLink: '/about',
            isActive: true
          }],
          churchStats: [
            { _id: 'stat-1', title: 'Parish Members', value: '1,200+', icon: 'Users' },
            { _id: 'stat-2', title: 'Years of Service', value: '50+', icon: 'Calendar' },
            { _id: 'stat-3', title: 'Ministries', value: '15+', icon: 'Heart' },
            { _id: 'stat-4', title: 'Weekly Masses', value: '7', icon: 'Church' }
          ],
          coreFaithItems: [
            { _id: 'faith-1', title: 'Sacred Scripture', description: 'The Word of God guides our faith and practice.', icon: 'BookOpen' },
            { _id: 'faith-2', title: 'Sacred Tradition', description: 'The teachings passed down through the apostles.', icon: 'Crown' },
            { _id: 'faith-3', title: 'The Sacraments', description: 'Seven sacred signs of God\'s grace in our lives.', icon: 'Cross' }
          ],
          quickLinks: [
            { _id: 'link-1', title: 'Mass Schedule', url: '/mass-schedule', icon: 'Calendar', description: 'View our weekly Mass times' },
            { _id: 'link-2', title: 'Contact Us', url: '/contact', icon: 'Phone', description: 'Get in touch with our parish' },
            { _id: 'link-3', title: 'Donate', url: '/donate', icon: 'Heart', description: 'Support our parish mission' }
          ]
        };

        // Try to fetch from Sanity with timeout and fallbacks
        const fetchWithFallback = async (query: any, fallback: any, name: string) => {
          try {
            const result = await Promise.race([
              client.fetch(query),
              new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), 5000)
              )
            ]);
            return result || fallback;
          } catch (error) {
            console.warn(`Failed to fetch ${name}, using fallback:`, error);
            return fallback;
          }
        };

        // Fetch essential data with fallbacks
        const [
          slides,
          stats,
          faithItems,
          links,
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
          scripture,
          studyResources,
          about,
          contact,
          massInfo,
          youthMinistry,
          catholicTeaching,
          sacramentsList,
          liturgicalCal,
        ] = await Promise.all([
          fetchWithFallback(queries.heroSlides, fallbackData.heroSlides, 'heroSlides'),
          fetchWithFallback(queries.churchStats, fallbackData.churchStats, 'churchStats'),
          fetchWithFallback(queries.coreFaithItems, fallbackData.coreFaithItems, 'coreFaithItems'),
          fetchWithFallback(queries.quickLinks, fallbackData.quickLinks, 'quickLinks'),
          fetchWithFallback(queries.featuredEvents, [], 'featuredEvents'),
          fetchWithFallback(queries.upcomingEvents, [], 'upcomingEvents'),
          fetchWithFallback(queries.featuredYouthEvents, [], 'featuredYouthEvents'),
          fetchWithFallback(queries.recentMasses, [], 'recentMasses'),
          fetchWithFallback(queries.recentBlogPosts, [], 'recentBlogPosts'),
          fetchWithFallback(queries.recentPhotoGalleries, [], 'recentPhotoGalleries'),
          fetchWithFallback(queries.recentHomilies, [], 'recentHomilies'),
          fetchWithFallback(queries.recentBulletins, [], 'recentBulletins'),
          fetchWithFallback(queries.featuredPrayers, [], 'featuredPrayers'),
          fetchWithFallback(queries.recentReadings, [], 'recentReadings'),
          fetchWithFallback(queries.churchDocuments, [], 'churchDocuments'),
          fetchWithFallback(queries.liturgicalSeasons, [], 'liturgicalSeasons'),
          fetchWithFallback(queries.currentFeastDays, [], 'currentFeastDays'),
          fetchWithFallback(queries.featuredSaints, [], 'featuredSaints'),
          fetchWithFallback(queries.parishTeam, [], 'parishTeam'),
          fetchWithFallback(queries.ministries, [], 'ministries'),
          fetchWithFallback(queries.welcomeSection, null, 'welcomeSection'),
          fetchWithFallback(queries.currentWeeklyScripture, null, 'currentWeeklyScripture'),
          fetchWithFallback(queries.featuredBibleStudyResources, [], 'featuredBibleStudyResources'),
          fetchWithFallback(queries.aboutPage, null, 'aboutPage'),
          fetchWithFallback(queries.contactPage, null, 'contactPage'),
          fetchWithFallback(queries.massSchedule, null, 'massSchedule'),
          fetchWithFallback(queries.youthMinistryPage, null, 'youthMinistryPage'),
          fetchWithFallback(queries.catholicTeachingPage, null, 'catholicTeachingPage'),
          fetchWithFallback(queries.allSacraments, [], 'allSacraments'),
          fetchWithFallback(queries.liturgicalCalendar, null, 'liturgicalCalendar'),
        ]);

        setHeroSlides(slides);
        setChurchStats(stats);
        setCoreFaithItems(faithItems);
        setQuickLinks(links);
        setFeaturedEvents(fEvents);
        setUpcomingEvents(uEvents);
        setYouthEvents(yEvents);
        setMassRecordings(masses);
        setRecentBlogPosts(bPosts);
        setPhotoGalleries(galleries);
        setHomilies(hItems);
        setBulletins(bItems);
        setPrayers(pItems);
        setDailyReadings(readings);
        setChurchDocuments(documents);
        setLiturgicalSeasons(seasons);
        setFeastDays(feasts);
        setSaints(saintItems);
        setParishTeam(team);
        setMinistries(ministryItems);
        setWelcomeSection(welcome);
        setWeeklyScripture(scripture);
        setBibleStudyResources(studyResources);
        setAboutPage(about);
        setContactPage(contact);
        setMassSchedule(massInfo);
        setYouthMinistryPage(youthMinistry);
        setCatholicTeachingPage(catholicTeaching);
        setSacraments(sacramentsList);
        setLiturgicalCalendar(liturgicalCal);

        console.log('Sanity data loaded successfully with fallbacks');
      } catch (err) {
        console.error('Error fetching Sanity data:', err);
        setError('Some content may not be available. The site will function with limited data.');
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
        aboutPage,
        contactPage,
        massSchedule,
        youthMinistryPage,
        catholicTeachingPage,
        sacraments,
        liturgicalCalendar,
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
        fetchSacrament: async (slug: string) => client.fetch(queries.singleSacrament(slug)),
        fetchAllSacraments: async () => client.fetch(queries.allSacraments),
        fetchPageBySlug: async (slug: string) => client.fetch(queries.pageBySlug(slug)),
        fetchLiturgicalCalendar: async () => client.fetch(queries.liturgicalCalendar),
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};
