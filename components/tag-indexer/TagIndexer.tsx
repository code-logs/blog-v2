import Tag from '../tag/Tag'
import Tags from '../tags/Tags'
import styles from './TagIndexer.module.scss'

export interface TagWithCount {
  tag: string
  count: number
}

export interface TagIndexerProps {
  tagsWithCount: TagWithCount[]
  limit?: number
}

const TagIndexer = (props: TagIndexerProps) => {
  const { tagsWithCount, limit = 10 } = props
  tagsWithCount.sort((tagA, tagB) => tagB.count - tagA.count)

  return (
    <section>
      <h2>
        Tags
        <a className={styles.seeMore} href="/tags">
          See more
        </a>
      </h2>

      <div className={styles.container}>
        <Tags tags={tagsWithCount.slice(0, limit)} />
      </div>
    </section>
  )
}

export default TagIndexer
