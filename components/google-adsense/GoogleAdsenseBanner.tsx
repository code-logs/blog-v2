import Script from 'next/script'
import { useEffect } from 'react'
import styles from './GoogleAdsenseBanner.module.scss'

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
    window.onload = () => {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
  }, [])

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={props.adClient}
        data-ad-slot={props.adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  )
}

export default GoogleAdsenseBanner
