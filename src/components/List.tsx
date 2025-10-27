import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx('font-mono text-base text-neutral-400', className)}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-mono font-semibold text-[#009DFF]">
              <span className="text-neutral-500">{'  '}</span>
              {title}
              <span className="text-neutral-400">: </span>
            </strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
