'use client'

import { useEffect } from 'react'

import Cal, { getCalApi } from '@calcom/embed-react'

const CAL_LINK = 'areesh-khan/therapy-session-50-min'

const CalEmbed = () => {
  useEffect(() => {
    const initCal = async () => {
      const cal = await getCalApi()
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: { light: { 'cal-brand': '#2B423E' } },
      })
    }

    initCal()
  }, [])

  return (
    <Cal
      calLink={CAL_LINK}
      config={{ layout: 'month_view' }}
      className="min-h-[640px] w-full overflow-hidden rounded-sm"
    />
  )
}

export default CalEmbed
