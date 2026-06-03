import Image from 'next/image'

import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'

const AboutJourney = () => {
  return (
    <section aria-labelledby="journey-heading" className="bg-sand/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionEyebrow>Our journey</SectionEyebrow>
            <h2
              id="journey-heading"
              className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
            >
              From humble beginnings.
            </h2>
            <figure className="group relative mt-10 md:pl-4 md:pt-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] border border-stone/50 md:block"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand">
                <Image
                  src="/images/about-kizuna.jpg"
                  alt="A Kizuna Therapy group session held outdoors in Istanbul"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
            </figure>
          </div>

          <div className="md:col-span-7 md:pt-16 lg:pt-24">
            <p className="text-base leading-relaxed text-frond lg:text-lg">
              Discover how Kizuna Therapy was founded, our milestones, and our ongoing
              dedication to building bonds and nurturing wellness.
            </p>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-frond lg:text-lg">
              <p>
                Our journey began with a simple but powerful realization: the need for
                accessible, affordable, and culturally sensitive therapy. Understanding
                the challenges faced in developing countries, our multicultural team of
                therapists is dedicated to providing professional support that
                resonates with you.
              </p>
              <p>
                Through online individual therapy, family and relationship counseling,
                and art and nature therapy workshops, we offer a space where you can
                feel heard, supported, and empowered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutJourney
