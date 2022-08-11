import { useEffect } from 'react'
import blogConfig from '../config/blog.config'

const useAdsense = () => {
  useEffect(() => {
    if (document.head) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${blogConfig.googleAdsense.mainBannerAdSlot}`
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  }, [])
}

export default useAdsense
