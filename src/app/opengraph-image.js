import { ImageResponse } from 'next/og'

import { SITE_NAME } from '@/constants/site'

export const alt = `${SITE_NAME} — Care that meets you where you are`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const OpengraphImage = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: 80,
          background: '#2B423E',
          color: '#F4F1EF',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#C1A280',
            fontSize: 24,
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          <span>Kizuna Therapy</span>
          <span style={{ color: '#E8E0CD', fontSize: 22 }}>kizunatherapy.com</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, color: '#F4F1EF' }}>
            Care that meets you
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              fontStyle: 'italic',
              color: '#99BCA3',
              fontWeight: 300,
            }}
          >
            where you are.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#E8E0CD',
            opacity: 0.85,
            fontFamily: 'sans-serif',
            letterSpacing: 0.5,
          }}
        >
          Multilingual therapy. Culturally rooted. Online and in person.
        </div>
      </div>
    ),
    size,
  )
}

export default OpengraphImage
