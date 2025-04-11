
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Function to get a Lucide icon component by name
export const dynamicIcon = (iconName?: string) => {
  if (!iconName) return null;
  
  // @ts-ignore: Dynamic icon access
  const IconComponent = LucideIcons[iconName];
  
  if (IconComponent) {
    return IconComponent;
  }
  
  // Fallback to default icon if the requested one doesn't exist
  console.warn(`Icon "${iconName}" not found in Lucide icons`);
  return LucideIcons.HelpCircle;
};

export default dynamicIcon;
