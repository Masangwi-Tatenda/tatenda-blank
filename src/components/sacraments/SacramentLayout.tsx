
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface SacramentLayoutProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  children: React.ReactNode;
}

const sacraments = [
  { 
    name: 'Baptism', 
    path: '/sacraments/baptism',
    description: 'The first sacrament of initiation into the Church.' 
  },
  { 
    name: 'First Communion', 
    path: '/sacraments/communion',
    description: 'Receiving the Eucharist for the first time.' 
  },
  { 
    name: 'Confirmation', 
    path: '/sacraments/confirmation',
    description: 'Strengthening baptismal graces through the Holy Spirit.' 
  },
  { 
    name: 'Reconciliation', 
    path: '/sacraments/reconciliation',
    description: 'Confession and absolution of sins.' 
  },
  { 
    name: 'Marriage', 
    path: '/sacraments/marriage',
    description: 'The sacred union between man and woman.' 
  },
  { 
    name: 'Anointing of the Sick', 
    path: '/sacraments/anointing',
    description: 'Spiritual healing for the ill or elderly.' 
  }
];

const SacramentLayout: React.FC<SacramentLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: `url("${heroImage}")` }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{title}</h1>
                {subtitle && <p className="text-xl text-white/80">{subtitle}</p>}
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <Card className="shadow-md sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-church-burgundy mb-4">Sacraments</h3>
                    <Separator className="mb-4" />
                    
                    <nav className="space-y-1">
                      {sacraments.map((sacrament, index) => (
                        <Link
                          key={index}
                          to={sacrament.path}
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            title === sacrament.name
                              ? 'bg-church-burgundy text-white'
                              : 'text-gray-700 hover:bg-church-burgundy/10 hover:text-church-burgundy'
                          }`}
                        >
                          {sacrament.name}
                        </Link>
                      ))}
                    </nav>
                    
                    <Separator className="my-4" />
                    
                    <div className="bg-church-gold/10 p-4 rounded-md">
                      <h4 className="font-bold text-church-burgundy mb-2">Need Assistance?</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        For questions about sacramental preparation or scheduling, please contact our parish office.
                      </p>
                      <Button asChild variant="outline" className="w-full border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SacramentLayout;
