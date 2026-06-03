'use client'

import { useActionState, useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
import { submitBooking } from '@/app/actions/booking'
import { THERAPISTS } from '@/constants/therapists'
import { cn } from '@/lib/utils'

const initialState = { ok: null, error: '', message: '' }

const fieldLabel = 'block text-xs uppercase tracking-[0.18em] text-eyebrow'
const fieldInput =
  'mt-3 block w-full border-b border-frond/25 bg-transparent py-2 text-base text-frond placeholder-frond/40 focus:border-stem focus:outline-none'

const BookingForm = () => {
  const searchParams = useSearchParams()
  const initialSlug = searchParams.get('therapist') || ''
  const [selectedSlug, setSelectedSlug] = useState(initialSlug)
  const [state, formAction, isPending] = useActionState(submitBooking, initialState)

  useEffect(() => {
    if (state?.ok) {
      const el = document.getElementById('booking-status')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [state])

  const selectedTherapist = THERAPISTS.find(({ slug }) => slug === selectedSlug)

  return (
    <section aria-labelledby="picker-heading" className="bg-powder">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <SectionEyebrow>Step one</SectionEyebrow>
          <h2
            id="picker-heading"
            className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl"
          >
            Choose a therapist to begin.
          </h2>
        </div>

        <fieldset className="mt-12">
          <legend className="sr-only">Choose a therapist</legend>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:gap-x-10">
            {THERAPISTS.map((therapist) => {
              const isSelected = therapist.slug === selectedSlug
              return (
                <li key={therapist.slug}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedSlug(therapist.slug)}
                    className="group block w-full text-left focus-visible:outline-none"
                  >
                    <div
                      className={cn(
                        'relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand transition-all',
                        isSelected &&
                          'ring-2 ring-frond ring-offset-2 ring-offset-powder',
                      )}
                    >
                      <Image
                        src={therapist.photo}
                        alt={`Portrait of ${therapist.name}`}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 45vw"
                        className={cn(
                          'object-cover transition-transform duration-[900ms] ease-out',
                          !isSelected && 'group-hover:scale-[1.04] group-focus-visible:scale-[1.04]',
                        )}
                      />
                    </div>
                    <p className="mt-4 text-base text-frond">{therapist.name}</p>
                    <p className="mt-1 text-sm text-frond">{therapist.title}</p>
                  </button>
                </li>
              )
            })}
          </ul>
        </fieldset>

        <form action={formAction} className="mt-20" noValidate>
          <input type="hidden" name="therapistSlug" value={selectedSlug} />
          <input
            type="hidden"
            name="therapistName"
            value={selectedTherapist?.name || ''}
          />

          <div className="max-w-2xl">
            <SectionEyebrow>Step two</SectionEyebrow>
            <h2 className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl">
              Tell us a little about yourself.
            </h2>
            <p className="mt-4 text-sm text-frond">
              {selectedTherapist
                ? `Booking with ${selectedTherapist.name}.`
                : 'No therapist selected yet — choose one above to continue.'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={fieldLabel}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldInput}
              />
            </div>
            <div>
              <label htmlFor="email" className={fieldLabel}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldInput}
              />
            </div>
            <div>
              <label htmlFor="phone" className={fieldLabel}>
                Phone <span className="ml-2 normal-case tracking-normal text-frond/75">optional</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldInput}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className={fieldLabel}>
                  Date <span aria-hidden="true">*</span>
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  required
                  className={fieldInput}
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className={fieldLabel}>
                  Time <span aria-hidden="true">*</span>
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  required
                  className={fieldInput}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="reason" className={fieldLabel}>
                What brings you here? <span className="ml-2 normal-case tracking-normal text-frond/75">optional</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={4}
                className={cn(fieldInput, 'resize-none')}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className={fieldLabel}>
                Anything else we should know? <span className="ml-2 normal-case tracking-normal text-frond/75">optional</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className={cn(fieldInput, 'resize-none')}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-3 border border-frond bg-frond px-6 py-3 text-sm uppercase tracking-[0.18em] text-powder transition-colors hover:bg-stem disabled:opacity-60 focus-visible:bg-stem focus-visible:outline-none"
            >
              {isPending ? 'Sending…' : 'Request a session'}
            </button>
            <p
              id="booking-status"
              role={state?.ok === false ? 'alert' : 'status'}
              className={cn(
                'text-sm',
                state?.ok === true && 'text-eyebrow',
                state?.ok === false && 'text-destructive',
              )}
            >
              {state?.ok === true && state.message}
              {state?.ok === false && state.error}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookingForm
