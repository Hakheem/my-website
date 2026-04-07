"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 1. BACKGROUND IMAGE */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div 
          className="relative w-[80vw] h-[80vh] md:w-[60vw] md:h-full"
          style={{
            maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
          }}
        >
          <Image
            src="/HeadShott.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-center grayscale opacity-70 contrast-125"
            priority
          />
        </div>
      </motion.div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-32 items-center h-full">
        
        {/* LEFT SIDE: Heading Only */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left space-y-6 pt-20 lg:pt-40"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              Hector John · Software Engineer
            </span>
          </div>
<h1 className="text-5xl md:text-6xl lg:text-[4.5em] font-bold tracking-tight leading-[0.95]">
  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground/50">Interfaces</span> that Drive Digital <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground/50">
    Growth. 
  </span>
</h1>
        </motion.div>

        {/* RIGHT SIDE: Text + Button + Socials */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start md:items-end text-left md:text-right space-y-8 mt-8 md:mt-0 lg:pt-60"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed font-light">
            I transform complex business requirements into seamless user interfaces that <strong className="text-foreground font-medium">drive engagement</strong> and <strong className="text-foreground font-medium">converts visitors into loyal customers</strong>.
          </p>

          <div className="flex flex-col md:items-end gap-8">
           <div className="flex flex-wrap gap-4">

            {/* <a href='#about'>
            <button className="cursor-pointer group relative px-10 py-4 bg-foreground text-background rounded-full font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm shadow-foreground/10">
    Start Your Project
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button> </a> */}
            <a href='#projects'>
            <button className="cursor-pointer group relative px-10 py-4 bg-foreground text-background rounded-full font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm shadow-foreground/10">
      My Work
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button> </a>
           </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pr-2">
              <a href="https://github.com/Hakheem" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/hectorjohn" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hakheem.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
      </motion.div>

    </section>
  );
}

