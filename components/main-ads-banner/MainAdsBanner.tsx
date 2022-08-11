import blogConfig from "../../config/blog.config"
import GoogleAdsenseBanner from "../google-adsense/GoogleAdsenseBanner"
import KakaoAdfitBanner from "../kakao-adfit/KakaoAdfitBanner"

const MainAdsBanner = () => (
  <section>
    <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
    <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" />
  </section>
)

export default MainAdsBanner