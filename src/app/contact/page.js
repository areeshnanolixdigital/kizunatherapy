import ContactForm from '@/components/contact-form/contact-form'
import PageHero from '@/components/page-hero/page-hero'
import { CONTACT } from '@/constants/nav'

export const metadata = {
  title: 'Contact Us',
  description:
    'Ready to start your journey? Reach out with questions or to book a session. Our team will be in touch.',
}

const ContactPage = () => {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Get in touch with us."
        italic="touch"
        subtitle="Ready to start your journey toward emotional well-being? Whether you have questions or are ready to book a session, our team is here. Reach out — and we will take the first step together."
      />

      <section aria-labelledby="contact-details" className="bg-powder">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
            <aside className="md:col-span-5">
              <h2
                id="contact-details"
                className="text-3xl leading-[1.15] sm:text-4xl"
              >
                We&apos;d love to{' '}
                <em className="font-light italic text-stem">hear from you</em>.
              </h2>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-stone">
                    Our address
                  </dt>
                  <dd className="mt-3 text-base text-frond/85">{CONTACT.address}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-stone">
                    Message us
                  </dt>
                  <dd className="mt-3 text-base text-frond/85">
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-stone underline-offset-4 transition-colors hover:text-stem hover:decoration-stem"
                    >
                      {CONTACT.phone}
                    </a>
                    <span className="ml-2 text-frond/60">(WhatsApp only)</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-stone">
                    Email
                  </dt>
                  <dd className="mt-3 text-base text-frond/85">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="underline decoration-stone underline-offset-4 transition-colors hover:text-stem hover:decoration-stem"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
