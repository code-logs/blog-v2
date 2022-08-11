interface BlogConfig {
  title: string
  baseURL: string
  pageLimit: number
  recentPostsLimit: number
  author: string
  themeColor: string
  appleTouchIconPath: string
  kakaoAdfitUnitIDs: {
    mainBannerID: string
    asideBannerID1: string
    asideBannerID2: string
  },
  googleAdsense: {
    adClient: string
  }
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  pageLimit: 10,
  recentPostsLimit: 5,
  author: 'Jay Lee',
  themeColor: '#fff',
  appleTouchIconPath: '/icons/icon-192x-192.png',
  kakaoAdfitUnitIDs: {
    mainBannerID: 'DAN-77VcMo8qRv55JIat',
    asideBannerID1: 'DAN-sspT2WysGuBsayRb',
    asideBannerID2: 'DAN-36TKfTwSMmZWVg3r'
  },
  googleAdsense: {
    adClient: 'ca-pub-7134579063537339'
  }
}

export default blogConfig
