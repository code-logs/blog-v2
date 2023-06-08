import { TagWithCount } from '../TagIndexer'
import Tags from '../Tags'
import style from './style.module.scss'

export type TagsByIndexes = { [tag: string]: TagWithCount[] }

export interface TagListProps {
  indexGroups: string[][]
  tagsByIndexes: TagsByIndexes
}

export default function TagList({ indexGroups, tagsByIndexes }: TagListProps) {
  return (
    <ol className={style.container}>
      {indexGroups.map((indexGroup, idx) => (
        <ol key={idx}>
          {indexGroup
            .filter((index) => tagsByIndexes[index].length)
            .map((index, idx) => (
              <li key={idx}>
                <h2 id={index}>{index}</h2>
                <Tags articleType="post" tags={tagsByIndexes[index]} />
              </li>
            ))}
        </ol>
      ))}
    </ol>
  )
}
