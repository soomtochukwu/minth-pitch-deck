"use client"

import { motion } from "framer-motion"
import { AlertTriangle, DollarSign, Puzzle, Shield } from "lucide-react"

const problems = [
  {
    icon: Puzzle,
    title: "Technical Complexity",
    description: "Artists need coding knowledge to mint NFTs, deterring creative talent from entering the space.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: DollarSign,
    title: "High Gas Fees",
    description: "Ethereum's expensive transaction costs make NFT creation inaccessible to many creators.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Puzzle,
    title: "Fragmented Tools",
    description: "Creators must use multiple platforms for creation, storage, and minting, creating friction.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Shield,
    title: "Centralized Storage",
    description: "Many platforms rely on centralized storage, risking permanent loss of digital assets.",
    color: "from-red-400 to-red-600",
  },
]

export default function ProblemSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              The NFT Creation Barrier
            </h1>
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Current NFT creation platforms create unnecessary friction for artists and creators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-full mb-6 flex items-center justify-center`}
              >
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
