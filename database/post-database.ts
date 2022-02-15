import Database from '.'
import { Post } from '../components/recent-posts/RecentPosts'
import posts from './datasets/posts'

class PostDatabase extends Database<Post> {
  constructor() {
    super(posts)
    this.sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
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

  query(condition: string, limit?: number) {
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

    if(limit !== undefined) return foundPosts.slice(0, limit)
    return foundPosts
  }
}

const postsDatabase = new PostDatabase()

export default postsDatabase
