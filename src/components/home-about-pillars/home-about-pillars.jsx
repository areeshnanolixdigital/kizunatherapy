import Reveal from '@/components/reveal/reveal'
import { PILLARS } from '@/constants/services'

const HomeAboutPillars = () => {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="bg-powder"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-stone">About us</p>
            <h2
              id="pillars-heading"
              className="mt-6 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
            >
              Fostering genuine connection and{' '}
              <em className="font-light italic text-stem">cultural understanding</em>{' '}
              through therapy.
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={
                index === 1
                  ? 'md:mt-16'
                  : index === 2
                    ? 'md:mt-8'
                    : ''
              }
            >
              <p className="font-serif text-5xl font-light text-stone">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="mt-4 h-px w-12 bg-vein" aria-hidden="true" />
              <h3 className="mt-6 text-2xl">{pillar.title}</h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-frond/75">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAboutPillars
