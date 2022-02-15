import blogConfig from "../config/blog.config"

class PathUtil {
  public static absolutePath(path: string, baseURL?: string): string {
    path = path.replace(/^\//, '')
    return [baseURL || blogConfig.baseURL, path].join('/')
  }
}

export default PathUtil
