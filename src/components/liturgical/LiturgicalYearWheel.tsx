import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Clock, Book } from 'lucide-react';

interface Season {
  name: string;
  color: string;
  description: string;
  startAngle: number;
  endAngle: number;
  textColor?: string;
  significance?: string;
  practices?: string[];
}

const seasons: Season[] = [
  {
    name: 'Advent',
    color: '#7C3AED',
    textColor: '#FFFFFF',
    description: 'Preparation for Christmas',
    startAngle: 0,
    endAngle: 60,
    significance: 'A time of joyful expectation and preparation for Christ\'s coming',
    practices: ['Advent wreath lighting', 'Advent calendar', 'Preparation prayers']
  },
  {
    name: 'Christmas',
    color: '#FFFFFF',
    textColor: '#1F2937',
    description: 'Celebration of Jesus\' birth',
    startAngle: 60,
    endAngle: 90,
    significance: 'Celebrating the Incarnation and birth of our Savior',
    practices: ['Nativity scenes', 'Christmas carols', 'Gift giving']
  },
  {
    name: 'Ordinary Time I',
    color: '#059669',
    textColor: '#FFFFFF',
    description: 'Growth in faith',
    startAngle: 90,
    endAngle: 150,
    significance: 'Focus on Christ\'s public ministry and teachings',
    practices: ['Scripture study', 'Community service', 'Regular prayer']
  },
  {
    name: 'Lent',
    color: '#7C3AED',
    textColor: '#FFFFFF',
    description: 'Prayer, fasting & almsgiving',
    startAngle: 150,
    endAngle: 210,
    significance: '40 days of preparation for Easter through penance',
    practices: ['Fasting', 'Stations of the Cross', 'Almsgiving']
  },
  {
    name: 'Easter',
    color: '#FFFFFF',
    textColor: '#1F2937',
    description: 'Resurrection celebration',
    startAngle: 210,
    endAngle: 280,
    significance: 'The most important season - Christ\'s victory over death',
    practices: ['Alleluia proclamations', 'Baptisms', 'Renewal of vows']
  },
  {
    name: 'Ordinary Time II',
    color: '#059669',
    textColor: '#FFFFFF',
    description: 'Continued growth',
    startAngle: 280,
    endAngle: 360,
    significance: 'Living out our faith in daily life under the Holy Spirit',
    practices: ['Community building', 'Mission work', 'Spiritual growth']
  }
];

const LiturgicalYearWheel: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  const createPath = (startAngle: number, endAngle: number, innerRadius = 80) => {
    const start1 = {
      x: centerX + radius * Math.cos((startAngle * Math.PI) / 180),
      y: centerY + radius * Math.sin((startAngle * Math.PI) / 180)
    };
    const end1 = {
      x: centerX + radius * Math.cos((endAngle * Math.PI) / 180),
      y: centerY + radius * Math.sin((endAngle * Math.PI) / 180)
    };
    const start2 = {
      x: centerX + innerRadius * Math.cos((endAngle * Math.PI) / 180),
      y: centerY + innerRadius * Math.sin((endAngle * Math.PI) / 180)
    };
    const end2 = {
      x: centerX + innerRadius * Math.cos((startAngle * Math.PI) / 180),
      y: centerY + innerRadius * Math.sin((startAngle * Math.PI) / 180)
    };

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${start1.x} ${start1.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end1.x} ${end1.y} L ${start2.x} ${start2.y} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${end2.x} ${end2.y} Z`;
  };

  const getTextPosition = (startAngle: number, endAngle: number) => {
    const middleAngle = (startAngle + endAngle) / 2;
    const textRadius = (radius + 80) / 2;
    return {
      x: centerX + textRadius * Math.cos((middleAngle * Math.PI) / 180),
      y: centerY + textRadius * Math.sin((middleAngle * Math.PI) / 180)
    };
  };

  return (
    <div className="w-full">
      <Card className="shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-church-cream via-white to-church-cream/50">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-church-gold" />
              <h2 className="text-3xl font-bold text-church-burgundy">The Liturgical Year</h2>
              <Sparkles className="w-8 h-8 text-church-gold" />
            </div>
            <p className="text-lg text-gray-600">
              Click on any season to explore its significance and traditions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Liturgical Wheel */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <svg 
                width="400" 
                height="400" 
                className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {seasons.map((season, index) => (
                  <g key={index}>
                    <path
                      d={createPath(season.startAngle, season.endAngle)}
                      fill={season.color}
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      className="cursor-pointer transition-all duration-300 hover:stroke-4 filter hover:drop-shadow-lg"
                      style={{ 
                        filter: selectedSeason?.name === season.name ? 'url(#glow)' : 'none',
                        opacity: selectedSeason && selectedSeason.name !== season.name ? 0.6 : 1
                      }}
                      onClick={() => setSelectedSeason(season)}
                    />
                    <text
                      x={getTextPosition(season.startAngle, season.endAngle).x}
                      y={getTextPosition(season.startAngle, season.endAngle).y - 10}
                      textAnchor="middle"
                      fill={season.textColor || '#FFFFFF'}
                      fontSize="14"
                      fontWeight="bold"
                      className="pointer-events-none drop-shadow-sm"
                    >
                      {season.name}
                    </text>
                    <text
                      x={getTextPosition(season.startAngle, season.endAngle).x}
                      y={getTextPosition(season.startAngle, season.endAngle).y + 8}
                      textAnchor="middle"
                      fill={season.textColor || '#FFFFFF'}
                      fontSize="10"
                      className="pointer-events-none drop-shadow-sm"
                    >
                      {season.description}
                    </text>
                  </g>
                ))}
                
                {/* Center circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="80"
                  fill="url(#centerGradient)"
                  stroke="#D97706"
                  strokeWidth="4"
                />
                
                <defs>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#D97706" />
                  </radialGradient>
                </defs>
                
                <text
                  x={centerX}
                  y={centerY - 15}
                  textAnchor="middle"
                  fill="#92400E"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Christ
                </text>
                <text
                  x={centerX}
                  y={centerY + 5}
                  textAnchor="middle"
                  fill="#92400E"
                  fontSize="16"
                  fontWeight="bold"
                >
                  the
                </text>
                <text
                  x={centerX}
                  y={centerY + 25}
                  textAnchor="middle"
                  fill="#92400E"
                  fontSize="16"
                  fontWeight="bold"
                >
                  King
                </text>
              </svg>
            </div>

            {/* Season Details */}
            <div className="flex-1 min-w-0">
              {selectedSeason ? (
                <Card className="shadow-xl border-l-4" style={{ borderLeftColor: selectedSeason.color }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="w-8 h-8 rounded-full shadow-lg"
                        style={{ backgroundColor: selectedSeason.color }}
                      ></div>
                      <h3 className="text-3xl font-bold text-church-burgundy">
                        {selectedSeason.name}
                      </h3>
                      <Badge 
                        className="ml-auto text-white font-semibold px-4 py-1"
                        style={{ backgroundColor: selectedSeason.color }}
                      >
                        Current Season
                      </Badge>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Book className="w-6 h-6 text-church-burgundy mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-church-burgundy mb-2">Significance</h4>
                          <p className="text-gray-700 leading-relaxed">
                            {selectedSeason.significance}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-6 h-6 text-church-gold mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-church-burgundy mb-3">Traditional Practices</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedSeason.practices?.map((practice, index) => (
                              <Badge 
                                key={index}
                                variant="outline"
                                className="bg-church-cream text-church-burgundy border-church-gold"
                              >
                                {practice}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-xl bg-gradient-to-br from-church-burgundy to-church-navy text-white">
                  <CardContent className="p-8 text-center">
                    <Calendar className="w-16 h-16 text-church-gold mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Explore the Liturgical Seasons
                    </h3>
                    <p className="text-white/90 text-lg mb-6">
                      Click on any section of the wheel above to learn about that liturgical season, 
                      its significance, and traditional practices.
                    </p>
                    <Button 
                      onClick={() => setSelectedSeason(seasons[0])}
                      className="bg-church-gold hover:bg-church-gold/90 text-church-burgundy font-semibold px-8 py-3"
                    >
                      Start with Advent
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Color Legend */}
          <div className="mt-12 pt-8 border-t border-church-gold/20">
            <h3 className="text-xl font-semibold text-church-burgundy mb-6 text-center">
              Understanding Liturgical Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                <div className="w-6 h-6 rounded-full bg-purple-600 shadow-sm"></div>
                <div>
                  <div className="font-semibold text-purple-800">Purple</div>
                  <div className="text-sm text-purple-600">Penance & Preparation</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 shadow-sm"></div>
                <div>
                  <div className="font-semibold text-gray-800">White/Gold</div>
                  <div className="text-sm text-gray-600">Joy & Glory</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                <div className="w-6 h-6 rounded-full bg-green-600 shadow-sm"></div>
                <div>
                  <div className="font-semibold text-green-800">Green</div>
                  <div className="text-sm text-green-600">Growth & Hope</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
                <div className="w-6 h-6 rounded-full bg-red-600 shadow-sm"></div>
                <div>
                  <div className="font-semibold text-red-800">Red</div>
                  <div className="text-sm text-red-600">Spirit & Martyrs</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiturgicalYearWheel;