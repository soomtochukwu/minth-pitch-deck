"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { label: "Artists Joined", value: 1250, suffix: "+" },
  { label: "NFTs Minted", value: 3400, suffix: "+" },
  { label: "Gas Saved", value: 99, suffix: "%" },
  { label: "Countries", value: 45, suffix: "+" },
]

export default function StatsBar() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.value / 50
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timers[index])
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, 50)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
