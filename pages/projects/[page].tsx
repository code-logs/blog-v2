import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import CommonMeta from '../../components/CommonMeta'
import ContentCount from '../../components/ContentCount'
import NotFound from '../../components/NotFound'
import Paginator from '../../components/Paginator'
import SearchInput from '../../components/SearchInput'
import blogConfig from '../../config/blog.config'
import { META_CONTENTS } from '../../config/meta-contents'
import { Project } from '../../config/projects.config'
import projectDatabase from '../../database/project-database'
import PathUtil from '../../utils/PathUtil'
import TitleUtil from '../../utils/TitleUtil'

interface ProjectsProps {
  page: number
  lastPage: number
  projects: Project[]
  totalCount: number
}

export async function getStaticPaths() {
  const projects = projectDatabase.find()
  const lastPage = Math.ceil(projects.length / blogConfig.pageLimit)

  return {
    paths: Array(lastPage)
      .fill('')
      .map((_, idx) => `/projects/${idx + 1}`),
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { page: string } }) {
  const page = Number(context.params.page)
  const pageLimit = blogConfig.pageLimit
  const skip = (page - 1) * pageLimit
  const lastPage = Math.ceil(projectDatabase.find().length / pageLimit)
  const projects = projectDatabase.find(pageLimit, skip)
  const totalCount = projectDatabase.count()

  return {
    props: {
      page,
      lastPage,
      projects,
      totalCount,
    },
  }
}

export default function Projects(props: ProjectsProps) {
  const { page, totalCount } = props
  const [lastPage, setLastPage] = useState(1)
  const [projects, setProjects] = useState<Project[]>([])
  const [query, setQuery] = useState<string>()
  const route = useRouter()

  const [pageInitialized, setPageInitialized] = useState(false)

  useEffect(() => {
    const url = new URL(PathUtil.absolutePath(route.asPath))

    if (url.search) {
      const searchParams = new URLSearchParams(url.search)
      const query = searchParams.get('query')
      if (query) {
        setQuery(encodeURIComponent(query))
        const pageLimit = blogConfig.pageLimit
        const skip = (page - 1) * pageLimit
        setProjects(projectDatabase.query(query, pageLimit, skip))
        setLastPage(Math.ceil(projectDatabase.query(query).length / pageLimit))
      }
    } else {
      setLastPage(props.lastPage)
      setProjects(props.projects)
      setQuery(undefined)
    }

    setPageInitialized(true)
  }, [page, route, props])

  const renderCommonFragment = useCallback(
    () => (
      <>
        <CommonMeta
          title={TitleUtil.buildPageTitle(META_CONTENTS.PROJECTS.TITLE)}
          description={META_CONTENTS.PROJECTS.DESCRIPTION(page)}
          url={`${blogConfig.baseURL}/projects/${page}`}
          imageURL={'/icons/icon-512x512.png'}
          keywords={projects.map((project) => [...project.tags, project.title, project.description]).flat()}
        />

        <ContentCount mode={query ? 'query' : 'list'} count={query ? projects.length : totalCount} />
        <h1>Projects</h1>
      </>
    ),
    [page, projects, query, totalCount]
  )

  if (!pageInitialized) return renderCommonFragment()

  return (
    <>
      {renderCommonFragment()}

      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.currentTarget
          const query = new FormData(form).get('query')

          const url = new URL(location.href)
          url.pathname = '/projects/1'
          url.search = query ? `query=${encodeURIComponent(query.toString())}` : ''

          location.href = url.href
        }}
      >
        <SearchInput placeholder="Search..." name="query" defaultValue={query && decodeURIComponent(query)} />
      </form>

      {!!projects.length && (
        <>
          <CardList articleType="project" titleLevel={2} items={projects} />
          <Paginator page={page} lastPage={lastPage} query={query} baseURL={`${blogConfig.baseURL}/projects`} />
        </>
      )}

      {query && !projects.length && <NotFound condition={query} />}
    </>
  )
}
