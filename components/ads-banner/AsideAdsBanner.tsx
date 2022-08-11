import blogConfig from '../../config/blog.config'
import useIsMobile from '../../hooks/useIsMobile'
import GoogleAdsenseBanner from '../google-adsense/GoogleAdsenseBanner'
import styles from './AsideAdsBanner.module.scss'

const AsideAdsBanner = () => {
  const isMobile = useIsMobile(true)

  return isMobile ? (
    <></>
  ) : (
    <section className={styles.container}>
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.asideBannerAdSlot} />
      {/* <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID1} position="aside" />
          <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID2} position="aside" /> */}
    </section>
  )
}

export default AsideAdsBanner
