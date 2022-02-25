import RecentPosts, { Post } from '../components/recent-posts/RecentPosts'
import TagIndexer, { TagWithCount } from '../components/tag-indexer/TagIndexer'

import CategoryIndexer from '../components/category-indexer/CategoryIndexer'
import CommonMeta from '../components/common-meta/CommonMeta'
import type { NextPage } from 'next'
import TitleUtil from '../utils/TitleUtil'
import blogConfig from '../config/blog.config'
import postsDatabase from '../database/post-database'
import styles from './Home.module.scss'

export async function getStaticProps() {
  const posts = postsDatabase.find()

  const recentPosts = postsDatabase.find(5)
  const categories = Array.from(new Set(posts.map((post) => post.category))).sort()

  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()))

  const tagsWithCount = tags.reduce((tagsWithCount, tag) => {
    let count = 0
    posts.forEach((post) => {
      if (post.tags?.includes(tag!)) count++
    })

    tagsWithCount.push({ tag: tag!, count })

    return tagsWithCount
  }, [] as TagWithCount[])

  return { props: { recentPosts, categories, tagsWithCount } }
}

const Home: NextPage<{
  recentPosts: Post[]
  categories: string[]
  tagsWithCount: TagWithCount[]
}> = (props) => {
  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle('Home')}
        description={'Code Logs에 오신 것을 환영 합니다.'}
        keywords={['Code Logs', 'Web', 'Development', 'Web development']}
        url={blogConfig.baseURL}
        imageURL={'/icons/icon-512x512.png'}
      />

      <h1>Home</h1>

      <RecentPosts posts={props.recentPosts} />

      <section className={styles.index}>
        <CategoryIndexer categories={props.categories} />

        <TagIndexer tagsWithCount={props.tagsWithCount} limit={20} />
      </section>
    </>
  )
}

export default Home
