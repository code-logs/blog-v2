import Tags from '../tags'
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
        <a href="tags" className={styles.seeMore}>
          <span>See more tags</span>
        </a>
      </h2>

      <div className={styles.container}>
        <Tags tags={tagsWithCount.slice(0, limit)} />
      </div>
    </section>
  )
}

export default TagIndexer
