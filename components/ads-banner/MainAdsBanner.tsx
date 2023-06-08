import blogConfig from '../../config/blog.config'
import GoogleAdsenseBanner from '../GoogleAdsenseBanner'
import styles from './MainAdsBanner.module.scss'

const MainAdsBanner = () => (
  <section className={styles.container}>
    <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot={blogConfig.googleAdsense.mainBannerAdSlot} />
    {/* <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" /> */}
  </section>
)

export default MainAdsBanner
