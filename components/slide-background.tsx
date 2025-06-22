"use client"

import { useEffect, useRef } from "react"

interface SlideBackgroundProps {
  slideNumber: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type?: string
}

export default function SlideBackground({ slideNumber }: SlideBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      let particleCount = 30
      let colors = ["#06b6d4", "#8b5cf6", "#10b981"]
      let particleType = "default"

      // Customize based on slide
      switch (slideNumber) {
        case 1: // Title slide - gentle floating
          particleCount = 20
          colors = ["#06b6d4", "#8b5cf6"]
          particleType = "gentle"
          break
        case 2: // Problem - chaotic
          particleCount = 40
          colors = ["#ef4444", "#f97316"]
          particleType = "chaotic"
          break
        case 3: // Solution - organized
          particleCount = 25
          colors = ["#10b981", "#06b6d4"]
          particleType = "organized"
          break
        case 4: // Features - grid
          particleCount = 36
          colors = ["#8b5cf6", "#06b6d4", "#10b981"]
          particleType = "grid"
          break
        case 5: // Process - flowing
          particleCount = 30
          colors = ["#06b6d4", "#8b5cf6"]
          particleType = "flowing"
          break
        case 6: // Technology - network
          particleCount = 35
          colors = ["#10b981", "#06b6d4"]
          particleType = "network"
          break
        case 7: // Achievement - burst
          particleCount = 50
          colors = ["#f59e0b", "#10b981"]
          particleType = "burst"
          break
        case 8: // Advantage - upward
          particleCount = 30
          colors = ["#8b5cf6", "#06b6d4"]
          particleType = "upward"
          break
        case 9: // Market - expanding
          particleCount = 40
          colors = ["#f59e0b", "#ef4444"]
          particleType = "expanding"
          break
        case 10: // Roadmap - timeline
          particleCount = 25
          colors = ["#06b6d4", "#8b5cf6"]
          particleType = "timeline"
          break
        case 11: // Traction - building
          particleCount = 30
          colors = ["#10b981", "#06b6d4"]
          particleType = "building"
          break
        case 12: // CTA - energy
          particleCount = 45
          colors = ["#06b6d4", "#8b5cf6", "#10b981"]
          particleType = "energy"
          break
      }

      for (let i = 0; i < particleCount; i++) {
        let x, y, vx, vy

        switch (particleType) {
          case "gentle":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 0.3
            vy = (Math.random() - 0.5) * 0.3
            break
          case "chaotic":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 2
            vy = (Math.random() - 0.5) * 2
            break
          case "organized":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 0.5
            vy = (Math.random() - 0.5) * 0.5
            break
          case "grid":
            const cols = 6
            const rows = 6
            const col = i % cols
            const row = Math.floor(i / cols)
            x = (canvas.width / cols) * col + Math.random() * 50
            y = (canvas.height / rows) * row + Math.random() * 50
            vx = (Math.random() - 0.5) * 0.2
            vy = (Math.random() - 0.5) * 0.2
            break
          case "flowing":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = Math.random() * 0.8 + 0.2
            vy = (Math.random() - 0.5) * 0.3
            break
          case "network":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 0.4
            vy = (Math.random() - 0.5) * 0.4
            break
          case "burst":
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2
            const angle = (i / particleCount) * Math.PI * 2
            const radius = Math.random() * 200 + 100
            x = centerX + Math.cos(angle) * radius
            y = centerY + Math.sin(angle) * radius
            vx = Math.cos(angle) * 0.5
            vy = Math.sin(angle) * 0.5
            break
          case "upward":
            x = Math.random() * canvas.width
            y = canvas.height + Math.random() * 200
            vx = (Math.random() - 0.5) * 0.3
            vy = -Math.random() * 0.8 - 0.2
            break
          case "expanding":
            const expandCenterX = canvas.width / 2
            const expandCenterY = canvas.height / 2
            const expandAngle = Math.random() * Math.PI * 2
            const expandRadius = Math.random() * 100
            x = expandCenterX + Math.cos(expandAngle) * expandRadius
            y = expandCenterY + Math.sin(expandAngle) * expandRadius
            vx = Math.cos(expandAngle) * 0.3
            vy = Math.sin(expandAngle) * 0.3
            break
          case "timeline":
            x = (canvas.width / particleCount) * i + Math.random() * 20
            y = canvas.height / 2 + (Math.random() - 0.5) * 100
            vx = 0.2
            vy = (Math.random() - 0.5) * 0.2
            break
          case "building":
            x = Math.random() * canvas.width
            y = canvas.height - Math.random() * 300
            vx = (Math.random() - 0.5) * 0.2
            vy = -Math.random() * 0.3
            break
          case "energy":
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 1.5
            vy = (Math.random() - 0.5) * 1.5
            break
          default:
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
            vx = (Math.random() - 0.5) * 0.5
            vy = (Math.random() - 0.5) * 0.5
        }

        particles.push({
          x,
          y,
          vx,
          vy,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: particleType,
        })
      }

      particlesRef.current = particles
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary handling based on type
        if (particle.type === "upward" || particle.type === "building") {
          if (particle.y < -50) {
            particle.y = canvas.height + 50
            particle.x = Math.random() * canvas.width
          }
        } else if (particle.type === "flowing") {
          if (particle.x > canvas.width + 50) {
            particle.x = -50
            particle.y = Math.random() * canvas.height
          }
        } else {
          // Standard boundary wrapping
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw connections for network types
      if (particlesRef.current[0]?.type === "network") {
        particlesRef.current.forEach((particle, i) => {
          particlesRef.current.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.save()
              ctx.globalAlpha = ((150 - distance) / 150) * 0.3
              ctx.strokeStyle = particle.color
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
          })
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [slideNumber])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
