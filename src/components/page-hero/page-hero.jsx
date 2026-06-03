import PropTypes from 'prop-types'

import HibiscusPetal from '@/components/decor/hibiscus-petal/hibiscus-petal'
import Reveal from '@/components/reveal/reveal'
import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
import { cn } from '@/lib/utils'

const PageHero = ({ kicker, title, subtitle, align }) => {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden bg-powder"
    >
      <HibiscusPetal
        className="pointer-events-none absolute -bottom-32 -right-24 hidden h-[380px] w-[380px] -rotate-[28deg] text-stem/12 md:block"
      />
      <div
        className={cn(
          'relative mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-24 lg:px-10 lg:pt-40 lg:pb-32',
        )}
      >
        <div
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {kicker && (
            <Reveal>
              <SectionEyebrow align={align}>{kicker}</SectionEyebrow>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1
              id="page-hero-heading"
              className="mt-8 text-[2.5rem] leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-[5rem] xl:text-[5.5rem]"
            >
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={160}>
              <p className="mt-10 max-w-prose text-lg leading-relaxed text-frond md:text-xl">
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
  align: PropTypes.oneOf(['left', 'center']),
}

PageHero.defaultProps = {
  kicker: '',
  subtitle: '',
  align: 'left',
}

export default PageHero
