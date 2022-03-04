import { useEffect } from 'react'

const useHitCount = () => {
  useEffect(() => {
    const hitCount = async () => {
      await fetch(process.env.NEXT_PUBLIC_HIT_COUNT_API_HOST || 'http://localhost:8080/hit_count', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          pathname: location.pathname,
        }),
      })
    }

    hitCount()
  }, [])
}

export default useHitCount
