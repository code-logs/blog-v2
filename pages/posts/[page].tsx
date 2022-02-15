import { GetStaticProps, NextPage } from 'next'

import Paginator from '../../components/paginator/Paginator'
import PathUtil from '../../utils/PathUtil'
import { Post } from '../../components/recent-posts/RecentPosts'
import PostCard from '../../components/post-card/PostCard'
import SearchInput from '../../components/search-input/SearchInput'
import blogConfig from '../../config/blog.config'
import postsDatabase from '../../database/post-database'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const posts = postsDatabase.find()
  const lastPage = Math.ceil(posts.length / blogConfig.pageLimit)

  return {
    paths: Array(lastPage)
      .fill('')
      .map((_, idx) => `/posts/${idx + 1}`),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { page: string } }) {
  const page = Number(context.params.page)
  const pageLimit = blogConfig.pageLimit
  const skip = (page - 1) * pageLimit
  const lastPage = Math.ceil(postsDatabase.find().length / pageLimit)
  const posts = postsDatabase.find(pageLimit, skip)

  return {
    props: {
      page,
      lastPage,
      posts,
    },
  }
}

const Posts: NextPage<{ page: number; lastPage: number; posts: Post[] }> = (
  props
) => {
  // const router = useRouter()
  // const url = new URL(PathUtil.absolutePath(router.asPath))

  // if (url.search) {
  //   const searchParams = new URLSearchParams(url.search)
  //   const query = searchParams.get('query')
  //   if (query) posts = postsDatabase.query(query)
  // }

  return (
    <>
      <h2>Posts</h2>
      <form>
        <SearchInput placeholder="Search..." name="query" />
      </form>

      {props.posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}

      <Paginator page={props.page} lastPage={props.lastPage} />
    </>
  )
}

export default Posts
