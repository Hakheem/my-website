"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  ShoppingBag,
  CreditCard,
  Filter,
  Package,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import CTACard from '@/components/general/CTACard';
import { ProjectImage } from '@/components/general/ProjectImage';

const FEATURES = [
  {
    icon: Filter,
    title: "Dynamic Product Filtering",
    description:
      "Real-time filtering by category, size, color, and price range, all handled client-side with Redux for zero loading states and instant product discovery.",
  },
  {
    icon: RefreshCw,
    title: "Redux State Management",
    description:
      "Centralized cart and product state using Redux Toolkit, ensuring consistent behavior across the shopping journey, from product selection to checkout.",
  },
  {
    icon: CreditCard,
    title: "M-Pesa STK Push Checkout",
    description:
      "Integrated Safaricom Daraja API for seamless mobile money payments. Customers pay directly via phone, no card details, no friction, no abandoned carts.",
  },
  {
    icon: Package,
    title: "Product Variation System",
    description:
      "Handles complex SKU logic, sizes, colors, and stock per variation, with intelligent out-of-stock handling and variant-specific pricing.",
  },
  {
    icon: LayoutDashboard,
    title: "Merchant Admin Dashboard",
    description:
      "A full backend dashboard for managing inventory, processing orders, updating product listings, and monitoring sales, built for the business owner to operate independently.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Auth System",
    description:
      "JWT-based authentication for customers, with separate admin auth roles, protected routes, and persistent sessions.",
  },
];

const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Redux Toolkit", category: "State" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "M-Pesa, Paypal", category: "Payments" },
  { name: "Render", category: "Deployment" },
];

const SCREENSHOTS = [
  { src: "/eastside_home.png", label: "Homepage" },
  { src: "/eastside_shop.png", label: "Product Grid" },
  { src: "/eastside_product.png", label: "Product Detail" },
  { src: "/eastside_cart.png", label: "Checkout Flow" },
];

export default function EastSideUrbanCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      {/* ── BACK NAV ── */}
      <div className="fixed top-6 left-4 md:left-8 z-50 max-w-7xl px-3 md:px-6 ">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 mb-6">
            <ShoppingBag size={13} className="text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
              E-Commerce · Full-Stack · Personal Brand
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            East Side<br />
            <span className="text-muted-foreground">Urban Wear</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            A production-grade streetwear e-commerce platform, built for a real business, 
            with valid inventory, M-Pesa payments, and a full merchant dashboard.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["React", "Node.js", "MongoDB", "Redux", "M-Pesa API"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-3 py-1.5 bg-secondary/50 border border-border rounded-full font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://east-side-urban-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            View Live Store <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <ProjectImage
            src="/eastside_home.png"
            alt="East Side Urban storefront"
            height={{ mobile: "h-[250px]", desktop: "md:h-[400px]" }}
          />
        </motion.div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "200+", label: "Products / SKUs" },
              { value: "M-Pesa", label: "Payment Method" },
              { value: "Full-Stack", label: "Architecture" },
              { value: "Live", label: "Platform Status" },
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

      {/* ── CONTENT ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { label: "My Role", value: "Solo Full-Stack Developer" },
            { label: "Project Type", value: "Apparels Store — East Side Street Wear" },
            { label: "Status", value: "Live & In Operation" },
          ].map((item) => (
            <div key={item.label} className="border border-border rounded-xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                {item.label}
              </p>
              <p className="text-base font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
              01 / The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              A real brand needed a real platform — not a template.
            </h2>
          </div>
          <div className="space-y-5 pt-2 md:pt-10">
            <p className="text-muted-foreground leading-relaxed">
              East Side Street Wear is a real brand with real product inventory: clothes, shoes, 
              and accessories. Off-the-shelf e-commerce solutions either charged recurring fees, 
              lacked M-Pesa support, or couldn&apos;t handle the complexity of product variations at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The challenge was building a full-stack platform that could handle complex SKUs 
              (multiple sizes, colors, stock per variant), integrate natively with M-Pesa, and 
              give the business owner a dashboard to manage everything independently.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              The result needed to feel like a premium shopping destination, fast, clean, 
              and culturally aligned with streetwear aesthetics.
            </p>
          </div>
        </div>

        {/* Screenshots grid */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            02 / The Platform
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            Built for browsing, optimized for buying.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCREENSHOTS.map((shot) => (
              <ProjectImage
                key={shot.label}
                src={shot.src}
                alt={shot.label}
                label={shot.label}
                labelPosition="bottom-left"
                height={{ mobile: "h-[250px]", desktop: "md:h-[400px]" }}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            03 / Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
            Every feature serves the buyer or the business.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            04 / Tech Stack
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            The full MERN stack 
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="border border-border rounded-xl p-5 hover:bg-secondary/30 transition-colors"
              >
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                  {tech.category}
                </p>
                <p className="font-semibold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            05 / Key Insight
          </span>
          <blockquote className="border-l-4 border-primary pl-8 py-4 mb-8">
            <p className="text-2xl md:text-3xl font-bold italic leading-snug">
              &quot;The difference between a template store and a real platform is the back end. Anyone 
              can style a product card — not everyone can handle payment confirmations, inventory sync, 
              and admin control in the same system.&quot;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Building East Side Urban end-to-end, from the product database schema to the STK push 
            confirmation webhook to the admin dashboard UI, required thinking like a product engineer, 
            not just a front-end developer. Every technical decision was made with the business owner 
            in mind: what do they need to operate this independently, without calling a developer every time?
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="pb-20">
        <CTACard contactHref="/contact" />
      </div>
    </div>
  );
}

