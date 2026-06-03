import CalEmbed from '@/components/cal-embed/cal-embed'
import PageHero from '@/components/page-hero/page-hero'

export const metadata = {
  title: 'Book a Session',
  description:
    'Choose a time that works for you and book your session online. You will receive a confirmation and reminders by email.',
}

const BookSessionPage = () => {
  return (
    <>
      <PageHero
        kicker="Book a session"
        title="Take the first step."
        subtitle="Pick a time that suits you and book instantly. You will receive a confirmation and reminders by email — and we will see you there."
      />
      <section aria-labelledby="booking-calendar" className="bg-powder">
        <div className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 lg:pb-32">
          <h2 id="booking-calendar" className="sr-only">
            Booking calendar
          </h2>
          <CalEmbed />
        </div>
      </section>
    </>
  )
}

export default BookSessionPage
