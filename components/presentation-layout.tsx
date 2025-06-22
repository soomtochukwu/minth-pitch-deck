"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Grid3X3, Maximize, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import SlideBackground from "@/components/slide-background"
import { usePresentationContext } from "@/contexts/presentation-context"

interface PresentationLayoutProps {
  children: React.ReactNode
  currentSlide: number
  totalSlides: number
}

export default function PresentationLayout({ children, currentSlide, totalSlides }: PresentationLayoutProps) {
  const router = useRouter()
  const { isAutoPlay, setIsAutoPlay, autoPlayInterval } = usePresentationContext()
  const [showControls, setShowControls] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)
  const touchThreshold = 50 // Minimum distance for swipe

  const goToSlide = useCallback(
    (slideNumber: number) => {
      if (slideNumber >= 1 && slideNumber <= totalSlides) {
        router.push(`/slide/${slideNumber}`)
      }
    },
    [router, totalSlides],
  )

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, totalSlides, goToSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          nextSlide()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "Escape":
          router.push("/overview")
          break
        case "f":
        case "F":
          toggleFullscreen()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [nextSlide, prevSlide, router])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      if (currentSlide < totalSlides) {
        nextSlide()
      } else {
        setIsAutoPlay(false)
      }
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlay, currentSlide, totalSlides, nextSlide, setIsAutoPlay, autoPlayInterval])

  // Mouse movement detection for controls
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = () => {
      setShowControls(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setShowControls(false), 3000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return

    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > touchThreshold
    const isRightSwipe = distanceX < -touchThreshold
    const isVerticalSwipe = Math.abs(distanceY) > touchThreshold

    // Only handle horizontal swipes, ignore vertical swipes
    if (!isVerticalSwipe) {
      if (isLeftSwipe) {
        nextSlide()
      } else if (isRightSwipe) {
        prevSlide()
      }
    }

    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, nextSlide, prevSlide])

  // Keyboard navigation and touch events
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          nextSlide()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "Escape":
          router.push("/overview")
          break
        case "f":
        case "F":
          toggleFullscreen()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [nextSlide, prevSlide, router, handleTouchStart, handleTouchMove, handleTouchEnd])

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <SlideBackground slideNumber={currentSlide} />

      {/* Main slide content */}
      <div className="relative z-10 min-h-screen flex flex-col presentation-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-20"
          >
            {/* Navigation arrows */}
            {currentSlide > 1 && (
              <Button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 border-gray-600"
                size="lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}

            {currentSlide < totalSlides && (
              <Button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto bg-black/50 hover:bg-black/70 border-gray-600"
                size="lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}

            {/* Top controls */}
            <div className="absolute top-4 right-4 flex space-x-2 pointer-events-auto">
              <Button onClick={toggleAutoPlay} className="bg-black/50 hover:bg-black/70 border-gray-600" size="sm">
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                onClick={() => router.push("/overview")}
                className="bg-black/50 hover:bg-black/70 border-gray-600"
                size="sm"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button onClick={toggleFullscreen} className="bg-black/50 hover:bg-black/70 border-gray-600" size="sm">
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <div className="h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 text-center text-sm">
          <span className="text-gray-300">
            {currentSlide} / {totalSlides}
          </span>
          <span className="mx-4 text-gray-500">•</span>
          <span className="text-gray-400">
            <span className="hidden md:inline">Use arrow keys or navigation buttons</span>
            <span className="md:hidden">Swipe left/right to navigate</span>
          </span>
        </div>
      </div>
    </div>
  )
}
