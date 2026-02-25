"use client";

import { motion } from "framer-motion";

const files = [
  {
    name: "Project_Alpha_Notes.md",
    icon: "description",
    status: "synced",
  },
  {
    name: "Meeting_Minutes_Q1.md",
    icon: "description",
    status: "syncing",
  },
  {
    name: "Design_Mockup_v2.png",
    icon: "image",
    status: "synced",
  },
];

export default function SyncSection() {
  return (
    <section className="py-24 relative bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: File sync mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid-bg absolute inset-0 rounded-3xl opacity-50" />
            <div className="relative bg-gray-50 dark:bg-background-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
              {/* Window chrome */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                  <span className="material-icons-round text-sm">wifi_off</span>
                  Offline Ready
                </div>
              </div>

              {/* File list */}
              <div className="space-y-4">
                {files.map((file, i) => (
                  <motion.div
                    key={file.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-center justify-between p-4 bg-white dark:bg-[#252525] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons-round text-gray-400">
                        {file.icon}
                      </span>
                      <span className="text-sm font-medium dark:text-gray-200">
                        {file.name}
                      </span>
                    </div>
                    {file.status === "synced" ? (
                      <span className="material-icons-round text-green-500 text-sm">
                        check_circle
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="material-icons-round text-blue-500 text-sm animate-slow-spin">
                          sync
                        </span>
                        <span className="text-xs text-gray-400">Syncing...</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Storage indicator */}
              <div className="mt-6 p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-100 dark:border-gray-700/50">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Cloud Storage</span>
                  <span>2.4 GB / 10 GB</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: "24%" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
              <span className="material-icons-round text-3xl">cloud_queue</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Always in Sync &<br />
              Available Offline
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Never lose a thought. Myno syncs your data securely to the cloud
              the moment you&#39;re online. No internet? No problem. Full offline
              support means your workspace is always ready, wherever you are.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "End-to-end encryption for all synced data",
                "Conflict resolution for multi-device editing",
                "Local-first architecture for zero latency",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                >
                  <span className="material-icons-round text-primary">
                    check
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
