import Script from 'next/script'

export interface SWScriptProps {
  serviceWorkerPath?: string
}

export default function SWScript(props: SWScriptProps) {
  const serviceWorkerPath = props.serviceWorkerPath || '/service-worker.js'

  return (
    <Script id="service-worker-script" strategy="lazyOnload">
      {`// Load service-worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('${serviceWorkerPath}')
      }`}
    </Script>
  )
}
