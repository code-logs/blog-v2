import Link from 'next/link'
import { CATEGORIES, Post } from '../../config/posts.config'
import useHumanReadableDate from '../../hooks/useHumanReadableDate'
import PathUtil from '../../utils/PathUtil'
import PostUtil from '../../utils/PostUtil'
import Tags from '../tags/Tags'
import styles from './PostCard.module.scss'

export interface PostCardProps {
  titleLevel?: 1 | 2 | 3
  post: Post
}

const PostCard = ({ titleLevel = 3, post }: PostCardProps) => {
  const publishedAt = useHumanReadableDate(new Date(post.publishedAt))

  return (
    <article className={`clickable ${styles.card}`}>
      <Link href={PostUtil.buildLinkURLByTitle(post.title)}>
        <a className={styles.title}>
          {titleLevel === 1 && <h1>{post.title}</h1>}
          {titleLevel === 2 && <h2>{post.title}</h2>}
          {titleLevel === 3 && <h3>{post.title}</h3>}
        </a>
      </Link>

      <span className={styles.category}>{(CATEGORIES as any)[post.category]}</span>

      <span className={styles.publishedAt}>{publishedAt}</span>

      <Link href={PostUtil.buildLinkURLByTitle(post.title)}>
        <a className={styles.description}>
          <p>{post.description}</p>
        </a>
      </Link>

      {post.thumbnailName && (
        <div className={styles.thumbnail}>
          <Link href={PostUtil.buildLinkURLByTitle(post.title)}>
            <a>
              <img className={'thumbnail'} src={PathUtil.buildImagePath(post.thumbnailName)} alt={post.description} />
            </a>
          </Link>
        </div>
      )}

      <section className={styles.tags}>
        <Tags tags={post.tags} />
      </section>
    </article>
  )
}

export default PostCard
