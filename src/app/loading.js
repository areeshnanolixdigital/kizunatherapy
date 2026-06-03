const Loading = () => {
  return (
    <section className="bg-powder" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="max-w-2xl space-y-6">
          <div className="h-3 w-24 animate-pulse bg-stone/30" />
          <div className="h-12 w-full animate-pulse bg-frond/10 sm:h-16" />
          <div className="h-12 w-4/5 animate-pulse bg-frond/10 sm:h-16" />
          <div className="h-5 w-full animate-pulse bg-frond/8 mt-8" />
          <div className="h-5 w-3/4 animate-pulse bg-frond/8" />
        </div>
        <span className="sr-only">Loading…</span>
      </div>
    </section>
  )
}

export default Loading
