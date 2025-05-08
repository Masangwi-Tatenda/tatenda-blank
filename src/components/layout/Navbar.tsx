import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-semibold text-2xl text-church-burgundy">St. Michael's</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ${
                location.pathname === '/' ? 'text-church-burgundy' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  About <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full">Our Parish</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/history" className="w-full">History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/parish-leadership" className="w-full">Parish Leadership</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mass-schedule" className="w-full">Mass Schedule</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Sacraments <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/baptism" className="w-full">Baptism</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/eucharist" className="w-full">Eucharist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/confirmation" className="w-full">Confirmation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/reconciliation" className="w-full">Reconciliation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/marriage" className="w-full">Marriage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/holy-orders" className="w-full">Holy Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/anointing" className="w-full">Anointing of the Sick</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Ministries <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/ministries" className="w-full">All Ministries</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/liturgical-ministry" className="w-full">Liturgical</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faith-formation" className="w-full">Faith Formation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/youth-ministry" className="w-full">Youth Ministry</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/outreach" className="w-full">Outreach & Service</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/prayer-groups" className="w-full">Prayer Groups</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Events <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/parish-calendar" className="w-full">Parish Calendar</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/upcoming-events" className="w-full">Upcoming Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/liturgical-calendar" className="w-full">Liturgical Calendar</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Spiritual Growth <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/spiritual-growth/daily-readings" className="w-full">Daily Readings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/homilies" className="w-full">Homilies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/prayers" className="w-full">Prayers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bible-study" className="w-full">Bible Study</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/retreats" className="w-full">Retreats</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  News & Media <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/news" className="w-full">Parish News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bulletins" className="w-full">Weekly Bulletins</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/newsletters" className="w-full">Newsletters</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/photo-gallery" className="w-full">Photo Gallery</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/donate" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ${
                location.pathname === '/donate' ? 'text-church-burgundy' : 'text-gray-700'
              }`}
            >
              Donate
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center">
            <button className="text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-church-burgundy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-church-burgundy"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          
          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>About</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/about" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Our Parish
                </Link>
                <Link 
                  to="/history" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  History
                </Link>
                <Link 
                  to="/parish-leadership" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Parish Leadership
                </Link>
                <Link 
                  to="/mass-schedule" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Mass Schedule
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </details>
          </div>
          
          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>Sacraments</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/baptism" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Baptism
                </Link>
                <Link 
                  to="/eucharist" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Eucharist
                </Link>
                <Link 
                  to="/confirmation" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Confirmation
                </Link>
                <Link 
                  to="/reconciliation" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Reconciliation
                </Link>
                <Link 
                  to="/marriage" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Marriage
                </Link>
                <Link 
                  to="/holy-orders" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Holy Orders
                </Link>
                <Link 
                  to="/anointing" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Anointing of the Sick
                </Link>
              </div>
            </details>
          </div>
          
          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>Ministries</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/ministries" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  All Ministries
                </Link>
                <Link 
                  to="/liturgical-ministry" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Liturgical
                </Link>
                <Link 
                  to="/faith-formation" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Faith Formation
                </Link>
                <Link 
                  to="/youth-ministry" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Youth Ministry
                </Link>
                <Link 
                  to="/outreach" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Outreach & Service
                </Link>
                <Link 
                  to="/prayer-groups" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Prayer Groups
                </Link>
              </div>
            </details>
          </div>
          
          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>Events</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/parish-calendar" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Parish Calendar
                </Link>
                <Link 
                  to="/upcoming-events" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Upcoming Events
                </Link>
                <Link 
                  to="/liturgical-calendar" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Liturgical Calendar
                </Link>
              </div>
            </details>
          </div>
          
          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>Spiritual Growth</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/spiritual-growth/daily-readings" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Daily Readings
                </Link>
                <Link 
                  to="/homilies" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Homilies
                </Link>
                <Link 
                  to="/prayers" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Prayers
                </Link>
                <Link 
                  to="/bible-study" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Bible Study
                </Link>
                <Link 
                  to="/retreats" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Retreats
                </Link>
              </div>
            </details>
          </div>

          <div className="block px-3 py-2 text-base font-medium">
            <details className="cursor-pointer">
              <summary>News & Media</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  to="/news" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Parish News
                </Link>
                <Link 
                  to="/bulletins" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Weekly Bulletins
                </Link>
                <Link 
                  to="/newsletters" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Newsletters
                </Link>
                <Link 
                  to="/photo-gallery" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Photo Gallery
                </Link>
              </div>
            </details>
          </div>
          
          <Link 
            to="/donate" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
