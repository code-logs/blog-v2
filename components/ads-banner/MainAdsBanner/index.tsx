import blogConfig from '../../../config/blog.config'
import GoogleAdsenseBanner from '../../GoogleAdsenseBanner'
import style from './style.module.scss'

export default function MainAdsBanner() {
  return (
    <section className={style.container}>
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.mainBannerAdSlot} />
      {/* <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" /> */}
    </section>
  )
}
