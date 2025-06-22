"use client"

import { motion } from "framer-motion"
import { Building, Github, ExternalLink, Users, Code } from "lucide-react"

const achievements = [
  {
    icon: ExternalLink,
    title: "Live Platform",
    description: "Fully functional platform at minth.xyz",
    status: "Active",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Multiple GitHub repositories with active development",
    status: "V1 & V2",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "Active user base with positive feedback",
    status: "1,250+ Users",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Code,
    title: "Continuous Development",
    description: "Regular updates and feature improvements",
    status: "Weekly Updates",
    color: "from-orange-400 to-orange-600",
  },
]

export default function TractionSlide() {
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
            <Building className="w-16 h-16 text-green-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Proven
            </h1>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Execution</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Demonstrating real progress with active development and user engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full mb-6 flex items-center justify-center`}
              >
                <achievement.icon className="w-10 h-10 text-white" />
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
                <span className="text-sm bg-green-900/50 text-green-400 px-3 py-1 rounded-full">
                  {achievement.status}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Repository V1</h3>
            <p className="text-gray-300 mb-4">Original concept and foundation</p>
            <div className="text-cyan-400 font-semibold">View on GitHub →</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Github className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Repository V2</h3>
            <p className="text-gray-300 mb-4">Enhanced features and Celo integration</p>
            <div className="text-purple-400 font-semibold">View on GitHub →</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <ExternalLink className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Live Platform</h3>
            <p className="text-gray-300 mb-4">Experience Minth today</p>
            <div className="text-green-400 font-semibold">Visit minth.xyz →</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
