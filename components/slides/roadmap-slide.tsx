"use client"

import { motion } from "framer-motion"
import { Map, CheckCircle, Circle, Clock } from "lucide-react"

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
    color: "from-green-400 to-green-600",
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
    color: "from-purple-400 to-purple-600",
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
    color: "from-cyan-400 to-cyan-600",
  },
]

export default function RoadmapSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Map className="w-16 h-16 text-cyan-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Development
            </h1>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Roadmap</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Our journey from concept to comprehensive NFT ecosystem
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-green-400 transform -translate-x-1/2 opacity-30"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                      {phase.status === "completed" && <CheckCircle className="w-8 h-8 text-green-400" />}
                      {phase.status === "current" && <Circle className="w-8 h-8 text-purple-400 fill-current" />}
                      {phase.status === "planned" && <Clock className="w-8 h-8 text-gray-400" />}
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{phase.phase}</span>
                    </div>

                    <h3 className="text-4xl font-bold mb-4 text-white">{phase.title}</h3>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed">{phase.description}</p>

                    <ul className="space-y-4">
                      {phase.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-3 text-lg text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.3 + featureIndex * 0.1 }}
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${
                              phase.status === "completed"
                                ? "bg-green-400"
                                : phase.status === "current"
                                  ? "bg-purple-400"
                                  : "bg-gray-400"
                            }`}
                          ></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    className={`w-6 h-6 rounded-full border-4 ${
                      phase.status === "completed"
                        ? "bg-green-400 border-green-400"
                        : phase.status === "current"
                          ? "bg-purple-400 border-purple-400"
                          : "bg-gray-400 border-gray-400"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 max-w-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
