import PostCard from '../post-card/PostCard'
import TitleWithCount from '../title-with-count/TitleWithCount'
import styles from './RecentPosts.module.scss'

export interface PostRef {
  title: string
  url: string
}

export interface Post {
  title: string
  fileName: string
  description: string
  category: string
  published: boolean
  publishedAt: string
  thumbnailName: string
  tags: string[]
  references?: PostRef[]
}

export interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts = (props: RecentPostsProps) => {
  return (
    <section className={styles.container}>
      <TitleWithCount
        level={2}
        count={props.posts.length}
        title="Recent posts"
      />

      {props.posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </section>
  )
}

export default RecentPosts
