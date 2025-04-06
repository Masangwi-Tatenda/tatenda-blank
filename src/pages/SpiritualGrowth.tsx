
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Heart, BookOpen, Calendar, Download, ArrowRight, FileText, Moon, Sun } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Button from '@/components/common/Button';

// Define types for Scripture readings
interface Reading {
  title: string;
  reference: string;
  text: string;
}

interface DailyReadings {
  date: string;
  liturgicalDay: string;
  readings: Reading[];
}

const SpiritualGrowth = () => {
  // State for daily readings (in a real app, this would be fetched from an API)
  const [dailyReadings, setDailyReadings] = useState<DailyReadings>({
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    liturgicalDay: "27th Sunday in Ordinary Time",
    readings: [
      {
        title: "First Reading",
        reference: "Genesis 2:18-24",
        text: "The LORD God said: "It is not good for the man to be alone. I will make a suitable partner for him." So the LORD God formed out of the ground various wild animals and various birds of the air, and he brought them to the man to see what he would call them; whatever the man called each of them would be its name..."
      },
      {
        title: "Responsorial Psalm",
        reference: "Psalm 128:1-2, 3, 4-5, 6",
        text: "R. May the Lord bless us all the days of our lives.\nBlessed are you who fear the LORD, who walk in his ways!\nFor you shall eat the fruit of your handiwork; blessed shall you be, and favored."
      },
      {
        title: "Second Reading",
        reference: "Hebrews 2:9-11",
        text: "Brothers and sisters: He "for a little while" was made "lower than the angels, " that by the grace of God he might taste death for everyone. For it was fitting that he, for whom and through whom all things exist, in bringing many children to glory, should make the leader to their salvation perfect through suffering..."
      },
      {
        title: "Gospel",
        reference: "Mark 10:2-16",
        text: "The Pharisees approached Jesus and asked, "Is it lawful for a husband to divorce his wife?" They were testing him. He said to them in reply, "What did Moses command you?" They replied, "Moses permitted a husband to write a bill of divorce and dismiss her." But Jesus told them, "Because of the hardness of your hearts he wrote you this commandment..."
      }
    ]
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507692049790-de58290a4334")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Spiritual Growth</h1>
                <p className="text-xl text-white/90">Resources for prayer, reflection, and deepening your relationship with God</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Nurturing Your Spiritual Life</h2>
              <p className="text-lg text-gray-700 mb-6">
                Spiritual growth is at the heart of our Catholic faith. Through prayer, Scripture, and the sacraments, we deepen our relationship with God and become more fully the people we are called to be.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                On this page, you'll find resources to support your spiritual journey, including daily Scripture readings, prayer guides, and tools for reflection and discernment.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  href="#daily-readings" 
                  variant="primary"
                >
                  Today's Readings
                </Button>
                <Button 
                  href="#prayer-resources" 
                  variant="outline"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Prayer Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Daily Readings Section */}
        <section id="daily-readings" className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Daily Scripture Readings" 
              subtitle="Encountering God's Word in the daily liturgical readings"
            />
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="bg-church-burgundy text-white p-6">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{dailyReadings.date}</h3>
                    <p className="text-white/80">{dailyReadings.liturgicalDay}</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <Calendar className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {dailyReadings.readings.map((reading, index) => (
                    <AccordionItem key={index} value={`reading-${index}`}>
                      <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                        {reading.title}: {reading.reference}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 whitespace-pre-line">
                        {reading.text}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 flex flex-wrap justify-between items-center">
                  <a 
                    href="/spiritual-growth/readings-archive"
                    className="text-church-burgundy hover:text-church-gold inline-flex items-center"
                  >
                    Previous Readings <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                  
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a 
                      href="/spiritual-growth/liturgical-calendar"
                      className="text-church-burgundy hover:text-church-gold"
                    >
                      Liturgical Calendar
                    </a>
                    <a 
                      href="/spiritual-growth/bible-study"
                      className="text-church-burgundy hover:text-church-gold"
                    >
                      Bible Study Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prayer Resources */}
        <section id="prayer-resources" className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Prayer Resources" 
              subtitle="Tools and guides to enhance your prayer life"
            />
            
            <Tabs defaultValue="traditional" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="traditional">Traditional Prayers</TabsTrigger>
                <TabsTrigger value="devotions">Devotions</TabsTrigger>
                <TabsTrigger value="novenas">Novenas</TabsTrigger>
                <TabsTrigger value="prayer-guides">Prayer Guides</TabsTrigger>
              </TabsList>
              
              {/* Traditional Prayers Tab */}
              <TabsContent value="traditional">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Our Father */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">The Our Father</h3>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <p className="text-gray-700 italic">
                          Our Father, who art in heaven,<br />
                          hallowed be thy name;<br />
                          thy kingdom come,<br />
                          thy will be done<br />
                          on earth as it is in heaven.<br />
                          Give us this day our daily bread,<br />
                          and forgive us our trespasses,<br />
                          as we forgive those who trespass against us;<br />
                          and lead us not into temptation,<br />
                          but deliver us from evil.<br />
                          Amen.
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        The Lord's Prayer, given to us by Jesus himself, is a model for all prayer, encompassing praise, petition, and surrender to God's will.
                      </p>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold text-sm font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Download Printable Version
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Hail Mary */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">The Hail Mary</h3>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <p className="text-gray-700 italic">
                          Hail Mary, full of grace,<br />
                          the Lord is with thee.<br />
                          Blessed art thou among women,<br />
                          and blessed is the fruit of thy womb, Jesus.<br />
                          Holy Mary, Mother of God,<br />
                          pray for us sinners,<br />
                          now and at the hour of our death.<br />
                          Amen.
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        This prayer combines the angelic greeting to Mary, Elizabeth's greeting, and the Church's request for Mary's intercession.
                      </p>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold text-sm font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Download Printable Version
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Glory Be */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">Glory Be</h3>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <p className="text-gray-700 italic">
                          Glory be to the Father,<br />
                          and to the Son,<br />
                          and to the Holy Spirit,<br />
                          as it was in the beginning,<br />
                          is now, and ever shall be,<br />
                          world without end.<br />
                          Amen.
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        A doxology, or short hymn of praise, honoring the Trinity and acknowledging God's eternal nature.
                      </p>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold text-sm font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Download Printable Version
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Apostles' Creed */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">Apostles' Creed</h3>
                      <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-40 overflow-y-auto">
                        <p className="text-gray-700 italic">
                          I believe in God, the Father almighty,<br />
                          Creator of heaven and earth,<br />
                          and in Jesus Christ, his only Son, our Lord,<br />
                          who was conceived by the Holy Spirit,<br />
                          born of the Virgin Mary...<br />
                          <span className="text-gray-500">(full text available in download)</span>
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        A summary of the core beliefs of Christianity, often recited during baptisms and the Rosary.
                      </p>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold text-sm font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Download Full Version
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Act of Contrition */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-4">Act of Contrition</h3>
                      <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-40 overflow-y-auto">
                        <p className="text-gray-700 italic">
                          O my God, I am heartily sorry for having offended Thee,<br />
                          and I detest all my sins because of Thy just punishments,<br />
                          but most of all because they offend Thee, my God,<br />
                          who art all good and deserving of all my love...<br />
                          <span className="text-gray-500">(full text available in download)</span>
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        A prayer expressing sorrow for sin and resolving to avoid sin in the future, used in the Sacrament of Reconciliation.
                      </p>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold text-sm font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Download Full Version
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* More Prayers */}
                  <Card className="shadow-md bg-church-burgundy text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">More Traditional Prayers</h3>
                      <p className="text-white/90 mb-6">
                        Explore our complete collection of traditional Catholic prayers, including prayers for specific occasions, intentions, and saints.
                      </p>
                      <Button
                        href="/spiritual-growth/prayers"
                        variant="glass"
                        className="bg-white/20 hover:bg-white/30 border-white/10"
                      >
                        View All Prayers
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Devotions Tab */}
              <TabsContent value="devotions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Rosary */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">The Holy Rosary</h3>
                      <p className="text-gray-700 mb-4">
                        A meditative prayer centered on the life of Christ, prayed with the intercession of Mary. The Rosary consists of twenty "mysteries" divided into four sets: Joyful, Luminous, Sorrowful, and Glorious.
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="/spiritual-growth/rosary-guide"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          How to Pray the Rosary
                        </a>
                        <a 
                          href="#"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          <Download className="inline-block mr-1 w-4 h-4" /> Printable Rosary Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divine Mercy */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Divine Mercy Chaplet</h3>
                      <p className="text-gray-700 mb-4">
                        Based on the visions of St. Faustina, this devotion focuses on God's mercy, especially for sinners. The chaplet is prayed using rosary beads and is often recited at 3:00 PM, the "Hour of Mercy."
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="/spiritual-growth/divine-mercy"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          How to Pray the Divine Mercy Chaplet
                        </a>
                        <a 
                          href="#"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          <Download className="inline-block mr-1 w-4 h-4" /> Printable Divine Mercy Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stations of the Cross */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Stations of the Cross</h3>
                      <p className="text-gray-700 mb-4">
                        A devotional practice that follows Jesus's path to crucifixion through 14 stations. Traditionally prayed on Fridays during Lent, but can be prayed at any time as a way to enter into Christ's Passion.
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="/spiritual-growth/stations"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          Pray the Stations of the Cross
                        </a>
                        <a 
                          href="#"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          <Download className="inline-block mr-1 w-4 h-4" /> Printable Stations Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Adoration */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Eucharistic Adoration</h3>
                      <p className="text-gray-700 mb-4">
                        Time spent in prayer before the Blessed Sacrament, either exposed in a monstrance or reserved in the tabernacle. Adoration is a powerful way to deepen one's relationship with Christ truly present in the Eucharist.
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="/spiritual-growth/adoration"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          Guide to Eucharistic Adoration
                        </a>
                        <a 
                          href="/mass-times"
                          className="block text-church-burgundy hover:text-church-gold"
                        >
                          Adoration Schedule
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Novenas Tab */}
              <TabsContent value="novenas">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Novena Explanation */}
                  <div className="md:col-span-3 bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-church-burgundy mt-1 shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">What is a Novena?</h3>
                        <p className="text-gray-700">
                          A novena is a nine-day period of prayer for a specific intention or devotion. The practice reflects the nine days the apostles and Mary spent in prayer between Ascension and Pentecost. Novenas are typically prayed for special intentions, in preparation for a feast day, or as acts of devotion to Jesus, Mary, or a saint.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sacred Heart Novena */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Sacred Heart Novena</h3>
                      <p className="text-sm text-gray-500 mb-4">Feast Day: June (variable)</p>
                      <p className="text-gray-700 mb-4">
                        This novena honors the Sacred Heart of Jesus, focusing on His boundless love and mercy for humanity.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas/sacred-heart"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        View Novena
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Divine Mercy Novena */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Divine Mercy Novena</h3>
                      <p className="text-sm text-gray-500 mb-4">Prayed from Good Friday to Divine Mercy Sunday</p>
                      <p className="text-gray-700 mb-4">
                        Revealed to St. Faustina, this novena prepares for the Feast of Divine Mercy, praying for different groups each day.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas/divine-mercy"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        View Novena
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* St. Jude Novena */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">St. Jude Novena</h3>
                      <p className="text-sm text-gray-500 mb-4">Feast Day: October 28</p>
                      <p className="text-gray-700 mb-4">
                        St. Jude is the patron saint of desperate or hopeless causes. This novena is often prayed in times of great need.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas/st-jude"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        View Novena
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Our Lady of Perpetual Help */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Perpetual Help Novena</h3>
                      <p className="text-sm text-gray-500 mb-4">Feast Day: June 27</p>
                      <p className="text-gray-700 mb-4">
                        This novena seeks the intercession of Our Lady of Perpetual Help for assistance in all needs, especially in difficult times.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas/perpetual-help"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        View Novena
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* St. Therese Novena */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">St. Therese Novena</h3>
                      <p className="text-sm text-gray-500 mb-4">Feast Day: October 1</p>
                      <p className="text-gray-700 mb-4">
                        This novena to "The Little Flower" is associated with St. Therese's promise to "let fall a shower of roses" from heaven.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas/st-therese"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        View Novena
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* More Novenas */}
                  <Card className="shadow-md bg-church-burgundy text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">More Novenas</h3>
                      <p className="text-white/90 mb-4">
                        Explore our complete collection of novenas for various intentions, feast days, and saints.
                      </p>
                      <a 
                        href="/spiritual-growth/novenas"
                        className="text-church-gold hover:text-white font-medium"
                      >
                        View All Novenas
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Prayer Guides Tab */}
              <TabsContent value="prayer-guides">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Liturgy of the Hours */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-church-burgundy text-white p-2 rounded-md">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">Liturgy of the Hours</h3>
                        <p className="text-gray-500 text-sm">The Prayer of the Church</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Also known as the Divine Office, this is the official prayer of the Church, sanctifying the day with prayer at specific times. While clergy and religious are obligated to pray it, many lay people also participate in this beautiful tradition.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-church-burgundy mb-1">Prayer Times</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Office of Readings</li>
                          <li>• Morning Prayer (Lauds)</li>
                          <li>• Daytime Prayer</li>
                          <li>• Evening Prayer (Vespers)</li>
                          <li>• Night Prayer (Compline)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-church-burgundy mb-1">Components</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Psalms</li>
                          <li>• Scripture readings</li>
                          <li>• Intercessions</li>
                          <li>• Hymns</li>
                          <li>• Canticles</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="/spiritual-growth/liturgy-of-hours"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn More
                      </a>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Beginner's Guide
                      </a>
                    </div>
                  </div>
                  
                  {/* Lectio Divina */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-church-burgundy text-white p-2 rounded-md">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">Lectio Divina</h3>
                        <p className="text-gray-500 text-sm">Divine Reading</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Lectio Divina is an ancient practice of prayerfully reading and meditating on Scripture, allowing God to speak personally through His Word. This contemplative practice involves reading slowly, reflecting deeply, responding prayerfully, and resting in God's presence.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <h4 className="font-semibold text-church-burgundy mb-2">The Four Steps:</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li><span className="font-medium">Lectio (Read):</span> Slowly read a short passage of Scripture.</li>
                        <li><span className="font-medium">Meditatio (Reflect):</span> Ponder the text, allowing it to speak to your heart.</li>
                        <li><span className="font-medium">Oratio (Respond):</span> Speak to God about what you've read.</li>
                        <li><span className="font-medium">Contemplatio (Rest):</span> Simply rest in God's presence.</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="/spiritual-growth/lectio-divina"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn More
                      </a>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Printable Guide
                      </a>
                    </div>
                  </div>
                  
                  {/* Ignatian Prayer */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-church-burgundy text-white p-2 rounded-md">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">Ignatian Prayer</h3>
                        <p className="text-gray-500 text-sm">Finding God in All Things</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Based on the spirituality of St. Ignatius of Loyola, Ignatian prayer includes methods like the Examen and imaginative prayer. It emphasizes discernment, finding God in daily life, and making decisions in alignment with God's will.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <h4 className="font-semibold text-church-burgundy mb-2">The Daily Examen:</h4>
                      <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                        <li>Become aware of God's presence</li>
                        <li>Review the day with gratitude</li>
                        <li>Pay attention to emotions</li>
                        <li>Choose one feature of the day and pray about it</li>
                        <li>Look forward to tomorrow</li>
                      </ol>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="/spiritual-growth/ignatian-prayer"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn More
                      </a>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Examen Guide
                      </a>
                    </div>
                  </div>
                  
                  {/* Contemplative Prayer */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-church-burgundy text-white p-2 rounded-md">
                        <Sun className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-church-burgundy mb-2">Contemplative Prayer</h3>
                        <p className="text-gray-500 text-sm">Prayer of Silent Love</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Contemplative prayer is a form of silent prayer where one seeks to simply be in God's presence, moving beyond thoughts, words, and images to a direct experience of God's love. It includes practices like centering prayer and the prayer of quiet.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <h4 className="font-semibold text-church-burgundy mb-2">Basic Method:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Choose a sacred word as a symbol of your intention to consent to God's presence</li>
                        <li>• Sit comfortably with eyes closed</li>
                        <li>• When thoughts arise, gently return to your sacred word</li>
                        <li>• At the end, remain in silence for a couple of minutes</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="/spiritual-growth/contemplative-prayer"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn More
                      </a>
                      <a 
                        href="#"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        <Download className="mr-1 w-4 h-4" /> Beginner's Guide
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Bible Study Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Bible Study Resources" 
              subtitle="Tools to help you engage more deeply with Sacred Scripture"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reading Plans */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-church-burgundy to-red-700 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Bible Reading Plans</h3>
                  <p className="text-gray-700 mb-4">
                    Structured guides for reading through portions of the Bible over a set period. These plans help you develop a regular habit of Scripture reading.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>30-Day Gospels Plan</li>
                    <li>90-Day New Testament Plan</li>
                    <li>Liturgical Year Plan</li>
                    <li>Thematic Reading Plans</li>
                  </ul>
                  <a 
                    href="/spiritual-growth/bible-reading-plans"
                    className="text-church-burgundy hover:text-church-gold font-medium"
                  >
                    View Reading Plans
                  </a>
                </CardContent>
              </Card>
              
              {/* Study Guides */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Study Guides & Commentaries</h3>
                  <p className="text-gray-700 mb-4">
                    Resources that provide context, explanation, and reflection questions to help you understand and apply Scripture more deeply.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Book-by-Book Study Guides</li>
                    <li>Catholic Commentary Recommendations</li>
                    <li>Study Bible Options</li>
                    <li>Reflection Questions</li>
                  </ul>
                  <a 
                    href="/spiritual-growth/bible-study-guides"
                    className="text-church-burgundy hover:text-church-gold font-medium"
                  >
                    Access Study Resources
                  </a>
                </CardContent>
              </Card>
              
              {/* Bible Study Groups */}
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-emerald-700 to-emerald-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Bible Study Groups</h3>
                  <p className="text-gray-700 mb-4">
                    Join others in studying Scripture through parish-based small groups, gaining insights from shared discussion and community support.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Current Studies & Meeting Times</li>
                    <li>How to Join a Group</li>
                    <li>Start Your Own Group</li>
                    <li>Virtual Study Options</li>
                  </ul>
                  <a 
                    href="/spiritual-growth/bible-study-groups"
                    className="text-church-burgundy hover:text-church-gold font-medium"
                  >
                    Find a Bible Study Group
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Liturgical Calendar */}
        <section className="py-16 bg-church-navy text-white">
          <div className="container-custom">
            <SectionTitle 
              title="Liturgical Calendar" 
              subtitle="Following the rhythm of the Church year"
              className="text-white"
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Church's Seasons</h3>
                <p className="text-white/90 mb-6">
                  The liturgical year is the annual cycle of seasons and celebrations in the Catholic Church. It allows us to enter into the mysteries of Christ's life, death, and resurrection throughout the year.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Advent</h4>
                      <p className="text-white/80 text-sm">A season of preparation for Christmas, focusing on Christ's coming in history, mystery, and majesty.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-white mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Christmas</h4>
                      <p className="text-white/80 text-sm">Celebrating the birth of Christ and the mystery of the Incarnation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Ordinary Time (Part I)</h4>
                      <p className="text-white/80 text-sm">A time to reflect on Christ's teaching and ministry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-violet-700 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Lent</h4>
                      <p className="text-white/80 text-sm">A 40-day period of prayer, fasting, and almsgiving in preparation for Easter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-red-600 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Sacred Triduum</h4>
                      <p className="text-white/80 text-sm">Holy Thursday, Good Friday, and Holy Saturday—the most sacred three days of the year.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Easter</h4>
                      <p className="text-white/80 text-sm">The celebration of Christ's resurrection and victory over death.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Ordinary Time (Part II)</h4>
                      <p className="text-white/80 text-sm">Continuing to grow in our understanding of Christ's teaching and ministry.</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="/spiritual-growth/liturgical-calendar"
                  variant="glass"
                  className="bg-white/20 hover:bg-white/30 border-white/10"
                >
                  View Complete Liturgical Calendar
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Upcoming Feast Days</h3>
                <ul className="space-y-4">
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">St. Francis of Assisi</h4>
                      <span className="text-church-gold text-sm">Oct 4</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Patron saint of animals and the environment, known for his radical commitment to poverty and peace.
                    </p>
                  </li>
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Our Lady of the Rosary</h4>
                      <span className="text-church-gold text-sm">Oct 7</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Commemorating the power of the Rosary, particularly remembered for the victory at the Battle of Lepanto.
                    </p>
                  </li>
                  <li className="border-b border-white/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">St. John XXIII</h4>
                      <span className="text-church-gold text-sm">Oct 11</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Pope who convened the Second Vatican Council and was known for his warmth and pastoral approach.
                    </p>
                  </li>
                  <li>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">St. Teresa of Ávila</h4>
                      <span className="text-church-gold text-sm">Oct 15</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      Doctor of the Church, mystic, reformer of the Carmelite Order, and author of spiritual classics.
                    </p>
                  </li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="/spiritual-growth/saints-calendar"
                    className="inline-flex items-center text-church-gold hover:text-white transition-colors"
                  >
                    View Saints Calendar <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpiritualGrowth;
