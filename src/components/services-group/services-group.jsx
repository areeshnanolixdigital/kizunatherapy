import PropTypes from 'prop-types'

import Reveal from '@/components/reveal/reveal'
import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
import { cn } from '@/lib/utils'

const ServicesGroup = ({ kicker, title, intro, items, accent }) => {
  return (
    <section className={cn('bg-powder', accent === 'sand' && 'bg-sand/30')}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal direction="left" className="md:col-span-5">
            <SectionEyebrow>{kicker}</SectionEyebrow>
            <h2 className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-frond">
              {intro}
            </p>
          </Reveal>

          <div className="md:col-span-7">
            <ul className="divide-y divide-frond/12">
              {items.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.name}
                  delay={Math.min(index, 5) * 80}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-8 first:pt-0 sm:gap-x-12"
                >
                  <span className="font-serif text-xl font-light text-stone sm:text-2xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-eyebrow">
                      {item.tagline}
                    </p>
                    <p className="mt-4 max-w-prose text-base leading-relaxed text-frond">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesGroup.propTypes = {
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  accent: PropTypes.oneOf(['none', 'sand']),
}

ServicesGroup.defaultProps = {
  accent: 'none',
}

export default ServicesGroup
