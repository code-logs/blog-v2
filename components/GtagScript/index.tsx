import Script from 'next/script'

export interface GTagScriptProps {
  gaID: string
}

export default function GTagScript({ gaID }: GTagScriptProps) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`} strategy="lazyOnload" />
      <Script id="gtag-script">
        {`
          // Load Gtag script
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaID}');
        `}
      </Script>
    </>
  )
}
