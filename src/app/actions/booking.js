'use server'

const REQUIRED_FIELDS = ['name', 'email', 'preferredDate', 'preferredTime']

export const submitBooking = async (_prevState, formData) => {
  const payload = Object.fromEntries(formData)

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field])
  if (missing.length > 0) {
    return {
      ok: false,
      error: `Please fill in: ${missing.join(', ')}.`,
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, error: 'That email address does not look right.' }
  }

  // STUB: wire your delivery here (Resend, Postmark, SendGrid, or a server-side
  // fetch to /api). Until then, the submission is observed server-side only.
  console.info('[booking submission]', payload)

  return {
    ok: true,
    message: 'Thank you — your request is in. We will reply within one business day.',
  }
}
