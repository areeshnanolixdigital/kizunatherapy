import { Suspense } from 'react'

import BookingForm from '@/components/booking-form/booking-form'
import PageHero from '@/components/page-hero/page-hero'

export const metadata = {
  title: 'Book a Session',
  description:
    'Request a session with one of our therapists. Choose who you would like to work with and pick a date and time that works for you.',
}

const BookingFormFallback = () => (
  <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
    <p className="text-sm text-frond">Loading booking form…</p>
  </section>
)

const BookSessionPage = () => {
  return (
    <>
      <PageHero
        kicker="Book a session"
        title="Take the first step."
        subtitle="Choose a therapist, share what you are hoping for, and pick a time. We will be in touch within one business day to confirm."
      />
      <Suspense fallback={<BookingFormFallback />}>
        <BookingForm />
      </Suspense>
    </>
  )
}

export default BookSessionPage
