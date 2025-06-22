"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowRight, Github, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full mx-auto mb-8 flex items-center justify-center">
            <Rocket className="w-16 h-16 text-white" />
          </div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join the Minth
          </motion.h1>

          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Revolution
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Start creating and minting NFTs today. No technical barriers, no high fees, just pure creative freedom on
            the Celo blockchain.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-xl px-12 py-6 h-auto"
          >
            Try Minth Now <ArrowRight className="ml-3 w-6 h-6" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 text-xl px-12 py-6 h-auto"
          >
            <Github className="mr-3 w-6 h-6" /> View Source Code
          </Button>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <ExternalLink className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Experience Minth</h3>
            <p className="text-gray-300 mb-4">Visit our live platform and start creating</p>
            <div className="text-cyan-400 font-semibold">minth.xyz →</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <Github className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Open Source</h3>
            <p className="text-gray-300 mb-4">Explore our code and contribute</p>
            <div className="text-purple-400 font-semibold">GitHub Repository →</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Partner With Us</h3>
            <p className="text-gray-300 mb-4">Ready to collaborate? Let's talk</p>
            <div className="text-green-400 font-semibold">hello@minth.xyz →</div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-gray-400 text-lg">Democratizing NFT creation • One artist at a time</p>
        </motion.div>
      </div>
    </div>
  )
}
