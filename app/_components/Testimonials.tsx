"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Zap, CheckCircle2, Heart, Users } from 'lucide-react';

const testimonials = [
  {
    header: "Saved Our Enrollment Season",
    quote: "We were struggling with a clunky website that confused applicants. Hector completely rebuilt our college portal. Not only does it look amazing, but our online registrations actually went up by 12% in the first month.",
    client: "Director",
    company: "Mahanaim College",
    icon: <TrendingUp className="text-emerald-400" size={20} />,
    colSpan: "md:col-span-4",
    bg: "bg-emerald-500/5"
  },
  {
    header: "The Only Dev Who 'Gets' UX",
    quote: "Most developers just code, but Hector understands how people think. He revamped our dashboard and engagement doubled.",
    client: "Lead Coordinator",
    company: "IYF Academy",
    icon: <Heart className="text-pink-400" size={20} />,
    colSpan: "md:col-span-2",
    bg: "bg-pink-500/5"
  },
  {
    header: "Professional & Reliable",
    quote: "Built our e-commerce store from scratch. Integrated M-Pesa perfectly and made sure the site stays fast even with 200+ products.",
    client: "Owner",
    company: "East Side Urban",
    icon: <Zap className="text-amber-400" size={20} />,
    colSpan: "md:col-span-2",
    bg: "bg-amber-500/5"
  },
  {
    header: "Solved Our Scaling Issues",
    quote: "Our previous site crashed during peak hours. Hector built a custom system that handles 100+ users at once without a single lag. It's stable, secure, and exactly what we needed.",
    client: "Founder",
    company: "SkillBridge LMS",
    icon: <Users className="text-blue-400" size={20} />,
    colSpan: "md:col-span-4",
    bg: "bg-blue-500/5"
  },
  {
    header: "Business Game Changer",
    quote: "Hector helped us automate tasks that used to take us hours. He built an AI tool for our listings that cut our manual work in half. He doesn't just build sites; he fixes business problems.",
    client: "Manager",
    company: "EastRide Auto",
    icon: <CheckCircle2 className="text-purple-400" size={20} />,
    colSpan: "md:col-span-6",
    bg: "bg-purple-500/5"
  }
];

const marqueeWords = [
  "Sub-second load times.",
  "Highly precise UI.",
  "Seamless API integrations.",
  "Exceptional mobile UX.",
  "Resposive Designs.",
  "Clean, scalable code.",
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-background overflow-hidden">
     

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
           Words from <span className="text-primary italic">People I've Helped.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Real feedback from businesses and partners I've collaborated with to build high-performance digital solutions.
          </p>
        </div>

        {/* Stylish Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-[2.5rem] border border-border/50 ${item.bg} backdrop-blur-sm flex flex-col justify-between group overflow-hidden ${item.colSpan}`}
            >
              {/* Decorative Accent */}
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
                <Quote size={150} />
              </div>

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-background border border-border/50 text-primary shadow-sm">
                    {item.icon}
                  </div>
                  <Quote size={20} className="text-muted-foreground/20" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {item.header}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base relative z-10">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center font-bold text-xs text-primary border border-primary/20 shadow-inner">
                  {item.company.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-foreground">
                    {item.company}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {item.client}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Reverse) */}
      <div className="mt-16 flex select-none py-2">
        <motion.div 
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...marqueeWords, ...marqueeWords].map((text, i) => (
            <span key={i} className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-secondary/50 dark:text-primary/30 px-4">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </section>
  );
}

