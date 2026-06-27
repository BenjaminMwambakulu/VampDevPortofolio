"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "60fps",
    label: "Interface Fluidity",
    description:
      "All frontend modules built with continuous, hardware-accelerated motion tracking.",
  },
  {
    value: "98%",
    label: "Lighthouse Performance",
    description:
      "Optimized asset delivery, semantic tree-shaking, and minimal bundle sizes.",
  },
  {
    value: "Real-Time",
    label: "Data Intelligence",
    description:
      "Engineered to stream predictive analytics, price points, and compliance telemetry.",
  },
];

export default function MetricsSection() {
  return (
    <section className="py-28 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 font-semibold block mb-3">
            Performance Standards
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white font-futura leading-tight">
            Where Business Intelligence Meets Production Code
          </h2>
        </div>

        {/* Apple Style Stat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="flex flex-col space-y-4 border-t border-neutral-800 pt-6"
            >
              {/* Massive Apple Hero Stat */}
              <div className="text-5xl lg:text-6xl font-light tracking-tighter text-white font-futura">
                {metric.value}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
                  {metric.label}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
