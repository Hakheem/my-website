"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FolderGit2, ExternalLink, ArrowUpRight, Github } from 'lucide-react';
import CTACard from '@/components/general/CTACard';

const PROJECTS = [
  {
    id: 1,
    title: "Mahanaim College Redesign",
    category: "Academic Portal",
    challenge: "The legacy system was non-responsive and difficult to navigate, leading to high bounce rates during peak enrollment periods.",
    solution: "Engineered a custom WordPress CMS with a Next.js frontend, streamlining the application flow and implementing high-speed API routes.",
    impact: "Increased student enrollment by 12% and reduced page load times by 65%.",
    tags: ["Next.js", "WordPress API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    link: "https://mahanaim.ac.ke",
    github: "#",
    caseStudy: "/projects/mahanaim-college"
  },
  {
    id: 2,
    title: "BaraBara Voyagers",
    category: "Travel Logistics",
    challenge: "Travelers lacked a centralized system for real-time booking and secure mobile payments for local logistics.",
    solution: "Developed a comprehensive booking engine integrated with M-Pesa API and a Node.js backend for real-time seat availability.",
    impact: "Automated 90% of booking confirmations and secured thousands of transactions.",
    tags: ["React", "Node.js", "M-Pesa API"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    link: "#",
    github: "#",
    caseStudy: "/projects/barabara-voyagers"
  },
  {
    id: 3,
    title: "IYF Academy Portal",
    category: "Learning Management",
    challenge: "Tracking student progress and curriculum management was managed manually via spreadsheets, leading to data inconsistencies.",
    solution: "Built an automated educational dashboard using TypeScript and Supabase for real-time progress tracking and reporting.",
    impact: "Reduced administrative overhead by 40 hours per month for teaching staff.",
    tags: ["TypeScript", "Supabase", "UI/UX"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    github: "#",
    caseStudy: "/projects/iyf-academy"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 mb-6">
                <FolderGit2 size={14} className="text-primary" />
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                  Portfolio / Selected Works
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Building the future, <br />
                <span className="text-muted-foreground">pixel by pixel.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl">
                A deep dive into the engineering behind my digital products. 
                From complex backend integrations to fluid frontend interfaces.
              </p>
            </motion.div>
          </div>
      </section>

      {/* 2. PROJECTS NARRATIVE SECTION */}
      <section className="pb-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className=" space-y-32 md:space-y-48">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col gap-12 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group cursor-pointer relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">
                    0{index + 1} / {project.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-secondary/50 border border-border rounded-md font-medium uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 border-l-2 border-primary/20 pl-6 py-2">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground/90">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-primary mb-1">Solution & Impact</h4>
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {project.solution} <span className="text-primary italic">{project.impact}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a 
                    href={project.caseStudy}
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold transition-transform active:scale-95 hover:opacity-90"
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </a>
                  <div className="flex items-center gap-2">
                    <a href={project.link} className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.github} className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <div className="pb-20 ">
          <CTACard contactHref="/contact" />
      </div>
      
    </div>
  );
}