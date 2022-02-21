import Image from 'next/image'
import { Post } from '../recent-posts/RecentPosts'
import PostUtil from '../../utils/PostUtil'
import Tags from '../tags/Tags'
import blogConfig from '../../config/blog.config'
import styles from './PostCard.module.scss'
import PathUtil from '../../utils/PathUtil'

export interface PostCardProps {
  titleLevel?: 1 | 2 | 3
  post: Post
}

const PostCard = ({ titleLevel = 3, post }: PostCardProps) => {
  const formatHumanReadableDate = (date: Date | string) => {
    if (typeof date === 'string') date = new Date(date)

    const year = String(date.getFullYear()).slice(2)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}/${month}/${day}`
  }

  return (
    <article className={styles.card}>
      <a
        className={styles.title}
        href={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(post.title)}`}
      >
        {titleLevel === 1 && <h1>{post.title}</h1>}
        {titleLevel === 2 && <h2>{post.title}</h2>}
        {titleLevel === 3 && <h3>{post.title}</h3>}
      </a>

      <span className={styles.category}>{post.category}</span>

      <span className={styles.publishedAt}>
        {formatHumanReadableDate(post.publishedAt)}
      </span>

      <a
        className={styles.description}
        href={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(post.title)}`}
      >
        <p>{post.description}</p>
      </a>

      {post.thumbnailName && (
        <div className={styles.thumbnail}>
          <a
            href={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(
              post.title
            )}`}
          >
            <Image
              className={'thumbnail'}
              src={PathUtil.buildImagePath(post.thumbnailName)}
              alt={post.description}
              width="448"
              height="315"
            />
          </a>
        </div>
      )}

      <section className={styles.tags}>
        <Tags tags={post.tags} />
      </section>
    </article>
  )
}

export default PostCard
