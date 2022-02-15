import blogConfig from '../../config/blog.config'
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
            <a href={`${blogConfig.baseURL}/categories/${category}`}>
              {postsDatabase.hasNewByCategory(category) && (
                <span className={styles.newTag}>New</span>
              )}
              <span className={styles.category}>{category}</span>
              <span className={styles.count}>
                <span>{postsDatabase.countByCategory(category)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoryIndexer
