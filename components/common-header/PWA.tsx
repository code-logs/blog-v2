export interface PWAProps {
  themeColor: string
  appleTouchIconPath: string
}

const PWA = (props: PWAProps) => {
  return (
    <>
      <meta name="theme-color" content={props.themeColor} />
      <link rel="apple-touch-icon" href={props.appleTouchIconPath}></link>

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

export default PWA
