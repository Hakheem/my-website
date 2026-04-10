"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Rocket,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Plane,
  Target,
  Droplet,
  Gamepad2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CTACard from "@/components/general/CTACard";
import { ProjectImage } from "@/components/general/ProjectImage";

const techStack = [
  'React/Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Sanity', 'Strapi',
  'RESTful APIs', 'AI Integrations', 'Git/CI/CD', 'UI/UX Implementation'
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [ 
    { id: "experience", title: "Work Experience", icon: <Briefcase size={16} /> },
    { id: "education", title: "Education & Certifications", icon: <GraduationCap size={16} /> },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto selection:bg-primary/30">
      {/* 1. HERO */}
      <section className="relative pt-28 pb-20">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-border bg-secondary/30 mb-3 md:mb-6">
                  <Terminal size={14} className="text-primary" />
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                    Software Engineer / Full-Stack Developer
                  </span>
                </div>

                <h1 className="font-bold tracking-tight leading-tight mb-6 break-words">
                  <span className="text-xl text-muted-foreground block mb-4 font-medium tracking-normal">
                    Hi there, I'm Hector John.
                  </span>
                  <span className="text-foreground text-5xl md:text-7xl">
                   Engineering High-End Digital Products.
                  </span>
                </h1>

                <p className="text-lg font-normal text-muted-foreground leading-relaxed max-w-xl">
                 Focused on solving problems through architectures and seamless user interfaces. I bridge the gap between complex engineering logic and intuitive design. 
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-3 pt-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/Hakheem" },
                    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/hector-john" },
                    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/254769403162" },
                    { icon: <Mail size={20} />, href: "mailto:hakheem.dev@gmail.com" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))} 
                </div>
              </motion.div>
            </div>

            {/* HERO IMAGE */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-xl overflow-hidden border border-border shadow-lg"
              >
                <img
                  src="/about_heroo.jpg"
                  alt="Hector John Workspace"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-3 left-4 right-4 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
                        Currently working on
                      </p>
                      <p className="text-sm font-semibold">
                        <a 
                    href="https://kheem.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" text-foreground hover:text-primary transition-colors mx-1"
                    style={{ textDecoration: 'none' }}
                  >
                    Kheem Technologies
                  </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & BACKGROUND */}
      <section className="py-12 md:py-20 bg-secondary/5 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="space-y-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground italic underline decoration-primary/40 underline-offset-8">
                The Philosophy.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I didn't start in front of a screen. I started with aircraft 
                blueprints, mechanical systems, and environments where precision 
                isn't optional. Studying 
                <span className="text-foreground font-semibold">
                  {" "}
                  Aeronautical Engineering{" "}
                </span>
                taught me how to think before I wrote my first line of code. 
                That mindset never left.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  When I moved into software, I noticed the parallels immediately. 
                  A well-built system works like a well-built machine — predictable, 
                  resilient, and easy to maintain. That's what I aim for every time.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I don't overcomplicate things. I figure out what actually needs 
                  to be built, then build it properly. No wasted motion, no unnecessary 
                  complexity.
                </p>
              </div>

              <div className="relative h-75 rounded-xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt="Detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>

            {/* Personal Section - Who I Am */}
            <div className="space-y-8 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    Outside the Terminal
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not building software, you'll probably find me near 
                    aircraft — it's a lingering fascination from my engineering 
                    days. I also box to clear my head, swim to reset, and game 
                    when I need to turn my brain off completely. These aren't 
                    productivity hacks. They're just things I enjoy.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full">
                      <Plane size={14} /> Aircrafts
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full">
                      <Target size={14} /> Boxing
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full">
                      <Droplet size={14} /> Swimming
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full">
                      <Gamepad2 size={14} /> Gaming
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    How I Work
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm structured but flexible. I like clarity — clear requirements, 
                    realistic timelines, and honest communication. I don't guess. 
                    I ask questions, find the real problem, then build the solution. 
                    If something needs to change along the way, we adapt. No ego, 
                    just execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo break - subtle image gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <ProjectImage
                src="/engine.jpg"
                alt="Workspace"
                height={{ mobile: "h-[150px]", desktop: "md:h-[180px]" }}
                scrollable={false}
                className="rounded-xl"
              />
              <ProjectImage
                src="boxing.jpg"
                alt="Boxing"
                height={{ mobile: "h-[150px]", desktop: "md:h-[180px]" }}
                scrollable={false}
                className="rounded-xl"
              />
              <ProjectImage
                src="/blueprint.jpg"
                alt="Swimming"
                height={{ mobile: "h-[150px]", desktop: "md:h-[180px]" }}
                scrollable={false}
                className="rounded-xl"
              />
              <ProjectImage
                src="/gaming.avif"
                alt="Gaming"
                height={{ mobile: "h-[150px]", desktop: "md:h-[180px]" }}
                scrollable={false}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORK EXPERIENCE & EDUCATION SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 flex flex-col gap-1 border-l border-border/50 pl-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left group cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-secondary/80 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-secondary/40"}`}>
                      {tab.icon}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{tab.title}</span>
                  </div>
                  <ChevronRight size={14} className={`transition-all ${activeTab === tab.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
                </button>
              ))}

              {/* Technical Snapshot */}
              <div className="mt-4 pt-8 border-t border-border/50">
                <div className="flex flex-col items-start gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                    My Core Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[11px] rounded-md bg-secondary/30 border border-border/50 text-foreground/80 font-medium hover:bg-secondary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content Panel */}
            <div className="lg:col-span-8 min-h-[450px]">
              <AnimatePresence mode="wait">
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-8"
                  >
                    <div className="relative pl-6 border-l-2 border-primary/20">
                      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                        <h4 className="font-bold text-lg text-foreground">Frontend Developer</h4>
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">Aug 2025 - Dec 2025</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3 italic">Chacha Technologies</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Led the frontend redesign of Mahanaim College's website, improving usability across 5 user journeys.</li>
                        <li>• Integrated WordPress CMS for dynamic content management, increasing online enrollments by 12%.</li>
                        <li>• Architected scalable frontend infrastructure achieving 95+ PageSpeed scores.</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-primary/20">
                      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                        <h4 className="font-bold text-lg text-foreground">Full-Stack Software Engineer</h4>
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">Apr 2024 - Present</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3 italic">Freelance</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Built and delivered full-stack applications for clients across e-commerce, ed-tech, and healthcare.</li>
                        <li>• Integrated payment systems including M-Pesa, Stripe, and PayPal for seamless transactions.</li>
                        <li>• Developed custom solutions ranging from employee management systems to AI-powered platforms.</li>
                        <li>• Worked with businesses from barbershops to hotels — each with unique needs and constraints.</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-primary/20">
                      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                        <h4 className="font-bold text-lg text-foreground">UI/UX Designer & Educator</h4>
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">Sept 2024 - Dec 2025</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3 italic">IYF Academy</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Conducted programming and UI/UX lessons for 60+ students, achieving an 85% course completion rate.</li>
                        <li>• Revamped the academy's learning interfaces, increasing student engagement metrics by 50%.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Academic History</h4>
                      <div className="p-4 rounded-xl border border-border/50 bg-secondary/10">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h5 className="font-bold text-sm text-foreground">Diploma in Aeronautical Engineering</h5>
                          <span className="text-[10px] text-muted-foreground">2019 - 2022</span>
                        </div>
                        <p className="text-xs text-primary mt-1">Skypath Aviation College</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Certifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                          <Award className="text-primary w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-bold text-foreground leading-none">IBM Full Stack Software Development</p>
                            <p className="text-[9px] text-muted-foreground mt-1">Coursera • 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                          <Award className="text-primary w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-bold text-foreground leading-none">UI/UX Design Certificate</p>
                            <p className="text-[9px] text-muted-foreground mt-1">IYF Weekend Academy • 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                          <Award className="text-primary w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-bold text-foreground leading-none">Programming Certificate</p>
                            <p className="text-[9px] text-muted-foreground mt-1">IYF Weekend Academy • 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                          <Award className="text-primary w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-bold text-foreground leading-none">Advanced JavaScript & React</p>
                            <p className="text-[9px] text-muted-foreground mt-1">Meta • 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTACard contactHref="mailto:hakheem.dev@gmail.com" />
    </div>
  );
}

