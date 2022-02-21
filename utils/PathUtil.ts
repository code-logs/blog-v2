import blogConfig from '../config/blog.config'

class PathUtil {
  public static absolutePath(path: string, baseURL?: string): string {
    path = path.replace(/^\//, '')
    return [baseURL || blogConfig.baseURL, path].join('/')
  }

  public static buildImagePath(fileName: string) {
    return `/assets/images/${fileName}`
  }
}

export default PathUtil
