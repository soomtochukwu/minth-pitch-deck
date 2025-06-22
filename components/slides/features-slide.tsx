"use client"

import { motion } from "framer-motion"
import { Palette, Upload, Database, Zap, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Intuitive Canvas Tools",
    description: "Professional drawing capabilities with brushes, shapes, and text tools",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Upload,
    title: "Easy Upload System",
    description: "Transform existing artwork instantly with drag-and-drop functionality",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Database,
    title: "IPFS Integration",
    description: "Decentralized, permanent storage ensuring your art lives forever",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Shield,
    title: "Template Showcase",
    description: "Showcase artwork beautifully with customizable display templates",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Zap,
    title: "One-Click Minting",
    description: "Gas-efficient minting on Celo blockchain with minimal fees",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Smartphone,
    title: "Zero Code Required",
    description: "Accessible to all skill levels - no technical knowledge needed",
    color: "from-pink-400 to-pink-600",
  },
]

export default function FeaturesSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Simple Experience</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, store, and mint NFTs in one integrated platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm text-center"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full mb-6 mx-auto flex items-center justify-center`}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
