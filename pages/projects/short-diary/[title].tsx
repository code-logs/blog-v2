import hljs from 'highlight.js'
import { useEffect, useRef } from 'react'
import MainAdsBanner from '../../../components/ads-banner/MainAdsBanner'
import CarouselBanner from '../../../components/CarouselBanner'
import CategoryPostGroup from '../../../components/CategoryPostGroup'
import CommonMeta from '../../../components/CommonMeta'
import Utterances from '../../../components/Utterrances'
import bannerConfig from '../../../config/banner.config'
import blogConfig from '../../../config/blog.config'
import { META_CONTENTS } from '../../../config/meta-contents'
import { Project } from '../../../config/projects.config'
import projectDatabase from '../../../database/project-database'
import { MarkdownUtil } from '../../../utils/MarkdownUtil'
import PathUtil from '../../../utils/PathUtil'
import PostUtil from '../../../utils/PostUtil'
import TitleUtil from '../../../utils/TitleUtil'
import style from './style.module.scss'

export interface PostDetailProps {
  project: Project
  content: string
  projectsByCategory: Project[]
  enableContentExplorer: boolean
}

export async function getStaticPaths() {
  const projects = projectDatabase.find()
  const paths = projects.map((project) => {
    return `/projects/${project.category}/${PostUtil.normalizeTitle(project.title)}`
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: { params: { title: string } }) {
  const project = projectDatabase.findByTitle(context.params.title)!
  const content = MarkdownUtil.getMarkdownContent(PostUtil.getMarkdownFilePath('project', project))
  const projectsByCategory = projectDatabase.findByCategory(project.category).filter((foundProject) => foundProject.title !== project.title)

  return {
    props: { project, content, projectsByCategory, enableContentExplorer: true },
  }
}

export default function ProjectDetailPage({ project, content, projectsByCategory }: PostDetailProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(META_CONTENTS.POST.TITLE(project.title))}
        description={META_CONTENTS.PROJECT.DESCRIPTION(project.title, project.description, project.category)}
        url={`${blogConfig.baseURL}/projects/${project.category}/${PostUtil.normalizeTitle(project.title)}`}
        imageURL={PathUtil.buildImagePath(project.thumbnailName)}
        keywords={[project.title, project.description, project.category]}
      />

      <article className={style.container} ref={containerRef}>
        <p className={style.publishedAt}>
          <span>{PostUtil.readablePublishedAt(project)}</span>
        </p>
        <section className={style.thumbnailWrapper}>
          <img src={PathUtil.buildImagePath(project.thumbnailName)} alt={project.description} width="400" height="300" />
        </section>

        <CarouselBanner banners={bannerConfig} />

        <section>
          <h1>{project.title}</h1>
          <p className={style.description}>{project.description}</p>
        </section>

        <section id="content" dangerouslySetInnerHTML={{ __html: content }}></section>
      </article>

      <MainAdsBanner />

      {!!projectsByCategory.length && (
        <section className={style.categoryGroup}>
          <h2>시리즈 더보기</h2>
        </section>
      )}

      {!!project.references?.length && (
        <section className={style.references}>
          <h2>참고</h2>
          <ul className={style.references}>
            {project.references.map((ref, idx) => (
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
