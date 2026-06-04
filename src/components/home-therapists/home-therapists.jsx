import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/reveal/reveal'
import { THERAPISTS } from '@/constants/therapists'

const HomeTherapists = () => {
  return (
    <section
      id="therapists"
      aria-labelledby="therapists-heading"
      className="bg-powder"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-12 bg-stone" />
                <p className="text-xs uppercase tracking-[0.3em] text-eyebrow">
                  The practice
                </p>
              </div>
              <h2
                id="therapists-heading"
                className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
              >
                Meet our therapists.
              </h2>
            </div>
            <p className="max-w-sm text-base text-frond">
              A small, multilingual practice — six therapists across continents and
              traditions, all trained to hold a steady, culturally attuned space.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPISTS.map((therapist, index) => (
            <Reveal
              as="li"
              key={therapist.slug}
              delay={(index % 3) * 90}
              className="group"
            >
              <Link
                href={`/therapists/${therapist.slug}`}
                className="block focus-visible:outline-none"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand">
                  <Image
                    src={therapist.photo}
                    alt={`Portrait of ${therapist.name}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-frond/65 via-frond/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <span className="pointer-events-none absolute bottom-4 left-4 flex translate-y-1 items-center gap-2 text-xs uppercase tracking-[0.22em] text-powder opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <span aria-hidden="true" className="h-px w-5 bg-stone" />
                    View profile
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-frond/10 pb-2">
                  <h3 className="text-xl">
                    {therapist.name}
                    {therapist.note && (
                      <span className="ml-2 align-middle text-xs uppercase tracking-[0.16em] text-eyebrow">
                        {therapist.note}
                      </span>
                    )}
                  </h3>
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    className="shrink-0 text-eyebrow transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  />
                </div>
                <p className="mt-3 text-sm text-frond">{therapist.title}</p>
                <p className="mt-1 text-sm text-frond">
                  {therapist.topSpecialty}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-eyebrow">
                  {therapist.languages.join(' · ')}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomeTherapists
