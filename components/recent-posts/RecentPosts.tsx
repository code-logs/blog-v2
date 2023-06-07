import { Post } from '../../config/posts.config'
import CardList from '../card-list/CardList'
import TitleWithCount from '../title-with-count/TitleWithCount'

export interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section>
      <TitleWithCount level={2} count={posts.length} title="Recent posts" />

      <CardList items={posts} />
    </section>
  )
}

export default RecentPosts
