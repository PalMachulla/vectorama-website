'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Block({
  x,
  y,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.path>, 'x' | 'y'> & {
  x: number
  y: number
}) {
  return (
    <motion.path
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      fill="none"
      stroke="#BBFFA8"
      strokeWidth="1"
      strokeOpacity="0.15"
      {...props}
    />
  )
}

function GlitchBlock({
  x,
  y,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.g>, 'x' | 'y'> & {
  x: number
  y: number
}) {
  const pathD =
    'M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
  const baseX = -32 * y + 96 * x
  const baseY = 160 * y

  return (
    <motion.g>
      {/* Pink offset border */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#FF00EE"
        strokeWidth="1"
        transform={`translate(${baseX - 2} ${baseY - 2})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.25, 0] }}
        transition={{ duration: 0.4, times: [0, 0.5, 1] }}
      />
      {/* Blue offset border */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#009DFF"
        strokeWidth="1"
        transform={`translate(${baseX + 2} ${baseY + 2})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.25, 0] }}
        transition={{ duration: 0.4, times: [0, 0.5, 1] }}
      />
      {/* Green main border - slight brightening */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#BBFFA8"
        strokeWidth="1"
        transform={`translate(${baseX} ${baseY})`}
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 0.4, times: [0, 0.5, 1] }}
        {...props}
      />
    </motion.g>
  )
}

export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  yOffset?: number
  interactive?: boolean
}) {
  let id = useId()
  let ref = useRef<React.ElementRef<'svg'>>(null)
  let currentBlock = useRef<[x: number, y: number] | undefined>(undefined)
  let counter = useRef(0)
  let [hoveredBlocks, setHoveredBlocks] = useState<
    Array<[x: number, y: number, key: number]>
  >([])
  // Generate a full grid of visible blocks
  let staticBlocks: Array<[number, number]> = []
  for (let x = -2; x <= 10; x++) {
    for (let y = 0; y <= 8; y++) {
      staticBlocks.push([x, y])
    }
  }

  useEffect(() => {
    if (!interactive) {
      return
    }

    function onMouseMove(event: MouseEvent) {
      if (!ref.current) {
        return
      }

      let rect = ref.current.getBoundingClientRect()
      let mouseX = event.clientX - rect.left
      let mouseY = event.clientY - rect.top

      if (
        mouseX < 0 ||
        mouseY < 0 ||
        mouseX > rect.width ||
        mouseY > rect.height
      ) {
        return
      }

      // Convert screen coordinates to grid coordinates
      // Account for the SVG being centered at x="50%"
      let relativeX = mouseX - rect.width / 2
      let relativeY = mouseY - yOffset

      // Reverse the skew transformation: screenX = -32*y + 96*x
      // So: x = (screenX + 32*y) / 96
      let gridY = Math.floor(relativeY / 160)
      let gridX = Math.floor((relativeX + 32 * gridY) / 96)

      if (
        currentBlock.current?.[0] === gridX &&
        currentBlock.current?.[1] === gridY
      ) {
        return
      }

      currentBlock.current = [gridX, gridY]

      setHoveredBlocks((blocks) => {
        let key = counter.current++
        let block = [gridX, gridY, key] as (typeof hoveredBlocks)[number]
        return [...blocks, block].filter(
          (block) =>
            !(block[0] === gridX && block[1] === gridY && block[2] !== key),
        )
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [yOffset, interactive])

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0" />
      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {staticBlocks.map((block) => (
          <Block key={`${block}`} x={block[0]} y={block[1]} />
        ))}
        {hoveredBlocks.map((block) => (
          <GlitchBlock
            key={block[2]}
            x={block[0]}
            y={block[1]}
            onAnimationComplete={() => {
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2]),
              )
            }}
          />
        ))}
      </svg>
      <defs>
        <pattern
          id={id}
          width="96"
          height="480"
          x="50%"
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(0 ${yOffset})`}
          fill="none"
        >
          <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
        </pattern>
      </defs>
    </svg>
  )
}
