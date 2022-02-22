import Database from '.'
import { Post } from '../components/recent-posts/RecentPosts'
import PostUtil from '../utils/PostUtil'
import posts from '../config/posts.config'

class PostDatabase extends Database<Post> {
  constructor() {
    super(posts.filter((post) => post.published))
    this.sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
  }

  findByTitle(title: string) {
    return this.dataset.find(
      (post) => PostUtil.normalizeTitle(post.title) === title
    )
  }

  hasNewByCategory(category: string) {
    return Boolean(
      this.dataset
        .filter((post) => post.category === category)
        .find((post) => {
          const publishedDate = new Date(post.publishedAt)
          return (
            publishedDate.setDate(publishedDate.getDate() + 7) >= Date.now()
          )
        })
    )
  }

  countByCategory(category: string) {
    return this.dataset.filter((post) => post.category === category).length
  }

  countByTag(tag: string) {
    return this.dataset.filter((post) => post.tags.includes(tag)).length
  }

  query(condition: string, limit?: number, skip: number = 0) {
    const normalizedConditions = condition
      .split(/\s/)
      .map((cond) => cond.toLowerCase())

    const foundPosts = this.dataset.filter((post) => {
      return normalizedConditions.some((cond) => {
        return (
          post.title.indexOf(cond) >= 0 ||
          post.description.indexOf(cond) >= 0 ||
          post.category.indexOf(cond) >= 0 ||
          post.tags.join('').indexOf(cond) >= 0
        )
      })
    })

    if (limit !== undefined) return foundPosts.slice(skip, skip + limit)
    return foundPosts
  }

  findByNormalizedTitle(normalizedTitle: string) {
    return this.dataset.find((post) => {
      PostUtil.normalizeTitle(post.title) === normalizedTitle
    })
  }
}

const postsDatabase = new PostDatabase()

export default postsDatabase
