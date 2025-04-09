
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Church, Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Helper function to suggest pages based on URL path
  const getSuggestedLinks = () => {
    const path = location.pathname.toLowerCase();
    
    // Parish Life related
    if (path.includes("event") || path.includes("calendar")) {
      return [
        { to: "/parish-calendar", label: "Parish Calendar" },
        { to: "/events", label: "Events" },
        { to: "/liturgical-calendar", label: "Liturgical Calendar" }
      ];
    }
    
    // Faith formation related
    if (path.includes("faith") || path.includes("education") || path.includes("catechism")) {
      return [
        { to: "/core-faith", label: "Core Faith & Doctrine" },
        { to: "/education-formation", label: "Catechesis" },
        { to: "/bible-study", label: "Bible Studies" }
      ];
    }
    
    // Sacrament related
    if (path.includes("sacrament")) {
      return [
        { to: "/sacraments/baptism", label: "Baptism" },
        { to: "/sacraments/communion", label: "First Communion" },
        { to: "/sacraments/marriage", label: "Marriage" }
      ];
    }
    
    // Community related
    if (path.includes("community") || path.includes("group") || path.includes("guild")) {
      return [
        { to: "/community/guilds", label: "Catholic Guilds" },
        { to: "/community/sections", label: "Parish Sections" },
        { to: "/ministries", label: "Ministries" }
      ];
    }
    
    // Mass related
    if (path.includes("mass") || path.includes("worship")) {
      return [
        { to: "/mass-times", label: "Mass Times" },
        { to: "/mass-recordings", label: "Mass Recordings" },
        { to: "/homilies", label: "Homilies" }
      ];
    }
    
    // Default suggestions
    return [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" }
    ];
  };

  const suggestedLinks = getSuggestedLinks();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-20 pb-16 px-4">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-church-burgundy/10 flex items-center justify-center">
              <Church className="h-12 w-12 text-church-burgundy" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-church-burgundy mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8">
            We're sorry, but the page you were looking for doesn't exist or has been moved.
          </p>
          
          <div className="mb-8">
            <Button asChild variant="default" size="lg" className="bg-church-burgundy hover:bg-church-burgundy/90">
              <Link to="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">You might be looking for:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {suggestedLinks.map((link, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  asChild 
                  className="border-church-burgundy/20 hover:bg-church-burgundy/5 text-church-burgundy"
                >
                  <Link to={link.to}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
