import SectionEyebrow from '@/components/section-eyebrow/section-eyebrow'
import { VALUES } from '@/constants/milestones'

const AboutValues = () => {
  return (
    <section aria-labelledby="values-heading" className="bg-frond text-powder">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <SectionEyebrow tone="light">Vision &amp; values</SectionEyebrow>
            <h2
              id="values-heading"
              className="mt-7 text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.25rem]"
            >
              Therapy that is accessible, compassionate, and culturally
              sensitive.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-powder/80">
              A community where emotional well-being and personal growth are
              prioritized — for everyone.
            </p>
          </div>

          <ol className="md:col-span-7 lg:col-span-8">
            {VALUES.map((value, index) => (
              <li
                key={value.title}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 border-t border-sand/15 py-8 first:border-t-0 first:pt-0 sm:gap-x-12"
              >
                <span className="font-serif text-2xl font-light text-stone sm:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">{value.title}</h3>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-powder/80">
                    {value.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default AboutValues
