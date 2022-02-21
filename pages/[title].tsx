import hljs from 'highlight.js'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { Post } from '../components/recent-posts/RecentPosts'
import Utterances from '../components/utterrances/Utterrances'
import postsDatabase from '../database/post-database'
import { MarkdownUtil } from '../utils/MarkdownUtil'
import PathUtil from '../utils/PathUtil'
import PostUtil from '../utils/PostUtil'
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
  const content = MarkdownUtil.getMarkdownContent(
    PostUtil.getMarkdownFilePath(post)
  )

  return {
    props: { post, content },
  }
}

const PostDetail: NextPage<{ post: Post; content: string }> = (props: {
  post: Post
  content: string
}) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <article className={styles.container}>
        <section className={styles.thumbnailWrapper}>
          {props.post.thumbnailName && (
            <img
              src={PathUtil.buildImagePath(props.post.thumbnailName)}
              alt={props.post.description}
            />
          )}
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
        <Utterances
          repo={'code-logs/blog-v2'}
          theme={'github-light'}
          issueTerm={'title'}
          issueLabel={'Comment'}
        />
      </section>
    </>
  )
}

export default PostDetail
