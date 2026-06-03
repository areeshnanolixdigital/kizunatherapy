import { MARQUEE_TAGS } from '@/constants/services'

const SEPARATOR = '✦'

const HomeMarquee = () => {
  const items = [...MARQUEE_TAGS, ...MARQUEE_TAGS]

  return (
    <section
      aria-label="What we practice"
      className="overflow-hidden border-y border-frond/10 bg-powder py-10"
    >
      <div
        className="flex w-max motion-safe:animate-[marquee_60s_linear_infinite] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-3"
        aria-hidden="true"
      >
        {items.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="inline-flex shrink-0 items-center gap-10 px-10 font-serif text-2xl font-light tracking-tight text-eyebrow sm:text-3xl"
          >
            {tag}
            <span aria-hidden="true" className="text-eyebrow">
              {SEPARATOR}
            </span>
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {MARQUEE_TAGS.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  )
}

export default HomeMarquee
