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
  let description = ''
  let imageURL = ''
  let keywords: string[] = []

  const url = PathUtil.absolutePath(router.asPath)
  switch (router.pathname) {
    case '/posts/[page]':
      title = 'Posts'
      break

    case '/tags':
      title = 'Tags'
      break

    case '/about':
      title = 'About'

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
      title = ''
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
