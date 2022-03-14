import { Categories } from '../../config/posts.config'
import styles from './CategoryPostGroup.module.scss'
import postsDatabase from '../../database/post-database'
import PostUtil from '../../utils/PostUtil'

export interface CategoryPostGroupProps {
  category: Categories
}

const CategoryPostGroup = ({ category }: CategoryPostGroupProps) => {
  const posts = postsDatabase.findByCategory(category)
  const recentPost = posts.splice(0, 5)

  return (
    <>
      <dl className={styles.container}>
        {recentPost.map((post) => (
          <a key={post.fileName} href={PostUtil.buildLinkURLByTitle(post.title)}>
            <dt>
              <h3>{post.title}</h3>
            </dt>
            <dd>{post.description}</dd>
          </a>
        ))}
      </dl>

      {!!posts.length && (
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
