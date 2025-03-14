
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
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "backdrop-blur-md bg-black/70 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl md:text-3xl font-poppins font-bold text-white">
          Portfolio<span className="text-[#3B82F6]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-white/80 hover:text-white transition-colors font-medium link-underline">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors font-medium link-underline">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors font-medium link-underline">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors font-medium link-underline">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black z-40 pt-24 px-6 flex flex-col",
          "transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          <a 
            href="#home" 
            className="text-xl text-white/80 hover:text-white transition-colors" 
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-xl text-white/80 hover:text-white transition-colors" 
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-xl text-white/80 hover:text-white transition-colors" 
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-xl text-white/80 hover:text-white transition-colors" 
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
