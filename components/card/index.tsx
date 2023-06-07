import { useMemo } from 'react'
import { CATEGORIES, Post } from '../../config/posts.config'
import { Project } from '../../config/projects.config'
import { ArticleType } from '../../types'
import PathUtil from '../../utils/PathUtil'
import PostUtil from '../../utils/PostUtil'
import Tags from '../tags'
import style from './style.module.scss'

export interface PostCardProps {
  articleType: ArticleType
  titleLevel?: 1 | 2 | 3
  content: Post | Project
}

export default function Card({ articleType, titleLevel = 3, content }: PostCardProps) {
  const link = useMemo(() => {
    if (articleType === 'post') {
      return PostUtil.buildLinkURLByTitle(content.title)
    } else {
      return `/projects/${content.category}/${PostUtil.buildLinkURLByTitle(content.title)}`
    }
  }, [articleType, content])

  return (
    <article className={`clickable ${style.card}`}>
      <a href={link} className={style.title}>
        {titleLevel === 1 && <h1>{content.title}</h1>}
        {titleLevel === 2 && <h2>{content.title}</h2>}
        {titleLevel === 3 && <h3>{content.title}</h3>}
      </a>

      <span className={style.category}>{(CATEGORIES as any)[content.category]}</span>

      <span className={style.publishedAt}>{PostUtil.readablePublishedAt(content)}</span>

      <a href={link} className={style.description}>
        <p>{content.description}</p>
      </a>

      {content.thumbnailName && (
        <div className={style.thumbnail}>
          <a href={link}>
            <img src={PathUtil.buildImagePath(content.thumbnailName)} alt={content.description} width="400" height="300" />
          </a>
        </div>
      )}

      <section className={style.tags}>
        <Tags articleType={articleType} tags={content.tags} />
      </section>
    </article>
  )
}
