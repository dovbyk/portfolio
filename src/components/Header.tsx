
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-out py-4 px-6 md:px-12",
        isScrolled 
          ? "backdrop-blur-md bg-black/60 shadow-lg border-b border-white/5" 
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center transition-all duration-700 ease-out",
        isScrolled ? "justify-center" : "justify-between"
      )}>
        {/* Enhanced Minimalistic Logo */}
        <div className={cn(
          "flex items-center transition-all duration-700 ease-out",
          isScrolled ? "mr-8" : ""
        )}>
          <div className="relative">
            <div className="w-8 h-8 border-2 border-white rounded-md flex items-center justify-center transform rotate-12">
              <div className="w-2 h-2 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border border-white/70 rounded-sm transform rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center space-x-8 transition-all duration-700 ease-out",
          isScrolled && "bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10"
        )}>
          <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden text-white z-50 transition-all duration-700 ease-out",
            isScrolled && "absolute right-6"
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-24 px-6 flex flex-col",
          "transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          <a 
            href="#home" 
            className="text-xl text-white/80 hover:text-white transition-colors font-agency" 
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-xl text-white/80 hover:text-white transition-colors font-agency" 
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-xl text-white/80 hover:text-white transition-colors font-agency" 
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-xl text-white/80 hover:text-white transition-colors font-agency" 
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
