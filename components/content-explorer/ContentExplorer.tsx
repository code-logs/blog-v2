import { useEffect } from "react"

const ContentExplorer = () => {
  useEffect(() => {
    window.onscroll = () => {
      console.log('test')
    }
  }, [])
}

export default ContentExplorer