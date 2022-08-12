import Link from 'next/link'
import { Post } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import PostUtil from '../../utils/PostUtil'
import styles from './PostSeriesLink.module.scss'

export interface PostSeriesLinkProps {
  post: Post
}

const PostSeriesLink = ({ post }: PostSeriesLinkProps) => {
  return (
    <ol className={styles.container}>
      {post.series?.prevPostTitle && (
        <li>
          <h3>
            <span>이전글 - </span>
            {post.series.prevPostTitle}
          </h3>
          <Link href={PostUtil.buildLinkURLByTitle(post.series.prevPostTitle)}>
            <a>{postsDatabase.findByTitle(post.series?.prevPostTitle)?.description || ''}</a>
          </Link>
        </li>
      )}

      {post.series?.nextPostTitle && (
        <li>
          <h3>
            <span>다음글 - </span>
            {post.series.nextPostTitle}
          </h3>
          <Link href={PostUtil.buildLinkURLByTitle(post.series.nextPostTitle)}>
            <a>{postsDatabase.findByTitle(post.series?.nextPostTitle)?.description || ''}</a>
          </Link>
        </li>
      )}
    </ol>
  )
}

export default PostSeriesLink
