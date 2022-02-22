interface BlogConfig {
  title: string,
  baseURL: string,
  pageLimit: number

  author: string
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  // baseURL: 'https://code-logs.github.io',
  baseURL: 'http://localhost:3000',
  pageLimit: 20,
  author: 'Jay Lee'
}

export default blogConfig
