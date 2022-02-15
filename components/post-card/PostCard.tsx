import Image from 'next/image'
import { Post } from '../recent-posts/RecentPosts'
import Tags from '../tags/Tags'
import styles from './PostCard.module.scss'

export interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  const buildImagePath = (fileName: string) =>
    `/assets/images/${post.thumbnailName}`

  const formatHumanReadableDate = (date: Date | string) => {
    if (typeof date === 'string') date = new Date(date)

    const year = String(date.getFullYear()).slice(2)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}/${month}/${day}`
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>

      <span className={styles.category}>{post.category}</span>

      <span className={styles.publishedAt}>
        {formatHumanReadableDate(post.publishedAt)}
      </span>

      <p className={styles.description}>{post.description}</p>

      {post.thumbnailName && (
        <div className={styles.thumbnail}>
          <Image
            className={'thumbnail'}
            src={buildImagePath(post.thumbnailName)}
            alt={post.description}
            width="448"
            height="315"
          />
        </div>
      )}

      <section className={styles.tags}>
        <Tags tags={post.tags} />
      </section>
    </article>
  )
}

export default PostCard
