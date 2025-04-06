
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { FileText, Download, Search, BookOpen, Filter, ArrowRight, ChevronDown, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from '@/components/common/Button';

// Define document types
interface Document {
  id: string;
  title: string;
  category: string;
  type: string;
  year: number;
  pope?: string;
  summary: string;
  url: string;
}

const ChurchDocuments = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example documents data (in a real app, this would come from an API)
  const [documents] = useState<Document[]>([
    {
      id: "1",
      title: "Evangelium Vitae",
      category: "encyclical",
      type: "Social Teaching",
      year: 1995,
      pope: "John Paul II",
      summary: "Addresses the sanctity of human life from conception to natural death, condemning abortion, euthanasia, and the death penalty.",
      url: "#"
    },
    {
      id: "2",
      title: "Lumen Gentium",
      category: "vatican-ii",
      type: "Dogmatic Constitution",
      year: 1964,
      summary: "Describes the nature of the Church as the 'light of nations' and explains its hierarchical structure, the role of the laity, and the universal call to holiness.",
      url: "#"
    },
    {
      id: "3",
      title: "Catechism of the Catholic Church",
      category: "catechism",
      type: "Catechism",
      year: 1992,
      summary: "A comprehensive summary of Catholic belief covering the creed, sacraments, commandments, and prayer.",
      url: "#"
    },
    {
      id: "4",
      title: "Amoris Laetitia",
      category: "apostolic-exhortation",
      type: "Family Life",
      year: 2016,
      pope: "Francis",
      summary: "On love in the family, addresses pastoral care for families in various situations, including those in 'irregular' situations.",
      url: "#"
    },
    {
      id: "5",
      title: "Humanae Vitae",
      category: "encyclical",
      type: "Moral Teaching",
      year: 1968,
      pope: "Paul VI",
      summary: "Reaffirms the Church's teaching on the regulation of birth, marriage, and responsible parenthood.",
      url: "#"
    },
    {
      id: "6",
      title: "Dei Verbum",
      category: "vatican-ii",
      type: "Dogmatic Constitution",
      year: 1965,
      summary: "On divine revelation, explains the relationship between Scripture, Tradition, and the Magisterium.",
      url: "#"
    },
  ]);

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  // Filter documents based on search and filters
  const filteredDocuments = documents.filter(doc => {
    // Search term filter
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    
    // Year filter
    const matchesYear = filterYear === 'all' || 
                       (filterYear === 'before-2000' && doc.year < 2000) ||
                       (filterYear === 'after-2000' && doc.year >= 2000);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Church Documents</h1>
                <p className="text-xl text-white/90">Access and understand the treasures of Catholic teaching</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="w-12 h-12 text-church-burgundy mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-church-burgundy mb-4">Catholic Church Documents</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Catholic Church has produced a rich body of authoritative documents throughout its history that guide the faithful in matters of faith, morals, and Church life. These documents include papal encyclicals, apostolic exhortations, conciliar documents, and more.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                On this page, you'll find a curated collection of important Church documents with summaries and links to the full texts. These resources will help you better understand Catholic teaching and its application in today's world.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  href="#document-library" 
                  variant="primary"
                >
                  Browse Documents
                </Button>
                <Button 
                  href="#document-guides" 
                  variant="outline"
                  className="border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                >
                  Reading Guides
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Document Categories */}
        <section className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Types of Church Documents" 
              subtitle="Understanding the different categories of Catholic teaching documents"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Papal Documents */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Papal Documents</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Encyclicals</h4>
                      <p className="text-gray-700 text-sm">
                        Circular letters from the Pope to bishops, clergy, and faithful worldwide on matters of faith, morals, or Church governance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Apostolic Exhortations</h4>
                      <p className="text-gray-700 text-sm">
                        Documents encouraging the faithful on a particular topic, often following a Synod of Bishops.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Apostolic Constitutions</h4>
                      <p className="text-gray-700 text-sm">
                        Formal papal documents addressing significant Church matters, including the promulgation of laws.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Motu Proprio</h4>
                      <p className="text-gray-700 text-sm">
                        Documents issued by the Pope "on his own initiative" to address specific issues or make changes to Church law.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Conciliar Documents */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Conciliar Documents</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Dogmatic Constitutions</h4>
                      <p className="text-gray-700 text-sm">
                        Documents from ecumenical councils addressing matters of faith and doctrine with the highest level of authority.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Pastoral Constitutions</h4>
                      <p className="text-gray-700 text-sm">
                        Documents applying Church teaching to contemporary issues and pastoral concerns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Declarations</h4>
                      <p className="text-gray-700 text-sm">
                        Documents clarifying the Church's position on specific issues.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Decrees</h4>
                      <p className="text-gray-700 text-sm">
                        Documents containing practical norms and guidelines for implementing Church teaching.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Other Documents */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-church-burgundy mb-4">Other Official Documents</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Catechism</h4>
                      <p className="text-gray-700 text-sm">
                        A comprehensive summary of Catholic belief and teaching, approved by the Pope for use in religious education.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Dicastery Documents</h4>
                      <p className="text-gray-700 text-sm">
                        Documents issued by Vatican departments (dicasteries) with the Pope's approval, addressing specific areas of Church life.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Episcopal Documents</h4>
                      <p className="text-gray-700 text-sm">
                        Documents issued by national or regional bishops' conferences, applying Church teaching to local situations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-burgundy">Code of Canon Law</h4>
                      <p className="text-gray-700 text-sm">
                        The body of laws and regulations governing the Catholic Church, addressing matters of governance, sacraments, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Document Library */}
        <section id="document-library" className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Document Library" 
              subtitle="Search and access important Church documents"
            />
            
            {/* Search and Filter Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="search"
                      placeholder="Search documents..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="encyclical">Encyclicals</SelectItem>
                      <SelectItem value="apostolic-exhortation">Apostolic Exhortations</SelectItem>
                      <SelectItem value="vatican-ii">Vatican II Documents</SelectItem>
                      <SelectItem value="catechism">Catechism</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Year Filter */}
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                  <Select value={filterYear} onValueChange={setFilterYear}>
                    <SelectTrigger id="year" className="w-full">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="before-2000">Before 2000</SelectItem>
                      <SelectItem value="after-2000">2000 and After</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Document Results */}
            <div>
              <h3 className="text-xl font-bold text-church-burgundy mb-4">Results ({filteredDocuments.length})</h3>
              
              {filteredDocuments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDocuments.map(doc => (
                    <Card key={doc.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-4">
                          <h4 className="text-lg font-bold text-church-burgundy">{doc.title}</h4>
                          <a 
                            href={doc.url}
                            className="text-church-burgundy hover:text-church-gold"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {doc.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            {doc.type}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                            <Calendar className="mr-1 h-3 w-3" /> {doc.year}
                          </span>
                          {doc.pope && (
                            <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                              Pope {doc.pope}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 text-sm mb-4">{doc.summary}</p>
                        <a 
                          href={`/church-documents/${doc.id}`}
                          className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                        >
                          Read Summary <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 text-center rounded-lg">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No documents found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Document Guides */}
        <section id="document-guides" className="py-16 bg-church-cream">
          <div className="container-custom">
            <SectionTitle 
              title="Reading Guides" 
              subtitle="Resources to help you understand and apply Church documents"
            />
            
            <Tabs defaultValue="encyclicals" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="encyclicals">Encyclical Guides</TabsTrigger>
                <TabsTrigger value="vatican-ii">Vatican II Guides</TabsTrigger>
                <TabsTrigger value="catechism">Catechism Guides</TabsTrigger>
              </TabsList>
              
              {/* Encyclical Guides Tab */}
              <TabsContent value="encyclicals">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Social Teaching Encyclicals */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Catholic Social Teaching Encyclicals</h3>
                      <p className="text-gray-700 mb-4">
                        A guided tour through the major social encyclicals from Rerum Novarum (1891) to Fratelli Tutti (2020), explaining their key themes and continuing relevance.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Historical context and development</li>
                        <li>Core principles and themes</li>
                        <li>Study questions for reflection</li>
                        <li>Application to contemporary issues</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-social-teaching"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Faith and Reason Encyclicals */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Faith and Reason Encyclicals</h3>
                      <p className="text-gray-700 mb-4">
                        An exploration of papal teachings on the relationship between faith and reason, focusing on Fides et Ratio, Veritatis Splendor, and related documents.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>The compatibility of faith and reason</li>
                        <li>Truth in a relativistic culture</li>
                        <li>The role of philosophy in theological understanding</li>
                        <li>Moral truth and human freedom</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-faith-reason"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Marian Encyclicals */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Marian Encyclicals</h3>
                      <p className="text-gray-700 mb-4">
                        A guide to important papal documents on Marian doctrine and devotion, including Redemptoris Mater and Marialis Cultus.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Mary's role in salvation history</li>
                        <li>Marian dogmas explained</li>
                        <li>Development of Marian devotion</li>
                        <li>Mary as model for the Church</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-marian"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Life and Family Encyclicals */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Life and Family Encyclicals</h3>
                      <p className="text-gray-700 mb-4">
                        A comprehensive guide to Church teaching on human life, sexuality, and the family through encyclicals like Humanae Vitae, Evangelium Vitae, and related documents.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>The sanctity of human life</li>
                        <li>Theology of the body</li>
                        <li>Marriage and responsible parenthood</li>
                        <li>Bioethical challenges</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-life-family"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Vatican II Guides Tab */}
              <TabsContent value="vatican-ii">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Introduction to Vatican II */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Introduction to Vatican II</h3>
                      <p className="text-gray-700 mb-4">
                        An overview of the Second Vatican Council (1962-1965), its historical context, key themes, and lasting impact on the Church.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Historical background and preparation</li>
                        <li>The Council's four sessions</li>
                        <li>Key personalities and contributions</li>
                        <li>Implementation and reception</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-vatican-ii-intro"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* The Four Constitutions */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">The Four Constitutions</h3>
                      <p className="text-gray-700 mb-4">
                        A detailed guide to the four principal documents of Vatican II: Lumen Gentium, Dei Verbum, Sacrosanctum Concilium, and Gaudium et Spes.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>The nature and mission of the Church</li>
                        <li>Divine revelation and sacred Scripture</li>
                        <li>Liturgical reform and participation</li>
                        <li>The Church in the modern world</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-vatican-ii-constitutions"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Declarations and Decrees */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Declarations and Decrees</h3>
                      <p className="text-gray-700 mb-4">
                        An exploration of Vatican II's nine decrees and three declarations, covering areas from ecumenism to religious freedom to education.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Ecumenism and interfaith relations</li>
                        <li>Religious freedom and human dignity</li>
                        <li>Catholic education principles</li>
                        <li>The renewal of religious life</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-vatican-ii-declarations-decrees"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Vatican II Study Program */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Vatican II Study Program</h3>
                      <p className="text-gray-700 mb-4">
                        A structured 12-week program for individuals or groups who want to study the Council documents in depth, with readings, discussion questions, and practical applications.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Weekly reading schedule</li>
                        <li>Supplementary resources</li>
                        <li>Discussion guides for each session</li>
                        <li>Reflection activities and prayers</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-vatican-ii-program"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Program <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Catechism Guides Tab */}
              <TabsContent value="catechism">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Introduction to the Catechism */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Introduction to the Catechism</h3>
                      <p className="text-gray-700 mb-4">
                        An overview of the Catechism of the Catholic Church (1992), its structure, purpose, and how to use it effectively for learning and teaching the faith.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Historical development of catechisms</li>
                        <li>The four pillars structure</li>
                        <li>How to navigate and reference</li>
                        <li>Relationship to other Church documents</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-catechism-intro"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* The Creed Study Guide */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">The Creed Study Guide</h3>
                      <p className="text-gray-700 mb-4">
                        A detailed exploration of Part One of the Catechism, covering the Apostles' Creed and fundamental Catholic beliefs about God, Christ, the Holy Spirit, and the Church.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>The Trinity explained</li>
                        <li>Creation and fall</li>
                        <li>The mystery of the Incarnation</li>
                        <li>Understanding the Church</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-catechism-creed"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Sacraments and Liturgy Guide */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Sacraments and Liturgy Guide</h3>
                      <p className="text-gray-700 mb-4">
                        A comprehensive guide to Part Two of the Catechism, examining the seven sacraments, liturgical life, and other forms of prayer and worship.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Understanding sacramental theology</li>
                        <li>Each sacrament explained in detail</li>
                        <li>The liturgical year</li>
                        <li>Sacred time and sacred space</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-catechism-sacraments"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  {/* Moral Life and Prayer Guides */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-church-burgundy mb-2">Life in Christ & Prayer</h3>
                      <p className="text-gray-700 mb-4">
                        A dual guide covering Parts Three and Four of the Catechism, focusing on the moral life, Ten Commandments, Christian prayer, and the Our Father.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Foundations of Catholic morality</li>
                        <li>The Ten Commandments in detail</li>
                        <li>What is prayer and why it matters</li>
                        <li>The Lord's Prayer as a model</li>
                      </ul>
                      <a 
                        href="/church-documents/guide-catechism-moral-prayer"
                        className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                      >
                        View Guide <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Study Resources */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Document Study Resources" 
              subtitle="Tools to help you engage with Church documents more effectively"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Reading Tips */}
              <div className="bg-church-cream rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Reading Tips</h3>
                <p className="text-gray-700 mb-4">
                  Practical advice for approaching Church documents effectively, including how to understand specialized language and theological concepts.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Start with an overview</li>
                  <li>Read slowly and prayerfully</li>
                  <li>Look up unfamiliar terms</li>
                  <li>Consider historical context</li>
                </ul>
                <a 
                  href="/church-documents/reading-tips"
                  className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                >
                  View Reading Tips <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              
              {/* Study Groups */}
              <div className="bg-church-cream rounded-lg p-6">
                <Users className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Study Groups</h3>
                <p className="text-gray-700 mb-4">
                  Join or start a parish study group focused on Church documents. Studying in community enhances understanding through shared insights and discussion.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Current document study groups</li>
                  <li>How to join a group</li>
                  <li>Starting your own group</li>
                  <li>Suggested formats and resources</li>
                </ul>
                <a 
                  href="/church-documents/study-groups"
                  className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              
              {/* Reading Tools */}
              <div className="bg-church-cream rounded-lg p-6">
                <Tools className="w-8 h-8 text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Reading Tools</h3>
                <p className="text-gray-700 mb-4">
                  Resources to enhance your study of Church documents, including reference materials, study guides, and digital tools.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Recommended commentaries</li>
                  <li>Note-taking templates</li>
                  <li>Digital study resources</li>
                  <li>Church document glossaries</li>
                </ul>
                <a 
                  href="/church-documents/reading-tools"
                  className="text-church-burgundy hover:text-church-gold font-medium inline-flex items-center"
                >
                  Explore Tools <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChurchDocuments;
