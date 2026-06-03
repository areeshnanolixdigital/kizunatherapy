import { Plus } from 'lucide-react'

import Reveal from '@/components/reveal/reveal'
import { FAQS } from '@/constants/faqs'

const HomeFaq = () => {
  return (
    <section aria-labelledby="faq-heading" className="bg-powder">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-eyebrow">
              Frequently asked
            </p>
            <h2
              id="faq-heading"
              className="mt-6 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
            >
              Questions, before we begin.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-frond">
              A few of the questions we hear most often. If yours isn&apos;t here, reach
              out — we&apos;d rather you ask than wonder.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-frond/15">
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-frond/15 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left text-lg text-frond marker:hidden focus-visible:outline-none focus-visible:bg-sand/40 sm:text-xl">
                <span className="font-serif">{item.question}</span>
                <Plus
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-eyebrow transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="max-w-prose pb-7 text-base leading-relaxed text-frond">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
