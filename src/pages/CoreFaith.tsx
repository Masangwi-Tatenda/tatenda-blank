
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { BookOpen, BookText, Heart, Scale, Cross, Church, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CoreFaith = () => {
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
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528179062953-1151fa8acb2f")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Core Faith & Doctrine</h1>
                <p className="text-xl text-white/90">Exploring the richness of Catholic teaching, tradition, and belief</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">The Catholic Faith</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Catholic Church traces its foundation to Jesus Christ and the Apostles. Through the centuries, the Church has defined its teachings primarily through Scripture, Tradition, and Magisterium—the teaching authority of the Church.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                On this page, you'll find accessible explanations of core Catholic beliefs, organized to help you navigate the essentials of our faith. Whether you're a lifelong Catholic, returning to the Church, or simply curious about what Catholics believe, we hope these resources will deepen your understanding.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <a 
                  href="#creed"
                  className="inline-flex items-center px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors"
                >
                  Explore Our Beliefs
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-church-burgundy text-church-burgundy rounded-md hover:bg-church-burgundy/10 transition-colors"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-gray-50" id="main-content">
          <div className="container-custom">
            <Tabs defaultValue="creed" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 mb-12">
                <TabsTrigger value="creed">The Creed</TabsTrigger>
                <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
                <TabsTrigger value="moral">Moral Teaching</TabsTrigger>
                <TabsTrigger value="prayer">Prayer & Worship</TabsTrigger>
                <TabsTrigger value="church">Church & Authority</TabsTrigger>
              </TabsList>
              
              {/* The Creed Tab */}
              <TabsContent value="creed" id="creed">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 lg:sticky lg:top-24">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <Cross className="w-10 h-10 text-church-gold mb-4" />
                      <h2 className="text-2xl font-bold text-church-burgundy mb-4">The Creed</h2>
                      <p className="text-gray-700 mb-6">
                        The Apostles' Creed and Nicene Creed summarize the core beliefs that unite all Catholics. They express our faith in God as Trinity: Father, Son, and Holy Spirit.
                      </p>
                      <div className="space-y-4">
                        <a 
                          href="#"
                          className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download Apostles' Creed
                        </a>
                        <a 
                          href="#"
                          className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download Nicene Creed
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <SectionTitle 
                      title="Articles of Faith" 
                      subtitle="The fundamental beliefs expressed in the Creed"
                      align="left"
                    />
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">I believe in God, the Father Almighty</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Catholics believe in one God who is the creator of heaven and earth, of all things visible and invisible. God is almighty, meaning that God has supreme power and authority over all creation.
                          </p>
                          <p>
                            The term "Father" reveals God's relationship with humanity. God is not literally male, but the term Father signifies God's loving care, protection, and guidance for his creation, particularly for human beings who are created in his image.
                          </p>
                          <p>
                            This first article of faith affirms monotheism—belief in one God—while also setting the foundation for understanding God as Trinity: Father, Son, and Holy Spirit.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">I believe in Jesus Christ, His only Son</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The second article of faith focuses on Jesus Christ, the second person of the Trinity. Catholics believe that Jesus is both fully God and fully human—a mystery known as the Incarnation.
                          </p>
                          <p>
                            As the only Son of God, Jesus has a unique relationship with God the Father. He was not created but rather eternally begotten of the Father, sharing the same divine nature.
                          </p>
                          <p>
                            Through his life, death, and resurrection, Jesus accomplished salvation for humanity. His sacrifice on the cross reconciled humanity with God, and his resurrection conquered death, offering eternal life to believers.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">I believe in the Holy Spirit</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Holy Spirit is the third person of the Trinity, equally God with the Father and the Son. Catholics believe the Holy Spirit proceeds from the Father and the Son and is one in being with them.
                          </p>
                          <p>
                            The Holy Spirit continues Christ's work in the world today, particularly through the Church. It is through the Holy Spirit that the Church is guided into all truth and empowered for ministry.
                          </p>
                          <p>
                            On a personal level, the Holy Spirit dwells within each baptized Christian, bestowing spiritual gifts, producing spiritual fruit, and helping believers grow in holiness.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">I believe in the Holy Catholic Church</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Catholic Church was founded by Jesus Christ and entrusted to the apostles, with Peter as the head. Catholics believe the Church is the living Body of Christ in the world today.
                          </p>
                          <p>
                            The Church has four marks: it is one (united in faith, worship, and governance), holy (set apart for God's purposes), catholic (universal and comprehensive), and apostolic (in continuity with the apostles' teaching and ministry).
                          </p>
                          <p>
                            Through the Church, Christ continues his work of teaching, sanctifying, and governing. The Church serves as the primary means through which God's grace is communicated to the world.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">The Communion of Saints & Forgiveness of Sins</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The communion of saints refers to the spiritual solidarity between the faithful on earth, the souls in purgatory, and the saints in heaven. This communion transcends death, allowing for intercessory prayer and spiritual support across these three states.
                          </p>
                          <p>
                            Catholics believe in the forgiveness of sins through Christ's sacrifice on the cross. This forgiveness is made available through the sacraments, particularly Baptism and Reconciliation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Resurrection of the Body & Life Everlasting</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            At the end of time, Catholics believe that all people will be bodily resurrected. This resurrection will be physical, not merely spiritual, affirming the goodness of the body as created by God.
                          </p>
                          <p>
                            After the resurrection comes the final judgment, where each person will be judged according to their faith and works. Those who die in God's grace and friendship will live forever with Christ in heaven, experiencing the beatific vision—the direct experience of God.
                          </p>
                          <p>
                            This hope in eternal life gives meaning and purpose to the present life and provides comfort in the face of death.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              {/* Sacraments Tab */}
              <TabsContent value="sacraments" id="sacraments">
                <SectionTitle 
                  title="The Seven Sacraments" 
                  subtitle="Visible signs of God's invisible grace"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {/* Baptism */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Baptism</h3>
                      <p className="text-gray-700 mb-4">
                        The first sacrament of initiation, Baptism frees a person from original sin and marks their rebirth in Christ and formal entry into the Church.
                      </p>
                      <a 
                        href="/sacraments/baptism"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Confirmation */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Confirmation</h3>
                      <p className="text-gray-700 mb-4">
                        The second sacrament of initiation, Confirmation completes baptismal grace and strengthens one's bond with the Church through the gifts of the Holy Spirit.
                      </p>
                      <a 
                        href="/sacraments/confirmation"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Eucharist */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Eucharist</h3>
                      <p className="text-gray-700 mb-4">
                        The third sacrament of initiation, the Eucharist is the "source and summit" of Christian life, in which Christ is truly present under the appearances of bread and wine.
                      </p>
                      <a 
                        href="/sacraments/communion"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Reconciliation */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Reconciliation</h3>
                      <p className="text-gray-700 mb-4">
                        Also known as Confession, the sacrament of Reconciliation offers God's forgiveness for sins committed after Baptism through sincere repentance and absolution.
                      </p>
                      <a 
                        href="/sacraments/reconciliation"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Anointing of the Sick */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Anointing of the Sick</h3>
                      <p className="text-gray-700 mb-4">
                        This sacrament provides spiritual healing and comfort to those suffering from serious illness or approaching death, uniting their suffering with Christ's.
                      </p>
                      <a 
                        href="/sacraments/anointing"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Holy Orders */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Holy Orders</h3>
                      <p className="text-gray-700 mb-4">
                        The sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church through ordained ministry.
                      </p>
                      <a 
                        href="/vocations"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  
                  {/* Matrimony */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-church-burgundy flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <BookText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Matrimony</h3>
                      <p className="text-gray-700 mb-4">
                        In this sacrament, a baptized man and woman establish a permanent and exclusive covenant, receiving grace to strengthen their union and help them attain holiness.
                      </p>
                      <a 
                        href="/sacraments/marriage"
                        className="text-church-burgundy hover:text-church-gold font-medium"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Moral Teaching Tab */}
              <TabsContent value="moral" id="moral-teaching">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 lg:sticky lg:top-24">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <Scale className="w-10 h-10 text-church-gold mb-4" />
                      <h2 className="text-2xl font-bold text-church-burgundy mb-4">Catholic Moral Teaching</h2>
                      <p className="text-gray-700 mb-6">
                        Catholic moral teaching provides guidance on how to live a virtuous life in accordance with God's will. It is rooted in the dignity of the human person and oriented toward human flourishing.
                      </p>
                      <div className="space-y-4">
                        <a 
                          href="#"
                          className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download Guide to Catholic Morality
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <SectionTitle 
                      title="Foundations of Catholic Morality" 
                      subtitle="Principles that guide moral decision-making"
                      align="left"
                    />
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Human Dignity</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Catholic moral teaching begins with the fundamental principle of human dignity. Each person is created in the image and likeness of God, giving every human being intrinsic worth and dignity that must be respected.
                          </p>
                          <p>
                            This dignity is universal and inalienable—it cannot be taken away or surrendered. It exists in each person regardless of age, ability, social status, or any other factor.
                          </p>
                          <p>
                            From this principle flows the Church's consistent defense of human life at all stages, from conception to natural death, and its call to respect the dignity of every person.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Natural Law</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Natural law refers to the moral law that is inscribed in human nature and is accessible to human reason. It is based on the idea that certain goods and principles are universally recognizable as contributing to human flourishing.
                          </p>
                          <p>
                            The Catholic understanding of natural law holds that God has created human beings with a nature oriented toward specific goods, and that acting in accordance with these goods leads to fulfillment.
                          </p>
                          <p>
                            This approach allows the Church to engage in moral dialogue with all people, not just Catholics, by appealing to shared human reason rather than only to revelation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">The Ten Commandments & Beatitudes</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Ten Commandments, given to Moses on Mount Sinai, provide a foundational moral framework for Catholic life. They are not merely prohibitions but are designed to protect important human goods.
                          </p>
                          <p>
                            The Beatitudes, proclaimed by Jesus in the Sermon on the Mount, go beyond the minimum requirements of the Commandments to describe the characteristics of a life lived in the fullness of God's kingdom.
                          </p>
                          <p>
                            Together, the Commandments and Beatitudes form a comprehensive vision of the moral life, moving from basic obligations to the perfection of charity.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Virtue Ethics</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Catholic moral teaching emphasizes the development of virtue—stable dispositions to do what is good. Through practice and grace, these virtues become habitual ways of acting.
                          </p>
                          <p>
                            The Church recognizes four cardinal virtues (prudence, justice, fortitude, and temperance) and three theological virtues (faith, hope, and charity). These virtues guide moral decision-making and shape character.
                          </p>
                          <p>
                            By growing in virtue, a person becomes more capable of discerning and choosing the good, not merely avoiding the wrong.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Social Teaching</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Catholic social teaching applies moral principles to social, economic, and political issues. It is based on the dignity of the human person and the social nature of humanity.
                          </p>
                          <p>
                            Key principles include the common good, subsidiarity (addressing issues at the lowest appropriate level), solidarity (recognizing our interconnectedness), and preferential option for the poor.
                          </p>
                          <p>
                            These principles guide the Church's approach to issues such as poverty, economic justice, war and peace, environmental stewardship, and human rights.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              {/* Prayer & Worship Tab */}
              <TabsContent value="prayer">
                <SectionTitle 
                  title="Prayer & Worship" 
                  subtitle="The practice of communing with God and celebrating the faith"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* The Mass */}
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">The Holy Mass</h3>
                    <p className="text-gray-700 mb-4">
                      The Mass is the central act of worship in the Catholic Church, where the sacrifice of Christ on the cross is made present. Through the consecration, bread and wine become the Body and Blood of Christ.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The Mass consists of two main parts: the Liturgy of the Word (Scripture readings and homily) and the Liturgy of the Eucharist (preparation of gifts, consecration, and communion).
                    </p>
                    <p className="text-gray-700 mb-4">
                      For Catholics, participating in the Mass is not merely optional but is considered essential to spiritual growth and an obligation on Sundays and holy days.
                    </p>
                    <a 
                      href="/mass-times"
                      className="text-church-burgundy hover:text-church-gold font-medium"
                    >
                      View Mass Schedule
                    </a>
                  </div>
                  
                  {/* Personal Prayer */}
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">Personal Prayer</h3>
                    <p className="text-gray-700 mb-4">
                      Personal prayer is the practice of communicating with God outside of communal worship. It can take many forms, including vocal prayer, meditation, and contemplation.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The Church encourages Catholics to develop a regular habit of prayer, ideally setting aside time each day for this spiritual discipline.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Common Catholic prayers include the Our Father, Hail Mary, Glory Be, and the Rosary. However, prayer can also be spontaneous and conversational.
                    </p>
                    <a 
                      href="/spiritual-growth"
                      className="text-church-burgundy hover:text-church-gold font-medium"
                    >
                      Prayer Resources
                    </a>
                  </div>
                  
                  {/* The Liturgical Year */}
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">The Liturgical Year</h3>
                    <p className="text-gray-700 mb-4">
                      The liturgical year is the annual cycle of seasons and celebrations in the Church. It begins with Advent and includes Christmas, Ordinary Time, Lent, Easter, and more Ordinary Time.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Each season has its own themes, colors, and practices, helping Catholics enter into the mysteries of Christ's life, death, and resurrection throughout the year.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The liturgical year also includes feast days honoring Mary, the saints, and important events in the life of the Church, creating a rhythm of celebration and reflection.
                    </p>
                    <a 
                      href="/spiritual-growth/liturgical-calendar"
                      className="text-church-burgundy hover:text-church-gold font-medium"
                    >
                      View Liturgical Calendar
                    </a>
                  </div>
                  
                  {/* Devotions */}
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-church-burgundy mb-4">Devotions</h3>
                    <p className="text-gray-700 mb-4">
                      Devotions are popular expressions of faith that complement the liturgical life of the Church. They include practices such as the Rosary, Eucharistic Adoration, the Stations of the Cross, and novenas.
                    </p>
                    <p className="text-gray-700 mb-4">
                      While not part of the official liturgy, devotions are valued for the way they nurture faith, express cultural traditions, and provide opportunities for spiritual growth.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Many devotions focus on particular aspects of Catholic teaching, such as devotion to the Sacred Heart of Jesus, which emphasizes Christ's love, or devotion to Divine Mercy, which highlights God's forgiveness.
                    </p>
                    <a 
                      href="/spiritual-growth/devotions"
                      className="text-church-burgundy hover:text-church-gold font-medium"
                    >
                      Explore Catholic Devotions
                    </a>
                  </div>
                </div>
              </TabsContent>
              
              {/* Church & Authority Tab */}
              <TabsContent value="church">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 lg:sticky lg:top-24">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <Church className="w-10 h-10 text-church-gold mb-4" />
                      <h2 className="text-2xl font-bold text-church-burgundy mb-4">Church & Authority</h2>
                      <p className="text-gray-700 mb-6">
                        The Catholic Church has a hierarchical structure established by Christ, with authority flowing from him through the apostles to their successors, the bishops, in union with the Pope.
                      </p>
                      <div className="space-y-4">
                        <a 
                          href="#"
                          className="flex items-center gap-2 text-church-burgundy hover:text-church-gold transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download Church Structure Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <SectionTitle 
                      title="Authority in the Church" 
                      subtitle="Understanding the Church's teaching authority and structure"
                      align="left"
                    />
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">The Pope & College of Bishops</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Pope, as the Bishop of Rome, is the successor of St. Peter and the visible head of the Catholic Church. Catholics believe that the Pope has primacy over the Church and, under specific conditions, can teach infallibly on matters of faith and morals.
                          </p>
                          <p>
                            The College of Bishops, in union with the Pope, also exercises authority in the Church. Together, they continue the apostolic ministry of teaching, sanctifying, and governing.
                          </p>
                          <p>
                            This collegial authority is most visibly expressed in ecumenical councils, where bishops gather to address important matters of faith, morals, or discipline.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">The Magisterium</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Magisterium is the teaching authority of the Church, exercised by the Pope and bishops. Its role is to authentically interpret God's Word, whether in Scripture or Tradition.
                          </p>
                          <p>
                            The Magisterium can teach either ordinarily (through encyclicals, apostolic exhortations, etc.) or extraordinarily (through dogmatic definitions by the Pope or an ecumenical council).
                          </p>
                          <p>
                            Catholics are called to give religious assent to the teachings of the Magisterium, recognizing that they are guided by the Holy Spirit for the good of the faithful.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Scripture & Tradition</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            Catholic teaching is based on Divine Revelation, which is transmitted through both Sacred Scripture and Sacred Tradition. These are not two separate sources but two ways in which the one source of revelation is passed on.
                          </p>
                          <p>
                            Scripture is the inspired Word of God written under the inspiration of the Holy Spirit. The Catholic canon includes 73 books (46 in the Old Testament and 27 in the New Testament).
                          </p>
                          <p>
                            Tradition refers to the living transmission of the faith that comes from the apostles and has developed throughout history under the guidance of the Holy Spirit. It includes practices, teachings, and the sensus fidelium (the sense of the faithful).
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">The Hierarchy & Laity</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            The Church is structured hierarchically, with ordained ministers (bishops, priests, and deacons) exercising different levels of authority and service.
                          </p>
                          <p>
                            The laity—baptized members who are not ordained—have their own important role in the mission of the Church. Through baptism, all Catholics share in Christ's priestly, prophetic, and kingly offices.
                          </p>
                          <p>
                            While distinct, the roles of clergy and laity are complementary. The Second Vatican Council emphasized the universal call to holiness, affirming that all Christians, regardless of their state in life, are called to the fullness of the Christian life.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-xl font-semibold text-church-burgundy">Development of Doctrine</AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-4 px-4">
                          <p>
                            While the deposit of faith was completed with the death of the last apostle, the Church's understanding of this deposit can develop over time. This development is not change in the sense of contradiction but a deepening of understanding.
                          </p>
                          <p>
                            Authentic development maintains continuity with what came before, building upon rather than replacing earlier understandings. It is guided by the Holy Spirit, who leads the Church "into all truth" (John 16:13).
                          </p>
                          <p>
                            This understanding of development allows the Church to address new questions and challenges while remaining faithful to the apostolic faith.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16 bg-church-burgundy text-white">
          <div className="container-custom">
            <SectionTitle 
              title="Additional Resources" 
              subtitle="Deepen your understanding of Catholic teaching"
              className="text-white"
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="/church-documents" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-church-gold transition-colors">Church Documents</h3>
                <p className="text-white/80 mb-4">
                  Explore papal encyclicals, Vatican II documents, and other official teachings of the Church.
                </p>
                <span className="text-church-gold group-hover:text-white transition-colors">View Documents →</span>
              </a>
              
              <a href="/apologetics" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-church-gold transition-colors">Apologetics</h3>
                <p className="text-white/80 mb-4">
                  Find answers to common questions and objections about Catholic teaching and practice.
                </p>
                <span className="text-church-gold group-hover:text-white transition-colors">Learn More →</span>
              </a>
              
              <a href="/education-formation" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-church-gold transition-colors">Faith Formation</h3>
                <p className="text-white/80 mb-4">
                  Access resources for ongoing faith education for all ages and stages of life.
                </p>
                <span className="text-church-gold group-hover:text-white transition-colors">View Programs →</span>
              </a>
              
              <a href="/contact" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-church-gold transition-colors">Ask a Question</h3>
                <p className="text-white/80 mb-4">
                  Have questions about Catholic teaching? Contact our Faith Formation coordinator.
                </p>
                <span className="text-church-gold group-hover:text-white transition-colors">Contact Us →</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoreFaith;
