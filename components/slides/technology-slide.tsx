"use client"

import { motion } from "framer-motion"
import { Smartphone, Database, Zap, Code } from "lucide-react"

const technologies = [
  {
    icon: Smartphone,
    title: "Celo Blockchain",
    description: "Mobile-first, carbon-negative blockchain with ultra-low fees",
    features: [
      "Mobile-optimized transactions",
      "Carbon-negative consensus",
      "Sub-cent transaction fees",
      "Fast finality",
    ],
    color: "from-green-400 to-green-600",
  },
  {
    icon: Database,
    title: "IPFS Storage",
    description: "Decentralized storage ensuring permanent asset availability",
    features: ["Immutable storage", "Global distribution", "Censorship resistant", "Content addressing"],
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Zap,
    title: "Smart Contracts",
    description: "Gas-efficient ERC721 implementation with advanced features",
    features: ["Optimized gas usage", "Batch minting support", "Royalty enforcement", "Upgradeable design"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Code,
    title: "Modern Frontend",
    description: "React-based interface with Web3 integration",
    features: ["Responsive design", "Wallet connectivity", "Real-time updates", "Progressive Web App"],
    color: "from-orange-400 to-orange-600",
  },
]

export default function TechnologySlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Built on Cutting-Edge
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Technology</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the best Web3 technologies for optimal performance and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-full mb-6 flex items-center justify-center`}
              >
                <tech.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{tech.description}</p>

              <ul className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-3`}></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
