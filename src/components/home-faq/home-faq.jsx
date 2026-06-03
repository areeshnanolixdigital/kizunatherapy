'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import Reveal from '@/components/reveal/reveal'
import { FAQS } from '@/constants/faqs'
import { cn } from '@/lib/utils'

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? null : index))

  return (
    <section aria-labelledby="faq-heading" className="bg-powder">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-stone" />
              <p className="text-xs uppercase tracking-[0.3em] text-eyebrow">
                Frequently asked
              </p>
            </div>
            <h2
              id="faq-heading"
              className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
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
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div key={item.question} className="border-b border-frond/15">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left text-lg text-frond transition-colors hover:text-eyebrow focus-visible:text-eyebrow focus-visible:outline-none sm:text-xl"
                >
                  <span className="font-serif">{item.question}</span>
                  <span
                    className={cn(
                      'grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300',
                      isOpen
                        ? 'border-frond bg-frond text-powder'
                        : 'border-stone/60 text-eyebrow',
                    )}
                  >
                    <Plus
                      aria-hidden="true"
                      size={16}
                      strokeWidth={1.5}
                      className={cn(
                        'transition-transform duration-300 ease-out',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-prose pb-7 text-base leading-relaxed text-frond">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
