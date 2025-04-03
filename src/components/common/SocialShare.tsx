
import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Share2 } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'default' | 'lg';
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title,
  description = '',
  className = '',
  showLabel = true,
  size = 'default'
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-blue-400 hover:bg-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: 'bg-blue-800 hover:bg-blue-900',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ];
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };
  
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 items-center">
        <h3 className="text-lg font-bold flex items-center mr-2">
          <Share2 className="mr-2 h-5 w-5 text-church-burgundy" />
          Share
        </h3>
        
        {shareLinks.map((link) => (
          <Button 
            key={link.name}
            variant="outline" 
            size={size}
            className="rounded-full" 
            asChild
          >
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
            >
              <link.icon className="h-4 w-4 mr-2" />
              {showLabel && link.name}
            </a>
          </Button>
        ))}
        
        <Button 
          variant="outline" 
          size={size}
          className="rounded-full" 
          onClick={copyToClipboard}
        >
          <LinkIcon className="h-4 w-4 mr-2" />
          {showLabel && 'Copy Link'}
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
