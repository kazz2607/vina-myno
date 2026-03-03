"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative z-10 flex-grow pt-28 pb-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-secondary text-sm font-semibold border border-orange-200 dark:border-orange-800"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            v4.7.0 is now available
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1]"
          >
            Capture Your <br />
            <span className="gradient-text">Thoughts,</span> <br />
            Anywhere.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            A beautifully minimalist workspace designed for focus. Seamlessly
            write, organize, and sync across your Windows, macOS, and Linux
            devices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="#download" className="btn-primary text-lg">
              <span className="material-icons-round">download</span>
              Download for Free
            </Link>
            <Link href="#features" className="btn-secondary text-lg">
              <span className="material-icons-round">play_circle_outline</span>
              See Features
            </Link>
          </motion.div>

          {/* Platform Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500"
          >
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-lg">
                check_circle
              </span>
              macOS
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-lg">
                check_circle
              </span>
              Windows
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-lg">
                check_circle
              </span>
              iPhone & Android (Coming Soon)
            </div>
          </motion.div>
        </div>

        {/* Right: App Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center"
        >
          {/* Glow background - dùng blur nhỏ hơn để nhẹ GPU */}
          <div className="absolute inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full opacity-50 dark:opacity-30" />

          {/* App window */}
          <motion.div
            initial={{ rotate: -1 }}
            className="relative w-full h-full max-h-[500px] glass-panel rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Title bar */}
            <div className="h-10 border-b border-gray-200/50 dark:border-gray-700/50 flex items-center px-4 space-x-2 bg-gray-50/50 dark:bg-gray-900/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 dark:text-gray-600 font-medium">
                Myno Notes
              </span>
            </div>

            {/* App content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-56 bg-gray-50/80 dark:bg-surface-dark border-r border-gray-200/50 dark:border-gray-700/50 flex flex-col p-4 space-y-6">
                <div className="space-y-1">
                  <div className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold flex items-center gap-2">
                    <span className="material-icons-round text-base">inbox</span>
                    Inbox
                  </div>
                  <div className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer">
                    <span className="material-icons-round text-base">star_border</span>
                    Favorites
                  </div>
                  <div className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer">
                    <span className="material-icons-round text-base">schedule</span>
                    Recent
                  </div>
                </div>
                <div>
                  <h3 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Projects
                  </h3>
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      Marketing Plan
                    </div>
                    <div className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      Ideas 2025
                    </div>
                    <div className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Work Tasks
                    </div>
                  </div>
                </div>
              </div>

              {/* Editor */}
              <div className="flex-1 bg-white/80 dark:bg-[#1E1E1E] p-8 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Product Launch Strategy
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <p>The goal for Q1 is to simplify the user onboarding experience. We need to focus on:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Reducing friction during signup.</li>
                    <li>Improving the empty state illustration.</li>
                    <li>Providing better tooltips for new features.</li>
                  </ul>
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 mt-4">
                    <p className="text-xs font-mono text-primary">
                      TODO: Schedule team meeting for Friday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
