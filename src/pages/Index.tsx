
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Index = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation<HTMLDivElement>({ delay: 100 });

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <div 
            ref={aboutRef}
            className={cn(
              "transition-all duration-1000 transform",
              aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <About />
          </div>
          <Projects />
          <div 
            ref={contactRef}
            className={cn(
              "transition-all duration-1000 transform",
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <Contact />
          </div>
        </main>
        
        <footer 
          ref={footerRef}
          className={cn(
            "py-8 border-t border-white/10 transition-all duration-800 transform",
            footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 mb-4 md:mb-0">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
};

export default Index;
