import CommonMeta from '../../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../../components/google-adsense/GoogleAdsenseBanner'
import KakaoAdfitBanner from '../../components/kakao-adfit/KakaoAdfitBanner'
import blogConfig from '../../config/blog.config'
import TitleUtil from '../../utils/TitleUtil'

const About = () => {
  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle('About')}
        description={'Code Logs에 대하여'}
        url={`${blogConfig.baseURL}/about`}
        imageURL={'/icons/icon-512x512.png'}
      />

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
      <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" />
      <h1>About</h1>
    </>
  )
}

export default About
