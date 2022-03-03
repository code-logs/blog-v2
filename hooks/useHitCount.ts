import { useEffect } from 'react'

const useHitCount = () => {
  useEffect(() => {
    const hitCount = async () => {
      await fetch('https://simple-hit-counter.herokuapp.com/hit_count', {
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
