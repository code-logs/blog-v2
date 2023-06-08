import blogConfig from '../../../config/blog.config'
import GoogleAdsenseBanner from '../../GoogleAdsenseBanner'
import style from './style.module.scss'

export default function AsideAdsBanner() {
  return (
    <section className={style.container}>
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      {/* <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID1} position="aside" />
    <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID2} position="aside" /> */}
    </section>
  )
}
