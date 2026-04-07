"use client";

import React, { useState } from 'react';
import {
  User, Briefcase, GraduationCap, Award, MapPin,
  ChevronRight, Github, Linkedin, Mail, Dribbble
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const techStack = [
  'React/Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Figma', 'Git/CI/CD',
  'UI/UX Implementation', 'AI', 'API Integration'
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", title: "About Me", icon: <User size={16} /> },
    { id: "experience", title: "Work Experience", icon: <Briefcase size={16} /> },
    { id: "education", title: "Education & Certifications", icon: <GraduationCap size={16} /> },
  ];

  return (
    <section id='about' className="w-full py-12">
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {/* Header & Socials */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-md mb-6">
              <User className="w-3 h-3 text-foreground" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                A Little About Me
              </span>
            </div>
            <h2 className="text-4xl  font-bold leading-tight tracking-tighter">
              Hello there, I'm Hector John.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: "https://github.com/Hakheem" },
              { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/hector-john" },
              { icon: <FaWhatsapp size={16} />, href: "https://wa.me/254769403162" },
              { icon: <Mail size={16} />, href: "mailto:hakheem.dev@gmail.com" },
              { icon: <Dribbble size={16} />, href: "https://dribbble.com/Hakheem" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-1 border-l border-border/50 pl-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left group cursor-pointer ${activeTab === tab.id
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
              <div className="flex flex-col items-start  gap-4">
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
          <div className="lg:col-span-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                >
                  <p>
                    I’m a developer who prefers to understand the problem properly before jumping
                    into solutions. I ask questions early, look for patterns, and focus on what
                    actually needs to be built rather than blindly executing what’s requested.
                    That approach helps avoid wasted effort and leads to clearer, more effective outcomes.
                  </p>

                  <p>
                    I work best at the balance point between speed and care. I like moving fast,
                    but not at the cost of clarity or long-term reliability. People usually come to
                    me when they want things done cleanly, with attention to detail and fewer
                    surprises along the way, and that’s the standard I try to hold myself to on
                    every project.
                  </p>

                </motion.div>

              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                    <div className="flex justify-between items-start mb-1">
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
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg text-foreground">Web Developer</h4>
                      <span className="text-[10px] font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">Apr 2024 - Present</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-3 italic">Freelance</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Delivered custom web solutions for 10+ businesses including e-commerce platforms and booking systems.</li>
                      <li>• Built platforms processing 200+ SKUs with integrated payment gateways like M-Pesa and Pesapal.</li>
                      <li>• Engineered AI-powered SaaS solutions and automation, reducing manual tasks by 40%.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                    <div className="flex justify-between items-start mb-1">
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
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Academic History</h4>
                    <div className="p-4 rounded-xl border border-border/50 bg-secondary/10">
                      <div className="flex justify-between items-start">
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
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Technical Snapshot */}
        {/* <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
              Core Stack
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
        </div> */}
      </div>
    </section>
  );
}

