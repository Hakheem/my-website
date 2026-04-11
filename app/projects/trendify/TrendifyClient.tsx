"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowLeft,
    Smartphone,
    Layers,
    MousePointerClick,
    Palette,
    Navigation,
    Package,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import CTACard from '@/components/general/CTACard';

const MOCKUP_SCREENS = [
    { src: "/trendify-home.png", label: "Home Screen" },
    { src: "/product screen.png", label: "Products Screen" },
    { src: "/single category.png", label: "Single Category" },
    { src: "/checkout details.png", label: "Checkout Details" },
    { src: "/notification screen.png", label: "Notifications" },
    { src: "/profile screen.png", label: "Profile" },
];

const DESIGN_DECISIONS = [
    {
        icon: Palette,
        title: "Dark-First Brand Identity",
        description:
            "Sneaker culture is inherently premium and street-coded. A dark theme with sharp accent colors reflects this, while keeping the UI feeling clean and contemporary â€” not grungy.",
    },
    {
        icon: Navigation,
        title: "Bottom Navigation Architecture",
        description:
            "All primary actions live within thumb reach. The navigation was designed for one-handed use â€” the dominant interaction pattern for mobile commerce in East Africa.",
    },
    {
        icon: MousePointerClick,
        title: "Micro-Interaction Led UX (ProtoPie)",
        description:
            "Every tap, swipe, and transition was prototyped with ProtoPie â€” realistic momentum scrolling, spring animations, and haptic-like feedback states.",
    },
    {
        icon: Package,
        title: "Delivery-First User Flow",
        description:
            "The product detail screen leads directly into a delivery booking flow â€” not a generic cart. The buyer knows exactly when their sneakers arrive before they confirm.",
    },
    {
        icon: Layers,
        title: "Component System in Figma",
        description:
            "Built with a structured component library â€” buttons, cards, tags, and inputs are all reusable components with defined variants, ready for developer handoff.",
    },
    {
        icon: Smartphone,
        title: "Designed for Android & iOS",
        description:
            "Frames designed at standard mobile resolutions with platform-appropriate patterns â€” respecting Android and iOS conventions while maintaining a unified brand language.",
    },
];

const DESIGN_PROCESS = [
    {
        phase: "01",
        title: "Research & Positioning",
        description: "Studied how sneaker buyers in Nairobi discover and purchase â€” Instagram DMs, WhatsApp orders, physical markets. The gap was clear: no dedicated, trustworthy mobile-first experience."
    },
    {
        phase: "02",
        title: "User Flow Mapping",
        description: "Mapped the core buyer journey: discover â†’ inspect â†’ select size â†’ checkout â†’ track delivery. Every screen corresponds to one step in this flow with no dead ends."
    },
    {
        phase: "03",
        title: "Brand Identity Design",
        description: "Created the Trendify visual identity â€” wordmark, color palette, icon system, and typography. Wanted a brand that could sit next to Nike.com and not look out of place."
    },
    {
        phase: "04",
        title: "Figma UI Design",
        description: "Built the full screen set in Figma â€” Home, Category, Product Detail, Cart, Checkout, Order Tracking, and Profile. All with auto-layout and defined constraints."
    },
    {
        phase: "05",
        title: "ProtoPie Prototyping",
        description: "Brought the design to life with advanced interactions in ProtoPie â€” swipe gestures, transition physics, and micro-animations that make the prototype feel like a real app."
    },
];

export default function TrendifyClient() {
    const [activeScreen, setActiveScreen] = useState(0);

    const prev = () =>
        setActiveScreen((s) => (s === 0 ? MOCKUP_SCREENS.length - 1 : s - 1));
    const next = () =>
        setActiveScreen((s) => (s === MOCKUP_SCREENS.length - 1 ? 0 : s + 1));

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <div className="fixed top-6 left-4 md:left-8 z-50 max-w-7xl px-3 md:px-6 ">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
                >
                    <ArrowLeft size={14} />
                    All Projects
                </Link>
            </div>

            <section className="pt-28 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 mb-6">
                            <Smartphone size={13} className="text-primary" />
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                                Mobile UI/UX Design Â· Figma Â· ProtoPie
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
                            Trendify<br />
                            <span className="text-muted-foreground">Sneaker Delivery</span>
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            A high-fidelity mobile app design for sneaker culture in East Africa â€”
                            from brand identity to prototype-ready screen flows with advanced
                            micro-interactions.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {["Figma", "ProtoPie", "UI/UX Design", "Mobile Design", "Prototyping"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] px-3 py-1.5 bg-secondary/50 border border-border rounded-full font-medium uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary/30 text-sm">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            <span className="text-muted-foreground">Design Complete Â· Development Phase Next</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-[260px] h-[520px]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeScreen}
                                    src={MOCKUP_SCREENS[activeScreen].src}
                                    alt={MOCKUP_SCREENS[activeScreen].label}
                                    className="w-full h-full object-contain drop-shadow-xl"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={prev}
                            className="absolute left-0 p-2.5 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all hover:border-primary"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 p-2.5 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all hover:border-primary"
                        >
                            <ChevronRight size={18} />
                        </button>

                        <div className="absolute -bottom-8 flex gap-2">
                            {MOCKUP_SCREENS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveScreen(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === activeScreen ? "bg-primary w-6" : "bg-border"}`}
                                />
                            ))}
                        </div>

                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-xs text-muted-foreground font-medium">
                                {MOCKUP_SCREENS[activeScreen].label}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 border-y border-border mt-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
                        {[
                            { value: "Design", label: "Project Phase" },
                            { value: "Figma", label: "Primary Tool" },
                            { value: "Mobile", label: "Platform" },
                            { value: "Nairobi", label: "Target Market" },
                        ].map((m) => (
                            <div key={m.label} className="bg-background p-8 text-center">
                                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{m.value}</p>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { label: "My Role", value: "Product Designer" },
                        { label: "Tools", value: "Figma Â· ProtoPie" },
                        { label: "Status", value: "Design Complete Â· Open to Build" },
                    ].map((item) => (
                        <div key={item.label} className="border border-border rounded-xl p-6">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                                {item.label}
                            </p>
                            <p className="text-base font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
                            01 / The Opportunity
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
                            Sneaker culture in East Africa deserves its own platform.
                        </h2>
                    </div>
                    <div className="space-y-5 pt-2 md:pt-10">
                        <p className="text-muted-foreground leading-relaxed">
                            The sneaker market in Nairobi is real and growing, but it lives entirely on
                            Instagram DMs, WhatsApp broadcast lists, and physical markets like Gikomba.
                            There&apos;s no dedicated digital experience that matches the culture.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Generic e-commerce apps don&apos;t speak this language â€” they&apos;re built for mass retail,
                            not for a buyer who knows the difference between a Jordan 1 Mid and a High, and
                            wants to know the exact delivery window before they commit.
                        </p>
                        <p className="text-foreground font-medium leading-relaxed">
                            Trendify is the design answer to that gap â€” a mobile experience built entirely
                            around the sneaker buyer&apos;s mental model, from discovery to doorstep.
                        </p>
                    </div>
                </div>

                <div className="mb-24">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
                        02 / Design Process
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight mb-10">
                        Five phases. One cohesive product.
                    </h2>
                    <div className="space-y-4">
                        {DESIGN_PROCESS.map((phase) => (
                            <div
                                key={phase.phase}
                                className="flex flex-col md:flex-row gap-4 md:gap-8 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                            >
                                <div className="flex items-center gap-4 md:gap-0 md:block md:w-20 shrink-0">
                                    <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                                        {phase.phase}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
                        03 / Design Decisions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
                        Every choice was intentional.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DESIGN_DECISIONS.map((d) => {
                            const Icon = d.icon;
                            return (
                                <div
                                    key={d.title}
                                    className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon size={18} className="text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-sm">{d.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{d.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
                        04 / What This Project Shows
                    </span>
                    <blockquote className="border-l-4 border-primary pl-8 py-4 mb-8">
                        <p className="text-2xl md:text-3xl font-bold italic leading-snug">
                            &quot;Design is strategy made visible. Trendify isn&apos;t just a pretty UI â€” it&apos;s a
                            documented product strategy for a real market gap.&quot;
                        </p>
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                        Most mobile UI projects stop at aesthetics. Trendify goes deeper â€” every screen
                        decision is backed by a user flow rationale, every component choice reflects a
                        real interaction pattern. The goal wasn&apos;t to make something that looks good in a
                        portfolio scroll â€” it was to build something a development team could pick up and
                        ship with minimal back-and-forth.
                    </p>
                    <div className="inline-flex items-center gap-3 px-5 py-3 border border-primary/30 rounded-xl bg-primary/5 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-medium">Figma link available on request</span>
                    </div>
                </div>
            </section>

            <div className="pb-20">
                <CTACard contactHref="/contact" />
            </div>
        </div>
    );
}
