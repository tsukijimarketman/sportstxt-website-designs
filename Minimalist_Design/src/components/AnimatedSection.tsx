import React, { useEffect, useState, useRef } from 'react';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  threshold?: number;
  bgColor?: string;
}
export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  bgColor = ''
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold
    });
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'slide-in-right': 'opacity-0 translate-x-10',
    'slide-in-left': 'opacity-0 -translate-x-10'
  };
  const visibleClasses = 'opacity-100 translate-x-0 translate-y-0';
  const style = {
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.8s',
    transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transitionDelay: `${delay}ms`,
    backgroundColor: bgColor || undefined
  };
  return <div ref={sectionRef} className={`${className} ${isVisible ? visibleClasses : animationClasses[animation]}`} style={style}>
      {children}
    </div>;
};