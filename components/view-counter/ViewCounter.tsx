import { Post } from '../../config/posts.config'
import useHitCount from '../../hooks/useHitCount'
import PostUtil from '../../utils/PostUtil'

export interface ViewCounterProps {
  post: Post
}

const ViewCounter = (props: ViewCounterProps) => {
  const { post } = props
  const hitCount = useHitCount(PostUtil.normalizeTitle(post.title))

  return <>{hitCount}</>
}

export default ViewCounter
