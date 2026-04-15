"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  label?: string;
  labelPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  labelVariant?: 'before' | 'after' | 'default';
  height?: { 
    mobile?: string;
    desktop?: string;
  };
  className?: string;
  scrollable?: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  label,
  labelPosition = 'top-left',
  labelVariant = 'default',
  height = { mobile: 'h-[250px]', desktop: 'md:h-[400px]' },
  className = '',
  scrollable = true,
}) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollable && scrollRef.current) {
      const element = scrollRef.current;
      const checkScrollable = () => {
        const isScrollableNow = element.scrollHeight > element.clientHeight;
        setIsScrollable(isScrollableNow);
      };
      
      checkScrollable();
      window.addEventListener('resize', checkScrollable);
      
      return () => window.removeEventListener('resize', checkScrollable);
    }
  }, [scrollable, src]);

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.scrollTop > 10) {
      setHasScrolled(true);
    }
  };

  const getLabelStyles = () => {
    const baseStyles = "absolute text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md z-10";
    
    let variantStyles = '';
    if (labelVariant === 'before') {
      variantStyles = 'bg-black/50 text-white';
    } else if (labelVariant === 'after') {
      variantStyles = 'bg-primary/80 text-primary-foreground';
    } else {
      variantStyles = 'bg-background/80 text-foreground border border-border';
    }
    
    let positionStyles = '';
    switch (labelPosition) {
      case 'top-left':
        positionStyles = 'top-4 left-4';
        break;
      case 'top-right':
        positionStyles = 'top-4 right-4';
        break;
      case 'bottom-left':
        positionStyles = 'bottom-4 left-4';
        break;
      case 'bottom-right':
        positionStyles = 'bottom-4 right-4';
        break;
    }
    
    return `${baseStyles} ${variantStyles} ${positionStyles}`;
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-border group ${className}`}>
      <div className={`relative ${height.mobile} ${height.desktop}`}>
        {scrollable ? (
          <>
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Scroll Indicator */}
            {isScrollable && !hasScrolled && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="bg-background/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-border">
                  <ChevronDown size={12} className="text-muted-foreground" />
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
                    Scroll
                  </span>
                  <ChevronDown size={12} className="text-muted-foreground" />
                </div>
              </div>
            )}
          </>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {label && (
        <div className={getLabelStyles()}>
          {label}
        </div>
      )}
    </div>
  );
};

