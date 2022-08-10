import CommonMeta from '../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../components/google-adsense/GoogleAdsenseBanner'
import blogConfig from '../config/blog.config'
import { META_CONTENTS } from '../config/meta-contents'
import TitleUtil from '../utils/TitleUtil'

const NotFound = () => {
  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle(META_CONTENTS.NOT_FOUND.TITLE)}
        description={META_CONTENTS.NOT_FOUND.DESCRIPTION}
        url={blogConfig.baseURL}
        imageURL={'/icons/icon-512x512.png'}
      />
      <section>
        <h1>Page Not Found</h1>

        <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
      </section>
    </>
  )
}

export default NotFound
