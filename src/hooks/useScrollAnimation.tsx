
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.2, delay = 0, once = true, rootMargin = '0px 0px -100px 0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (once) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, delay, once, rootMargin]);

  return { ref, isVisible };
};
