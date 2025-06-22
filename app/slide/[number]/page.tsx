"use client"

import { useParams } from "next/navigation"
import PresentationLayout from "@/components/presentation-layout"
import { slides } from "@/lib/slides-data"

export default function SlidePage() {
  const params = useParams()
  const slideNumber = Number.parseInt(params.number as string)

  if (slideNumber < 1 || slideNumber > slides.length) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Slide Not Found</h1>
          <p>Slide {slideNumber} does not exist.</p>
        </div>
      </div>
    )
  }

  const currentSlide = slides[slideNumber - 1]

  return (
    <PresentationLayout currentSlide={slideNumber} totalSlides={slides.length}>
      <currentSlide.component />
    </PresentationLayout>
  )
}
