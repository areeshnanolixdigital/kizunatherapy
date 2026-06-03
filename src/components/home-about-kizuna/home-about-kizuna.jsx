import Image from 'next/image'

import Reveal from '@/components/reveal/reveal'
import { APPROACH_POINTS } from '@/constants/services'

const HomeAboutKizuna = () => {
  return (
    <section aria-labelledby="kizuna-heading" className="bg-sand/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
          <div className="md:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-sm border-r-2 border-vein bg-sand">
                <Image
                  src="/images/about-kizuna.jpg"
                  alt="A Kizuna Therapy community session — group gathered outdoors in Istanbul"
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute -right-4 bottom-8 max-w-[200px] bg-frond px-4 py-3 text-xs uppercase tracking-[0.18em] text-powder md:-right-6 lg:-right-10">
                <span className="text-sand">Since 2024</span>
                <span className="mt-1 block normal-case tracking-normal text-powder/85">
                  Fostering bonds for healing and growth.
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">
                About Kizuna
              </p>
              <h2
                id="kizuna-heading"
                className="mt-6 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]"
              >
                Empowering individuals, cultivating community, bridging cultures.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-frond lg:text-lg">
              <p>
                At Kizuna Therapy &amp; Wellness, we believe every journey is unique
                yet deeply interconnected with the communities we engage with. Rooted in
                the Japanese concept of meaningful bonds, we foster a therapeutic
                alliance built on trust, cultural sensitivity, and accessibility.
              </p>
              <p>
                Our approach isn&apos;t just about support — it&apos;s about connection
                to oneself, to others, and to a global network of compassionate
                professionals.
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              {APPROACH_POINTS.map((point) => (
                <li key={point} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 inline-block h-px w-6 shrink-0 bg-stone"
                  />
                  <span className="text-base text-frond">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutKizuna
