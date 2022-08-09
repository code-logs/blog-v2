import { useEffect, useState } from 'react'
import { Post } from '../../config/posts.config'
import PostUtil from '../../utils/PostUtil'
import styles from './CategoryPostGroup.module.scss'

export interface CategoryPostGroupProps {
  posts: Post[]
}

const CategoryPostGroup = ({ posts }: CategoryPostGroupProps) => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([])
  const [remainPosts, setRemainPosts] = useState<Post[]>([])

  useEffect(() => {
    const recentPostLimit = 3
    const copied = [...posts]
    setRecentPosts(copied.slice(0, recentPostLimit))
    setRemainPosts(copied.slice(recentPostLimit))
  }, [posts])

  return (
    <>
      <ul className={styles.container}>
        {recentPosts.map((post) => (
          <li key={post.fileName}>
            <h3>{post.title}</h3>
            <a href={PostUtil.buildLinkURLByTitle(post.title)}>{post.description}</a>
          </li>
        ))}
      </ul>

      {Boolean(remainPosts.length) && (
        <details className={styles.details}>
          <summary>더보기</summary>
          <ul className={styles.container}>
            {posts.map((post) => (
              <li key={post.fileName}>
                <h3>{post.title}</h3>
                <a href={PostUtil.buildLinkURLByTitle(post.title)}>{post.description}</a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </>
  )
}

export default CategoryPostGroup
