"use client"

import { motion } from "framer-motion"
import { Award, Zap, Smartphone, Leaf } from "lucide-react"

export default function CeloSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <Award className="w-16 h-16 text-white" />
          </div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Celo Proof of Ship
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Participant
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Competing in Celo's monthly innovation program with significant rewards and recognition
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Zap,
              title: "5,000 cUSD",
              subtitle: "Monthly Prize Pool",
              color: "from-green-400 to-green-600",
            },
            {
              icon: Smartphone,
              title: "Mobile-First",
              subtitle: "Innovation Focus",
              color: "from-yellow-400 to-yellow-600",
            },
            {
              icon: Leaf,
              title: "Carbon-Negative",
              subtitle: "Blockchain Choice",
              color: "from-green-400 to-emerald-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-6 mx-auto flex items-center justify-center`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.title}</div>
              <div className="text-gray-300 text-lg">{stat.subtitle}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-yellow-900/30 border border-green-700 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Why Celo?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-2">Environmental Impact</h4>
              <p className="text-gray-300">Carbon-negative blockchain supporting sustainable NFT creation</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">Global Accessibility</h4>
              <p className="text-gray-300">Mobile-first design reaching creators in emerging markets</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
