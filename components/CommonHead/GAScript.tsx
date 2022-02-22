
export interface GAScriptProps {
  gaID: string
}

const GAScript = (props: GAScriptProps) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${props.gaID}`}
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${props.gaID}');
          `,
        }}
      ></script>
    </>
  )
}

export default GAScript
