import Link from 'next/link'
import blogConfig from '../../config/blog.config'
import styles from './Tag.module.scss'

export interface TagProps {
  tag: string
  count?: number
}

const Tag = (props: TagProps) => (
  <Link href={`${blogConfig.baseURL}/posts/1?query=${encodeURI(props.tag)}`}>
    <a>
      <span className={styles.tag}>
        {props.tag} {props.count && props.count}
      </span>
    </a>
  </Link>
)

export default Tag
