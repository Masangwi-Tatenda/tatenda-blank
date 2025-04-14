
import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Function to get a Lucide icon component by name
export const dynamicIcon = (iconName?: string, props = {}) => {
  if (!iconName) return null;
  
  // Check if the icon exists in the Lucide icons library
  if (iconName in LucideIcons) {
    // Get the icon component using indexed access
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.FC<LucideProps>;
    
    // Return the icon component rendered with props
    return <IconComponent {...props} />;
  }
  
  // Fallback to default icon if the requested one doesn't exist
  console.warn(`Icon "${iconName}" not found in Lucide icons`);
  return <LucideIcons.HelpCircle {...props} />;
};

export default dynamicIcon;
