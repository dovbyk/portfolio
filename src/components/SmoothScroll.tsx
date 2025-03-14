
import React, { useEffect } from 'react';

type SmoothScrollProps = {
  children: React.ReactNode;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
