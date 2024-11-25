'use client'

import { useEffect, useState } from 'react'

export function AnimatedNumber({ number, delay = 0, duration = 2000, updateSpeed = 30 }) {
  const [displayedNumber, setDisplayedNumber] = useState(0)

  useEffect(() => {
    const target = parseInt(number.replace(/[^\d]/g, '')) // Extrae números (remueve '+' y 'M²')
    const increment = Math.ceil(target / (duration / updateSpeed)) // Incremento basado en duración
    let current = 0

    const startAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, delay)) // Retraso inicial
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          setDisplayedNumber(target) // Asegura que no pase el límite
          clearInterval(interval)
        } else {
          setDisplayedNumber(current)
        }
      }, updateSpeed) // Actualiza en el intervalo indicado
    }

    startAnimation()
  }, [number, delay, duration, updateSpeed])

  return (
    <span className="inline-block shadow-xl fontG">
      {number.startsWith('+') ? `+${displayedNumber}` : displayedNumber}
    </span>
  )
}
