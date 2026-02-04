// components/general/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Value Statement */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight font-sans">
              Let's build something <span className="text-muted-foreground italic font-light">impactful {' '} </span> together.
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-sans">
              I specialize in bridging the gap between complex engineering and strategic business goals. 
              Currently open to new projects and partnerships.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="mailto:hakheem.dev@gmail.com" className="text-sm font-semibold underline underline-offset-4 hover:text-foreground transition-colors">
                Email
              </a>
              <span className="text-border">/</span>
              <a href="#" className="text-sm font-semibold underline underline-offset-4 hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <span className="text-border">/</span>
              <a href="github.com/Hakheem" className="text-sm font-semibold underline underline-offset-4 hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side: Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end font-sans">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/50">Navigation</span>
              <Link href="/" className="text-sm hover:translate-x-1 transition-transform inline-block">Home</Link>
              <Link href="/projects" className="text-sm hover:translate-x-1 transition-transform inline-block">Projects</Link>
              <Link href="/contact" className="text-sm hover:translate-x-1 transition-transform inline-block">Contact</Link>
              <Link href="/about" className="text-sm hover:translate-x-1 transition-transform inline-block">About</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/50">Location</span>
              <p className="text-sm tracking-tight">
                Nairobi, Kenya <br />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © {currentYear}
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Hector John
          </p>
        </div>
      </div>
    </footer>
  );
}

