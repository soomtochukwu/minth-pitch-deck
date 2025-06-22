"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, Clock } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    status: "completed",
    title: "Foundation",
    description: "Core platform development",
    features: [
      "Canvas creation tools",
      "IPFS integration",
      "Basic minting functionality",
      "Celo blockchain integration",
    ],
  },
  {
    phase: "Phase 2",
    status: "current",
    title: "Enhancement",
    description: "Advanced features and community",
    features: [
      "Advanced editing features",
      "Community marketplace",
      "Social sharing integration",
      "Mobile app development",
    ],
  },
  {
    phase: "Phase 3",
    status: "planned",
    title: "Innovation",
    description: "AI and cross-chain expansion",
    features: [
      "AI-assisted creation tools",
      "Cross-chain compatibility",
      "Advanced analytics dashboard",
      "Enterprise partnerships",
    ],
  },
]

export default function Roadmap() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-green-400 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Content */}
            <div className="flex-1 max-w-md">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  {phase.status === "completed" && <CheckCircle className="w-6 h-6 text-green-400" />}
                  {phase.status === "current" && <Circle className="w-6 h-6 text-purple-400 fill-current" />}
                  {phase.status === "planned" && <Clock className="w-6 h-6 text-gray-400" />}
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{phase.phase}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{phase.title}</h3>
                <p className="text-gray-300 mb-6">{phase.description}</p>

                <ul className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          phase.status === "completed"
                            ? "bg-green-400"
                            : phase.status === "current"
                              ? "bg-purple-400"
                              : "bg-gray-400"
                        }`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline Node */}
            <div className="hidden md:block relative z-10">
              <div
                className={`w-4 h-4 rounded-full border-4 ${
                  phase.status === "completed"
                    ? "bg-green-400 border-green-400"
                    : phase.status === "current"
                      ? "bg-purple-400 border-purple-400"
                      : "bg-gray-400 border-gray-400"
                }`}
              ></div>
            </div>

            {/* Spacer */}
            <div className="flex-1 max-w-md"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
