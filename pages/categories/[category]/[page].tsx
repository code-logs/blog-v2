import { NextPage } from 'next'
import Paginator from '../../../components/paginator/Paginator'
import { Post } from '../../../components/recent-posts/RecentPosts'
import PostCard from '../../../components/post-card/PostCard'
import blogConfig from '../../../config/blog.config'
import postsDatabase from '../../../database/post-database'

export async function getStaticPaths() {
  const posts = postsDatabase.find()
  const categories = posts.map((post) => post.category)
  const categoryPageMap = new Map<string, number>()
  categories.forEach((category) => {
    const posts = postsDatabase.findByCategory(category)
    const lastPage = Math.ceil(posts.length / blogConfig.pageLimit)

    categoryPageMap.set(category, lastPage)
  })

  let paths: string[] = []
  categoryPageMap.forEach((lastPage, category) => {
    Array(lastPage)
      .fill('')
      .map((_, idx) => idx + 1)
      .forEach((page) => {
        paths.push(`/categories/${encodeURI(category)}/${page}`)
      })
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { category: string; page: string }
}) {
  const category = decodeURI(context.params.category)
  const page = Number(context.params.page)
  const pageLimit = blogConfig.pageLimit
  const skip = (page - 1) * pageLimit

  const lastPage = Math.ceil(postsDatabase.findByCategory(category).length / pageLimit)
  const posts = postsDatabase.findByCategory(category, pageLimit, skip)

  return {
    props: {
      page,
      lastPage,
      posts,
      category,
    },
  }
}

const Category: NextPage<{
  page: number
  lastPage: number
  posts: Post[]
  category: string
}> = (props) => {
  const { page, lastPage, posts, category } = props

  return (
    <>
      <h1>{category}</h1>

      {Boolean(posts?.length) &&
        posts.map((post, idx) => (
          <PostCard titleLevel={2} key={idx} post={post} />
        ))}

      <Paginator
        page={page}
        lastPage={lastPage}
        baseURL={`${blogConfig.baseURL}/categories/${category}`}
      />
    </>
  )
}

export default Category
