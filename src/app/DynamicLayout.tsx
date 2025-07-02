'use client'

import { useLanguage } from '../context/LanguageContext'
import { useEffect } from 'react'

interface DynamicLayoutProps {
  children: React.ReactNode
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => {
  const { language, isHydrated } = useLanguage()

  useEffect(() => {
    // Set document language dynamically only after hydration
    if (isHydrated && typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language, isHydrated])

  return <>{children}</>
}

export default DynamicLayout 