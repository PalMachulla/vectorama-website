import clsx from 'clsx'

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <li
      className={clsx(
        'rounded border border-[#009DFF]/30 bg-neutral-900/50 px-3 py-1.5 font-mono text-sm text-neutral-400',
        className,
      )}
    >
      <span className="text-[#BBFFA8]">{'- '}</span>
      {children}
    </li>
  )
}
