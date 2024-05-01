'use client'
import React, { useState, useEffect } from 'react'

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating a delay to showcase the loading spinner
    const timeout = setTimeout(() => {
      setLoading(false)
    })

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#121212] z-20 ${
        loading ? '' : 'hidden'
      }`}
    >
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500'></div>
    </div>
  )
}

export default LoadingSpinner
