import { useEffect, useState } from 'react'
import { CATEGORIES } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import styles from './CategoryIndexer.module.scss'

export interface CategoryIndexerProps {
  categories: string[]
}

const CategoryIndexer = ({ categories }: CategoryIndexerProps) => {
  const [newCategories, setNewCategories] = useState<string[]>([])

  useEffect(() => {
    setNewCategories(categories.filter((category) => postsDatabase.hasNewByCategory(category)))
  }, [categories])

  return (
    <section className={styles.container}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <a href={`/categories/${encodeURIComponent(category)}/1`}>
              {newCategories.includes(category) && <span className={styles.newTag}>New</span>}
              <span className={styles.category}>{(CATEGORIES as any)[category]}</span>
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
