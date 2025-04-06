
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Shield, BookOpen, Download, ArrowRight, FileText, MessageCircle, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Button from '@/components/common/Button';

const Apologetics = () => {
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
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501952515248-2235f01d0f34")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Catholic Apologetics</h1>
                <p className="text-xl text-white/90">Understanding and explaining the faith with clarity and charity</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Defending the Faith</h2>
              <p className="text-lg text-gray-700 mb-6">
                The word "apologetics" comes from the Greek word <em>apologia</em>, which means "defense" or "explanation." Catholic apologetics is the reasonable defense and explanation of the teachings, practices, and history of the Catholic Church.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our goal is to help Catholics better understand their faith, provide answers to common questions and objections, and equip believers to share the faith with clarity, confidence, and charity. As St. Peter urges us, we should "always be ready to give an explanation to anyone who asks you for a reason for your hope" (1 Peter 3:15).
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  href="#common-questions" 
                  variant="primary"
                >
                  Common Questions
                </Button>
                <Button 
                  href="#resources" 
                  variant="outline"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Apologetics Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Common Questions */}
        <section id="common-questions" className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Common Questions & Misconceptions" 
              subtitle="Clear answers to frequently asked questions about Catholic teaching"
            />
            
            <Tabs defaultValue="bible" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 mb-12">
                <TabsTrigger value="bible">Bible & Tradition</TabsTrigger>
                <TabsTrigger value="worship">Worship & Devotion</TabsTrigger>
                <TabsTrigger value="moral">Moral Teaching</TabsTrigger>
                <TabsTrigger value="church">Church & Authority</TabsTrigger>
                <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
              </TabsList>
              
              {/* Bible & Tradition Tab */}
              <TabsContent value="bible">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics use Tradition alongside Scripture?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        Catholics believe that divine revelation comes to us through both Sacred Scripture and Sacred Tradition. This doesn't mean "traditions" in the sense of human customs, but rather the living transmission of the Gospel message that began with the apostles and continues through their successors.
                      </p>
                      <p>
                        Scripture itself supports this view. In 2 Thessalonians 2:15, St. Paul writes, "Therefore, brothers, stand firm and hold fast to the traditions that you were taught, either by an oral statement or by a letter of ours." Similarly, in 1 Corinthians 11:2, he praises Christians for "holding fast to the traditions, just as I handed them on to you."
                      </p>
                      <p>
                        Moreover, the Bible as we know it didn't exist in its complete form during the early Church. The canon of Scripture wasn't definitively established until the late 4th century. The early Church relied on apostolic teaching, both written and oral, guided by the Holy Spirit.
                      </p>
                      <p>
                        It's also worth noting that nowhere does the Bible claim to be the sole rule of faith (sola scriptura). In fact, Scripture tells us that the Church, not the Bible, is the "pillar and foundation of truth" (1 Timothy 3:15).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why does the Catholic Bible have more books than Protestant Bibles?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The Catholic Bible contains 73 books (46 in the Old Testament and 27 in the New Testament), while most Protestant Bibles contain 66 books (39 in the Old Testament and 27 in the New Testament). The difference lies in the Old Testament, where Catholic Bibles include seven additional books: Tobit, Judith, Wisdom, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees, plus additional sections in the books of Esther and Daniel.
                      </p>
                      <p>
                        These additional books are called "deuterocanonical" by Catholics and "apocryphal" by Protestants. They were part of the Septuagint, the Greek translation of the Old Testament used by Greek-speaking Jews and early Christians, including the apostles (many New Testament quotes from the Old Testament come from the Septuagint).
                      </p>
                      <p>
                        The early Church accepted these books as Scripture. They were formally affirmed as canonical by several Church councils, including the Council of Rome (382 AD), the Council of Hippo (393 AD), and the Council of Carthage (397 AD).
                      </p>
                      <p>
                        It wasn't until the Protestant Reformation in the 16th century that these books were removed from some Bibles. Martin Luther and other reformers, following the Jewish canon established after the time of Christ, removed these books from their canon.
                      </p>
                      <p>
                        Catholic, Orthodox, and other Eastern Churches continue to recognize these books as divinely inspired Scripture, as did all Christians for the first 1500 years of Christianity.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why can't Catholics interpret the Bible for themselves?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        This is a misconception. Catholics are encouraged to read and study the Bible, and personal interpretation is not forbidden. However, the Catholic Church teaches that Scripture should be interpreted within the context of the Church's teaching tradition and under the guidance of the Magisterium (the Church's teaching authority).
                      </p>
                      <p>
                        This approach recognizes several important points:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Scripture itself acknowledges that some passages are difficult to understand and can be distorted (2 Peter 3:16).</li>
                        <li>The Bible needs to be interpreted as a whole, not in isolated passages taken out of context.</li>
                        <li>The Holy Spirit guides the Church in its understanding of Scripture (John 16:13).</li>
                        <li>The Church, which compiled the Bible under the guidance of the Holy Spirit, has the authority to interpret it authentically.</li>
                      </ul>
                      <p>
                        Far from restricting access to Scripture, the Church encourages biblical literacy among the faithful. Pope Benedict XVI emphasized, "I would like in particular to recall and recommend the ancient tradition of Lectio divina: the diligent reading of Sacred Scripture accompanied by prayer."
                      </p>
                      <p>
                        The Catechism states: "The Church forcefully and specifically exhorts all the Christian faithful... to learn 'the surpassing knowledge of Jesus Christ,' by frequent reading of the divine Scriptures" (CCC 133).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* Worship & Devotion Tab */}
              <TabsContent value="worship">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Do Catholics worship Mary and the saints?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        No, Catholics do not worship Mary or the saints. Worship (latria) is given to God alone. Catholics honor (dulia) the saints and give special honor (hyperdulia) to Mary, but this is fundamentally different from the worship given to God.
                      </p>
                      <p>
                        Think of it this way: we might honor our national heroes or great figures in history by building monuments to them or naming streets after them, but we don't worship them. Similarly, Catholics honor Mary and the saints for their exemplary lives and their closeness to God.
                      </p>
                      <p>
                        When Catholics pray to saints, they are not worshiping them but asking for their intercession—their prayers on our behalf. This is similar to asking a friend to pray for you, except the saints, being in heaven, are closer to God and their prayers are particularly effective (James 5:16).
                      </p>
                      <p>
                        This practice is rooted in the belief in the communion of saints—the spiritual solidarity between the faithful on earth, the souls in purgatory, and the saints in heaven. The saints are not dead but alive in Christ (Luke 20:38) and remain active members of the Church.
                      </p>
                      <p>
                        Regarding Mary, Catholics honor her in a special way as the Mother of God (Luke 1:43) and the perfect disciple. Her unique role in salvation history and her closeness to Christ make her intercession particularly powerful, as demonstrated at the wedding at Cana (John 2:1-11).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics use statues if the Bible forbids "graven images"?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The biblical prohibition against "graven images" in Exodus 20:4-5 specifically forbids the making and worship of idols—images that are themselves treated as gods. It does not prohibit all religious art or imagery.
                      </p>
                      <p>
                        If we read the entire Bible, we see that God actually commanded the making of religious images in certain contexts. For example:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>In Exodus 25:18-20, God commands the making of two golden cherubim (angels) for the Ark of the Covenant.</li>
                        <li>In Numbers 21:8-9, God commands Moses to make a bronze serpent, which healed those who looked upon it.</li>
                        <li>In 1 Kings 6:23-29, Solomon's Temple (built according to God's instructions) contained carved cherubim, trees, and flowers.</li>
                      </ul>
                      <p>
                        Catholic teaching is clear that statues and images are not worshipped but serve as visual reminders of holy people and events, much like family photographs remind us of loved ones. They help us focus our prayers and meditations.
                      </p>
                      <p>
                        The Second Council of Nicaea (787 AD) explicitly addressed this issue, teaching that honor given to an image passes to the prototype (the person depicted), and that veneration of images is not the worship of matter but an expression of honor.
                      </p>
                      <p>
                        This teaching was reaffirmed by the Council of Trent, which stated that "the honor which is shown to them (images) is referred to the prototypes which they represent."
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics repeat prayers like the Rosary? Doesn't Jesus condemn vain repetition?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        In Matthew 6:7, Jesus cautions against "vain repetition" or "babbling" in prayer (depending on the translation). The key word is "vain"—He's criticizing insincere, mechanical prayer, not repetition itself.
                      </p>
                      <p>
                        Scripture contains many examples of acceptable repetitive prayer:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>In Psalm 136, the phrase "His mercy endures forever" is repeated 26 times.</li>
                        <li>In Isaiah 6:3, the angels in heaven continuously repeat "Holy, Holy, Holy."</li>
                        <li>In Revelation 4:8, the four living creatures repeat "Holy, Holy, Holy" day and night without ceasing.</li>
                        <li>Jesus Himself repeated the same prayer three times in the Garden of Gethsemane (Matthew 26:44).</li>
                      </ul>
                      <p>
                        The Rosary and other repetitive Catholic prayers are forms of meditative prayer. While the words may be repeated, each repetition is meant to be prayed mindfully, helping the faithful delve deeper into the mysteries of faith. The repetition creates a rhythm that helps focus the mind and heart on God.
                      </p>
                      <p>
                        St. John Paul II described the Rosary as "a prayer of great significance, destined to bring forth a harvest of holiness" and emphasized that it's "not a question of reciting prayers, but of allowing God to think in us, to love in us, to pray in us."
                      </p>
                      <p>
                        Far from being vain repetition, these prayers are tools that help us raise our minds and hearts to God with humility and devotion.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* Moral Teaching Tab */}
              <TabsContent value="moral">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why is the Catholic Church opposed to contraception?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The Catholic Church teaches that the conjugal act has two inseparable purposes: the unitive (expressing and strengthening the bond between husband and wife) and the procreative (openness to new life). Contraception deliberately separates these two purposes, which the Church believes undermines God's design for sexuality and marriage.
                      </p>
                      <p>
                        This teaching is rooted in:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Scripture, where procreation is presented as a blessing (Genesis 1:28) and where deliberately frustrating the possibility of conception is condemned (Genesis 38:9-10).</li>
                        <li>Natural law, which suggests that the purpose of sexual faculties is both unitive and procreative.</li>
                        <li>The consistent teaching of the Church throughout history, reaffirmed in modern times in documents like Humanae Vitae and the Catechism of the Catholic Church.</li>
                      </ul>
                      <p>
                        It's important to note that the Church does support responsible parenthood and recognizes that there may be serious reasons to limit family size. For this reason, it promotes Natural Family Planning (NFP), which works with a woman's natural fertility cycles and doesn't actively suppress or destroy fertility.
                      </p>
                      <p>
                        The Church's teaching is ultimately about respecting God's design for human sexuality, fostering self-giving love rather than self-seeking pleasure, and recognizing children as a gift rather than a burden to be avoided.
                      </p>
                      <p>
                        Pope Paul VI also warned in Humanae Vitae that widespread use of contraception would lead to increased marital infidelity, a general lowering of moral standards, a loss of respect for women, and government coercion in reproductive matters—predictions that many argue have been borne out in society.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why doesn't the Church ordain women as priests?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The Catholic Church teaches that it has no authority to ordain women as priests, a position most definitively stated by Pope John Paul II in the apostolic letter Ordinatio Sacerdotalis (1994). This teaching is not based on any belief in women's inferiority but on the Church's understanding of the nature of the priesthood.
                      </p>
                      <p>
                        The Church's position is based on several factors:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Christ chose only men as his apostles, despite the fact that He often acted counter-culturally and had many female disciples.</li>
                        <li>The apostles continued this practice, ordaining only men despite the active role of women in the early Church.</li>
                        <li>The priest acts in persona Christi ("in the person of Christ"), particularly in the Eucharist, and the maleness of Christ is considered essential to His incarnation, not incidental.</li>
                        <li>The unbroken tradition of the Church for 2,000 years has been to ordain only men.</li>
                      </ul>
                      <p>
                        While the Church reserves priesthood to men, it strongly affirms the equal dignity of women and men, who are created in God's image and likeness (Genesis 1:27). The Church encourages the active participation of women in many roles within the Church and society.
                      </p>
                      <p>
                        Many women have played vital roles in the Church throughout history—from Mary, the Mother of God, to the women disciples who remained at the cross and were the first witnesses to the resurrection, to great women saints, mystics, and doctors of the Church like St. Teresa of Ávila, St. Catherine of Siena, and St. Thérèse of Lisieux.
                      </p>
                      <p>
                        Pope Francis has reaffirmed the Church's teaching on this matter while also calling for a more incisive female presence in the Church and expanded leadership roles for women in areas not tied to ordination.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why does the Church oppose same-sex marriage?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The Catholic Church's teaching on marriage stems from its understanding of human nature and God's plan for creation. The Church teaches that marriage, by its nature, is a covenant between one man and one woman, oriented toward the procreation and education of children and the mutual support of the spouses.
                      </p>
                      <p>
                        This understanding is based on:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Scripture, which presents marriage as the union of a man and a woman (Genesis 2:24, Matthew 19:4-6).</li>
                        <li>Natural law, which recognizes the complementarity of the sexes and the unique procreative potential of the union of man and woman.</li>
                        <li>The consistent teaching tradition of the Church throughout history.</li>
                      </ul>
                      <p>
                        While the Church cannot support same-sex marriage, it explicitly teaches that people with homosexual inclinations "must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided" (Catechism of the Catholic Church, 2358).
                      </p>
                      <p>
                        The Church distinguishes between homosexual inclinations (which are not sinful in themselves) and homosexual acts (which, like all sexual acts outside of marriage, are considered contrary to natural law and Scripture).
                      </p>
                      <p>
                        All people, regardless of sexual orientation, are called to chastity according to their state in life. For those not called to marriage as the Church understands it, this means living celibately.
                      </p>
                      <p>
                        The Church's position is not motivated by animus but by a commitment to uphold what it believes to be the truth about human sexuality and marriage. Pope Francis has emphasized the need to accompany everyone with mercy and compassion while maintaining the Church's teaching on marriage.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* Church & Authority Tab */}
              <TabsContent value="church">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      How can the Pope be infallible when some Popes have been corrupt?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        Papal infallibility is one of the most misunderstood Catholic doctrines. It does not mean that the Pope is sinless, impeccable, or always right about everything. Rather, it means that under specific and limited conditions, the Pope is preserved from error when defining doctrine on faith and morals.
                      </p>
                      <p>
                        For a papal teaching to be considered infallible, it must meet these criteria:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The Pope must speak ex cathedra ("from the chair" of Peter), meaning he is explicitly exercising his office as supreme pastor and teacher of all Christians.</li>
                        <li>He must be defining a doctrine concerning faith or morals.</li>
                        <li>He must be speaking with the clear intention of binding the whole Church to this teaching.</li>
                      </ul>
                      <p>
                        These conditions are rarely met. Most papal statements, including daily homilies, interviews, encyclicals, etc., are not considered infallible pronouncements (though they still require respectful consideration).
                      </p>
                      <p>
                        The personal moral character of a Pope does not affect the doctrine of infallibility. Just as a corrupt judge can still make valid legal rulings based on the law, a Pope's personal failings do not prevent the Holy Spirit from protecting the Church from error in formal dogmatic definitions.
                      </p>
                      <p>
                        It's worth noting that this protection is not for the Pope's personal benefit but for the Church. As Christ promised, "the gates of hell shall not prevail against it" (Matthew 16:18). The doctrine of infallibility gives Catholics confidence that, despite human weakness, the essential teachings of the faith are preserved intact.
                      </p>
                      <p>
                        Even when Popes have led scandalous personal lives (particularly during the Renaissance), none has attempted to formally define heretical teaching as dogma of the Church—a notable fact given human nature and the long history of the papacy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics call priests "Father" when Jesus said to call no man father?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        In Matthew 23:9, Jesus says, "Call no man your father on earth, for you have one Father, who is in heaven." Taken literally and in isolation, this would prohibit calling anyone "father," including our biological fathers. However, the Bible must be interpreted in context and with consideration of the whole of Scripture.
                      </p>
                      <p>
                        Throughout the Bible, the term "father" is used for people other than God:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Jesus Himself refers to Abraham as "father" multiple times (John 8:56).</li>
                        <li>In the parable of the rich man and Lazarus, Jesus has the rich man refer to "Father Abraham" (Luke 16:24).</li>
                        <li>Stephen addresses the Jewish leaders as "fathers" in Acts 7:2.</li>
                        <li>Paul refers to himself as a spiritual father: "For I became your father in Christ Jesus through the gospel" (1 Corinthians 4:15).</li>
                        <li>John addresses the "fathers" in the community (1 John 2:13-14).</li>
                      </ul>
                      <p>
                        In Matthew 23, Jesus is criticizing the religious leaders of His time for their pride and hypocrisy, not establishing a prohibition against using titles. He uses similar language about not calling anyone "teacher" or "instructor," yet Christians clearly have teachers.
                      </p>
                      <p>
                        The title "Father" for priests acknowledges their spiritual paternity. Like Paul, they beget spiritual children through the gospel and the sacraments. The title expresses the familial nature of the Church, where we are all brothers and sisters in Christ, with spiritual fathers who care for and guide us.
                      </p>
                      <p>
                        The key is that human fatherhood—biological or spiritual—is meant to reflect and point to God's perfect fatherhood, not compete with or replace it.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Was the Church responsible for the Inquisition and witch hunts?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The relationship between the Catholic Church and historical events like the Inquisition and witch hunts is complex and often misunderstood or exaggerated in popular culture.
                      </p>
                      <p>
                        Regarding the Inquisition:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>There were several different inquisitions across different times and regions, not a single monolithic institution.</li>
                        <li>The purpose was to combat heresy, which was seen as threatening both religious and social order in a time when church and state were closely intertwined.</li>
                        <li>While modern standards of religious freedom and due process were violated, the Inquisition's courts were often more procedurally fair than secular courts of the time.</li>
                        <li>The number of executions has been greatly exaggerated in popular accounts. Modern historical research suggests that the Spanish Inquisition, for example, executed about 3,000-5,000 people over its 350-year existence—far fewer than often claimed.</li>
                        <li>The Church often moderated secular authorities who were more zealous in persecution.</li>
                      </ul>
                      <p>
                        Regarding witch hunts:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The major European witch hunts occurred primarily in the 16th and 17th centuries, during the Reformation and Counter-Reformation period.</li>
                        <li>They were more prevalent in areas of religious conflict and were conducted by both Catholic and Protestant authorities.</li>
                        <li>The Church's official position was often more skeptical about witchcraft accusations than local secular authorities. The Roman Inquisition was frequently more restrained than secular courts.</li>
                        <li>In 1258, Pope Alexander IV instructed inquisitors not to pursue witchcraft cases unless there was clear evidence of heresy.</li>
                      </ul>
                      <p>
                        Pope St. John Paul II acknowledged these and other historical mistakes in his "Day of Pardon" (March 12, 2000), seeking forgiveness for sins committed by members of the Church throughout history. This recognition doesn't deny the complex historical contexts but acknowledges that these actions did not reflect the spirit of the Gospel.
                      </p>
                      <p>
                        Historical perspective is important, but so is acknowledging that the use of coercion in matters of faith contradicts the dignity of the human person and the authentic nature of religion.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* Sacraments Tab */}
              <TabsContent value="sacraments">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics believe in the Real Presence of Christ in the Eucharist?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        Catholics believe that in the Eucharist, the bread and wine truly become the Body and Blood of Christ—not merely symbolically or metaphorically, but substantially. This belief, known as the Real Presence, is rooted in Scripture, Church tradition, and theological reflection.
                      </p>
                      <p>
                        Scriptural foundations include:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Jesus' own words at the Last Supper: "This is my body... This is my blood" (Matthew 26:26-28, Mark 14:22-24, Luke 22:19-20).</li>
                        <li>Jesus' discourse in John 6, where He says, "My flesh is true food, and my blood is true drink" (John 6:55) and insists on the literal meaning even when many disciples leave Him over this teaching.</li>
                        <li>St. Paul's warning about receiving the Eucharist unworthily in 1 Corinthians 11:27-29, which only makes sense if Christ is truly present.</li>
                      </ul>
                      <p>
                        The early Church consistently understood the Eucharist as truly containing Christ. St. Ignatius of Antioch (c. 110 AD) wrote of those who "abstain from the Eucharist and from prayer because they do not confess that the Eucharist is the flesh of our Savior Jesus Christ." Similar testimonies come from Justin Martyr, Irenaeus, Tertullian, and others.
                      </p>
                      <p>
                        Theologically, the Real Presence is explained through transubstantiation—the idea that while the appearances (accidents) of bread and wine remain, their substance is changed into Christ's Body and Blood. This occurs through the power of the Holy Spirit and the words of Christ spoken by the priest at consecration.
                      </p>
                      <p>
                        The Real Presence allows for a unique intimacy with Christ, who gives Himself to us completely. It fulfills His promise to be with us always (Matthew 28:20) in the most tangible way and unites the Church as one Body of Christ (1 Corinthians 10:16-17).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics confess sins to a priest instead of directly to God?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        Catholics do confess their sins directly to God, but they do so through the mediation of a priest in the Sacrament of Reconciliation. This practice is not meant to replace personal prayer for forgiveness but is an additional, sacramental means of receiving God's mercy.
                      </p>
                      <p>
                        The biblical basis for confession to a priest includes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Jesus' words to the apostles after His resurrection: "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you retain the sins of any, they are retained" (John 20:22-23).</li>
                        <li>James 5:16: "Therefore, confess your sins to one another and pray for one another, that you may be healed."</li>
                        <li>The practice in the early Church of public confession and reconciliation for serious sins.</li>
                      </ul>
                      <p>
                        For the apostles (and their successors, the bishops and priests) to exercise the power to forgive or retain sins, they would need to know what those sins are—hence the necessity of confession.
                      </p>
                      <p>
                        Beyond the theological reasons, there are profound psychological and spiritual benefits to spoken confession:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The act of verbally acknowledging our sins helps us take responsibility for them.</li>
                        <li>Hearing the words of absolution provides concrete assurance of forgiveness.</li>
                        <li>The priest can offer guidance, counsel, and appropriate penance to help in the healing process.</li>
                        <li>The humility required to confess to another person helps counter the pride that often underlies sin.</li>
                      </ul>
                      <p>
                        The priest acts in persona Christi (in the person of Christ), so while the penitent speaks to a human minister, it is Christ who hears the confession and grants forgiveness through the priest. The priest is bound by the seal of confession to maintain absolute confidentiality.
                      </p>
                      <p>
                        Finally, confession acknowledges the communal dimension of sin. Even private sins affect the Body of Christ, and the Sacrament of Reconciliation restores not just our relationship with God but with the Church community.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold text-church-burgundy">
                      Why do Catholics baptize infants when babies can't have faith?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 space-y-4 px-4">
                      <p>
                        The Catholic practice of infant baptism reflects the Church's understanding of baptism as a sacrament of faith that operates through God's grace rather than through the recipient's conscious understanding.
                      </p>
                      <p>
                        Several reasons underlie this practice:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Baptism is seen as the New Covenant equivalent of circumcision (Colossians 2:11-12), which was administered to Jewish boys on the eighth day after birth.</li>
                        <li>The Bible records entire households being baptized (Acts 16:15, 16:33, 1 Corinthians 1:16), which likely included children.</li>
                        <li>Jesus welcomed little children, saying "Let the children come to me, and do not hinder them; for to such belongs the kingdom of heaven" (Matthew 19:14).</li>
                        <li>The early Church practiced infant baptism. Origen (c. 185-254 AD) wrote that the Church had received from the apostles the tradition to baptize infants.</li>
                      </ul>
                      <p>
                        While personal faith is important, baptism is primarily about God's action and grace, not our own understanding or decision. In infant baptism, the faith of the Church, represented by the parents and godparents, surrounds and supports the child until they can personally appropriate the faith.
                      </p>
                      <p>
                        This understanding reflects the Catholic view that salvation involves both God's grace and human response—but God's initiative always comes first. Baptism initiates the child into the covenant community where they will be raised in the faith and eventually make it their own through confirmation.
                      </p>
                      <p>
                        For adults, of course, personal faith and repentance are prerequisites for baptism. But for infants, the Church has always recognized baptism as the ordinary means of salvation, not wanting to deny children the grace of becoming children of God and members of the Church simply because they are too young to make a conscious choice.
                      </p>
                      <p>
                        Parents who have their children baptized take on the serious responsibility of raising them in the faith so that the seed planted at baptism can grow and bear fruit throughout the child's life.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Conversion Stories */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Conversion Stories" 
              subtitle="Testimonies of those who have embraced the Catholic faith"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Conversion Story 1 */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-burgundy/90">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">From Atheism to Catholicism</h3>
                  <p className="text-gray-500 text-sm mb-4">John Smith, Converted 2018</p>
                  <p className="text-gray-700 mb-4">
                    "As a scientist and atheist, I thought faith was irrational. My journey to Catholicism began with philosophical questions about meaning and morality that science alone couldn't answer."
                  </p>
                  <a 
                    href="/apologetics/conversion-stories/john-smith"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Conversion Story 2 */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-navy/90">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">Finding the Fullness of Faith</h3>
                  <p className="text-gray-500 text-sm mb-4">Mary Johnson, Converted 2020</p>
                  <p className="text-gray-700 mb-4">
                    "Raised Protestant, I never imagined becoming Catholic. It was the Church's historical continuity, sacramental life, and answers to difficult theological questions that drew me home."
                  </p>
                  <a 
                    href="/apologetics/conversion-stories/mary-johnson"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Conversion Story 3 */}
              <Card className="shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-church-gold/90">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-2">A Muslim's Journey to Christ</h3>
                  <p className="text-gray-500 text-sm mb-4">Ahmed Patel, Converted 2017</p>
                  <p className="text-gray-700 mb-4">
                    "The journey from Islam to Catholicism was challenging and rewarding. It was the Church's teaching on human dignity, love of neighbor, and the person of Jesus that transformed my life."
                  </p>
                  <a 
                    href="/apologetics/conversion-stories/ahmed-patel"
                    className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                  >
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button
                href="/apologetics/conversion-stories"
                variant="primary"
              >
                More Conversion Stories
              </Button>
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section id="resources" className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Apologetics Resources" 
              subtitle="Tools to help you better understand and explain the Catholic faith"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Books */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <BookOpen className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Recommended Books</h3>
                <p className="text-gray-700 mb-4">
                  Essential reading for those wanting to deepen their understanding of Catholic teaching and how to explain it to others.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Catholicism (Bishop Robert Barron)</li>
                  <li>Catholic Christianity (Peter Kreeft)</li>
                  <li>Why We're Catholic (Trent Horn)</li>
                  <li>The Case for Catholicism (Trent Horn)</li>
                  <li>Rome Sweet Home (Scott and Kimberly Hahn)</li>
                </ul>
                <a 
                  href="/apologetics/book-recommendations"
                  className="text-church-burgundy hover:text-church-gold font-medium"
                >
                  View Complete Reading List
                </a>
              </div>
              
              {/* Downloadable Resources */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <FileText className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Downloadable Resources</h3>
                <p className="text-gray-700 mb-4">
                  Printable guides, cheat sheets, and pamphlets to help you answer common questions about Catholicism.
                </p>
                <ul className="space-y-2 mb-4">
                  <li>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-church-burgundy hover:text-church-gold"
                    >
                      <Download className="w-4 h-4" /> Quick Answers to Common Objections
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-church-burgundy hover:text-church-gold"
                    >
                      <Download className="w-4 h-4" /> Biblical Defense of Catholic Doctrines
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-church-burgundy hover:text-church-gold"
                    >
                      <Download className="w-4 h-4" /> Guide to Scripture for Catholics
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-church-burgundy hover:text-church-gold"
                    >
                      <Download className="w-4 h-4" /> Understanding the Mass
                    </a>
                  </li>
                </ul>
                <a 
                  href="/apologetics/downloads"
                  className="text-church-burgundy hover:text-church-gold font-medium"
                >
                  View All Downloads
                </a>
              </div>
              
              {/* Online Resources */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <Shield className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Online Resources</h3>
                <p className="text-gray-700 mb-4">
                  Websites, YouTube channels, and podcasts that offer excellent Catholic apologetics content.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Catholic Answers (catholic.com)</li>
                  <li>Word on Fire (wordonfire.org)</li>
                  <li>Ascension Presents (YouTube)</li>
                  <li>Pints with Aquinas (Podcast)</li>
                  <li>Catholic Answers Focus (Podcast)</li>
                </ul>
                <a 
                  href="/apologetics/online-resources"
                  className="text-church-burgundy hover:text-church-gold font-medium"
                >
                  View Complete List
                </a>
              </div>
              
              {/* Study Guides */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <BookOpen className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Apologetics Study Guides</h3>
                <p className="text-gray-700 mb-4">
                  Structured guides for individuals or groups who want to systematically learn Catholic apologetics.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Beginning Apologetics</li>
                  <li>Scriptural Defense of Catholic Teaching</li>
                  <li>Historical Foundations of the Faith</li>
                  <li>Moral Teaching Explained</li>
                  <li>Understanding the Sacraments</li>
                </ul>
                <a 
                  href="/apologetics/study-guides"
                  className="text-church-burgundy hover:text-church-gold font-medium"
                >
                  View Study Guides
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Apologetics Group */}
        <section className="py-16 bg-church-burgundy text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Parish Apologetics Group</h2>
                <p className="text-white/90 mb-6">
                  Join our parish apologetics group to deepen your understanding of Catholic teaching and learn how to effectively share and defend the faith with others.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Meeting Times</h3>
                      <p className="text-white/80">Every 2nd Wednesday, 7:00 PM - 8:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-church-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Current Topic</h3>
                      <p className="text-white/80">The Eucharist: History, Scripture, and Apologetics</p>
                    </div>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant="glass"
                  className="bg-white/20 hover:bg-white/30 border-white/10"
                >
                  Contact Apologetics Coordinator
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">How To Share Your Faith</h3>
                <p className="text-white/90 mb-6">
                  Effective apologetics isn't just about winning arguments—it's about sharing the truth with charity and clarity. Here are some principles to guide your conversations:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Know Your Faith</h4>
                      <p className="text-white/80 text-sm">Understand what the Church teaches and why. Be prepared to explain doctrines clearly and correctly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Listen First</h4>
                      <p className="text-white/80 text-sm">Understand the person's genuine questions or objections before responding. Ask clarifying questions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Speak with Charity</h4>
                      <p className="text-white/80 text-sm">Remember that the goal is to share truth in love, not to win arguments. Tone and attitude matter.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Use Scripture</h4>
                      <p className="text-white/80 text-sm">Be familiar with biblical foundations for Catholic teachings. Many people respect scriptural arguments.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Be Patient</h4>
                      <p className="text-white/80 text-sm">Conversion is a journey that often takes time. Plant seeds and let the Holy Spirit work.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Have Questions?</h2>
              <p className="text-lg text-gray-700 mb-8">
                If you have questions about the Catholic faith that weren't answered here, please don't hesitate to reach out. Our parish apologetics team is happy to help you find answers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  href="/contact"
                  variant="primary"
                >
                  Contact Us
                </Button>
                <Button 
                  href="/about"
                  variant="outline"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Learn More About Our Parish
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apologetics;
