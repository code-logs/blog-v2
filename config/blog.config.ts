interface BlogConfig {
  title: string,
  baseURL: string,
  pageLimit: number
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  baseURL: 'https://code-logs.github.io',
  pageLimit: 20
}

export default blogConfig
