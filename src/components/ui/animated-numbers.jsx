'use client'

import { useEffect, useState } from 'react'

export function AnimatedNumber({ number, delay = 0 }) {
  const [displayedNumber, setDisplayedNumber] = useState('')

  useEffect(() => {
    const animateNumber = async () => {
      await new Promise(resolve => setTimeout(resolve, delay))

      for (let i = 0; i < number.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200))
        setDisplayedNumber(prev => prev + number[i])
      }
    }

    animateNumber()
  }, [number, delay])

  return (
    <span className="inline-block">
      {displayedNumber}
    </span>
  )
}
