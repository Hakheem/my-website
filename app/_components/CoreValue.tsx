"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
    Palette,
    ShoppingCart,
    Layout,
    Zap,
    Users,
    Send, 
} from "lucide-react";

const techStack = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Javascript",
    "Python",
    "Tailwind CSS",
    "SCSS",
    "Node.js",
    "MongoDB",
    "Sanity CMS",
    "Wordpress",
    "PostgreSQL",
    "Figma",
    "Adobe XD ",
    "AI",
    "Git/CI/CD",
    "Better-Auth",
];

export default function CoreValue() {
    const [chatStep, setChatStep] = useState(0);

    // Loops the chat sequence: User -> Reply -> Reset
    useEffect(() => {
        const timer = setInterval(() => {
            setChatStep((prev) => (prev < 2 ? prev + 1 : 0));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-24 lg:mt-4 bg-background">
            <div className="padded mx-auto ">

                {/* INTRO */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-16 lg:mb-20 items-start">

                    {/* LEFT: INTRO */}
                    <div>
                        <p className="text-primary font-medium italic tracking-tight text-lg mb-2">
                            Hi there, I'm
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight tracking-tighter text-foreground">
                            Hector John
                        </h2>

                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            I build web applications that work smoothly, look great, and solve
                            real problems for real people.
                        </p>
                    </div>

                    {/* RIGHT: VALUE PROPOSITIONS */}
                    <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                        <p>
                            I help <strong>individuals, teams, and businesses</strong> turn ideas into functional, scalable digital products. By focusing on clean code and performance, I solve technical problems with simple solutions that are easy to maintain and built to scale. Whether it's an e-commerce platform, a landing page, or a SaaS dashboard, I deliver high-performance
                            results that meet both user and business needs.
                        </p>
                    </div>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* UI / UX CARD */}
                    <div className="h-full">
                        <Card className="h-full p-6 flex flex-col bg-card border-border hover:border-primary/30 transition-all">
                            <div className="flex flex-col space-y-6 grow">
                                <div className="flex gap-3 items-center">
                                    <div className="p-2 rounded-xl bg-primary/10">
                                        <Palette className="text-primary w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-semibold text-foreground">
                                        Design That Converts
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    User interfaces backed by research and testing. Not just
                                    pretty—proven to reduce friction, increase engagement, and
                                    drive conversions.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "User behavior analysis",
                                        "Conversion-optimized flows",
                                        "Responsive design and layouts",
                                        "Accessibility compliance",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-muted-foreground text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CHAT UI */}
                            <div className="mt-0 bg-secondary/30 rounded-xl p-4 border border-border">
                                <div className="flex flex-col space-y-3 mb-4 h-24 justify-end">
                                    {/* FIRST MESSAGE */}
                                    <AnimatePresence>
                                        {chatStep >= 1 && (
                                            <motion.div
                                                key="user-msg"
                                                initial={{ opacity: 0, y: 5, x: -10 }}
                                                animate={{ opacity: 1, y: 0, x: 0 }}
                                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                                className="self-start bg-muted rounded-2xl rounded-bl-none px-3 py-2 max-w-[85%]"
                                            >
                                                <p className="text-muted-foreground text-xs">
                                                    Users are leaving without converting,
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* SECOND MESSAGE */}
                                    <AnimatePresence>
                                        {chatStep >= 2 && (
                                            <motion.div
                                                key="reply-msg"
                                                initial={{ opacity: 0, y: 5, x: 10 }}
                                                animate={{ opacity: 1, y: 0, x: 0 }}
                                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                                className="self-end bg-primary/20 rounded-2xl rounded-br-none px-3 py-2 max-w-[80%]"
                                            >
                                                <p className="text-primary text-xs font-medium">
                                                    Let's fix that flow.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="relative flex items-center">
                                    <div className="w-full h-9 rounded-lg bg-background border border-border px-3 flex items-center text-xs text-muted-foreground/50">
                                        Describe your project...
                                    </div>
                                    <div className="absolute right-2 text-primary">
                                        <Send size={14} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* E-COMMERCE */}
                        <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all flex flex-col">
                            <div className="flex gap-3 items-center mb-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <ShoppingCart className="text-primary w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    E-Commerce Platforms
                                </h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Stop losing revenue to cart abandonment and slow checkouts. I
                                build shopping experiences that convert browsers into buyers.
                            </p>

                            {/* Visual section */}
                            <div className="relative h-40 mt-auto overflow-hidden rounded-lg bg-secondary/40 border border-border/50 p-3">
                                {/* Product cards */}
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-3 left-3 w-16 h-20 bg-card border border-border rounded-lg shadow-lg p-1.5"
                                >
                                    <div className="w-full h-10 bg-muted rounded mb-1"></div>
                                    <div className="h-2 bg-muted/50 rounded mb-1"></div>
                                    <div className="h-1.5 bg-muted/50 rounded w-2/3"></div>
                                </motion.div>

                                <motion.div
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 left-10 w-16 h-20 bg-card border border-primary/20 rounded-lg shadow-lg p-1.5 z-10"
                                >
                                    <div className="w-full h-10 bg-primary/10 rounded mb-1"></div>
                                    <div className="h-2 bg-muted/50 rounded mb-1"></div>
                                    <div className="h-1.5 bg-muted/50 rounded w-2/3"></div>
                                </motion.div>

                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-3 right-3 w-16 h-20 bg-card border border-border rounded-lg shadow-lg p-1.5"
                                >
                                    <div className="w-full h-10 bg-muted rounded mb-1"></div>
                                    <div className="h-2 bg-muted/50 rounded mb-1"></div>
                                    <div className="h-1.5 bg-muted/50 rounded w-2/3"></div>
                                </motion.div>

                                {/* Shopping */}
                                <motion.div
                                    animate={{ x: [-20, 20, -20], y: [0, -5, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 size-8 bg-primary/10 rounded-full flex items-center justify-center z-20"
                                >
                                    <ShoppingCart className="text-primary size-4" />
                                </motion.div>
                            </div>
                        </Card>


                        {/* ARCHITECTURE */}
                        <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all flex flex-col">
                            <div className="flex gap-3 items-center mb-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Layout className="text-primary w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    Scalable Architecture
                                </h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Tailored solutions built to your specific needs. Architecture that's easy to maintain.
                            </p>

                            <div className="relative h-40 mt-auto overflow-hidden rounded-lg bg-secondary/40 border border-border/50 p-4">
                                {/* Status Dots */}
                                <div className="flex items-center gap-1 mb-2">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                                            className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-red-600/80' :
                                                    i === 2 ? 'bg-amber-600/80' :
                                                        'bg-primary/80'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="grid grid-cols-12 gap-1">
                                    <div className="col-span-12 h-2 bg-muted rounded opacity-50 mb-1" />

                                    {/* LEFT BLOCK: Direct Hex Animation */}
                                    <motion.div
                                        animate={{
                                            backgroundColor: ["#2D333D33", "#2D333D80", "#2D333D33"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="col-span-4 h-10 rounded"
                                    />

                                    {/* RIGHT BLOCK */}
                                    <div className="col-span-8 h-10 bg-card border border-border rounded" />

                                    {/* BOTTOM LINES */}
                                    <div className="col-span-12 grid grid-cols-12 gap-1 mt-1">
                                        {[4, 4, 4].map((span, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{
                                                    duration: 1,
                                                    delay: idx * 0.2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3
                                                }}
                                                className="col-span-4 h-2 bg-muted rounded origin-left"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>


                        {/* PERFORMANCE */}
                        <Card className="p-5 bg-card border-border hover:border-primary/30 transition-all">
                            <div className="flex gap-3 items-center mb-2">
                                <Zap className="text-primary w-4 h-4" />
                                <h3 className="font-semibold text-foreground">
                                    Performance Driven
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Fast load times and smooth interactions optimized for
                                real-world conditions and devices.
                            </p>
                        </Card>

                        {/* UX */}
                        <Card className="p-5 bg-card border-border hover:border-primary/30 transition-all">
                            <div className="flex gap-3 items-center mb-2">
                                <Users className="text-primary w-4 h-4" />
                                <h3 className="font-semibold text-foreground">
                                    User-Tested Interfaces
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Every interaction is tested by real users, refined, and optimized for conversion.
                            </p>
                        </Card>

                    </div>
                </div>

                {/* TECH STACK */}
                <div className=" mt-16 pt-10 border-t border-border/50">
                    <div className="flex flex-col md:flex-row  gap-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                            What I Work With
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs rounded-md bg-secondary/30 border border-border/50 text-foreground/80 font-medium hover:bg-secondary/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}

