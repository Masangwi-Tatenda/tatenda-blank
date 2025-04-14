import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { client, queries, HeroSlide, EventItem, BlogPost, DocumentItem, LiturgicalSeason, FeastDay, Ministry, ParishTeamMember, BulletinItem, HomilyItem, MassRecording, Prayer, Saint, PhotoGallery, YouthEvent, DailyReading, ChurchStat, WelcomeSection, CoreFaithItem, QuickLink, WeeklyScripture, BibleStudyResource, AboutPage, ContactPage, MassSchedule, YouthMinistryPage, CatholicTeachingPage, Sacrament, PageContent } from '@/lib/sanity';

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

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching Sanity data, project ID:', import.meta.env.VITE_SANITY_PROJECT_ID);
        
        // Fetch church stats separately first to debug
        try {
          const stats = await client.fetch(queries.churchStats);
          console.log('Church stats data:', stats);
          setChurchStats(stats || []);
        } catch (statsError) {
          console.error('Error fetching church stats:', statsError);
          setChurchStats([]);
        }
        
        const [
          slides,
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
          about,
          contact,
          massInfo,
          youthMinistry,
          catholicTeaching,
          sacramentsList,
        ] = await Promise.all([
          client.fetch(queries.heroSlides).catch(e => { console.error('Error fetching heroSlides:', e); return []; }),
          client.fetch(queries.featuredEvents).catch(e => { console.error('Error fetching featuredEvents:', e); return []; }),
          client.fetch(queries.upcomingEvents).catch(e => { console.error('Error fetching upcomingEvents:', e); return []; }),
          client.fetch(queries.featuredYouthEvents).catch(e => { console.error('Error fetching featuredYouthEvents:', e); return []; }),
          client.fetch(queries.recentMasses).catch(e => { console.error('Error fetching recentMasses:', e); return []; }),
          client.fetch(queries.recentBlogPosts).catch(e => { console.error('Error fetching recentBlogPosts:', e); return []; }),
          client.fetch(queries.recentPhotoGalleries).catch(e => { console.error('Error fetching recentPhotoGalleries:', e); return []; }),
          client.fetch(queries.recentHomilies).catch(e => { console.error('Error fetching recentHomilies:', e); return []; }),
          client.fetch(queries.recentBulletins).catch(e => { console.error('Error fetching recentBulletins:', e); return []; }),
          client.fetch(queries.featuredPrayers).catch(e => { console.error('Error fetching featuredPrayers:', e); return []; }),
          client.fetch(queries.recentReadings).catch(e => { console.error('Error fetching recentReadings:', e); return []; }),
          client.fetch(queries.churchDocuments).catch(e => { console.error('Error fetching churchDocuments:', e); return []; }),
          client.fetch(queries.liturgicalSeasons).catch(e => { console.error('Error fetching liturgicalSeasons:', e); return []; }),
          client.fetch(queries.currentFeastDays).catch(e => { console.error('Error fetching currentFeastDays:', e); return []; }),
          client.fetch(queries.featuredSaints).catch(e => { console.error('Error fetching featuredSaints:', e); return []; }),
          client.fetch(queries.parishTeam).catch(e => { console.error('Error fetching parishTeam:', e); return []; }),
          client.fetch(queries.ministries).catch(e => { console.error('Error fetching ministries:', e); return []; }),
          client.fetch(queries.welcomeSection).catch(e => { console.error('Error fetching welcomeSection:', e); return null; }),
          client.fetch(queries.coreFaithItems).catch(e => { console.error('Error fetching coreFaithItems:', e); return []; }),
          client.fetch(queries.quickLinks).catch(e => { console.error('Error fetching quickLinks:', e); return []; }),
          client.fetch(queries.currentWeeklyScripture).catch(e => { console.error('Error fetching currentWeeklyScripture:', e); return null; }),
          client.fetch(queries.featuredBibleStudyResources).catch(e => { console.error('Error fetching featuredBibleStudyResources:', e); return []; }),
          client.fetch(queries.aboutPage).catch(e => { console.error('Error fetching aboutPage:', e); return null; }),
          client.fetch(queries.contactPage).catch(e => { console.error('Error fetching contactPage:', e); return null; }),
          client.fetch(queries.massSchedule).catch(e => { console.error('Error fetching massSchedule:', e); return null; }),
          client.fetch(queries.youthMinistryPage).catch(e => { console.error('Error fetching youthMinistryPage:', e); return null; }),
          client.fetch(queries.catholicTeachingPage).catch(e => { console.error('Error fetching catholicTeachingPage:', e); return null; }),
          client.fetch(queries.allSacraments).catch(e => { console.error('Error fetching allSacraments:', e); return []; }),
        ]);

        setHeroSlides(slides || []);
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
        setAboutPage(about || null);
        setContactPage(contact || null);
        setMassSchedule(massInfo || null);
        setYouthMinistryPage(youthMinistry || null);
        setCatholicTeachingPage(catholicTeaching || null);
        setSacraments(sacramentsList || []);
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
        aboutPage,
        contactPage,
        massSchedule,
        youthMinistryPage,
        catholicTeachingPage,
        sacraments,
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
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};
