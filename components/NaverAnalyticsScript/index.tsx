import Script from 'next/script'

export interface NaverAnalyticsScriptProps {
  issuedId: string
}

export default function NaverAnalyticsScript({ issuedId }: NaverAnalyticsScriptProps) {
  return (
    <>
      <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
      <Script id="naver-analytics-script" type="text/javascript">
        {`
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "${issuedId}";
          if(window.wcs) {
            wcs_do();
          }
        `}
      </Script>
    </>
  )
}
