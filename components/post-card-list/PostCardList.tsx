import { Post } from '../../config/posts.config'
import PostCard, { PostCardProps } from '../post-card/PostCard'
import styles from './PostCardList.module.scss'

export interface PostCardListProps {
  titleLevel?: PostCardProps['titleLevel']
  posts: Post[]
}

const PostCardList = ({ titleLevel, posts }: PostCardListProps) =>
  Boolean(posts.length) ? (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard titleLevel={titleLevel} post={post} />
        </li>
      ))}
    </ul>
  ) : (
    <></>
  )

export default PostCardList
