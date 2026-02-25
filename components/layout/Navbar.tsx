"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "navbar-glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform flex-shrink-0">
            <Image src="/logo.svg" alt="Myno Notes Logo" width={40} height={40} className="w-full h-full" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Myno
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#download"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
          >
            Download
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-surface-dark dark:text-gray-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <span className="material-icons-round">light_mode</span>
              ) : (
                <span className="material-icons-round">dark_mode</span>
              )}
            </button>
          )}

          {/* CTA Button */}
          <Link
            href="#download"
            className="hidden md:block px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}
