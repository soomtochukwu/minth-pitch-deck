"use client"

import { motion } from "framer-motion"
import { Palette } from "lucide-react"

export default function TitleSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
            <Palette className="w-12 h-12 text-white" />
          </div>
          <motion.h1
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            MINTH
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Turn Your Imagination Into NFTs
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-xl text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
            Built for Celo
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
            Proof of Ship 2025
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-lg">Democratizing NFT Creation on Blockchain</p>
        </motion.div>
      </div>
    </div>
  )
}
