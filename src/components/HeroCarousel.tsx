'use client'

import { useState, useEffect, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from './FadeIn'
import imageCreative from '@/images/testillustration.png'

// Stylized shape for masking
const maskShape = {
  width: 655,
  height: 680,
  path: 'M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z',
}

const slides = [
  {
    id: 'vectorama',
    title: 'Vectorama',
    description:
      'Automatiser designproduksjon med AI. Generer merkevarekonistente ikoner, illustrasjoner og designelementer i vektorformat - fra apper og nettsider til powerpoint og trykte flater.',
    ctaText: 'Kom i gang',
    ctaHref: '/contact',
  },
  {
    id: 'n8n',
    title: 'N8N Automasjon',
    description:
      'Automatiser arbeidsflyten din med kraftige integrasjoner. Vi bygger skreddersydde automatiseringsløsninger som forbinder deres systemer, sparer tid og reduserer manuelle oppgaver.',
    ctaText: 'Utforsk automasjon',
    ctaHref: '/contact',
  },
  {
    id: 'creative-automation',
    title: 'Kreativ automasjon',
    description:
      'Ønsker du å se hvor langt du kan nå med video? Skap visuelt stimulerende kampanjer som fanger oppmerksomhet. Enten helt realistiske, eller drømmende og abstrakte. Alt er mulig.',
    ctaText: 'Se mulighetene',
    ctaHref: '/contact',
    backgroundImage: imageCreative,
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const maskId = useId()

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 12000) // Auto-advance every 12 seconds

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      const next = prev + newDirection
      if (next < 0) return slides.length - 1
      if (next >= slides.length) return 0
      return next
    })
  }

  const currentSlide = slides[currentIndex]
  const hasBackground = currentSlide?.backgroundImage

  return (
    <div className="relative pb-8">
      {/* Background Image (if present) - fades in independently - OUTSIDE overflow-hidden */}
      <AnimatePresence mode="wait">
        {hasBackground && (
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="pointer-events-none absolute -z-10 flex items-center justify-center"
            style={{
              top: 0,
              bottom: 0,
              left: '50%',
              width: '100vw',
              transform: 'translateX(-50%)',
            }}
          >
            {/* Full background - black */}
            <div className="absolute inset-0 bg-black" />

            {/* SVG masked version - full color inside mask */}
            <svg
              viewBox={`0 0 ${maskShape.width} ${maskShape.height}`}
              className="relative h-full w-auto translate-x-24 scale-x-150 scale-y-125"
              style={{ maxHeight: '125%' }}
            >
              <defs>
                <clipPath id={`${maskId}-clip`}>
                  <path
                    d={maskShape.path}
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </clipPath>
              </defs>
              <g clipPath={`url(#${maskId}-clip)`}>
                <foreignObject
                  width={maskShape.width}
                  height={maskShape.height}
                >
                  <div
                    className="h-full w-full"
                    style={{ width: maskShape.width, height: maskShape.height }}
                  >
                    <Image
                      src={currentSlide.backgroundImage}
                      alt=""
                      width={maskShape.width}
                      height={maskShape.height}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </foreignObject>
              </g>
            </svg>

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="relative min-h-[400px] cursor-grab active:cursor-grabbing sm:min-h-[450px]"
          >
            {/* Content */}
            <div className="relative flex min-h-[400px] items-center py-12 sm:min-h-[450px] sm:py-16">
              <div>
                <h1
                  className={`font-display text-5xl font-medium tracking-tight text-balance sm:text-7xl ${
                    hasBackground ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  {currentSlide.title}
                </h1>
                <p
                  className={`mt-6 text-xl ${
                    hasBackground ? 'text-neutral-200' : 'text-neutral-600'
                  }`}
                >
                  {currentSlide.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={currentSlide.ctaHref}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors ${
                      hasBackground
                        ? 'bg-white text-neutral-950 hover:bg-neutral-100'
                        : 'bg-neutral-950 text-white hover:bg-neutral-800'
                    }`}
                  >
                    {currentSlide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? hasBackground
                  ? 'w-8 bg-white'
                  : 'w-8 bg-neutral-950'
                : hasBackground
                  ? 'w-2 bg-white/40 hover:bg-white/60'
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
