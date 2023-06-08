import React from 'react'
import { Post } from '../../config/posts.config'
import { Project } from '../../config/projects.config'
import { ArticleType } from '../../types'
import MainAdsBanner from '../ads-banner/MainAdsBanner'
import Card, { PostCardProps } from '../Card'
import style from './style.module.scss'

export interface CardListProps {
  articleType: ArticleType
  titleLevel?: PostCardProps['titleLevel']
  items: (Post | Project)[]
  adsBlockCycle?: number
}

export default function CardList({ articleType, titleLevel, items, adsBlockCycle = 3 }: CardListProps) {
  if (!items.length) return <></>

  return (
    <ul className={style.list}>
      {items.map((post, idx) => (
        <React.Fragment key={post.title}>
          <li key={post.title}>
            <Card articleType={articleType} titleLevel={titleLevel} content={post} />
          </li>

          {adsBlockCycle !== 0 && (idx + 1) % adsBlockCycle === 0 && (
            <li key={`main-ads-${idx}`}>
              <MainAdsBanner />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}
