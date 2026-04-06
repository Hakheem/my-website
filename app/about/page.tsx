"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import CTACard from "@/components/general/CTACard";

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
                  Focused on building robust frontend architectures and seamless
                  user interfaces. I bridge the gap between complex engineering
                  logic and intuitive design.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {[
                    {
                      icon: <Github size={20} />,
                      href: "https://github.com/Hakheem",
                    },
                    {
                      icon: <Linkedin size={20} />,
                      href: "https://linkedin.com/in/hector-john",
                    },
                    {
                      icon: <FaWhatsapp size={20} />,
                      href: "https://wa.me/254769403162",
                    },
                    {
                      icon: <Mail size={20} />,
                      href: "mailto:hakheem.dev@gmail.com",
                    },
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground italic underline decoration-primary/40 underline-offset-8">
                The Philosophy.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                My journey didn’t start in front of a terminal. It began with
                technical blueprints, mechanical systems, and environments where
                failure wasn’t an option. Studying
                <span className="text-foreground font-semibold">
                  {" "}
                  Aeronautical Engineering{" "}
                </span>
                shaped how I think long before I wrote production code.
                Precision wasn’t a preference; it was a requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                When I transitioned into software development, the parallels
                were immediate. A well-designed system behaves like a
                well-tuned machine — predictable under load, resilient under
                stress, and understandable by those who maintain it.
              </p>

              <div className="relative h-[300px] rounded-xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt="Detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTACard contactHref="mailto:hakheem.dev@gmail.com" />
    </div>
  );
}

