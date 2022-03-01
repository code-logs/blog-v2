interface BlogConfig {
  title: string
  baseURL: string
  pageLimit: number
  author: string
  themeColor: string
  appleTouchIconPath: string
  adsenseURL: string
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  baseURL: 'https://code-logs.github.io',
  pageLimit: 5,
  author: 'Jay Lee',
  themeColor: '#fff',
  appleTouchIconPath: '/icons/icon-192x-192.png',
  adsenseURL: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134579063537339'
}

export default blogConfig
