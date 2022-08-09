import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CommonMeta from '../../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../../components/google-adsense/GoogleAdsenseBanner'
import Paginator from '../../components/paginator/Paginator'
import PostCard from '../../components/post-card/PostCard'
import SearchInput from '../../components/search-input/SearchInput'
import blogConfig from '../../config/blog.config'
import { Post } from '../../config/posts.config'
import postsDatabase from '../../database/post-database'
import PathUtil from '../../utils/PathUtil'
import TitleUtil from '../../utils/TitleUtil'
import styles from './Posts.module.scss'

interface PostsProps {
  page: number,
  lastPage: number,
  posts: Post[]
  totalCount: number
}


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
  const totalCount = postsDatabase.count()

  return {
    props: {
      page,
      lastPage,
      posts,
      totalCount
    },
  }
}

const Posts: NextPage<PostsProps> = (props) => {
  const { page, totalCount } = props
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
        setQuery(encodeURIComponent(query))
        const pageLimit = blogConfig.pageLimit
        const skip = (page - 1) * pageLimit
        setPosts(postsDatabase.query(query, pageLimit, skip))
        setLastPage(Math.ceil(postsDatabase.query(query).length / pageLimit))
      }
    }
  }, [page, router.asPath])

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle('Posts')}
        description={`포스팅 목록 - ${page} 페이지`}
        url={`${blogConfig.baseURL}/posts/${page}`}
        imageURL={'/icons/icon-512x512.png'}
        keywords={posts.map((post) => [...post.tags, post.title, post.description]).flat()}
      />

      <span className={styles.totalCount}>Total posts {totalCount}</span>
      <h1>Posts </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.currentTarget
          const query = new FormData(form).get('query')
          if (!query) return

          const url = new URL(location.href)
          url.pathname = '/posts/1'
          url.search = `query=${encodeURIComponent(query.toString())}`

          location.href = url.href
        }}
      >
        <SearchInput placeholder="Search..." name="query" />
      </form>

      {Boolean(posts?.length) && posts.map((post, idx) => <PostCard titleLevel={2} key={idx} post={post} />)}


      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />

      <Paginator page={page} lastPage={lastPage} query={query} baseURL={`${blogConfig.baseURL}/posts`} />
    </>
  )
}

export default Posts
