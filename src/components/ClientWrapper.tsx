'use client'

import { useEffect, useState } from 'react'

interface ClientWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const ClientWrapper = ({ children, fallback = null }: ClientWrapperProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default ClientWrapper 