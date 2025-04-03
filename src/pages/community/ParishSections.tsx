
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Book, Music, ChevronRight, Heart, Server, Drumstick, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

// Parish sections data
const sections = [
  {
    id: 'liturgical',
    title: 'Liturgical Ministries',
    description: 'Services directly related to the celebration of the Mass',
    icon: Book,
    groups: [
      {
        name: 'Altar Servers',
        description: 'Assist the priest during Mass and other liturgical celebrations.',
        requirements: 'Open to children and adults who have received First Communion.',
        contactPerson: 'Mrs. Maria Mwanza',
      },
      {
        name: 'Lectors',
        description: 'Proclaim the Word of God during the Liturgy of the Word at Mass.',
        requirements: 'Must be a confirmed Catholic with good public speaking skills.',
        contactPerson: 'Mr. Thomas Sibanda',
      },
      {
        name: 'Extraordinary Ministers of Holy Communion',
        description: 'Assist in distributing Holy Communion during Mass and to the homebound.',
        requirements: 'Must be a fully initiated Catholic (Baptism, Confirmation, Eucharist) in good standing.',
        contactPerson: 'Mrs. Elizabeth Moyo',
      },
      {
        name: 'Choir & Music Ministry',
        description: 'Lead the congregation in worship through music.',
        requirements: 'Open to anyone with musical talent or interest.',
        contactPerson: 'Mr. David Muponda',
      },
      {
        name: 'Ushers',
        description: 'Welcome parishioners, assist with seating, and take up collections.',
        requirements: 'Open to all parishioners who are willing to serve.',
        contactPerson: 'Mr. John Mutasa',
      }
    ]
  },
  {
    id: 'outreach',
    title: 'Outreach Ministries',
    description: 'Serving the community beyond our church walls',
    icon: Heart,
    groups: [
      {
        name: 'St. Vincent de Paul Society',
        description: 'Provides assistance to those in need in our community.',
        requirements: 'Open to all Catholics committed to serving those in need.',
        contactPerson: 'Mrs. Grace Chirwa',
      },
      {
        name: 'Bereavement Ministry',
        description: 'Offers support to those who have lost loved ones.',
        requirements: 'Must be compassionate and able to provide comfort to grieving families.',
        contactPerson: 'Mrs. Ruth Mwale',
      },
      {
        name: 'Prison Ministry',
        description: 'Visits and provides spiritual support to those in prison.',
        requirements: 'Must complete diocesan training and background check.',
        contactPerson: 'Mr. Peter Chitiga',
      },
      {
        name: 'Hospital Visitation',
        description: 'Brings prayer and Communion to hospitalized parishioners.',
        requirements: 'Must be an Extraordinary Minister of Holy Communion.',
        contactPerson: 'Mrs. Martha Dube',
      }
    ]
  },
  {
    id: 'service',
    title: 'Service Ministries',
    description: 'Supporting the operations and maintenance of our parish',
    icon: Server,
    groups: [
      {
        name: 'Church Cleaning',
        description: 'Maintains the cleanliness and beauty of our worship space.',
        requirements: 'Open to anyone willing to help on a rotating schedule.',
        contactPerson: 'Mrs. Agnes Mukwende',
      },
      {
        name: 'Altar Society',
        description: 'Prepares the altar and sanctuary for Mass and maintains liturgical linens and vessels.',
        requirements: 'Open to those with attention to detail.',
        contactPerson: 'Mrs. Mary Chikore',
      },
      {
        name: 'Maintenance Team',
        description: 'Helps with general maintenance and repairs of parish facilities.',
        requirements: 'Those with skills in trades are especially welcome.',
        contactPerson: 'Mr. Paul Matongo',
      },
      {
        name: 'Garden Ministry',
        description: 'Maintains the grounds and gardens of the parish property.',
        requirements: 'Open to those with an interest in gardening.',
        contactPerson: 'Mrs. Martha Chigumira',
      }
    ]
  },
  {
    id: 'hospitality',
    title: 'Hospitality Ministries',
    description: 'Creating a welcoming environment for all',
    icon: Coffee,
    groups: [
      {
        name: 'Welcome Committee',
        description: 'Greets new parishioners and helps them become integrated into parish life.',
        requirements: 'Friendly individuals who enjoy meeting new people.',
        contactPerson: 'Mrs. Sarah Moyo',
      },
      {
        name: 'Fellowship Committee',
        description: 'Organizes social events to build community within the parish.',
        requirements: 'Open to those with organizational and social skills.',
        contactPerson: 'Mr. James Sithole',
      },
      {
        name: 'Coffee & Donuts',
        description: 'Provides refreshments after Sunday Masses for community building.',
        requirements: 'Open to anyone willing to help on a rotating schedule.',
        contactPerson: 'Mrs. Patricia Ndlovu',
      }
    ]
  },
  {
    id: 'educational',
    title: 'Educational Ministries',
    description: 'Forming disciples of all ages in the faith',
    icon: Book,
    groups: [
      {
        name: 'Religious Education',
        description: 'Provides faith formation for children not attending Catholic school.',
        requirements: 'Must complete Safe Environment training and have knowledge of Catholic teachings.',
        contactPerson: 'Mrs. Elizabeth Chitima',
      },
      {
        name: 'RCIA Team',
        description: 'Prepares adults for reception into the Catholic Church.',
        requirements: 'Must be well-versed in Catholic teachings and willing to share faith.',
        contactPerson: 'Deacon Thomas',
      },
      {
        name: 'Bible Study Leaders',
        description: 'Facilitates small group scripture studies.',
        requirements: 'Good knowledge of Scripture and ability to lead discussions.',
        contactPerson: 'Mr. Mark Wilson',
      },
      {
        name: 'Marriage Preparation Team',
        description: 'Helps engaged couples prepare for the Sacrament of Matrimony.',
        requirements: 'Married couples who can model and share the faith.',
        contactPerson: 'Mr. & Mrs. Gumbo',
      }
    ]
  },
];

const SectionCard = ({ section }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-church-burgundy/10 flex items-center justify-center mr-4">
          <section.icon className="h-6 w-6 text-church-burgundy" />
        </div>
        <h2 className="text-2xl font-bold text-church-burgundy">{section.title}</h2>
      </div>
      <p className="text-gray-600 mb-6">{section.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.groups.map((group, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-church-burgundy mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="text-sm space-y-2">
                <p><span className="font-medium text-church-gold">Requirements:</span> {group.requirements}</p>
                <p><span className="font-medium text-church-gold">Contact:</span> {group.contactPerson}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ParishSections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Parish Sections</h1>
                <p className="text-xl text-white/80">Serving our parish through various ministries</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <SectionTitle 
                title="Our Parish Sections" 
                subtitle="Discover the various ministries and service groups that make up our parish community"
              />
              
              <div className="prose prose-lg max-w-none mt-8">
                <p>
                  Our parish thrives through the dedicated service of many individuals who contribute their time and talents in various ministries. 
                  These ministries are organized into sections that serve different aspects of our parish life. 
                  We invite you to learn more about each section and prayerfully consider where God may be calling you to serve.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              {sections.map((section, index) => (
                <SectionCard key={index} section={section} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl text-church-burgundy mb-4">Interested in joining a ministry?</p>
              <p className="text-gray-600 mb-6">Contact the parish office or reach out to the ministry contact person directly.</p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-church-burgundy text-white rounded-md hover:bg-church-burgundy/90 transition-colors">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ParishSections;
