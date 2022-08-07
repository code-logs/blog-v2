import path from 'path'
import blogConfig from '../config/blog.config'
import { Post } from '../config/posts.config'

class PostUtil {
  public static normalizeTitle(title: string) {
    return title.replace(/\s/g, '-').toLowerCase()
  }

  public static getMarkdownFilePath(post: Post) {
    return path.join('../posts', post.category, post.fileName)
  }

  public static buildLinkURLByTitle(title: string) {
    return `${blogConfig.baseURL}/${encodeURIComponent(this.normalizeTitle(title))}`
  }
}

export default PostUtil
