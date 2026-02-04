"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Rocket, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Separator } from "@/components/ui/separator";
import CTACard from '@/components/general/CTACard';

export default function AboutPage() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto selection:bg-primary/30">

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
                                        Software Engineer / UI Architect
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

                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    Focused on building robust frontend architectures and seamless user interfaces. I bridge the gap between complex engineering logic and intuitive design.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-4">
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
                                                Current Commitment
                                            </p>
                                            <p className="text-sm font-semibold">
                                                Redefining BaraBara Voyagers
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. PHILOSOPHY */}
            <section className="py-12 md:py-20 bg-secondary/5 border-y border-border">
                <div className="max-w-5xl mx-auto px-4 md:px-6">
                    <div className="space-y-20">

                        {/* INTRO */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground italic underline decoration-primary/40 underline-offset-8">
                                The Philosophy.
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                My journey didn’t start in front of a terminal. It began with technical blueprints,
                                mechanical systems, and environments where failure wasn’t an option. Studying
                                <span className="text-foreground font-semibold"> Aeronautical Engineering </span>
                                shaped how I think long before I wrote production code. Precision wasn’t a preference;
                                it was a requirement.
                            </p>
                        </div>

                        {/* BLOCK 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                When I transitioned into software development, the parallels were immediate.
                                A well-designed system behaves like a well-tuned machine — predictable under load,
                                resilient under stress, and understandable by those who maintain it. Frontend
                                engineering drew me in because it sits where structure meets human behavior.
                            </p>

                            <div className="relative h-[300px] rounded-xl overflow-hidden border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                                    alt="Detail"
                                />
                            </div>
                        </div>

                        {/* BLOCK 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[300px] rounded-xl overflow-hidden border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                                    alt="Focus"
                                />
                            </div>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                I don’t believe in building just to ship fast. I believe in building things
                                that still make sense months later. That means slowing down when clarity
                                is missing, asking better questions early, and designing systems that
                                survive change — not collapse under it.
                            </p>
                        </div>

                        {/* FINAL GRID (NO IMAGE) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Much of my work today revolves around frontend architecture — stability,
                                accessibility, and performance as non-negotiables. Not because it sounds
                                impressive, but because it reduces friction for users and prevents costly
                                rework for teams later on.
                            </p>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Where I thrive most is bridging the gap between strategy and execution.
                                Turning abstract ideas into structured systems. Turning complexity into
                                calm. I aim to build digital products that earn trust through consistency
                                and care — tools that don’t just exist on the web, but quietly do their job
                                well over time.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. PROFESSIONAL RECORD */} <section className="pt-12 md:py-24 bg-background overflow-hidden "> <div className="max-w-7xl mx-auto px-4 md:px-6"> <div className="flex flex-col lg:flex-row gap-20"> {/* Left Column: Real Experience */} <div className="lg:w-2/3"> <div className="flex items-center gap-3 mb-12"> <div className="w-10 h-[1px] bg-primary" /> <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Work Experience</h3> </div> <div className="space-y-20"> 
                {[{ year: "2025", role: "Frontend Developer", company: "Chacha Technologies", desc: "Led the redesign of Mahanaim College website. Built a custom WordPress CMS integration that increased student enrollments by 12% and achieved a 95+ PageSpeed score.", tech: ["React", "Next.js", "WordPress", "TypeScript", "JavaScript"] }, { year: "2024 - 2025", role: "UI/UX Designer & Educator", company: "IYF Academy", desc: "Taught programming and UI/UX design to over 60 students. Achieved an 85% course completion rate and boosted student engagement by 50%.", tech: ["Figma", "UI/UX Design", "Prototyping", "UX Research"] }, { year: "2024 - Present", role: "Web Developer", company: "Freelance", desc: "Designed and developed custom websites for businesses, startups adn individual investors, ranging from landing pages, e-commerce, to saas applications and beyond. Integrated payment gateways and leveraged AI tools when needed to automate business tasks.", tech: ["React/Next.js", "Tailwind CSS", "MongoDB", "Postgresql", "M-Pesa", "Stripe", "AI"] }].map((item, i) => (<div key={i} className="relative group"> <span className="absolute -left-6 top-1 text-[10px] font-mono text-primary rotate-90 origin-left opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap"> {item.year} </span> <div className="space-y-4 border-l-2 border-border pl-8 group-hover:border-primary transition-colors"> <h4 className="text-3xl font-bold tracking-tight">{item.role}</h4> <p className="text-primary/80 font-semibold">{item.company}</p> <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{item.desc}</p> <div className="flex flex-wrap gap-2 pt-2"> {item.tech.map((tag, j) => (<span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"> {tag} </span>))} </div> </div> </div>))} </div> </div> {/* Right Column: Original Education & Skills */} <div className="lg:w-1/3"> <div className="sticky top-32 space-y-16"> <div> <div className="flex items-center gap-3 mb-8 sticky top-32"> <div className="w-10 h-[1px] bg-primary" /> <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Education</h3> </div> <div className="space-y-8"> <div className="group"> <p className="text-[10px] font-mono text-primary mb-1">2025</p> <h5 className="font-bold text-lg leading-snug group-hover:text-primary transition-all">IBM Full Stack Software Development</h5> <p className="text-sm text-muted-foreground italic">Coursera / IBM</p> </div> <div className="group"> <p className="text-[10px] font-mono text-primary mb-1">2024</p> <h5 className="font-bold text-lg leading-snug group-hover:text-primary transition-all">UI/UX Design</h5> <p className="text-sm text-muted-foreground italic">IYF Weekend Academy</p> </div> <div className="group"> <p className="text-[10px] font-mono text-primary mb-1">2023</p> <h5 className="font-bold text-lg leading-snug group-hover:text-primary transition-all">Frontend Web Development</h5> <p className="text-sm text-muted-foreground italic">IYF Weekend Academy</p> </div> <div className="group"> <p className="text-[10px] font-mono text-primary mb-1">2019 — 2022</p> <h5 className="font-bold text-lg leading-snug group-hover:text-primary transition-all">Diploma in Aeronautical Engineering</h5> <p className="text-sm text-muted-foreground italic">Skypath Aviation College</p> </div> </div> </div> <div className="p-8 bg-secondary/30 rounded-3xl border border-border"> <h5 className="text-xs font-black uppercase tracking-widest mb-6">Expertise</h5> <ul className="space-y-4"> {["Frontend Engineering", "UI/UX Design", "API Integration", "Resposive Design"].map((skill, i) => (<li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground"> <CheckCircle2 size={14} className="text-primary" /> {skill} </li>))} </ul> </div> </div> </div> </div> </div> </section>

            {/* CTA */} 
            <CTACard contactHref="mailto:hakheem.dev@gmail.com" />
        </div>
    );
}

 