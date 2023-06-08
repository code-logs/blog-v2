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

export default function GoogleAdsenseBanner({ adClient, adSlot }: GoogleAdsenseBannerProps) {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}
