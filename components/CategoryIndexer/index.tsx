import { useEffect, useState } from 'react'
import { CATEGORIES } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import style from './style.module.scss'

export interface CategoryIndexerProps {
  categories: string[]
}

export default function CategoryIndexer({ categories }: CategoryIndexerProps) {
  const [newCategories, setNewCategories] = useState<string[]>([])

  useEffect(() => {
    setNewCategories(categories.filter((category) => postsDatabase.hasNewByCategory(category)))
  }, [categories])

  return (
    <section className={style.container}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <a href={`/categories/${encodeURIComponent(category)}/1`}>
              {newCategories.includes(category) && <span className={style.newTag}>New</span>}
              <span className={style.category}>{(CATEGORIES as any)[category]}</span>
              <span className={style.count}>
                <span>{postsDatabase.countByCategory(category)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
