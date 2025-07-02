'use client'

import { useState } from 'react'
import { Variants } from 'framer-motion'

// Hover efektleri için varyantlar
export const hoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -5,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const cardVariants: Variants = {
  initial: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const iconVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 5, 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  tap: { 
    rotate: -5, 
    scale: 0.9,
    transition: {
      duration: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const linkVariants: Variants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Ripple efekti için hook
export const useRipple = () => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const id = Date.now()

    setRipples(prev => [...prev, { x, y, id }])

    // Ripple'ı 600ms sonra kaldır
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id))
    }, 600)
  }

  return { ripples, createRipple }
}

// Magnetic efekti için hook
export const useMagnetic = (strength = 0.3) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (event.clientX - centerX) * strength
    const deltaY = (event.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return {
    position,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: 'transform 0.3s ease-out'
    }
  }
}

// Tilt efekti için hook
export const useTilt = (maxTilt = 15) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (event.clientX - centerX) / (rect.width / 2)
    const deltaY = (event.clientY - centerY) / (rect.height / 2)
    
    setTilt({ 
      x: deltaY * maxTilt, 
      y: -deltaX * maxTilt 
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return {
    tilt,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform 0.3s ease-out'
    }
  }
}

// Pulse efekti için varyantlar
export const pulseVariants: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Glow efekti için varyantlar
export const glowVariants: Variants = {
  initial: { 
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)" 
  },
  hover: { 
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
} 