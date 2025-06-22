"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Globe, Users, Smartphone } from "lucide-react"

export default function MarketSlide() {
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
            <Target className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Massive Market
            </h1>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Potential</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Targeting underserved segments in the rapidly growing NFT ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-orange-400 mb-6">Total Addressable Market</h3>
              <div className="space-y-4">
                {[
                  { label: "Global NFT Market 2024", value: "$80B+", icon: Globe },
                  { label: "Mobile Users Globally", value: "6.8B", icon: Smartphone },
                  { label: "Digital Artists Worldwide", value: "50M+", icon: Users },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <stat.icon className="w-6 h-6 text-orange-400 mr-3" />
                      <span className="text-gray-300">{stat.label}</span>
                    </div>
                    <span className="text-orange-400 font-bold text-xl">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400 mb-6">Target Demographics</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Emerging market mobile-first creators
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Non-technical artists seeking blockchain entry
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Cost-conscious creators deterred by high fees
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Environmental-conscious digital artists
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">Market Growth Projection</h3>
              <div className="space-y-8">
                {[
                  { year: "2024", value: "$80B", percentage: 40 },
                  { year: "2026", value: "$150B", percentage: 75 },
                  { year: "2028", value: "$200B", percentage: 100 },
                ].map((projection, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 text-xl font-semibold">{projection.year}</span>
                      <span className="text-orange-400 font-bold text-2xl">{projection.value}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <motion.div
                        className="bg-gradient-to-r from-orange-400 to-red-500 h-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${projection.percentage}%` }}
                        transition={{ duration: 1, delay: 0.9 + index * 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">
                  Compound Annual Growth Rate: <span className="text-green-400 font-bold">25%</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
