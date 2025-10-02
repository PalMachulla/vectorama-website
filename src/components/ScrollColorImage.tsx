'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function ScrollColorImage({
  className,
  ...props
}: ImagePropsWithOptionalAlt) {
  const [isInView, setIsInView] = useState(false)
  const [opacity, setOpacity] = useState(0.3)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return

      const rect = imageRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const imageHeight = rect.height
      
      // Calculate the center of the image relative to the viewport center
      const imageCenter = rect.top + imageHeight / 2
      const viewportCenter = windowHeight / 2
      
      // Calculate distance from center (0 = perfectly centered)
      const distanceFromCenter = Math.abs(imageCenter - viewportCenter)
      
      // Calculate opacity based on distance (closer to center = more colorful)
      // When distance is 0 (centered), opacity is 1 (full color)
      // When distance is > 400px, opacity is 0.3 (grayed out)
      const maxDistance = 400
      const newOpacity = Math.max(0.3, 1 - (distanceFromCenter / maxDistance))
      
      setOpacity(newOpacity)
      setIsInView(distanceFromCenter < 200) // Consider "in view" when within 200px of center
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      ref={imageRef}
      className={clsx(
        className,
        'relative flex aspect-square w-full overflow-hidden rounded-2xl transition-all duration-500',
      )}
    >
      <div className="relative h-full w-full">
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
          style={{
            filter: `grayscale(${1 - opacity}) brightness(${0.7 + opacity * 0.3})`,
            opacity: opacity,
          }}
          {...props}
        />
        
        {/* Optional overlay for extra effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 transition-opacity duration-500"
          style={{ opacity: 1 - opacity }}
        />
      </div>
    </div>
  )
}
