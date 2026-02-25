"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "sync",
    title: "Instant Sync",
    description:
      "Start writing on your Mac, finish on your Windows PC. Your notes are always up to date across all devices securely.",
    color: "blue",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: "article",
    title: "Markdown Support",
    description:
      "Write in plain text and format on the fly. Full CommonMark compatibility with live preview for coding and structured writing.",
    color: "purple",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: "folder_special",
    title: "Smart Organization",
    description:
      "Tag, categorize, and nest your notes. Use the powerful command palette to find anything in milliseconds.",
    color: "orange",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Why Myno Notes</span>
          <h2 className="section-title">Designed for the modern thinker</h2>
          <p className="section-subtitle">
            Everything you need to write efficiently, without the clutter.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-background-dark hover:bg-white dark:hover:bg-[#2A2423] hover:shadow-md transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.text} flex items-center justify-center mb-6 transition-transform duration-200 will-change-transform group-hover:scale-105`}
              >
                <span className="material-icons-round text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra features row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: "lock", label: "End-to-End Encrypted" },
            { icon: "bolt", label: "Lightning Fast" },
            { icon: "wifi_off", label: "Offline First" },
            { icon: "code", label: "Open Friendly" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-4 gap-2"
            >
              <span className="material-icons-round text-2xl text-primary">
                {item.icon}
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
