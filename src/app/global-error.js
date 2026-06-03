'use client'

const GlobalError = ({ reset }) => {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          background: '#F4F1EF',
          color: '#2B423E',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: 560, padding: 24 }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#C1A280',
              margin: 0,
            }}
          >
            Critical error
          </p>
          <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: '20px 0' }}>
            Something went very wrong.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(43,66,62,0.8)' }}>
            The site could not render. Please refresh, or try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              padding: '12px 20px',
              border: '1px solid #2B423E',
              background: '#2B423E',
              color: '#F4F1EF',
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
