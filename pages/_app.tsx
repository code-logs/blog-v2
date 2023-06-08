import type { AppProps } from 'next/app'
import 'normalize.css'
import ContentExplorer from '../components/ContentExplorer'
import Footer from '../components/Footer'
import GTagScript from '../components/GtagScript'
import Header from '../components/Header'
import NaverAnalyticsScript from '../components/NaverAnalyticsScript'
import SWScript from '../components/SWScript'
import AsideAdsBanner from '../components/ads-banner/AsideAdsBanner'
import blogConfig from '../config/blog.config'
import menus from '../config/menu.config'
import socialIcons from '../config/social.config'
import useIsMobile from '../hooks/useIsMobile'
import '../styles/globals.scss'
import '../styles/highlight.scss'

export default function MainApp({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile(true)

  return (
    <>
      <GTagScript gaID={blogConfig.googleAnalytics.id} />
      <NaverAnalyticsScript issuedId={blogConfig.naverAnalytics.id} />
      <SWScript />
      <Header title={blogConfig.title} socialIcons={socialIcons} menus={menus} />

      <main>
        <Component {...pageProps} />
      </main>

      <aside>
        {!isMobile && pageProps?.enableContentExplorer && <ContentExplorer />}
        {!isMobile && <AsideAdsBanner />}
      </aside>

      <Footer author={blogConfig.author} />
    </>
  )
}
