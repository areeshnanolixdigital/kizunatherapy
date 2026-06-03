'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Error = ({ reset }) => {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-40">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">Something went wrong</p>
        <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          We hit a small{' '}
          <em className="font-light italic text-stem">snag</em>.
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-frond/80">
          Sorry — something on our end did not load as expected. You can try again, or
          head back home.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex items-center gap-3 border border-frond bg-frond px-5 py-3 text-sm uppercase tracking-[0.18em] text-powder transition-colors hover:bg-stem focus-visible:bg-stem focus-visible:outline-none"
          >
            Try again
            <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            href="/"
            className="text-sm text-frond/70 underline decoration-stone underline-offset-4 transition-colors hover:text-stem hover:decoration-stem"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error
