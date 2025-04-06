
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const CoreFaithSection = () => {
  return (
    <section className="section-padding bg-church-navy text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Core Faith & Doctrine" 
          subtitle="Discover the timeless truths of Catholic teaching and tradition"
          className="text-white"
          titleClassName="text-white"
          subtitleClassName="text-white/80"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Creed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-church-gold">The Creed</h3>
            <p className="text-white/90 mb-4">The Apostles' Creed and Nicene Creed summarize the foundational beliefs of the Catholic faith, including our understanding of the Trinity, the Church, and salvation.</p>
            <a href="/core-faith#creed" className="inline-flex items-center text-church-gold hover:text-white transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Sacraments */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-church-gold">The Sacraments</h3>
            <p className="text-white/90 mb-4">The seven sacraments are efficacious signs of grace instituted by Christ and entrusted to the Church, through which Divine life is bestowed upon us.</p>
            <a href="/core-faith#sacraments" className="inline-flex items-center text-church-gold hover:text-white transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Moral Teaching */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-church-gold">Moral Teaching</h3>
            <p className="text-white/90 mb-4">Catholic moral teaching guides us in living a life of virtue, dignity, and holiness, informed by Scripture, Tradition, and natural law.</p>
            <a href="/core-faith#moral-teaching" className="inline-flex items-center text-church-gold hover:text-white transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            href="/core-faith" 
            variant="glass" 
            size="lg"
            className="bg-white/20 hover:bg-white/30 border-white/10"
          >
            Explore Catholic Doctrine
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreFaithSection;
