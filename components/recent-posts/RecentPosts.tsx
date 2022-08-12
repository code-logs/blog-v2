import { Post } from '../../config/posts.config'
import PostCardList from '../post-card-list/PostCardList'
import TitleWithCount from '../title-with-count/TitleWithCount'

export interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section>
      <TitleWithCount level={2} count={posts.length} title="Recent posts" />

      <PostCardList posts={posts} />
    </section>
  )
}

export default RecentPosts
