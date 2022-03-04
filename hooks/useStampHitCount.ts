import { useEffect, useState } from 'react'

export interface HitCount {
  totalHitCount: number
  pageHitCount: number
  pathname: string
}

const useStampHitCount = (pathname: string) => {
  const [hitCount, setHitCount] = useState<HitCount>({ totalHitCount: 0, pageHitCount: 0, pathname: '' })

  useEffect(() => {
    if (!pathname) return

    const fetchAPI = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_HIT_COUNT_API || 'http://localhost:8080/hit_count', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ pathname }),
      })

      if (!response.ok) throw new Error(response.statusText)
      setHitCount(await response.json())
    }

    fetchAPI()
  }, [pathname])

  return hitCount
}

export default useStampHitCount
