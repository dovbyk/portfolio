
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
    <header className="fixed top-0 w-full z-50 py-4 px-4 md:px-6">
      <div className={cn(
        "mx-auto flex items-center transition-all duration-[2500ms] ease-out",
        isScrolled 
          ? "justify-center bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 max-w-3xl" 
          : "justify-between max-w-full"
      )}>
        {/* Enhanced Minimalistic Logo */}
        <div className={cn(
          "flex items-center transition-all duration-[2500ms] ease-out",
          isScrolled ? "transform translate-x-0" : ""
        )}>
          <div className="relative">
            <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center transform rotate-12 bg-gradient-to-br from-white/20 to-transparent">
              <div className="w-2 h-2 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border border-white/70 rounded-sm transform rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center transition-all duration-[2500ms] ease-out",
          isScrolled ? "space-x-8 ml-8" : "space-x-16"
        )}>
          <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency text-lg">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency text-lg">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency text-lg">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 font-medium link-underline font-agency text-lg">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden text-white z-50 transition-all duration-[2500ms] ease-out",
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
