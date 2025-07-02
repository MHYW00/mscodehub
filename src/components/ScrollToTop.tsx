'use client'

import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Scroll pozisyonunu takip et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsAnimating(true)
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Animation duration
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className={`group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isAnimating ? 'animate-bounce' : ''
        }`}
        aria-label="Sayfanın başına git"
      >
        {/* Roket ikonu */}
        <div className={`relative transition-transform duration-300 ${
          isAnimating ? 'rocket-launch' : 'group-hover:-translate-y-1'
        }`}>
          <svg 
            className="w-5 h-5 md:w-6 md:h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"/>
          </svg>
          
          {/* Roket alevi animasyonu */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isAnimating || !isVisible ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:scale-110'
          }`}>
            <div className={`w-2 h-3 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-400 rounded-full ${
              isAnimating ? 'flame-flicker' : 'animate-pulse'
            }`}></div>
          </div>

          {/* Yıldız parçacıkları */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-yellow-300 rounded-full transition-all duration-500 ${
                  isAnimating ? 'sparkle opacity-100' : 'opacity-0 scale-0'
                }`}
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${25 + i * 15}%`,
                  animationDelay: `${i * 150}ms`
                }}
              />
            ))}
          </div>

          {/* Hover sparkles */}
          <div className="absolute inset-0 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            {[...Array(3)].map((_, i) => (
              <div
                key={`hover-${i}`}
                className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full sparkle"
                style={{
                  top: `${10 + i * 25}%`,
                  right: `${10 + i * 10}%`,
                  animationDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hover efekti için glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        
        {/* Progress ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/20 transition-all duration-300"></div>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-slate-600">
          Başa Dön
          <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-800"></div>
        </div>
      </div>
    </div>
  )
}

export default ScrollToTop 
