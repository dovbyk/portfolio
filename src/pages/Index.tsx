
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 mb-4 md:mb-0">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </p>
              <div className="text-white/70">
                <p>Designed & Developed with ❤️</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
};

export default Index;
