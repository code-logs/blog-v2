import hljs from 'highlight.js'
import { NextPage } from 'next'
import { useEffect } from 'react'
import CommonMeta from '../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../components/google-adsense/GoogleAdsenseBanner'
import KakaoAdfitBanner from '../components/kakao-adfit/KakaoAdfitBanner'
import { Post } from '../components/recent-posts/RecentPosts'
import Utterances from '../components/utterrances/Utterrances'
import blogConfig from '../config/blog.config'
import postsDatabase from '../database/post-database'
import useHumanReadableDate from '../hooks/useHumanReadableDate'
import { MarkdownUtil } from '../utils/MarkdownUtil'
import PathUtil from '../utils/PathUtil'
import PostUtil from '../utils/PostUtil'
import TitleUtil from '../utils/TitleUtil'
import styles from './PostDetail.module.scss'

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

  return {
    props: { post, content },
  }
}

const PostDetail: NextPage<{ post: Post; content: string }> = (props: { post: Post; content: string }) => {
  const publishedAt = useHumanReadableDate(new Date(props.post.publishedAt))

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(props.post.title)}
        description={props.post.description}
        url={`${blogConfig.baseURL}/${PostUtil.normalizeTitle(props.post.title)}`}
        imageURL={PathUtil.buildImagePath(props.post.thumbnailName)}
        keywords={[...props.post.tags, props.post.title, props.post.description, props.post.category]}
      />

      <article className={styles.container}>
        <p className={styles.publishedAt}>
          <span>{publishedAt}</span>
        </p>
        <section className={styles.thumbnailWrapper}>
          <img src={PathUtil.buildImagePath(props.post.thumbnailName)} alt={props.post.description} />
        </section>

        <section>
          <h1>{props.post.title}</h1>
          <p className={styles.description}>{props.post.description}</p>
        </section>

        <section dangerouslySetInnerHTML={{ __html: props.content }}></section>

        {props.post.references?.length && (
          <section>
            <h2>References</h2>
            <ul className={styles.references}>
              {props.post.references.map((ref, idx) => (
                <li key={idx}>
                  <a href={ref.url} target="_blank" rel="noreferrer">
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <section className={styles.utterances}>
        <h2>Comments</h2>
        <Utterances repo={'code-logs/code-logs.github.io'} theme={'preferred-color-scheme'} issueTerm={'title'} issueLabel={'Comment'} />
      </section>

      <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" />

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
    </>
  )
}

export default PostDetail
