import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const ServicesGroup = ({ kicker, title, intro, items, accent }) => {
  return (
    <section className={cn('bg-powder', accent === 'sand' && 'bg-sand/30')}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">{kicker}</p>
            <h2 className="mt-6 text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-frond">
              {intro}
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-12">
              {items.map((item) => (
                <li key={item.name}>
                  <h3 className="text-2xl">{item.name}</h3>
                  <p className="mt-2 font-serif italic text-eyebrow">{item.tagline}</p>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-frond">
                    {item.body}
                  </p>
                </li>
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
