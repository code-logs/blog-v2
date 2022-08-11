import Script from 'next/script'

export interface NaverAnalyticsScriptProps {
  issuedId: string
}

const NaverAnalyticsScript = (props: NaverAnalyticsScriptProps) => {
  return (
    <>
      <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
      <Script id="naver-analytics-script" type="text/javascript">
        {`
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "${props.issuedId}";
          if(window.wcs) {
            wcs_do();
          }
        `}
      </Script>
    </>
  )
}

export default NaverAnalyticsScript
