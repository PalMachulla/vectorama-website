'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Slide } from '@/data/presentationData'

interface PresentationCarouselProps {
  slides: Slide[]
  isOpen: boolean
  onClose: () => void
}

function CoverSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${slide.backgroundColor || 'bg-neutral-950'}`}
    >
      <div className="relative z-10 max-w-5xl px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sm:text-8xl font-display text-7xl font-medium tracking-tight text-white"
        >
          {slide.content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-2xl text-neutral-300"
        >
          {slide.content.subtitle}
        </motion.p>
      </div>
      {slide.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={slide.image}
            alt=""
            className="h-3/4 w-auto object-contain"
            priority
          />
        </motion.div>
      )}
    </div>
  )
}

function StatementSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className={`relative flex h-full w-full items-center ${slide.backgroundColor || 'bg-neutral-100'}`}
    >
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* Text side */}
        <div className="flex items-center justify-center p-12 lg:p-16">
          <div className="max-w-2xl">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-neutral-950 pl-6"
            >
              <p className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                &ldquo;{slide.content.statement}&rdquo;
              </p>
              {slide.content.author && (
                <footer className="mt-8">
                  <p className="text-lg text-neutral-600">
                    — {slide.content.author}
                  </p>
                </footer>
              )}
            </motion.blockquote>
          </div>
        </div>
        {/* Image side */}
        {slide.image && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden items-center justify-center p-12 lg:flex"
          >
            <Image
              src={slide.image}
              alt=""
              className="h-full max-h-[600px] w-auto object-contain"
              priority
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

function BulletListSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className={`flex h-full w-full items-center ${slide.backgroundColor || 'bg-white'}`}
    >
      <div className="grid h-full w-full grid-cols-1 gap-8 p-12 lg:grid-cols-2 lg:gap-12 lg:p-16">
        {/* Content side */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl font-medium tracking-tight text-neutral-950"
          >
            {slide.content.title}
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 space-y-6"
          >
            {slide.content.bullets?.map((bullet, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <h3 className="flex items-center text-xl font-semibold text-neutral-950">
                  <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-sm text-white">
                    {index + 1}
                  </span>
                  {bullet.title}
                </h3>
                <p className="mt-2 ml-12 text-base text-neutral-600">
                  {bullet.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        {/* Image side */}
        {slide.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden items-center justify-center lg:flex"
          >
            <Image
              src={slide.image}
              alt=""
              className="h-full max-h-[700px] w-auto object-contain"
              priority
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ClosingSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${slide.backgroundColor || 'bg-neutral-50'}`}
    >
      <div className="relative z-10 max-w-4xl px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-6xl font-medium tracking-tight text-neutral-950 sm:text-7xl"
        >
          {slide.content.closingTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-neutral-600"
        >
          {slide.content.closingSubtitle}
        </motion.p>
        {slide.content.cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Link
              href={slide.content.cta.href}
              className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {slide.content.cta.text}
            </Link>
          </motion.div>
        )}
      </div>
      {slide.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={slide.image}
            alt=""
            className="h-2/3 w-auto object-contain"
            priority
          />
        </motion.div>
      )}
    </div>
  )
}

function SlideRenderer({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide slide={slide} />
    case 'statement':
      return <StatementSlide slide={slide} />
    case 'bulletList':
      return <BulletListSlide slide={slide} />
    case 'closing':
      return <ClosingSlide slide={slide} />
    default:
      return null
  }
}

export function PresentationCarousel({
  slides,
  isOpen,
  onClose,
}: PresentationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1)
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex, slides.length])

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'Escape') onClose()
    },
    [isOpen, goToNext, goToPrevious, onClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Reset to first slide when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setDirection(0)
      // Prevent body scroll when presentation is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close presentation"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-6 w-6"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-8 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {currentIndex < slides.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-8 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Slide counter */}
      <div className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
        {currentIndex + 1} / {slides.length}
      </div>

      {/* Slides */}
      <div className="relative h-full w-full overflow-hidden">
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
            className="absolute inset-0"
          >
            <SlideRenderer slide={slides[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
