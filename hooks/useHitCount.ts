import { useEffect, useState } from 'react'

const useHitCount = (pathname: string) => {
  const [hitCount, setHitCount] = useState('')

  useEffect(() => {
    if (!pathname) return

    const fetchAPI = async () => {
      const apiURL = new URL(process.env.NEXT_PUBLIC_HIT_COUNT_API || 'http://localhost:8080/hit_count')
      apiURL.search = `pathname=${pathname}`

      const response = await fetch(apiURL.href, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })

      if (!response.ok) throw new Error(response.statusText)
      const { count } = (await response.json())
      setHitCount(count)
    }

    fetchAPI()
  }, [pathname])

  return hitCount
}

export default useHitCount
