"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { slides } from "@/lib/slides-data"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OverviewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Minth Presentation Overview
          </h1>
          <Button
            onClick={() => router.push("/slide/1")}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Presentation
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-cyan-400 transition-colors touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/slide/${index + 1}`)}
            >
              <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center">
                <slide.icon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-sm font-semibold mb-1">Slide {index + 1}</div>
              <div className="text-xs text-gray-400">{slide.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
