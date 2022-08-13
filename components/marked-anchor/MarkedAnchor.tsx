import styles from './MarkedAnchor.module.scss'

export interface MarkedAnchorProps {
  display: string
  href: string
  matched: boolean
}

const MarkedAnchor = (props: MarkedAnchorProps) => (
  <a href={props.href} className={props.matched ? `${styles.matched} ${styles.anchor}` : styles.anchor}>
    {props.display}
  </a>
)

export default MarkedAnchor
