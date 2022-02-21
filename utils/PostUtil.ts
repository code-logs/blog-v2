import { Post } from '../components/recent-posts/RecentPosts'
import path from 'path'

class PostUtil {
  public static normalizeTitle(title: string) {
    return title.replace(/\s/g, '-').toLowerCase()
  }

  public static getMarkdownFilePath(post: Post) {
    return path.join('../posts', post.category, post.fileName)
  }
}

export default PostUtil
