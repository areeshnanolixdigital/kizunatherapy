import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import BookCta from '@/components/book-cta/book-cta'
import HibiscusPetal from '@/components/decor/hibiscus-petal/hibiscus-petal'
import { SITE_NAME, SITE_URL } from '@/constants/site'
import { getTherapistBySlug, THERAPISTS } from '@/constants/therapists'

export const generateStaticParams = () =>
  THERAPISTS.map((therapist) => ({ slug: therapist.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const therapist = getTherapistBySlug(slug)
  if (!therapist) {
    return { title: 'Therapist not found' }
  }
  return {
    title: therapist.name,
    description: `${therapist.name} — ${therapist.title} at Kizuna Therapy. ${therapist.overview.slice(0, 120)}…`,
  }
}

const getFirstName = (name) => name.split(' ')[0]

const Section = ({ kicker, title, children }) => (
  <section className="border-t border-frond/15 py-12 first:border-t-0 first:pt-0 lg:py-16">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">{kicker}</p>
        <h2 className="mt-3 text-2xl">{title}</h2>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  </section>
)

const TherapistProfilePage = async ({ params }) => {
  const { slug } = await params
  const therapist = getTherapistBySlug(slug)

  if (!therapist) {
    notFound()
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: therapist.name,
    jobTitle: therapist.title,
    email: therapist.email,
    knowsLanguage: therapist.languages,
    description: therapist.overview,
    worksFor: {
      '@type': 'MedicalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/therapists/${therapist.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section
        aria-labelledby="therapist-heading"
        className="relative overflow-hidden bg-powder"
      >
        <HibiscusPetal className="pointer-events-none absolute -top-32 -right-24 hidden h-[420px] w-[420px] -rotate-[20deg] text-stem/12 md:block" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-16 md:grid-cols-12 md:gap-12 md:pt-28 md:pb-20 lg:gap-16 lg:px-10 lg:pt-32 lg:pb-24">
          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <Image
                src={therapist.photo}
                alt={`Portrait of ${therapist.name}`}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 42vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 md:pt-6">
            <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">
              Therapist
              {therapist.note && (
                <span className="ml-3 text-stem/70">· {therapist.note}</span>
              )}
            </p>
            <h1
              id="therapist-heading"
              className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              {therapist.name}
            </h1>
            <p className="mt-6 text-lg text-frond">{therapist.title}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-eyebrow">
              {therapist.languages.join(' · ')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={`/book-session?therapist=${therapist.slug}`}
                className="group inline-flex items-center gap-3 border border-frond/30 px-5 py-3 text-sm uppercase tracking-[0.18em] text-frond transition-colors hover:bg-frond hover:text-powder focus-visible:bg-frond focus-visible:text-powder focus-visible:outline-none"
              >
                Book with {getFirstName(therapist.name)}
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
              </Link>
              <a
                href={`mailto:${therapist.email}`}
                className="text-sm text-frond underline decoration-stone underline-offset-4 transition-colors hover:text-eyebrow hover:decoration-stem"
              >
                {therapist.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-powder">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Section kicker="Professional overview" title="In her practice">
            <p className="text-base leading-relaxed text-frond lg:text-lg">
              {therapist.overview}
            </p>
          </Section>

          <Section kicker="Specializations" title="Areas of focus">
            <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8">
              {therapist.specializations.map((item) => (
                <li key={item} className="flex gap-3 text-base text-frond">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 inline-block h-px w-5 shrink-0 bg-stone"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Therapeutic approaches" title="How she works">
            <ul className="space-y-3">
              {therapist.approaches.map((item) => (
                <li key={item} className="flex gap-3 text-base text-frond">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 inline-block h-px w-5 shrink-0 bg-stone"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Education" title="Training">
            <ul className="space-y-3">
              {therapist.education.map((item) => (
                <li key={item} className="flex gap-3 text-base text-frond">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 inline-block h-px w-5 shrink-0 bg-stone"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Philosophy" title="What guides the work">
            <p className="font-serif text-xl leading-relaxed italic text-frond lg:text-2xl">
              {therapist.philosophy}
            </p>
          </Section>
        </div>
      </div>

      <BookCta />
    </>
  )
}

export default TherapistProfilePage
