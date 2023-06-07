import { ArticleType } from '../../types'
import { TagWithCount } from '../tag-indexer/TagIndexer'
import Tag from '../tag/Tag'
import style from './style.module.scss'

export interface TagsProps {
  articleType: ArticleType
  tags: (string | TagWithCount)[]
}

export default function Tags({ articleType, tags }: TagsProps) {
  return (
    <ul className={style.tags}>
      {tags.map((tag, idx) => (
        <li key={idx}>
          {typeof tag === 'string' ? <Tag articleType={articleType} tag={tag} /> : <Tag articleType={articleType} tag={tag.tag} count={tag.count} />}
        </li>
      ))}
    </ul>
  )
}
