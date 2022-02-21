import { TagWithCount } from '../tag-indexer/TagIndexer'
import Tags from '../tags/Tags'
import styles from './TagList.module.scss'

export type TagsByIndexes = { [tag: string]: TagWithCount[] }

export interface TagListProps {
  indexGroups: string[][]
  tagsByIndexes: TagsByIndexes
}

const TagList = (props: TagListProps) => {
  return (
    <ol className={styles.container}>
      {props.indexGroups.map((indexGroup, idx) => (
        <ol key={idx}>
          {indexGroup.map((index, idx) => (
            <li key={idx}>
              <h2 id={index}>{index}</h2>
              <Tags tags={props.tagsByIndexes[index]} />
            </li>
          ))}
        </ol>
      ))}
    </ol>
  )
}

export default TagList
