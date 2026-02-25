"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Personal",
    tagline: "For individuals getting started.",
    price: "Free",
    priceSuffix: "forever",
    highlighted: false,
    cta: "Download Free",
    ctaHref: "#download",
    features: [
      "Unlimited local notes",
      "Basic markdown formatting",
      "Local storage",
      "Dark mode",
    ],
    iconColor: "text-green-500",
  },
  {
    name: "Pro",
    tagline: "For power users who need more.",
    price: "Coming soon",
    priceSuffix: "",
    highlighted: true,
    badge: "Most Popular",
    cta: "Contact us",
    ctaHref: "#",
    features: [
      "Unlimited device sync",
      "Advanced export (PDF, HTML, Docx)",
      "Version history (30 days)",
      "Priority support",
      "Custom themes",
      "AI writing assistant (coming soon)",
    ],
    iconColor: "text-primary",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 relative bg-gray-50 dark:bg-background-dark"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your workflow.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 transition-colors transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? "bg-white dark:bg-surface-dark border border-primary/20 shadow-xl shadow-primary/5"
                  : "bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{plan.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {plan.priceSuffix}
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`material-icons-round text-sm ${plan.iconColor}`}
                    >
                      check
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.highlighted ? (
                <Link
                  href={plan.ctaHref}
                  className="block w-full py-3 px-6 text-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-transform transition-shadow duration-300 will-change-transform hover:-translate-y-0.5"
                >
                  {plan.cta}
                </Link>
              ) : (
                <Link
                  href={plan.ctaHref}
                  className="block w-full py-3 px-6 text-center rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors"
                >
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
