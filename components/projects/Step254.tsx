import React, { useState } from "react";
import { Smartphone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function Step254() {
  const images = ["/trendify-home.png", "/step_mockup2.png", "/step_mockup3.png"];
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-card border  transition-all duration-500 shadow-sm">
          
          {/* IMAGE */}
          <div className="lg:col-span-7 h-[500px] bg-secondary/5 relative flex items-center justify-center overflow-hidden border-r border-border/50">
            <div className="relative w-[280px] h-[550px] transition-all duration-500 ease-in-out">
               <img 
                 src={images[current]} 
                 alt="Step254 Mobile UI"
                 className="w-full h-full object-contain drop-shadow-2xl"
               />
            </div>

            {/* Simple Slider Controls */}
            <button 
              onClick={() => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground cursor-pointer opacity-30 hover:opacity-80 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground cursor-pointer opacity-30 hover:opacity-80 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* INFO SIDE */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary font-medium mb-4">
              <Smartphone size={18} />
              <span className="text-sm tracking-wider uppercase">Mobile UI/UX Design</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Step254: Footwear Delivery</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              A high-fidelity mobile application concept centered on the sneaker culture and local delivery logistics. The project focuses on a "mobile-first" user experience, utilizing ProtoPie for advanced micro-interactions and Figma for a clean, street-wear inspired visual identity.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Figma", "ProtoPie", "UI/UX", "Prototyping"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border">
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="/projects/step254" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-muted transition-all w-full sm:w-fit"
            >
              View Case Study <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


