const PWAScript = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
      }
    `,
        }}
      ></script>

      <link rel="manifest" href="/manifest.json" />
    </>
  )
}

export default PWAScript
