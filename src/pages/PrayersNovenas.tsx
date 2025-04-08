
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, BookMarked, Star, Flame, Cross, BookCopy, Church, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PrayerCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  prayers: Prayer[];
}

interface Prayer {
  id: string;
  title: string;
  description: string;
  text: string;
  isExpandable?: boolean;
  isExpanded?: boolean;
}

const PrayersNovenas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [prayerCategories, setPrayerCategories] = useState<PrayerCategory[]>([
    {
      id: 'essential',
      label: 'Essential Prayers',
      icon: Cross,
      prayers: [
        {
          id: 'our-father',
          title: 'Our Father',
          description: 'The prayer Jesus taught His disciples',
          text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
          isExpandable: false
        },
        {
          id: 'hail-mary',
          title: 'Hail Mary',
          description: 'Prayer to the Blessed Virgin Mary',
          text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
          isExpandable: false
        },
        {
          id: 'glory-be',
          title: 'Glory Be',
          description: 'Doxology praising the Holy Trinity',
          text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
          isExpandable: false
        },
        {
          id: 'apostles-creed',
          title: 'Apostles\' Creed',
          description: 'Statement of Christian faith',
          text: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'act-of-contrition',
          title: 'Act of Contrition',
          description: 'Prayer expressing sorrow for sins',
          text: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.',
          isExpandable: true,
          isExpanded: false
        },
      ]
    },
    {
      id: 'rosary',
      label: 'Rosary Prayers',
      icon: Star,
      prayers: [
        {
          id: 'how-to-pray',
          title: 'How to Pray the Rosary',
          description: 'Instructions for praying the Rosary',
          text: `1. Make the Sign of the Cross and say the "Apostles' Creed"\n2. Say the "Our Father"\n3. Say three "Hail Marys" for Faith, Hope, and Charity\n4. Say the "Glory Be"\n5. Announce the First Mystery and then say the "Our Father"\n6. Say ten "Hail Marys" while meditating on the Mystery\n7. Say the "Glory Be" and the "Fatima Prayer"\n8. Announce the Second Mystery; then say the "Our Father" and repeat steps 6 and 7, and continue with the Third, Fourth, and Fifth Mysteries in the same manner\n9. Say the "Hail, Holy Queen" and the Concluding Prayer`,
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'joyful-mysteries',
          title: 'Joyful Mysteries',
          description: 'Traditionally prayed on Mondays and Saturdays',
          text: `1. The Annunciation: The angel Gabriel announces to Mary that she will conceive and bear a son.\n2. The Visitation: Mary visits her cousin Elizabeth, who is pregnant with John the Baptist.\n3. The Nativity: Jesus is born in Bethlehem.\n4. The Presentation: Mary and Joseph present Jesus in the Temple.\n5. The Finding of Jesus in the Temple: After being lost for three days, Jesus is found in the Temple.`,
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'sorrowful-mysteries',
          title: 'Sorrowful Mysteries',
          description: 'Traditionally prayed on Tuesdays and Fridays',
          text: `1. The Agony in the Garden: Jesus prays in the Garden of Gethsemane on the night before His death.\n2. The Scourging at the Pillar: Jesus is bound to a pillar and scourged.\n3. The Crowning with Thorns: Jesus is mocked and crowned with thorns.\n4. The Carrying of the Cross: Jesus carries His cross to Calvary.\n5. The Crucifixion: Jesus is nailed to the cross and dies.`,
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'glorious-mysteries',
          title: 'Glorious Mysteries',
          description: 'Traditionally prayed on Wednesdays and Sundays',
          text: `1. The Resurrection: Jesus rises from the dead.\n2. The Ascension: Jesus ascends into Heaven.\n3. The Descent of the Holy Spirit: The Holy Spirit descends upon Mary and the apostles.\n4. The Assumption: Mary is assumed body and soul into Heaven.\n5. The Coronation: Mary is crowned Queen of Heaven and Earth.`,
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'luminous-mysteries',
          title: 'Luminous Mysteries',
          description: 'Traditionally prayed on Thursdays',
          text: `1. The Baptism of Jesus in the Jordan: Jesus is baptized by John the Baptist.\n2. The Wedding Feast at Cana: Jesus performs His first miracle, turning water into wine.\n3. The Proclamation of the Kingdom: Jesus calls all to conversion and forgiveness of sins.\n4. The Transfiguration: Jesus is transfigured on Mount Tabor.\n5. The Institution of the Eucharist: Jesus gives us His Body and Blood at the Last Supper.`,
          isExpandable: true,
          isExpanded: false
        },
      ]
    },
    {
      id: 'novenas',
      label: 'Novenas',
      icon: Flame,
      prayers: [
        {
          id: 'divine-mercy',
          title: 'Divine Mercy Novena',
          description: 'Nine-day prayer leading to Divine Mercy Sunday',
          text: 'The Divine Mercy Novena begins on Good Friday and concludes on Divine Mercy Sunday (the Sunday after Easter). Jesus asked that each day of the novena be offered for a different group of souls. The chaplet is prayed each day along with specific intentions.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'sacred-heart',
          title: 'Sacred Heart Novena',
          description: 'Nine-day prayer to the Sacred Heart of Jesus',
          text: 'The Sacred Heart Novena is typically prayed in preparation for the Feast of the Sacred Heart, which falls 19 days after Pentecost. It is a powerful way to draw closer to the merciful heart of Jesus.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'immaculate-heart',
          title: 'Immaculate Heart Novena',
          description: 'Nine-day prayer to the Immaculate Heart of Mary',
          text: 'The Immaculate Heart Novena is prayed in preparation for the Feast of the Immaculate Heart of Mary, which is celebrated the day after the Feast of the Sacred Heart of Jesus. It is a beautiful way to entrust ourselves to Mary\'s maternal care.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'st-joseph',
          title: 'St. Joseph Novena',
          description: 'Nine-day prayer to St. Joseph',
          text: 'The St. Joseph Novena is often prayed in preparation for his feast day on March 19. St. Joseph is the patron saint of the universal Church, fathers, workers, and a peaceful death.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'st-jude',
          title: 'St. Jude Novena',
          description: 'Nine-day prayer to the patron of impossible causes',
          text: 'The St. Jude Novena is prayed to St. Jude Thaddeus, the patron saint of hopeless cases and desperate situations. His feast day is October 28.',
          isExpandable: true,
          isExpanded: false
        },
      ]
    },
    {
      id: 'seasonal',
      label: 'Seasonal Prayers',
      icon: Church,
      prayers: [
        {
          id: 'advent-prayer',
          title: 'Advent Prayer',
          description: 'Prayer for the Advent season',
          text: 'Come, Lord Jesus! Open our minds and hearts and souls as we wait for you to be born anew in our lives and in our family. Help us to experience your love in our family while we wait for you. Light of the world, shine on us and make us new this Advent. Amen.',
          isExpandable: false
        },
        {
          id: 'christmas-prayer',
          title: 'Christmas Prayer',
          description: 'Prayer for the Christmas season',
          text: 'Lord, in this holy season of prayer and song and laughter, we praise you for the great wonders you have sent us: for shining star and angel\'s song, for infant\'s cry in lowly manger. We praise you for the Word made flesh in a little Child. We behold his glory, and are bathed in its radiance. Be with us as we sing the ironies of Christmas, the incomprehensible comprehended, the poetry made hard fact, the helpless Babe who cracks the world asunder. We kneel before you shepherds, innkeepers, wise men. Help us to rise bigger than we are. Amen.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'lenten-prayer',
          title: 'Lenten Prayer',
          description: 'Prayer for the Lenten season',
          text: 'God of mercy, you call us to recognize you in our daily lives and help others in their time of need. During this time of Lent, help us to remember this call and change our hearts through prayer, fasting, and giving to others. Through Christ our Lord. Amen.',
          isExpandable: false
        },
        {
          id: 'easter-prayer',
          title: 'Easter Prayer',
          description: 'Prayer for the Easter season',
          text: 'Lord Jesus Christ, who came to reveal your Father\'s love and to draw all people to yourself: open our eyes to see your hand at work in the splendor of creation, in the beauty of human life. Touched by your love, help us to love one another. We ask this through Christ our Lord. Amen.',
          isExpandable: false
        },
      ]
    },
    {
      id: 'saints',
      label: 'Prayers to Saints',
      icon: Sparkles,
      prayers: [
        {
          id: 'st-francis',
          title: 'Prayer of St. Francis',
          description: 'Prayer for peace attributed to St. Francis of Assisi',
          text: 'Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; and where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console; to be understood as to understand; to be loved as to love. For it is in giving that we receive; it is in pardoning that we are pardoned; and it is in dying that we are born to eternal life. Amen.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'st-anthony',
          title: 'Prayer to St. Anthony',
          description: 'Prayer to the patron saint of lost items',
          text: 'St. Anthony, perfect imitator of Jesus, who received from God the special power of restoring lost things, grant that I may find what has been lost. At least restore to me peace and tranquility of mind, the loss of which has afflicted me even more than my material loss. To this favor, I ask another of you: that I may always remain in possession of the true good that is God. Let me rather lose all things than lose God, my supreme good. Let me never suffer the loss of my greatest treasure, eternal life with God. Amen.',
          isExpandable: true,
          isExpanded: false
        },
        {
          id: 'st-michael',
          title: 'Prayer to St. Michael',
          description: 'Prayer for protection against evil',
          text: 'St. Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen.',
          isExpandable: false
        },
        {
          id: 'st-teresa',
          title: 'Prayer of St. Teresa of Avila',
          description: 'Prayer for trust in God',
          text: 'Let nothing disturb you, Let nothing frighten you, All things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing; God alone suffices.',
          isExpandable: false
        },
      ]
    }
  ]);

  const handlePrayerToggle = (categoryId: string, prayerId: string) => {
    setPrayerCategories(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? {
              ...category,
              prayers: category.prayers.map(prayer => 
                prayer.id === prayerId 
                  ? { ...prayer, isExpanded: !prayer.isExpanded }
                  : prayer
              )
            }
          : category
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Catholic Prayers & Novenas"
            subtitle="Strengthen your spiritual life through traditional and contemporary prayers"
            className="text-center mb-8"
          />

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-church-light-gold/30 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="shrink-0 bg-church-gold/20 p-4 rounded-full">
                    <Heart className="h-8 w-8 text-church-burgundy" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-church-burgundy">The Power of Prayer</h2>
                    <p className="text-gray-700">
                      Prayer is the raising of one's mind and heart to God. It is a vital and personal relationship with the living and true God. Through prayer, we acknowledge God's power and goodness, and our own neediness and dependence. The Catechism of the Catholic Church teaches that "prayer is the life of the new heart" and "a vital necessity."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="essential" className="mb-8">
              <TabsList className="grid grid-cols-3 lg:grid-cols-5 mb-4">
                {prayerCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {prayerCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.prayers.map(prayer => (
                      <Card key={prayer.id} className="border border-church-burgundy/10 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-bold text-church-burgundy">{prayer.title}</CardTitle>
                          <CardDescription>{prayer.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          {prayer.isExpandable ? (
                            <>
                              <div className={`prose max-w-none ${!prayer.isExpanded && 'line-clamp-3'}`}>
                                <p className="whitespace-pre-line text-gray-700">{prayer.text}</p>
                              </div>
                              <button 
                                onClick={() => handlePrayerToggle(category.id, prayer.id)}
                                className="mt-2 text-church-burgundy hover:text-church-gold text-sm font-medium flex items-center gap-1 transition-colors"
                              >
                                {prayer.isExpanded ? 'Show less' : 'Show more'}
                              </button>
                            </>
                          ) : (
                            <div className="prose max-w-none">
                              <p className="whitespace-pre-line text-gray-700">{prayer.text}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-church-burgundy" />
                    <CardTitle>Daily Readings</CardTitle>
                  </div>
                  <CardDescription>Follow the Church's daily scripture readings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    Start each day with the official readings from the Catholic Church's liturgical calendar. Reflect on God's word and apply it to your daily life.
                  </p>
                  <Link to="/daily-readings" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    View Daily Readings
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-church-burgundy/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-6 w-6 text-church-burgundy" />
                    <CardTitle>Saints Calendar</CardTitle>
                  </div>
                  <CardDescription>Learn about the saints celebrated each day</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    Discover the lives of Catholic saints, their feast days, patronages, and powerful intercessory prayers. Let their example inspire your faith journey.
                  </p>
                  <Link to="/saints-calendar" className="inline-block px-4 py-2 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                    Explore Saints Calendar
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link to="/bible-study" className="inline-flex items-center text-church-burgundy hover:text-church-gold transition-colors">
                Check out our Bible Study resources <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrayersNovenas;
