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
    title: "Easy Upload",
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
    title: "Template System",
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
    title: "No Code Required",
    description: "Accessible to all skill levels - no technical knowledge needed",
    color: "from-pink-400 to-pink-600",
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6 flex items-center justify-center`}
          >
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
