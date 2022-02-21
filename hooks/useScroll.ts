import { useEffect } from 'react'

const useScroll = (handler: (event: Event) => void) => {
  useEffect(() => {
    window.addEventListener('scroll', handler)
  }, [handler])

  return () => window.removeEventListener('scroll', handler)
}

export default useScroll
