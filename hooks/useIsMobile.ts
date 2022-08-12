import { useEffect, useState } from 'react'

const useIsMobile = (initIsMobile: boolean) => {
  const [isMobile, setIsMobile] = useState<boolean>(initIsMobile)

  useEffect(() => {
    setIsMobile(document.body.clientWidth <= 800)
  }, [])

  return isMobile
}

export default useIsMobile