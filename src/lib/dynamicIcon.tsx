
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Fixed function to get a Lucide icon component by name
export const dynamicIcon = (iconName?: string, props = {}) => {
  if (!iconName) return null;
  
  // Use the index signature to access icons dynamically
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
  
  if (IconComponent) {
    return React.createElement(IconComponent, props);
  }
  
  // Fallback to default icon if the requested one doesn't exist
  console.warn(`Icon "${iconName}" not found in Lucide icons`);
  return React.createElement(LucideIcons.HelpCircle, props);
};

export default dynamicIcon;
