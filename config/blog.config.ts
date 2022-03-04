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
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  pageLimit: 5,
  author: 'Jay Lee',
  themeColor: '#fff',
  appleTouchIconPath: '/icons/icon-192x-192.png',
  adsenseURL: process.env.NEXT_PUBLIC_ADSENSE_URL || '',
}

export default blogConfig
