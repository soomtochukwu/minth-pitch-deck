"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PresentationContextType {
  isAutoPlay: boolean
  setIsAutoPlay: (value: boolean) => void
  autoPlayInterval: number
  setAutoPlayInterval: (value: number) => void
  isPresenterMode: boolean
  setIsPresenterMode: (value: boolean) => void
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined)

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [autoPlayInterval, setAutoPlayInterval] = useState(5000) // 5 seconds
  const [isPresenterMode, setIsPresenterMode] = useState(false)

  return (
    <PresentationContext.Provider
      value={{
        isAutoPlay,
        setIsAutoPlay,
        autoPlayInterval,
        setAutoPlayInterval,
        isPresenterMode,
        setIsPresenterMode,
      }}
    >
      {children}
    </PresentationContext.Provider>
  )
}

export function usePresentationContext() {
  const context = useContext(PresentationContext)
  if (context === undefined) {
    throw new Error("usePresentationContext must be used within a PresentationProvider")
  }
  return context
}
