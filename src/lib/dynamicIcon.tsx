
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Memoized function to get a Lucide icon component by name
export const dynamicIcon = React.memo((iconName?: string, props = {}) => {
  if (!iconName) return null;
  
  try {
    // @ts-ignore: Dynamic icon access
    const IconComponent = LucideIcons[iconName];
    
    if (IconComponent) {
      return React.createElement(IconComponent, props);
    }
  } catch (error) {
    console.warn(`Error rendering icon "${iconName}": ${error}`);
  }
  
  // Fallback to default icon if the requested one doesn't exist
  console.warn(`Icon "${iconName}" not found in Lucide icons`);
  return React.createElement(LucideIcons.HelpCircle, props);
});

export default dynamicIcon;
