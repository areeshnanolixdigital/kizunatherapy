import PropTypes from 'prop-types'

import HibiscusPetal from '@/components/decor/hibiscus-petal/hibiscus-petal'
import Reveal from '@/components/reveal/reveal'
import { cn } from '@/lib/utils'

const PageHero = ({ kicker, title, subtitle, italic, align }) => {
  const renderTitle = () => {
    if (!italic || !title.includes(italic)) {
      return title
    }
    const [before, after] = title.split(italic)
    return (
      <>
        {before}
        <em className="font-light italic text-stem">{italic}</em>
        {after}
      </>
    )
  }

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden bg-powder"
    >
      <HibiscusPetal
        className="pointer-events-none absolute -bottom-32 -right-24 hidden h-[380px] w-[380px] -rotate-[28deg] text-stone/12 md:block"
      />
      <div
        className={cn(
          'relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20 lg:px-10 lg:pt-32 lg:pb-24',
        )}
      >
        <div
          className={cn(
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {kicker && (
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">{kicker}</p>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1
              id="page-hero-heading"
              className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]"
            >
              {renderTitle()}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={160}>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-frond/80">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

PageHero.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  italic: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
}

PageHero.defaultProps = {
  kicker: '',
  subtitle: '',
  italic: '',
  align: 'left',
}

export default PageHero
