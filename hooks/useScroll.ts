import { useEffect } from 'react'

export default function useScroll(handler: (event: Event) => void) {
  useEffect(() => {
    window.addEventListener('scroll', handler)
  }, [handler])

  return () => window.removeEventListener('scroll', handler)
}
