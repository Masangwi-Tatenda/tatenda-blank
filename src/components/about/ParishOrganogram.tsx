import React from 'react';

const ParishOrganogram = () => {
  return (
    <div className="bg-gradient-to-br from-church-cream to-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-church-burgundy mb-8 text-center">
        Parish Organization Structure
      </h3>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Pastor - Top Level */}
        <div className="flex justify-center mb-8">
          <div className="w-64 bg-gradient-to-r from-church-burgundy to-church-burgundy/90 text-white p-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold text-lg">Pastor</h4>
            <p className="text-sm opacity-90 mt-1">Parish Leadership</p>
          </div>
        </div>
        
        {/* Connecting lines */}
        <div className="absolute left-1/2 top-20 w-0.5 h-12 bg-church-gold -translate-x-1/2"></div>
        
        {/* Second Level */}
        <div className="flex justify-center gap-4 md:gap-12 mb-8">
          <div className="w-48 md:w-56 bg-gradient-to-r from-church-gold to-church-gold/90 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Associate Pastor</h4>
            <p className="text-xs mt-1">Clergy</p>
          </div>
          <div className="w-48 md:w-56 bg-gradient-to-r from-church-gold to-church-gold/90 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Deacons</h4>
            <p className="text-xs mt-1">Clergy</p>
          </div>
        </div>
        
        {/* Connecting lines */}
        <div className="hidden md:block absolute left-1/4 top-52 w-1/2 h-0.5 bg-church-gold"></div>
        <div className="hidden md:block absolute left-1/4 top-52 w-0.5 h-12 bg-church-gold"></div>
        <div className="hidden md:block absolute right-1/4 top-52 w-0.5 h-12 bg-church-gold"></div>
        <div className="hidden md:block absolute left-1/2 top-52 w-0.5 h-12 bg-church-gold -translate-x-1/2"></div>
        
        {/* Third Level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-church-navy to-church-navy/90 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Parish Staff</h4>
            <p className="text-xs mt-1">Administration & Operations</p>
          </div>
          <div className="bg-gradient-to-r from-church-navy to-church-navy/90 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Parish Council</h4>
            <p className="text-xs mt-1">Advisory Body</p>
          </div>
          <div className="bg-gradient-to-r from-church-navy to-church-navy/90 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Finance Council</h4>
            <p className="text-xs mt-1">Financial Oversight</p>
          </div>
        </div>
        
        {/* Connecting lines */}
        <div className="hidden md:block absolute left-1/6 top-104 w-2/3 h-0.5 bg-church-gold"></div>
        <div className="hidden md:block absolute left-1/6 top-104 w-0.5 h-12 bg-church-gold"></div>
        <div className="hidden md:block absolute right-1/6 top-104 w-0.5 h-12 bg-church-gold"></div>
        <div className="hidden md:block absolute left-1/2 top-104 w-0.5 h-12 bg-church-gold -translate-x-1/2"></div>
        
        {/* Fourth Level - Ministry Leaders */}
        <div className="flex justify-center">
          <div className="w-80 bg-gradient-to-r from-gray-600 to-gray-700 text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="font-bold">Ministry Leaders</h4>
            <p className="text-xs mt-1">Liturgical, Educational, Service & Outreach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParishOrganogram;