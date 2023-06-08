import Tags from '../Tags'
import style from './style.module.scss'

export interface TagWithCount {
  tag: string
  count: number
}

export interface TagIndexerProps {
  tagsWithCount: TagWithCount[]
  limit?: number
}

export default function TagIndexer({ tagsWithCount, limit = 10 }: TagIndexerProps) {
  tagsWithCount.sort((tagA, tagB) => tagB.count - tagA.count)

  return (
    <section>
      <h2>
        Tags
        <a href="tags" className={style.seeMore}>
          <span>See more tags</span>
        </a>
      </h2>

      <div className={style.container}>
        <Tags articleType="post" tags={tagsWithCount.slice(0, limit)} />
      </div>
    </section>
  )
}
