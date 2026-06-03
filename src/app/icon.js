import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

const Icon = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#2B423E',
          color: '#F4F1EF',
          fontFamily: 'serif',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        K
      </div>
    ),
    size,
  )
}

export default Icon
