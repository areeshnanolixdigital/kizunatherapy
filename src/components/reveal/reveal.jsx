'use client'

import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const HIDDEN_BY_DIRECTION = {
  up: 'opacity-0 motion-safe:translate-y-4',
  down: 'opacity-0 motion-safe:-translate-y-4',
  left: 'opacity-0 motion-safe:-translate-x-5',
  right: 'opacity-0 motion-safe:translate-x-5',
  none: 'opacity-0',
}

const VISIBLE =
  'opacity-100 motion-safe:translate-x-0 motion-safe:translate-y-0'

const Reveal = ({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : '0ms' }}
      className={cn(
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        visible ? VISIBLE : HIDDEN_BY_DIRECTION[direction],
        className,
      )}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'none']),
}

export default Reveal
