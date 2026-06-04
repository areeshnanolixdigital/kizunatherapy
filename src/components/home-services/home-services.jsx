import Reveal from '@/components/reveal/reveal'
import { SERVICES } from '@/constants/services'

const HomeServices = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-frond text-powder"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-stone" />
              <p className="text-xs uppercase tracking-[0.3em] text-sand">
                Therapy services
              </p>
            </div>
            <h2
              id="services-heading"
              className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
            >
              How we work together.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-powder/80">
              Each modality is chosen to match where you are and what helps you most —
              not what fits a template.
            </p>
          </Reveal>

          <ol className="md:col-span-7 lg:col-span-8">
            {SERVICES.map((service, index) => (
              <Reveal
                as="li"
                key={service.title}
                delay={Math.min(index, 5) * 70}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 border-t border-sand/15 py-8 first:border-t-0 first:pt-0 sm:gap-x-12"
              >
                <span className="font-serif text-2xl font-light text-stone sm:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl text-powder sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-powder/75 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
