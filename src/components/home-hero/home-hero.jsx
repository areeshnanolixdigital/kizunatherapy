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
        className="pointer-events-none absolute -bottom-32 -left-32 hidden h-[520px] w-[520px] rotate-[18deg] text-stem/15 md:block"
      />
      <HibiscusPetal
        className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 -rotate-[24deg] text-stem/15 md:hidden"
      />

      <div className="relative grid grid-cols-1 gap-12 px-6 pt-20 pb-24 md:grid-cols-12 md:gap-12 md:pt-32 md:pb-32 lg:px-10 lg:pt-40 lg:pb-40">
        <div className="md:col-span-7 md:pl-[max(0px,calc(50vw-36rem))] lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-eyebrow">
              Compassionate care
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-8 text-[2.75rem] leading-[0.98] sm:text-6xl lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              Bridging cultures, building{' '}
              <em className="font-light italic text-eyebrow">bonds</em>,
              <br className="hidden lg:block" /> transforming lives.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-10 max-w-prose text-lg leading-relaxed text-frond md:text-xl">
              We connect you with multilingual therapists from diverse backgrounds for
              culturally sensitive counseling that meets you where you are.
              Understanding begins with feeling heard.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12">
              <Link
                href="/#therapists"
                className="group inline-flex items-center gap-3 text-base text-frond underline decoration-stone decoration-2 underline-offset-[8px] transition-colors hover:text-eyebrow hover:decoration-stem focus-visible:outline-none focus-visible:text-eyebrow md:text-lg"
              >
                Meet our therapists
                <ArrowRight
                  aria-hidden="true"
                  size={22}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <figure className="relative md:-mr-6 lg:-mr-10">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-2 border-vein bg-sand md:aspect-[3/4]">
              <Image
                src="/images/about-kizuna.jpg"
                alt="A Kizuna Therapy group session held outdoors in Istanbul"
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 42vw, 100vw"
                priority
                className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
