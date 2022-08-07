import hljs from 'highlight.js'
import { NextPage } from 'next'
import { useEffect } from 'react'
import CategoryPostGroup from '../components/category-post-group/CategoryPostGroup'
import CommonMeta from '../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../components/google-adsense/GoogleAdsenseBanner'
import PostSeriesLink from '../components/post-series-link/PostSeriesLink'
import Utterances from '../components/utterrances/Utterrances'
import blogConfig from '../config/blog.config'
import { Post } from '../config/posts.config'
import postsDatabase from '../database/post-database'
import useHumanReadableDate from '../hooks/useHumanReadableDate'
import { MarkdownUtil } from '../utils/MarkdownUtil'
import PathUtil from '../utils/PathUtil'
import PostUtil from '../utils/PostUtil'
import TitleUtil from '../utils/TitleUtil'
import styles from './PostDetail.module.scss'

export interface PostDetailPageProps {
  post: Post
  content: string
  postsByCategory: Post[]
}

export async function getStaticPaths() {
  const posts = postsDatabase.find()
  const titles = posts.map((post) => post.title)

  return {
    paths: titles.map((title) => '/' + PostUtil.normalizeTitle(title)),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { title: string } }) {
  const post = postsDatabase.findByTitle(context.params.title)!
  const content = MarkdownUtil.getMarkdownContent(PostUtil.getMarkdownFilePath(post))
  const postsByCategory = postsDatabase.findByCategory(post.category).filter((foundPost) => foundPost.title !== post.title)

  return {
    props: { post, content, postsByCategory },
  }
}

const PostDetail: NextPage<PostDetailPageProps> = ({ post, content, postsByCategory }: PostDetailPageProps) => {
  const publishedAt = useHumanReadableDate(new Date(post.publishedAt))

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(post.title)}
        description={post.description}
        url={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(post.title)}`}
        imageURL={PathUtil.buildImagePath(post.thumbnailName)}
        keywords={[...post.tags, post.title, post.description, post.category]}
      />

      <article className={styles.container}>
        <p className={styles.publishedAt}>
          <span>{publishedAt}</span>
        </p>
        <section className={styles.thumbnailWrapper}>
          <img src={PathUtil.buildImagePath(post.thumbnailName)} alt={post.description} />
        </section>

        <section>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
        </section>

        <section dangerouslySetInnerHTML={{ __html: content }}></section>
      </article>

      {post.series && (
        <section className={styles.relatedPosting}>
          <h2>연관 포스팅</h2>
          <PostSeriesLink post={post} />
        </section>
      )}

      {!!postsByCategory.length && (
        <section className={styles.categoryGroup}>
          <h2>카테고리 더보기</h2>
          <CategoryPostGroup posts={postsByCategory} />
        </section>
      )}

      {!!post.references?.length && (
        <section className={styles.references}>
          <h2>참고</h2>
          <ul className={styles.references}>
            {post.references.map((ref, idx) => (
              <li key={idx}>
                <a href={encodeURIComponent(ref.url)} target="_blank" rel="noreferrer">
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.utterances}>
        <h2>댓글</h2>
        <Utterances repo={'code-logs/code-logs.github.io'} theme={'preferred-color-scheme'} issueTerm={'title'} issueLabel={'Comment'} />
      </section>

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
    </>
  )
}

export default PostDetail
