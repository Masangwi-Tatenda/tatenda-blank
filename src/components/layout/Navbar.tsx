
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Church, Menu, X } from "lucide-react";
import Button from "../common/Button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLinkProps {
  to?: string;
  label: string;
  children?: React.ReactNode;
  isDropdown?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  to = "#",
  label,
  children,
  isDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const isActive = to && location.pathname === to;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return isDropdown ? (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-white hover:text-church-gold transition-all duration-300",
          isOpen && "text-church-gold"
        )}
      >
        {label}
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={cn(
          "absolute left-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white z-50 transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        )}
      >
        {children}
      </div>
    </div>
  ) : (
    <Link
      to={to}
      className={cn(
        "px-3 py-2 text-white hover:text-church-gold transition-all duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-church-gold after:transition-all after:duration-300 hover:after:w-4/5",
        isActive && "text-church-gold font-medium after:w-4/5"
      )}
    >
      {label}
    </Link>
  );
};

interface DropdownItemProps {
  to: string;
  label: string;
  external?: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ to, label, external = false }) => {
  return external ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-church-burgundy hover:text-white transition-all duration-200"
    >
      {label}
    </a>
  ) : (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-church-burgundy hover:text-white transition-all duration-200"
    >
      {label}
    </Link>
  );
};

// Mobile NavLink component
const MobileNavLink: React.FC<NavLinkProps> = ({
  to = "#",
  label,
  children,
  isDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = to && location.pathname === to;

  return isDropdown ? (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full px-4 py-3 text-white hover:text-church-gold transition-all duration-300",
          isOpen && "text-church-gold"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>

      {/* Mobile dropdown content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 bg-church-burgundy/50",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="py-1">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <Link
      to={to}
      className={cn(
        "block px-4 py-3 text-white hover:text-church-gold transition-all duration-300 border-b border-white/10",
        isActive && "text-church-gold font-medium"
      )}
    >
      {label}
    </Link>
  );
};

// Mobile dropdown item component 
const MobileDropdownItem: React.FC<DropdownItemProps> = ({ to, label, external = false }) => {
  return external ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-6 py-2 text-sm text-white/80 hover:text-church-gold transition-all duration-200"
    >
      {label}
    </a>
  ) : (
    <Link
      to={to}
      className="block px-6 py-2 text-sm text-white/80 hover:text-church-gold transition-all duration-200"
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-2 bg-church-burgundy/80 backdrop-blur-lg shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20">
              <Church size={24} className="text-white group-hover:text-church-gold transition-colors duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Musha WeBetania</h1>
              <p className="text-xs font-medium text-white/80">Roman Catholic Parish</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/core-faith" label="Core Faith & Doctrine" />
            
            <NavLink isDropdown={true} label="Faith Formation">
              <DropdownItem to="/education-formation" label="Education & Formation" />
              <DropdownItem to="/spiritual-growth" label="Spiritual Growth" />
              <DropdownItem to="/vocations" label="Vocations" />
              <DropdownItem to="/apologetics" label="Apologetics" />
              <DropdownItem to="/church-documents" label="Church Documents" />
            </NavLink>
            
            <NavLink to="/mass-times" label="Mass & Worship" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/blog" label="Blog" />

            <NavLink isDropdown={true} label="Community">
              <DropdownItem to="/community/guilds" label="Catholic Guilds" />
              <DropdownItem to="/community/sections" label="Parish Sections" />
              <DropdownItem to="/community/youth" label="Catholic Youth Ministry" />
              <DropdownItem to="/community/gallery" label="Photo Gallery" />
            </NavLink>

            <NavLink isDropdown={true} label="Sacraments">
              <DropdownItem to="/sacraments/baptism" label="Baptism" />
              <DropdownItem to="/sacraments/communion" label="First Communion" />
              <DropdownItem to="/sacraments/confirmation" label="Confirmation" />
              <DropdownItem to="/sacraments/marriage" label="Marriage" />
              <DropdownItem to="/sacraments/reconciliation" label="Reconciliation" />
              <DropdownItem to="/sacraments/anointing" label="Anointing of the Sick" />
            </NavLink>

            <NavLink to="/contact" label="Contact" />
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:block">
            <Button
              variant="glass"
              href="/donate"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-white rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-church-burgundy border-church-burgundy p-0">
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="p-4 border-b border-white/10">
                  <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Church size={20} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Musha WeBetania</h2>
                      <p className="text-xs text-white/80">Roman Catholic Parish</p>
                    </div>
                  </Link>
                </div>
                
                {/* Mobile menu content */}
                <div className="flex-1 overflow-y-auto py-2">
                  <nav className="flex flex-col">
                    <MobileNavLink to="/" label="Home" />
                    <MobileNavLink to="/about" label="About" />
                    <MobileNavLink to="/core-faith" label="Core Faith & Doctrine" />
                    
                    <MobileNavLink isDropdown={true} label="Faith Formation">
                      <MobileDropdownItem to="/education-formation" label="Education & Formation" />
                      <MobileDropdownItem to="/spiritual-growth" label="Spiritual Growth" />
                      <MobileDropdownItem to="/vocations" label="Vocations" />
                      <MobileDropdownItem to="/apologetics" label="Apologetics" />
                      <MobileDropdownItem to="/church-documents" label="Church Documents" />
                    </MobileNavLink>
                    
                    <MobileNavLink to="/mass-times" label="Mass & Worship" />
                    <MobileNavLink to="/events" label="Events" />
                    <MobileNavLink to="/blog" label="Blog" />
                    
                    <MobileNavLink isDropdown={true} label="Community">
                      <MobileDropdownItem to="/community/guilds" label="Catholic Guilds" />
                      <MobileDropdownItem to="/community/sections" label="Parish Sections" />
                      <MobileDropdownItem to="/community/youth" label="Catholic Youth Ministry" />
                      <MobileDropdownItem to="/community/gallery" label="Photo Gallery" />
                    </MobileNavLink>
                    
                    <MobileNavLink isDropdown={true} label="Sacraments">
                      <MobileDropdownItem to="/sacraments/baptism" label="Baptism" />
                      <MobileDropdownItem to="/sacraments/communion" label="First Communion" />
                      <MobileDropdownItem to="/sacraments/confirmation" label="Confirmation" />
                      <MobileDropdownItem to="/sacraments/marriage" label="Marriage" />
                      <MobileDropdownItem to="/sacraments/reconciliation" label="Reconciliation" />
                      <MobileDropdownItem to="/sacraments/anointing" label="Anointing of the Sick" />
                    </MobileNavLink>
                    
                    <MobileNavLink to="/contact" label="Contact" />
                  </nav>
                </div>
                
                {/* Mobile menu footer */}
                <div className="p-4 border-t border-white/10">
                  <Button
                    variant="glass"
                    href="/donate"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
