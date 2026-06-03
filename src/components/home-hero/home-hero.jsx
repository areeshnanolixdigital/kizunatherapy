import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import HibiscusPetal from '@/components/decor/hibiscus-petal/hibiscus-petal'
import Reveal from '@/components/reveal/reveal'

const HomeHero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-powder"
    >
      <HibiscusPetal
        className="pointer-events-none absolute -bottom-24 -left-24 hidden h-[420px] w-[420px] rotate-[18deg] text-stem/15 md:block"
      />
      <HibiscusPetal
        className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 -rotate-[24deg] text-stem/15 md:hidden"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28 lg:gap-16 lg:px-10 lg:py-32">
        <div className="md:col-span-7 lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">
              Compassionate care
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.75rem]"
            >
              Bridging cultures, building{' '}
              <em className="font-light italic text-eyebrow">bonds</em>, transforming lives.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-frond">
              We connect you with multilingual therapists from diverse backgrounds for
              culturally sensitive counseling that meets you where you are. Understanding
              begins with feeling heard.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Link
                href="/#therapists"
                className="group inline-flex items-center gap-2 text-base text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem focus-visible:outline-none focus-visible:text-eyebrow"
              >
                Meet our therapists
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <figure className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-2 border-vein bg-sand">
              <Image
                src="/images/about-kizuna.jpg"
                alt="A Kizuna Therapy group session held outdoors in Istanbul"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 42vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
