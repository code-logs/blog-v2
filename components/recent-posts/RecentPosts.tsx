import { Post } from '../../config/posts.config'
import PostCard from '../post-card/PostCard'
import TitleWithCount from '../title-with-count/TitleWithCount'

export interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts = (props: RecentPostsProps) => {
  return (
    <section>
      <TitleWithCount level={2} count={props.posts.length} title="Recent posts" />

      {props.posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </section>
  )
}

export default RecentPosts
