import { Post } from '../../config/posts.config'
import CardList from '../CardList'
import TitleWithCount from '../TitleWithCount'

export interface RecentPostsProps {
  posts: Post[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section>
      <TitleWithCount level={2} count={posts.length} title="Recent posts" />

      <CardList articleType="post" items={posts} />
    </section>
  )
}
