import React, { useCallback } from "react";
import { ExternalLink, ArrowRight, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectCardProps {
  headline: string;
  description: string;
  tags: string[];
  images: string[]; 
  liveLink: string;
  caseStudyLink: string;
  category: string;
  Icon: LucideIcon;
  imageSide?: "left" | "right";
}

export function ProjectCard({
  headline,
  description,
  tags,
  images,
  liveLink,
  caseStudyLink,
  category,
  Icon,
  imageSide = "left",
}: ProjectCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="w-full py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm">
          
          {/* IMAGE SECTION */}
          <div 
            className={`lg:col-span-7 h-[400px] md:h-[550px] bg-secondary/10 relative border-border/50 overflow-hidden ${
              imageSide === "right" ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
            }`}
          >
            {/* CAROUSEL VIEWPORT */}
            <div className="h-full w-full overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                    {/* Internal Scrollable Container for each image */}
                    <div className="h-full w-full overflow-y-auto scrollbar-hide px-2 pt-4 custom-scrollbar">
                      <img 
                        src={src} 
                        alt={`${headline} screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CAROUSEL NAVIGATION */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={scrollPrev}
                  className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all shadow-lg opacity-30 hover:opacity-80"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={scrollNext}
                  className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all shadow-lg opacity-30 hover:opacity-80"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Visual Paging Dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                  {images.map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  ))}
                </div>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-50 text-[10px] uppercase tracking-widest bg-background/80 px-3 py-1 rounded-full border border-border z-20">
              {images.length > 1 ? "Swipe for more / Scroll to explore" : "Scroll to explore"}
            </div>
          </div>

          {/* INFO SECTION */}
          <div className={`lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full ${
            imageSide === "right" ? "lg:order-1" : "lg:order-2"
          }`}>
            <div>
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Icon size={18} />
                <span className="text-sm tracking-wider uppercase">{category}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{headline}</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a 
                href={liveLink} 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Preview Project <ExternalLink size={16} />
              </a>
              <a 
                href={caseStudyLink} 
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-muted transition-all"
              >
                View Details <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

