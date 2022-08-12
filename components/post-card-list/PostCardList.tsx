import { Post } from '../../config/posts.config'
import MainAdsBanner from '../ads-banner/MainAdsBanner'
import PostCard, { PostCardProps } from '../post-card/PostCard'
import styles from './PostCardList.module.scss'

export interface PostCardListProps {
  titleLevel?: PostCardProps['titleLevel']
  posts: Post[]
  adsBlockCycle?: number
}

const PostCardList = ({ titleLevel, posts, adsBlockCycle = 2 }: PostCardListProps) =>
  Boolean(posts.length) ? (
    <ul className={styles.list}>
      {posts.map((post, idx) => (
        <>
          <li key={post.title}>
            <PostCard titleLevel={titleLevel} post={post} />
          </li>

          {adsBlockCycle !== 0 && (idx + 1) % adsBlockCycle === 0 && <MainAdsBanner />}
        </>
      ))}
    </ul>
  ) : (
    <></>
  )

export default PostCardList
