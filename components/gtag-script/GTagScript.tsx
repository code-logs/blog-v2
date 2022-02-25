import Script from 'next/script'

export interface GTagScriptProps {
  gaID: string
}

const GTagScript = (props: GTagScriptProps) => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${props.gaID}`}></Script>
      <Script id="gtag-script">
        {`
          // Load Gtag script
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${props.gaID}');
        `}
      </Script>
    </>
  )
}

export default GTagScript
