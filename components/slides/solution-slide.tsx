"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Zap, Shield } from "lucide-react"

export default function SolutionSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="w-16 h-16 text-green-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Minth: Where Art Meets
            </h1>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent mb-8">
            Blockchain Simplicity
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            A comprehensive NFT creation platform that removes barriers and empowers creators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Palette,
              title: "Create",
              description: "Intuitive canvas tools for digital art creation",
              color: "from-cyan-400 to-cyan-600",
            },
            {
              icon: Shield,
              title: "Store",
              description: "Decentralized IPFS storage for permanent availability",
              color: "from-purple-400 to-purple-600",
            },
            {
              icon: Zap,
              title: "Mint",
              description: "One-click minting on gas-efficient Celo blockchain",
              color: "from-green-400 to-green-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6 mx-auto flex items-center justify-center`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-700 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">No Technical Knowledge Required</h3>
          <p className="text-xl text-gray-300">
            Minth democratizes NFT creation by making it accessible to artists of all technical backgrounds
          </p>
        </motion.div>
      </div>
    </div>
  )
}
