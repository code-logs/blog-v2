import CommonMeta from '../components/CommonMeta'
import MainAdsBanner from '../components/ads-banner/MainAdsBanner'
import blogConfig from '../config/blog.config'
import { META_CONTENTS } from '../config/meta-contents'
import TitleUtil from '../utils/TitleUtil'

export default function NotFound() {
  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(META_CONTENTS.NOT_FOUND.TITLE)}
        description={META_CONTENTS.NOT_FOUND.DESCRIPTION}
        url={blogConfig.baseURL}
        imageURL={'/icons/icon-512x512.png'}
      />
      <section>
        <h1>페이지를 찾을 수 없습니다.</h1>
      </section>

      <MainAdsBanner />
    </>
  )
}
