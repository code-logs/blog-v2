interface BlogConfig {
  title: string,
  baseURL: string,
  pageLimit: number
}

const blogConfig: BlogConfig = {
  title: 'Code Logs',
  baseURL: 'http://localhost:3000',
  pageLimit: 20
}

export default blogConfig
