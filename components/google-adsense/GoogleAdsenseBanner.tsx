import { useEffect } from 'react'

export interface GoogleAdsenseBannerProps {
  adClient: string
  adSlot: string
}

declare global {
  interface Window {
    adsbygoogle: { [key: string]: any }
  }
}

const GoogleAdsenseBanner = (props: GoogleAdsenseBannerProps) => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={props.adClient}
      data-ad-slot={props.adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      onLoad={() => console.log('loaded')}
    ></ins>
  )
}

export default GoogleAdsenseBanner
