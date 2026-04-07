"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Sparkles, Send, CheckCircle2, ArrowRight,
  Globe, PhoneCall, Github, Instagram, Linkedin, 
  MessageSquare, LayoutDashboard, RefreshCw
} from 'lucide-react';
import { FaTiktok, FaWordpress } from 'react-icons/fa';

const TabBtn = ({ active, onClick, label, icon: Icon }: any) => (
  <button 
    type="button"
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 py-3 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${
      active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-secondary/50'
    }`}
  >
    <Icon size={14} /> {label}
  </button>
);

export default function ContactPage() {
  const [formType, setFormType] = useState<'quote' | 'message'>('quote');
  const [isCallback, setIsCallback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 max-w-7xl mx-auto px-4 md:px-6 ">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-black">Open for collaborations</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-10">
              Tell me about <br /> <span className="text-muted-foreground/40 italic font-light">the vision.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              From technical strategy to pixel-perfect implementation. Let&apos;s define the scope of your next breakthrough.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Direct Contact</p>
              <a href="mailto:hello@hectorjohn.com" className="text-lg font-medium hover:underline underline-offset-4 decoration-primary transition-all">hello@hectorjohn.com</a>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Location</p>
              <p className="text-lg font-medium">Nairobi, Kenya <span className="text-muted-foreground text-sm font-normal">— EAT</span></p>
            </div>
          </div>

          <div className="space-y-6 pt-4 border-t border-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Find me on</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-all group">
                <Linkedin size={20} />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-all group">
                <Github size={20} />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-all group">
                <Instagram size={20} />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-all group">
                <FaTiktok size={18} />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">TikTok</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="bg-secondary/10 border border-border rounded-2xl p-8 md:p-12 shadow-2xl shadow-primary/5">
            
            <div className="bg-secondary/40 border border-border p-1 rounded-xl flex mb-10">
              <TabBtn active={formType === 'quote'} onClick={() => {setFormType('quote'); setIsCallback(false);}} label="Project Quote" icon={LayoutDashboard} />
              <TabBtn active={formType === 'message'} onClick={() => {setFormType('message'); setIsCallback(false);}} label="General" icon={MessageSquare} />
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Your Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Email Address</label>
                      <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 px-4 bg-background/40 border border-dashed border-border rounded-xl">
                    <span className="text-xs font-medium flex items-center gap-2 opacity-70"><PhoneCall size={14} className="text-primary"/> Prefer a callback?</span>
                    <button type="button" onClick={() => setIsCallback(!isCallback)} className={`w-11 h-6 rounded-full transition-colors relative ${isCallback ? 'bg-primary' : 'bg-muted'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isCallback ? 'left-6' : 'left-1'}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {(formType === 'quote' || isCallback) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                        {isCallback ? (
                          <div className="col-span-2 space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Phone Number</label>
                            <input required type="tel" placeholder="+254 700 000 000" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all" />
                          </div>
                        ) : (
                          <>
                            <div className="space-y-2 relative">
                              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Project Scope</label>
                              <div className="relative group/select">
                                <select className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary appearance-none transition-all pr-12">
                                  <option>Website from Scratch</option>
                                  <option>Website Revamp</option>
                                  <option>UI/UX Redesign</option>
                                  <option>Mobile App Dev</option>
                                  <option>E-commerce Solution</option>
                                  <option>LMS / System Architecture</option>
                                  <option>Payment Integration</option>
                                  <option>Wordpress Website</option>
                                  <option>Technical Consulting</option>
                                </select>
                                <ArrowRight size={16} className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 opacity-40 pointer-events-none group-focus-within/select:text-primary transition-colors" />
                              </div>
                            </div>
                            <div className="space-y-2 relative">
                              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Budget Range</label>
                              <div className="relative group/select">
                                <select className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary appearance-none transition-all pr-12">
                                  <option>1,000 — 3,000 USD</option>
                                  <option>3,000 — 7,000 USD</option>
                                  <option>7,000 — 15,000 USD</option>
                                  <option>15,000+ USD</option>
                                </select>
                                <ArrowRight size={16} className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 opacity-40 pointer-events-none group-focus-within/select:text-primary transition-colors" />
                              </div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 ml-1">Message</label>
                    <textarea rows={4} placeholder="Describe your objectives..." className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all resize-none" />
                  </div>

                  <button 
                    disabled={isSubmitting} 
                    className="w-full bg-foreground text-background py-5 rounded-xl text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? "Encrypting Message..." : isCallback ? "Confirm Callback" : "Initialize Proposal"}
                    <Send size={16} />
                  </button>
                </motion.form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto border border-primary/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tighter">Transmission Sent.</h3>
                  <p className="text-muted-foreground text-sm max-w-70 mx-auto">I usually process inquiries within 24 hours. Stand by for a response.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 mx-auto">
                    <RefreshCw size={14} /> New Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


