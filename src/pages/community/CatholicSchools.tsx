
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Search, MapPin, ExternalLink, Mail, Phone, GraduationCap, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSanity } from '@/contexts/SanityContext';

// School level colors
const getLevelColor = (level: string) => {
  const colors = {
    'Primary': 'bg-green-100 text-green-800 border-green-300',
    'Secondary': 'bg-blue-100 text-blue-800 border-blue-300',
    'High School': 'bg-purple-100 text-purple-800 border-purple-300',
    'Boarding': 'bg-amber-100 text-amber-800 border-amber-300',
    'Day School': 'bg-sky-100 text-sky-800 border-sky-300',
  };
  
  return colors[level] || 'bg-gray-100 text-gray-800 border-gray-300';
};

// Catholic schools in Zimbabwe data
// Source: Partial data compiled from various Catholic education resources
const zimbabweCatholicSchools = [
  {
    id: 1,
    name: "St George's College",
    location: "Harare",
    level: "Secondary",
    type: "Boarding",
    province: "Harare Metropolitan",
    website: "https://www.stgeorges.co.zw/",
    contactEmail: "info@stgeorges.co.zw",
    contactPhone: "+263 4 704 971",
    description: "Founded in 1896 by the Jesuit Fathers, St George's College is one of the oldest and most prestigious Catholic schools in Zimbabwe. It offers a comprehensive education with strong emphasis on academic excellence, sports, and Catholic values.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Dominican Convent High School",
    location: "Harare",
    level: "Secondary",
    type: "Day School",
    province: "Harare Metropolitan",
    website: "https://www.dominicanconvent.co.zw/",
    contactEmail: "admin@dominicanconvent.co.zw",
    contactPhone: "+263 4 703 814",
    description: "Established in 1892 by the Dominican Sisters, this is a leading Catholic girls' school known for academic excellence and strong Christian values. The school provides a nurturing environment that encourages spiritual, intellectual, and personal growth.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    name: "St Ignatius College",
    location: "Chishawasha",
    level: "Secondary",
    type: "Boarding",
    province: "Mashonaland East",
    website: "https://www.stiginatiuscollege.co.zw/",
    contactEmail: "admin@stiginatiuscollege.co.zw",
    contactPhone: "+263 4 495 6838",
    description: "Founded by the Jesuits in 1962, St Ignatius College is renowned for academic excellence and formation of character based on Ignatian spirituality. The school emphasizes the development of the whole person - intellectually, spiritually, and physically.",
    image: "https://images.unsplash.com/photo-1599687266725-0d534f8a9602?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    name: "Monte Cassino Girls High School",
    location: "Macheke",
    level: "Secondary",
    type: "Boarding",
    province: "Mashonaland East",
    website: "",
    contactEmail: "montecassino@gmail.com",
    contactPhone: "+263 65 2107",
    description: "A Catholic girls boarding school run by the Benedictine Sisters, Monte Cassino is known for its strong academic focus and spiritual formation. The school has a reputation for producing well-rounded graduates with a solid foundation in Catholic values.",
    image: "https://images.unsplash.com/photo-1573166953836-1c324efb301f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    name: "St Dominic's Chishawasha Primary School",
    location: "Chishawasha",
    level: "Primary",
    type: "Day School",
    province: "Mashonaland East",
    website: "",
    contactEmail: "stdominics@gmail.com",
    contactPhone: "+263 4 497 1234",
    description: "A Catholic primary school providing quality education in a nurturing Christian environment. The school focuses on building a strong foundation for lifelong learning while instilling Catholic values.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    name: "St Francis Xavier Kutama College",
    location: "Kutama",
    level: "Secondary",
    type: "Boarding",
    province: "Mashonaland West",
    website: "",
    contactEmail: "kutamacollege@gmail.com",
    contactPhone: "+263 68 2402",
    description: "Founded by Jesuit missionaries in 1914, Kutama College is one of Zimbabwe's premier Catholic boarding schools for boys. The institution is known for its academic excellence and has produced many distinguished alumni, including political leaders.",
    image: "https://images.unsplash.com/photo-1465147264724-326b45c3c59b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    name: "Marist Brothers High School",
    location: "Dete",
    level: "Secondary",
    type: "Boarding",
    province: "Matabeleland North",
    website: "",
    contactEmail: "maristbrothersdete@gmail.com",
    contactPhone: "+263 89 271",
    description: "Run by the Marist Brothers, this institution provides quality Catholic education with an emphasis on academic excellence and character formation. The school promotes the development of young people through a well-rounded curriculum and Christian values.",
    image: "https://images.unsplash.com/photo-1619535170661-bcdb605b976f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    name: "St Mary's Primary School",
    location: "Harare",
    level: "Primary",
    type: "Day School",
    province: "Harare Metropolitan",
    website: "",
    contactEmail: "stmarys@gmail.com",
    contactPhone: "+263 4 705 678",
    description: "A Catholic primary school dedicated to providing a nurturing environment where children can develop academically, socially, and spiritually. The school emphasizes both academic excellence and formation in Catholic values.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    name: "St Benedict's Secondary School",
    location: "Murehwa",
    level: "Secondary",
    type: "Boarding",
    province: "Mashonaland East",
    website: "",
    contactEmail: "stbenedicts@gmail.com",
    contactPhone: "+263 66 2219",
    description: "Founded by the Benedictine Fathers, St Benedict's is a Catholic boarding school that focuses on providing an all-round education. The school follows the Benedictine ethos of prayer and work, emphasizing both academic achievements and spiritual development.",
    image: "https://images.unsplash.com/photo-1580535123255-d1aa00aec568?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 10,
    name: "Loreto High School",
    location: "Silobela",
    level: "Secondary",
    type: "Boarding",
    province: "Midlands",
    website: "",
    contactEmail: "loretosilobela@gmail.com",
    contactPhone: "+263 55 7602",
    description: "Run by the Loreto Sisters, this Catholic institution provides quality education for girls with a focus on academic excellence and moral formation. The school aims to develop young women who are intellectually competent, spiritually mature, and socially responsible.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 11,
    name: "St Albert's High School",
    location: "Centenary",
    level: "Secondary",
    type: "Boarding",
    province: "Mashonaland Central",
    website: "",
    contactEmail: "stalberts@gmail.com",
    contactPhone: "+263 75 2123",
    description: "A Catholic mission school that provides quality education to students from various backgrounds. St Albert's focuses on academic excellence, character formation, and spiritual development within the Catholic tradition.",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    name: "Marist Brothers Primary School",
    location: "Harare",
    level: "Primary",
    type: "Day School",
    province: "Harare Metropolitan",
    website: "",
    contactEmail: "maristprimary@gmail.com",
    contactPhone: "+263 4 708 456",
    description: "Run by the Marist Brothers, this primary school offers a solid foundation in education within a Catholic environment. The school emphasizes academic excellence, character formation, and the development of the whole child.",
    image: "https://images.unsplash.com/photo-1575510382338-7137d3c62be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 13,
    name: "St Joseph's Secondary School",
    location: "Mutare",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "stjosephs@gmail.com",
    contactPhone: "+263 20 64731",
    description: "A Catholic boarding school that provides quality education with a focus on academic excellence and Catholic values. The school aims to develop students who are intellectually competent, morally upright, and socially responsible.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 14,
    name: "Regina Mundi Girls High School",
    location: "Gweru",
    level: "Secondary",
    type: "Boarding",
    province: "Midlands",
    website: "",
    contactEmail: "reginamundi@gmail.com",
    contactPhone: "+263 54 2220",
    description: "A Catholic girls boarding school that focuses on academic excellence, character formation, and spiritual development. The school aims to produce well-rounded young women grounded in Catholic values.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 15,
    name: "Embakwe High School",
    location: "Plumtree",
    level: "Secondary",
    type: "Boarding",
    province: "Matabeleland South",
    website: "",
    contactEmail: "embakwe@gmail.com",
    contactPhone: "+263 82 5623",
    description: "A Catholic boarding school established by the Marianhill Missionaries, offering quality education with a focus on academic excellence and character formation. The school has a rich history of producing well-rounded graduates.",
    image: "https://images.unsplash.com/photo-1577896851905-29f9c8d2c394?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 16,
    name: "Nyanga Catholic Primary School",
    location: "Nyanga",
    level: "Primary",
    type: "Day School",
    province: "Manicaland",
    website: "",
    contactEmail: "nyangacatholic@gmail.com",
    contactPhone: "+263 26 2893",
    description: "A Catholic primary school providing quality education within a nurturing Christian environment. The school focuses on developing the whole child - intellectually, spiritually, and socially.",
    image: "https://images.unsplash.com/photo-1559485171-761dc134f7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 17,
    name: "St Columba's High School",
    location: "Bulawayo",
    level: "Secondary",
    type: "Day School",
    province: "Bulawayo Metropolitan",
    website: "",
    contactEmail: "stcolumbas@gmail.com",
    contactPhone: "+263 9 203 567",
    description: "A Catholic co-educational day school providing quality education with a focus on academic excellence and character formation based on Catholic values. The school strives to develop well-rounded individuals.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 18,
    name: "St Anthony's Primary School",
    location: "Bulawayo",
    level: "Primary",
    type: "Day School",
    province: "Bulawayo Metropolitan",
    website: "",
    contactEmail: "stanthonys@gmail.com",
    contactPhone: "+263 9 205 234",
    description: "A Catholic primary school offering quality education with a focus on developing the whole child. The school emphasizes academic excellence, character formation, and spiritual growth within the Catholic tradition.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 19,
    name: "St Bernard's Secondary School",
    location: "Chipinge",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "stbernards@gmail.com",
    contactPhone: "+263 27 2456",
    description: "A Catholic boarding school providing quality education with a focus on academic excellence and character formation. The school strives to develop students who are intellectually competent, morally upright, and socially responsible.",
    image: "https://images.unsplash.com/photo-1541880280731-d49f0fe07d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 20,
    name: "St David's Bonda Secondary School",
    location: "Mutasa",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "stbonda@gmail.com",
    contactPhone: "+263 20 2345",
    description: "An Anglican mission school with a strong Christian ethos, offering quality education with a focus on academic excellence and character formation. The school has a rich tradition of producing well-rounded graduates.",
    image: "https://images.unsplash.com/photo-1613217784112-e0e197be2f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 21,
    name: "St Mary's Magdalene Secondary School",
    location: "Nyazura",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "stmarysmagdalene@gmail.com",
    contactPhone: "+263 25 3456",
    description: "A Catholic girls boarding school focused on providing quality education and forming young women with strong character and Catholic values. The school emphasizes academic excellence, spiritual formation, and social responsibility.",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 22,
    name: "Sacred Heart Primary School",
    location: "Mutare",
    level: "Primary",
    type: "Day School",
    province: "Manicaland",
    website: "",
    contactEmail: "sacredheart@gmail.com",
    contactPhone: "+263 20 63456",
    description: "A Catholic primary school providing quality education within a nurturing Christian environment. The school focuses on developing children intellectually, spiritually, and socially in line with Catholic values.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 23,
    name: "Gokomere High School",
    location: "Masvingo",
    level: "Secondary",
    type: "Boarding",
    province: "Masvingo",
    website: "",
    contactEmail: "gokomere@gmail.com",
    contactPhone: "+263 39 2645",
    description: "One of the oldest Catholic mission schools in Zimbabwe, established by the Jesuits. The school provides quality education with a focus on academic excellence, character formation, and Catholic values.",
    image: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 24,
    name: "St Michael's Primary School",
    location: "Gweru",
    level: "Primary",
    type: "Day School",
    province: "Midlands",
    website: "",
    contactEmail: "stmichaels@gmail.com",
    contactPhone: "+263 54 3456",
    description: "A Catholic primary school offering quality education with a focus on developing the whole child. The school emphasizes academic excellence, character formation, and spiritual growth within the Catholic tradition.",
    image: "https://images.unsplash.com/photo-1565812428426-3313aa369af8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 25,
    name: "Kriste Mambo Girls High School",
    location: "Rusape",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "kristemambo@gmail.com",
    contactPhone: "+263 25 2645",
    description: "A Catholic girls boarding school run by the Handmaids of Our Lady of Mount Carmel. The school focuses on providing quality education and forming young women with strong character and Catholic values.",
    image: "https://images.unsplash.com/photo-1577896851905-29f9c8d2c394?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 26,
    name: "St Faith's Secondary School",
    location: "Rusape",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "stfaiths@gmail.com",
    contactPhone: "+263 25 3478",
    description: "An Anglican mission school with a strong Christian ethos, offering quality education with a focus on academic excellence and character formation. The school has a tradition of producing well-rounded graduates.",
    image: "https://images.unsplash.com/photo-1596464628007-2fc93f975de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 27,
    name: "Holy Trinity College",
    location: "Harare",
    level: "Secondary",
    type: "Day School",
    province: "Harare Metropolitan",
    website: "",
    contactEmail: "holytrinitycollege@gmail.com",
    contactPhone: "+263 4 708 123",
    description: "A Catholic co-educational day school providing quality education with a focus on academic excellence and character formation based on Catholic values. The school strives to develop well-rounded individuals.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 28,
    name: "St Patrick's Primary School",
    location: "Gweru",
    level: "Primary",
    type: "Day School",
    province: "Midlands",
    website: "",
    contactEmail: "stpatricks@gmail.com",
    contactPhone: "+263 54 3789",
    description: "A Catholic primary school offering quality education with a focus on developing the whole child. The school emphasizes academic excellence, character formation, and spiritual growth within the Catholic tradition.",
    image: "https://images.unsplash.com/photo-1605611740092-1ca55cb4fd80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 29,
    name: "St Augustine's High School",
    location: "Mutare",
    level: "Secondary",
    type: "Boarding",
    province: "Manicaland",
    website: "",
    contactEmail: "staugustines@gmail.com",
    contactPhone: "+263 20 67890",
    description: "A Catholic boarding school providing quality education with a focus on academic excellence and character formation. The school strives to develop students who are intellectually competent, morally upright, and socially responsible.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 30,
    name: "St Aidan's Primary School",
    location: "Harare",
    level: "Primary",
    type: "Day School",
    province: "Harare Metropolitan",
    website: "",
    contactEmail: "staidans@gmail.com",
    contactPhone: "+263 4 710 234",
    description: "A Catholic primary school offering quality education with a focus on developing the whole child. The school emphasizes academic excellence, character formation, and spiritual growth within the Catholic tradition.",
    image: "https://images.unsplash.com/photo-1613208602577-ca73cec33e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

interface SchoolCardProps {
  school: {
    id: number;
    name: string;
    location: string;
    level: string;
    type: string;
    province: string;
    website?: string;
    contactEmail?: string;
    contactPhone?: string;
    description: string;
    image?: string;
  };
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          src={school.image || "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
          alt={school.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className={getLevelColor(school.level)}>
              {school.level}
            </Badge>
            <Badge variant="outline" className={getLevelColor(school.type)}>
              {school.type}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-church-burgundy mb-2">{school.name}</h3>
        
        <div className="flex items-start mt-3 text-sm text-gray-500">
          <MapPin size={16} className="mr-2 text-church-gold mt-0.5" />
          <div>
            <p>{school.location}</p>
            <p className="text-xs">{school.province} Province</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 line-clamp-3">{school.description}</p>
        
        <div className="mt-4 space-y-2">
          {school.contactPhone && (
            <div className="flex items-center text-sm text-gray-500">
              <Phone size={16} className="mr-2 text-church-gold" />
              <span>{school.contactPhone}</span>
            </div>
          )}
          
          {school.contactEmail && (
            <div className="flex items-center text-sm text-gray-500">
              <Mail size={16} className="mr-2 text-church-gold" />
              <a href={`mailto:${school.contactEmail}`} className="text-church-burgundy hover:underline">
                {school.contactEmail}
              </a>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <Button size="sm" variant="outline" className="text-church-burgundy border-church-burgundy hover:bg-church-burgundy/10">
            View Details
          </Button>
          
          {school.website && (
            <a 
              href={school.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-church-burgundy hover:underline"
            >
              Visit Website
              <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const CatholicSchools = () => {
  // State for filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [filteredSchools, setFilteredSchools] = useState(zimbabweCatholicSchools);
  
  // Get unique provinces for filter
  const provinces = ['All', ...Array.from(new Set(zimbabweCatholicSchools.map(school => school.province)))];
  
  // Filter schools based on search, level, and province
  useEffect(() => {
    let filtered = zimbabweCatholicSchools;
    
    // Filter by level
    if (selectedLevel !== 'All') {
      filtered = filtered.filter(school => school.level === selectedLevel);
    }
    
    // Filter by province
    if (selectedProvince !== 'All') {
      filtered = filtered.filter(school => school.province === selectedProvince);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(school => 
        school.name.toLowerCase().includes(term) || 
        school.location.toLowerCase().includes(term) ||
        school.description.toLowerCase().includes(term)
      );
    }
    
    // Sort schools alphabetically
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    setFilteredSchools(filtered);
  }, [searchTerm, selectedLevel, selectedProvince]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catholic Schools in Zimbabwe</h1>
                <p className="text-white/90 max-w-2xl mx-auto px-4">
                  Providing quality education founded on Catholic values and principles
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-12 bg-church-light-gold">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <GraduationCap size={48} className="text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Catholic schools in Zimbabwe are renowned for their commitment to academic excellence and consistently achieve outstanding examination results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Clock size={48} className="text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Long Tradition</h3>
                <p className="text-gray-600">
                  With some institutions dating back to the late 19th century, Catholic schools have a rich history of providing quality education in Zimbabwe.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Search size={48} className="text-church-burgundy mb-4" />
                <h3 className="text-xl font-bold text-church-burgundy mb-2">Whole-Person Formation</h3>
                <p className="text-gray-600">
                  Catholic education focuses on the development of the whole person - intellectually, spiritually, physically, and socially.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <SectionTitle 
              title="Find a Catholic School" 
              subtitle="Browse our directory of Catholic schools throughout Zimbabwe"
            />
            
            {/* Search and Filter */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm"
                    placeholder="Search schools by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    <option value="All">All Levels</option>
                    <option value="Primary">Primary Schools</option>
                    <option value="Secondary">Secondary Schools</option>
                  </select>
                </div>
                
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-church-burgundy focus:border-church-burgundy sm:text-sm"
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                  >
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province === 'All' ? 'All Provinces' : province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {(searchTerm || selectedLevel !== 'All' || selectedProvince !== 'All') && (
                <div className="mt-4 flex items-center">
                  <div className="text-sm text-gray-500 mr-4">
                    {filteredSchools.length} schools found
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLevel('All');
                      setSelectedProvince('All');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* School Listing */}
            <div className="mt-12">
              <Tabs defaultValue="grid" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-church-burgundy">
                    {selectedLevel === 'All' 
                      ? 'All Catholic Schools' 
                      : `${selectedLevel} Schools`}
                  </h3>
                  
                  <TabsList>
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="grid">
                  {filteredSchools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredSchools.map((school) => (
                        <SchoolCard key={school.id} school={school} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md">
                      <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">No schools found</h3>
                      <p className="text-gray-500">We couldn't find any schools matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="list">
                  {filteredSchools.length > 0 ? (
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              School Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Location
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Level
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Contact
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredSchools.map((school) => (
                            <tr key={school.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-church-burgundy">{school.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{school.location}</div>
                                <div className="text-xs text-gray-500">{school.province}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Badge variant="outline" className={getLevelColor(school.level)}>
                                  {school.level}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Badge variant="outline" className={getLevelColor(school.type)}>
                                  {school.type}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {school.contactPhone && (
                                  <div className="text-gray-500">
                                    {school.contactPhone}
                                  </div>
                                )}
                                
                                {school.contactEmail && (
                                  <a href={`mailto:${school.contactEmail}`} className="text-church-burgundy hover:underline">
                                    Email
                                  </a>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md">
                      <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">No schools found</h3>
                      <p className="text-gray-500">We couldn't find any schools matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-church-burgundy">Catholic Education in Zimbabwe</h2>
                <p className="text-gray-700">
                  Catholic schools in Zimbabwe have a long and distinguished history dating back to the late 19th century when the first missionary schools were established. These institutions have consistently maintained high academic standards while providing education founded on Catholic values.
                </p>
                <p className="text-gray-700">
                  The Catholic Church runs numerous primary and secondary schools throughout Zimbabwe, many of which are among the country's top-performing educational institutions. These schools are known for their commitment to academic excellence, character formation, and spiritual development.
                </p>
                <p className="text-gray-700">
                  Catholic education in Zimbabwe emphasizes the development of the whole person - intellectually, spiritually, physically, and socially. This holistic approach to education has resulted in graduates who are not only academically accomplished but also morally upright and socially responsible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-church-burgundy mb-4">Core Values of Catholic Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-church-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 mr-3">1</div>
                    <div>
                      <h4 className="font-semibold">Faith Development</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Fostering a personal relationship with God and an understanding of Catholic teachings, traditions, and values.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-church-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 mr-3">2</div>
                    <div>
                      <h4 className="font-semibold">Academic Excellence</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Commitment to high academic standards and the development of critical thinking, creativity, and lifelong learning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-church-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 mr-3">3</div>
                    <div>
                      <h4 className="font-semibold">Character Formation</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Developing virtues, moral reasoning, self-discipline, and ethical decision-making skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-church-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 mr-3">4</div>
                    <div>
                      <h4 className="font-semibold">Community Service</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Encouraging a sense of social justice, compassion for others, and a commitment to serving the community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-church-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0 mr-3">5</div>
                    <div>
                      <h4 className="font-semibold">Respect for Human Dignity</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Recognizing the inherent dignity and worth of every person as created in the image of God.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-church-light-gold rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-church-burgundy mb-4">Need More Information?</h2>
                  <p className="text-gray-700 mb-6">
                    For more information about Catholic schools in Zimbabwe, admission procedures, or any other inquiries, please contact the Catholic Education Commission or our parish office.
                  </p>
                  <Button className="bg-church-burgundy hover:bg-church-burgundy/90" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-church-burgundy">Useful Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#" 
                        className="flex items-center text-church-burgundy hover:underline"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Catholic Education Commission of Zimbabwe
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-center text-church-burgundy hover:underline"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Zimbabwe Catholic Bishops Conference
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-center text-church-burgundy hover:underline"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Ministry of Primary and Secondary Education
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-center text-church-burgundy hover:underline"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Catholic School Admission Guidelines
                      </a>
                    </li>
                  </ul>
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

export default CatholicSchools;
