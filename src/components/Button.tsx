import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'font-mono group relative inline-flex rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider transition-all',
    'before:absolute before:inset-0 before:rounded-full before:border before:transition-all',
    'after:absolute after:inset-0 after:rounded-full after:border after:transition-all',
    invert
      ? 'bg-black text-[#BBFFA8] hover:bg-neutral-950 border border-[#BBFFA8]/60 before:border-[#FF00EE]/50 before:-translate-x-0.5 before:-translate-y-0.5 after:border-[#009DFF]/40 after:translate-x-0.5 after:translate-y-0.5 hover:before:-translate-x-1 hover:before:-translate-y-1 hover:after:translate-x-1 hover:after:translate-y-1'
      : 'bg-black text-[#009DFF] hover:bg-neutral-950 border border-[#009DFF]/60 before:border-[#FF00EE]/50 before:-translate-x-0.5 before:-translate-y-0.5 after:border-[#BBFFA8]/40 after:translate-x-0.5 after:translate-y-0.5 hover:before:-translate-x-1 hover:before:-translate-y-1 hover:after:translate-x-1 hover:after:translate-y-1',
  )

  let inner = <span className="relative top-px z-10">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
