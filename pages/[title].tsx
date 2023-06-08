import hljs from 'highlight.js'
import { useEffect, useRef } from 'react'
import CarouselBanner from '../components/CarouselBanner'
import CategoryPostGroup from '../components/CategoryPostGroup'
import CommonMeta from '../components/CommonMeta'
import PostSeriesLink from '../components/PostSeriesLink'
import MainAdsBanner from '../components/ads-banner/MainAdsBanner'
import Utterances from '../components/Utterrances'
import bannerConfig from '../config/banner.config'
import blogConfig from '../config/blog.config'
import { META_CONTENTS } from '../config/meta-contents'
import { Post } from '../config/posts.config'
import postsDatabase from '../database/post-database'
import { MarkdownUtil } from '../utils/MarkdownUtil'
import PathUtil from '../utils/PathUtil'
import PostUtil from '../utils/PostUtil'
import TitleUtil from '../utils/TitleUtil'
import style from './PostDetail.module.scss'

export interface PostDetailProps {
  post: Post
  content: string
  postsByCategory: Post[]
  enableContentExplorer: boolean
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
  const content = MarkdownUtil.getMarkdownContent(PostUtil.getMarkdownFilePath('post', post))
  const postsByCategory = postsDatabase.findByCategory(post.category).filter((foundPost) => foundPost.title !== post.title)

  return {
    props: { post, content, postsByCategory, enableContentExplorer: true },
  }
}

export default function PostDetail({ post, content, postsByCategory }: PostDetailProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(META_CONTENTS.POST.TITLE(post.title))}
        description={META_CONTENTS.POST.DESCRIPTION(post.title, post.description, post.category, post.tags)}
        url={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(post.title)}`}
        imageURL={PathUtil.buildImagePath(post.thumbnailName)}
        keywords={[...post.tags, post.title, post.description, post.category]}
      />

      <article className={style.container} ref={containerRef}>
        <p className={style.publishedAt}>
          <span>{PostUtil.readablePublishedAt(post)}</span>
        </p>
        <section className={style.thumbnailWrapper}>
          <img src={PathUtil.buildImagePath(post.thumbnailName)} alt={post.description} width="400" height="300" />
        </section>

        <CarouselBanner banners={bannerConfig} />

        <section>
          <h1>{post.title}</h1>
          <p className={style.description}>{post.description}</p>
        </section>

        <section id="content" dangerouslySetInnerHTML={{ __html: content }}></section>
      </article>

      <MainAdsBanner />

      {post.series && (
        <section className={style.relatedPosting}>
          <h2>연관 포스팅</h2>
          <PostSeriesLink post={post} />
        </section>
      )}

      {!!postsByCategory.length && (
        <section className={style.categoryGroup}>
          <h2>카테고리 더보기</h2>
          <CategoryPostGroup posts={postsByCategory} />
        </section>
      )}

      {!!post.references?.length && (
        <section className={style.references}>
          <h2>참고</h2>
          <ul className={style.references}>
            {post.references.map((ref, idx) => (
              <li key={idx}>
                <a href={ref.url} target="_blank" rel="noreferrer">
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={style.utterances}>
        <h2>댓글</h2>
        <Utterances repo={'code-logs/code-logs.github.io'} theme={'preferred-color-scheme'} issueTerm={'title'} issueLabel={'Comment'} />
      </section>
    </>
  )
}
