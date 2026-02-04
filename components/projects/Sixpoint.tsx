import React from "react";
import { Compare } from "@/components/ui/compare"; 
import { ExternalLink, Layout, ArrowRight } from "lucide-react";

export function SixpointProject() {
  return (
    <section className="w-full py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN FULL-WIDTH CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm group">
          
          {/* LEFT GRID: THE COMPARISON (DRAG MODE) */}
          <div className="lg:col-span-7 min-h-[400px] lg:h-auto bg-secondary/20 relative border-r border-border/50">
            <Compare
              firstImage="/sixpoint_old.png"
              secondImage="/sixpoint_revamp.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-full w-full rounded-none"
              slideMode="drag"
              autoplay={false}
              initialSliderPercentage={5} 
            />
            
            {/* Label Overlays */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-20 pointer-events-none">
               <span className="bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                 Before
               </span>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 z-20 pointer-events-none">
               <span className="bg-primary/80 backdrop-blur-md text-primary-foreground text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                 After
               </span>
            </div>
          </div>

          {/* RIGHT GRID: THE INFO */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Layout size={18} />
                <span className="text-sm tracking-wider uppercase">Website Redesign</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Sixpoint Victoria</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                I transformed a dated hospitality site into a high-conversion digital experience that mirrors the hotel's premium physical service. By eliminating visual friction and optimizing the architecture for luxury storytelling, the revamp creates an immediate sense of prestige that compels users to explore further and book directly.
              </p>

              {/* TECH STACK PILLS */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Redesign"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4 mt-auto">
              <a 
                href="https://sixpoint-eight.vercel.app/" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a 
                href="/projects/sixpoint" 
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-muted transition-all"
              >
                View Case Study <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

