"use client"

import { motion } from "framer-motion"
import { Palette, Database, Wallet, Zap, Eye } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "Create",
    description: "Draw with canvas tools or upload images",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Database,
    title: "Store",
    description: "Automatic IPFS upload for decentralization",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Wallet,
    title: "Connect",
    description: "Link your Celo wallet securely",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "Mint",
    description: "Deploy as NFT with low gas fees",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Eye,
    title: "Showcase",
    description: "Display in beautiful templates",
    color: "from-pink-400 to-pink-600",
  },
]

export default function ProcessFlow() {
  return (
    <div className="relative">
      {/* Connection Lines */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 via-green-400 via-orange-400 to-pink-500 opacity-30 transform -translate-y-1/2"></div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2 text-white">{index + 1}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
