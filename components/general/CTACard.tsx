"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface CTACardProps {
  contactHref?: string; 
}

export default function CTACard({ contactHref = "mailto:hakheem.dev@gmail.com" }: CTACardProps) {
  // Check if it's an internal link or an external/email link
  const isInternal = contactHref.startsWith('/');

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-foreground text-background md:rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-none">
            HAVE A PROJECT <br /> 
            <span className="text-zinc-800 dark:text-gray-500 italic">IN MIND?</span>
          </h2>
          <p className="text-background/70 text-lg md:text-xl max-w-xl mx-auto">
            I’m currently accepting new projects and full-time opportunities. Let’s build you a solution that matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8">
            {/* Get In Touch - Filled Button */}
            {isInternal ? (
              <Link 
                href={contactHref} 
                className="group relative flex items-center justify-center px-12 py-6 bg-background text-foreground rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10">Get In Touch</span>
                <ArrowUpRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
              </Link>
            ) : (
              <a 
                href={contactHref} 
                className="group relative flex items-center justify-center px-12 py-6 bg-background text-foreground rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10">Get In Touch</span>
                <ArrowUpRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
              </a>
            )}
            
            {/* Download CV  */}
            <a 
              href="/docs/Hector John Dev Resume.pdf" 
              className="px-12 py-6 border border-background/20 hover:border-background/50 text-background rounded-full font-black uppercase tracking-widest text-xs transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

