import Image from 'next/image'

const AboutJourney = () => {
  return (
    <section aria-labelledby="journey-heading" className="bg-sand/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              Our journey
            </p>
            <h2
              id="journey-heading"
              className="mt-6 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
            >
              From humble{' '}
              <em className="font-light italic text-stem">beginnings</em>.
            </h2>
            <figure className="relative mt-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-2 border-vein bg-sand">
                <Image
                  src="/images/about-kizuna.jpg"
                  alt="A Kizuna Therapy group session held outdoors in Istanbul"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>

          <div className="md:col-span-7 md:pt-16 lg:pt-24">
            <p className="text-base leading-relaxed text-frond/80 lg:text-lg">
              Discover how Kizuna Therapy was founded, our milestones, and our ongoing
              dedication to building bonds and nurturing wellness.
            </p>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-frond/80 lg:text-lg">
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
