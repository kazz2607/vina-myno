"use client";

import { motion } from "framer-motion";

export default function ThemesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold border border-purple-200 dark:border-purple-800">
              <span className="material-icons-round text-sm">palette</span>
              Personalization
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Beautiful Themes &<br />
              Dark Mode
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Myno adapts to your style and environment. Switch effortlessly
              between a crisp, clean light mode for productivity and a soothing
              dark mode for late-night sessions.
            </p>

            {/* Theme swatches */}
            <div className="flex items-center gap-6 pt-4">
              {[
                {
                  label: "Light",
                  bg: "bg-white",
                  border: "border-gray-200",
                  shadow: "shadow-sm",
                },
                {
                  label: "Dark",
                  bg: "bg-gray-900",
                  border: "border-gray-700",
                  shadow: "shadow-sm",
                },
                {
                  label: "OLED",
                  bg: "bg-black",
                  border: "border-gray-800",
                  shadow: "shadow-sm",
                },
              ].map((swatch) => (
                <div key={swatch.label} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-10 ${swatch.bg} border ${swatch.border} ${swatch.shadow} rounded-lg mb-2 hover:scale-105 transition-transform cursor-pointer`}
                  />
                  <span className="text-xs font-medium text-gray-500">
                    {swatch.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Features list */}
            <ul className="space-y-3 pt-2">
              {[
                "Automatic system theme detection",
                "True OLED black for mobile devices",
                "Custom accent color support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                >
                  <span className="material-icons-round text-primary text-base">
                    check
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Split preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-4 bg-gradient-to-r from-purple-500/15 to-primary/15 blur-2xl rounded-full opacity-50" />
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl flex border border-gray-200 dark:border-gray-700">
              {/* Light side */}
              <div className="w-1/2 h-[420px] bg-white p-6 relative">
                <div className="h-full border border-gray-100 rounded-xl bg-gray-50 p-4 space-y-3">
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  <div className="h-3 w-4/6 bg-gray-200 rounded" />
                  <div className="mt-4 h-20 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                    <span className="material-icons-round text-primary text-3xl">
                      edit_note
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded" />
                  <div className="h-3 w-3/4 bg-gray-100 rounded" />
                </div>
                <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-full p-2 border border-gray-100">
                  <span className="material-icons-round text-yellow-500">
                    light_mode
                  </span>
                </div>
              </div>

              {/* Dark side */}
              <div className="w-1/2 h-[420px] bg-[#1E1E1E] p-6 relative">
                <div className="h-full border border-gray-700/50 rounded-xl bg-[#252525] p-4 space-y-3">
                  <div className="h-4 w-1/3 bg-gray-700 rounded" />
                  <div className="h-3 w-full bg-gray-700 rounded" />
                  <div className="h-3 w-5/6 bg-gray-700 rounded" />
                  <div className="h-3 w-4/6 bg-gray-700 rounded" />
                  <div className="mt-4 h-20 bg-orange-900/20 border border-orange-800/30 rounded-lg flex items-center justify-center">
                    <span className="material-icons-round text-primary text-3xl">
                      edit_note
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-700/60 rounded" />
                  <div className="h-3 w-3/4 bg-gray-700/60 rounded" />
                </div>
                <div className="absolute bottom-6 left-6 bg-gray-800 shadow-lg rounded-full p-2 border border-gray-700">
                  <span className="material-icons-round text-blue-400">
                    dark_mode
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
