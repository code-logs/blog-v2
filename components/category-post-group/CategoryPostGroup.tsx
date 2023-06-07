import { useEffect, useState } from 'react'
import { Post } from '../../config/posts.config'
import PostUtil from '../../utils/PostUtil'
import styles from './CategoryPostGroup.module.scss'
import { Project } from '../../config/projects.config'

export interface CategoryPostGroupProps {
  posts: (Post | Project)[]
}

export default function CategoryPostGroup({ posts }: CategoryPostGroupProps) {
  const [recentPosts, setRecentPosts] = useState<(Post | Project)[]>([])
  const [remainPosts, setRemainPosts] = useState<(Post | Project)[]>([])

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

      {!!remainPosts.length && (
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
