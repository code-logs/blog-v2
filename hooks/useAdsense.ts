import { useEffect } from 'react'
import blogConfig from '../config/blog.config'

const useAdsense = () => {
  useEffect(() => {
    if (document.head) {
      const script = document.createElement('script')
      script.async = true
      script.src = blogConfig.adsenseURL
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  }, [])
}

export default useAdsense
