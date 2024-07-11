function NoTargetMovie ({ message } : { message: string | undefined }) {
  return (
        <div role="alert" aria-live="assertive" style={{ padding: '1rem', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
            <h2 style={{ margin: '0 0 0.5rem 0' }}>Error</h2>
            <p style={{ margin: 0 }}>{message}</p>
        </div>
  )
}

export default NoTargetMovie
