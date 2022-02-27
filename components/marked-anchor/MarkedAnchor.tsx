import { useEffect, useState } from 'react'

import styles from './MarkedAnchor.module.scss'

export interface MarkedAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  display: string
}

const MarkedAnchor = ({ display, ...rest }: MarkedAnchorProps) => {
  const [matched, setMatched] = useState(false)

  useEffect(() => {
    const isMatched = location.pathname.split('/')[1] === new URL(rest.href!).pathname.split('/')[1]
    setMatched(isMatched)
  }, [rest.href])

  return (
    <a className={matched ? `${styles.matched} ${styles.anchor}` : styles.anchor} {...rest}>
      {display}
    </a>
  )
}

export default MarkedAnchor
