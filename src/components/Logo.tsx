'use client'

import React from 'react'

interface LogoProps {
  size?: number
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  const logoId = `logo-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div 
      className={`inline-flex items-center justify-center relative ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          {/* M Gradient - Blue to Purple */}
          <linearGradient id={`mGrad-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          {/* S Gradient - Purple */}
          <linearGradient id={`sGrad-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          
          {/* Arrows Gradient */}
          <linearGradient id={`arrowGrad-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          {/* Dots Gradient */}
          <linearGradient id={`dotsGrad-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        
        {/* M Letter - Inspired by the reference logo */}
        <path
          d="M10 25 L10 75 L18 75 L18 40 L30 65 L36 65 L48 40 L48 75 L56 75 L56 25 L45 25 L33 58 L21 25 Z"
          fill={`url(#mGrad-${logoId})`}
        />
        
        {/* S Letter - Clean and modern */}
        <path
          d="M65 30 C65 26 68 25 72 25 L82 25 C86 25 89 26 89 30 L89 35 L82 35 L82 30 C82 29 81 29 82 29 L72 29 C71 29 70 29 70 30 L70 40 L82 40 C86 40 89 41 89 45 L89 55 C89 59 86 60 82 60 L72 60 C68 60 65 59 65 55 L65 50 L72 50 L72 55 C72 56 73 56 72 56 L82 56 C83 56 84 56 84 55 L84 45 C84 44 83 44 82 44 L72 44 C68 44 65 43 65 40 L65 30 Z"
          fill={`url(#sGrad-${logoId})`}
        />
        
        {/* Double Arrow - >> symbol like in reference */}
        <g fill={`url(#arrowGrad-${logoId})`}>
          <path d="M62 20 L67 25 L62 30 L65 30 L70 25 L65 20 Z" />
          <path d="M68 20 L73 25 L68 30 L71 30 L76 25 L71 20 Z" />
        </g>
        
        {/* Three Dots Pattern - like in reference logo */}
        <g fill={`url(#dotsGrad-${logoId})`}>
          <circle cx="65" cy="72" r="3" />
          <circle cx="75" cy="72" r="3" />
          <circle cx="85" cy="72" r="3" />
        </g>
      </svg>
    </div>
  )
}

export default Logo 