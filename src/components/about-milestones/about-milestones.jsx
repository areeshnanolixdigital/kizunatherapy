import Image from 'next/image'

import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
import { MILESTONES } from '@/constants/milestones'

const AboutMilestones = () => {
  return (
    <section aria-labelledby="milestones-heading" className="bg-powder">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <SectionEyebrow>Our milestones</SectionEyebrow>
          <h2
            id="milestones-heading"
            className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
          >
            Small steps, building toward something steady.
          </h2>
        </div>

        <ol className="mt-16 lg:mt-20">
          {MILESTONES.map((milestone, index) => (
            <li
              key={milestone.title}
              className="grid grid-cols-1 gap-x-12 gap-y-6 border-t border-frond/15 py-10 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr_180px] sm:items-start"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-eyebrow">
                {milestone.when}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl">
                  <span className="mr-3 font-serif text-base font-light text-stone">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {milestone.title}
                </h3>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-frond">
                  {milestone.body}
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand sm:w-44">
                <Image
                  src={milestone.photo}
                  alt={`Photo from ${milestone.title} — ${milestone.when}`}
                  fill
                  sizes="(min-width: 640px) 180px, 100vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default AboutMilestones
