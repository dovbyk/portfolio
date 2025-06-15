
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
        "fixed top-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled 
          ? "backdrop-blur-md bg-black/80 shadow-lg border-b border-white/5" 
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center transition-all duration-500",
        isScrolled ? "justify-center" : "justify-between"
      )}>
        {/* Minimalistic Logo */}
        <div className={cn(
          "flex items-center transition-all duration-500",
          isScrolled && "absolute left-6"
        )}>
          <div className="relative">
            <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border border-white/50 rounded-full"></div>
          </div>
          <span className={cn(
            "ml-3 text-xl font-agency font-bold text-white transition-opacity duration-300",
            isScrolled && "md:opacity-0"
          )}>
            Dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center space-x-8 transition-all duration-500",
          isScrolled && "bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10"
        )}>
          <a href="#home" className="text-white/80 hover:text-white transition-colors font-medium link-underline font-agency">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors font-medium link-underline font-agency">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors font-medium link-underline font-agency">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors font-medium link-underline font-agency">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
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
