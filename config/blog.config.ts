interface BlogConfig {
  title: string
  baseURL: string
  pageLimit: number
  author: string
  themeColor: string
  appleTouchIconPath: string
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  baseURL: 'https://code-logs.github.io',
  pageLimit: 20,
  author: 'Jay Lee',
  themeColor: '#fff',
  appleTouchIconPath: '/icons/icon-192x-192.png'
}

export default blogConfig
