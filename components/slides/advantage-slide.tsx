"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Smartphone, Zap, Leaf, Users } from "lucide-react"

const advantages = [
  {
    icon: DollarSign,
    title: "99% Lower Costs",
    description: "Celo's efficient blockchain reduces gas fees compared to Ethereum",
    stat: "$0.01",
    statLabel: "Average transaction cost",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for smartphone accessibility, reaching 6.8B mobile users globally",
    stat: "6.8B",
    statLabel: "Global mobile users",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Zap,
    title: "Integrated Workflow",
    description: "Complete creation-to-minting process in one seamless platform",
    stat: "4 Steps",
    statLabel: "From art to NFT",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Leaf,
    title: "Carbon-Negative",
    description: "Environmentally sustainable blockchain choice for conscious creators",
    stat: "100%",
    statLabel: "Carbon negative",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No technical knowledge required - accessible to all skill levels",
    stat: "0",
    statLabel: "Coding required",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth",
    description: "Active development with growing user base and platform improvements",
    stat: "Live",
    statLabel: "Platform status",
    color: "from-orange-400 to-orange-600",
  },
]

export default function AdvantageSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Why Choose
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Minth</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Unique advantages that set us apart in the NFT creation space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${advantage.color} rounded-full mb-6 mx-auto flex items-center justify-center`}
              >
                <advantage.icon className="w-10 h-10 text-white" />
              </div>

              <div className="text-4xl font-bold text-white mb-2">{advantage.stat}</div>
              <div className="text-sm text-gray-400 mb-4">{advantage.statLabel}</div>

              <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
