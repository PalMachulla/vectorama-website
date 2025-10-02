import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function MaskedIllustration({
  className,
  ...props
}: ImagePropsWithOptionalAlt) {
  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-square w-full overflow-hidden rounded-2xl',
      )}
    >
      <div className="relative h-full w-full">
        {/* Background illustration without mask */}
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          {...props}
        />
      </div>
    </div>
  )
}
