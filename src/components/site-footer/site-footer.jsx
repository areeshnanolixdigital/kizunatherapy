import Image from 'next/image'
import Link from 'next/link'

import InstagramIcon from '@/components/icons/instagram-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import { CONTACT, FOOTER_QUICK_LINKS, SOCIAL_LINKS } from '@/constants/nav'

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
}

const FOOTER_BLURB =
  'At Kizuna Therapy & Wellness, we focus on fostering connections and offering culturally sensitive care to help you heal and thrive.'

const CURRENT_YEAR = new Date().getFullYear()

const SiteFooter = () => {
  return (
    <footer className="bg-frond text-powder">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          <section aria-labelledby="footer-about">
            <Link href="/" aria-label="Kizuna Therapy — Home" className="inline-block">
              <Image
                src="/logo.png"
                alt="Kizuna Therapy"
                width={3776}
                height={1890}
                sizes="280px"
                className="h-16 w-auto"
              />
            </Link>
            <h3 id="footer-about" className="sr-only">
              About Kizuna Therapy
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-powder/85">
              {FOOTER_BLURB}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon]
                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-label={`Kizuna Therapy on ${label}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="grid h-10 w-10 place-items-center rounded-full border border-sand/30 text-powder transition-colors hover:border-sand hover:bg-sand hover:text-frond focus-visible:bg-sand focus-visible:text-frond focus-visible:outline-none"
                    >
                      <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <nav aria-labelledby="footer-links">
            <h3 id="footer-links" className="font-serif text-xl">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {FOOTER_QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-sand">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="font-serif text-xl">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-powder/85">
              We&apos;d love to hear from you. Reach out for any questions or to schedule a
              session.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  className="transition-colors hover:text-sand"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-sand"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-powder/70">{CONTACT.address}</li>
            </ul>
          </section>
        </div>

        <div className="mt-16 border-t border-sand/15 pt-6 text-xs text-powder/60">
          <p>&copy;{CURRENT_YEAR} Kizuna Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
