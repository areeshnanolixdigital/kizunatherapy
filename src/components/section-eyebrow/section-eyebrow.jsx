import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const TONE_STYLES = {
  dark: 'text-eyebrow',
  light: 'text-sand',
}

const SectionEyebrow = ({ children, tone, align, className }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-12 bg-stone" />
      <span
        className={cn(
          'text-xs uppercase tracking-[0.3em]',
          TONE_STYLES[tone] ?? TONE_STYLES.dark,
        )}
      >
        {children}
      </span>
    </div>
  )
}

SectionEyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(['dark', 'light']),
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
}

SectionEyebrow.defaultProps = {
  tone: 'dark',
  align: 'left',
  className: '',
}

export default SectionEyebrow
