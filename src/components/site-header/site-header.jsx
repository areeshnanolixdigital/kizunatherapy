'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { NAV_LINKS, PRIMARY_CTA } from '@/constants/nav'
import { cn } from '@/lib/utils'

const Wordmark = () => (
  <Link
    href="/"
    aria-label="Kizuna Therapy — Home"
    className="inline-block transition-opacity hover:opacity-85"
  >
    <Image
      src="/logo.png"
      alt="Kizuna Therapy"
      width={3776}
      height={1890}
      priority
      sizes="(min-width: 640px) 224px, 176px"
      className="h-11 w-auto sm:h-14"
    />
  </Link>
)

const SiteHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-frond text-powder">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-sand focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={PRIMARY_CTA.href}
            className={cn(
              'inline-flex items-center border border-sand/40 px-4 py-2 text-sm tracking-wide',
              'transition-colors hover:bg-sand hover:text-frond focus-visible:bg-sand focus-visible:text-frond focus-visible:outline-none',
            )}
          >
            {PRIMARY_CTA.label}
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden"
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-sand/15 md:hidden">
          <nav aria-label="Primary mobile" className="mx-auto max-w-7xl px-6 py-6">
            <ul className="flex flex-col gap-5 text-base">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-1 transition-colors hover:text-sand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={PRIMARY_CTA.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center border border-sand/40 px-4 py-2 text-sm tracking-wide transition-colors hover:bg-sand hover:text-frond"
                >
                  {PRIMARY_CTA.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
