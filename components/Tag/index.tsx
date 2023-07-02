import { useMemo } from 'react'
import { ArticleType } from '../../types'
import style from './style.module.scss'

export interface TagProps {
  tag: string
  count?: number
  articleType: ArticleType
}

export default function Tag({ tag, count, articleType }: TagProps) {
  const link = useMemo(() => {
    if (articleType === 'post') {
      return `/posts/1?query=${encodeURIComponent(tag)}`
    } else {
      return `/projects/1?query=${encodeURIComponent(tag)}`
    }
  }, [articleType, tag])

  return (
    <a href={link}>
      <span className={`clickable ${style.tag}`}>
        {tag} {count && count}
      </span>
    </a>
  )
}