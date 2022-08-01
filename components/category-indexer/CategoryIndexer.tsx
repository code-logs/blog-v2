import Link from 'next/link'
import blogConfig from '../../config/blog.config'
import { CATEGORIES } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import styles from './CategoryIndexer.module.scss'

export interface CategoryIndexerProps {
  categories: string[]
}

const CategoryIndexer = (props: CategoryIndexerProps) => {
  return (
    <section className={styles.container}>
      <h2>Categories</h2>
      <ul>
        {props.categories.map((category, idx) => (
          <li key={idx}>
            <Link href={`${blogConfig.baseURL}/categories/${encodeURI(category)}/1`}>
              <a>
                {postsDatabase.hasNewByCategory(category) && <span className={styles.newTag}>New</span>}
                <span className={styles.category}>{(CATEGORIES as any)[category]}</span>
                <span className={styles.count}>
                  <span>{postsDatabase.countByCategory(category)}</span>
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoryIndexer
