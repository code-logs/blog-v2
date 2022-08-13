import styles from './Tag.module.scss'

export interface TagProps {
  tag: string
  count?: number
}

const Tag = (props: TagProps) => (
  <a href={`/posts/1?query=${encodeURIComponent(props.tag)}`}>
    <span className={`clickable ${styles.tag}`}>
      {props.tag} {props.count && props.count}
    </span>
  </a>
)

export default Tag
