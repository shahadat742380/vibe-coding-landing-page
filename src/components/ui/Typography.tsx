'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

// ** import third-party
import { motion as m, Variants } from 'framer-motion'

// ** import utils
import { cn } from '@/lib/utils'

type TypographyVariant =
  /** Bold H1: `font-size: 40px (mobile) / 62px (desktop)`, `line-height: tight`, `letter-spacing: tight` */
  | 'Bold_H1'
  | 'Bold_H2'
  | 'Bold_H3'
  | 'Bold_H4'
  | 'Bold_H5'
  | 'Bold_H6'
  | 'Bold_H7'
  | 'SemiBold_H1'
  | 'SemiBold_H2'
  | 'SemiBold_H3'
  | 'SemiBold_H4'
  | 'SemiBold_H5'
  | 'SemiBold_H6'
  | 'SemiBold_H7'
  | 'Medium_H1'
  | 'Medium_H2'
  | 'Medium_H3'
  | 'Medium_H4'
  | 'Medium_H5'
  | 'Medium_H6'
  | 'Medium_H7'
  | 'Regular_H1'
  | 'Regular_H2'
  | 'Regular_H3'
  | 'Regular_H4'
  | 'Regular_H5'
  | 'Regular_H6'
  | 'Regular_H7'

type TypographyAnimation = 'move' | 'underline'

type LinkDirection = 'forward' | 'back'

interface TypographyProps {
  mVariants?: Variants
  mDelay?: number
  variant: TypographyVariant
  children: ReactNode
  className?: string
  maxLines?: number
  navigate?: LinkDirection
  link?: string
  target?: string
  animate?: TypographyAnimation
  disableSelect?: boolean
  onClick?: () => void
  labelColor?: string
}

export const Typography: FC<TypographyProps> = ({
  mVariants,
  mDelay = 0,
  variant,
  children,
  className = '',
  maxLines = 0,
  navigate,
  link = '',
  target = '',
  animate = '',
  disableSelect = false,
  labelColor,
  onClick,
  ...props
}) => {
  const getFontWeight = (variant: TypographyVariant): string => {
    if (variant.startsWith('Bold')) {
      return 'font-bold'
    } else if (variant.startsWith('SemiBold')) {
      return 'font-semibold'
    } else if (variant.startsWith('Medium')) {
      return 'font-medium'
    } else if (variant.startsWith('Regular')) {
      return 'font-normal'
    } else {
      return 'font-normal' // Default font weight
    }
  }

  const getStyleClasses = (variant: TypographyVariant): string => {
    let fontSizeClass = ''
    let lineHeightClass = ''
    let letterSpacingClass = ''
    let fontWeightClass = getFontWeight(variant)

    switch (variant) {
      case 'Bold_H1':
      case 'SemiBold_H1':
      case 'Medium_H1':
      case 'Regular_H1':
        fontSizeClass = 'text-[40px] md:text-[62px]'
        lineHeightClass = 'leading-tight md:leading-tighter'
        letterSpacingClass = 'tracking-tight'
        break
      case 'Bold_H2':
      case 'SemiBold_H2':
      case 'Medium_H2':
      case 'Regular_H2':
        fontSizeClass = 'text-[32px] md:text-[49px]'
        lineHeightClass = 'leading-none'
        letterSpacingClass = 'tracking-tight'
        break
      case 'Bold_H3':
      case 'SemiBold_H3':
      case 'Medium_H3':
      case 'Regular_H3':
        fontSizeClass = 'text-[24px] md:text-[39px]'
        lineHeightClass = 'leading-normal md:leading-snug'
        letterSpacingClass = 'tracking-tight'
        break
      case 'Bold_H4':
      case 'SemiBold_H4':
      case 'Medium_H4':
      case 'Regular_H4':
        fontSizeClass = 'text-[20px] md:text-[25px]'
        lineHeightClass = 'leading-relaxed md:leading-normal'
        letterSpacingClass = 'tracking-normal'
        break
      case 'Bold_H5':
      case 'SemiBold_H5':
      case 'Medium_H5':
      case 'Regular_H5':
        fontSizeClass = 'text-[16px] md:text-[20px]'
        lineHeightClass = 'leading-snug md:leading-normal'
        letterSpacingClass = 'tracking-tight'
        break
      case 'Bold_H6':
      case 'SemiBold_H6':
      case 'Medium_H6':
      case 'Regular_H6':
        fontSizeClass = 'text-[14px] md:text-[16px]'
        lineHeightClass = 'leading-snug md:leading-relaxed'
        letterSpacingClass = 'tracking-tight'
        break
      case 'Bold_H7':
      case 'SemiBold_H7':
      case 'Medium_H7':
      case 'Regular_H7':
        fontSizeClass = 'text-[12px] md:text-[14px]'
        lineHeightClass = 'leading-tight md:leading-snug'
        letterSpacingClass = 'tracking-tight'
        break
      default:
        fontSizeClass = 'text-base'
        lineHeightClass = 'leading-normal'
        letterSpacingClass = 'tracking-normal'
    }

    return `${fontSizeClass} ${lineHeightClass} ${letterSpacingClass} ${fontWeightClass}`
  }

  const styleClasses = getStyleClasses(variant)

  const router = useRouter()

  const handleNavigate = (): void => {
    if (navigate === 'back') {
      router.back()
    } else {
      router.forward()
    }
  }

  const content = (
    <m.span
      initial='hidden'
      whileInView='visible'
      variants={mVariants}
      transition={{ duration: 0.6, ease: 'easeIn', delay: mDelay }}
      viewport={{ once: true }}
      className={cn(
        'font-inter',
        'text-light_dark_ dark:text-text_dark',
        styleClasses,
        className,
      )}
      style={{ userSelect: disableSelect ? 'none' : 'auto', color: labelColor }}
      {...props}
      onClick={() => {
        if (onClick) {
          onClick()
        }
        if (navigate) {
          handleNavigate()
        }
      }}
    >
      {children}
    </m.span>
  )

  return link ? (
    <Link href={link} target={target} className='max-w-fit'>
      {content}
    </Link>
  ) : (
    content
  )
}
