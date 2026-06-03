'use client'

import { useActionState, useEffect } from 'react'

import { submitContact } from '@/app/actions/contact'
import { cn } from '@/lib/utils'

const initialState = { ok: null, error: '', message: '' }

const fieldLabel = 'block text-xs uppercase tracking-[0.18em] text-stone'
const fieldInput =
  'mt-3 block w-full border-b border-frond/25 bg-transparent py-2 text-base text-frond placeholder-frond/40 focus:border-stem focus:outline-none'

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  useEffect(() => {
    if (state?.ok) {
      const el = document.getElementById('contact-status')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={fieldLabel}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldInput}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={fieldLabel}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldInput}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="contact-phone" className={fieldLabel}>
            Phone <span className="ml-2 normal-case tracking-normal text-frond/50">optional</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldInput}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="contact-message" className={fieldLabel}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            className={cn(fieldInput, 'resize-none')}
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-3 border border-frond bg-frond px-6 py-3 text-sm uppercase tracking-[0.18em] text-powder transition-colors hover:bg-stem disabled:opacity-60 focus-visible:bg-stem focus-visible:outline-none"
        >
          {isPending ? 'Sending…' : 'Send message'}
        </button>
        <p
          id="contact-status"
          role={state?.ok === false ? 'alert' : 'status'}
          className={cn(
            'text-sm',
            state?.ok === true && 'text-stem',
            state?.ok === false && 'text-destructive',
          )}
        >
          {state?.ok === true && state.message}
          {state?.ok === false && state.error}
        </p>
      </div>
    </form>
  )
}

export default ContactForm
