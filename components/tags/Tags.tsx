import Tag from '../tag/Tag'
import { TagWithCount } from '../tag-indexer/TagIndexer'
import styles from './Tags.module.scss'

export interface TagsProps {
  tags: (string | TagWithCount)[]
}

const Tags = (props: TagsProps) => {
  return (
    <ul className={styles.tags}>
      {props.tags.map((tag, idx) => (
        <li key={idx}>
          {typeof tag === 'string' ? (
            <Tag tag={tag} />
          ) : (
            <Tag tag={tag.tag} count={tag.count} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Tags
