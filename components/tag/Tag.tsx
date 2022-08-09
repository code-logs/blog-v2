import Link from 'next/link'
import styles from './Tag.module.scss'

export interface TagProps {
  tag: string
  count?: number
}

const Tag = (props: TagProps) => (
  <Link href={`/posts/1?query=${encodeURIComponent(props.tag)}`}>
    <a>
      <span className={`clickable ${styles.tag}`}>
        {props.tag} {props.count && props.count}
      </span>
    </a>
  </Link>
)

export default Tag
