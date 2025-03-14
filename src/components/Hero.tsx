
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.1)_0,rgba(0,0,0,1)_100%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 px-6 py-2 border border-white/10 rounded-full backdrop-blur-sm">
          <span className="text-white/80 font-medium">Computer Science Student</span>
        </div>
        
        <AnimatedText
          text="Bringing Ideas to Life with Code"
          el="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight max-w-4xl mx-auto"
          animation="blur-in"
        />
        
        <AnimatedText
          text="I design and develop modern websites, web applications, and software solutions"
          el="p"
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12"
          animation="slide-up"
          delay={300}
        />
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-20 mt-8" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out 0.6s forwards' }}>
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-lg bg-white text-black font-medium transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
      
      {/* Animated gradient spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 filter blur-[120px] animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
