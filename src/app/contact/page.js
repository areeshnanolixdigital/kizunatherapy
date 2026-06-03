import ContactForm from '@/components/contact-form/contact-form'
import PageHero from '@/components/page-hero/page-hero'
import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
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
        subtitle="Ready to start your journey toward emotional well-being? Whether you have questions or are ready to book a session, our team is here. Reach out — and we will take the first step together."
      />

      <section aria-labelledby="contact-details" className="bg-powder">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
            <div className="md:col-span-5">
              <SectionEyebrow>Reach us</SectionEyebrow>
              <h2
                id="contact-details"
                className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl"
              >
                We&apos;d love to hear from you.
              </h2>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-eyebrow">
                    Our address
                  </dt>
                  <dd className="mt-3 text-base text-frond">{CONTACT.address}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-eyebrow">
                    Message us
                  </dt>
                  <dd className="mt-3 text-base text-frond">
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-stone underline-offset-4 transition-colors hover:text-eyebrow hover:decoration-stem"
                    >
                      {CONTACT.phone}
                    </a>
                    <span className="ml-2 text-frond">(WhatsApp only)</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-eyebrow">
                    Email
                  </dt>
                  <dd className="mt-3 text-base text-frond">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="underline decoration-stone underline-offset-4 transition-colors hover:text-eyebrow hover:decoration-stem"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

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
