
import { useEffect } from 'react';

/**
 * This component ensures that all external links open in a new tab.
 * It adds target="_blank" and rel="noopener noreferrer" to all "a" tags
 * that have href attributes starting with "http" and don't already have a target attribute.
 */
const OpenExternalLinks = () => {
  useEffect(() => {
    const handleExternalLinks = () => {
      // Find all "a" elements with href starting with http
      const links = document.querySelectorAll('a[href^="http"]');
      
      // Iterate through each link
      links.forEach(link => {
        // Skip links that already have a target attribute
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    };
    
    // Process links on initial load
    handleExternalLinks();
    
    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(mutations => {
      let shouldProcess = false;
      
      // Check if any mutations include adding nodes or changing attributes
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldProcess = true;
        } else if (mutation.type === 'attributes' && 
                  mutation.attributeName === 'href' && 
                  mutation.target instanceof HTMLAnchorElement) {
          shouldProcess = true;
        }
      });
      
      // Only process if needed
      if (shouldProcess) {
        handleExternalLinks();
      }
    });
    
    // Configure observer to watch for changes to the DOM
    const observerConfig = {
      childList: true,      // Watch for changes to the child node structure
      subtree: true,        // Watch the entire DOM tree
      attributes: true,     // Watch for changes to attributes
      attributeFilter: ['href']  // Only care about href attribute changes
    };
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, observerConfig);
    
    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default OpenExternalLinks;
