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
      <dl className={styles.container}>
        {recentPosts.map((post) => (
          <a key={post.fileName} href={PostUtil.buildLinkURLByTitle(post.title)}>
            <dt>
              <h3>{post.title}</h3>
            </dt>
            <dd>{post.description}</dd>
          </a>
        ))}
      </dl>

      {!!remainPosts.length && (
        <details className={styles.details}>
          <summary>더보기</summary>
          <dl className={styles.container}>
            {posts.map((post) => (
              <a key={post.fileName} href={PostUtil.buildLinkURLByTitle(post.title)}>
                <dt>
                  <h3>{post.title}</h3>
                </dt>
                <dd>{post.description}</dd>
              </a>
            ))}
          </dl>
        </details>
      )}
    </>
  )
}

export default CategoryPostGroup
