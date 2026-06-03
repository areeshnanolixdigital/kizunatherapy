import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BookCta = () => {
  return (
    <section aria-labelledby="book-cta-heading" className="bg-frond text-powder">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-sand">
            When you are ready
          </p>
          <h2
            id="book-cta-heading"
            className="mt-6 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
          >
            Book your{' '}
            <em className="font-light italic text-vein">first session</em>.
          </h2>
        </div>
        <Link
          href="/book-session"
          className="group inline-flex items-center gap-3 self-start border border-sand/40 px-5 py-3 text-sm uppercase tracking-[0.18em] text-powder transition-colors hover:bg-sand hover:text-frond focus-visible:bg-sand focus-visible:text-frond focus-visible:outline-none lg:self-end"
        >
          Book a session
          <ArrowRight
            aria-hidden="true"
            size={16}
            className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}

export default BookCta
