"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, Github } from 'lucide-react';
import CTACard from '@/components/general/CTACard';

const PROJECTS = [
  {
    id: 1,
    title: "SkillBridge",
    category: "EdTech Platform",
    challenge: "Most LMS platforms are either quite expensive or not built for the East African learner. A gap existed for an affordable, locally-relevant environment where Kenyan students could learn with proper structure, progress tracking, and instructors could actually earn.",
    solution: "Built a full-stack LMS from scratch, course management engine, real-time student progress tracking, Multiple payment methods, and a low-latency S3 video pipeline. Launched as a personal SaaS, validated it with real users, and eventually sold it to an institution with the funds to take it further.",
    impact: "110+ learners served. Acquired and in active operation.",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "M-Pesa", "Tailwind CSS"],
    image: "/lms.jpg",
    link: "https://skilly-bridge.vercel.app/",
    github: "#",
    caseStudy: "/projects/skillbridge"
  },
  {
    id: 2,
    title: "Sixpoint Victoria",
    category: "Website Redesign",
    challenge: "Sixpoint Victoria — a 3-star hotel — was losing direct bookings every day through a broken, non-converting website. The UI was outdated, the booking flow was completely non-functional, and the digital experience didn't reflect the quality of the property.",
    solution: "Delivered a complete UI overhaul and rebuilt the booking engine from scratch. New luxury-focused visual identity, smooth interactions, and a fully working direct booking flow, replacing what was essentially a dead digital storefront.",
    impact: "Transformed a zero-conversion site into a premium, fully-functional booking experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Redesign"],
    image: "/sixpoint.jpg",
    link: "https://sixpoint-eight.vercel.app/",
    github: "#",
    caseStudy: "/projects/sixpoint"
  },
  {
    id: 3,
    title: "East Side Urban",
    category: "E-Commerce Platform",
    challenge: "Building a full-featured streetwear e-commerce store that could handle complex product variations, real-time inventory, and seamless M-Pesa checkout — while matching the culture and visual energy of the brand.",
    solution: "Engineered a complete full-stack retail platform with Redux state management, a dynamic product filtering system, a secure multi-step M-Pesa checkout, and a merchant admin dashboard — all optimized for sub-second transitions.",
    impact: "Production-ready platform handling 200+ SKUs with a complete merchant backend.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "M-Pesa API"],
    image: "/eastside.avif",
    link: "https://east-side-urban-frontend.onrender.com/",
    github: "#",
    caseStudy: "/projects/eastside"
  },
  {
    id: 4,
    title: "EastRide AI Marketplace",
    category: "AI-Powered Platform",
    challenge: "Traditional car marketplaces make discovery painful, keyword search only works if you know exactly what to type. Meanwhile, sellers waste hours entering vehicle specs manually for each listing.",
    solution: "Built a dual-AI system: buyers upload a car photo and Gemini AI + Cloudinary finds the closest matching listings via computer vision. On the admin side, the same AI stack auto-extracts full vehicle specs from photos, eliminating manual data entry entirely.",
    impact: "A fully working AI pipeline that redefines both the buyer and seller experience in auto commerce.",
    tags: ["Next.js", "Gemini AI", "Cloudinary", "MongoDB", "Next-Auth"],
    image: "/eastride.avif",
    link: "https://east-ride.vercel.app/",
    github: "#",
    caseStudy: "/projects/eastride"
  },
  {
    id: 5,
    title: "Trendify",
    category: "Mobile UI/UX Design",
    challenge: "Sneaker culture in East Africa had no dedicated digital home. Existing platforms were generic, lacked cultural context, and had no proper local delivery UX. The challenge was designing something that felt street-native yet polished enough for everyday use.",
    solution: "Designed a high-fidelity mobile app — brand identity, screen architecture, user flows, and advanced micro-interactions — entirely in Figma with ProtoPie prototyping. Every screen was built around the buyer journey from browsing to doorstep delivery.",
    impact: "A complete, handoff-ready mobile product design with prototype-level interactions.",
    tags: ["Figma", "ProtoPie", "UI/UX Design", "Prototyping", "Mobile Design"],
    image: "/step.avif",
    link: "#",
    github: "#",
    caseStudy: "/projects/trendify"
  }
];

const MORE_PROJECTS = [
  {
    name: "Tibapoint",
    logo: "/tibapoint.png",
    link: "https://tibapoint.vercel.app",
    category: "Healthcare Platform",
    color: "#0d61cf"
  },
  {
    name: "Barabara Voyagers",
    logo: "/barabara_logo.svg",
    link: "https://barabara-voyagers.vercel.app",
    category: "Tours & Travel",
    color: "#e9a023"
  },
  {
    name: "Wazirent",
    logo: "/wazilogo.png",
    link: "https://wazirent.vercel.app",
    category: "Real Estate",
    color: "#4d2402"
  },
  {
    name: "MYTO",
    logo: "/myto.png",
    link: "https://my-ngo.vercel.app",
    category: "N.G.O",
    color: "#15b301"
  },
];

export default function ProjectsPage() {
  // Quadruple the items so the infinite loop looks natural
  const sliderItems = [
    ...MORE_PROJECTS,
    ...MORE_PROJECTS,
    ...MORE_PROJECTS,
    ...MORE_PROJECTS,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .slider-track {
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        .logo-card img {
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        .logo-card:hover img {
          filter: grayscale(0%);
        }
        .project-tooltip {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }
        .logo-card:hover .project-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── 1. HERO ── */}
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
              From robust pipelines and backend integrations to fluid frontend interfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PROJECTS ── */}
      <section className="pb-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-32 md:space-y-48">
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
              {/* Image */}
              <div className="w-full lg:w-3/5 group cursor-pointer relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-75 md:h-125 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Text */}
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
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 bg-secondary/50 border border-border rounded-md font-medium uppercase tracking-tighter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 border-l-2 border-primary/20 pl-6 py-2">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
                      Challenge
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground/90">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-primary mb-1">
                      Solution & Impact
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {project.solution}{" "}
                      <span className="text-primary italic">{project.impact}</span>
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
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. MORE PROJECTS SLIDER ── */}
      <section className="pb-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="border-t border-border pt-16 flex flex-col lg:flex-row gap-10 lg:gap-0 items-start lg:items-center">

          {/* Left label — 25% */}
          <div className="w-full lg:w-[25%] shrink-0 lg:pr-10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">
              More Work
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
              A few more things<br />
              I&apos;ve shipped.
            </h3>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Beyond the featured projects — more products built, more problems solved.
            </p>
          </div>

          {/* Right slider — 75% */}
          <div className="w-full lg:w-[75%] relative overflow-hidden">
            {/* Fade masks */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, var(--background) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, var(--background) 0%, transparent 100%)",
              }}
            />

            {/* Track */}
            <div className="slider-track flex gap-6 w-fit h-fit py-4">
              {sliderItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-card group relative shrink-0 flex flex-col items-center gap-3"
                >
                  <div className="w-40 h-24 rounded-xl border border-border bg-secondary/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:bg-secondary/60 relative">
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="w-full h-full object-contain p-3 transition-all duration-300"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.className = 'text-sm font-bold tracking-tight text-center px-3';
                          span.style.color = item.color;
                          span.textContent = item.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>

                  {/* tooltip */}
                  <div className="project-tooltip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground/90 backdrop-blur-sm text-background text-[10px] font-medium px-3 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
                    {item.category} ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <div className="pb-20">
        <CTACard contactHref="/contact" />
      </div>
    </div>
  );
}


