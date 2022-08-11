import { useEffect, useState } from 'react'

const useIsMobile = (initIsMobile: boolean) => {
  const [isMobile, setIsMobile] = useState<boolean>(initIsMobile)

  useEffect(() => {
    setIsMobile(window.screen.width <= 800)
  }, [])

  return isMobile
}

export default useIsMobile