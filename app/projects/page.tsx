"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
// import ProjectCard from '@/components/ProjectCard';
import CTACard from '@/components/general/CTACard';

const PROJECTS = [
  {
    id: 1,
    title: "Mahanaim College Redesign",
    description: "A high-performance academic portal with custom WordPress CMS integration. Increased student enrollment by 12% through optimized UX flows.",
    tags: ["Next.js", "WordPress API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    link: "https://mahanaim.ac.ke",
    github: "#"
  },
  {
    id: 2,
    title: "BaraBara Voyagers",
    description: "A comprehensive booking system for travel logistics. Features real-time availability, M-Pesa payment integration, and an admin dashboard.",
    tags: ["React", "Node.js", "M-Pesa API"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "IYF Academy Portal",
    description: "Educational platform for tracking student progress and curriculum management. Serves over 60 students with automated reporting.",
    tags: ["TypeScript", "Supabase", "UI/UX"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-border bg-secondary/30 mb-6">
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
                A collection of digital products where engineering meets design. 
                From complex backend integrations to fluid frontend interfaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* <ProjectCard {...project} /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
            <CTACard contactHref="/contact" />
      
      
    </div>
  );
}

