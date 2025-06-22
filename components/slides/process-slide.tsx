"use client"

import { motion } from "framer-motion"
import { Palette, Database, Wallet, Zap } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "CREATE",
    description: "Draw with canvas tools or upload images",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Database,
    title: "STORE",
    description: "Automatic IPFS upload for decentralization",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Wallet,
    title: "CONNECT",
    description: "Link your Celo wallet securely",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "MINT",
    description: "Deploy as NFT with low gas fees",
    color: "from-orange-400 to-orange-600",
  },
]

export default function ProcessSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Simple 4-Step Process
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">From creation to minting in minutes, not hours</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 via-green-400 to-orange-400 opacity-30 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  <div className="text-4xl font-bold mb-4 text-white">{index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
