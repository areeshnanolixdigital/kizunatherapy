import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import HibiscusPetal from '@/components/decor/hibiscus-petal/hibiscus-petal'

export const metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
}

const NotFound = () => {
  return (
    <section className="relative overflow-hidden bg-powder">
      <HibiscusPetal className="pointer-events-none absolute -bottom-24 -left-24 hidden h-[420px] w-[420px] rotate-[18deg] text-stem/15 md:block" />
      <div className="relative mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-40">
        <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">404</p>
        <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          We couldn&apos;t find{' '}
          <em className="font-light italic text-eyebrow">that page</em>.
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-frond">
          It may have moved, or the link may be slightly off. Try one of the routes
          below, or get in touch and we&apos;ll point you in the right direction.
        </p>
        <h2 className="sr-only">Jump to a page</h2>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <li>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem"
            >
              Home
              <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/book-session"
              className="text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem"
            >
              Book a session
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-frond underline decoration-stone underline-offset-[6px] transition-colors hover:text-eyebrow hover:decoration-stem"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NotFound
