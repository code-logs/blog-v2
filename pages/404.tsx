import CommonMeta from '../components/common-meta/CommonMeta'
import TitleUtil from '../utils/TitleUtil'
import blogConfig from '../config/blog.config'

const NotFound = () => {
  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle('Page Not Found')}
        description={'404 Page Not Found. Please move to right URL'}
        url={blogConfig.baseURL}
        imageURL={'/icons/icon-512x512.png'}
      />

      <h1>404 - Page Not Found</h1>
    </>
  )
}

export default NotFound
