import { Post } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import PostUtil from '../../utils/PostUtil'
import styles from './PostSeriesLink.module.scss'

export interface PostSeriesLinkProps {
  post: Post
}

const PostSeriesLink = ({ post }: PostSeriesLinkProps) => {
  return (
    <dl className={styles.container}>
      {post.series?.prevPostTitle && (
        <a href={PostUtil.buildLinkURLByTitle(post.series.prevPostTitle)}>
          <dt>
            <span>이전글 - </span>
            <h3>{post.series.prevPostTitle}</h3>
          </dt>
          <dd>{postsDatabase.findByTitle(post.series?.prevPostTitle)?.description || ''}</dd>
        </a>
      )}

      {post.series?.nextPostTitle && (
        <a href={PostUtil.buildLinkURLByTitle(post.series.nextPostTitle)}>
          <dt>
            <span>다음글 - </span>
            <h3>{post.series.nextPostTitle}</h3>
          </dt>
          <dd>{postsDatabase.findByTitle(post.series?.nextPostTitle)?.description || ''}</dd>
        </a>
      )}
    </dl>
  )
}

export default PostSeriesLink
