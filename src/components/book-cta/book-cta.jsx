import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/reveal/reveal'
import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'

const BookCta = () => {
  return (
    <section aria-labelledby="book-cta-heading" className="bg-frond text-powder">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
        <Reveal direction="left" className="max-w-2xl">
          <SectionEyebrow tone="light">When you are ready</SectionEyebrow>
          <h2
            id="book-cta-heading"
            className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
          >
            Book your first session.
          </h2>
        </Reveal>
        <Reveal delay={140} className="self-start lg:self-end">
          <Link
            href="/book-session"
            className="group inline-flex items-center gap-3 border border-sand/40 px-5 py-3 text-sm uppercase tracking-[0.18em] text-powder transition-colors hover:bg-sand hover:text-frond focus-visible:bg-sand focus-visible:text-frond focus-visible:outline-none"
          >
            Book a session
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default BookCta
