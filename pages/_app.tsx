import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'normalize.css'
import CommonHead from '../components/CommonHead/CommonHead'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
import blogConfig from '../config/blog.config'
import gaConfig from '../config/ga.config'
import menus from '../config/menu.config'
import socialIcons from '../config/social.config'
import postsDatabase from '../database/post-database'
import '../styles/globals.scss'
import '../styles/highlight.scss'
import PathUtil from '../utils/PathUtil'

const MainApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  let title = ''
  let description = 'Code Logs에 오신 것을 환영 합니다.'
  let imageURL = '/assets/icons/icon-512x512.png'
  let keywords: string[] = []

  const url = PathUtil.absolutePath(router.asPath)
  switch (router.pathname) {
    case '/posts/[page]':
      title = 'Posts'
      description = `포스팅 리스트 페이지 ${router.query.page}`
      break

    case '/tags':
      title = 'Tags'
      description = 'Code Logs에 작성된 포스팅을 Tag를 기준으로 색인 할 수 있습니다.'
      break

    case '/about':
      title = 'About'
      description = 'Code Logs에 대햐여'

    case '/[title]':
      const splitPath = router.asPath.split('/')
      const foundPost = postsDatabase.findByNormalizedTitle(
        decodeURI(splitPath[splitPath.length - 1])
      )

      if (foundPost) {
        title = foundPost.title
        description = foundPost.description
        imageURL = PathUtil.buildImagePath(foundPost.thumbnailName)
        keywords = foundPost.tags
      }

      break

    default:
      title = 'Home'
      description = 'Code Logs에 오신 것을 환영 합니다. Web 개발과 관련된 컨텐츠를 포스팅하는 개인 공간 입니다.'
      break
  }

  return (
    <>
      <CommonHead
        gaID={gaConfig.id}
        siteName={blogConfig.title}
        title={title}
        description={description}
        url={url}
        imageURL={imageURL}
        author={'Jay Lee'}
        canonicalURL={url}
        keywords={keywords}
      />

      <Header
        title={blogConfig.title}
        socialIcons={socialIcons}
        menus={menus}
      />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MainApp
