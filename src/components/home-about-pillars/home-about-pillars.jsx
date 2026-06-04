import Reveal from '@/components/reveal/reveal'
import { PILLARS } from '@/constants/services'

const HomeAboutPillars = () => {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="bg-powder"
    >
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-stone" />
              <p className="text-xs uppercase tracking-[0.3em] text-eyebrow">About us</p>
            </div>
            <h2
              id="pillars-heading"
              className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
            >
              Fostering genuine connection and cultural understanding
              through therapy.
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 110}>
              <p className="font-serif text-6xl font-light text-stone">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="mt-5 h-px w-12 bg-stone" aria-hidden="true" />
              <h3 className="mt-6 text-2xl">{pillar.title}</h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-frond">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAboutPillars
