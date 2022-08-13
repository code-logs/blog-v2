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
      <a href={PostUtil.buildLinkURLByTitle(post.title)} className={styles.title}>
        {titleLevel === 1 && <h1>{post.title}</h1>}
        {titleLevel === 2 && <h2>{post.title}</h2>}
        {titleLevel === 3 && <h3>{post.title}</h3>}
      </a>

      <span className={styles.category}>{(CATEGORIES as any)[post.category]}</span>

      <span className={styles.publishedAt}>{publishedAt}</span>

      <a href={PostUtil.buildLinkURLByTitle(post.title)} className={styles.description}>
        <p>{post.description}</p>
      </a>

      {post.thumbnailName && (
        <div className={styles.thumbnail}>
          <a href={PostUtil.buildLinkURLByTitle(post.title)}>
            <img src={PathUtil.buildImagePath(post.thumbnailName)} alt={post.description} width="400" height="300" />
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
