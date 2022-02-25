import { useEffect, useState } from 'react'

import { NextPage } from 'next'
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
  const { page } = props
  const [lastPage, setLastPage] = useState(props.lastPage)
  const [posts, setPosts] = useState(props.posts)
  const [query, setQuery] = useState<string>()
  const router = useRouter()

  useEffect(() => {
    const url = new URL(PathUtil.absolutePath(router.asPath))

    if (url.search) {
      const searchParams = new URLSearchParams(url.search)
      const query = searchParams.get('query')
      if (query) {
        setQuery(encodeURI(query))
        const pageLimit = blogConfig.pageLimit
        const skip = (page - 1) * pageLimit
        setPosts(postsDatabase.query(query, pageLimit, skip))
        setLastPage(Math.ceil(postsDatabase.query(query).length / pageLimit))
      }
    }
  }, [page, router.asPath])

  return (
    <>
      <h1>Posts</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.currentTarget
          const query = new FormData(form).get('query')
          if (!query) return

          const url = new URL(location.href)
          url.pathname = '/posts/1'
          url.search = `query=${encodeURI(query.toString())}`

          location.href = url.href
        }}
      >
        <SearchInput placeholder="Search..." name="query" />
      </form>

      {Boolean(posts?.length) &&
        posts.map((post, idx) => (
          <PostCard titleLevel={2} key={idx} post={post} />
        ))}

      <Paginator
        page={page}
        lastPage={lastPage}
        query={query}
        baseURL={`${blogConfig.baseURL}/posts`}
      />
    </>
  )
}

export default Posts
