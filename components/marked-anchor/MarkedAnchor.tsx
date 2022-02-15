import { useEffect, useState } from 'react'

import styles from './MarkedAnchor.module.scss'

export interface MarkedAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  display: string
}

const MarkedAnchor = ({ display, ...rest }: MarkedAnchorProps) => {
  const [matched, setMatched] = useState(false)

  useEffect(() => {
    setMatched(location.pathname === rest.href)
  }, [rest.href])

  return (
    <a className={matched ? styles.matched : ''} {...rest}>
      {display}
    </a>
  )
}

export default MarkedAnchor
