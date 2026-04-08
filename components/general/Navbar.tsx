"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Helper function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    // For non-home routes, check if pathname starts with the nav path
    // This handles nested routes like /projects/east-ride, /contact/something, etc.
    return pathname.startsWith(path);
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-auto"
    >
      <div className="nav-wrapper p-px">
        <nav
          className="nav-track flex items-center gap-1 p-1 relative overflow-hidden"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {/* THE SPREAD STATE */}
          {hoveredPath === null && (
            <motion.div
              layoutId="hover-pill-logic"
              className="absolute inset-1 rounded-full bg-hover-collect z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          {navItems.map((item) => {
            const active = isActive(item.path);
            const isHovered = hoveredPath === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                className={`relative px-6 py-2 text-sm font-medium no-underline rounded-full nav-link ${
                  active ? "is-active" : ""
                }`}
              >
                {/* THE ACTIVE PILL */}
                {active && (
                  <motion.div
                    layoutId="active-pill-logic"
                    className="active-pill-matte absolute inset-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* THE COLLECT STATE */}
                {isHovered && (
                  <motion.div
                    layoutId="hover-pill-logic"
                    className="absolute inset-0 rounded-full bg-hover-collect z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <span className="relative z-30">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}

