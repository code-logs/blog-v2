import Link from 'next/link'
import styles from './MarkedAnchor.module.scss'

export interface MarkedAnchorProps {
  display: string
  href: string
  matched: boolean
}

const MarkedAnchor = (props: MarkedAnchorProps) => (
  <Link href={props.href}>
    <a className={props.matched ? `${styles.matched} ${styles.anchor}` : styles.anchor}>{props.display}</a>
  </Link>
)

export default MarkedAnchor
