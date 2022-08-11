import type { AppProps } from 'next/app'
import 'normalize.css'
import Footer from '../components/footer/Footer'
import GoogleAdsenseBanner from '../components/google-adsense/GoogleAdsenseBanner'
import GTagScript from '../components/gtag-script/GTagScript'
import Header from '../components/header/Header'
import KakaoAdfitBanner from '../components/kakao-adfit/KakaoAdfitBanner'
import KakaoAdfitScript from '../components/kakao-adfit/KakaoAdfitScript'
import SWScript from '../components/sw-script/SWScript'
import blogConfig from '../config/blog.config'
import gaConfig from '../config/ga.config'
import menus from '../config/menu.config'
import socialIcons from '../config/social.config'
import '../styles/globals.scss'
import '../styles/highlight.scss'

const MainApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GTagScript gaID={gaConfig.id} />
      <KakaoAdfitScript />
      <SWScript />
      <Header title={blogConfig.title} socialIcons={socialIcons} menus={menus} />

      <main>
        <Component {...pageProps} />
      </main>

      <aside>
        <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.mainBannerAdClient} adSlot={blogConfig.googleAdsense.asideBannerAdClient} />
        <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.mainBannerAdClient} adSlot={blogConfig.googleAdsense.asideBannerAdClient} />
        <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.mainBannerAdClient} adSlot={blogConfig.googleAdsense.asideBannerAdClient} />
        {/* <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID1} position="aside" />
        <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.asideBannerID2} position="aside" /> */}
      </aside>

      <Footer author={blogConfig.author} />
    </>
  )
}

export default MainApp
