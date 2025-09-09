import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BookOpen, Calendar, Users, Church } from 'lucide-react';

interface FallbackContentProps {
  type: 'events' | 'blog' | 'readings' | 'team' | 'general';
  title?: string;
  message?: string;
}

const FallbackContent: React.FC<FallbackContentProps> = ({ type, title, message }) => {
  const getIcon = () => {
    switch (type) {
      case 'events': return <Calendar className="h-6 w-6 text-church-burgundy" />;
      case 'blog': return <BookOpen className="h-6 w-6 text-church-burgundy" />;
      case 'readings': return <BookOpen className="h-6 w-6 text-church-burgundy" />;
      case 'team': return <Users className="h-6 w-6 text-church-burgundy" />;
      default: return <Church className="h-6 w-6 text-church-burgundy" />;
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case 'events': return 'No Events Available';
      case 'blog': return 'No Posts Available';
      case 'readings': return 'Readings Not Available';
      case 'team': return 'Team Information Not Available';
      default: return 'Content Not Available';
    }
  };

  const getDefaultMessage = () => {
    switch (type) {
      case 'events': return 'Check back soon for upcoming parish events and activities.';
      case 'blog': return 'New blog posts and articles will be published soon.';
      case 'readings': return 'Daily readings are temporarily unavailable. Please check back later.';
      case 'team': return 'Parish team information will be updated soon.';
      default: return 'This content is currently being updated. Please check back later.';
    }
  };

  return (
    <Card className="border-amber-200 bg-amber-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          {getIcon()}
          {title || getDefaultTitle()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-amber-700">
          {message || getDefaultMessage()}
        </p>
      </CardContent>
    </Card>
  );
};

export default FallbackContent;