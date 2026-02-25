"use client";

import { motion } from "framer-motion";

type DownloadButton = {
  label: string;
  strong: string;
  bg: string;
  href: string;
  symbol: string;
  symbolColor?: string;
};

type DownloadExtra = {
  label: string;
  href: string;
  style: "border" | "link";
};

type Platform = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  comingSoon?: boolean;
  buttons?: DownloadButton[];
  extras?: DownloadExtra[];
};

const platforms: Platform[] = [
  {
    id: "ios",
    name: "iPhone & iPad",
    icon: "smartphone",
    iconColor: "text-gray-600 dark:text-gray-300",
    comingSoon: true,
  },
  {
    id: "android",
    name: "Android",
    icon: "android",
    iconColor: "text-green-400",
    comingSoon: true,
  },
  {
    id: "macos",
    name: "macOS",
    icon: "laptop_mac",
    iconColor: "text-gray-600 dark:text-gray-300",
    buttons: [
      {
        label: "Download on the",
        strong: "Mac App Store",
        bg: "bg-black",
        href: "#",
        symbol: "laptop_mac",
      },
    ],
    extras: [
      {
        label: "Download .dmg",
        href: "/release/Myno_Notes_x64.dmg",
        style: "border",
      },
      { label: "View Instruction", href: "#", style: "link" },
    ],
  },
  {
    id: "windows",
    name: "Windows 10/11",
    icon: "computer",
    iconColor: "text-blue-400",
    buttons: [
      {
        label: "Get it from",
        strong: "Microsoft Store",
        bg: "bg-black",
        href: "#",
        symbol: "window",
        symbolColor: "text-blue-400",
      },
    ],
    extras: [
      { label: "Download .exe", href: "#", style: "border" },
      { label: "View Instruction", href: "#", style: "link" },
    ],
  },
];

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24 relative bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Available on all your devices
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download Myno Notes for your preferred platform.
          </p>
        </motion.div>

        {/* Platform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Platform icon */}
              <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span
                  className={`material-icons-round text-3xl ${platform.iconColor}`}
                >
                  {platform.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {platform.name}
              </h3>

              {/* Coming Soon badge */}
              {platform.comingSoon ? (
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-semibold border border-dashed border-gray-300 dark:border-gray-600">
                    <span className="material-icons-round text-base">
                      schedule
                    </span>
                    Coming Soon
                  </span>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Join the waitlist to be notified
                  </p>
                </div>
              ) : (
                /* Download buttons */
                <div className="flex flex-col gap-3 w-full">
                  {platform.buttons?.map((btn) => (
                    <a
                      key={btn.strong}
                      href={btn.href}
                      className={`${btn.bg} text-white px-4 py-2.5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity w-full justify-center`}
                    >
                      <span
                        className={`material-symbols-outlined text-2xl ${btn.symbolColor ?? ""}`}
                      >
                        {btn.symbol}
                      </span>
                      <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] text-gray-300">
                          {btn.label}
                        </span>
                        <span className="text-base font-semibold">
                          {btn.strong}
                        </span>
                      </div>
                    </a>
                  ))}

                  {/* Extras */}
                  {platform.extras?.map((extra) =>
                    extra.style === "border" ? (
                      <a
                        key={extra.label}
                        href={extra.href}
                        className="block w-full py-2 px-4 text-center rounded-lg border border-blue-500 text-blue-500 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm"
                      >
                        {extra.label}
                      </a>
                    ) : (
                      <a
                        key={extra.label}
                        href={extra.href}
                        className="text-sm text-gray-500 hover:text-primary transition-colors"
                      >
                        {extra.label}
                      </a>
                    ),
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
