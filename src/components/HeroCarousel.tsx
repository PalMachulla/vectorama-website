'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from './FadeIn'
import imageLaptop from '@/images/laptop.jpg'

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
      'Utnytt kraften av KI til å automatisere kreative prosesser. Fra idégenerering til ferdig design - vi hjelper deg å skalere kreativiteten uten å miste den menneskelige touchen.',
    ctaText: 'Se mulighetene',
    ctaHref: '/contact',
    backgroundImage: imageLaptop,
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

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
    <div className="relative max-w-3xl">
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
            className="relative min-h-[500px] cursor-grab active:cursor-grabbing sm:min-h-[600px]"
          >
            {/* Background Image (if present) - fades in independently */}
            <AnimatePresence mode="wait">
              {hasBackground && (
                <motion.div
                  key={`bg-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="pointer-events-none absolute -z-10"
                  style={{
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: '100vw',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <Image
                    src={currentSlide.backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative flex min-h-[500px] items-center py-16 sm:min-h-[600px] sm:py-20">
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
      <div className="mt-8 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-neutral-950'
                : 'w-2 bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <div className="mt-6 hidden items-center gap-4 sm:flex">
        <button
          onClick={() => paginate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50"
          aria-label="Previous slide"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50"
          aria-label="Next slide"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
